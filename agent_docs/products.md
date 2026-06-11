# AGENTS.md

## Project Context

This website is for a B2B medical / laboratory company.

The website has the following main navigation:

- POČETNA
- O NAMA
- USLUGE
- PROIZVODI
- PARTNERI
- BLOG
- KONTAKT

The most important section for this task is **PROIZVODI**.

The products area must be built as a structured product catalog with clear hierarchy between product groups, categories, subcategories, product cards, and product detail sections.

Do not reorganize the provided structure creatively. Follow the structure exactly as provided. The client has already defined the product groups and how they want the content divided.

The goal is to make the product pages easy to navigate and visually understandable, not to rewrite the medical logic.

---

# Product Catalog Structure

The website already has its navigation built.

Focus only on implementing the content structure and hierarchy described below.

The products section is organized into three primary product groups:

- DIJAGNOSTIKA
- LABORATORIJSKA OPREMA
- FARMACEUTSKI I MEDICINSKI PROIZVODI

Treat these as top-level content groups.

Do not redesign, reorganize, or reinterpret the hierarchy provided by the client.

The objective is to convert the provided content into a clean, structured catalog using pages, sections, cards, grids, accordions, tabs, or other suitable UI components while preserving the exact hierarchy.

# General Layout Rules

Use this interpretation throughout the products section:

- Large product group = main page or main product category
- “Kartica”, “kućica”, “kockica” = card in a grid layout
- Product category = large card or section card
- Subcategory = smaller card or section inside the category
- Product name + description = product card
- Bullet list without descriptions = compact list or small simple cards
- “Karakteristika / Specifikacija” = specification table
- Analyzer/equipment products = cards with image, title, short description, and action buttons

Do not treat every medical term as a separate page unless the structure clearly implies a deeper click.

---

# 1. DIJAGNOSTIKA

The **Dijagnostika** page should contain main cards / “kućice” for the following groups:

- PCR DIJAGNOSTIKA
- BRZI DIJAGNOSTIČKI TESTOVI
- SEROLOGIJA I IMUNOLOGIJA
- POCT DIJAGNOSTIKA

These are the main category cards on the Dijagnostika page.

---

## PCR DIJAGNOSTIKA

PCR Dijagnostika should be a card / “kućica”.

When opened, it contains these sections:

- HPV RT-PCR Testovi
- STI RT-PCR Testovi
- Respiratorne RT-PCR Infekcije

Inside those sections, show the listed products as cards.

### HPV RT-PCR Testovi

Product cards:

#### HPV-Q Real Time PCR Kit

Multiplex RT-PCR test za detekciju 14 visokorizičnih HPV genotipova. Omogućava zasebnu identifikaciju HPV 16 i HPV 18, uz istovremenu detekciju dodatnih visokorizičnih tipova povezanih sa karcinomom grlića materice.

#### HPV-Q Comprehensive Real Time PCR Kit

Napredni panel za detekciju ukupno 28 HPV genotipova (14 visokorizičnih i 14 nisko/srednjerizičnih tipova). Namenjen je sveobuhvatnom HPV skriningu, genotipizaciji i proceni rizika kod pacijenata.

#### HPV-Q+ Comprehensive Real Time PCR Kit

Najširi HPV panel iz Genes2Me portfolija za kompletnu analizu visokorizičnih i niskorizičnih HPV infekcija sa pojedinačnom detekcijom i genotipizacijom 28 genotipova.

---

### STI RT-PCR Testovi

Product cards:

#### STI-Q Comprehensive Real Time PCR Kit / 14 patogena

Multiplex panel za istovremenu detekciju najčešćih seksualno prenosivih infekcija iz jednog uzorka, omogućavajući brzu i preciznu laboratorijsku dijagnostiku.

#### STI7-Q Real Time PCR Kit

Panel za detekciju sedam najčešćih uzročnika seksualno prenosivih bolesti u jednoj analizi. Idealan za rutinski skrining i dijagnostiku reproduktivnih infekcija.

After these cards, show the following as a compact list, badge grid, or small icon list.

STI patogeni:

- TGC-III
- Chlamydia
- Gonorrhea
- Mycoplasma
- Ureaplasma
- HSV
- Trichomonas
- Syphilis
- HHV
- Toxoplasma

