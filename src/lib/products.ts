/**
 * Product catalog data — single source of truth for the PROIZVODI section.
 *
 * The structure mirrors `agent_docs/products.md` exactly: group → category →
 * subcategory → product. Do not reorganize the hierarchy; pages read from here
 * so content edits stay in one place and the markup stays declarative.
 */

/* -------------------------------------------------------------------------- */
/* Shared types                                                                */
/* -------------------------------------------------------------------------- */

/** A product with a name and a description paragraph. */
export type ProductCard = {
  name: string;
  description: string;
};

/** A named list of product names without descriptions (compact list cards). */
export type ProductList = {
  title?: string;
  items: string[];
};

/* -------------------------------------------------------------------------- */
/* Top-level group summaries (used on /proizvodi and group hero cards)         */
/* -------------------------------------------------------------------------- */

export type ProductGroupSummary = {
  index: string;
  slug: string;
  href: string;
  title: string;
  tagline: string;
  description: string;
  categories: string[];
};

export const productGroupSummaries: ProductGroupSummary[] = [
  {
    index: "01",
    slug: "dijagnostika",
    href: "/proizvodi/dijagnostika",
    title: "Dijagnostika",
    tagline: "PCR, brzi testovi, serologija i POCT",
    description:
      "Molekularna PCR dijagnostika, imunohromatografski brzi testovi, serološki i imunološki testovi i kvantitativna POCT dijagnostika namenjeni dijagnostičkom procesu.",
    categories: [
      "PCR dijagnostika",
      "Brzi dijagnostički testovi",
      "Serologija i imunologija",
      "POCT dijagnostika",
    ],
  },
  {
    index: "02",
    slug: "laboratorijska-oprema",
    href: "/proizvodi/laboratorijska-oprema",
    title: "Laboratorijska oprema",
    tagline: "POCT analizatori i laboratorijski uređaji",
    description:
      "POCT analizatori za brzu i pouzdanu analizu uzoraka, sa detaljnim specifikacijama i stručnom podrškom pri izboru opreme za vašu ustanovu.",
    categories: ["POCT analizatori"],
  },
  {
    index: "03",
    slug: "farmaceutski-medicinski",
    href: "/proizvodi/farmaceutski-medicinski",
    title: "Farmaceutski i medicinski proizvodi",
    tagline: "Suplementi, flasteri i kućni testovi",
    description:
      "Dijetetski suplementi, medicinski flasteri i trake za bolove i kućni testovi namenjeni apotekama i zdravstvenim ustanovama.",
    categories: ["Dijetetski suplementi", "Flasteri i trake za bolove", "Kućni testovi"],
  },
];

/* ========================================================================== */
/* 1. DIJAGNOSTIKA                                                             */
/* ========================================================================== */

/* ---- PCR dijagnostika ---- */
export type PcrSubsection = {
  title: string;
  products: ProductCard[];
};

