import type { Course, Module, SupplementaryMaterial } from "../course";

/**
 * AGRI-TOUR MOOC — "Agritourism applied in the Pacific: Applied Green Deal
 * and Farm to Fork" (Erasmus+ CBHE Strand 1, WP3).
 *
 * Structure (8 modules × 6 learning units = 48 units) and per-module
 * requirements come from the project's Application Form and the D3.2
 * Practical Guidelines for Preparing Educational Materials: each module
 * needs an intro (~100-150 words), 6 core learning-unit scripts, at least
 * 4 supplementary materials spanning at least 3 different formats, a
 * 10-item proficiency test (4 alternatives, pass ≥ 7/10) and a reference
 * list. Everything below except the structure itself is a DRAFT for the
 * module-owner partner to confirm or replace before Pilot Release v0.9.
 *
 * Note: the Application Form lists M2's owner as UNISG (University of
 * Gastronomic Sciences, Pollenzo); the D3.2 guidelines table instead says
 * "UNICATT" for the same module. Kept as UNISG here (grant is authoritative)
 * — worth double-checking with the project team which is correct.
 */

function draftQuestion(id: string, question: string): {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
} {
  return {
    id,
    question,
    options: ["Možnosť A (doplniť)", "Možnosť B (doplniť)", "Možnosť C (doplniť)", "Možnosť D (doplniť)"],
    correctIndex: 0,
  };
}

function draftMaterial(
  id: string,
  type: SupplementaryMaterial["type"],
  title: string,
  note: string,
): SupplementaryMaterial {
  return { id, type, title, note };
}

