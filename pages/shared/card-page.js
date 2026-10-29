// Add shared mobile tab navigation and forward iframe keyboard actions to the parent dialog.
// Each tab ID maps to the page route used by the desktop dialog and mobile menu.
const mobileTabs = [
  { id: "elemental", label: "Periodic table", path: "pages/elemental.html" },
  { id: "ionic", label: "Ionic bond", path: "pages/ionic.html" },
  { id: "covalent", label: "Covalent bond", path: "pages/covalent.html" },
  { id: "metallic", label: "Metallic bond", path: "pages/metallic.html" }
];
const currentPage = document.body.dataset.page;
// Identify the active tab so the compact mobile header reflects the current iframe page.
const currentTab = mobileTabs.find((tab) => tab.id === currentPage);
const header = document.createElement("header");
const menuToggle = document.createElement("button");
const currentLabel = document.createElement("span");
const menu = document.createElement("nav");
const footer = document.createElement("footer");
const backButton = document.createElement("button");
const homeButton = document.createElement("button");

// Build the hamburger button and its three decorative bars without relying on icon fonts.
header.className = "mobile-page-header";
menuToggle.className = "mobile-page-menu-toggle";
menuToggle.type = "button";
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Show page tabs");
for (let line = 0; line < 3; line += 1) {
  const bar = document.createElement("span");
  bar.setAttribute("aria-hidden", "true");
  menuToggle.append(bar);
}
currentLabel.className = "mobile-page-current";
currentLabel.textContent = currentTab?.label || "About Editor";
menu.id = "mobile-page-menu";
menu.className = "mobile-page-menu";
menu.setAttribute("aria-label", "Page tabs");
menu.hidden = true;

// Populate keyboard-accessible mobile lesson buttons and mark the active page semantically.
mobileTabs.forEach((tab) => {
  const link = document.createElement("button");
  link.type = "button";
  link.textContent = tab.label;
  if (tab.id === currentPage) link.setAttribute("aria-current", "page");
  link.addEventListener("click", () => {
    window.parent.postMessage({ type: "welcome:navigate", page: tab.id }, "*");
  });
  menu.append(link);
});

// Keep the menu disclosure state synchronized with whether its navigation is visible.
menuToggle.setAttribute("aria-controls", menu.id);
menuToggle.addEventListener("click", () => {
  menu.hidden = !menu.hidden;
  menuToggle.setAttribute("aria-expanded", String(!menu.hidden));
});

// Provide persistent mobile back/home actions that ask the parent document to close its dialog.
header.append(menuToggle, currentLabel);
footer.className = "mobile-page-footer";
backButton.type = "button";
backButton.setAttribute("aria-label", "Back to the main page");
backButton.textContent = "← Back";
homeButton.type = "button";
homeButton.setAttribute("aria-label", "Home");
homeButton.textContent = "⌂";
[backButton, homeButton].forEach((button) => {
  button.addEventListener("click", () => {
    window.parent.postMessage({ type: "welcome:close" }, "*");
  });
});
footer.append(backButton, homeButton);
document.body.append(header, menu, footer);

// Escape first closes the mobile tab menu, then dismisses the expanded page.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!menu.hidden) {
      event.preventDefault();
      menu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
      return;
    }
    event.preventDefault();
    window.parent.postMessage({ type: "welcome:close" }, "*");
  }

  // Return focus to the parent dialog's close control when Tab would leave the iframe.
  if (event.key === "Tab") {
    const focusableContent = [...document.querySelectorAll(
      'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.getClientRects().length > 0);
    const first = focusableContent[0];
    const last = focusableContent.at(-1);
    const active = document.activeElement;
    const leavingContent = focusableContent.length === 0
      || (event.shiftKey && (active === first || active === document.body))
      || (!event.shiftKey && active === last);

    if (leavingContent) {
      event.preventDefault();
      window.parent.postMessage({ type: "welcome:focus-close" }, "*");
    }
  }
});