export const pcrSubsections: PcrSubsection[] = [
  {
    title: "HPV RT-PCR Testovi",
    products: [
      {
        name: "HPV-Q Real Time PCR Kit",
        description:
          "Multiplex RT-PCR test za detekciju 14 visokorizičnih HPV genotipova. Omogućava zasebnu identifikaciju HPV 16 i HPV 18, uz istovremenu detekciju dodatnih visokorizičnih tipova povezanih sa karcinomom grlića materice.",
      },
      {
        name: "HPV-Q Comprehensive Real Time PCR Kit",
        description:
          "Napredni panel za detekciju ukupno 28 HPV genotipova (14 visokorizičnih i 14 nisko/srednjerizičnih tipova). Namenjen je sveobuhvatnom HPV skriningu, genotipizaciji i proceni rizika kod pacijenata.",
      },
      {
        name: "HPV-Q+ Comprehensive Real Time PCR Kit",
        description:
          "Najširi HPV panel iz Genes2Me portfolija za kompletnu analizu visokorizičnih i niskorizičnih HPV infekcija sa pojedinačnom detekcijom i genotipizacijom 28 genotipova.",
      },
    ],
  },
  {
    title: "STI RT-PCR Testovi",
    products: [
      {
        name: "STI-Q Comprehensive Real Time PCR Kit / 14 patogena",
        description:
          "Multiplex panel za istovremenu detekciju najčešćih seksualno prenosivih infekcija iz jednog uzorka, omogućavajući brzu i preciznu laboratorijsku dijagnostiku.",
      },
      {
        name: "STI7-Q Real Time PCR Kit",
        description:
          "Panel za detekciju sedam najčešćih uzročnika seksualno prenosivih bolesti u jednoj analizi. Idealan za rutinski skrining i dijagnostiku reproduktivnih infekcija.",
      },
    ],
  },
  {
    title: "Respiratorne RT-PCR Infekcije",
    products: [
      {
        name: "Respiratory Panel",
        description:
          "Multiplex RT-PCR panel za istovremenu detekciju najčešćih virusnih i bakterijskih uzročnika respiratornih infekcija, uključujući grip, RSV, koronaviruse i druge respiratorne patogene.",
      },
      {
        name: "Comprehensive Respiratory Virus Panel / CRVP",
        description:
          "Napredni respiratorni panel koji omogućava detekciju i sekvenciranje više respiratornih virusa i njihovih sojeva, uključujući koronaviruse, influencu i adenoviruse.",
      },
    ],
  },
];

/** STI patogeni — compact badge grid shown under the STI cards. */
export const stiPathogens: string[] = [
  "TGC-III",
  "Chlamydia",
  "Gonorrhea",
  "Mycoplasma",
  "Ureaplasma",
  "HSV",
  "Trichomonas",
  "Syphilis",
  "HHV",
  "Toxoplasma",
];

/* ---- Brzi dijagnostički testovi ---- */

/** Test trake za urin — simple list cards. */
export const urinTestStrips: string[] = [
  "Urinske test trake 10 parametara",
  "Urinske test trake 11 parametara",
];

/** A subgroup of immunochromatographic tests (heading + product names). */
export type ImunoSubgroup = {
  title?: string;
  items: string[];
};

/** A major category within "Imunohromatografski brzi testovi". */
export type ImunoCategory = {
  title: string;
  subgroups: ImunoSubgroup[];
};