---

### Respiratorne RT-PCR Infekcije

Product cards:

#### Respiratory Panel

Multiplex RT-PCR panel za istovremenu detekciju najčešćih virusnih i bakterijskih uzročnika respiratornih infekcija, uključujući grip, RSV, koronaviruse i druge respiratorne patogene.

#### Comprehensive Respiratory Virus Panel / CRVP

Napredni respiratorni panel koji omogućava detekciju i sekvenciranje više respiratornih virusa i njihovih sojeva, uključujući koronaviruse, influencu i adenoviruse.

---

## BRZI DIJAGNOSTIČKI TESTOVI

Brzi dijagnostički testovi should also be a card / “kućica”.

When opened, it should first show two cards:

- Imunohromatografski brzi testovi
- Test trake za urin

### Test trake za urin

Show these as product cards or simple list cards:

- Urinske test trake 10 parametara
- Urinske test trake 11 parametara

### Imunohromatografski brzi testovi

This section has a deeper internal division.

Show these as major subsection headings or category cards:

- BAKTERIOLOGIJA / INFEKCIJE
- VIRUSOLOGIJA
- PARAZITOLOGIJA
- KARDIOLOGIJA
- TUMORSKI MARKERI
- TOKSIKOLOGIJA / DROGE TESTOVI

Inside each, preserve the following subheadings and product lists.

---

### BAKTERIOLOGIJA / INFEKCIJE

#### Gastrointestinalne bakterijske infekcije

- H. pylori Antigen Rapid Test Cassette
- Campylobacter Rapid Test Cassette
- Clostridium difficile GDH + Toxin A + Toxin B Combo Rapid Test
- Clostridium difficile Toxin A + Toxin B Combo Rapid Test

#### Respiratorne bakterijske infekcije

- Strep A Test Card
- Mycoplasma pneumoniae Antigen Rapid Test

#### Polno prenosive infekcije

- CHLAMYTOP Rapid Test Cassette

#### Sistemske bakterijske infekcije

- Leptospira IgG/IgM Rapid Test Cassette

---

### VIRUSOLOGIJA

#### Respiratorni virusi

- SARS-CoV-2 Antigen Rapid Test
- RSV Rapid Test
- Influenza A+B Rapid Test
- SARS-CoV-2/Influenza A+B/RSV Combo Test
- Adeno/Influenza A+B/RSV Combo Test
- Multiplex Respiratory Antigen Rapid Test

#### Gastrointestinalni virusi

- Rotavirus Rapid Test
- Norovirus Rapid Test
- Adeno/Rota Combo Test
- Norovirus + Rotavirus + Adenovirus + Astrovirus Combo Test

#### Sistemske virusne infekcije

- HCV Rapid Test
- HIV 1/2 Rapid Test
- HBsAg Rapid Test
- HAV IgG/IgM Rapid Test
- Monkeypox Antigen Rapid Test
- Mononucleosis Rapid Test

---

### PARAZITOLOGIJA

- Entamoeba / Giardia / Crypto Rapid Test
- Trichomonas Vaginalis Rapid Test

---

### KARDIOLOGIJA

- Cardiac Troponin I Rapid Test
- Myoglobin / CK-MB / Troponin I Combo Test

---

### TUMORSKI MARKERI

- FOB Antigen Rapid Test Cassette
- Transferrin / FOB / Hb-Hp Combo Rapid Test Cassette

---

### TOKSIKOLOGIJA / DROGE TESTOVI

#### Panel testovi

- DOA 3 Panel Test
- DOA 5 Panel Test / ORIENT GENE
- DOA 10 Panel Test / ORIENT GENE
- Multi-Drug 17 Drugs Rapid Test

#### Pojedinačni testovi

- Alcohol Rapid Test
- Benzodiazepines / BZO Rapid Test
- Marijuana / THC Rapid Test
- Amphetamine / AMP Rapid Test
- Methamphetamine / MET Rapid Test
- Ecstasy / MDMA Rapid Test
- Cocaine / COC Rapid Test
- Phencyclidine / PCP Rapid Test
- Methadone / MTD Rapid Test
- Buprenorphine / BUP Rapid Test
- Cotinine Rapid Test

