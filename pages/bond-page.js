// Each element record stores its symbol, name, category, and simplified valence count.
const periodicElements = [
  ["H", "Hydrogen", "nonmetal", 1], ["He", "Helium", "noble gas", 2],
  ["Li", "Lithium", "metal", 1], ["Be", "Beryllium", "metal", 2],
  ["B", "Boron", "metalloid", 3], ["C", "Carbon", "nonmetal", 4],
  ["N", "Nitrogen", "nonmetal", 5], ["O", "Oxygen", "nonmetal", 6],
  ["F", "Fluorine", "nonmetal", 7], ["Ne", "Neon", "noble gas", 8],
  ["Na", "Sodium", "metal", 1], ["Mg", "Magnesium", "metal", 2],
  ["Al", "Aluminium", "metal", 3], ["Si", "Silicon", "metalloid", 4],
  ["P", "Phosphorus", "nonmetal", 5], ["S", "Sulfur", "nonmetal", 6],
  ["Cl", "Chlorine", "nonmetal", 7], ["Ar", "Argon", "noble gas", 8],
  ["K", "Potassium", "metal", 1], ["Ca", "Calcium", "metal", 2],
  ["Sc", "Scandium", "metal", 3], ["Ti", "Titanium", "metal", 4],
  ["V", "Vanadium", "metal", 5], ["Cr", "Chromium", "metal", 6],
  ["Mn", "Manganese", "metal", 7], ["Fe", "Iron", "metal", 8],
  ["Co", "Cobalt", "metal", 9], ["Ni", "Nickel", "metal", 10],
  ["Cu", "Copper", "metal", 11], ["Zn", "Zinc", "metal", 12],
  ["Ga", "Gallium", "metal", 3], ["Ge", "Germanium", "metalloid", 4],
  ["As", "Arsenic", "metalloid", 5], ["Se", "Selenium", "nonmetal", 6],
  ["Br", "Bromine", "nonmetal", 7], ["Kr", "Krypton", "noble gas", 8],
  ["Rb", "Rubidium", "metal", 1], ["Sr", "Strontium", "metal", 2],
  ["Y", "Yttrium", "metal", 3], ["Zr", "Zirconium", "metal", 4],
  ["Nb", "Niobium", "metal", 5], ["Mo", "Molybdenum", "metal", 6],
  ["Tc", "Technetium", "metal", 7], ["Ru", "Ruthenium", "metal", 8],
  ["Rh", "Rhodium", "metal", 9], ["Pd", "Palladium", "metal", 10],
  ["Ag", "Silver", "metal", 11], ["Cd", "Cadmium", "metal", 12],
  ["In", "Indium", "metal", 3], ["Sn", "Tin", "metal", 4],
  ["Sb", "Antimony", "metalloid", 5], ["Te", "Tellurium", "metalloid", 6],
  ["I", "Iodine", "nonmetal", 7], ["Xe", "Xenon", "noble gas", 8],
  ["Cs", "Caesium", "metal", 1], ["Ba", "Barium", "metal", 2],
  ["La", "Lanthanum", "metal", 3], ["Ce", "Cerium", "metal", 3],
  ["Pr", "Praseodymium", "metal", 3], ["Nd", "Neodymium", "metal", 3],
  ["Pm", "Promethium", "metal", 3], ["Sm", "Samarium", "metal", 3],
  ["Eu", "Europium", "metal", 3], ["Gd", "Gadolinium", "metal", 3],
  ["Tb", "Terbium", "metal", 3], ["Dy", "Dysprosium", "metal", 3],
  ["Ho", "Holmium", "metal", 3], ["Er", "Erbium", "metal", 3],
  ["Tm", "Thulium", "metal", 3], ["Yb", "Ytterbium", "metal", 3],
  ["Lu", "Lutetium", "metal", 3], ["Hf", "Hafnium", "metal", 4],
  ["Ta", "Tantalum", "metal", 5], ["W", "Tungsten", "metal", 6],
  ["Re", "Rhenium", "metal", 7], ["Os", "Osmium", "metal", 8],
  ["Ir", "Iridium", "metal", 9], ["Pt", "Platinum", "metal", 10],
  ["Au", "Gold", "metal", 11], ["Hg", "Mercury", "metal", 12],
  ["Tl", "Thallium", "metal", 3], ["Pb", "Lead", "metal", 4],
  ["Bi", "Bismuth", "metal", 5], ["Po", "Polonium", "metalloid", 6],
  ["At", "Astatine", "metalloid", 7], ["Rn", "Radon", "noble gas", 8],
  ["Fr", "Francium", "metal", 1], ["Ra", "Radium", "metal", 2],
  ["Ac", "Actinium", "metal", 3], ["Th", "Thorium", "metal", 4],
  ["Pa", "Protactinium", "metal", 5], ["U", "Uranium", "metal", 6],
  ["Np", "Neptunium", "metal", 7], ["Pu", "Plutonium", "metal", 8],
  ["Am", "Americium", "metal", 3], ["Cm", "Curium", "metal", 3],
  ["Bk", "Berkelium", "metal", 3], ["Cf", "Californium", "metal", 3],
  ["Es", "Einsteinium", "metal", 3], ["Fm", "Fermium", "metal", 3],
  ["Md", "Mendelevium", "metal", 3], ["No", "Nobelium", "metal", 3],
  ["Lr", "Lawrencium", "metal", 3], ["Rf", "Rutherfordium", "metal", 4],
  ["Db", "Dubnium", "metal", 5], ["Sg", "Seaborgium", "metal", 6],
  ["Bh", "Bohrium", "metal", 7], ["Hs", "Hassium", "metal", 8],
  ["Mt", "Meitnerium", "metal", 9], ["Ds", "Darmstadtium", "metal", 10],
  ["Rg", "Roentgenium", "metal", 11], ["Cn", "Copernicium", "metal", 12],
  ["Nh", "Nihonium", "metal", 3], ["Fl", "Flerovium", "metal", 4],
  ["Mc", "Moscovium", "metal", 5], ["Lv", "Livermorium", "metal", 6],
  ["Ts", "Tennessine", "metalloid", 7], ["Og", "Oganesson", "noble gas", 8]
];
const elementDetailsBySymbol = new Map(
  periodicElements.map(([symbol, name, type]) => [symbol, { symbol, name, type }])
);

