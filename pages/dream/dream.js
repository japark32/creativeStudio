// Each entry provides a testament book, its chapter count, and a concise book-level overview.
const testamentBooks = {
  old: [
    ["Genesis", 50, "Creation, the first generations, and the beginnings of Israel through the stories of the patriarchs."],
    ["Exodus", 40, "Israel's liberation from Egypt, the covenant at Sinai, and the construction of the tabernacle."],
    ["Leviticus", 27, "Worship, ritual practices, and guidance for living as a community set apart for God."],
    ["Numbers", 36, "Israel's wilderness journey, its struggles, and preparations to enter the promised land."],
    ["Deuteronomy", 34, "Moses retells the law and calls Israel to covenant faithfulness before entering the land."],
    ["Joshua", 24, "Israel enters Canaan and the land is apportioned among the tribes."],
    ["Judges", 21, "Israel cycles through unfaithfulness, oppression, and deliverance under a series of judges."],
    ["Ruth", 4, "Ruth's loyalty and kindness lead to a new family and a place in David's ancestry."],
    ["1 Samuel", 31, "Samuel's leadership, Saul's reign, and David's rise shape Israel's transition to a monarchy."],
    ["2 Samuel", 24, "David rules Israel, faces conflict within his household, and receives a lasting promise."],
    ["1 Kings", 22, "Solomon's reign and temple are followed by a divided kingdom and prophetic warnings."],
    ["2 Kings", 25, "The kingdoms of Israel and Judah decline and fall, ending in exile."],
    ["1 Chronicles", 29, "Genealogies and David's reign emphasize worship and preparation for the temple."],
    ["2 Chronicles", 36, "Judah's kings, the temple, and the exile lead to a decree allowing the people to return."],
    ["Ezra", 10, "Returned exiles rebuild the temple and renew their commitment to the law."],
    ["Nehemiah", 13, "Jerusalem's walls are rebuilt and the community renews its covenant."],
    ["Esther", 10, "Esther risks her life to protect the Jewish people in the Persian court."],
    ["Job", 42, "A righteous man's suffering raises questions about pain, justice, and human understanding."],
    ["Psalms", 150, "Prayers and songs express praise, grief, trust, repentance, and hope."],
    ["Proverbs", 31, "Short teachings explore wisdom, integrity, relationships, and everyday choices."],
    ["Ecclesiastes", 12, "A teacher reflects on life's limits and finds meaning in humility and daily gifts."],
    ["Song of Solomon", 8, "Poetry celebrates love, desire, and devotion between beloved partners."],
    ["Isaiah", 66, "Warnings of judgment are joined with visions of comfort, justice, and future restoration."],
    ["Jeremiah", 52, "Jeremiah warns Judah of disaster while holding out hope for a renewed covenant."],
    ["Lamentations", 5, "Poems mourn Jerusalem's destruction and search for hope amid grief."],
    ["Ezekiel", 48, "Visions address exile, responsibility, restoration, and a renewed temple."],
    ["Daniel", 12, "Stories of faithfulness in exile and visions of kingdoms, endurance, and deliverance."],
    ["Hosea", 14, "Hosea's family story and prophetic words portray unfaithfulness and enduring love."],
    ["Joel", 3, "A devastating locust plague becomes a call to return to God and a promise of renewal."],
    ["Amos", 9, "Amos condemns injustice and empty worship while promising eventual restoration."],
    ["Obadiah", 1, "A brief judgment against Edom affirms that violence and pride will not prevail."],
    ["Jonah", 4, "Jonah resists his mission to Nineveh and learns about mercy beyond his expectations."],
    ["Micah", 7, "Micah confronts injustice and looks toward a ruler and restoration from Bethlehem."],
    ["Nahum", 3, "Poetry announces Nineveh's fall and the end of its violence."],
    ["Habakkuk", 3, "A prophet questions injustice, receives an answer, and chooses trust amid uncertainty."],
    ["Zephaniah", 3, "Warnings of judgment give way to a promise of a humble, restored people."],
    ["Haggai", 2, "The returned community is urged to rebuild the temple and renew its hope."],
    ["Zechariah", 14, "Visions encourage temple rebuilding and anticipate a future of justice and peace."],
    ["Malachi", 4, "The people are challenged to renew their worship and await a coming messenger."]
  ],
  new: [
    ["Matthew", 28, "Jesus is presented as Messiah and teacher, fulfilling Israel's scriptures and commissioning disciples."],
    ["Mark", 16, "A fast-moving account follows Jesus' ministry, suffering, death, and resurrection."],
    ["Luke", 24, "Jesus brings good news to the overlooked, and the story continues through the early church."],
    ["John", 21, "Signs and conversations invite readers to believe in Jesus and find life."],
    ["Acts", 28, "The early Christian movement grows from Jerusalem toward Rome through the work of the apostles."],
    ["Romans", 16, "Paul explains the good news, life in community, and hope for unity among believers."],
    ["1 Corinthians", 16, "Paul addresses division, worship, love, spiritual gifts, and resurrection."],
    ["2 Corinthians", 13, "Paul reflects on ministry, hardship, reconciliation, generosity, and weakness."],
    ["Galatians", 6, "Paul argues that belonging to God's people rests on faith and grace, not boundary markers."],
    ["Ephesians", 6, "The letter celebrates unity in Christ and describes a life shaped by grace and peace."],
    ["Philippians", 4, "Paul encourages joy, humility, and perseverance while writing from imprisonment."],
    ["Colossians", 4, "The letter emphasizes Christ's centrality and encourages a renewed way of life."],
    ["1 Thessalonians", 5, "Paul encourages a young community in faith, mutual care, and hope."],
    ["2 Thessalonians", 3, "The letter encourages steadiness, responsible work, and hope amid confusion."],
    ["1 Timothy", 6, "Guidance for community leadership, teaching, worship, and care for one another."],
    ["2 Timothy", 4, "A final charge urges perseverance, faithful teaching, and courage through hardship."],
    ["Titus", 3, "Instructions connect trustworthy leadership with integrity, good works, and grace."],
    ["Philemon", 1, "Paul appeals for Onesimus to be welcomed as a beloved family member."],
    ["Hebrews", 13, "The letter presents Jesus as the great high priest and calls readers to endure in faith."],
    ["James", 5, "Practical teaching links faith with action, careful speech, justice, and prayer."],
    ["1 Peter", 5, "Communities facing hardship are urged to live with hope, humility, and mutual care."],
    ["2 Peter", 3, "The letter warns against false teaching and encourages patience and faithful living."],
    ["1 John", 5, "The letter connects belief in Jesus with love, truth, and confidence before God."],
    ["2 John", 1, "A brief letter encourages love and discernment in the face of misleading teaching."],
    ["3 John", 1, "A personal note praises hospitality and addresses conflict in a local community."],
    ["Jude", 1, "Readers are urged to remain faithful and care for those in doubt."],
    ["Revelation", 22, "Visions offer hope to pressured communities and culminate in a renewed creation."]
  ]
};