---

## SEROLOGIJA I IMUNOLOGIJA

This should be shown as a section with compact cards or simple list cards.

Items:

- RPR
- TPHA
- Reumatoidni faktor / RF
- ASO
- CRP / lateks / serološki testovi
- Ostali imunološki i serološki testovi

---

## POCT DIJAGNOSTIKA

This section should start with:

- POCT testovi
- Fluorescentni Imunoesej / FIA Testovi - kvantitativni

Then display the following grouped sections.

Each group heading should contain product/test cards underneath.

### Kardiološki markeri

#### Troponin I / Myoglobin / CK-MB / 3 u 1

Brza procena akutnog infarkta miokarda i oštećenja srčanog mišića.

#### cTnI / Cardiac Troponin I

Visoko specifičan marker za dijagnostiku infarkta miokarda.

#### NT-proBNP

Marker srčane insuficijencije i procene opterećenja srca.

---

### Markeri inflamacije i infekcije

#### CRP / C-reaktivni protein

Kvantitativno određivanje upalnih procesa i bakterijskih infekcija.

#### ASO / Antistreptolizin O

Detekcija prethodne ili aktuelne streptokokne infekcije.

---

### Autoimuni i reumatološki testovi

#### Rheumatoid Factor IgM / RF IgM

Pomoć u dijagnostici reumatoidnog artritisa i drugih autoimunih oboljenja.

---

### Gastroenterološki testovi

#### Calprotectin

Marker inflamatornih bolesti creva / IBD.

#### H. pylori Antigen

Detekcija infekcije bakterijom Helicobacter pylori iz uzorka stolice.

#### FOB / Fecal Occult Blood

Otkrivanje okultnog / skrivenog krvarenja u gastrointestinalnom traktu.

---

### Hematološki i metabolički testovi

#### Ferritin

Procena zaliha gvožđa i dijagnostika anemija.

#### Vitamin D

Kvantitativno određivanje nivoa vitamina D u organizmu.

---

### Koagulacija i tromboza

#### D-Dimer

Pomoć u dijagnostici duboke venske tromboze / DVT, plućne embolije i poremećaja koagulacije.

---

# 2. LABORATORIJSKA OPREMA

The Laboratorijska oprema page contains the section:

## POCT ANALIZATORI

This section must use a grid of cards / “male kućice”.

Each analyzer card must include:

- Image of analyzer
- Name
- Short description
- Button: Osnovne informacije
- Button: PDF katalog
- Button: Poseti sajt proizvođača

The analyzer detail content should use:

- Full product description
- Specification table
- Optional download / external buttons

Do not turn the specification content into normal paragraphs. Use a table with two columns:

- Karakteristika
- Specifikacija

---

## Analyzer Products

### A1cChek Pro Glycohemoglobin Analyzer

A1cChek Pro Glycohemoglobin Analyzer je napredni HbA1c analizator dizajniran za brzo, precizno i pouzdano praćenje glikoregulacije kod pacijenata sa dijabetesom. Zahvaljujući savremenoj tehnologiji boronatne afinitetne hromatografije, omogućava tačne rezultate za svega nekoliko minuta uz minimalnu količinu uzorka. Kompaktan dizajn, intuitivan ekran osetljiv na dodir i široke mogućnosti povezivanja čine ga idealnim rešenjem za laboratorije, privatne klinike i point-of-care centre. Omogućućeno je puštanje četiri uzoraka u isto vreme.

Specification table:

| Karakteristika     | Specifikacija                    |
| ------------------ | -------------------------------- |
| Parametar          | HbA1c                            |
| Tehnologija        | Boronate Affinity Chromatography |
| Vreme do rezultata | ~5 minuta                        |
| Uzorak             | Kapilarna i venska krv           |
| Zapremina uzorka   | 3 μL                             |
| Memorija           | 1000 rezultata                   |
| Povezivanje        | WIFI / LAN / USB / RS-232        |
| Interfejs          | Color Touch Screen               |

---

### ALLTEST AFR-600