// Keep lesson copy distinct while sharing the same element-selection and result interface.
const bondLessons = {
  ionic: {
    title: "Ionic bond",
    eyebrow: "ELECTRONS TRANSFER",
    lead: "Ionic bonds often form when a metal transfers electrons to a nonmetal. Opposite charges attract and form a repeating ionic solid."
  },
  covalent: {
    title: "Covalent bond",
    eyebrow: "ELECTRONS SHARED",
    lead: "Covalent bonds form when nonmetal atoms share pairs of electrons. Shared electrons help each atom fill its outer shell."
  },
  metallic: {
    title: "Metallic bond",
    eyebrow: "A SHARED ELECTRON SEA",
    lead: "In a metal, outer electrons can move through a lattice of positive metal ions. This helps explain electrical conductivity and malleability."
  }
};

const bondType = document.body.dataset.bond;
const lesson = bondLessons[bondType];
const outcomeDirectory = window.bondOutcomeDirectory;
const commonNamePrefix = "a.k.a.";
if (!lesson || !outcomeDirectory?.[bondType]) {
  throw new Error(`Missing bond lesson data for "${bondType}".`);
}
// Curate metallic alloy names shown in the picker while retaining the complete directory as source data.
const commonMetallicOutcomeNames = new Set([
  "Brass", "Bronze", "Steel", "Stainless steel", "Duralumin", "Nichrome", "Constantan",
  "Cupronickel", "Monel", "Nitinol", "Titanium alloy (Ti-6Al-4V)",
  "Naval brass", "Gunmetal", "Sterling silver", "Rose gold", "White gold",
  "18-karat gold", "Tin-lead solder", "Lead-free solder", "Pewter", "Bearing bronze",
  "Phosphor bronze", "Aluminum bronze", "Red brass", "Nickel silver", "7075 aluminum alloy",
  "6061 aluminum alloy", "5083 aluminum alloy", "Zamak", "Cobalt-chromium alloy",
  "Inconel 718", "Inconel 625", "Cast iron"
]);
// Track selected element records and their generated buttons separately for filtering and UI updates.
const selectedElements = [];
const elementButtons = [];
const main = document.querySelector("#bond-page");
const elementPositions = new Map();
const tableRange = (first, last) => Array.from({ length: last - first + 1 }, (_, index) => first + index);
// Map atomic numbers to grid coordinates, including the detached lanthanide and actinide rows.
[
  { row: 1, numbers: [1, 2], columns: [1, 18] },
  { row: 2, numbers: tableRange(3, 10), columns: [1, 2, 13, 14, 15, 16, 17, 18] },
  { row: 3, numbers: tableRange(11, 18), columns: [1, 2, 13, 14, 15, 16, 17, 18] },
  { row: 4, numbers: tableRange(19, 36), columns: tableRange(1, 18) },
  { row: 5, numbers: tableRange(37, 54), columns: tableRange(1, 18) },
  { row: 6, numbers: [55, 56, 57, ...tableRange(72, 86)], columns: tableRange(1, 18) },
  { row: 7, numbers: [87, 88, 89, ...tableRange(104, 118)], columns: tableRange(1, 18) },
  { row: 8, numbers: tableRange(58, 71), columns: tableRange(4, 17) },
  { row: 9, numbers: tableRange(90, 103), columns: tableRange(4, 17) }
].forEach(({ row, numbers, columns }) => {
  numbers.forEach((number, index) => elementPositions.set(number, { row, column: columns[index] }));
});

