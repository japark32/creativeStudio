// Elemental page controller: data, table rendering, detail selection, and keyboard navigation.
// Symbol/name pairs stay in atomic-number order so their array index identifies each element.
const elements = [
  ["H", "Hydrogen"], ["He", "Helium"], ["Li", "Lithium"], ["Be", "Beryllium"],
  ["B", "Boron"], ["C", "Carbon"], ["N", "Nitrogen"], ["O", "Oxygen"],
  ["F", "Fluorine"], ["Ne", "Neon"], ["Na", "Sodium"], ["Mg", "Magnesium"],
  ["Al", "Aluminium"], ["Si", "Silicon"], ["P", "Phosphorus"], ["S", "Sulfur"],
  ["Cl", "Chlorine"], ["Ar", "Argon"], ["K", "Potassium"], ["Ca", "Calcium"],
  ["Sc", "Scandium"], ["Ti", "Titanium"], ["V", "Vanadium"], ["Cr", "Chromium"],
  ["Mn", "Manganese"], ["Fe", "Iron"], ["Co", "Cobalt"], ["Ni", "Nickel"],
  ["Cu", "Copper"], ["Zn", "Zinc"], ["Ga", "Gallium"], ["Ge", "Germanium"],
  ["As", "Arsenic"], ["Se", "Selenium"], ["Br", "Bromine"], ["Kr", "Krypton"],
  ["Rb", "Rubidium"], ["Sr", "Strontium"], ["Y", "Yttrium"], ["Zr", "Zirconium"],
  ["Nb", "Niobium"], ["Mo", "Molybdenum"], ["Tc", "Technetium"], ["Ru", "Ruthenium"],
  ["Rh", "Rhodium"], ["Pd", "Palladium"], ["Ag", "Silver"], ["Cd", "Cadmium"],
  ["In", "Indium"], ["Sn", "Tin"], ["Sb", "Antimony"], ["Te", "Tellurium"],
  ["I", "Iodine"], ["Xe", "Xenon"], ["Cs", "Caesium"], ["Ba", "Barium"],
  ["La", "Lanthanum"], ["Ce", "Cerium"], ["Pr", "Praseodymium"], ["Nd", "Neodymium"],
  ["Pm", "Promethium"], ["Sm", "Samarium"], ["Eu", "Europium"], ["Gd", "Gadolinium"],
  ["Tb", "Terbium"], ["Dy", "Dysprosium"], ["Ho", "Holmium"], ["Er", "Erbium"],
  ["Tm", "Thulium"], ["Yb", "Ytterbium"], ["Lu", "Lutetium"], ["Hf", "Hafnium"],
  ["Ta", "Tantalum"], ["W", "Tungsten"], ["Re", "Rhenium"], ["Os", "Osmium"],
  ["Ir", "Iridium"], ["Pt", "Platinum"], ["Au", "Gold"], ["Hg", "Mercury"],
  ["Tl", "Thallium"], ["Pb", "Lead"], ["Bi", "Bismuth"], ["Po", "Polonium"],
  ["At", "Astatine"], ["Rn", "Radon"], ["Fr", "Francium"], ["Ra", "Radium"],
  ["Ac", "Actinium"], ["Th", "Thorium"], ["Pa", "Protactinium"], ["U", "Uranium"],
  ["Np", "Neptunium"], ["Pu", "Plutonium"], ["Am", "Americium"], ["Cm", "Curium"],
  ["Bk", "Berkelium"], ["Cf", "Californium"], ["Es", "Einsteinium"], ["Fm", "Fermium"],
  ["Md", "Mendelevium"], ["No", "Nobelium"], ["Lr", "Lawrencium"], ["Rf", "Rutherfordium"],
  ["Db", "Dubnium"], ["Sg", "Seaborgium"], ["Bh", "Bohrium"], ["Hs", "Hassium"],
  ["Mt", "Meitnerium"], ["Ds", "Darmstadtium"], ["Rg", "Roentgenium"], ["Cn", "Copernicium"],
  ["Nh", "Nihonium"], ["Fl", "Flerovium"], ["Mc", "Moscovium"], ["Lv", "Livermorium"],
  ["Ts", "Tennessine"], ["Og", "Oganesson"]
];

