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
    title: "Modul 4: Precision agriculture in micro-farming (SUA)",
    owner: "SUA",
    intro:
      "Modul predstavuje základy precízneho poľnohospodárstva a jeho využitie na mikro-farmách typických pre " +
      "Pacifik. Študenti sa naučia o senzoroch a IoT technológiách, inteligentnej závlahe, diaľkovom snímaní " +
      "pomocou dronov (UAV) a rozhodovaní na základe dát. Modul ukazuje, ako tieto nástroje zvyšujú produktivitu " +
      "aj udržateľnosť malých fariem a ako ich prepojiť s agroturistickou ponukou — napríklad formou demonštrácií " +
      "smart-farm technológií pre návštevníkov.",
    lessons: [
      {
        id: "m4-l1",
        title: "4.1 Precízne poľnohospodárstvo — základné princípy",
        content:
          "<p>Prezentácia partnera SUA (Slovenská poľnohospodárska univerzita): precízne poľnohospodárstvo nie " +
          "je len o drahých strojoch, drónoch alebo umelej inteligencii — dá sa začať aj s jednoduchými " +
          "krokmi zameranými na kritické miesta farmy. Základný rozhodovací cyklus: nameraj dáta → pochop dáta " +
          "→ konaj → vyhodnoť výsledok → komunikuj. Technológie môžu znížiť náklady na vodu a hnojivá, čo je " +
          "dôležité najmä v čase rastúcich cien vstupov.</p>",
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
      { id: "m4-l2", title: "4.2 Nástroje precízneho poľnohospodárstva pre mikro-farmy", content: "<p>Obsah lekcie doplní partner SUA.</p>" },
      { id: "m4-l3", title: "4.3 Udržateľné pestovateľské postupy", content: "<p>Obsah lekcie doplní partner SUA.</p>" },
      { id: "m4-l4", title: "4.4 Prepojenie precízneho poľnohospodárstva s agroturistikou", content: "<p>Obsah lekcie doplní partner SUA.</p>" },
      { id: "m4-l5", title: "4.5 Prípadové štúdie mikro-fariem", content: "<p>Obsah lekcie doplní partner SUA.</p>" },
      {
        id: "m4-l6",
        title: "4.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 4 pripraví partner SUA.</p>",
        quiz: {
          questions: [
            draftQuestion("m4-q1", "Čo charakterizuje precízne poľnohospodárstvo?"),
            draftQuestion("m4-q2", "Prečo je precízne poľnohospodárstvo relevantné pre mikro-farmy do 1 ha?"),
            draftQuestion("m4-q3", "Ako môže precízne poľnohospodárstvo podporiť agroturistiku?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m4-mat1", "infographic", "Infografika: senzory a IoT na mikro-farme", "TBD od SUA"),
      draftMaterial("m4-mat2", "case-study", "Rozhovor so študentom VAC — Plant Science Cert III (Vanuatu Agricultural College)", "Reálne video — https://www.youtube.com/watch?v=RQygpO_AKk8"),
      draftMaterial("m4-mat3", "checklist", "Checklist: základy precízneho poľnohospodárstva", "TBD od SUA"),
      draftMaterial("m4-mat4", "interview-video", "Rozhovor so študentom VAC — Agribusiness Cert IV", "Reálne video, bez prepisu — https://www.youtube.com/watch?v=__9XltiDXrk"),
    ],
    references: ["TBD — zoznam referencií doplní partner SUA"],
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