// Build the lesson introduction, element picker, expected-result list, and initially hidden detail layout.
const introduction = document.createElement("section");
introduction.className = "bond-introduction";
const eyebrow = document.createElement("p");
eyebrow.className = "bond-blog__eyebrow";
eyebrow.textContent = lesson.eyebrow;
const heading = document.createElement("h1");
heading.textContent = lesson.title;
const lead = document.createElement("p");
lead.className = "bond-blog__lead";
lead.textContent = lesson.lead;
introduction.append(eyebrow, heading, lead);

const tableSection = document.createElement("section");
tableSection.className = "bond-table-section";
const selectionSummary = document.createElement("p");
selectionSummary.className = "bond-table__selection";
selectionSummary.setAttribute("aria-live", "polite");
selectionSummary.textContent = "Select elements to explore possible outcomes.";
const tableWrap = document.createElement("div");
tableWrap.className = "bond-table-wrap";
const picker = document.createElement("ol");
picker.className = "bond-periodic-table";
picker.id = "bond-picker";
picker.setAttribute("aria-label", "Interactive periodic table");
tableWrap.append(picker);
const elementLegend = document.createElement("aside");
elementLegend.className = "element-legend";
elementLegend.id = "element-legend";
elementLegend.setAttribute("aria-label", "Element categories");
[
  ["metal", "Metal"],
  ["nonmetal", "Nonmetal"],
  ["metalloid", "Metalloid"],
  ["noble-gas", "Noble gas"]
].forEach(([category, name]) => {
  const item = document.createElement("span");
  item.className = "element-legend__item";
  const swatch = document.createElement("span");
  swatch.className = `element-legend__swatch bond-element--${category}`;
  swatch.setAttribute("aria-hidden", "true");
  item.append(swatch, document.createTextNode(name));
  elementLegend.append(item);
});
tableSection.append(selectionSummary, tableWrap, elementLegend);

const outcomesSection = document.createElement("section");
outcomesSection.className = "bond-outcomes";
const outcomesHeading = document.createElement("h2");
outcomesHeading.textContent = "Expected results";
const outcomeButtons = document.createElement("div");
outcomeButtons.className = "bond-outcomes__buttons";
outcomesSection.append(outcomesHeading, outcomeButtons);