const modules: Module[] = [
  {
    id: "m1",
    title: "Modul 1: Neuroscience of Food (IVI)",
    owner: "IVI",
    intro:
      "Modul skúma, ako mozog a zmysly ovplyvňujú rozhodovanie o jedle a ako tieto poznatky využiť pri tvorbe " +
      "zážitkovej agroturistiky. Študenti sa oboznámia so základmi aplikovanej sociálnej psychológie " +
      "spotrebiteľského správania, princípmi eko-gastronómie a podpory udržateľnej a zdravej konzumácie. Súčasťou " +
      "modulu sú cvičenia zamerané na zmenu správania, ktoré pomôžu navrhnúť vlastnú zážitkovú aktivitu spojenú " +
      "s jedlom pre návštevníkov agroturistickej prevádzky, doplnené prípadovými štúdiami zo skutočných " +
      "prevádzok v Pacifiku aj Európe.",
    lessons: [
      {
        id: "m1-l1",
        title: "1.1 Ako mozog rozhoduje o jedle",
        content:
          "<p>Obsah lekcie doplní partner IVI.</p>" +
          "<p><em>Video nižšie je len UKÁŽKA mechanizmu (video + kvízové zastávky) — " +
          "nahraďte <code>youtubeId</code> a otázky v <code>course-content.ts</code> skutočným " +
          "videom lekcie 1.1 z YouTube kanála AGRI-TOUR.</em></p>",
        video: {
          youtubeId: "aqz-KE-bpKQ",
          checkpoints: [
            {
              id: "m1-l1-cp1",
              atSeconds: 10,
              question: draftQuestion("m1-l1-cp1-q", "UKÁŽKOVÁ otázka č. 1 (doplniť skutočnú otázku k video obsahu v čase 0:10)"),
            },
            {
              id: "m1-l1-cp2",
              atSeconds: 25,
              question: draftQuestion("m1-l1-cp2-q", "UKÁŽKOVÁ otázka č. 2 (doplniť skutočnú otázku k video obsahu v čase 0:25)"),
            },
          ],
        },
      },
      { id: "m1-l2", title: "1.2 Zmyslové vnímanie a zážitkové aktivity v agroturistike", content: "<p>Obsah lekcie doplní partner IVI.</p>" },
      { id: "m1-l3", title: "1.3 Aplikovaná sociálna psychológia spotrebiteľského správania", content: "<p>Obsah lekcie doplní partner IVI.</p>" },
      { id: "m1-l4", title: "1.4 Podpora udržateľnej a zdravej spotreby", content: "<p>Obsah lekcie doplní partner IVI.</p>" },
      { id: "m1-l5", title: "1.5 Prípadové štúdie zo zážitkovej agroturistiky", content: "<p>Obsah lekcie doplní partner IVI.</p>" },
      {
        id: "m1-l6",
        title: "1.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 1 pripraví partner IVI.</p>",
        quiz: {
          questions: [
            draftQuestion("m1-q1", "Ktorý faktor najviac ovplyvňuje zmyslové vnímanie jedla pri agroturistickom zážitku?"),
            draftQuestion("m1-q2", "Čo je cieľom aplikovanej sociálnej psychológie v kontexte spotreby potravín?"),
            draftQuestion("m1-q3", "Ktorý prístup podporuje udržateľné spotrebiteľské správanie?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m1-mat1", "case-study", "Prípadová štúdia: zážitková degustácia na agroturistickej farme", "TBD od IVI"),
      draftMaterial("m1-mat2", "worksheet", "Pracovný list: navrhni cvičenie na zmenu spotrebiteľského správania", "TBD od IVI"),
      draftMaterial("m1-mat3", "infographic", "Infografika: ako mozog rozhoduje o jedle (proces v 5 krokoch)", "TBD od IVI"),
      draftMaterial("m1-mat4", "recommended-links", "Odporúčané zdroje k aplikovanej psychológii jedla", "TBD od IVI"),
    ],
    references: ["TBD — zoznam referencií doplní partner IVI"],
  },
  {
    id: "m2",
    title: "Modul 2: Cultural sustainability of food (UNISG)",
    owner: "UNISG",
    intro:
      "Modul sa venuje kultúrnej udržateľnosti jedla a úlohe potravinových labelov a označení pôvodu v " +
      "agroturistike. Študenti sa naučia, prečo je transparentnosť pôvodu potravín dôležitá pre dôveru " +
      "návštevníkov, ako fungujú geografické označenia a certifikáty tradičných produktov, a ako príbehy " +
      "lokálnych producentov posilňujú hodnotu destinácie. Modul vychádza z princípov hnutia Slow Food a ukazuje, " +
      "ako spojiť tradíciu s inováciou pri komunikácii lokálneho jedla turistom.",
    lessons: [
      {
        id: "m2-l1",
        title: "2.1 Anatómia potravinového labelu",
        content:
          "<p>Prednáška rozoberá potravinový label ako právny dokument, nie len marketingový prvok: rozdiel " +
          "medzi \"predajnou\" prednou stranou obalu a \"právnou\" zadnou stranou, povinné zvýraznenie 14 " +
          "hlavných alergénov, štandardizovanú nutričnú tabuľku na 100 g/100 ml, rozdiel medzi \"minimálnou " +
          "trvanlivosťou\" a \"spotrebujte do\", pravidlá pre tvrdenia typu \"low fat\" a zákaz greenwashingu.</p>",
        video: {
          youtubeId: "cdZjNwPuvNA",
          checkpoints: [
            {
              id: "m2-l1-cp1",
              atSeconds: 168,
              question: {
                id: "m2-l1-cp1-q",
                question: "Čo musí byť na EU potravinovom labeli podľa prednášky zvýraznené tučným písmom alebo veľkými písmenami?",
                options: [
                  "Cena výrobku",
                  "14 hlavných alergénov",
                  "Meno výrobcu",
                  "Krajina pôvodu obalu",
                ],
                correctIndex: 1,
              },
            },
            {
              id: "m2-l1-cp2",
              atSeconds: 361,
              question: {
                id: "m2-l1-cp2-q",
                question: "Aký dobrovoľný nástroj transparentnosti spomína prednáška — napr. kód, ktorý ukáže presnú farmu pôvodu?",
                options: [
                  "QR kód prepojený na dáta o farme/uhlíkovej stope",
                  "Hologram na etikete",
                  "Podpis výrobcu na obale",
                  "Čiarový kód EAN",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l2",
        title: "2.2 Ako dekódovať EU potravinový label",
        content:
          "<p>Prednáška rozoberá tri ciele EU legislatívy o labelingu (bezpečnosť, informovanosť, poctivá " +
          "hospodárska súťaž), povinné kategórie (právny názov potraviny, nutričná deklarácia, dátum, " +
          "označenie pôvodu pri čerstvých produktoch) a súvis medzi jasným označením pôvodu a dôverou " +
          "návštevníka na farme.</p>",
        video: {
          youtubeId: "AKSFlA7IE4Q",
          checkpoints: [
            {
              id: "m2-l2-cp1",
              atSeconds: 168,
              question: {
                id: "m2-l2-cp1-q",
                question: "Čo musí label podľa prednášky uviesť o samotnej potravine — čo si výrobca nemôže len \"vymyslieť\"?",
                options: [
                  "Právny (zákonný) názov potraviny",
                  "Odporúčanú maloobchodnú cenu",
                  "Logo výrobcu",
                  "Dátum založenia firmy",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l2-cp2",
              atSeconds: 270,
              question: {
                id: "m2-l2-cp2-q",
                question: "Prečo je podľa prednášky pre spotrebiteľa dôležité označenie pôvodu (napr. cesnak z lokálneho regiónu namiesto z druhého konca sveta)?",
                options: [
                  "Umožňuje zvoliť lokálnu možnosť a znížiť \"food miles\"/uhlíkovú stopu",
                  "Je to zákonom vyžadované len pre exportné produkty",
                  "Ovplyvňuje to výšku DPH",
                  "Nemá to žiadny praktický význam",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l3",
        title: "2.3 Geografické označenia (PDO/PGI) a vidiecky turizmus",
        content:
          "<p>Prednáška vysvetľuje, ako sa z názvu produktu môže stať právne chránený majetok: PDO (najprísnejšie " +
          "— celý proces od surovín po dozrievanie musí prebehnúť v regióne) a PGI, rozdiel medzi GI ako " +
          "verejným statkom a ochrannou známkou ako súkromným majetkom, a prepojenie na turizmus — GI ako " +
          "\"najlepšia marketingová brožúra\" pre vidiecky región.</p>",
        video: {
          youtubeId: "t9lKXrs3Ew4",
          checkpoints: [
            {
              id: "m2-l3-cp1",
              atSeconds: 103,
              question: {
                id: "m2-l3-cp1-q",
                question: "Čo vyžaduje označenie PDO (Protected Designation of Origin) podľa prednášky?",
                options: [
                  "Aby celý proces — od surovín po finálne dozrievanie — prebehol v danom regióne",
                  "Aby produkt mal medzinárodný patent",
                  "Aby ho vyrábala len jedna konkrétna firma",
                  "Aby bol lacnejší ako konkurencia",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l3-cp2",
              atSeconds: 236,
              question: {
                id: "m2-l3-cp2-q",
                question: "Ako prednáška opisuje geografické označenie vo vzťahu k turizmu?",
                options: [
                  "Ako najlepšiu marketingovú brožúru, akú môže mať vidiecky región",
                  "Ako prekážku pre rozvoj turizmu",
                  "Ako nástroj výhradne pre online predaj",
                  "Ako niečo, čo s turizmom vôbec nesúvisí",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l4",
        title: "2.4 Princíp transparentnosti v komunikácii o potravinách",
        content:
          "<p>Prednáška predstavuje princíp transparentnosti ako právnu povinnosť (nie len etickú voľbu), " +
          "historický kontext (BSE kríza v 90. rokoch a vznik princípu vysledovateľnosti), kľúčové nariadenie " +
          "FIC (EU č. 1169/2011) a zákaz klamlivých tvrdení vrátane greenwashingu.</p>",
        video: {
          youtubeId: "eyr5AMNnoP0",
          checkpoints: [
            {
              id: "m2-l4-cp1",
              atSeconds: 210,
              question: {
                id: "m2-l4-cp1-q",
                question: "Ktoré nariadenie EÚ prednáška označuje za základný kameň transparentnosti informácií o potravinách?",
                options: [
                  "Nariadenie (EÚ) č. 1169/2011 (nariadenie FIC)",
                  "Nariadenie GDPR",
                  "Smernica o DPH",
                  "Nariadenie REACH",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l4-cp2",
              atSeconds: 377,
              question: {
                id: "m2-l4-cp2-q",
                question: "Ako sa nazýva praktika, keď výrobca napíše na plastovú fľašu \"100% eco-friendly\" bez nezávislej certifikácie?",
                options: [
                  "Greenwashing",
                  "Rebranding",
                  "Traceability",
                  "Upcycling",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l5",
        title: "2.5 Príbehy producentov: od vinárstva po lieskovce",
        content:
          "<p>Táto lekcia predstavuje dva reálne producentské príbehy z regiónu Monferrato v Taliansku (rozhovory " +
          "sú v taliančine — pozri video nižšie v sekcii doplnkových materiálov).</p>" +
          "<p><strong>Cantina Sociale di Lù</strong> — Matteo Currò, pivničný družstevnej vinárne založenej v " +
          "roku 1906 (120 rokov činnosti), predstavuje nové rosé víno vyrobené starou metódou \"salasso\" " +
          "(saignée). Nový label vznikol v spolupráci s komiksovým výtvarníkom z Alessandrie a musí rešpektovať " +
          "pravidlá daného \"disciplinare\" (špecifikácie regiónu).</p>" +
          "<p><strong>Corilù</strong> — Luca Gatti, prezident spoločnosti špecializovanej na lieskovce, ktorú " +
          "pred cca 30 rokmi založil jeho starý otec v Piemonte. Firma vyrába 100% lieskovcové produkty aj " +
          "spracované krémy (vrátane receptúry so 60 % lieskovcov) a nedávno obnovila svoju vizuálnu " +
          "identitu a komunikáciu previazanú na región a dodávateľský reťazec. Prednáška spomína aj historický " +
          "vznik receptu \"gianduia\" — spojenia kakaa s lieskovcami z Piemontu.</p>" +
          "<p>Obe firmy ukazujú princípy z predchádzajúcich lekcií v praxi: label viazaný na špecifikáciu " +
          "regiónu (disciplinare), dôraz na pôvod a transparentnosť dodávateľského reťazca, a spojenie tradície " +
          "s inováciou (nový dizajn labelu, nové receptúry).</p>",
      },
      {
        id: "m2-l6",
        title: "2.6 Zhrnutie modulu a proficiency test",
        content:
          "<p>Zhrnutie modulu 2: potravinový label ako právny dokument, geografické označenia (PDO/PGI) a ich " +
          "väzba na vidiecky turizmus, princíp transparentnosti (nariadenie FIC) a producentské príbehy " +
          "ukazujúce tieto princípy v praxi.</p>",
        quiz: {
          questions: [
            {
              id: "m2-q1",
              question: "Ktoré dve hlavné \"pečate\" EÚ pre geografické označenia spomína prednáška o GI?",
              options: ["PDO a PGI", "ISO a CE", "Bio a Fairtrade", "GMP a HACCP"],
              correctIndex: 0,
            },
            {
              id: "m2-q2",
              question: "Aký je podľa prednášky hlavný rozdiel medzi geografickým označením (GI) a ochrannou známkou?",
              options: [
                "GI je verejný statok, ochranná známka je súkromný komerčný majetok",
                "GI platí len mimo EÚ",
                "Ochranná známka je vždy drahšia",
                "Medzi nimi nie je žiadny rozdiel",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q3",
              question: "Čo musí byť na potravinovom labeli zvýraznené tučným písmom alebo veľkými písmenami?",
              options: ["14 hlavných alergénov", "Názov distribútora", "Čas výroby", "Logo certifikačnej agentúry"],
              correctIndex: 0,
            },
            {
              id: "m2-q4",
              question: "V akej jednotke musí byť prezentovaná povinná nutričná tabuľka?",
              options: ["Na 100 g alebo 100 ml", "Na jednu porciu podľa výrobcu", "Na celé balenie", "Na deň"],
              correctIndex: 0,
            },
            {
              id: "m2-q5",
              question: "Aký je rozdiel medzi \"spotrebujte do\" a \"minimálna trvanlivosť do\"?",
              options: [
                "\"Spotrebujte do\" sa týka bezpečnosti, \"minimálna trvanlivosť\" kvality a plytvania potravinami",
                "Ide o rovnaký údaj v inom jazyku",
                "\"Minimálna trvanlivosť\" sa týka len nápojov",
                "\"Spotrebujte do\" je len odporúčanie bez právneho významu",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q6",
              question: "Ktoré nariadenie EÚ je podľa prednášky základným kameňom transparentnosti informácií o potravinách?",
              options: [
                "Nariadenie (EÚ) č. 1169/2011 (FIC)",
                "Nariadenie GDPR",
                "Smernica o DPH",
                "Nariadenie REACH",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q7",
              question: "Ktorá historická udalosť sa v prednáške spája so vznikom prísnych pravidiel vysledovateľnosti potravín v EÚ?",
              options: [
                "Kríza BSE (\"choroba šialených kráv\") v 90. rokoch",
                "Finančná kríza v roku 2008",
                "Pandémia COVID-19",
                "Vstup Slovenska do EÚ",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q8",
              question: "Ako sa nazýva klamlivá reklama, ktorá tvrdí \"100% eco-friendly\" bez nezávislej certifikácie?",
              options: ["Greenwashing", "Rebranding", "Upcycling", "Downgrading"],
              correctIndex: 0,
            },
            {
              id: "m2-q9",
              question: "Ako prednáška o GI opisuje geografické označenie vo vzťahu k vidieckemu turizmu?",
              options: [
                "Ako najlepšiu marketingovú brožúru, akú môže mať vidiecky región",
                "Ako administratívnu prekážku pre malých producentov",
                "Ako nástroj určený výhradne pre veľkovýrobu",
                "GI podľa prednášky s turizmom vôbec nesúvisí",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q10",
              question: "Aký \"disciplinare\" (súbor pravidiel regiónu) musí rešpektovať aj nový label vína z Cantina Sociale di Lù, spomínaný v prípadovej štúdii?",
              options: [
                "Pravidlá špecifikácie regiónu, ktoré nemožno obísť ani pri novom dizajne labelu",
                "Iba interné firemné smernice bez právnej záväznosti",
                "Európsku smernicu o obaloch",
                "Žiadne — dizajn labelu je úplne voľný",
              ],
              correctIndex: 0,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m2-mat1", "case-study", "Rozhovor: Matteo Currò, pivničný Cantina Sociale di Lù (Monferrato, IT)", "Reálne video, taliansky jazyk (bez SK titulkov) — https://www.youtube.com/watch?v=7YVOr0FCDuo"),
      draftMaterial("m2-mat2", "case-study", "Rozhovor: Luca Gatti, prezident spoločnosti Corilù (lieskovce, Piemont, IT)", "Reálne video, taliansky jazyk (bez SK titulkov) — https://www.youtube.com/watch?v=pOdY1ixwqtU"),
      draftMaterial("m2-mat3", "infographic", "Infografika: typy označení pôvodu potravín v EÚ a Pacifiku", "TBD od UNISG"),
      draftMaterial("m2-mat4", "checklist", "Checklist: ako čítať potravinový label a overiť pôvod", "TBD od UNISG"),
    ],
    references: [
      "Nariadenie (EÚ) č. 1169/2011 o poskytovaní informácií o potravinách spotrebiteľom (FIC)",
      "AGRI-TOUR YouTube: \"The anatomy of a food label\", \"Decoding the EU food label\", \"Geographical indications in the European food sector\", \"The principle of transparency in agri food commercial communication\"",
    ],
  },
  {
    id: "m3",
    title: "Modul 3: Rural culture & agritourism planning (NewEdu)",
    owner: "NewEdu",
    intro:
      "Modul predstavuje európsky model agroturistiky a ukazuje, ako ho prenášať do podmienok tichomorských " +
      "ostrovov. Študenti sa oboznámia s plánovaním malej agroturistickej ponuky, budovaním lokálnych " +
      "hodnotových reťazcov a rozprávaním príbehu vidieckej komunity ako súčasti zážitku návštevníka. Dôraz je " +
      "kladený na praktické kroky — od prvého nápadu po fungujúcu ponuku — a na prípadové štúdie z ostrovných " +
      "prostredí, kde je prenos know-how z Európy najviac relevantný.",
    lessons: [
      {
        id: "m3-l1",
        title: "3.1 Model agroturistiky a jeho prenos na ostrovy Pacifiku",
        content:
          "<p>Prezentácia partnera New Edu z Capacity Building vo Vanuatu: agroturistika ako \"otvorenie brány k " +
          "tomu, čo už máme\" (nie budovanie niečoho nového), paralely medzi Slovenskom a Vanuatu, zmena " +
          "cestovateľských preferencií po COVID-19 smerom k otvoreným priestorom a zmysluplnému zážitku, " +
          "spracovanie suroviny namiesto predaja suroviny (napr. mlieko → zmrzlina), obnova starej budovy na " +
          "kaviareň/informačné centrum, a Facebook ako hlavný marketingový nástroj pre farmárov vo Vanuatu.</p>",
        video: {
          youtubeId: "uSY-AGRo1bg",
          checkpoints: [
            {
              id: "m3-l1-cp1",
              atSeconds: 538,
              question: {
                id: "m3-l1-cp1-q",
                question: "Čo podľa prezentácie čoraz viac hľadajú turisti po pandémii COVID-19?",
                options: [
                  "Otvorené priestory, zdravie a wellness a zmysluplný dopad",
                  "Veľké preplnené výletné lode",
                  "Čo najnižšiu cenu bez ohľadu na zážitok",
                  "Výhradne mestské destinácie",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m3-l1-cp2",
              atSeconds: 1149,
              question: {
                id: "m3-l1-cp2-q",
                question: "Aký nástroj prezentácia označuje za najsilnejší marketingový kanál pre farmára vo Vanuatu?",
                options: ["Facebook", "Instagram", "Tlačené letáky", "Rozhlasová reklama"],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m3-l2", title: "3.2 Podpora vidieckej kultúry a komunít", content: "<p>Obsah lekcie doplní partner NewEdu.</p>" },
      { id: "m3-l3", title: "3.3 Plánovanie agroturistickej prevádzky", content: "<p>Obsah lekcie doplní partner NewEdu.</p>" },
      { id: "m3-l4", title: "3.4 Praktická implementácia — kroky a nástroje", content: "<p>Obsah lekcie doplní partner NewEdu.</p>" },
      { id: "m3-l5", title: "3.5 Prípadové štúdie z EÚ prenositeľné do Pacifiku", content: "<p>Obsah lekcie doplní partner NewEdu.</p>" },
      {
        id: "m3-l6",
        title: "3.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 3 pripraví partner NewEdu.</p>",
        quiz: {
          questions: [
            draftQuestion("m3-q1", "Ktoré prvky európskeho modelu agroturistiky sú prenositeľné na pacifické ostrovy?"),
            draftQuestion("m3-q2", "Čo je prvým krokom pri plánovaní agroturistickej prevádzky?"),
            draftQuestion("m3-q3", "Ako agroturistika podporuje vidiecku kultúru?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m3-mat1", "checklist", "Checklist: kroky na spustenie malej agroturistickej ponuky", "TBD od NewEdu"),
      draftMaterial("m3-mat2", "case-study", "Návšteva farmy Teouma Valley (majiteľka Michelle Prendergast, Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=VEl-GhijywA"),
      draftMaterial("m3-mat3", "worksheet", "Pracovný list: mapovanie zážitku návštevníka", "TBD od NewEdu"),
      draftMaterial("m3-mat4", "photo-story", "Príprava tradičného LapLapu na Api Farm (Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=QBAcjsRyPPE"),
      draftMaterial("m3-mat5", "case-study", "Návšteva Api Farm (Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=LW6aKTMrj2E"),
      draftMaterial("m3-mat6", "case-study", "Návšteva liehovaru 83 Islands Distillery (Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=ArKrksl_gpM"),
      draftMaterial("m3-mat7", "case-study", "Návšteva čokoládovne Gaston Chocolat (majiteľ Olivier, Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=5elGIW1SzuY"),
      draftMaterial("m3-mat8", "case-study", "Návšteva Tanna Coffee (Vanuatu)", "Reálne video, bez prepisu — https://www.youtube.com/watch?v=YGhmIqbmyWY"),
      draftMaterial("m3-mat9", "interview-video", "Rozhovor: Million Dollar Point Restaurant and Bar (Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=rzYGbEQi1u4"),
    ],
    references: ["TBD — zoznam referencií doplní partner NewEdu"],
  },
  {
    id: "m4",
    title: "Modul 4: Precision Agriculture for Micro-Farms (SUA)",
    owner: "SUA",
    intro:
      "Modul ukazuje, ako sa dá precízne poľnohospodárstvo prispôsobiť malým farmám, mikro-farmám a " +
      "agroturistickým prevádzkam pomocou dostupných, praktických a lokálne relevantných nástrojov. Namiesto " +
      "drahých strojov a satelitov modul stavia na jednoduchom rozhodovacom cykle Nameraj – Pochop – Konaj – " +
      "Vyhodnoť – Komunikuj a na nástrojoch ako pôdny senzor vlhkosti, malá meteostanica, dron či digitálny " +
      "denník farmy. Autorka: prof. Ing. Zuzana Palková, PhD. (Slovenská poľnohospodárska univerzita v Nitre).",
    lessons: [
      {
        id: "m4-l1",
        title: "4.1 Precízne poľnohospodárstvo pre mikro-farmy: význam, relevancia a východiská",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>definovať precízne poľnohospodárstvo v praktických pojmoch;</li>" +
          "<li>vysvetliť, prečo mikro-farmy potrebujú byť produktívne, udržateľné a viditeľné;</li>" +
          "<li>rozlíšiť precízne poľnohospodárstvo od technologicky vedenej inovácie;</li>" +
          "<li>vysvetliť, prečo technológia musí sedieť na farmu, nie naopak.</li>" +
          "</ul>" +
          "<h3>Prečo je táto téma dôležitá</h3>" +
          "<p>Mikro-farmy čelia klimatickej neistote, nepravidelným zrážkam, obmedzenej pôde, pracovnej sile a " +
          "financiám, rastúcim vstupným nákladom a rastúcemu dopytu spotrebiteľov po transparentnosti. Kľúčová " +
          "myšlienka: malé farmy musia byť <strong>produktívne, udržateľné a viditeľné</strong>. Precízne " +
          "poľnohospodárstvo môže podporiť všetky tri rozmery tým, že pomáha farmárom šetrnejšie využívať " +
          "zdroje a vysvetliť svoje postupy návštevníkom.</p>" +
          "<h3>Precízne poľnohospodárstvo ako lepšie rozhodovanie</h3>" +
          "<p>Ide o využitie pozorovania, dát a technológie na podporu lepších farmárskych rozhodnutí — " +
          "aplikovať správny vstup, na správnom mieste, v správnom čase a v správnom množstve na základe " +
          "reálnych podmienok. Na mikro-farme to nemusí znamenať drahý systém. Môže to začať jedným pôdnym " +
          "senzorom vlhkosti, jednoduchou meteostanicou, dronovým záberom, mobilnou aplikáciou, tabuľkou, " +
          "denníkom farmy alebo QR kódom.</p>" +
          "<h3>Realita mikro-farmy</h3>" +
          "<p>Mikro-farma zvyčajne pracuje s menšou plochou, menším počtom pracovníkov, obmedzeným kapitálom " +
          "a bližším kontaktom s miestnymi zákazníkmi či návštevníkmi. Preto technológia musí byť: dostupná, " +
          "jednoduchá na používanie, ľahko udržiavateľná, lokálne relevantná, užitočná pre každodenné " +
          "rozhodnutia a škálovateľná krok za krokom.</p>" +
          "<h3>Od rutiny k rozhodnutiam podloženým dôkazmi</h3>" +
          "<p>Tradičná farmárska skúsenosť zostáva nenahraditeľná — precízne poľnohospodárstvo ju nenahrádza, " +
          "ale dopĺňa meraním, pozorovaním a záznamami. Namiesto zalievania len z rutiny môže farmár overiť, " +
          "či pôda a plodina naozaj potrebujú vodu.</p>" +
          "<h3>Relevancia pre agroturistiku</h3>" +
          "<p>Precízne poľnohospodárstvo robí farmárske rozhodnutia viditeľnými pre návštevníkov. Senzor, " +
          "dronový záber alebo digitálny denník sa stávajú viac než manažérskym nástrojom — pomáhajú farmárovi " +
          "vysvetliť starostlivosť, zodpovednosť a udržateľnosť, čím robia príbeh farmy dôveryhodnejším.</p>" +
          "<h3>Aplikovaná aktivita: Micro-Farm Problem–Tool Match</h3>" +
          "<p>Vyber si jednu mikro-farmu a identifikuj jeden reálny problém: využitie vody, stres plodín, slabú " +
          "propagáciu, zapojenie návštevníkov alebo klimatické riziko. Vyber jeden jednoduchý precízny nástroj, " +
          "ktorý by mohol pomôcť, a vysvetli, prečo sa pre danú farmu hodí. (Pracovný list nižšie v doplnkových " +
          "materiáloch — Worksheet 1.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Precízne poľnohospodárstvo nie je len pre veľké farmy.</li>" +
          "<li>Mikro-farmy by mali vychádzať z reálnych potrieb, nie z technológie.</li>" +
          "<li>Hodnota nástroja závisí od toho, či zlepšuje rozhodnutie.</li>" +
          "<li>Precízne poľnohospodárstvo môže podporiť produkciu, udržateľnosť aj komunikáciu s návštevníkmi.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem vysvetliť precízne poľnohospodárstvo v jednej vete.</li>" +
          "<li>Viem pomenovať tri tlaky, ktorým čelia mikro-farmy.</li>" +
          "<li>Viem zdôvodniť, prečo môže byť jednoduchý nástroj lepší než komplexný systém.</li>" +
          "</ul>" +
          "<h3>Reflexia</h3>" +
          "<p>Napíš krátku odpoveď (150–200 slov): Ktorý nápad z tejto jednotky by sa dal reálne použiť na malej " +
          "farme vo tvojom regióne? Aké informácie by farmár potreboval pred jeho použitím? Ako by si to " +
          "vysvetlil/a návštevníkovi jednoduchým jazykom?</p>",
        video: {
          youtubeId: "a1KFgO1732I",
          checkpoints: [
            {
              id: "m4-l1-cp1",
              atSeconds: 399,
              question: {
                id: "m4-l1-cp1-q",
                question: "Podľa prezentácie SUA, o čom NIE JE precízne poľnohospodárstvo iba?",
                options: [
                  "O drahých strojoch, drahých technológiách alebo veľmi sofistikovaných zručnostiach",
                  "O znižovaní nákladov",
                  "O zbieraní dát z farmy",
                  "O rozhodovaní na základe dát",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp2",
              atSeconds: 1065,
              question: {
                id: "m4-l1-cp2-q",
                question: "Aký je podľa prezentácie základný rozhodovací cyklus precízneho poľnohospodárstva?",
                options: [
                  "Nameraj dáta → pochop dáta → konaj → vyhodnoť výsledok → komunikuj",
                  "Kúp technológiu → nainštaluj ju → zabudni na ňu",
                  "Najprv drón, potom senzory, potom AI",
                  "Plánuj → financuj → predaj",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m4-l2",
        title: "4.2 Rozhodovací cyklus precízneho poľnohospodárstva",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>opísať päťkrokový rozhodovací cyklus použitý v module;</li>" +
          "<li>rozlíšiť zber dát od ich interpretácie;</li>" +
          "<li>vysvetliť, prečo sú vyhodnotenie a komunikácia súčasťou precízneho poľnohospodárstva;</li>" +
          "<li>použiť cyklus na analýzu jedného rozhodnutia na malej farme.</li>" +
          "</ul>" +
          "<h3>1. Nameraj (Measure)</h3>" +
          "<p>Farmár zbiera informácie o pôde, počasí, plodinách, škodcoch, kvalite úrody alebo spätnej väzbe " +
          "od návštevníkov. Meranie nemusí byť vždy digitálne — môže ísť o fotografie, poznámky z poľa, " +
          "vizuálne pozorovanie či jednoduché záznamy.</p>" +
          "<h3>2. Pochop (Understand)</h3>" +
          "<p>Dáta sú užitočné, až keď ich prepojíme s farmárskymi znalosťami. Nízka vlhkosť pôdy sa musí " +
          "interpretovať vo vzťahu k typu plodiny, hĺbke koreňov, počasiu, rastovej fáze a stavu pôdy.</p>" +
          "<h3>3. Konaj (Act)</h3>" +
          "<p>Farmár použije informáciu na zavlažovanie, hnojenie, ochranu plodín, zber úrody, úpravu trasy " +
          "návštevníkov alebo prípravu demonštrácie. Akcia by mala byť primeraná a prepojená s pôvodným " +
          "problémom.</p>" +
          "<h3>4. Vyhodnoť (Evaluate)</h3>" +
          "<p>Po akcii farmár overí, či rozhodnutie zafungovalo: Zotavili sa rastliny? Ušetrila sa voda? " +
          "Pochopili návštevníci demonštráciu? Vyhodnotenie mení jedno rozhodnutie na poučenie pre ďalšiu " +
          "sezónu.</p>" +
          "<h3>5. Komunikuj (Communicate)</h3>" +
          "<p>Pre agroturistiku je komunikácia súčasťou systému. Tá istá informácia, ktorá podporuje " +
          "manažment farmy, sa môže stať aj príbehom pre návštevníkov: ako farma šetrí vodu, chráni pôdu, " +
          "monitoruje plodiny alebo sa učí z predchádzajúcich sezón.</p>" +
          "<h3>Digitálne denníky farmy</h3>" +
          "<p>Digitálny denník môže zaznamenávať výsadbu, zavlažovanie, hnojenie, škodcov, dátumy zberu, " +
          "výnos, kvalitu, poznámky o počasí a spätnú väzbu návštevníkov — ako mobilná appka, tabuľka, " +
          "kalendár alebo zdieľaný dokument. Záznamy časom pomáhajú porovnávať sezóny.</p>" +
          "<h3>Aplikovaná aktivita: Decision Cycle Canvas</h3>" +
          "<p>Vyber jedno rozhodnutie (napr. zavlažovanie, hnojenie, plánovanie trasy návštevníkov) a vyplň " +
          "všetkých päť krokov cyklu. (Worksheet 2 v doplnkových materiáloch.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Samotné dáta nerobia rozhodnutia.</li>" +
          "<li>Farmár musí dáta interpretovať v kontexte.</li>" +
          "<li>Vyhodnotenie je potrebné na overenie, či akcia zafungovala.</li>" +
          "<li>Komunikácia prepája precízne poľnohospodárstvo s agroturistikou.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem opísať všetkých päť krokov rozhodovacieho cyklu.</li>" +
          "<li>Viem vysvetliť, prečo je interpretácia dát dôležitá.</li>" +
          "<li>Viem premeniť jedno farmárske rozhodnutie na príbeh pre návštevníka.</li>" +
          "</ul>" +
          "<h3>Reflexia</h3>" +
          "<p>Napíš krátku odpoveď (150–200 slov) aplikujúcu túto jednotku na jednu reálnu alebo hypotetickú " +
          "mikro-farmu.</p>",
      },
      {
        id: "m4-l3",
        title: "4.3 Pôda, voda a inteligentné zavlažovanie",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>vysvetliť, prečo je voda silným východiskovým bodom pre precízne poľnohospodárstvo;</li>" +
          "<li>identifikovať jednoduché nástroje pre inteligentné zavlažovanie na mikro-farmách;</li>" +
          "<li>analyzovať, kedy je zavlažovanie skutočne potrebné;</li>" +
          "<li>prepojiť rozhodnutia o zavlažovaní s komunikáciou o udržateľnosti.</li>" +
          "</ul>" +
          "<h3>Voda ako východiskový bod</h3>" +
          "<p>Voda priamo ovplyvňuje rast plodín, kvalitu produktu a produktivitu. Klimatická zmena a " +
          "nepravidelné zrážky robia manažment vody čoraz dôležitejším — plytvanie vodou na mikro-farme môže " +
          "znamenať zbytočné náklady aj environmentálnu záťaž.</p>" +
          "<h3>Inteligentné zavlažovanie nemusí byť komplikované</h3>" +
          "<p>Môže zahŕňať kvapkové zavlažovanie, časovače, pôdne senzory vlhkosti, monitoring zrážok, " +
          "jednoduché harmonogramy a pozorovanie farmára podporené dátami. Cieľ je jednoduchý: použiť vodu " +
          "len vtedy a tam, kde je potrebná.</p>" +
          "<h3>Od vizuálneho dojmu k dôkazu</h3>" +
          "<p>Povrch pôdy môže vyzerať suchý, zatiaľ čo hlbšie vrstvy ešte obsahujú vodu. Senzor alebo " +
          "dôsledné sledovanie môže zabrániť zbytočnému zalievaniu alebo naopak pomôcť aplikovať vodu skôr, " +
          "než nastane vážny stres plodiny.</p>" +
          "<h3>Prípadová štúdia: CODECS Living Lab</h3>" +
          "<p>Prezentácia používa slovenský Living Lab z projektu CODECS ako praktický príklad — pôdne " +
          "senzory vlhkosti, meteostanice a IoT zariadenia podporujú rozhodnutia o zavlažovaní a dajú sa " +
          "využiť aj na farmárske demonštrácie a virtuálne prehliadky farmy. Ponaučenie: nástroj pre manažment " +
          "farmy môže zároveň učiť návštevníkov o šetrení vodou.</p>" +
          "<h3>Odkaz na udržateľnosť</h3>" +
          "<p>Inteligentné zavlažovanie sa návštevníkom ľahko vysvetľuje: „Nezalievame náhodne — kontrolujeme " +
          "pôdu a vodu používame len vtedy, keď ju rastliny potrebujú.“ Toto robí udržateľnosť viditeľnou a " +
          "konkrétnou.</p>" +
          "<h3>Aplikovaná aktivita: Irrigation Decision Worksheet</h3>" +
          "<p>Na základe zadanej situácie (vlhkosť pôdy, predpoveď zrážok, fáza plodiny, teplota) rozhodni, " +
          "či zavlažovať, aké ďalšie informácie potrebuješ a ako by sa rozhodnutie dalo vysvetliť " +
          "návštevníkom. (Worksheet 3.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Voda je praktickým východiskovým bodom pre precízne poľnohospodárstvo.</li>" +
          "<li>Inteligentné zavlažovanie môže byť jednoduché a dostupné.</li>" +
          "<li>Vlhkosť pôdy sa musí interpretovať v kontexte.</li>" +
          "<li>Šetrenie vodou sa môže stať silným agroturistickým posolstvom.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem vysvetliť, kedy je pôdny senzor vlhkosti užitočný.</li>" +
          "<li>Viem pomenovať tri nástroje používané pri inteligentnom zavlažovaní.</li>" +
          "<li>Viem vytvoriť jedno posolstvo o šetrení vodou pre návštevníkov.</li>" +
          "</ul>" +
          "<h3>Reflexia</h3>" +
          "<p>Napíš krátku odpoveď (150–200 slov) aplikujúcu túto jednotku na jednu reálnu alebo hypotetickú " +
          "mikro-farmu.</p>",
      },
      {
        id: "m4-l4",
        title: "4.4 Drony, snímky a monitoring farmy",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>vysvetliť, ako drony môžu podporiť pozorovanie mikro-fariem;</li>" +
          "<li>identifikovať, čo možno a čo nemožno vyvodiť z leteckých snímok;</li>" +
          "<li>opísať, ako dronové snímky podporujú monitoring aj rozprávanie príbehu;</li>" +
          "<li>rozpoznať otázky bezpečnosti, súkromia a primeranosti.</li>" +
          "</ul>" +
          "<h3>Pohľad na farmu zhora</h3>" +
          "<p>Drony umožňujú farmárom pozorovať farmu z iného uhla — zhora je ľahšie vidieť suché oblasti, " +
          "slabý rast plodín, eróziu, problémy s odvodnením, poškodenie škodcami, rozdiely medzi radmi plodín " +
          "či trasy návštevníkov.</p>" +
          "<h3>Monitoring v čase</h3>" +
          "<p>Pri pravidelnom zbere snímok je možné dokumentovať sezónne zmeny, čo podporuje manažment farmy " +
          "aj propagáciu a vzdelávanie.</p>" +
          "<h3>Viditeľný stres plodín a limity</h3>" +
          "<p>Základný dronový záber ukáže viditeľné rozdiely, no nenahrádza odbornú diagnostiku — slabšie " +
          "miesto si stále vyžaduje bližšiu kontrolu v teréne. Pokročilejšie prípady môžu využiť " +
          "multispektrálne snímkovanie, no aj jednoduchý vizuálny záber je pre mnohé mikro-farmy užitočný.</p>" +
          "<h3>Hodnota pre rozprávanie príbehu</h3>" +
          "<p>Pre agroturistiku môžu dronové zábery ukázať krásu farmy, rozmanitosť plodín, krajinu, vodné " +
          "zdroje a trasy pre návštevníkov — využiteľné na začiatku prehliadky alebo na webstránke pri " +
          "vysvetlení usporiadania farmy.</p>" +
          "<h3>Zodpovedné používanie</h3>" +
          "<p>Drony sú atraktívne, no vyžadujú pozornosť voči bezpečnosti, súkromiu, návštevníkom, susedným " +
          "pozemkom a právnym pravidlám. Technológia má podporovať príbeh farmy, nie nahradiť farmára, pôdu, " +
          "produkt a ľudský vzťah.</p>" +
          "<h3>Aplikovaná aktivita: Read the Farm from Above</h3>" +
          "<p>Na základe (predstaveného) leteckého záberu farmy identifikuj, čo sa dá vyčítať priamo, čo si " +
          "vyžaduje overenie v teréne a ako by sa záber dal využiť počas prehliadky pre návštevníkov. " +
          "(Worksheet 4.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Dronové snímky odhaľujú vzory, ktoré zo zeme nie sú viditeľné.</li>" +
          "<li>Snímky si vyžadujú interpretáciu a overenie v teréne.</li>" +
          "<li>Pohľad z drona podporuje aj orientáciu návštevníkov a propagáciu.</li>" +
          "<li>Používanie dronov musí rešpektovať bezpečnosť, súkromie a autenticitu.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem pomenovať tri využitia dronových snímok na mikro-farme.</li>" +
          "<li>Viem vysvetliť jeden limit leteckých snímok.</li>" +
          "<li>Viem navrhnúť vysvetlenie pre návštevníka pomocou dronového záberu.</li>" +
          "</ul>" +
          "<h3>Reflexia</h3>" +
          "<p>Napíš krátku odpoveď (150–200 slov) aplikujúcu túto jednotku na jednu reálnu alebo hypotetickú " +
          "mikro-farmu.</p>",
      },
      {
        id: "m4-l5",
        title: "4.5 Udržateľnosť, riziká a postupná implementácia",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>vysvetliť, ako precízne poľnohospodárstvo robí udržateľnosť viditeľnou;</li>" +
          "<li>identifikovať riziká a obmedzenia pre mikro-farmy;</li>" +
          "<li>použiť jednoduchý postupný model na zavedenie jedného nástroja;</li>" +
          "<li>vyhnúť sa technológii bez jasného účelu.</li>" +
          "</ul>" +
          "<h3>Udržateľnosť zviditeľnená</h3>" +
          "<p>Farmy, hotely aj destinácie často hovoria, že sú udržateľné, no návštevníci sa čoraz viac " +
          "pýtajú, čo to v praxi znamená. Precízne poľnohospodárstvo ponúka konkrétne príklady: monitoring " +
          "spotreby vody, kvapkové zavlažovanie, záznam hnojenia, znižovanie zbytočného tlaku pesticídov, " +
          "ochrana pôdy a dokumentácia výrobných postupov.</p>" +
          "<h3>Klimatická odolnosť</h3>" +
          "<p>Monitoring pôdy, vody, počasia a stavu plodín pomáha farmárom reagovať na sucho, horúčavy, " +
          "nepravidelné zrážky a nové tlaky škodcov — a podporuje odolnosť pri zachovaní realistických, " +
          "lokálnych rozhodnutí.</p>" +
          "<h3>Riziká a obmedzenia</h3>" +
          "<p>Prezentácia zdôrazňuje niekoľko rizík: vysoké investičné náklady, nedostatok digitálnych " +
          "zručností, slabé internetové pripojenie, údržba zariadení, nesprávna interpretácia dát, technológia " +
          "bez jasného účelu, pravidlá bezpečnosti a súkromia pri dronoch, a strata autenticity v " +
          "agroturistike.</p>" +
          "<h3>Postupný model</h3>" +
          "<p>Mikro-farmy môžu začať identifikáciou jedného problému, výberom jedného jednoduchého nástroja, " +
          "jeho otestovaním v malom rozsahu, zmeraním prínosu a premenením postupu na príbeh. Tento model " +
          "<em>problém – nástroj – test – prínos – príbeh</em> pomáha vyhnúť sa nadmernej investícii.</p>" +
          "<h3>Autenticita na prvom mieste</h3>" +
          "<p>Precízne poľnohospodárstvo by nemalo spôsobiť, že sa farma bude cítiť umelo. Návštevníci " +
          "prichádzajú kvôli ľuďom, jedlu, krajine, kultúre a atmosfére — technológia má príbeh farmy " +
          "podporovať, nie ho nahradiť.</p>" +
          "<h3>Aplikovaná aktivita: One Tool, One Problem, One Season</h3>" +
          "<p>Vyber jeden farmársky problém a navrhni malý test jedného nástroja pre jednu plodinu, pole, " +
          "sezónu alebo aktivitu pre návštevníkov. Definuj, ako sa zmeria úspech a ako sa výsledok " +
          "odkomunikuje. (Worksheet 5.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Udržateľnosť sa musí preukázať konkrétnymi postupmi.</li>" +
          "<li>Technológia bez účelu alebo náročná na údržbu môže vytvárať riziko.</li>" +
          "<li>Mikro-farma môže začať jedným malým testom.</li>" +
          "<li>Farmár, pôda a produkt zostávajú v centre.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem vymenovať štyri riziká digitálnych nástrojov na mikro-farmách.</li>" +
          "<li>Viem navrhnúť malý test jedného nástroja.</li>" +
          "<li>Viem premeniť jeden smart postup na jednoduchý príbeh o udržateľnosti.</li>" +
          "</ul>" +
          "<h3>Reflexia</h3>" +
          "<p>Napíš krátku odpoveď (150–200 slov) aplikujúcu túto jednotku na jednu reálnu alebo hypotetickú " +
          "mikro-farmu.</p>",
      },
      {
        id: "m4-l6",
        title: "4.6 Smart agroturistika a digitálne rozprávanie príbehov",
        content:
          "<h3>Ciele lekcie</h3>" +
          "<ul>" +
          "<li>vysvetliť, ako sa farmárska prax môže stať zážitkom pre návštevníka;</li>" +
          "<li>navrhnúť smart agroturistickú aktivitu s použitím jedného precízneho nástroja;</li>" +
          "<li>vytvoriť jasné posolstvo o udržateľnosti pre návštevníkov;</li>" +
          "<li>použiť jednoduché digitálne rozprávanie príbehu na budovanie dôvery a transparentnosti.</li>" +
          "</ul>" +
          "<h3>Od farmárskej praxe k zážitku návštevníka</h3>" +
          "<p>Pôdny senzor pomáha farmárovi vedieť, kedy rastliny potrebujú vodu — a zároveň sa môže stať " +
          "demonštráciou. Meteostanica podporuje manažment farmy a zároveň učí návštevníkov o klíme. Kvapkové " +
          "zavlažovanie šetrí vodu a dá sa predviesť na workshope o šetrení vodou. Digitálny denník sa môže " +
          "stať príbehom „od semienka po tanier“.</p>" +
          "<h3>Príklady smart agroturistických aktivít</h3>" +
          "<p>Smart prehliadky farmy, demonštrácie vlhkosti pôdy, prezentácie s dronovým pohľadom, workshopy o " +
          "šetrení vodou, zážitky „od pôdy po tanier“, ochutnávky produktov s QR kódom, kútiky „klimaticky " +
          "inteligentného poľnohospodárstva“ či detská aktivita „Mladý farmársky vedec“.</p>" +
          "<h3>Digitálne rozprávanie príbehov a propagácia</h3>" +
          "<p>Precízne poľnohospodárstvo poskytuje skutočný komunikačný obsah: krátke zábery z poľa, vizuály " +
          "„pred a po“, vysvetlenia farmára, dronové zábery, QR kódy, vzdelávacie príspevky. Posolstvo " +
          "prezentácie: nehovor len „sme udržateľní“ — ukáž, ako udržateľnosť funguje.</p>" +
          "<h3>Príklad: Water-Smart Garden Walk</h3>" +
          "<p>Malá zeleninová farma používa pôdny senzor vlhkosti a kvapkové zavlažovanie. Návštevníci najprv " +
          "hádajú, či rastliny potrebujú vodu, potom skontrolujú pôdu senzorom, naučia sa, ako funguje " +
          "kvapkové zavlažovanie, a ochutnajú zeleninu pestovanú so starostlivým využitím vody. Propagačné " +
          "posolstvo: „Ochutnaj zeleninu pestovanú s úctou ku každej kvapke vody.“</p>" +
          "<h3>Diskusia a adaptácia</h3>" +
          "<p>Posledným krokom je prispôsobiť nápad miestnym farmám a regiónom — zvážiť, ktorý nástroj je " +
          "realistický, aký problém sa dá vyriešiť jednoduchými dátami, ako vysvetliť smart farming " +
          "návštevníkom a ako skĺbiť tradíciu s inováciou bez straty autenticity.</p>" +
          "<h3>Aplikovaná aktivita: Design a Smart Agritourism Experience</h3>" +
          "<p>Vyber typ farmy, jeden precízny nástroj, aktivitu pre návštevníkov, posolstvo o udržateľnosti a " +
          "jednu propagačnú vetu. Výsledok by mal byť dostatočne praktický pre reálneho farmára s obmedzenými " +
          "zdrojmi. (Worksheet 6.)</p>" +
          "<h3>Kľúčové poznatky</h3>" +
          "<ul>" +
          "<li>Reálne farmárske postupy sa môžu stať vzdelávacími zážitkami pre návštevníkov.</li>" +
          "<li>Smart agroturistika má byť jednoduchá, autentická a zmysluplná.</li>" +
          "<li>Digitálne nástroje budujú dôveru, keď robia postupy transparentnými.</li>" +
          "<li>Dobré rozprávanie príbehu ukazuje, ako udržateľnosť funguje.</li>" +
          "</ul>" +
          "<h3>Sebakontrola</h3>" +
          "<ul>" +
          "<li>Viem premeniť pôdny senzor, dronový záber alebo QR kód na aktivitu pre návštevníkov.</li>" +
          "<li>Viem napísať krátke posolstvo o udržateľnosti pre návštevníkov.</li>" +
          "<li>Viem vysvetliť, ako sa smart farming a agroturistika vzájomne podporujú.</li>" +
          "</ul>" +
          "<h3>Zhrnutie modulu a proficiency test</h3>" +
          "<p>Nasleduje 10-otázkový test overujúci pochopenie modulu (min. 7/10 na úspešné absolvovanie). " +
          "Hraničné skóre: 8–10 správne = silné pochopenie; 6–7 = akceptovateľné, odporúča sa zopakovať " +
          "jednotky spojené s nesprávnymi odpoveďami; 0–5 = odporúča sa zopakovať materiály modulu.</p>",
        quiz: {
          questions: [
            {
              id: "m4-q1",
              question: "Ktoré tvrdenie najlepšie opisuje precízne poľnohospodárstvo v tomto module?",
              options: [
                "Systém používaný len veľkými farmami s drahými strojmi",
                "Praktický prístup využívajúci pozorovanie, dáta a technológiu na podporu lepších farmárskych rozhodnutí",
                "Marketingový termín pre organické poľnohospodárstvo",
                "Spôsob, ako úplne nahradiť farmársku skúsenosť",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q2",
              question: "Pre mikro-farmy by malo byť precízne poľnohospodárstvo:",
              options: [
                "Drahé a vysoko automatizované",
                "Štandardizované presne ako na veľkých obilninárskych farmách",
                "Dostupné, jednoduché, lokálne relevantné a škálovateľné krok za krokom",
                "Používané len pre exportne orientované farmy",
              ],
              correctIndex: 2,
            },
            {
              id: "m4-q3",
              question: "Aké je správne poradie rozhodovacieho cyklu použitého v module?",
              options: [
                "Konaj – Nameraj – Komunikuj – Pochop – Vyhodnoť",
                "Nameraj – Pochop – Konaj – Vyhodnoť – Komunikuj",
                "Komunikuj – Konaj – Nameraj – Vyhodnoť – Pochop",
                "Pochop – Komunikuj – Nameraj – Konaj – Vyhodnoť",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q4",
              question: "Prečo sú pôdne senzory vlhkosti užitočné pre malé farmy?",
              options: [
                "Rozhodujú úplne automaticky bez interpretácie farmára",
                "Pomáhajú farmárom pochopiť, či je zavlažovanie naozaj potrebné",
                "Nahrádzajú monitoring zrážok",
                "Používajú sa iba na zábavu pre návštevníkov",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q5",
              question: "Aký je hlavný cieľ inteligentného zavlažovania v module?",
              options: [
                "Zalievať plodiny každý deň v rovnakom čase",
                "Použiť vodu len vtedy a tam, kde je potrebná",
                "Nahradiť všetky farmárske rozhodnutia softvérom",
                "Zvýšiť spotrebu vody v suchých obdobiach",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q6",
              question: "Ktoré tvrdenie o dronoch je najpresnejšie?",
              options: [
                "Drony môžu ukázať vzory zhora, no výsledky si stále vyžadujú interpretáciu a overenie v teréne",
                "Drony vždy identifikujú presnú príčinu každého problému s plodinou",
                "Drony sú užitočné len pre veľké farmy",
                "Drony by mali nahradiť vysvetlenia pre návštevníkov",
              ],
              correctIndex: 0,
            },
            {
              id: "m4-q7",
              question: "Digitálny denník farmy môže pomôcť mikro-farme hlavne tým, že:",
              options: [
                "Odstraňuje potrebu pozorovania",
                "Mení sezónnu skúsenosť na štruktúrované záznamy",
                "Garantuje vyšší výnos",
                "Nahrádza prehliadky farmy",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q8",
              question: "Ako môže precízne poľnohospodárstvo podporiť komunikáciu o udržateľnosti?",
              options: [
                "Tvrdeniami bez dôkazov",
                "Ukázaním konkrétnych postupov, ako je monitoring vody, kvapkové zavlažovanie alebo záznamy o plodinách",
                "Skrývaním farmárskych postupov pred návštevníkmi",
                "Používaním len odborného jazyka",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q9",
              question: "Ktoré riziko je v module konkrétne spomenuté?",
              options: [
                "Príliš veľa návštevníkov vždy zlepšuje autenticitu",
                "Nesprávna interpretácia dát",
                "Precízne poľnohospodárstvo nemá žiadne nároky na údržbu",
                "Slabé internetové pripojenie zlepšuje zber dát",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q10",
              question: "Aká je hlavná myšlienka smart agroturistiky v tomto module?",
              options: [
                "Vytvárať umelé atrakcie nesúvisiace s poľnohospodárstvom",
                "Premeniť reálne farmárske postupy na vzdelávacie zážitky pre návštevníkov",
                "Používať technológiu len na sociálne siete",
                "Vyhýbať sa vysvetľovaniu výrobných postupov návštevníkom",
              ],
              correctIndex: 1,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m4-mat1", "fact-sheet", "Glosár pojmov modulu (precízne poľnohospodárstvo, mikro-farma, decision cycle, smart agroturistika a ďalšie)", "Reálny obsah — D3.2 Module 4 Scripts & Annexes, sekcia 2"),
      draftMaterial("m4-mat2", "worksheet", "Worksheet 1 – Micro-Farm Problem–Tool Match", "Reálny pracovný list k jednotke 4.1 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat3", "worksheet", "Worksheet 2 – Decision Cycle Canvas", "Reálny pracovný list k jednotke 4.2 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat4", "worksheet", "Worksheet 3 – Irrigation Decision Worksheet", "Reálny pracovný list k jednotke 4.3 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat5", "worksheet", "Worksheet 4 – Farm Image / Drone Interpretation", "Reálny pracovný list k jednotke 4.4 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat6", "worksheet", "Worksheet 5 – One Tool, One Problem, One Season", "Reálny pracovný list k jednotke 4.5 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat7", "worksheet", "Worksheet 6 – Smart Agritourism Experience Template", "Reálny pracovný list k jednotke 4.6 — D3.2 Module 4 Worksheets"),
      draftMaterial("m4-mat8", "checklist", "Postupný model zavádzania: problém – nástroj – test – prínos – príbeh", "Reálny obsah — D3.2 Module 4 Scripts & Annexes, Unit 5 \"Step-by-step model\""),
      draftMaterial("m4-mat9", "case-study", "CODECS Slovak Living Lab: podpora zavlažovacích rozhodnutí", "Reálna prípadová štúdia — D3.2 Module 4, Annex B"),
      draftMaterial("m4-mat10", "case-study", "Dingle Peninsula, Írsko / PLOUTOS SIP5: senzorové dáta, food tourism a lokálny branding", "Reálna prípadová štúdia — D3.2 Module 4, Annex B"),
      draftMaterial("m4-mat11", "case-study", "Egejské ostrovy a Kréta, Grécko: AI, drony a precízne poľnohospodárstvo pre udržateľný ostrovný turizmus", "Reálna prípadová štúdia — D3.2 Module 4, Annex B"),
      draftMaterial("m4-mat12", "case-study", "Rozhovor so študentom VAC — Plant Science Cert III (Vanuatu Agricultural College)", "Reálne video — https://www.youtube.com/watch?v=RQygpO_AKk8"),
      draftMaterial("m4-mat13", "interview-video", "Rozhovor so študentom VAC — Agribusiness Cert IV", "Reálne video, bez prepisu — https://www.youtube.com/watch?v=__9XltiDXrk"),
    ],
    references: [
      "AGRI-TOUR SUA prezentácia: Precision Agriculture for Micro-Farms (prof. Ing. Zuzana Palková, PhD., Slovenská poľnohospodárska univerzita v Nitre)",
      "AGRI-TOUR súvisiaci materiál: Farm to Fork in Practice (ak dostupné na platforme projektu)",
      "CODECS Horizon Europe project – Slovak Living Lab / Artificial Irrigation Management Systems",
      "PLOUTOS SIP5 / Dingle Peninsula case study",
      "Aegean Islands and Crete smart agriculture examples",
    ],
  },
  {
    id: "m5",
    title: "Modul 5: Samoan Culture of Food (NUS)",
    owner: "NUS",
    intro:
      "Modul približuje samojskú kultúru jedla, tradičné plodiny ako taro a kokos, a ich úlohu v zdravej výžive " +
      "aj v modeli farm-to-table. Študenti sa oboznámia s tým, ako prepojiť kulinárske dedičstvo s " +
      "agroturistickou ponukou a ako farmy a plantáže môžu byť súčasťou zážitku návštevníka. Modul kladie dôraz " +
      "na zachovanie tradície jedla ako formy kultúrneho dedičstva a na jej hodnotu pre miestnu komunitu aj pre " +
      "turizmus.",
    lessons: [
      {
        id: "m5-l1",
        title: "5.1 Samojská kultúra jedla — úvod",
        content:
          "<p>Prezentácia partnera NUS: jedlo v samojskom spôsobe života nie je len výživa, ale súčasť " +
          "kultúrnej cesty, sociálnej štruktúry, úcty a spojenia s prostredím. Na nedeľnom stolovaní sú " +
          "starí rodičia, rodičia a cirkevní vodcovia obsluhovaní ako prví, deti trpezlivo čakajú a učia sa " +
          "disciplíne — pohostinnosť je \"srdcom\" samojskej kultúry. Tradičná strava (taro, kokos, chlebovník, " +
          "ryby) pripomína Samoancom v zahraničí spojenie s pôdou a oceánom ich domoviny.</p>",
        video: {
          youtubeId: "6-8PTVWURdY",
          checkpoints: [
            {
              id: "m5-l1-cp1",
              atSeconds: 220,
              question: {
                id: "m5-l1-cp1-q",
                question: "Ktoré potraviny prezentácia spomína ako pripomienku \"pôdy a oceánu\" Samoy pre Samoancov žijúcich v zahraničí?",
                options: [
                  "Taro, kokos, chlebovník (breadfruit) a morské plody",
                  "Ryža, pšenica a kukurica",
                  "Hovädzie a bravčové mäso",
                  "Zemiaky a mrkva",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m5-l1-cp2",
              atSeconds: 380,
              question: {
                id: "m5-l1-cp2-q",
                question: "Prečo boli podľa prezentácie ľudia v tradičnej Samoe silní, aktívni a zdraví?",
                options: [
                  "Pretože jedli prírodné jedlo a žili aktívnym životom",
                  "Pretože dovážali väčšinu potravín zo zahraničia",
                  "Vďaka priemyselne spracovaným potravinám",
                  "Vďaka výživovým doplnkom",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m5-l2", title: "5.2 Tradičné plodiny (taro, kokos) a ich úloha", content: "<p>Obsah lekcie doplní partner NUS.</p>" },
      { id: "m5-l3", title: "5.3 Podpora zdravej výživy v agroturistike", content: "<p>Obsah lekcie doplní partner NUS.</p>" },
      { id: "m5-l4", title: "5.4 Prepojenie tradície a turistickej ponuky", content: "<p>Obsah lekcie doplní partner NUS.</p>" },
      { id: "m5-l5", title: "5.5 Prípadové štúdie zo Samoy", content: "<p>Obsah lekcie doplní partner NUS.</p>" },
      {
        id: "m5-l6",
        title: "5.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 5 pripraví partner NUS.</p>",
        quiz: {
          questions: [
            draftQuestion("m5-q1", "Ktoré tradičné plodiny sú kľúčové pre samojskú kuchyňu?"),
            draftQuestion("m5-q2", "Ako agroturistika podporuje zdravú výživu na Samoe?"),
            draftQuestion("m5-q3", "Ako možno prepojiť tradíciu jedla s turistickou ponukou?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m5-mat1", "photo-story", "Ifieleele plantation — farm-to-table na Samoe", "Reálne video — https://www.youtube.com/watch?v=W5eh77T9hA0"),
      draftMaterial("m5-mat2", "fact-sheet", "Fact sheet: glosár tradičných ingrediencií", "TBD od NUS"),
      draftMaterial("m5-mat3", "case-study", "Sunshine Farm in Samoa", "Reálne video — https://www.youtube.com/watch?v=Qekfu7mShEY"),
      draftMaterial("m5-mat4", "worksheet", "Pracovný list: navrhni farm-to-table zážitok", "TBD od NUS"),
      draftMaterial("m5-mat5", "case-study", "Manusina beach fale (Samoa)", "Reálne video — https://www.youtube.com/watch?v=kgGya2P9e9s"),
    ],
    references: ["TBD — zoznam referencií doplní partner NUS"],
  },
  {
    id: "m6",
    title: "Modul 6: Women's empowerment & leadership (FNU)",
    owner: "FNU",
    intro:
      "Modul sa zameriava na postavenie žien v poľnohospodárstve a turizme na Fidži a v širšom pacifickom " +
      "regióne. Študenti sa dozvedia o bariérach, ktorým ženy čelia, o modeloch podpory rodovej rovnosti a " +
      "líderstva, a o konkrétnych príkladoch žien-líderiek v agroturistike. Cieľom modulu je ukázať, ako " +
      "inkluzívna agroturistika a rozvoj líderských zručností v odľahlých ostrovných komunitách prispievajú k " +
      "posilneniu postavenia žien v sektore.",
    lessons: [
      {
        id: "m6-l1",
        title: "6.1 Postavenie žien v poľnohospodárstve a turizme na Fidži",
        content:
          "<p>Prezentácia partnera FNU predstavuje iniciatívu <strong>FRIEND Fiji</strong> (Foundation for Rural " +
          "Integrated Enterprises and Development) — organizáciu, ktorá na väčšom rozsahu zapája lokálnych " +
          "farmárov najmä v západnej divízii Fidži do udržateľných hodnotových reťazcov, vrátane prepojenia " +
          "s hotelmi a rezortmi v regióne. Prezentácia sa venuje aj úlohe žien v tomto systéme a otázke " +
          "ochrany tradičných/indigénnych poznatkov o jedle.</p>",
        video: {
          youtubeId: "pcUb2NwoyKM",
          checkpoints: [
            {
              id: "m6-l1-cp1",
              atSeconds: 308,
              question: {
                id: "m6-l1-cp1-q",
                question: "Za čo stojí skratka FRIEND (Friends Fiji), spomínaná v prezentácii FNU?",
                options: [
                  "Foundation for Rural Integrated Enterprises and Development",
                  "Federation of Rural Indigenous Entrepreneurs and NGOs",
                  "Fiji Rural Investment and Employment Network for Development",
                  "Fiji Regional Institute for Environmental and Natural Diversity",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m6-l1-cp2",
              atSeconds: 490,
              question: {
                id: "m6-l1-cp2-q",
                question: "Podľa prezentácie, koho FRIEND Fiji zapája vo väčšom rozsahu, najmä v západnej divízii?",
                options: [
                  "Veľa lokálnych farmárov",
                  "Iba zahraničných investorov",
                  "Výhradne vládne inštitúcie",
                  "Iba univerzitných výskumníkov",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m6-l2", title: "6.2 Bariéry a príležitosti pre líderky", content: "<p>Obsah lekcie doplní partner FNU.</p>" },
      { id: "m6-l3", title: "6.3 Modely podpory rodovej rovnosti v agroturistike", content: "<p>Obsah lekcie doplní partner FNU.</p>" },
      { id: "m6-l4", title: "6.4 Rozvoj líderských zručností v odľahlých ostrovných komunitách", content: "<p>Obsah lekcie doplní partner FNU.</p>" },
      { id: "m6-l5", title: "6.5 Prípadové štúdie žien-líderiek na Fidži", content: "<p>Obsah lekcie doplní partner FNU.</p>" },
      {
        id: "m6-l6",
        title: "6.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 6 pripraví partner FNU.</p>",
        quiz: {
          questions: [
            draftQuestion("m6-q1", "Aké bariéry čelia ženy v poľnohospodárstve na Fidži?"),
            draftQuestion("m6-q2", "Ktoré opatrenia podporujú rodovú rovnosť v agroturistike?"),
            draftQuestion("m6-q3", "Čo posilňuje líderstvo žien v odľahlých komunitách?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m6-mat1", "interview-video", "Rozhovor so ženou-líderkou v agroturistike na Fidži", "TBD od FNU"),
      draftMaterial("m6-mat2", "case-study", "Prípadová štúdia podniku vedeného ženou", "TBD od FNU"),
      draftMaterial("m6-mat3", "checklist", "Checklist: bariéry inklúzie a ako ich riešiť", "TBD od FNU"),
      draftMaterial("m6-mat4", "case-study", "Fiji video — terénne zábery (surový materiál, obsah treba overiť/vystrihnúť)", "Reálne video — https://www.youtube.com/watch?v=fAbDTA9P7ik"),
    ],
    references: ["TBD — zoznam referencií doplní partner FNU"],
  },
  {
    id: "m7",
    title: "Modul 7: Micro agri-tourism in remote islands (USP)",
    owner: "USP",
    intro:
      "Modul sa venuje mikro-agroturistike na odľahlých ostrovoch a jej špecifikám oproti pevninskému modelu. " +
      "Študenti spoznajú princípy komunitného turizmu, zachovania jedinečnosti kultúry ostrovných štátov " +
      "Pacifiku (PICs) a budovania lokálnych partnerstiev v pohostinstve. Modul rieši aj to, ako geografická " +
      "odľahlosť súčasne predstavuje výzvu aj príležitosť — napríklad pre online prístup k vzdelávaniu z " +
      "odľahlých kampusov USP — a ako tieto faktory formujú odolnosť ostrovných komunít.",
    lessons: [
      {
        id: "m7-l1",
        title: "7.1 Špecifiká mikro-agroturistiky na odľahlých ostrovoch",
        content:
          "<p>Prezentácia partnera USP definuje \"mikro\" agroturistiku v Pacifiku: keďže zárobok z " +
          "poľnohospodárstva samotného je nízky, agroturistika umožňuje poľnohospodárskemu sektoru získať " +
          "podiel z príjmov z turizmu. Kľúčové vlastnosti: veľmi malý rozsah (typicky farmy pod 5 akrov, na " +
          "rozdiel od Austrálie, Nového Zélandu či USA), dodatočný príjem pre farmárov a priame prepojenie " +
          "producenta so spotrebiteľom/návštevníkom.</p>",
        video: {
          youtubeId: "nVsq7TijZIk",
          checkpoints: [
            {
              id: "m7-l1-cp1",
              atSeconds: 511,
              question: {
                id: "m7-l1-cp1-q",
                question: "Prečo je podľa prezentácie USP agroturistika zaujímavá pre poľnohospodársky sektor?",
                options: [
                  "Umožňuje sektoru získať podiel z príjmov, ktoré generuje turizmus",
                  "Nahrádza poľnohospodárstvo úplne",
                  "Znižuje potrebu akejkoľvek regulácie",
                  "Nemá to s poľnohospodárstvom žiadnu súvislosť",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m7-l1-cp2",
              atSeconds: 684,
              question: {
                id: "m7-l1-cp2-q",
                question: "Aká je podľa prezentácie typická veľkosť \"mikro\" agroturistickej farmy v Pacifiku?",
                options: [
                  "Zvyčajne pod 5 akrov (menšia ako farmy v Austrálii, na Novom Zélande či v USA)",
                  "Nad 100 hektárov",
                  "Presne 50 akrov",
                  "Veľkosť nezáleží",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m7-l2", title: "7.2 Zachovanie jedinečnosti kultúry PICs", content: "<p>Obsah lekcie doplní partner USP.</p>" },
      { id: "m7-l3", title: "7.3 Geografická odľahlosť ako výzva aj príležitosť", content: "<p>Obsah lekcie doplní partner USP.</p>" },
      { id: "m7-l4", title: "7.4 Prístup k vzdelávaniu online z odľahlých kampusov USP", content: "<p>Obsah lekcie doplní partner USP.</p>" },
      { id: "m7-l5", title: "7.5 Prípadové štúdie z ostrovov Tichomoria", content: "<p>Obsah lekcie doplní partner USP.</p>" },
      {
        id: "m7-l6",
        title: "7.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 7 pripraví partner USP.</p>",
        quiz: {
          questions: [
            draftQuestion("m7-q1", "Čo odlišuje mikro-agroturistiku na odľahlých ostrovoch od pevninského modelu?"),
            draftQuestion("m7-q2", "Ako geografická odľahlosť ovplyvňuje prístup k vzdelávaniu?"),
            draftQuestion("m7-q3", "Ktoré prvky kultúry PICs si agroturistika snaží zachovať?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m7-mat1", "interview-video", "Rozhovor: Espiritu Santo Resort (Vanuatu)", "Reálne video — https://www.youtube.com/watch?v=cgM8T80SqSA"),
      draftMaterial("m7-mat2", "photo-story", "Fotopríbeh z ostrovnej komunity USP", "TBD od USP"),
      draftMaterial("m7-mat3", "checklist", "Checklist: pripravenosť na hosťovanie návštevníkov", "TBD od USP"),
      draftMaterial("m7-mat4", "interview-video", "Rozhovor: Beachfront Resort (Vanuatu)", "Reálne video, bez prepisu — https://www.youtube.com/watch?v=sNTv6NraLYU"),
      draftMaterial("m7-mat5", "interview-video", "Rozhovor: Smugglers Resort (Vanuatu)", "Reálne video, bez prepisu — https://www.youtube.com/watch?v=ijIRRKmNgms"),
    ],
    references: ["TBD — zoznam referencií doplní partner USP"],
  },
  {
    id: "m8",
    title: "Modul 8: Environmental rights in remote Pacific islands (NUV)",
    owner: "NUV",
    intro:
      "Modul sa zaoberá environmentálnymi právami a klimatickou spravodlivosťou v odľahlých ostrovných štátoch " +
      "Pacifiku. Študenti spoznajú právny rámec ochrany životného prostredia v regióne, otázky prírodných " +
      "zdrojov, biodiverzity, vody a odpadu, a úlohu komunitných záujmov pri environmentálnych rozhodnutiach v " +
      "agroturistike. Modul vychádza aj z iniciatívy Vanuatu na pôde OSN v oblasti klimatickej spravodlivosti a " +
      "ukazuje, ako dopady klimatickej zmeny priamo ovplyvňujú agroturistiku v regióne a aké zelené praktiky " +
      "zvyšujú odolnosť komunít.",
    lessons: [
      {
        id: "m8-l1",
        title: "8.1 Environmentálne práva a klimatická spravodlivosť v Pacifiku",
        content:
          "<p>Prezentácia partnera NUV (Department of Environmental Protection and Conservation, Vanuatu) " +
          "predstavuje environmentálne práva ako právo zakotvené v ústave, systém \"custodianship\" — " +
          "zvykových práv na pôdu, more a rieky, ktoré sa dedia (nie kupujú ani neregistrujú úradne) — a " +
          "prehľad aktívnych projektov posudzovania vplyvov na životné prostredie vo Vanuatu (napr. South Sanma " +
          "Road, Pentecost hydro projekty). Súčasťou je aj sieť komunitných chránených území (community " +
          "conservation areas) naprieč provinciami Vanuatu.</p>",
        video: {
          youtubeId: "-ANBP6ICZhY",
          checkpoints: [
            {
              id: "m8-l1-cp1",
              atSeconds: 402,
              question: {
                id: "m8-l1-cp1-q",
                question: "Ako sa podľa prezentácie NUV stáva niekto \"custodianom\" (zvykovým strážcom) pôdy, mora alebo riek vo Vanuatu?",
                options: [
                  "Dedí tieto privilégiá",
                  "Zaregistruje sa na úrade",
                  "Zaplatí poplatok štátu",
                  "Absolvuje univerzitný kurz",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m8-l1-cp2",
              atSeconds: 777,
              question: {
                id: "m8-l1-cp2-q",
                question: "Kde sa podľa prezentácie nachádzajú komunitné chránené územia (community conservation areas) vo Vanuatu?",
                options: [
                  "Naprieč pobrežnými/ostrovnými oblasťami a provinciami od juhu po sever",
                  "Iba v hlavnom meste Port Vila",
                  "Iba na jednom konkrétnom ostrove",
                  "Vo Vanuatu zatiaľ žiadne neexistujú",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m8-l2", title: "8.2 Vanuatu a rezolúcia OSN o klimatickej spravodlivosti", content: "<p>Obsah lekcie doplní partner NUV.</p>" },
      { id: "m8-l3", title: "8.3 Dopady klimatickej zmeny na agroturistiku", content: "<p>Obsah lekcie doplní partner NUV.</p>" },
      { id: "m8-l4", title: "8.4 Právny rámec ochrany životného prostredia v regióne", content: "<p>Obsah lekcie doplní partner NUV.</p>" },
      { id: "m8-l5", title: "8.5 Zelené praktiky pre odolné komunity", content: "<p>Obsah lekcie doplní partner NUV.</p>" },
      {
        id: "m8-l6",
        title: "8.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 8 pripraví partner NUV.</p>",
        quiz: {
          questions: [
            draftQuestion("m8-q1", "Čo iniciovalo rezolúciu OSN o klimatickej spravodlivosti z marca 2023?"),
            draftQuestion("m8-q2", "Ako klimatická zmena ohrozuje agroturistiku v Pacifiku?"),
            draftQuestion("m8-q3", "Ktoré zelené praktiky zvyšujú odolnosť ostrovných komunít?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m8-mat1", "fact-sheet", "Fact sheet: glosár environmentálnych práv a pojmov", "TBD od NUV"),
      draftMaterial("m8-mat2", "case-study", "Prípadová štúdia: Vanuatu a rezolúcia OSN o klimatickej spravodlivosti", "TBD od NUV"),
      draftMaterial("m8-mat3", "checklist", "Checklist: environmentálne rozhodovanie v agroturistike", "TBD od NUV"),
      draftMaterial("m8-mat4", "infographic", "Infografika: dopady klimatickej zmeny na ostrovné komunity", "TBD od NUV"),
    ],
    references: ["TBD — zoznam referencií doplní partner NUV"],
  },
];

export const course: Course = {
  title: "Agritourism applied in the Pacific",
  description:
    "Applied Green Deal and Farm to Fork — MOOC projektu AGRI-TOUR (Erasmus+ CBHE). 8 modulov, 48 lekcií, 480 minút videoobsahu, testovaných v pilotnej štúdii na univerzitách vo Fidži, Samoe a Vanuatu.",
  modules,
};
