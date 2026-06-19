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
  /** Optional external link to the manufacturer's product page. */
  href?: string;
  /** Optional bullet-point highlights shown beneath the description. */
  highlights?: string[];
  /** Optional labeled chip list (e.g. detected pathogens or HPV genotypes). */
  chips?: { label?: string; items: string[] };
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
          "Multiplex RT-PCR test za detekciju 14 visokorizičnih HPV genotipova. Omogućava zasebnu identifikaciju HPV 16 i HPV 18, uz istovremenu detekciju dodatnih 12 visokorizičnih tipova povezanih sa karcinomom grlića materice.",
        href: "https://genes2me.com/ivd-real-time-pcr/reproductive-disease-solutions/hpv-real-time-pcr-kit",
      },
      {
        name: "HPV-Q Comprehensive Real Time PCR Kit",
        description:
          "Napredni panel za detekciju ukupno 28 HPV genotipova (14 visokorizičnih i 14 nisko/srednjerizičnih tipova). Namenjen je sveobuhvatnom HPV skriningu, genotipizaciji i proceni rizika kod pacijenata.",
        href: "https://genes2me.com/ivd-real-time-pcr/reproductive-disease-solutions/hpv-real-time-pcr-kit",
      },
      {
        name: "HPV-Q+ Comprehensive Real Time PCR Kit",
        description:
          "Najširi HPV panel iz Genes2Me portfolija za kompletnu analizu visokorizičnih i niskorizičnih HPV infekcija sa pojedinačnom detekcijom i genotipizacijom 28 genotipova.",
        highlights: ["Identifikacija svih 28 genotipova (High / Medium / Low Risk)"],
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
        href: "https://genes2me.com/poct/reproductive-disorder-testing-solutions/sti-rt-pcr-kits",
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
      {
        name: "RCP-Q Comprehensive Real Time PCR Kit / 19 targeta",
        description:
          "Sveobuhvatan panel za respiratorne bolesti — detekcija i identifikacija širokog spektra respiratornih patogena (virusa i bakterija) u okviru jednog testa, primenom jednokoračne real-time RT-PCR metode. Ovakav pristup pojednostavljuje dijagnostički proces i omogućava pravovremenu i preciznu identifikaciju uzročnika.",
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

/** Test trake za urin — simple list cards with an optional manufacturer link. */
export type UrinTestStrip = { name: string; href?: string };

export const urinTestStrips: UrinTestStrip[] = [
  {
    name: "Urin test trake 10 parametara",
    href: "https://www.alltests.com.cn/Home/ProductInfo/204",
  },
  {
    name: "Urin test trake 11 parametara",
    href: "https://www.alltests.com.cn/Home/ProductInfo/204",
  },
];

/** A single test — either a plain name, or a name with an external product link. */
export type ImunoItem = string | { name: string; href: string };

/** A subgroup of immunochromatographic tests (heading + product names). */
export type ImunoSubgroup = {
  title?: string;
  items: ImunoItem[];
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
          {
            name: "H. pylori Antigen Rapid Test Cassette",
            href: "https://www.alltests.com.cn/Home/ProductInfo/31",
          },
          {
            name: "Campylobacter Rapid Test Cassette",
            href: "https://www.alltests.com.cn/Home/ProductInfo/28",
          },
          {
            name: "Clostridium difficile GDH + Toxin A + Toxin B Combo Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/29",
          },
          {
            name: "Clostridium difficile Toxin A + Toxin B Combo Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/994",
          },
          {
            name: "Bacterial Diarrhea (Salmonella/C.diff) Rapid Test (Feces)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/2017",
          },
          {
            name: "Calprotectin and Lactoferrin Combo Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1099",
          },
        ],
      },
      {
        title: "Respiratorne bakterijske infekcije",
        items: [
          {
            name: "Strep A Test Card",
            href: "https://www.alltests.com.cn/Home/ProductInfo/57",
          },
          "Mycoplasma pneumoniae Antigen Rapid Test",
        ],
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
          {
            name: "SARS-CoV-2 Antigen Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1042",
          },
          {
            name: "RSV Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/68",
          },
          {
            name: "Influenza A+B Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/65",
          },
          {
            name: "SARS-CoV-2/Influenza A+B/RSV Combo Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/557",
          },
          {
            name: "Adeno/Influenza A+B/RSV Combo Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/69",
          },
          {
            name: "Multiplex Respiratory Antigen Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1309",
          },
        ],
      },
      {
        title: "Gastrointestinalni virusi",
        items: [
          {
            name: "Rotavirus Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/981",
          },
          {
            name: "Norovirus Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/982",
          },
          {
            name: "Adeno/Rota Combo Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/984",
          },
          {
            name: "Norovirus + Rotavirus + Adenovirus + Astrovirus Combo Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/25",
          },
        ],
      },
      {
        title: "Sistemske virusne infekcije",
        items: [
          {
            name: "HCV Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1019",
          },
          {
            name: "HIV 1/2 Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1022",
          },
          {
            name: "HBsAg Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1013",
          },
          "HAV IgG/IgM Rapid Test",
          {
            name: "Monkeypox Antigen Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/559",
          },
          {
            name: "Mononucleosis Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/63",
          },
        ],
      },
    ],
  },
  {
    title: "Parazitologija",
    subgroups: [
      {
        items: [
          {
            name: "Entamoeba / Giardia / Crypto Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/27",
          },
          {
            name: "Trichomonas Vaginalis Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/21",
          },
        ],
      },
    ],
  },
  {
    title: "Kardiologija",
    subgroups: [
      {
        items: [
          {
            name: "Cardiac Troponin I Rapid Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/168",
          },
          {
            name: "Myoglobin / CK-MB / Troponin I Combo Test",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1107",
          },
        ],
      },
    ],
  },
  {
    title: "Tumorski markeri",
    subgroups: [
      {
        items: [
          {
            name: "FOB Antigen Rapid Test Cassette",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1085",
          },
          {
            name: "Transferrin / FOB / Hb-Hp Combo Rapid Test Cassette",
            href: "https://www.alltests.com.cn/Home/ProductInfo/167",
          },
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
          "DOA 3 Panel Test (Urin)",
          "DOA 5 Panel Test / ORIENT GENE (Urin)",
          "DOA 10 Panel Test / ORIENT GENE (Urin)",
          {
            name: "Multi-Drug 17 Drugs Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1495",
          },
          {
            name: "Multi-Drug 6 Drugs Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1670",
          },
          {
            name: "Multi-Drug 11 Drugs Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1670",
          },
          {
            name: "Multi-Drug 6 Drugs Rapid Test (Saliva)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/1493",
          },
        ],
      },
      {
        title: "Pojedinačni testovi",
        items: [
          {
            name: "Alcohol Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/197",
          },
          {
            name: "Benzodiazepines / BZO Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/90",
          },
          {
            name: "Marijuana / THC Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/936",
          },
          {
            name: "Amphetamine / AMP Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/917",
          },
          {
            name: "Methamphetamine / MET Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/113",
          },
          {
            name: "Ecstasy / MDMA Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/110",
          },
          {
            name: "Cocaine / COC Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/925",
          },
          {
            name: "Phencyclidine / PCP Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/125",
          },
          {
            name: "Methadone / MTD Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/952",
          },
          {
            name: "Buprenorphine / BUP Rapid Test (Urin)",
            href: "https://www.alltests.com.cn/Home/ProductInfo/921",
          },
          "Cotinine Rapid Test (Urin)",
        ],
      },
    ],
  },
];