const bookHighlightColors = [
  "#ffc857",
  "#ff7b72",
  "#72e0c2",
  "#b69cff",
  "#ff8fc7",
  "#b6e36b",
  "#78bfff",
  "#ffa66b"
];

const page = document.querySelector("#spirit-page");
const reader = document.querySelector("#spirit-reader");
const readerTitle = document.querySelector("#reader-title");
const chapterButtons = document.querySelector("#chapter-buttons");
const chaptersExpand = document.querySelector("#chapters-expand");
const scripture = document.querySelector("#scripture");
const scriptureStatus = document.querySelector("#scripture-status");
const scriptureVerses = document.querySelector("#scripture-verses");
let selectedBookButton = null;
let selectedBook = null;
let selectedChapter = null;
let scriptureRequest = null;
const scriptureCache = new Map();

// Collapse to the row containing the active chapter, or show the complete chapter list.
function setChapterListExpanded(isExpanded) {
  chapterButtons.classList.toggle("is-collapsed", !isExpanded);
  chaptersExpand.hidden = isExpanded;
  chaptersExpand.setAttribute("aria-expanded", String(isExpanded));
  const selectedButton = chapterButtons.querySelector('.spirit-chapter-button[aria-pressed="true"]');
  if (selectedButton) {
    selectedButton.setAttribute("aria-expanded", String(isExpanded));
    selectedButton.setAttribute(
      "aria-label",
      isExpanded
        ? `Chapter ${selectedButton.dataset.chapter}, selected. Activate to collapse chapter list.`
        : `Chapter ${selectedButton.dataset.chapter}, selected. Activate to expand chapter list.`
    );
    if (!isExpanded) {
      chapterButtons.scrollTop = selectedButton.offsetTop - chapterButtons.offsetTop;
    }
  }
  if (isExpanded) chapterButtons.scrollTop = 0;
}