export const imunoCategories: ImunoCategory[] = [
  {
    title: "Bakteriologija / infekcije",
    subgroups: [
      {
        title: "Gastrointestinalne bakterijske infekcije",
        items: [
          "H. pylori Antigen Rapid Test Cassette",
          "Campylobacter Rapid Test Cassette",
          "Clostridium difficile GDH + Toxin A + Toxin B Combo Rapid Test",
          "Clostridium difficile Toxin A + Toxin B Combo Rapid Test",
        ],
      },
      {
        title: "Respiratorne bakterijske infekcije",
        items: ["Strep A Test Card", "Mycoplasma pneumoniae Antigen Rapid Test"],
      },
      {
        title: "Polno prenosive infekcije",
        items: ["CHLAMYTOP Rapid Test Cassette"],
      },
      {
        title: "Sistemske bakterijske infekcije",
        items: ["Leptospira IgG/IgM Rapid Test Cassette"],
      },
    ],
  },
  {
    title: "Virusologija",
    subgroups: [
      {
        title: "Respiratorni virusi",
        items: [
          "SARS-CoV-2 Antigen Rapid Test",
          "RSV Rapid Test",
          "Influenza A+B Rapid Test",
          "SARS-CoV-2/Influenza A+B/RSV Combo Test",
          "Adeno/Influenza A+B/RSV Combo Test",
          "Multiplex Respiratory Antigen Rapid Test",
        ],
      },
      {
        title: "Gastrointestinalni virusi",
        items: [
          "Rotavirus Rapid Test",
          "Norovirus Rapid Test",
          "Adeno/Rota Combo Test",
          "Norovirus + Rotavirus + Adenovirus + Astrovirus Combo Test",
        ],
      },
      {
        title: "Sistemske virusne infekcije",
        items: [
          "HCV Rapid Test",
          "HIV 1/2 Rapid Test",
          "HBsAg Rapid Test",
          "HAV IgG/IgM Rapid Test",
          "Monkeypox Antigen Rapid Test",
          "Mononucleosis Rapid Test",
        ],
      },
    ],
  },
  {
    title: "Parazitologija",
    subgroups: [
      {
        items: ["Entamoeba / Giardia / Crypto Rapid Test", "Trichomonas Vaginalis Rapid Test"],
      },
    ],
  },
  {
    title: "Kardiologija",
    subgroups: [
      {
        items: ["Cardiac Troponin I Rapid Test", "Myoglobin / CK-MB / Troponin I Combo Test"],
      },
    ],
  },
  {
    title: "Tumorski markeri",
    subgroups: [
      {
        items: [
          "FOB Antigen Rapid Test Cassette",
          "Transferrin / FOB / Hb-Hp Combo Rapid Test Cassette",
        ],
      },
    ],
  },
  {
    title: "Toksikologija / droge testovi",
    subgroups: [
      {
        title: "Panel testovi",
        items: [
          "DOA 3 Panel Test",
          "DOA 5 Panel Test / ORIENT GENE",
          "DOA 10 Panel Test / ORIENT GENE",
          "Multi-Drug 17 Drugs Rapid Test",
        ],
      },
      {
        title: "Pojedinačni testovi",
        items: [
          "Alcohol Rapid Test",
          "Benzodiazepines / BZO Rapid Test",
          "Marijuana / THC Rapid Test",
          "Amphetamine / AMP Rapid Test",
          "Methamphetamine / MET Rapid Test",
          "Ecstasy / MDMA Rapid Test",
          "Cocaine / COC Rapid Test",
          "Phencyclidine / PCP Rapid Test",
          "Methadone / MTD Rapid Test",
          "Buprenorphine / BUP Rapid Test",
          "Cotinine Rapid Test",
        ],
      },
    ],
  },
];

/* ---- Serologija i imunologija ---- */
export const serologyItems: string[] = [
  "RPR",
  "TPHA",
  "Reumatoidni faktor / RF",
  "ASO",
  "CRP / lateks / serološki testovi",
  "Ostali imunološki i serološki testovi",
];

/* ---- POCT dijagnostika ---- */
export type PoctGroup = {
  title: string;
  products: ProductCard[];
};

export const poctGroups: PoctGroup[] = [
  {
    title: "Kardiološki markeri",
    products: [
      {
        name: "Troponin I / Myoglobin / CK-MB / 3 u 1",
        description: "Brza procena akutnog infarkta miokarda i oštećenja srčanog mišića.",
      },
      {
        name: "cTnI / Cardiac Troponin I",
        description: "Visoko specifičan marker za dijagnostiku infarkta miokarda.",
      },
      {
        name: "NT-proBNP",
        description: "Marker srčane insuficijencije i procene opterećenja srca.",
      },
    ],
  },
  {
    title: "Markeri inflamacije i infekcije",
    products: [
      {
        name: "CRP / C-reaktivni protein",
        description: "Kvantitativno određivanje upalnih procesa i bakterijskih infekcija.",
      },
      {
        name: "ASO / Antistreptolizin O",
        description: "Detekcija prethodne ili aktuelne streptokokne infekcije.",
      },
    ],
  },
  {
    title: "Autoimuni i reumatološki testovi",
    products: [
      {
        name: "Rheumatoid Factor IgM / RF IgM",
        description:
          "Pomoć u dijagnostici reumatoidnog artritisa i drugih autoimunih oboljenja.",
      },
    ],
  },
  {
    title: "Gastroenterološki testovi",
    products: [
      {
        name: "Calprotectin",
        description: "Marker inflamatornih bolesti creva / IBD.",
      },
      {
        name: "H. pylori Antigen",
        description: "Detekcija infekcije bakterijom Helicobacter pylori iz uzorka stolice.",
      },
      {
        name: "FOB / Fecal Occult Blood",
        description: "Otkrivanje okultnog / skrivenog krvarenja u gastrointestinalnom traktu.",
      },
    ],
  },
  {
    title: "Hematološki i metabolički testovi",
    products: [
      {
        name: "Ferritin",
        description: "Procena zaliha gvožđa i dijagnostika anemija.",
      },
      {
        name: "Vitamin D",
        description: "Kvantitativno određivanje nivoa vitamina D u organizmu.",
      },
    ],
  },
  {
    title: "Koagulacija i tromboza",
    products: [
      {
        name: "D-Dimer",
        description:
          "Pomoć u dijagnostici duboke venske tromboze / DVT, plućne embolije i poremećaja koagulacije.",
      },
    ],
  },
];

