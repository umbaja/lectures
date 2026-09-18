import type { Course, Module } from "../course";

/**
 * AGRI-TOUR MOOC — "Agritourism applied in the Pacific: Applied Green Deal
 * and Farm to Fork" (Erasmus+ CBHE Strand 1, WP3).
 *
 * Module titles, owners and structure (8 modules × 6 lectures = 48 lectures,
 * 480 minutes total) come from the project's Application Form and the D3.5
 * Piloting Methodology. Lecture titles inside each module and the 10-item
 * proficiency test bank are drafts — the module-owner partner listed in each
 * module still needs to confirm/replace them for Pilot Release v0.9 per the
 * Partner Instructions (10 MCQ items/module, 4 alternatives, pass ≥ 7/10).
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

const modules: Module[] = [
  {
    id: "m1",
    title: "Modul 1: Neuroscience of Food (IVI)",
    lessons: [
      { id: "m1-l1", title: "1.1 Ako mozog rozhoduje o jedle", content: "<p>Obsah lekcie doplní partner IVI.</p>" },
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
  },
  {
    id: "m2",
    title: "Modul 2: Cultural sustainability of food (UNISG)",
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
  },
  {
    id: "m3",
    title: "Modul 3: Rural culture & agritourism planning (NewEdu)",
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
  },
  {
    id: "m4",
    title: "Modul 4: Precision agriculture in micro-farming (SUA)",
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
  },
  {
    id: "m5",
    title: "Modul 5: Samoan Culture of Food (NUS)",
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
  },
  {
    id: "m6",
    title: "Modul 6: Women's empowerment & leadership (FNU)",
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
  },
  {
    id: "m7",
    title: "Modul 7: Micro agri-tourism in remote islands (USP)",
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
  },
  {
    id: "m8",
    title: "Modul 8: Environmental rights in remote Pacific islands (NUV)",
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
  },
];

export const course: Course = {
  title: "Agritourism applied in the Pacific",
  description:
    "Applied Green Deal and Farm to Fork — MOOC projektu AGRI-TOUR (Erasmus+ CBHE). 8 modulov, 48 lekcií, 480 minút videoobsahu, testovaných v pilotnej štúdii na univerzitách vo Fidži, Samoe a Vanuatu.",
  modules,
};