const productLayout = document.createElement("section");
productLayout.className = "bond-layout";
productLayout.hidden = true;
productLayout.setAttribute("aria-label", "Compound explanation and structure");
const productArticle = document.createElement("article");
productArticle.className = "bond-blog";
const productEyebrow = document.createElement("p");
productEyebrow.className = "bond-blog__eyebrow";
productEyebrow.textContent = "EXPECTED OUTCOME";
const productTitle = document.createElement("h2");
productTitle.className = "bond-product__title";
const productName = document.createElement("div");
productName.className = "bond-product__name";
productName.append(productTitle);
const productCommonName = document.createElement("span");
productCommonName.className = "bond-product__alias";
productCommonName.hidden = true;
productName.append(productCommonName);
const productDescription = document.createElement("p");
productDescription.className = "bond-product__description";
const structurePanel = document.createElement("aside");
structurePanel.className = "bond-structure";
const structureHeading = document.createElement("h2");
structureHeading.textContent = "Structure";
const structureDrawing = document.createElement("div");
structureDrawing.className = "bond-structure__drawing";
structureDrawing.setAttribute("role", "img");
structurePanel.append(structureHeading, structureDrawing);
productLayout.append(productArticle, structurePanel);
const productElementButtons = document.createElement("div");
productElementButtons.className = "bond-product-elements__buttons";
productElementButtons.setAttribute("aria-label", "Elements in the selected outcome");
const elementPreview = document.createElement("div");
elementPreview.className = "bond-element-preview";
elementPreview.hidden = true;
elementPreview.setAttribute("aria-live", "polite");
elementPreview.setAttribute("aria-label", "Element details");
const elementPreviewSymbol = document.createElement("p");
elementPreviewSymbol.className = "bond-element-preview__symbol";
const elementPreviewName = document.createElement("h2");
elementPreviewName.className = "bond-element-preview__name";
elementPreview.append(elementPreviewSymbol, elementPreviewName);
productArticle.append(productEyebrow, productName, productElementButtons, elementPreview, productDescription);
main.append(introduction, tableSection, outcomesSection, productLayout);

function showElementPreview(element, button) {
  const elementTints = {
    metal: "#c4aa91",
    nonmetal: "#70b7e5",
    metalloid: "#65c6ae",
    "noble gas": "#a88be0"
  };
  elementPreviewSymbol.textContent = element.symbol;
  elementPreviewName.textContent = element.name;
  elementPreview.style.setProperty("--element-tint", elementTints[element.type] || "#aab0ba");
  elementPreview.hidden = false;
  const articleRect = productArticle.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const previewRect = elementPreview.getBoundingClientRect();
  const left = Math.min(
    Math.max(0, buttonRect.left - articleRect.left - productArticle.clientLeft),
    productArticle.clientWidth - previewRect.width
  );
  const top = buttonRect.top - articleRect.top - productArticle.clientTop - previewRect.height - 8;
  elementPreview.style.left = `${left}px`;
  elementPreview.style.top = `${top}px`;
}

productArticle.addEventListener("pointerleave", () => {
  elementPreview.hidden = true;
});
productElementButtons.addEventListener("focusout", (event) => {
  if (!productElementButtons.contains(event.relatedTarget)) elementPreview.hidden = true;
});

// Return catalog entries whose unique symbol sets contain every selected element.
function getMatchingOutcomes() {
  const selectedSymbols = selectedElements.map(({ symbol }) => symbol).sort();
  if (selectedSymbols.length === 0) return [];
  const outcomes = getRegisteredOutcomes().filter((outcome) => {
    if (outcome.symbols.includes("*")) return false;
    const outcomeSymbols = [...outcome.symbols].sort();
    return selectedSymbols.every((symbol) => outcomeSymbols.includes(symbol));
  });
  if (outcomes.length > 0) return outcomes;
  if (bondType === "metallic" && selectedElements.every(({ type }) => type === "metal")) {
    return [createMetallicOutcome()];
  }
  return [];
}

// Enable only catalog-supported elements, narrowing the choices as the selection grows.
function getAvailableSymbols() {
  const registeredOutcomes = getRegisteredOutcomes();
  if (selectedElements.length === 0) {
    return new Set(registeredOutcomes.flatMap(({ symbols }) => symbols.filter((symbol) => symbol !== "*")));
  }
  const selectedSymbols = selectedElements.map(({ symbol }) => symbol).sort();
  const available = new Set(selectedSymbols);
  registeredOutcomes.forEach((outcome) => {
    if (outcome.symbols.includes("*")) return;
    const symbols = [...outcome.symbols].sort();
    const matchesSelection = selectedSymbols.every((symbol) => symbols.includes(symbol));
    if (matchesSelection) symbols.forEach((symbol) => available.add(symbol));
  });
  return available;
}

