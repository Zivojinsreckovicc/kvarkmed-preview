<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
DO NOT KILL OR START DEVELOPMENT SERVERS, THE USER WILL LOOK AT THE DEV SERVER, AND PROVIDE ERRORS
# AGENTS.md

## Website Context

This project is a premium Serbian-language website for a company in the medical, diagnostic, laboratory, pharmaceutical, and healthcare supply niche.

The website should feel professional, clinical, trustworthy, minimal, and premium — not generic “medical blue template” design. The visual direction should combine Zara-style minimalism with Apple-style whitespace: clean layouts, strong typography, calm spacing, elegant section rhythm, and restrained use of color.

The website is multipage and written in Serbian.

Main navigation:

* POČETNA
* O NAMA
* USLUGE
* PROIZVODI
* PARTNERI
* NOVOSTI / BLOG
* KONTAKT

## Product Navigation Structure

The “PROIZVODI” item in the navigation should have a dropdown with three main product groups:

1. DIJAGNOSTIKA
2. LABORATORIJSKA OPREMA
3. FARMACEUTSKI I MEDICINSKI PROIZVODI

Each product group should be treated as a serious product category with clear hierarchy, clean cards, structured subcategories, and SEO-friendly content.

## Main Product Groups

### 1. DIJAGNOSTIKA

This category includes:

* PCR dijagnostika
* Brzi dijagnostički testovi
* Serologija i imunologija
* POCT dijagnostika

PCR dijagnostika includes groups such as:

* HPV RT-PCR testovi
* STI RT-PCR testovi
* Respiratorne RT-PCR infekcije

Brzi dijagnostički testovi include:

* Imunohromatografski brzi testovi
* Test trake za urin

Imunohromatografski testovi should be divided into logical medical categories such as:

* Bakteriologija / infekcije
* Virusologija
* Parazitologija
* Kardiologija
* Tumorski markeri
* Toksikologija / droge testovi

POCT dijagnostika includes quantitative FIA tests and should be organized by medical use case:

* Kardiološki markeri
* Markeri inflamacije i infekcije
* Autoimuni i reumatološki testovi
* Gastroenterološki testovi
* Hematološki i metabolički testovi
* Koagulacija i tromboza

### 2. LABORATORIJSKA OPREMA

This category includes POCT analyzers and laboratory devices.

Products should be displayed as premium cards with:

* Product image
* Product name
* Short description
* Key specifications
* Buttons for:

  * Osnovne informacije
  * PDF katalog
  * Poseti sajt proizvođača

Known products include:

* A1cChek Pro Glycohemoglobin Analyzer
* ALLTEST AFR-600
* ALLTEST AFR-700
* Eaglenos Elektrolit Analyzer

The product detail layout should feel structured and technical, but still clean and digestible. Use tables only where they improve clarity.

### 3. FARMACEUTSKI I MEDICINSKI PROIZVODI

This category should use clean cards or icon-based blocks.

Includes:

* Dijetetski suplementi

  * Vitamini
  * Minerali
  * Imunološka podrška

* Flasteri i trake za bolove

  * Kinezio trake
  * Medicinski flasteri
  * Toplo/hladno terapijski flasteri

* Kućni testovi

  * hCG testovi za trudnoću

## Visual Direction

Use a premium, minimal, medical aesthetic.

The design should feel:

* Clean
* Clinical
* Modern
* Trustworthy
* Spacious
* High-end
* Calm
* Professional

Avoid:

* Generic hospital stock-template feeling
* Overloaded sections
* Loud gradients
* Too many icons
* Cheap card shadows
* Excessive blue medical clichés
* Dense text blocks without hierarchy
* Aggressive sales copy

## Color Palette

Base:

* Body background: white
* Text: dark charcoal / near-black
* Secondary text: muted gray
* Accent color: `rgba(34, 105, 113)`

The accent color can be used for:

* Section backgrounds
* Split columns
* Small labels
* Buttons
* Underlines
* Hover states
* Feature cards
* Product category blocks

Use the accent color with restraint. It should feel premium, not loud.

## Typography

Use:

* Montserrat for headings
* Poppins for eyebrows, body text, navigation, buttons, labels, and smaller UI text

Typography should be elegant, clean, and spacious.

Headings should feel premium and confident, not oversized for no reason. Body copy should be readable and calm.

## Language

All website content must be in Serbian.

Use professional Serbian language suitable for the medical and laboratory industry.

Tone should be:

* Stručan
* Pouzdan
* Jasan
* Premium
* Profesionalan
* Bez nepotrebnog marketing preterivanja

Avoid casual wording, slang, and weak generic phrases.

## Layout Principles

Use strong whitespace.

Sections should breathe.

Preferred layouts:

* Large hero sections with minimal copy
* Split sections with text on one side and image/card/grid on the other
* Clean product category cards
* Premium grids
* Editorial spacing
* Alternating white and accent-background sections
* Clear CTA sections
* Minimal but elegant hover interactions

Cards should look premium and simple, not like cheap Bootstrap defaults.

## SEO Requirements

Write SEO-optimized code and content structure.

Use:

* Proper meta titles
* Meta descriptions
* Semantic HTML
* Correct heading hierarchy
* Descriptive alt text
* Lazy loading for images
* Clean internal linking
* SEO-friendly page structure
* Blog-ready structure for Novosti / Blog
* Clear product/category page titles
* Descriptive Serbian keywords naturally placed in text

Do not keyword-stuff. Medical credibility matters more than aggressive SEO.

## UX Requirements

The website should make it easy for users to understand:

* What the company offers
* Which product categories exist
* Which diagnostic/laboratory products are available
* How to contact the company
* How to request more information
* Which partners or manufacturers are represented

Product categories must be easy to scan.

Dropdown navigation must be clear and logical.

On mobile, navigation and product category access must remain simple and usable.

## Content Handling

Use the provided client content as raw source material.

Rewrite and organize it into polished Serbian website copy when needed.

Do not blindly paste messy raw content directly into the UI.

Clean up grammar, spacing, hierarchy, and terminology while preserving meaning.

Where product details are incomplete, create a structure that can easily accept more information later.

Do not invent technical claims, certifications, medical approvals, or regulatory statements unless explicitly provided.

## Medical Credibility Rules

Be precise.

Do not make exaggerated claims such as:

* “najbolji”
* “100% tačan”
* “garantovani rezultati”
* “revolucionarno”
* “leči”
* “sprečava bolest”

Use safer professional wording such as:

* “namenjeno za”
* “omogućava”
* “podržava”
* “koristi se u”
* “dizajnirano za”
* “pomaže u dijagnostičkom procesu”
* “brza i pouzdana laboratorijska analiza”

## Brand Feel

The website should feel like a serious distributor / supplier of medical diagnostics, laboratory equipment, and healthcare products.

It should not feel like an ecommerce shop.

It should feel like a premium B2B medical website aimed at:

* Laboratorije
* Klinike
* Domove zdravlja
* Bolnice
* Apoteke
* Medicinske ustanove
* Distributere i partnere

## Final Quality Bar

Every page should look intentional.

Every section should have a clear purpose.

The website should feel premium even before images are added.

Do not create generic filler sections just to fill space.

Prioritize clarity, hierarchy, spacing, and trust.