// Use conventional standard atomic weights, with bracketed mass numbers for elements without stable isotopes.
const molarMasses = [
  "1.008", "4.0026", "6.94", "9.0122", "10.81", "12.011", "14.007", "15.999", "18.998", "20.180",
  "22.990", "24.305", "26.982", "28.085", "30.974", "32.06", "35.45", "39.948", "39.098", "40.078",
  "44.956", "47.867", "50.942", "51.996", "54.938", "55.845", "58.933", "58.693", "63.546", "65.38",
  "69.723", "72.630", "74.922", "78.971", "79.904", "83.798", "85.468", "87.62", "88.906", "91.224",
  "92.906", "95.95", "[98]", "101.07", "102.906", "106.42", "107.868", "112.414", "114.818", "118.710",
  "121.760", "127.60", "126.904", "131.293", "132.905", "137.327", "138.905", "140.116", "140.908", "144.242",
  "[145]", "150.36", "151.964", "157.25", "158.925", "162.500", "164.930", "167.259", "168.934", "173.045",
  "174.967", "178.49", "180.948", "183.84", "186.207", "190.23", "192.217", "195.084", "196.967", "200.592",
  "204.38", "207.2", "208.980", "[209]", "[210]", "[222]", "[223]", "[226]", "[227]", "232.038",
  "231.036", "238.029", "[237]", "[244]", "[243]", "[247]", "[247]", "[251]", "[252]", "[257]",
  "[258]", "[259]", "[266]", "[267]", "[268]", "[269]", "[270]", "[269]", "[278]", "[281]",
  "[282]", "[285]", "[286]", "[289]", "[290]", "[293]", "[294]", "[294]"
];