// Hide uncommon metallic examples while preserving the general metal-lattice fallback.
function getRegisteredOutcomes() {
  return bondType === "metallic"
    ? outcomeDirectory[bondType].filter(({ symbols, name }) => symbols.includes("*") || commonMetallicOutcomeNames.has(name))
    : outcomeDirectory[bondType];
}

// Create the generic lattice outcome when a metal-only selection has no named catalog match.
function createMetallicOutcome() {
  const template = outcomeDirectory.metallic.find(({ symbols }) => symbols.includes("*"));
  const names = selectedElements.map(({ name }) => name).join(" and ");
  const symbols = selectedElements.map(({ symbol }) => symbol).join("–");
  const ions = selectedElements.map(({ symbol }) => `${symbol}⁺`);
  return {
    ...template,
    formula: template.formula.replace("{symbols}", symbols),
    name: template.name.replace("{names}", names),
    description: template.description.replaceAll("{names}", names),
    detail: [ions]
  };
}

// Rebuild the expected-result buttons and dismiss the detail panel if its result was filtered out.
function renderOutcomes() {
  const outcomes = getMatchingOutcomes();
  const palette = ["#f28f8f", "#f2b36f", "#e7d36f", "#83c995", "#6fc9cb", "#83a9ef", "#c293e8"];
  for (let index = palette.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [palette[index], palette[swapIndex]] = [palette[swapIndex], palette[index]];
  }
  outcomeButtons.replaceChildren();
  outcomes.forEach((outcome, index) => {
    const button = document.createElement("button");
    button.className = "bond-outcome";
    button.type = "button";
    button.textContent = outcome.formula;
    button.style.setProperty("--outcome-color", palette[index % palette.length]);
    const commonName = outcome.commonName ? `, ${commonNamePrefix} ${outcome.commonName}` : "";
    button.setAttribute("aria-label", `${outcome.formula}, ${outcome.name}${commonName}`);
    button.addEventListener("click", () => showOutcome(outcome, button));
    outcomeButtons.append(button);
  });
  if (outcomes.length === 0) {
    productLayout.hidden = true;
    return;
  }
  const selectedFormula = [...outcomeButtons.querySelectorAll(".bond-outcome")]
    .find((button) => button.getAttribute("aria-pressed") === "true");
  if (!selectedFormula) productLayout.hidden = true;
}

// Refresh selected states, disabled elements, accessible labels, and result buttons together.
function renderSelection() {
  const names = selectedElements.map(({ name }) => name);
  const availableSymbols = getAvailableSymbols();
  selectionSummary.textContent = names.length
    ? `Selected: ${names.join(", ")}`
    : "Select elements to explore possible outcomes.";
  elementButtons.forEach(({ button, element }) => {
    const selected = selectedElements.includes(element);
    const available = availableSymbols.has(element.symbol);
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-label", `${selected ? "Remove" : "Select"} ${element.name}, ${element.type}`);
    button.classList.toggle("is-unavailable", !available);
    button.disabled = !available;
  });
  renderOutcomes();
}

// Add or remove one selected element, enforcing the four-element maximum.
function toggleElement(element) {
  const selectedIndex = selectedElements.indexOf(element);
  if (selectedIndex >= 0) {
    selectedElements.splice(selectedIndex, 1);
  } else if (selectedElements.length < 4) {
    selectedElements.push(element);
  } else {
    return;
  }
  renderSelection();
}

// Create an SVG node with safe text content and a supplied set of presentation attributes.
function createSvgNode(tag, attributes = {}, text = "") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, String(value)));
  if (text) node.textContent = text;
  return node;
}

