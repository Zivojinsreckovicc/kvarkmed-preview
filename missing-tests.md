# Testovi iz tabele koji nisu na stranici „Dijagnostika"

Ovaj dokument je generisan poređenjem fajla `lista-sa-linkovima.xlsx` (75 testova) sa
sadržajem stranice `/proizvodi/dijagnostika` (`src/app/proizvodi/dijagnostika/page.tsx`,
podaci u `src/lib/products.ts`).

**Status:** za sve testove iz tabele koji POSTOJE na stranici link ka proizvođaču je
već dodat. Ispod su navedeni testovi iz tabele koji **trenutno nisu prikazani** na
stranici — odlučite da li ih treba dodati ili ignorisati. Link je već uparen sa svakim,
pa ga je dovoljno samo ubaciti u `src/lib/products.ts` ako test treba dodati.

---

## Bakteriologija / infekcije

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Syphilis Rapid Test Cassette | ISY-302 | 40 | https://www.alltests.com.cn/Home/ProductInfo/1029 |
| H. pylori **Antibody** Rapid Test Cassette | IHP-402 | 40 | https://www.alltests.com.cn/Home/ProductInfo/30 |
| H. pylori Antigen Rapid Test Cassette (for Lateral Flow Reader) | IHP-R602 | 25 | https://www.alltests.com.cn/Home/ProductInfo/351 |
| Clostridium difficile **GDH** Rapid Test Cassette (samostalni) | ICDG-602 | 10 | https://www.alltests.com.cn/Home/ProductInfo/993 |
| Clostridium difficile GDH Rapid Test Cassette (for Lateral Flow Reader) | ICDG-R602 | 10 | https://www.alltests.com.cn/Home/ProductInfo/1199 |
| Tetanus Rapid Test Cassette | ITE-402 | 40 | https://www.alltests.com.cn/Home/ProductInfo/73 |
| Tetanus Rapid Test Cassette (semi-kvantitativni, za čitač) | ITE-R402SQ | 25 | https://www.alltests.com.cn/Home/ProductInfo/1149 |
| S. pneumoniae and L. pneumophila Combo Rapid Test Cassette | ISLC-125 | 10 | https://www.alltests.com.cn/Home/ProductInfo/58 |
| CARBA 5 In 1 Rapid Test Cassette | GCCRE-T1402a | 20 | _nema link u tabeli_ |
| BIOSYNEX MYCOPLASMATEST | 103007 | 20 | _nema link u tabeli_ — proveriti da li je isto što i „Mycoplasma pneumoniae Antigen Rapid Test" koji je već na stranici |

## Virusologija

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| RSV / Influenza A+B Combo Rapid Test Cassette | IRIC-525 | 10 | https://www.alltests.com.cn/Home/ProductInfo/1063 |
| Norovirus / Rotavirus / Adenovirus Combo Rapid Test Cassette (3 u 1) | INRA-635 | 10 | https://www.alltests.com.cn/Home/ProductInfo/1092 |

> Napomena: na stranici već postoji 4-u-1 kombinacija „Norovirus + Rotavirus + Adenovirus + Astrovirus" (IMVD-645). INRA-635 je zaseban 3-u-1 proizvod.

## Parazitologija

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Cryptosporidium and Giardia Lamblia Combo Rapid Test Cassette | ICGC-625 | 10 | https://www.alltests.com.cn/Home/ProductInfo/991 |
| Malaria P.f./P.v./Pan Rapid Test Cassette | IMPVF-402 | 25 | https://www.alltests.com.cn/Home/ProductInfo/1006 |

## Sistemske infekcije

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Lyme IgG/IgM Rapid Test Cassette | ILY-402 | 10 | https://www.alltests.com.cn/Home/ProductInfo/71 |

## Gastroenterologija

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Celiac Rapid Test Cassette | OCEA-402 | 25 | https://www.alltests.com.cn/Home/ProductInfo/893 |
| Calprotectin Rapid Test Cassette (samostalni) | OCAL-602 | 10 | https://www.alltests.com.cn/Home/ProductInfo/1102 |

> Napomena: na stranici već postoji „Calprotectin and Lactoferrin Combo" (1099) i POCT „Calprotectin" FIA (612). OCAL-602 je zaseban samostalni kalprotektin kasetni test.

## Test trake za urin

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Urinalysis Reagent Strips 2U (2 parametra) | U031-14 | 100 | https://www.alltests.com.cn/Home/ProductInfo/204 |

> Na stranici postoje varijante 10 i 11 parametara; varijanta sa 2 parametra nije navedena.

## Alergologija (imunoblot)

| Test | Kataloški broj | Pakovanje | Link proizvođača |
|------|----------------|-----------|------------------|
| Food Allergen-specific IgE Antibodies Test Kit (Immunoblotting) | WB-FIgE-911 | 40 | https://www.alltests.com.cn/Home/ProductInfo/1243 |
| Inhalant Allergen-specific IgE Antibodies Test Kit (Immunoblotting) | WB-IIgE-811 | 40 | https://www.alltests.com.cn/Home/ProductInfo/1241 |
| Inhalant-Food Allergen-specific IgE Antibodies Test Kit (Immunoblotting) | WB-IFIgE-1611 | 40 | https://www.alltests.com.cn/Home/ProductInfo/555 |

> Cela kategorija alergoloških imunoblot testova trenutno ne postoji na stranici.

---

## Dodatna napomena — testovi na stranici bez linka u tabeli

Sledeći testovi se **već nalaze** na stranici, ali za njih u `lista-sa-linkovima.xlsx`
ne postoji link (ili nisu deo ALLTEST tabele), pa link ka proizvođaču nije dodat:

- **Mycoplasma pneumoniae Antigen Rapid Test** — moguće da odgovara stavci „BIOSYNEX MYCOPLASMATEST" (tabela nema link)
- **CHLAMYTOP Rapid Test Cassette** — u tabeli (kat. 1030003), ali bez linka
- **Leptospira IgG/IgM Rapid Test Cassette** — nije u tabeli
- **HAV IgG/IgM Rapid Test** — nije u tabeli
- **Cotinine Rapid Test (Urin)** — nije u tabeli
- **DOA 3 / 5 / 10 Panel Test (Orient Gene)** — u tabeli kao „One Step Multi-Drug Screen Test" (GBDOA-135 / GBDOA-155 / GBDOA-1105), ali bez linka

PCR testovi (Genes2Me) i serološki testovi (Cypress Diagnostics / diagnostics.be) nisu
deo ove ALLTEST tabele; oni već imaju sopstvene linkove ka proizvođaču tamo gde postoje.