// Assign the standard periodic-table families used for the cell tints and detail cards.
const categoryFor = (atomicNumber) => {
  if ([3, 11, 19, 37, 55, 87].includes(atomicNumber)) return "alkali-metal";
  if ([4, 12, 20, 38, 56, 88].includes(atomicNumber)) return "alkaline-earth-metal";
  if ([2, 10, 18, 36, 54, 86, 118].includes(atomicNumber)) return "noble-gas";
  if (atomicNumber >= 57 && atomicNumber <= 71) return "lanthanide";
  if (atomicNumber >= 89 && atomicNumber <= 103) return "actinide";
  if ([5, 14, 32, 33, 51, 52, 84].includes(atomicNumber)) return "metalloid";
  if ([1, 6, 7, 8, 9, 15, 16, 17, 34, 35, 53].includes(atomicNumber)) return "reactive-nonmetal";
  if ([113, 114, 115, 116].includes(atomicNumber)) return "post-transition-metal";
  if ([104, 105, 106, 107, 108, 109, 110, 111, 112].includes(atomicNumber)) return "transition-metal";
  if (atomicNumber >= 21 && atomicNumber <= 30
    || atomicNumber >= 39 && atomicNumber <= 48
    || atomicNumber >= 72 && atomicNumber <= 80) return "transition-metal";
  if (atomicNumber === 117) return "unknown";
  return "post-transition-metal";
};
// Use readable family names for the legend, accessible labels, and selected-element card.
const categoryNames = {
  "alkali-metal": "Alkali metal",
  "alkaline-earth-metal": "Alkaline earth metal",
  "transition-metal": "Transition metal",
  "post-transition-metal": "Post-transition metal",
  metalloid: "Metalloid",
  "reactive-nonmetal": "Reactive nonmetal",
  "noble-gas": "Noble gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
  unknown: "Unknown properties"
};
// Keep the selected-element copy focused on practical uses; rare synthetic elements note research use.
const commonUses = {
  H: "Used in ammonia production, petroleum refining, and fuel cells.",
  He: "Used to cool MRI magnets, fill balloons, and detect leaks.",
  Li: "Used in rechargeable batteries, lightweight alloys, and glass.",
  Be: "Used in aerospace alloys, X-ray windows, and precision instruments.",
  B: "Used in borosilicate glass, detergents, and fiberglass.",
  C: "Used in steel, graphite electrodes, filters, and carbon-fiber composites.",
  N: "Used to make fertilizers and to preserve food in protective packaging.",
  O: "Used for medical breathing support, steelmaking, and water treatment.",
  F: "Used in fluoride dental products and in PTFE nonstick coatings.",
  Ne: "Used in illuminated signs, indicator lamps, and lasers.",
  Na: "Used in chemical manufacturing, sodium-vapor lamps, and heat-transfer systems.",
  Mg: "Used in lightweight alloys, flares, and fireworks.",
  Al: "Used in beverage cans, building materials, vehicles, and power lines.",
  Si: "Used in computer chips, solar cells, glass, and silicone materials.",
  P: "Used in fertilizers, safety matches, and food production.",
  S: "Used to make sulfuric acid, fertilizers, and rubber products.",
  Cl: "Used to disinfect drinking water and make PVC plastic.",
  Ar: "Used as a protective gas in welding and in light bulbs.",
  K: "Used in fertilizers, soaps, and some medical treatments.",
  Ca: "Used in cement, plaster, steelmaking, and dietary supplements.",
  Sc: "Used in aluminum alloys and high-intensity stadium lighting.",
  Ti: "Used in aircraft, medical implants, and durable white pigments.",
  V: "Used to strengthen steel for tools, vehicles, and buildings.",
  Cr: "Used in stainless steel, protective metal plating, and pigments.",
  Mn: "Used in steelmaking, batteries, and glass production.",
  Fe: "Used to make steel for buildings, vehicles, tools, and machinery.",
  Co: "Used in rechargeable batteries, superalloys, and blue pigments.",
  Ni: "Used in stainless steel, rechargeable batteries, and protective plating.",
  Cu: "Used in electrical wiring, plumbing, motors, and coins.",
  Zn: "Used to protect steel from corrosion and in batteries and brass.",
  Ga: "Used in LEDs, laser diodes, and semiconductor devices.",
  Ge: "Used in fiber-optic systems, infrared optics, and semiconductors.",
  As: "Used in specialized semiconductors and research; many compounds are toxic.",
  Se: "Used in glassmaking, solar cells, and electronic components.",
  Br: "Used in flame-retardant materials, water treatment, and photography.",
  Kr: "Used in specialty lighting, photographic flashes, and lasers.",
  Rb: "Used in atomic clocks, vacuum tubes, and laboratory research.",
  Sr: "Used to produce red colors in fireworks and signal flares.",
  Y: "Used in LED phosphors, lasers, and heat-resistant ceramics.",
  Zr: "Used in nuclear-reactor cladding, ceramics, and corrosion-resistant alloys.",
  Nb: "Used in superconducting magnets, pipelines, and high-strength steel.",
  Mo: "Used to strengthen steel and in industrial catalysts and lubricants.",
  Tc: "Used in medical imaging to help diagnose diseases.",
  Ru: "Used in catalysts, electrical contacts, and wear-resistant coatings.",
  Rh: "Used in catalytic converters, reflective coatings, and jewelry plating.",
  Pd: "Used in catalytic converters, electronics, and chemical catalysts.",
  Ag: "Used in jewelry, electrical contacts, mirrors, and antimicrobial coatings.",
  Cd: "Used in some batteries, pigments, and control rods; use is restricted due to toxicity.",
  In: "Used in touchscreens, flat-panel displays, and semiconductor devices.",
  Sn: "Used in solder, protective tin coatings, and bronze.",
  Sb: "Used in flame-retardant materials, alloys, and semiconductor devices.",
  Te: "Used in solar panels, thermoelectric devices, and metal alloys.",
  I: "Used in antiseptics, iodized salt, and medical imaging compounds.",
  Xe: "Used in specialty lamps, medical imaging, and spacecraft ion engines.",
  Cs: "Used in highly accurate atomic clocks and specialized drilling fluids.",
  Ba: "Used in medical X-ray contrast materials, ceramics, and green fireworks.",
  La: "Used in camera lenses, rechargeable batteries, and optical glass.",
  Ce: "Used in catalytic converters, glass polishing, and lighter flints.",
  Pr: "Used in strong magnets, aircraft alloys, and colored glass.",
  Nd: "Used in powerful permanent magnets, headphones, and electric motors.",
  Pm: "Used in specialized measuring devices and scientific research.",
  Sm: "Used in high-temperature magnets and some cancer treatments.",
  Eu: "Used in red and blue phosphors for displays and security inks.",
  Gd: "Used in MRI contrast agents, neutron shielding, and specialty alloys.",
  Tb: "Used in green display phosphors, solid-state devices, and magnets.",
  Dy: "Used in heat-resistant magnets for electric vehicles and wind turbines.",
  Ho: "Used in medical and industrial lasers and magnetic materials.",
  Er: "Used in fiber-optic amplifiers, lasers, and pink glass.",
  Tm: "Used in compact lasers, portable X-ray sources, and research.",
  Yb: "Used in fiber lasers, atomic clocks, and specialty alloys.",
  Lu: "Used in PET scanner crystals, catalysts, and cancer-treatment research.",
  Hf: "Used in microchip insulation, nuclear control rods, and superalloys.",
  Ta: "Used in electronic capacitors, surgical implants, and chemical equipment.",
  W: "Used in cutting tools, high-temperature parts, and lamp filaments.",
  Re: "Used in jet-engine superalloys and catalysts for petroleum refining.",
  Os: "Used in specialized hard alloys, microscopy stains, and research.",
  Ir: "Used in spark plugs, chemical equipment, and high-temperature crucibles.",
  Pt: "Used in catalytic converters, chemical catalysts, jewelry, and medical devices.",
  Au: "Used in jewelry, electronic connectors, dentistry, and investment.",
  Hg: "Used in some lamps and scientific instruments; many uses are restricted due to toxicity.",
  Tl: "Used in specialized optical glass and electronic detectors; highly toxic.",
  Pb: "Used in lead-acid batteries, radiation shielding, and weights.",
  Bi: "Used in some medicines, low-melting alloys, and cosmetics.",
  Po: "Used in specialized antistatic devices and scientific research.",
  At: "Used only in scientific research, including experimental cancer treatments.",
  Rn: "Used mainly in geological research; exposure is hazardous and regulated.",
  Fr: "Used only in scientific research because it is extremely rare and radioactive.",
  Ra: "Used mainly in scientific research; its radioactivity makes ordinary use unsafe.",
  Ac: "Used in scientific research and experimental targeted cancer treatments.",
  Th: "Studied as a potential nuclear fuel and used in specialized materials research.",
  Pa: "Used only in scientific research because it is rare and radioactive.",
  U: "Used as fuel in nuclear power reactors and in radiation-shielding materials.",
  Np: "Used mainly in scientific research and in specialized neutron detectors.",
  Pu: "Used as nuclear-reactor fuel and in radioisotope power sources for spacecraft.",
  Am: "Used in ionization smoke detectors and industrial measuring gauges.",
  Cm: "Used in scientific research and as a source of alpha particles.",
  Bk: "Used only in scientific research because it is rare and radioactive.",
  Cf: "Used as a neutron source for reactor start-up and materials analysis.",
  Es: "Used only in scientific research because it is rare and radioactive.",
  Fm: "Used only in scientific research because it is rare and radioactive.",
  Md: "Used only in scientific research because it is rare and radioactive.",
  No: "Used only in scientific research because it is rare and radioactive.",
  Lr: "Used only in scientific research because it is rare and radioactive.",
  Rf: "Produced a few atoms at a time for scientific research.",
  Db: "Produced a few atoms at a time for scientific research.",
  Sg: "Produced a few atoms at a time for scientific research.",
  Bh: "Produced a few atoms at a time for scientific research.",
  Hs: "Produced a few atoms at a time for scientific research.",
  Mt: "Produced a few atoms at a time for scientific research.",
  Ds: "Produced a few atoms at a time for scientific research.",
  Rg: "Produced a few atoms at a time for scientific research.",
  Cn: "Produced a few atoms at a time for scientific research.",
  Nh: "Produced a few atoms at a time for scientific research.",
  Fl: "Produced a few atoms at a time for scientific research.",
  Mc: "Produced a few atoms at a time for scientific research.",
  Lv: "Produced a few atoms at a time for scientific research.",
  Ts: "Produced a few atoms at a time for scientific research.",
  Og: "Produced a few atoms at a time for scientific research."
};
// Collapse detailed families into the three broad categories used by the bond lesson picker.
const majorCategoryFor = (category) => {
  if (category === "metalloid") return "metalloid";
  if (["reactive-nonmetal", "noble-gas", "unknown"].includes(category)) return "nonmetal";
  return "metal";
};