/* ---- Serologija i imunologija ---- */
export type SerologyGroup = {
  title: string;
  items: { name: string; href?: string }[];
};

export const serologyGroups: SerologyGroup[] = [
  {
    title: "Serološki testovi za infekcije",
    items: [
      { name: "RPR", href: "https://diagnostics.be/product/22152" },
      { name: "TPHA", href: "https://diagnostics.be/product/221920" },
    ],
  },
  {
    title: "Imunološki i inflamatorni markeri",
    items: [
      { name: "Reumatoidni faktor (RF)", href: "https://diagnostics.be/product/22112" },
      { name: "ASO (Antistreptolizin O)", href: "https://diagnostics.be/product/22122" },
      { name: "CRP lateks test", href: "https://diagnostics.be/product/221020" },
    ],
  },
  {
    title: "Ostali serološki i imunološki testovi",
    items: [],
  },
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
        name: "Troponin I / Myoglobin / CK-MB / 3 u 1 (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Brza procena akutnog infarkta miokarda i oštećenja srčanog mišića.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/521",
      },
      {
        name: "cTnI / Cardiac Troponin I (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Visoko specifičan marker za dijagnostiku infarkta miokarda.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/211",
      },
      {
        name: "NT-proBNP (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Marker srčane insuficijencije i procene opterećenja srca.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/213",
      },
    ],
  },
  {
    title: "Markeri inflamacije i infekcije",
    products: [
      {
        name: "CRP / C-reaktivni protein (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Kvantitativno određivanje upalnih procesa i bakterijskih infekcija.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/205",
      },
      {
        name: "ASO / Antistreptolizin O (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Detekcija prethodne ili aktuelne streptokokne infekcije.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1487",
      },
    ],
  },
  {
    title: "Autoimuni i reumatološki testovi",
    products: [
      {
        name: "Rheumatoid Factor IgM / RF IgM (AllTest FIA Analizator AFR-600/AFR-700)",
        description:
          "Pomoć u dijagnostici reumatoidnog artritisa i drugih autoimunih oboljenja.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1210",
      },
    ],
  },
  {
    title: "Gastroenterološki testovi",
    products: [
      {
        name: "Calprotectin (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Marker inflamatornih bolesti creva / IBD.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/612",
      },
      {
        name: "H. pylori Antigen (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Detekcija infekcije bakterijom Helicobacter pylori iz uzorka stolice.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/607",
      },
      {
        name: "FOB / Fecal Occult Blood (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Otkrivanje okultnog / skrivenog krvarenja u gastrointestinalnom traktu.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/210",
      },
    ],
  },
  {
    title: "Hematološki i metabolički testovi",
    products: [
      {
        name: "Ferritin (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Procena zaliha gvožđa i dijagnostika anemija.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1461",
      },
      {
        name: "Vitamin D (AllTest FIA Analizator AFR-600/AFR-700)",
        description: "Kvantitativno određivanje nivoa vitamina D u organizmu.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1266",
      },
      {
        name: "Vitamin B12 / VB12 (AllTest FIA Analizator AFR-600/AFR-700)",
        description:
          "Kvantitativno određivanje nivoa vitamina B12, značajnog za hematološke i neurološke funkcije.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1509",
      },
      {
        name: "HbA1c / Glikozilirani hemoglobin (BioHermes A1cCheck Pro)",
        description:
          "Kvantitativno određivanje HbA1c za procenu dugoročne kontrole glikemije i praćenje dijabetesa.",
        href: "https://www.biohermes.com/products/show-29.html",
      },
    ],
  },
  {
    title: "Elektroliti i biohemijska analiza",
    products: [
      {
        name: "Elektrolitni kertridž (Eaglenos Analizator Elektrolita – Na⁺ / K⁺ / Cl⁻ / iCa²⁺ / iMg²⁺)",
        description:
          "Brza istovremena analiza natrijuma, kalijuma, hlorida, jonizovanog kalcijuma i jonizovanog magnezijuma za procenu elektrolitnog statusa, hidratacije i metaboličke ravnoteže organizma.",
        href: "https://www.eaglenos.com/en/medical-devices-catalog/electrolyte-analyzer/",
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
        href: "https://www.alltests.com.cn/Home/ProductInfo/217",
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
  /** Optional Tailwind classes to fine-tune image fit/scale within the card frame. */
  imageClassName?: string;
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
    image: "/imgs/analizatori/biohermes-a1ccheck-heomglobyn-analyzer.webp",
    imageClassName: "object-contain p-6",
    catalogHref: "/analizatori-pdfs/biohermes-a1cchek-pro-glikohemoglobin-analizator-katalog.pdf",
    manufacturerHref: "https://www.biohermes.com/products/show-29.html",
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
    image: "/imgs/analizatori/afr-600-novatrend-plus.webp",
    catalogHref: "/analizatori-pdfs/alltest-afr-600-imunofluorescentni-analizator-katalog.pdf",
    manufacturerHref: "https://www.alltests.com.cn/Home/ProductInfo/549",
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
    image: "/imgs/analizatori/aft-700-debunk-plus.webp",
    catalogHref: "/analizatori-pdfs/alltest-afr-700-imunofluorescentni-analizator-katalog.pdf",
    manufacturerHref: "https://www.alltests.com.cn/Home/ProductInfo/553",
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
    image: "/imgs/analizatori/eaglenos-electrolyte-analizer.webp",
    catalogHref: "/analizatori-pdfs/eaglenos-elektrolit-analizator-katalog.pdf",
    manufacturerHref: "https://www.eaglenos.com/en/medical-devices-catalog/electrolyte-analyzer/",
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

/** A featured product within a pharma category — name, description, optional link. */
export type PharmaProduct = {
  name: string;
  description: string;
  href?: string;
};

export type PharmaCategory = {
  slug: string;
  title: string;
  description?: string;
  items: string[];
  /** Highlighted products with their own description (and optional link). */
  products?: PharmaProduct[];
  /** Manufacturer website for this category. */
  manufacturerHref?: string;
  /** When true, the category is announced as upcoming instead of listing items. */
  upcoming?: boolean;
};

export const pharmaCategories: PharmaCategory[] = [
  {
    slug: "suplementi",
    title: "Dijetetski suplementi",
    description: "Asortiman dijetetskih suplemenata uskoro u ponudi.",
    items: [],
    manufacturerHref:
      "https://www.themyricals.de/en?srsltid=AfmBOoo6fsAWVmdXRmA8xctLBlXa2UAUOuINwe9ZhaVWA9PNuaEE11j-",
    upcoming: true,
  },
  {
    slug: "flasteri",
    title: "Medicinski flasteri",
    items: [],
    manufacturerHref: "https://fittherapy.biz/en/",
    products: [
      {
        name: "FIT Therapy flasteri sa FIR tehnologijom",
        description:
          "Medicinski flasteri koji koriste Far Infrared (FIR) tehnologiju — bez lekova, bez aktivnih supstanci i bez zagrevanja. Deluju fizičkim mehanizmom refleksije infracrvenog zračenja tela, doprinoseći poboljšanju mikrocirkulacije i ublažavanju mišićno-zglobnih tegoba.",
      },
    ],
  },
  {
    slug: "kucni-testovi",
    title: "Kućni testovi",
    description:
      "Jednostavni testovi za kućnu upotrebu, namenjeni brzoj i diskretnoj proveri u udobnosti doma.",
    items: ["hCG testovi za trudnoću"],
    manufacturerHref: "https://www.alltests.com.cn/",
    products: [
      {
        name: "COVID-19 brzi antigenski test",
        description:
          "Brzi antigenski test za kvalitativnu detekciju antigena virusa SARS-CoV-2 iz uzorka brisa.",
        href: "https://www.alltests.com.cn/Home/ProductInfo/1042",
      },
    ],
  },
];