// Display one selected outcome's explanation and draw its structure or formula composition.
function showOutcome(outcome, activeButton) {
  productLayout.hidden = false;
  productTitle.textContent = outcome.name;
  productCommonName.textContent = outcome.commonName
    ? `${commonNamePrefix} ${outcome.commonName}`
    : "";
  productCommonName.hidden = !outcome.commonName;
  productDescription.textContent = outcome.description;
  outcomeButtons.querySelectorAll(".bond-outcome").forEach((button) => {
    button.setAttribute("aria-pressed", String(button === activeButton));
  });
  elementPreview.hidden = true;
  productElementButtons.replaceChildren();
  outcome.symbols.filter((symbol) => symbol !== "*").forEach((symbol) => {
    const element = elementDetailsBySymbol.get(symbol);
    if (!element) {
      console.warn(`No element details configured for outcome symbol "${symbol}".`);
      return;
    }

    const button = document.createElement("button");
    button.className = "bond-outcome bond-product-elements__button";
    button.type = "button";
    button.textContent = element.symbol;
    button.setAttribute("aria-label", `${element.symbol}, ${element.name}`);
    button.title = `${element.symbol} · ${element.name}`;
    button.addEventListener("pointerenter", () => showElementPreview(element, button));
    button.addEventListener("focus", () => showElementPreview(element, button));
    button.addEventListener("click", () => showElementPreview(element, button));
    productElementButtons.append(button);
  });
  structurePanel.replaceChildren(structureHeading, structureDrawing);
  structureDrawing.setAttribute("aria-label", `Structure diagram for ${outcome.name}`);
  const svg = createSvgNode("svg", {
    viewBox: "0 0 320 230",
    class: `bond-structure__svg bond-structure__svg--${outcome.structure}`,
    "aria-hidden": "true"
  });
  // Keep the SVG primitives small and reusable across the three bonding models.
  const addBond = (x1, y1, x2, y2) => svg.append(createSvgNode("line", { x1, y1, x2, y2, class: "bond-structure__bond" }));
  const addAtom = (x, y, label, kind = "atom") => {
    svg.append(createSvgNode("circle", { cx: x, cy: y, r: 18, class: `bond-structure__atom bond-structure__atom--${kind}` }));
    svg.append(createSvgNode("text", { x, y: y + 4, class: "bond-structure__label" }, label));
  };
  // Draw atom groups from formula subscripts when the catalog has no hand-drawn molecular shape.
  const addCompositionDiagram = (formula) => {
    const counts = new Map();
    [...formula.replace(/[–-].*$/, "").matchAll(/([A-Z][a-z]?)([₀-₉]*)/g)].forEach(([, symbol, subscript]) => {
      const count = Number([...subscript].map((digit) => "₀₁₂₃₄₅₆₇₈₉".indexOf(digit)).join("")) || 1;
      counts.set(symbol, count);
    });
    const composition = [...counts.entries()];
    const nodeCount = composition.length;
    composition.forEach(([symbol, count], index) => {
      const angle = -Math.PI / 2 + (2 * Math.PI * index) / nodeCount;
      const x = 160 + Math.cos(angle) * 75;
      const y = 115 + Math.sin(angle) * 65;
      addAtom(x, y, symbol, index % 2 ? "secondary" : "primary");
      if (count > 1) {
        svg.append(createSvgNode("text", { x, y: y + 31, class: "bond-structure__count" }, `×${count}`));
      }
    });
    svg.append(createSvgNode("text", { x: 160, y: 222, class: "bond-structure__caption" }, "Formula composition · not to scale"));
  };
  // Ionic and metallic results show repeating lattices; covalent entries use known or generic molecules.
  if (outcome.structure === "ionic" || outcome.structure === "metallic") {
    const labels = outcome.structure === "metallic"
      ? outcome.symbols.filter((symbol) => symbol !== "*")
      : outcome.detail?.length && outcome.detail.every((ion) => /[⁺⁻]$/.test(ion))
        ? outcome.detail
        : outcome.symbols.filter((symbol) => symbol !== "*");
    const latticeLabels = labels.length ? labels : [outcome.structure === "metallic" ? "M" : "ion"];
    const positions = [];
    for (let row = 0; row < 3; row += 1) {
      for (let column = 0; column < 4; column += 1) {
        const x = 70 + column * 60 + (outcome.structure === "metallic" && row % 2 ? 18 : 0);
        const y = 54 + row * 62;
        const species = (row * 4 + column) % latticeLabels.length;
        positions.push({ x, y, species });
      }
    }
    positions.forEach(({ x, y }, index) => {
      if (index % 4 < 3) {
        const next = positions[index + 1];
        addBond(x, y, next.x, next.y);
      }
      if (index < 8) {
        const below = positions[index + 4];
        addBond(x, y, below.x, below.y);
      }
    });
    positions.forEach(({ x, y, species }, index) => {
      const label = latticeLabels[species].replace(/[⁺⁻]\d*$/, "");
      addAtom(x, y, label, species % 2 === 0 ? "primary" : "secondary");
      if (outcome.structure === "metallic") {
        const direction = index % 2 === 0 ? 1 : -1;
        svg.append(createSvgNode("circle", { cx: x + 22 * direction, cy: y - 19, r: 3, class: "bond-structure__electron" }));
        svg.append(createSvgNode("circle", { cx: x - 21 * direction, cy: y + 18, r: 3, class: "bond-structure__electron" }));
      }
    });
  } else if (outcome.structure === "glucose") {
    const points = [[160, 45], [220, 80], [220, 150], [160, 185], [100, 150], [100, 80]];
    points.forEach(([x, y], index) => {
      const [nextX, nextY] = points[(index + 1) % points.length];
      addBond(x, y, nextX, nextY);
    });
    points.forEach(([x, y], index) => addAtom(x, y, index === 0 ? "O" : "C", index === 0 ? "secondary" : "primary"));
    [[246, 66, "OH"], [246, 164, "OH"], [74, 164, "OH"], [74, 66, "OH"], [160, 15, "CH₂OH"]]
      .forEach(([x, y, label], index) => {
        const [fromX, fromY] = points[index === 4 ? 5 : index + 1];
        addBond(fromX, fromY, x, y);
        svg.append(createSvgNode("text", { x, y: y + 5, class: "bond-structure__branch" }, label));
      });
  } else if (outcome.structure === "molecule") {
    addCompositionDiagram(outcome.formula);
  } else {
    // Known common molecules use hand-positioned atoms; unlisted compounds use the composition fallback.
    const layouts = {
      water: { atoms: [[90, 85, "H", "secondary"], [160, 145, "O", "primary"], [230, 85, "H", "secondary"]], bonds: [[90, 85, 160, 145], [160, 145, 230, 85]] },
      "carbon-dioxide": { atoms: [[75, 115, "O", "secondary"], [160, 115, "C", "primary"], [245, 115, "O", "secondary"]], bonds: [[75, 115, 160, 115], [160, 115, 245, 115]] },
      hydrogen: { atoms: [[110, 115, "H", "secondary"], [210, 115, "H", "secondary"]], bonds: [[110, 115, 210, 115]] },
      nitrogen: { atoms: [[110, 115, "N", "primary"], [210, 115, "N", "primary"]], bonds: [[110, 115, 210, 115]] },
      oxygen: { atoms: [[110, 115, "O", "secondary"], [210, 115, "O", "secondary"]], bonds: [[110, 115, 210, 115]] },
      chlorine: { atoms: [[110, 115, "Cl", "secondary"], [210, 115, "Cl", "secondary"]], bonds: [[110, 115, 210, 115]] },
      ozone: { atoms: [[90, 95, "O", "secondary"], [160, 145, "O", "primary"], [230, 95, "O", "secondary"]], bonds: [[90, 95, 160, 145], [160, 145, 230, 95]] },
      "hydrogen-chloride": { atoms: [[110, 115, "H", "secondary"], [210, 115, "Cl", "primary"]], bonds: [[110, 115, 210, 115]] },
      "hydrogen-fluoride": { atoms: [[110, 115, "H", "secondary"], [210, 115, "F", "primary"]], bonds: [[110, 115, 210, 115]] },
      "hydrogen-peroxide": { atoms: [[55, 115, "H", "secondary"], [125, 115, "O", "primary"], [195, 115, "O", "primary"], [265, 115, "H", "secondary"]], bonds: [[55, 115, 125, 115], [125, 115, 195, 115], [195, 115, 265, 115]] },
      "carbon-monoxide": { atoms: [[110, 115, "C", "primary"], [210, 115, "O", "secondary"]], bonds: [[110, 115, 210, 115]] },
      "sulfur-dioxide": { atoms: [[85, 75, "O", "secondary"], [160, 145, "S", "primary"], [235, 75, "O", "secondary"]], bonds: [[85, 75, 160, 145], [160, 145, 235, 75]] },
      "sulfur-trioxide": { atoms: [[160, 55, "S", "primary"], [95, 165, "O", "secondary"], [225, 165, "O", "secondary"], [160, 145, "O", "secondary"]], bonds: [[160, 55, 95, 165], [160, 55, 225, 165], [160, 55, 160, 145]] },
      "nitrogen-dioxide": { atoms: [[85, 75, "O", "secondary"], [160, 145, "N", "primary"], [235, 75, "O", "secondary"]], bonds: [[85, 75, 160, 145], [160, 145, 235, 75]] },
      "hydrogen-sulfide": { atoms: [[90, 85, "H", "secondary"], [160, 145, "S", "primary"], [230, 85, "H", "secondary"]], bonds: [[90, 85, 160, 145], [160, 145, 230, 85]] },
      methane: { atoms: [[160, 115, "C", "primary"], [160, 45, "H", "secondary"], [230, 115, "H", "secondary"], [160, 185, "H", "secondary"], [90, 115, "H", "secondary"]], bonds: [[160, 115, 160, 45], [160, 115, 230, 115], [160, 115, 160, 185], [160, 115, 90, 115]] },
      ammonia: { atoms: [[160, 115, "N", "primary"], [105, 55, "H", "secondary"], [215, 55, "H", "secondary"], [160, 185, "H", "secondary"]], bonds: [[160, 115, 105, 55], [160, 115, 215, 55], [160, 115, 160, 185]] },
      methanol: { atoms: [[100, 115, "CH₃", "primary"], [190, 115, "O", "secondary"], [260, 70, "H", "secondary"]], bonds: [[100, 115, 190, 115], [190, 115, 260, 70]] },
      ethanol: { atoms: [[65, 115, "CH₃", "primary"], [140, 115, "CH₂", "primary"], [215, 115, "O", "secondary"], [275, 65, "H", "secondary"]], bonds: [[65, 115, 140, 115], [140, 115, 215, 115], [215, 115, 275, 65]] },
      ethane: { atoms: [[105, 115, "C", "primary"], [215, 115, "C", "primary"]], bonds: [[105, 115, 215, 115]] },
      ethene: { atoms: [[105, 115, "C", "primary"], [215, 115, "C", "primary"]], bonds: [[105, 112, 215, 112], [105, 118, 215, 118]] },
      ethyne: { atoms: [[105, 115, "C", "primary"], [215, 115, "C", "primary"]], bonds: [[105, 108, 215, 108], [105, 115, 215, 115], [105, 122, 215, 122]] },
      "acetic-acid": { atoms: [[80, 115, "CH₃", "primary"], [160, 115, "C", "primary"], [235, 75, "O", "secondary"], [235, 155, "OH", "secondary"]], bonds: [[80, 115, 160, 115], [160, 115, 235, 75], [160, 115, 235, 155]] }
    };
    const layout = layouts[outcome.structure];
    if (layout) {
      layout.bonds.forEach((bond) => addBond(...bond));
      layout.atoms.forEach(([x, y, label, kind]) => addAtom(x, y, label, kind));
    } else {
      addCompositionDiagram(outcome.formula);
    }
  }
  structureDrawing.replaceChildren(svg);
}

// Build the interactive periodic-table grid and connect each native button to selection state.
periodicElements.forEach(([symbol, name, type]) => {
  const element = { symbol, name, type };
  const button = document.createElement("button");
  const item = document.createElement("li");
  const atomicNumber = elementButtons.length + 1;
  const position = elementPositions.get(atomicNumber);
  button.className = `bond-element bond-element--${type.replaceAll(" ", "-")}`;
  button.type = "button";
  button.textContent = symbol;
  button.title = `${atomicNumber} · ${name} · ${type}`;
  button.setAttribute("aria-label", `Select ${name}, element ${atomicNumber}, ${type}`);
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => toggleElement(element));
  item.className = "bond-element-cell";
  item.style.setProperty("--column", position.column);
  item.style.setProperty("--row", position.row);
  item.append(button);
  elementButtons.push({ button, element });
  picker.append(item);
});

// Initialize disabled states and the empty expected-results view after the full table is built.
renderSelection();