// Retrieve and render a public-domain chapter without inserting API text as HTML.
async function showChapter(chapterNumber) {
  const currentButton = chapterButtons.querySelector(`[data-chapter="${chapterNumber}"]`);
  if (selectedChapter === chapterNumber) {
    setChapterListExpanded(chapterButtons.classList.contains("is-collapsed"));
    return;
  }
  selectedChapter = chapterNumber;
  chapterButtons.querySelectorAll(".spirit-chapter-button").forEach((button) => {
    const isCurrent = Number(button.dataset.chapter) === chapterNumber;
    button.setAttribute("aria-pressed", String(isCurrent));
    button.removeAttribute("aria-expanded");
    button.setAttribute("aria-label", `Chapter ${button.dataset.chapter}`);
  });
  currentButton.setAttribute("aria-expanded", "false");
  currentButton.setAttribute(
    "aria-label",
    `Chapter ${chapterNumber}, selected. Activate to expand chapter list.`
  );
  readerTitle.textContent = selectedBook.name;
  setChapterListExpanded(false);
  scripture.hidden = false;
  scripture.setAttribute("aria-busy", "true");
  scriptureStatus.textContent = `Loading ${selectedBook.name} ${chapterNumber} (World English Bible)…`;
  scriptureVerses.replaceChildren();

  scriptureRequest?.abort();
  const request = new AbortController();
  scriptureRequest = request;
  const cacheKey = `${selectedBook.name}:${chapterNumber}`;

  try {
    let verses = scriptureCache.get(cacheKey);
    if (!verses) {
      const reference = encodeURIComponent(`${selectedBook.name} ${chapterNumber}`);
      const response = await fetch(`https://bible-api.com/${reference}?translation=web`, {
        signal: request.signal
      });
      if (!response.ok) {
        throw new Error(`Scripture request failed with status ${response.status}`);
      }

      const chapter = await response.json();
      if (!Array.isArray(chapter.verses) || chapter.verses.length === 0 ||
          chapter.verses.some((verse) => !Number.isInteger(verse.verse) || typeof verse.text !== "string")) {
        throw new Error("Scripture response did not contain valid verse data");
      }
      verses = chapter.verses;
      scriptureCache.set(cacheKey, verses);
    }

    if (scriptureRequest !== request) return;
    verses.forEach((verse) => {
      const paragraph = document.createElement("p");
      const number = document.createElement("span");
      paragraph.className = "spirit-verse";
      number.className = "spirit-verse__number";
      number.textContent = String(verse.verse);
      paragraph.append(number, document.createTextNode(verse.text));
      scriptureVerses.append(paragraph);
    });
    scriptureStatus.textContent = `${selectedBook.name} ${chapterNumber} · World English Bible`;
  } catch (error) {
    if (error.name === "AbortError") return;
    if (scriptureRequest !== request) return;
    scriptureStatus.textContent = `Unable to load ${selectedBook.name} ${chapterNumber}. Check your connection and select the chapter to try again.`;
    console.error("Unable to load scripture chapter:", error);
  } finally {
    if (scriptureRequest === request) {
      scripture.setAttribute("aria-busy", "false");
      scriptureRequest = null;
    }
  }
}

// Keep book cards visually and semantically inactive while a book is open in the reader.
function clearBookSelection() {
  document.querySelectorAll(".spirit-book").forEach((button) => {
    button.classList.remove("is-selected");
    button.classList.remove("is-inactive");
    button.setAttribute("aria-pressed", "false");
    button.disabled = false;
  });
}

