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
      { id: "m2-l1", title: "2.1 Kultúrna udržateľnosť jedla — úvod", content: "<p>Obsah lekcie doplní partner UNISG.</p>" },
      { id: "m2-l2", title: "2.2 Význam označení pôvodu a potravinových labelov", content: "<p>Obsah lekcie doplní partner UNISG.</p>" },
      { id: "m2-l3", title: "2.3 Slow Food princípy v agroturistike", content: "<p>Obsah lekcie doplní partner UNISG.</p>" },
      { id: "m2-l4", title: "2.4 Ochrana lokálneho kulinárskeho dedičstva", content: "<p>Obsah lekcie doplní partner UNISG.</p>" },
      { id: "m2-l5", title: "2.5 Komunikácia hodnoty lokálnych potravín návštevníkom", content: "<p>Obsah lekcie doplní partner UNISG.</p>" },
      {
        id: "m2-l6",
        title: "2.6 Zhrnutie modulu a proficiency test",
        content: "<p>Zhrnutie modulu 2 pripraví partner UNISG.</p>",
        quiz: {
          questions: [
            draftQuestion("m2-q1", "Prečo sú potravinové labely dôležité pre kultúrnu udržateľnosť?"),
            draftQuestion("m2-q2", "Čo presadzuje hnutie Slow Food v agroturistike?"),
            draftQuestion("m2-q3", "Ako možno komunikovať hodnotu lokálnych potravín turistom?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m2-mat1", "fact-sheet", "Fact sheet: glosár pojmov (GI, PDO, PGI, tradičný produkt)", "TBD od UNISG"),
      draftMaterial("m2-mat2", "case-study", "Príbeh lokálneho producenta a jeho certifikácie", "TBD od UNISG"),
      draftMaterial("m2-mat3", "infographic", "Infografika: typy označení pôvodu potravín v EÚ a Pacifiku", "TBD od UNISG"),
      draftMaterial("m2-mat4", "checklist", "Checklist: ako čítať potravinový label a overiť pôvod", "TBD od UNISG"),
    ],
    references: ["TBD — zoznam referencií doplní partner UNISG"],
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
      { id: "m3-l1", title: "3.1 Model agroturistiky a jeho prenos na ostrovy Pacifiku", content: "<p>Obsah lekcie doplní partner NewEdu.</p>" },
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
      draftMaterial("m3-mat2", "case-study", "Prípadová štúdia agroturistiky na ostrove", "TBD od NewEdu"),
      draftMaterial("m3-mat3", "worksheet", "Pracovný list: mapovanie zážitku návštevníka", "TBD od NewEdu"),
      draftMaterial("m3-mat4", "photo-story", "Fotopríbeh z vidieckej komunity", "TBD od NewEdu"),
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
      { id: "m4-l1", title: "4.1 Precízne poľnohospodárstvo — základné princípy", content: "<p>Obsah lekcie doplní partner SUA.</p>" },
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
      draftMaterial("m4-mat2", "case-study", "Prípadová štúdia smart-farm demonštrácie", "TBD od SUA"),
      draftMaterial("m4-mat3", "checklist", "Checklist: základy precízneho poľnohospodárstva", "TBD od SUA"),
      draftMaterial("m4-mat4", "recommended-links", "Odporúčané zdroje k precíznemu poľnohospodárstvu", "TBD od SUA"),
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
      { id: "m5-l1", title: "5.1 Samojská kultúra jedla — úvod", content: "<p>Obsah lekcie doplní partner NUS.</p>" },
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
      draftMaterial("m5-mat1", "photo-story", "Fotopríbeh: farm-to-table na Samoe", "TBD od NUS"),
      draftMaterial("m5-mat2", "fact-sheet", "Fact sheet: glosár tradičných ingrediencií", "TBD od NUS"),
      draftMaterial("m5-mat3", "case-study", "Prípadová štúdia rodinnej farmy/plantáže", "TBD od NUS"),
      draftMaterial("m5-mat4", "worksheet", "Pracovný list: navrhni farm-to-table zážitok", "TBD od NUS"),
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
      { id: "m6-l1", title: "6.1 Postavenie žien v poľnohospodárstve a turizme na Fidži", content: "<p>Obsah lekcie doplní partner FNU.</p>" },
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
      draftMaterial("m6-mat4", "infographic", "Infografika: ženy v agroturistike Fidži v číslach", "TBD od FNU"),
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
      { id: "m7-l1", title: "7.1 Špecifiká mikro-agroturistiky na odľahlých ostrovoch", content: "<p>Obsah lekcie doplní partner USP.</p>" },
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
      draftMaterial("m7-mat1", "case-study", "Prípadová štúdia komunitného turizmu na odľahlom ostrove", "TBD od USP"),
      draftMaterial("m7-mat2", "photo-story", "Fotopríbeh z ostrovnej komunity USP", "TBD od USP"),
      draftMaterial("m7-mat3", "checklist", "Checklist: pripravenosť na hosťovanie návštevníkov", "TBD od USP"),
      draftMaterial("m7-mat4", "recommended-links", "Odporúčané zdroje o komunitnom turizme v Pacifiku", "TBD od USP"),
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
      { id: "m8-l1", title: "8.1 Environmentálne práva a klimatická spravodlivosť v Pacifiku", content: "<p>Obsah lekcie doplní partner NUV.</p>" },
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