// Build the neutral ground-state electron configuration using the introductory Aufbau order.
// Convert orbital electron counts into typographic superscripts for the detail panel.
const superscript = (number) => String(number)
  .split("")
  .map((digit) => ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"][Number(digit)])
  .join("");
// Aufbau filling order and subshell capacities generate the introductory electron configurations.
const orbitals = [
  [1, "s", 2], [2, "s", 2], [2, "p", 6], [3, "s", 2], [3, "p", 6],
  [4, "s", 2], [3, "d", 10], [4, "p", 6], [5, "s", 2], [4, "d", 10],
  [5, "p", 6], [6, "s", 2], [4, "f", 14], [5, "d", 10], [6, "p", 6],
  [7, "s", 2], [5, "f", 14], [6, "d", 10], [7, "p", 6]
];
// Fill orbitals by atomic number, then apply common transition-metal ground-state exceptions.
const configurationFor = (atomicNumber) => {
  let remaining = atomicNumber;
  const configuration = orbitals.flatMap(([shell, subshell, capacity]) => {
    if (remaining === 0) return [];
    const electrons = Math.min(remaining, capacity);
    remaining -= electrons;
    return [[shell, subshell, electrons]];
  });
  const groundStateAdjustments = {
    24: [[4, "s", -1], [3, "d", 1]],
    29: [[4, "s", -1], [3, "d", 1]],
    41: [[5, "s", -1], [4, "d", 1]],
    42: [[5, "s", -1], [4, "d", 1]],
    44: [[5, "s", -1], [4, "d", 1]],
    45: [[5, "s", -1], [4, "d", 1]],
    46: [[5, "s", -2], [4, "d", 2]],
    47: [[5, "s", -1], [4, "d", 1]],
    78: [[6, "s", -1], [5, "d", 1]],
    79: [[6, "s", -1], [5, "d", 1]]
  };
  (groundStateAdjustments[atomicNumber] || []).forEach(([shell, subshell, change]) => {
    const orbital = configuration.find((entry) => entry[0] === shell && entry[1] === subshell);
    if (orbital) orbital[2] += change;
  });
  return configuration.filter(([, , electrons]) => electrons > 0);
};
// Select the outer s/p shell and relevant d/f subshells shown as valence electrons.
const valenceConfigurationFor = (atomicNumber, period, category) => configurationFor(atomicNumber)
  .filter(([shell, subshell]) => shell === period
    || (category === "transition-metal" && shell === period - 1 && subshell === "d")
    || (["lanthanide", "actinide"].includes(category) && shell === period - 2 && subshell === "f"))
  .map(([shell, subshell, electrons]) => `${shell}${subshell}${superscript(electrons)}`)
  .join(" ");

// Build inclusive atomic-number ranges for the table's main periods and detached element series.
const range = (first, last) => Array.from({ length: last - first + 1 }, (_, index) => first + index);
const positionsByAtomicNumber = new Map();
const tableRows = [
  { row: 1, numbers: [1, 2], columns: [1, 18] },
  { row: 2, numbers: range(3, 10), columns: [1, 2, 13, 14, 15, 16, 17, 18] },
  { row: 3, numbers: range(11, 18), columns: [1, 2, 13, 14, 15, 16, 17, 18] },
  { row: 4, numbers: range(19, 36), columns: range(1, 18) },
  { row: 5, numbers: range(37, 54), columns: range(1, 18) },
  { row: 6, numbers: [55, 56, 57, ...range(72, 86)], columns: range(1, 18) },
  { row: 7, numbers: [87, 88, 89, ...range(104, 118)], columns: range(1, 18) },
  { row: 8, numbers: range(58, 71), columns: range(4, 17) },
  { row: 9, numbers: range(90, 103), columns: range(4, 17) }
];

// Map each atomic number to its visual grid location, leaving the f-block rows below the main table.
// Associate each element number with its column and row for cell placement and arrow navigation.
tableRows.forEach(({ row, numbers, columns }) => {
  numbers.forEach((atomicNumber, index) => {
    positionsByAtomicNumber.set(atomicNumber, { column: columns[index], row });
  });
});

// Render each cell as an accessible symbol button; selecting it reveals its number and mass.
const table = document.querySelector("#periodic-table");
elements.forEach(([symbol, name], index) => {
  const atomicNumber = index + 1;
  const position = positionsByAtomicNumber.get(atomicNumber);
  const category = categoryFor(atomicNumber);
  const majorCategory = majorCategoryFor(category);
  const cell = document.createElement("li");
  const button = document.createElement("button");
  const number = document.createElement("span");
  const mass = document.createElement("span");
  const abbreviation = document.createElement("span");
  const label = document.createElement("span");

  cell.className = `element element--${category}`;
  cell.style.setProperty("--column", position.column);
  cell.style.setProperty("--row", position.row);
  cell.dataset.atomicNumber = String(atomicNumber);
  cell.dataset.category = majorCategory;
  button.className = "element__button";
  button.type = "button";
  button.setAttribute("aria-label", `${name}, element ${atomicNumber}, ${molarMasses[index]} grams per mole, ${categoryNames[category]}`);
  button.setAttribute("aria-pressed", "false");
  number.className = "element__number";
  number.textContent = String(atomicNumber);
  mass.className = "element__mass";
  mass.textContent = `${molarMasses[index]} g/mol`;
  mass.setAttribute("aria-hidden", "true");
  abbreviation.className = "element__symbol";
  abbreviation.setAttribute("aria-hidden", "true");
  abbreviation.textContent = symbol;
  label.className = "element__name";
  label.textContent = name;
  label.setAttribute("aria-hidden", "true");
  button.append(number, mass, abbreviation, label);
  cell.append(button);
  table.append(cell);
});

// Fill the category legend with the same tint classes used by the interactive element cells.
const legend = document.querySelector("#element-legend");
// Reuse category tint classes to build a legend that remains consistent with the element cells.
Object.entries(categoryNames).forEach(([category, name]) => {
  const item = document.createElement("span");
  const swatch = document.createElement("span");
  item.className = "element-legend__item";
  swatch.className = `element-legend__swatch element--${category}`;
  swatch.setAttribute("aria-hidden", "true");
  item.append(swatch, document.createTextNode(name));
  legend.append(item);
});

// Selecting a cell opens its description on the opposite side and makes the chosen tile larger.
const page = document.querySelector("#elemental-page");
const description = document.querySelector("#element-description");
const closeElement = document.querySelector("#element-close");
const details = {
  number: document.querySelector("#detail-number"),
  symbol: document.querySelector("#detail-symbol"),
  name: document.querySelector("#detail-name"),
  category: document.querySelector("#detail-category"),
  valence: document.querySelector("#detail-valence"),
  mass: document.querySelector("#detail-mass"),
  group: document.querySelector("#detail-group"),
  period: document.querySelector("#detail-period"),
  copy: document.querySelector("#detail-copy")
};
let selectedButton = null;
let hideDescriptionTimer;

// Clear selection styles, animate the panel away, and optionally restore focus to its element.
function hideElementDetails(restoreFocus = false) {
  window.clearTimeout(hideDescriptionTimer);
  document.documentElement.classList.remove("element-selected");
  document.body.classList.remove("element-selected");
  page.classList.remove("has-selection");
  if (selectedButton) {
    selectedButton.setAttribute("aria-pressed", "false");
    selectedButton.parentElement.removeAttribute("aria-current");
  }
  const returnTarget = selectedButton;
  selectedButton = null;
  hideDescriptionTimer = window.setTimeout(() => {
    description.hidden = true;
    if (restoreFocus) returnTarget?.focus();
  }, 190);
}

// Display periodic data and common uses for the selected element.
function showElementDetails(cell, button) {
  window.clearTimeout(hideDescriptionTimer);
  if (selectedButton && selectedButton !== button) {
    selectedButton.setAttribute("aria-pressed", "false");
    selectedButton.parentElement.removeAttribute("aria-current");
  }
  selectedButton = button;
  const atomicNumber = Number(cell.dataset.atomicNumber);
  const [symbol, name] = elements[atomicNumber - 1];
  const position = positionsByAtomicNumber.get(atomicNumber);
  const category = categoryFor(atomicNumber);
  const categoryName = categoryNames[category];
  const mass = molarMasses[atomicNumber - 1];
  const period = position.row <= 7 ? position.row : position.row === 8 ? 6 : 7;
  const valenceConfiguration = valenceConfigurationFor(atomicNumber, period, category);
  details.number.textContent = `#${atomicNumber}`;
  details.symbol.textContent = symbol;
  details.name.textContent = name;
  details.category.textContent = categoryName;
  details.valence.textContent = valenceConfiguration;
  details.mass.textContent = `${mass} g/mol`;
  details.group.textContent = atomicNumber >= 57 && atomicNumber <= 71
    ? "Lanthanide"
    : atomicNumber >= 89 && atomicNumber <= 103
      ? "Actinide"
      : String(position.column);
  details.period.textContent = String(period);
  details.copy.textContent = commonUses[symbol]
    || `Used mainly in scientific research; practical applications are limited by its rarity.`;
  description.classList.remove(...Object.keys(categoryNames).map((key) => `element--${key}`));
  description.classList.add(`element--${category}`);
  description.dataset.side = position.column <= 9 ? "right" : "left";
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.documentElement.classList.add("element-selected");
    document.body.classList.add("element-selected");
  }
  description.hidden = false;
  button.setAttribute("aria-pressed", "true");
  cell.setAttribute("aria-current", "true");
  requestAnimationFrame(() => page.classList.add("has-selection"));
}