// Prevent changing books while the chapter reader is open, and dim the inactive lists.
function deactivateBookSelection() {
  document.querySelectorAll(".spirit-book").forEach((button) => {
    button.classList.add("is-inactive");
  });
}

// Open a selected book in the central reader and build its chapter navigation in the header.
function selectBook(book, button) {
  clearBookSelection();
  selectedBookButton = button;
  selectedBook = book;
  deactivateBookSelection();
  readerTitle.textContent = book.name;
  scriptureRequest?.abort();
  scriptureRequest = null;
  scripture.hidden = true;
  scripture.setAttribute("aria-busy", "false");
  scriptureStatus.textContent = "";
  scriptureVerses.replaceChildren();
  chapterButtons.replaceChildren();
  selectedChapter = null;
  chapterButtons.classList.remove("is-collapsed");
  chaptersExpand.hidden = true;
  chaptersExpand.setAttribute("aria-expanded", "true");

  for (let chapter = 1; chapter <= book.chapters; chapter += 1) {
    const chapterButton = document.createElement("button");
    chapterButton.className = "spirit-chapter-button";
    chapterButton.type = "button";
    chapterButton.dataset.chapter = String(chapter);
    chapterButton.textContent = String(chapter);
    chapterButton.setAttribute("aria-label", `Chapter ${chapter}`);
    chapterButton.setAttribute("aria-pressed", "false");
    chapterButton.addEventListener("click", () => showChapter(chapter));
    chapterButtons.append(chapterButton);
  }
  reader.hidden = false;
  page.dataset.selectedSide = book.side;
  page.classList.add("has-selection");
}

// Render each testament as a layered stack; keyboard focus mirrors the pointer preview.
function renderTestament(testament, targetId) {
  const stack = document.querySelector(`#${targetId}`);
  stack.tabIndex = -1;
  testamentBooks[testament].forEach(([name, chapters, summary], index) => {
    const book = {
      name,
      chapters,
      summary,
      testament: testament === "old" ? "Old" : "New",
      side: testament === "old" ? "left" : "right"
    };
    const slot = document.createElement("div");
    const button = document.createElement("button");
    const title = document.createElement("span");
    slot.className = "spirit-book-slot";
    slot.style.setProperty("--stack-index", String(index));
    button.className = "spirit-book";
    button.type = "button";
    const highlightColor = bookHighlightColors[Math.floor(Math.random() * bookHighlightColors.length)];
    button.style.setProperty("--book-highlight", highlightColor);
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `${name}. ${summary}`);
    title.className = "spirit-book__name";
    title.textContent = name;
    button.append(title);
    slot.addEventListener("click", () => {
      if (page.classList.contains("has-selection")) {
        document.querySelector("#reader-back").click();
        return;
      }
      selectBook(book, button);
    });
    slot.append(button);
    stack.append(slot);
  });
}

// Populate both sides with their canonical book order.
renderTestament("old", "old-testament-books");
renderTestament("new", "new-testament-books");

chaptersExpand.addEventListener("click", () => {
  setChapterListExpanded(true);
});

// Restore the balanced two-stack view without leaving a stale selected-book state.
document.querySelector("#reader-back").addEventListener("click", () => {
  const returnStack = document.querySelector(
    selectedBook?.side === "left" ? "#old-testament-books" : "#new-testament-books"
  );
  scriptureRequest?.abort();
  scriptureRequest = null;
  page.classList.remove("has-selection");
  page.removeAttribute("data-selected-side");
  reader.hidden = true;
  scripture.hidden = true;
  scripture.setAttribute("aria-busy", "false");
  scriptureVerses.replaceChildren();
  clearBookSelection();
  returnStack.focus();
  selectedBookButton = null;
  selectedBook = null;
  selectedChapter = null;
  readerTitle.textContent = "";
});

// Escape closes the in-page reader first; a second Escape reaches the shared dialog handler.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !reader.hidden) {
    event.preventDefault();
    event.stopImmediatePropagation();
    document.querySelector("#reader-back").click();
  }
});