/** Anchor sections used by the Dijagnostika in-page category nav. */
export const dijagnostikaSections = [
  { id: "pcr", label: "PCR dijagnostika" },
  { id: "brzi-testovi", label: "Brzi dijagnostički testovi" },
  { id: "serologija", label: "Serologija i imunologija" },
  { id: "poct", label: "POCT dijagnostika" },
] as const;

/* ========================================================================== */
/* 2. LABORATORIJSKA OPREMA                                                    */
/* ========================================================================== */

export type SpecRow = { key: string; value: string };

export type Analyzer = {
  slug: string;
  name: string;
  description: string;
  /** Optional product image; falls back to a branded placeholder when absent. */
  image?: string;
  /** External links — placeholders ("#") until the client provides them. */
  catalogHref?: string;
  manufacturerHref?: string;
  specs: SpecRow[];
};

export const analyzers: Analyzer[] = [
  {
    slug: "a1cchek-pro",
    name: "A1cChek Pro Glycohemoglobin Analyzer",
    description:
      "A1cChek Pro Glycohemoglobin Analyzer je napredni HbA1c analizator dizajniran za brzo, precizno i pouzdano praćenje glikoregulacije kod pacijenata sa dijabetesom. Zahvaljujući savremenoj tehnologiji boronatne afinitetne hromatografije, omogućava tačne rezultate za svega nekoliko minuta uz minimalnu količinu uzorka. Kompaktan dizajn, intuitivan ekran osetljiv na dodir i široke mogućnosti povezivanja čine ga idealnim rešenjem za laboratorije, privatne klinike i point-of-care centre. Omogućeno je puštanje četiri uzorka u isto vreme.",
    catalogHref: "#",
    manufacturerHref: "#",
    specs: [
      { key: "Parametar", value: "HbA1c" },
      { key: "Tehnologija", value: "Boronate Affinity Chromatography" },
      { key: "Vreme do rezultata", value: "~5 minuta" },
      { key: "Uzorak", value: "Kapilarna i venska krv" },
      { key: "Zapremina uzorka", value: "3 μL" },
      { key: "Memorija", value: "1000 rezultata" },
      { key: "Povezivanje", value: "WIFI / LAN / USB / RS-232" },
      { key: "Interfejs", value: "Color Touch Screen" },
    ],
  },
  {
    slug: "alltest-afr-600",
    name: "ALLTEST AFR-600",
    description:
      "ALLTEST AFR-600 je savremeni POCT imunofluorescentni analizator namenjen brzoj i pouzdanoj dijagnostici širokog spektra biomarkera. Kombinujući visoku preciznost, jednostavno rukovanje i izuzetno kratko vreme očitavanja, omogućava efikasan rad u laboratorijama, ambulantama, urgentnim centrima i drugim zdravstvenim ustanovama. Ugrađeni termalni štampač, ekran osetljiv na dodir i velika memorija dodatno doprinose produktivnosti i pouzdanosti rada.",
    catalogHref: "#",
    manufacturerHref: "#",
    specs: [
      { key: "Tip analizatora", value: "Fluorescent Immunoassay" },
      { key: "Broj kanala", value: "Single Channel" },
      { key: "Vreme očitavanja", value: "< 20 sekundi" },
      { key: "Ekran", value: "LCD Touch Screen" },
      { key: "Memorija", value: "10.000 rezultata" },
      { key: "Printer", value: "Ugrađeni termalni printer" },
      { key: "Način rada", value: "Plug & Play" },
    ],
  },
  {
    slug: "alltest-afr-700",
    name: "ALLTEST AFR-700",
    description:
      "ALLTEST AFR-700 je visokoperformansni imunofluorescentni analizator dizajniran za laboratorije sa većim obimom rada i potrebom za maksimalnom efikasnošću. Sa 12 nezavisnih kanala omogućeno je puštanje 12 različitih testova u isto vreme uz izuzetnu preciznost i stabilnost sistema. Savremeni softver, brzo očitavanje i kompatibilnost sa LIS sistemima čine ga idealnim rešenjem za moderne dijagnostičke centre.",
    catalogHref: "#",
    manufacturerHref: "#",
    specs: [
      { key: "Tip analizatora", value: "Fluorescence Immunoassay" },
      { key: "Broj kanala", value: "12 kanala" },
      { key: "Vreme očitavanja", value: "< 20 sekundi" },
      { key: "Kompatibilnost", value: "LIS povezivanje" },
      { key: "Kontrola kvaliteta", value: "Integrisan QC monitoring" },
      { key: "Tip testova", value: "Kvantitativni i kvalitativni" },
      { key: "Način rada", value: "Plug & Play" },
    ],
  },
  {
    slug: "eaglenos-elektrolit",
    name: "Eaglenos Elektrolit Analyzer",
    description:
      "Eaglenos Elektrolit Analyzer pruža brzo, precizno i stabilno određivanje ključnih elektrolita u svakodnevnom laboratorijskom radu. Baziran na savremenoj ISE tehnologiji, omogućava pouzdanu analizu uz jednostavno rukovanje i automatsku kalibraciju. Dizajniran je za bolnice, laboratorije i urgentne centre kojima su brzina i tačnost rezultata od ključnog značaja.",
    catalogHref: "#",
    manufacturerHref: "#",
    specs: [
      { key: "Parametri", value: "Na+, K+, Cl−, Ca++, Mg++" },
      { key: "Tehnologija", value: "ISE tehnologija" },
      { key: "Tip uzorka", value: "Serum / plazma / puna krv" },
      { key: "Kalibracija", value: "Automatska" },
      { key: "Vreme analize", value: "Brzo očitavanje" },
      { key: "Ekran", value: "LCD Touch Display" },
      { key: "Printer", value: "Ugrađeni termalni printer" },
      { key: "Primena", value: "Bolnice i laboratorije" },
    ],
  },
];

/* ========================================================================== */
/* 3. FARMACEUTSKI I MEDICINSKI PROIZVODI                                      */
/* ========================================================================== */

export type PharmaCategory = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const pharmaCategories: PharmaCategory[] = [
  {
    slug: "suplementi",
    title: "Dijetetski suplementi",
    description:
      "Vitamini, minerali i preparati za imunološku podršku namenjeni svakodnevnoj prevenciji i dopuni ishrane.",
    items: ["Vitamini", "Minerali", "Imunološka podrška"],
  },
  {
    slug: "flasteri",
    title: "Flasteri i trake za bolove",
    description:
      "Kinezio trake, medicinski flasteri i toplo/hladno terapijski flasteri za podršku kod bolova i oporavka.",
    items: ["Kinezio trake", "Medicinski flasteri", "Toplo/hladno terapijski flasteri"],
  },
  {
    slug: "kucni-testovi",
    title: "Kućni testovi",
    description:
      "Jednostavni testovi za kućnu upotrebu, namenjeni brzoj i diskretnoj proveri u udobnosti doma.",
    items: ["hCG testovi za trudnoću"],
  },
];