// Make every element tile respond to pointer, touch, Enter, and Space through its native button.
// Delegate clicks from the element list and use the same toggle behavior for pointer and touch.
table.addEventListener("click", (event) => {
  const button = event.target.closest(".element__button");
  if (!button) return;
  if (selectedButton === button) {
    hideElementDetails(true);
    return;
  }
  showElementDetails(button.parentElement, button);
});

// Move selection to the nearest visible periodic-table cell in the arrow-key direction.
// Keep arrow-key navigation aligned to the periodic-table grid and open the focused element.
document.addEventListener("keydown", (event) => {
  const direction = {
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    ArrowUp: [0, -1],
    ArrowDown: [0, 1]
  }[event.key];
  if (!direction) return;
  const source = selectedButton || event.target.closest?.(".element__button");
  if (!source) return;
  const sourceCell = source.parentElement;
  const sourceColumn = Number(sourceCell.style.getPropertyValue("--column"));
  const sourceRow = Number(sourceCell.style.getPropertyValue("--row"));
  const [columnDirection, rowDirection] = direction;
  const nextCell = [...table.querySelectorAll(".element:not([hidden])")]
    .filter((cell) => cell !== sourceCell)
    .map((cell) => ({
      cell,
      column: Number(cell.style.getPropertyValue("--column")),
      row: Number(cell.style.getPropertyValue("--row"))
    }))
    .filter(({ column, row }) => {
      const columnDelta = column - sourceColumn;
      const rowDelta = row - sourceRow;
      return columnDirection
        ? columnDelta * columnDirection > 0 && rowDelta === 0
        : rowDelta * rowDirection > 0;
    })
    .sort((first, second) => columnDirection
      ? Math.abs(first.column - sourceColumn) - Math.abs(second.column - sourceColumn)
      : Math.abs(first.row - sourceRow) - Math.abs(second.row - sourceRow)
        || Math.abs(first.column - sourceColumn) - Math.abs(second.column - sourceColumn))[0]?.cell;

  if (!nextCell) return;
  event.preventDefault();
  const nextButton = nextCell.querySelector(".element__button");
  nextButton.focus();
  showElementDetails(nextCell, nextButton);
});

// Close the details panel and return keyboard users to the element they selected.
// Close and Escape actions restore focus to the tile that opened the detail view.
closeElement.addEventListener("click", () => hideElementDetails(true));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !description.hidden) {
    event.preventDefault();
    event.stopImmediatePropagation();
    hideElementDetails(true);
  }
});