ALLTEST AFR-600 je savremeni POCT fluorescentni imunofluorescentni analizator namenjen brzoj i pouzdanoj dijagnostici širokog spektra biomarkera. Kombinujući visoku preciznost, jednostavno rukovanje i izuzetno kratko vreme očitavanja, omogućava efikasan rad u laboratorijama, ambulantama, urgentnim centrima i drugim zdravstvenim ustanovama. Ugrađeni termalni štampač, ekran osetljiv na dodir i velika memorija dodatno doprinose produktivnosti i pouzdanosti rada.

Specification table:

| Karakteristika   | Specifikacija             |
| ---------------- | ------------------------- |
| Tip analizatora  | Fluorescent Immunoassay   |
| Broj kanala      | Single Channel            |
| Vreme očitavanja | < 20 sekundi              |
| Ekran            | LCD Touch Screen          |
| Memorija         | 10.000 rezultata          |
| Printer          | Ugrađeni termalni printer |
| Način rada       | Plug & Play               |

---

### ALLTEST AFR-700

ALLTEST AFR-700 je visokoperformansni fluorescentni imunofluorescentni analizator dizajniran za laboratorije sa većim obimom rada i potrebom za maksimalnom efikasnošću. Sa 12 nezavisnih kanala omomogućeno je puštanje 12 razlićitih testova u isto vreme uz izuzetnu preciznost i stabilnost sistema. Savremeni softver, brzo očitavanje i kompatibilnost sa LIS sistemima čine ga idealnim rešenjem za moderne dijagnostičke centre.

Specification table:

| Karakteristika     | Specifikacija                |
| ------------------ | ---------------------------- |
| Tip analizatora    | Fluorescence Immunoassay     |
| Broj kanala        | 12 kanala                    |
| Vreme očitavanja   | < 20 sekundi                 |
| Kompatibilnost     | LIS povezivanje              |
| Kontrola kvaliteta | Integrisan QC monitoring     |
| Tip testova        | Kvantitativni i kvalitativni |
| Način rada         | Plug & Play                  |

---

### Eaglenos Elektrolit Analyzer

Eaglenos Elektrolit Analyzer pruža brzo, precizno i stabilno određivanje ključnih elektrolita u svakodnevnom laboratorijskom radu. Baziran na savremenoj ISE tehnologiji, omogućava pouzdanu analizu uz jednostavno rukovanje i automatsku kalibraciju. Dizajniran je za bolnice, laboratorije i urgentne centre kojima su brzina i tačnost rezultata od ključnog značaja.

Specification table:

| Karakteristika | Specifikacija             |
| -------------- | ------------------------- |
| Parametri      | Na+, K+, Cl−, Ca++, Mg++  |
| Tehnologija    | ISE tehnologija           |
| Tip uzorka     | Serum / plazma / puna krv |
| Kalibracija    | Automatska                |
| Vreme analize  | Brzo očitavanje           |
| Ekran          | LCD Touch Display         |
| Printer        | Ugrađeni termalni printer |
| Primena        | Bolnice i laboratorije    |

---

# 3. FARMACEUTSKI I MEDICINSKI PROIZVODI

This page must use cards / “kockice” with icons.

The main cards are:

- Dijetetski suplementi
- Flasteri i trake za bolove
- Kućni testovi

Inside each card or section, show the following sub-items.

## Dijetetski suplementi

- Vitamini
- Minerali
- Imunološka podrška

## Flasteri i trake za bolove

- Kinezio trake
- Medicinski flasteri
- Toplo/hladno terapijski flasteri

## Kućni testovi

- hCG testovi za trudnoću

Use “hCG testovi za trudnoću” as the visible label. Do not display only “hCG” by itself.

---

# Visual Hierarchy

Use this hierarchy:

- Page title: main product group
- Large cards: main categories
- Medium cards/sections: subcategories
- Small cards: individual products/tests
- Tables: analyzer specifications only

Avoid placing the entire product catalog as one long unstructured text block.

Use grids, cards, section headings, accordions, tabs, or detail pages where appropriate, but preserve the client’s exact structure.

---

# Important Instruction

Do not rewrite, simplify, or medically reinterpret product names unless only formatting is needed.

Do not invent new categories.

Do not remove any products.

Do not change the client’s hierarchy.

The job is to translate their provided structure into a clean website layout while keeping the same organization.
