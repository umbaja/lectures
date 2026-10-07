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
 * list. Everything marked as a draft below is still awaiting the
 * module-owner partner's sign-off before Pilot Release v0.9.
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
    options: ["Option A (to be added)", "Option B (to be added)", "Option C (to be added)", "Option D (to be added)"],
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

/** The same four reflection prompts close every D3.2 Module 4 worksheet. */
const WORKSHEET_REFLECTION_QUESTIONS = [
  "Reflection — what is the strongest part of your idea?",
  "Reflection — what would be difficult for a real farmer?",
  "Reflection — how could the activity be simplified?",
  "Reflection — how does the idea connect precision agriculture with agritourism?",
];

function worksheetMaterial(id: string, title: string, fields: string[]): SupplementaryMaterial {
  return {
    id,
    type: "worksheet",
    title,
    note: "Real, fillable worksheet — D3.2 Module 4 Worksheets",
    worksheetFields: [...fields, ...WORKSHEET_REFLECTION_QUESTIONS],
  };
}

const modules: Module[] = [
  {
    id: "m1",
    title: "Module 1: Neuroscience of Food (IVI)",
    owner: "IVI",
    intro:
      "This module explores how the brain and the senses shape food-related decisions, and how that knowledge " +
      "can be used to design experiential agritourism. Students will learn the basics of applied social " +
      "psychology of consumer behaviour, the principles of eco-gastronomy, and how to support sustainable and " +
      "healthy consumption. The module includes behaviour-change exercises that help participants design their " +
      "own food-related experiential activity for agritourism visitors, illustrated with case studies from " +
      "real agritourism businesses in the Pacific and in Europe.",
    lessons: [
      {
        id: "m1-l1",
        title: "1.1 How the brain decides about food",
        content:
          "<p>Content for this lesson will be provided by partner IVI.</p>" +
          "<p><em>The video below is only a DEMO of the mechanism (video + in-video quiz checkpoints) — " +
          "replace the <code>youtubeId</code> and the questions in <code>course-content.ts</code> with the " +
          "real video for lesson 1.1 from the AGRI-TOUR YouTube channel.</em></p>",
        video: {
          youtubeId: "aqz-KE-bpKQ",
          checkpoints: [
            {
              id: "m1-l1-cp1",
              atSeconds: 10,
              question: draftQuestion("m1-l1-cp1-q", "DEMO question #1 (replace with a real question about the video content at 0:10)"),
            },
            {
              id: "m1-l1-cp2",
              atSeconds: 25,
              question: draftQuestion("m1-l1-cp2-q", "DEMO question #2 (replace with a real question about the video content at 0:25)"),
            },
          ],
        },
      },
      { id: "m1-l2", title: "1.2 Sensory perception and experiential activities in agritourism", content: "<p>Content for this lesson will be provided by partner IVI.</p>" },
      { id: "m1-l3", title: "1.3 Applied social psychology of consumer behaviour", content: "<p>Content for this lesson will be provided by partner IVI.</p>" },
      { id: "m1-l4", title: "1.4 Supporting sustainable and healthy consumption", content: "<p>Content for this lesson will be provided by partner IVI.</p>" },
      { id: "m1-l5", title: "1.5 Case studies from experiential agritourism", content: "<p>Content for this lesson will be provided by partner IVI.</p>" },
      {
        id: "m1-l6",
        title: "1.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner IVI.</p>",
        quiz: {
          questions: [
            draftQuestion("m1-q1", "Which factor most strongly influences sensory perception of food in an agritourism experience?"),
            draftQuestion("m1-q2", "What is the goal of applied social psychology in the context of food consumption?"),
            draftQuestion("m1-q3", "Which approach supports sustainable consumer behaviour?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m1-mat1", "case-study", "Case study: an experiential tasting on an agritourism farm", "TBD from IVI"),
      draftMaterial("m1-mat2", "worksheet", "Worksheet: design a consumer behaviour-change exercise", "TBD from IVI"),
      draftMaterial("m1-mat3", "infographic", "Infographic: how the brain decides about food (a 5-step process)", "TBD from IVI"),
      draftMaterial("m1-mat4", "recommended-links", "Recommended resources on the applied psychology of food", "TBD from IVI"),
    ],
    references: ["TBD — reference list to be provided by partner IVI"],
  },
  {
    id: "m2",
    title: "Module 2: Cultural sustainability of food (UNISG)",
    owner: "UNISG",
    intro:
      "This module addresses the cultural sustainability of food and the role food labels and designations of " +
      "origin play in agritourism. Students will learn why transparency about the origin of food matters for " +
      "visitor trust, how geographical indications and certifications of traditional products work, and how " +
      "producer stories strengthen the value of a destination. The module draws on the principles of the Slow " +
      "Food movement and shows how to combine tradition with innovation when communicating local food to " +
      "visitors.",
    lessons: [
      {
        id: "m2-l1",
        title: "2.1 The anatomy of a food label",
        content:
          "<p>This lecture treats the food label as a legal document, not just a piece of packaging: the " +
          "difference between the \"marketing\" front of pack and the \"legal\" back of pack, the mandatory " +
          "highlighting of the 14 major allergens, the standardised nutrition table per 100 g/100 ml, the " +
          "difference between \"best before\" and \"use by\", the rules for claims such as \"low fat\", and the " +
          "ban on greenwashing.</p>",
        video: {
          youtubeId: "cdZjNwPuvNA",
          checkpoints: [
            {
              id: "m2-l1-cp1",
              atSeconds: 168,
              question: {
                id: "m2-l1-cp1-q",
                question: "According to the lecture, what must be bolded or capitalised on an EU food label?",
                options: [
                  "The price of the product",
                  "The 14 major allergens",
                  "The manufacturer's name",
                  "The country where the packaging was made",
                ],
                correctIndex: 1,
              },
            },
            {
              id: "m2-l1-cp2",
              atSeconds: 361,
              question: {
                id: "m2-l1-cp2-q",
                question: "Which voluntary transparency tool does the lecture mention — e.g. a code that reveals the exact farm of origin?",
                options: [
                  "A QR code linked to farm/carbon-footprint data",
                  "A hologram on the label",
                  "The producer's signature on the pack",
                  "An EAN barcode",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l2",
        title: "2.2 Decoding the EU food label",
        content:
          "<p>This lecture covers the three goals of EU labelling legislation (safety, information, fair " +
          "competition), the mandatory categories (the food's legal name, the nutrition declaration, the date, " +
          "origin labelling for fresh products) and the link between clear origin labelling and visitor trust " +
          "on a farm.</p>",
        video: {
          youtubeId: "AKSFlA7IE4Q",
          checkpoints: [
            {
              id: "m2-l2-cp1",
              atSeconds: 168,
              question: {
                id: "m2-l2-cp1-q",
                question: "According to the lecture, what must a label state about the food itself — something a producer cannot simply \"invent\"?",
                options: [
                  "Its legal name",
                  "The recommended retail price",
                  "The producer's logo",
                  "The company's founding date",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l2-cp2",
              atSeconds: 270,
              question: {
                id: "m2-l2-cp2-q",
                question: "According to the lecture, why does origin labelling matter to a consumer (e.g. garlic from a local region instead of from across the world)?",
                options: [
                  "It lets them choose the local option and reduce food miles / their carbon footprint",
                  "It is only legally required for exported products",
                  "It affects the VAT rate",
                  "It has no practical significance",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l3",
        title: "2.3 Geographical indications (PDO/PGI) and rural tourism",
        content:
          "<p>This lecture explains how a product name can become legally protected property: PDO (the " +
          "strictest — the whole process from raw materials to final ageing must take place within the " +
          "region) and PGI, the difference between a geographical indication as a public good and a trademark " +
          "as private property, and the link to tourism — a geographical indication as \"the best marketing " +
          "brochure\" a rural area can have.</p>",
        video: {
          youtubeId: "t9lKXrs3Ew4",
          checkpoints: [
            {
              id: "m2-l3-cp1",
              atSeconds: 103,
              question: {
                id: "m2-l3-cp1-q",
                question: "What does a PDO (Protected Designation of Origin) require, according to the lecture?",
                options: [
                  "That the whole process — from raw materials to final ageing — happens within the region",
                  "That the product holds an international patent",
                  "That only one specific company may make it",
                  "That it is cheaper than competing products",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l3-cp2",
              atSeconds: 236,
              question: {
                id: "m2-l3-cp2-q",
                question: "How does the lecture describe a geographical indication in relation to tourism?",
                options: [
                  "As the best marketing brochure a rural area can have",
                  "As an obstacle to tourism development",
                  "As a tool used exclusively for online sales",
                  "As something unrelated to tourism",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l4",
        title: "2.4 The principle of transparency in food communication",
        content:
          "<p>This lecture presents the principle of transparency as a legal obligation (not just an ethical " +
          "choice), its historical context (the BSE crisis in the 1990s and the emergence of the traceability " +
          "principle), the key FIC regulation (EU No. 1169/2011), and the ban on misleading claims including " +
          "greenwashing.</p>",
        video: {
          youtubeId: "eyr5AMNnoP0",
          checkpoints: [
            {
              id: "m2-l4-cp1",
              atSeconds: 210,
              question: {
                id: "m2-l4-cp1-q",
                question: "Which EU regulation does the lecture call the cornerstone of food information transparency?",
                options: [
                  "Regulation (EU) No 1169/2011 (the FIC regulation)",
                  "The GDPR",
                  "The VAT directive",
                  "The REACH regulation",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m2-l4-cp2",
              atSeconds: 377,
              question: {
                id: "m2-l4-cp2-q",
                question: "What is it called when a producer writes \"100% eco-friendly\" on a plastic bottle without independent certification?",
                options: ["Greenwashing", "Rebranding", "Traceability", "Upcycling"],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m2-l5",
        title: "2.5 Producer stories: from winemaking to hazelnuts",
        content:
          "<p>This lesson presents two real producer stories from the Monferrato region in Italy (the " +
          "interviews themselves are in Italian — see the video linked under supplementary materials below).</p>" +
          "<p><strong>Cantina Sociale di Lù</strong> — Matteo Currò, cellarman at a cooperative winery founded " +
          "in 1906 (120 years in operation), presents a new rosé wine made using the old \"salasso\" (saignée) " +
          "method. The new label was created together with a comic-strip artist from Alessandria and must " +
          "respect the rules of the region's \"disciplinare\" (specification).</p>" +
          "<p><strong>Corilù</strong> — Luca Gatti, president of a company specialising in hazelnuts, founded " +
          "about 30 years ago by his grandfather in Piedmont. The company makes 100% hazelnut products as well " +
          "as processed spreads (including a recipe with 60% hazelnut content) and recently refreshed its " +
          "visual identity and communication, closely tied to the region and its supply chain. The lecture " +
          "also mentions the historical origin of the \"gianduia\" recipe — pairing cocoa with Piedmont " +
          "hazelnuts.</p>" +
          "<p>Both companies put the principles from the earlier lessons into practice: a label bound to a " +
          "regional specification (disciplinare), an emphasis on origin and supply-chain transparency, and the " +
          "combination of tradition with innovation (a new label design, new recipes).</p>",
      },
      {
        id: "m2-l6",
        title: "2.6 Module summary and proficiency test",
        content:
          "<p>Module 2 summary: the food label as a legal document, geographical indications (PDO/PGI) and " +
          "their link to rural tourism, the principle of transparency (the FIC regulation), and producer " +
          "stories showing these principles in practice.</p>",
        quiz: {
          questions: [
            {
              id: "m2-q1",
              question: "Which two main EU \"stamps\" for geographical indications does the GI lecture mention?",
              options: ["PDO and PGI", "ISO and CE", "Organic and Fairtrade", "GMP and HACCP"],
              correctIndex: 0,
            },
            {
              id: "m2-q2",
              question: "According to the lecture, what is the main difference between a geographical indication (GI) and a trademark?",
              options: [
                "A GI is a public good; a trademark is private commercial property",
                "A GI only applies outside the EU",
                "A trademark is always more expensive",
                "There is no difference between them",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q3",
              question: "What must be bolded or capitalised on a food label?",
              options: ["The 14 major allergens", "The distributor's name", "The time of manufacture", "The certifying agency's logo"],
              correctIndex: 0,
            },
            {
              id: "m2-q4",
              question: "In what unit must the mandatory nutrition table be presented?",
              options: ["Per 100 g or 100 ml", "Per serving, as defined by the manufacturer", "Per whole package", "Per day"],
              correctIndex: 0,
            },
            {
              id: "m2-q5",
              question: "What is the difference between \"use by\" and \"best before\"?",
              options: [
                "\"Use by\" is about safety; \"best before\" is about quality and food waste",
                "They are the same date in a different language",
                "\"Best before\" only applies to beverages",
                "\"Use by\" is just a recommendation with no legal meaning",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q6",
              question: "Which EU regulation does the lecture call the cornerstone of food information transparency?",
              options: [
                "Regulation (EU) No 1169/2011 (FIC)",
                "The GDPR",
                "The VAT directive",
                "The REACH regulation",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q7",
              question: "Which historical event does the lecture link to the EU's strict food traceability rules?",
              options: [
                "The BSE (\"mad cow disease\") crisis in the 1990s",
                "The 2008 financial crisis",
                "The COVID-19 pandemic",
                "Slovakia's accession to the EU",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q8",
              question: "What is misleading advertising claiming \"100% eco-friendly\" without independent certification called?",
              options: ["Greenwashing", "Rebranding", "Upcycling", "Downgrading"],
              correctIndex: 0,
            },
            {
              id: "m2-q9",
              question: "How does the GI lecture describe a geographical indication in relation to rural tourism?",
              options: [
                "As the best marketing brochure a rural area can have",
                "As an administrative obstacle for small producers",
                "As a tool meant exclusively for large-scale production",
                "The lecture says GI is unrelated to tourism",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q10",
              question: "Which \"disciplinare\" (set of regional rules) must the new wine label from Cantina Sociale di Lù, mentioned in the case study, still respect?",
              options: [
                "The region's specification rules, which cannot be bypassed even with a new label design",
                "Only internal company guidelines with no legal force",
                "An EU packaging directive",
                "None — label design is entirely free",
              ],
              correctIndex: 0,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m2-mat1", "case-study", "Interview: Matteo Currò, cellarman at Cantina Sociale di Lù (Monferrato, IT)", "Real video, in Italian (no English subtitles) — https://www.youtube.com/watch?v=7YVOr0FCDuo"),
      draftMaterial("m2-mat2", "case-study", "Interview: Luca Gatti, president of Corilù (hazelnuts, Piedmont, IT)", "Real video, in Italian (no English subtitles) — https://www.youtube.com/watch?v=pOdY1ixwqtU"),
      draftMaterial("m2-mat3", "infographic", "Infographic: types of food origin designations in the EU and the Pacific", "TBD from UNISG"),
      draftMaterial("m2-mat4", "checklist", "Checklist: how to read a food label and verify origin", "TBD from UNISG"),
    ],
    references: [
      "Regulation (EU) No 1169/2011 on the provision of food information to consumers (FIC)",
      "AGRI-TOUR YouTube: \"The anatomy of a food label\", \"Decoding the EU food label\", \"Geographical indications in the European food sector\", \"The principle of transparency in agri food commercial communication\"",
    ],
  },
  {
    id: "m3",
    title: "Module 3: Rural culture & agritourism planning (NewEdu)",
    owner: "NewEdu",
    intro:
      "This module introduces the European model of agritourism and shows how to transfer it to the conditions " +
      "of Pacific islands. Students will learn about planning a small agritourism offer, building local value " +
      "chains, and telling the story of a rural community as part of the visitor experience. The emphasis is " +
      "on practical steps — from the first idea to a working offer — illustrated with case studies from island " +
      "settings where the transfer of European know-how is most relevant.",
    lessons: [
      {
        id: "m3-l1",
        title: "3.1 The agritourism model and its transfer to Pacific islands",
        content:
          "<p>New Edu's presentation from the Vanuatu Capacity Building: agritourism as \"opening the gate to " +
          "what we already have\" (not building something new), parallels between Slovakia and Vanuatu, the " +
          "shift in post-COVID-19 travel preferences towards open spaces and meaningful experiences, " +
          "processing raw produce instead of selling it raw (e.g. milk → ice cream), restoring an old building " +
          "into a café/information centre, and Facebook as the main marketing tool for farmers in Vanuatu.</p>",
        video: {
          youtubeId: "uSY-AGRo1bg",
          checkpoints: [
            {
              id: "m3-l1-cp1",
              atSeconds: 538,
              question: {
                id: "m3-l1-cp1-q",
                question: "According to the presentation, what are tourists increasingly looking for after the COVID-19 pandemic?",
                options: [
                  "Open spaces, health and wellness, and meaningful impact",
                  "Large, crowded cruise ships",
                  "The lowest possible price regardless of experience",
                  "Exclusively urban destinations",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m3-l1-cp2",
              atSeconds: 1149,
              question: {
                id: "m3-l1-cp2-q",
                question: "Which tool does the presentation call the most powerful marketing channel for a farmer in Vanuatu?",
                options: ["Facebook", "Instagram", "Printed flyers", "Radio advertising"],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m3-l2", title: "3.2 Supporting rural culture and communities", content: "<p>Content for this lesson will be provided by partner NewEdu.</p>" },
      { id: "m3-l3", title: "3.3 Planning an agritourism business", content: "<p>Content for this lesson will be provided by partner NewEdu.</p>" },
      { id: "m3-l4", title: "3.4 Practical implementation — steps and tools", content: "<p>Content for this lesson will be provided by partner NewEdu.</p>" },
      { id: "m3-l5", title: "3.5 EU case studies transferable to the Pacific", content: "<p>Content for this lesson will be provided by partner NewEdu.</p>" },
      {
        id: "m3-l6",
        title: "3.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner NewEdu.</p>",
        quiz: {
          questions: [
            draftQuestion("m3-q1", "Which elements of the European agritourism model are transferable to Pacific islands?"),
            draftQuestion("m3-q2", "What is the first step in planning an agritourism business?"),
            draftQuestion("m3-q3", "How does agritourism support rural culture?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m3-mat1", "checklist", "Checklist: steps to launch a small agritourism offer", "TBD from NewEdu"),
      draftMaterial("m3-mat2", "case-study", "Visit to Teouma Valley Farm (owner Michelle Prendergast, Vanuatu)", "Real video — https://www.youtube.com/watch?v=VEl-GhijywA"),
      draftMaterial("m3-mat3", "worksheet", "Worksheet: mapping the visitor experience", "TBD from NewEdu"),
      draftMaterial("m3-mat4", "photo-story", "Making traditional LapLap at Api Farm (Vanuatu)", "Real video — https://www.youtube.com/watch?v=QBAcjsRyPPE"),
      draftMaterial("m3-mat5", "case-study", "Visit to Api Farm (Vanuatu)", "Real video — https://www.youtube.com/watch?v=LW6aKTMrj2E"),
      draftMaterial("m3-mat6", "case-study", "Visit to 83 Islands Distillery (Vanuatu)", "Real video — https://www.youtube.com/watch?v=ArKrksl_gpM"),
      draftMaterial("m3-mat7", "case-study", "Visit to Gaston Chocolat factory (owner Olivier, Vanuatu)", "Real video — https://www.youtube.com/watch?v=5elGIW1SzuY"),
      draftMaterial("m3-mat8", "case-study", "Visit to Tanna Coffee (Vanuatu)", "Real video, no transcript — https://www.youtube.com/watch?v=YGhmIqbmyWY"),
      draftMaterial("m3-mat9", "interview-video", "Interview: Million Dollar Point Restaurant and Bar (Vanuatu)", "Real video — https://www.youtube.com/watch?v=rzYGbEQi1u4"),
    ],
    references: ["TBD — reference list to be provided by partner NewEdu"],
  },
  {
    id: "m4",
    title: "Module 4: Precision Agriculture for Micro-Farms (SUA)",
    owner: "SUA",
    intro:
      "This module shows how precision agriculture can be adapted to small farms, micro-farms and agritourism " +
      "settings using affordable, practical and locally relevant tools. Rather than expensive machinery and " +
      "satellites, the module builds on a simple decision cycle — Measure, Understand, Act, Evaluate, " +
      "Communicate — and on tools such as a soil moisture sensor, a small weather station, a drone, or a " +
      "digital farm diary. Author: prof. Ing. Zuzana Palková, PhD. (Slovak University of Agriculture in " +
      "Nitra).",
    lessons: [
      {
        id: "m4-l1",
        title: "4.1 Precision Agriculture for Micro-Farms: Meaning, Relevance and Starting Points",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>define precision agriculture in practical terms;</li>" +
          "<li>explain why micro-farms need to be productive, sustainable and visible;</li>" +
          "<li>identify how precision agriculture differs from technology-driven innovation;</li>" +
          "<li>describe why technology must fit the farm and not the other way around.</li>" +
          "</ul>" +
          "<h3>Why this topic matters</h3>" +
          "<p>Micro-farms face climate uncertainty, irregular rainfall, limited land, labour and financial " +
          "resources, rising input costs and growing consumer demand for transparency. The core message: small " +
          "farms need to be <strong>productive, sustainable and visible</strong>. Precision agriculture can " +
          "support all three dimensions by helping farmers use resources more carefully and explain their " +
          "practices to visitors.</p>" +
          "<h3>Precision agriculture as better decision-making</h3>" +
          "<p>It means using observation, data and technology to support better farm decisions — applying the " +
          "right input in the right place, at the right time and in the right amount, based on real " +
          "conditions. On a micro-farm this does not have to mean an expensive system. It may start with one " +
          "soil moisture sensor, a simple weather station, a drone image, a mobile application, a spreadsheet, " +
          "a farm diary or a QR code.</p>" +
          "<h3>Micro-farm reality</h3>" +
          "<p>A micro-farm usually works with a smaller area, fewer workers, limited investment capacity and " +
          "close contact with local customers or visitors. For this reason, the technology used must be: " +
          "affordable, simple to use, easy to maintain, locally relevant, useful for daily decisions, and " +
          "scalable step by step.</p>" +
          "<h3>From routine to evidence-supported decisions</h3>" +
          "<p>Traditional farming experience remains essential — precision agriculture does not replace it; it " +
          "adds measurement, observation and records. Instead of watering only by routine, a farmer can check " +
          "whether the soil and crop really need water.</p>" +
          "<h3>Relevance for agritourism</h3>" +
          "<p>Precision agriculture makes farm decisions visible to visitors. A sensor, a drone image or a " +
          "digital diary becomes more than a management tool — it helps the farmer explain care, " +
          "responsibility and sustainability, making the farm story more credible.</p>" +
          "<h3>Applied learning activity: Micro-Farm Problem–Tool Match</h3>" +
          "<p>Choose one micro-farm and identify one real problem: water use, crop stress, weak promotion, " +
          "visitor engagement or climate risk. Select one simple precision tool that could help and explain " +
          "why it fits the farm. (See Worksheet 1 under supplementary materials below.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Precision agriculture is not only for large farms.</li>" +
          "<li>Micro-farms should start from real needs, not from technology.</li>" +
          "<li>The value of a tool depends on whether it improves a decision.</li>" +
          "<li>Precision agriculture can support production, sustainability and visitor communication.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain precision agriculture in one sentence.</li>" +
          "<li>I can name three pressures faced by micro-farms.</li>" +
          "<li>I can justify why a simple tool may be better than a complex system.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Write a short response (150–200 words): Which idea from this unit could be realistically used on " +
          "a small farm in your region? What information would a farmer need before applying it? How could the " +
          "idea be explained to a visitor in simple language?</p>",
        video: {
          youtubeId: "a1KFgO1732I",
          checkpoints: [
            {
              id: "m4-l1-cp1",
              atSeconds: 399,
              rewindToSeconds: 362,
              question: {
                id: "m4-l1-cp1-q",
                question: "According to the SUA presentation, precision agriculture is NOT only about what?",
                options: [
                  "Expensive machinery, expensive technology or very sophisticated skills",
                  "Reducing costs",
                  "Collecting data from the farm",
                  "Data-driven decision-making",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp2",
              atSeconds: 1065,
              rewindToSeconds: 1025,
              question: {
                id: "m4-l1-cp2-q",
                question: "What is the basic decision cycle of precision agriculture described in the presentation?",
                options: [
                  "Measure → Understand → Act → Evaluate → Communicate",
                  "Buy the technology → install it → forget about it",
                  "Drone first, then sensors, then AI",
                  "Plan → fund → sell",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      {
        id: "m4-l2",
        title: "4.2 The Precision Agriculture Decision Cycle",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>describe the five-step decision cycle used in the module;</li>" +
          "<li>distinguish between collecting data and interpreting data;</li>" +
          "<li>explain why evaluation and communication are part of precision agriculture;</li>" +
          "<li>use the cycle to analyse one small-farm decision.</li>" +
          "</ul>" +
          "<h3>1. Measure</h3>" +
          "<p>The farmer collects information from soil, weather, crops, pests, harvest quality or visitors. " +
          "Measurement does not always need to be digital — it can include photos, field notes, visual " +
          "observation or simple records.</p>" +
          "<h3>2. Understand</h3>" +
          "<p>Data become useful only when connected with farming knowledge. Low soil moisture, for example, " +
          "must be interpreted in relation to crop type, root depth, weather, growth stage and soil " +
          "conditions.</p>" +
          "<h3>3. Act</h3>" +
          "<p>The farmer uses the information to irrigate, fertilise, protect crops, harvest, adjust visitor " +
          "routes or prepare a demonstration. Action should be proportionate and linked to the original " +
          "problem.</p>" +
          "<h3>4. Evaluate</h3>" +
          "<p>After action, the farmer checks whether the decision worked. Did the plants recover? Was water " +
          "saved? Did visitors understand the demonstration? Evaluation turns one decision into learning for " +
          "the next season.</p>" +
          "<h3>5. Communicate</h3>" +
          "<p>For agritourism, communication is part of the system. The same information that supports farm " +
          "management can also become a story for visitors: how the farm saves water, protects soil, monitors " +
          "crops or learns from previous seasons.</p>" +
          "<h3>Digital farm diaries</h3>" +
          "<p>A digital diary can record planting, irrigation, fertilisation, pests, harvest dates, yield, " +
          "quality, weather notes and visitor feedback. It may be a mobile app, spreadsheet, calendar or shared " +
          "online document. Over time, records help the farmer compare seasons and explain production more " +
          "clearly.</p>" +
          "<h3>Applied learning activity: Decision Cycle Canvas</h3>" +
          "<p>Take one decision, such as irrigation, fertilisation or visitor route planning. Complete the " +
          "five steps: Measure, Understand, Act, Evaluate and Communicate. (Worksheet 2.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Data alone do not make decisions.</li>" +
          "<li>The farmer must interpret data in context.</li>" +
          "<li>Evaluation is needed to learn whether the action worked.</li>" +
          "<li>Communication connects precision agriculture with agritourism.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can describe all five steps in the decision cycle.</li>" +
          "<li>I can explain why data interpretation matters.</li>" +
          "<li>I can turn one farm decision into a visitor story.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Write a short response (150–200 words) applying this unit to one real or hypothetical " +
          "micro-farm.</p>",
      },
      {
        id: "m4-l3",
        title: "4.3 Soil, Water and Smart Irrigation",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain why water is a strong starting point for precision agriculture;</li>" +
          "<li>identify simple tools for smart irrigation on micro-farms;</li>" +
          "<li>analyse when irrigation is actually needed;</li>" +
          "<li>connect irrigation decisions with sustainability communication.</li>" +
          "</ul>" +
          "<h3>Water as a starting point</h3>" +
          "<p>Water directly affects crop growth, product quality and productivity. Climate change and " +
          "irregular rainfall make water management increasingly important — for micro-farms, wasted water can " +
          "mean unnecessary costs and environmental pressure.</p>" +
          "<h3>Smart irrigation does not need to be complex</h3>" +
          "<p>It may include drip irrigation, timers, soil moisture sensors, rainfall monitoring, simple " +
          "irrigation schedules and farmer observation supported by data. The goal is simple: use water only " +
          "when and where it is needed.</p>" +
          "<h3>From visual impression to evidence</h3>" +
          "<p>The soil surface may look dry while deeper layers still contain water. A sensor or careful " +
          "monitoring can prevent unnecessary watering, or help apply water before serious crop stress " +
          "occurs.</p>" +
          "<h3>Case study: the CODECS Living Lab</h3>" +
          "<p>The presentation uses the Slovak Living Lab from the CODECS project as a practical example — " +
          "soil moisture sensors, weather stations and IoT devices support irrigation decisions and can also " +
          "be used for farm demonstrations and virtual farm tours. The learning point: a tool used for farm " +
          "management can also teach visitors about water-saving.</p>" +
          "<h3>Sustainability message</h3>" +
          "<p>Smart irrigation is easy to explain to visitors. A farmer can say: \"We do not water randomly; " +
          "we check the soil and use water only when plants need it.\" This message makes sustainability " +
          "visible and concrete.</p>" +
          "<h3>Applied learning activity: Irrigation Decision Worksheet</h3>" +
          "<p>Given a simple farm situation (soil moisture, rainfall forecast, crop stage, temperature), " +
          "decide whether to irrigate, what extra information is needed, and how the decision could be " +
          "explained to visitors. (Worksheet 3.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Water is a practical starting point for precision agriculture.</li>" +
          "<li>Smart irrigation can be simple and affordable.</li>" +
          "<li>Soil moisture must be interpreted in context.</li>" +
          "<li>Water-saving can become a strong agritourism message.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain when a soil moisture sensor is useful.</li>" +
          "<li>I can name three tools used in smart irrigation.</li>" +
          "<li>I can create one visitor-friendly water-saving message.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Write a short response (150–200 words) applying this unit to one real or hypothetical " +
          "micro-farm.</p>",
      },
      {
        id: "m4-l4",
        title: "4.4 Drones, Images and Farm Monitoring",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain how drones can support observation of micro-farms;</li>" +
          "<li>identify what can and cannot be concluded from aerial images;</li>" +
          "<li>describe how drone imagery can support both monitoring and storytelling;</li>" +
          "<li>recognise safety, privacy and proportionality concerns.</li>" +
          "</ul>" +
          "<h3>Seeing the farm from above</h3>" +
          "<p>Drones allow farmers to observe the farm from a different perspective. From above it may be " +
          "easier to see dry areas, weak crop growth, erosion, drainage issues, pest damage, crop-row " +
          "differences or visitor routes.</p>" +
          "<h3>Monitoring over time</h3>" +
          "<p>If images are collected regularly, they can document seasonal changes and help the farmer " +
          "compare how the farm develops — supporting both farm management and promotion and education.</p>" +
          "<h3>Visible crop stress and limitations</h3>" +
          "<p>A basic drone image can show visible differences, but it does not replace expert diagnosis — a " +
          "weak area still needs closer inspection. In advanced cases, multispectral imagery may provide " +
          "additional information, but simple visual imagery can already be useful for many micro-farms.</p>" +
          "<h3>Storytelling value</h3>" +
          "<p>For agritourism, drone images can show the beauty of the farm, crop diversity, landscape, water " +
          "sources and visitor routes — useful at the beginning of a tour or on the website to explain the " +
          "farm layout.</p>" +
          "<h3>Responsible use</h3>" +
          "<p>Drones can be attractive, but they also require attention to safety, privacy, visitors, " +
          "neighbouring properties and legal rules. Technology should support the farm story and not replace " +
          "the farmer, land, product and human relationship.</p>" +
          "<h3>Applied learning activity: Read the Farm from Above</h3>" +
          "<p>Given (or imagining) an aerial farm image, identify what information can be interpreted " +
          "directly, what needs field verification, and how the image could be used during a visitor tour. " +
          "(Worksheet 4.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Drone imagery can reveal patterns that are not visible from the ground.</li>" +
          "<li>Images need interpretation and field verification.</li>" +
          "<li>Drone views can also support visitor orientation and promotion.</li>" +
          "<li>Drone use must respect safety, privacy and authenticity.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can name three uses of drone imagery on a micro-farm.</li>" +
          "<li>I can explain one limitation of aerial images.</li>" +
          "<li>I can design a visitor explanation using a drone image.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Write a short response (150–200 words) applying this unit to one real or hypothetical " +
          "micro-farm.</p>",
      },
      {
        id: "m4-l5",
        title: "4.5 Sustainability, Risks and Step-by-Step Implementation",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain how precision agriculture can make sustainability visible;</li>" +
          "<li>identify risks and limitations for micro-farms;</li>" +
          "<li>apply a simple step-by-step model for introducing one tool;</li>" +
          "<li>avoid technology without a clear purpose.</li>" +
          "</ul>" +
          "<h3>Sustainability made visible</h3>" +
          "<p>Farms, hotels and destinations often say they are sustainable, but visitors increasingly ask " +
          "what this means in practice. Precision agriculture can provide concrete examples: monitoring water " +
          "use, using drip irrigation, recording fertilisation, reducing unnecessary pesticide pressure, " +
          "protecting soil and documenting production practices.</p>" +
          "<h3>Climate resilience</h3>" +
          "<p>Monitoring soil, water, weather and crop condition can help farmers respond to drought, heat, " +
          "irregular rainfall and new pest pressures, supporting resilience while keeping decisions realistic " +
          "and local.</p>" +
          "<h3>Risks and limitations</h3>" +
          "<p>The presentation highlights several risks: high investment costs, lack of digital skills, weak " +
          "internet connection, device maintenance, incorrect data interpretation, technology without a clear " +
          "purpose, drone safety and privacy rules, and loss of authenticity in agritourism.</p>" +
          "<h3>Step-by-step model</h3>" +
          "<p>Micro-farms can start by identifying one problem, choosing one simple tool, testing it on a " +
          "small scale, measuring the benefit, and turning the practice into a story. This <em>problem – tool " +
          "– test – benefit – story</em> model helps avoid overinvestment.</p>" +
          "<h3>Authenticity first</h3>" +
          "<p>Precision agriculture should not make the farm feel artificial. Visitors come for people, food, " +
          "landscape, culture and atmosphere. Technology should support the farm story, not replace it.</p>" +
          "<h3>Applied learning activity: One Tool, One Problem, One Season</h3>" +
          "<p>Select one farm problem and propose a small test of one tool for one crop, field, season or " +
          "visitor activity. Define how success will be measured and how the result can be communicated. " +
          "(Worksheet 5.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Sustainability must be shown through concrete practices.</li>" +
          "<li>Technology can create risk if it has no purpose or is hard to maintain.</li>" +
          "<li>A micro-farm can start with one small test.</li>" +
          "<li>The farmer, land and product remain at the centre.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can list four risks of digital tools on micro-farms.</li>" +
          "<li>I can design a small-scale test of one tool.</li>" +
          "<li>I can turn one smart practice into a simple sustainability story.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Write a short response (150–200 words) applying this unit to one real or hypothetical " +
          "micro-farm.</p>",
      },
      {
        id: "m4-l6",
        title: "4.6 Smart Agritourism and Digital Storytelling",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain how a farm practice can become a visitor experience;</li>" +
          "<li>design a smart agritourism activity using one precision tool;</li>" +
          "<li>create a clear sustainability message for visitors;</li>" +
          "<li>use simple digital storytelling to build trust and transparency.</li>" +
          "</ul>" +
          "<h3>From farm practice to visitor experience</h3>" +
          "<p>A soil sensor helps the farmer know when plants need water — and can also become a " +
          "demonstration. A weather station supports farm management and can teach visitors about climate. " +
          "Drip irrigation saves water and can be shown in a water-saving workshop. A digital diary can become " +
          "a \"from seed to plate\" story.</p>" +
          "<h3>Examples of smart agritourism activities</h3>" +
          "<p>Smart farm walks, soil moisture demonstrations, drone-view farm presentations, water-saving " +
          "workshops, from-soil-to-plate experiences, QR-coded product tastings, climate-smart farming corners, " +
          "or a children's activity called \"Young Farm Scientist\".</p>" +
          "<h3>Digital storytelling and promotion</h3>" +
          "<p>Precision agriculture provides real communication content: short field videos, before-and-after " +
          "visuals, farmer explanations, drone shots, QR codes, and educational posts. The lecture's message: " +
          "do not only say \"we are sustainable\" — show how sustainability works.</p>" +
          "<h3>Example: Water-Smart Garden Walk</h3>" +
          "<p>A small vegetable farm uses a soil moisture sensor and drip irrigation. Visitors first guess " +
          "whether plants need water, then check the soil with the sensor, learn how drip irrigation works, " +
          "and taste vegetables grown with careful water use. The promotional message: \"Taste vegetables grown " +
          "with respect for every drop of water.\"</p>" +
          "<h3>Discussion and adaptation</h3>" +
          "<p>The final step is to adapt the idea to local farms and regions — considering which tool is " +
          "realistic, what problem can be solved with simple data, how to explain smart farming to visitors, " +
          "and how to combine tradition and innovation without losing authenticity.</p>" +
          "<h3>Applied learning activity: Design a Smart Agritourism Experience</h3>" +
          "<p>Choose a farm type, one precision tool, a visitor activity, a sustainability message and a " +
          "promotional sentence. The result should be practical enough for a real farmer with limited " +
          "resources. (Worksheet 6.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Real farming practices can become educational visitor experiences.</li>" +
          "<li>Smart agritourism should be simple, authentic and meaningful.</li>" +
          "<li>Digital tools can build trust when they make practices transparent.</li>" +
          "<li>Good storytelling shows how sustainability works.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can turn a soil sensor, drone image or QR code into a visitor activity.</li>" +
          "<li>I can write a short visitor-friendly sustainability message.</li>" +
          "<li>I can explain how smart farming and agritourism support each other.</li>" +
          "</ul>" +
          "<h3>Module summary and proficiency test</h3>" +
          "<p>A 10-question test follows to check understanding of the module (pass mark: at least 7/10). " +
          "Scoring guide: 8–10 correct = strong understanding; 6–7 = acceptable, review the units linked to " +
          "incorrect answers; 0–5 = review the module materials before continuing.</p>",
        quiz: {
          questions: [
            {
              id: "m4-q1",
              question: "Which statement best describes precision agriculture in this module?",
              options: [
                "A system used only by large farms with expensive machinery",
                "A practical approach using observation, data and technology to support better farm decisions",
                "A marketing term for organic farming",
                "A way to replace farmer experience completely",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q2",
              question: "For micro-farms, precision agriculture should be:",
              options: [
                "Expensive and highly automated",
                "Standardised exactly like large cereal farms",
                "Affordable, simple, locally relevant and scalable step by step",
                "Used only for export-oriented farms",
              ],
              correctIndex: 2,
            },
            {
              id: "m4-q3",
              question: "What is the correct order of the decision cycle used in the module?",
              options: [
                "Act – Measure – Communicate – Understand – Evaluate",
                "Measure – Understand – Act – Evaluate – Communicate",
                "Communicate – Act – Measure – Evaluate – Understand",
                "Understand – Communicate – Measure – Act – Evaluate",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q4",
              question: "Why are soil moisture sensors useful for small farms?",
              options: [
                "They decide everything automatically without farmer interpretation",
                "They help farmers understand whether irrigation may really be needed",
                "They replace rainfall monitoring",
                "They are used only for visitor entertainment",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q5",
              question: "What is the main goal of smart irrigation in the module?",
              options: [
                "To water crops every day at the same time",
                "To use water only when and where it is needed",
                "To replace all farmer decisions with software",
                "To increase water use in dry periods",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q6",
              question: "Which statement about drones is most accurate?",
              options: [
                "Drones can show patterns from above, but the results still need interpretation and field verification",
                "Drones always identify the exact cause of every crop problem",
                "Drones are useful only for large farms",
                "Drones should replace visitor explanations",
              ],
              correctIndex: 0,
            },
            {
              id: "m4-q7",
              question: "A digital farm diary can help a micro-farm mainly by:",
              options: [
                "Removing the need for observations",
                "Turning seasonal experience into structured records",
                "Guaranteeing higher yield",
                "Replacing farm tours",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q8",
              question: "How can precision agriculture support sustainability communication?",
              options: [
                "By making broad claims without evidence",
                "By showing concrete practices such as water monitoring, drip irrigation or crop records",
                "By hiding farm practices from visitors",
                "By using only technical language",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q9",
              question: "Which risk is specifically mentioned in the module?",
              options: [
                "Too many visitors always improve authenticity",
                "Incorrect interpretation of data",
                "Precision agriculture has no maintenance needs",
                "Weak internet connection improves data collection",
              ],
              correctIndex: 1,
            },
            {
              id: "m4-q10",
              question: "What is the main idea of smart agritourism in this module?",
              options: [
                "To create artificial attractions unrelated to farming",
                "To turn real farming practices into educational visitor experiences",
                "To use technology only for social media",
                "To avoid explaining production methods to visitors",
              ],
              correctIndex: 1,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      {
        id: "m4-mat1",
        type: "fact-sheet",
        title: "Module glossary",
        note: "Real content — D3.2 Module 4 Scripts & Annexes, Section 2",
        body:
          "<dl>" +
          [
            ["Precision agriculture", "Use of observation, data and technology to support better farm decisions. In the module, the focus is on practical, affordable and locally relevant use on micro-farms."],
            ["Micro-farm", "A small farm with limited land, labour and financial resources, often closely connected with local customers, visitors and community life."],
            ["Farm monitoring", "The regular observation or measurement of conditions on a farm, such as soil moisture, weather, crop condition or production activities."],
            ["Farm data", "Information collected from observations, sensors, weather stations, digital records, maps or other farm-management tools and used to support decisions."],
            ["Data-driven decision-making", "Making a farm-management decision on the basis of relevant observations and data instead of relying only on routine or assumptions."],
            ["Decision cycle", "A five-step process used in the module: Measure, Understand, Act, Evaluate and Communicate."],
            ["Soil moisture sensor", "A tool that helps farmers understand whether water is available in the soil and whether irrigation may be needed."],
            ["Weather station", "A device or set of sensors that records local weather conditions such as temperature, rainfall, wind, humidity or solar radiation."],
            ["Soil and water management", "Farm practices aimed at monitoring and managing soil and water resources efficiently, including decisions about when and how much to irrigate."],
            ["Smart irrigation", "Irrigation supported by observation, sensors, rainfall information, schedules or timers so that water is used only when and where it is needed."],
            ["Digital farm diary", "A simple digital record of planting, irrigation, fertilisation, pests, harvest, quality, weather and visitor feedback."],
            ["Drone imagery", "Images or video taken from above to observe the farm, identify visible patterns and support communication or promotion."],
            ["QR code", "A scannable code that connects a physical product or farm location with digital information, for example product origin, production methods or the farm story."],
            ["Smart agritourism", "Agritourism that uses real farming practices and simple technologies as learning points for visitors."],
            ["Authenticity", "The quality of keeping the farmer, land, product, culture and human story at the centre, while using technology only as support."],
            ["Climate resilience", "The capacity of a farm to respond and adapt to conditions such as drought, heat, irregular rainfall and changing pest pressures."],
            ["Sustainability", "In this module, the responsible management of resources and farming practices that can reduce water use, protect soil, improve input efficiency, reduce losses and strengthen resilience."],
          ]
            .map(([term, def]) => `<dt>${term}</dt><dd>${def}</dd>`)
            .join("") +
          "</dl>",
      },
      worksheetMaterial("m4-mat2", "Worksheet 1 – Micro-Farm Problem–Tool Match", [
        "Type of farm",
        "Main farm problem",
        "Why this problem matters",
        "Possible precision tool",
        "Why this tool fits the farm",
        "Expected benefit",
        "Possible visitor explanation",
      ]),
      worksheetMaterial("m4-mat3", "Worksheet 2 – Decision Cycle Canvas", [
        "Decision to be made",
        "Measure: what information is collected?",
        "Understand: what does the information mean?",
        "Act: what will the farmer do?",
        "Evaluate: how will success be checked?",
        "Communicate: how will this be explained to visitors?",
      ]),
      worksheetMaterial("m4-mat4", "Worksheet 3 – Irrigation Decision Worksheet", [
        "Crop and growth stage",
        "Current soil moisture information",
        "Recent rainfall",
        "Weather forecast",
        "Farmer observation",
        "Would you irrigate today? Why / why not?",
        "What could happen if the decision is wrong?",
        "How would you explain the decision to visitors?",
      ]),
      worksheetMaterial("m4-mat5", "Worksheet 4 – Farm Image / Drone Interpretation", [
        "What can be seen from above?",
        "Which areas look different?",
        "What could be the possible reasons?",
        "What must be checked in the field?",
        "How could this image be used in a farm tour?",
        "What privacy or safety issues must be considered?",
      ]),
      worksheetMaterial("m4-mat6", "Worksheet 5 – One Tool, One Problem, One Season", [
        "Problem to solve",
        "Chosen tool",
        "Pilot area or crop",
        "Duration of the test",
        "What will be measured?",
        "How will benefit be evaluated?",
        "What is the next step if the test works?",
        "What is the next step if the test does not work?",
      ]),
      worksheetMaterial("m4-mat7", "Worksheet 6 – Smart Agritourism Experience Template", [
        "Type of farm",
        "Precision agriculture tool",
        "Visitor activity",
        "Sustainability message",
        "What visitors see",
        "What visitors do",
        "What visitors learn",
        "Promotional sentence",
      ]),
      {
        id: "m4-mat8",
        type: "checklist",
        title: "Step-by-step implementation model: problem – tool – test – benefit – story",
        note: "Real content — D3.2 Module 4 Scripts & Annexes, Unit 5 \"Step-by-step model\"",
        checklistItems: [
          "Identify one real problem on the farm",
          "Choose one simple, affordable tool",
          "Test it on a small scale (one crop, field or season)",
          "Measure the benefit",
          "Turn the practice into a visitor story",
        ],
      },
      {
        id: "m4-mat9",
        type: "case-study",
        title: "CODECS Slovak Living Lab: supporting irrigation decisions",
        note: "Real case study — D3.2 Module 4, Annex B",
        body:
          "<p>The presentation introduces the Slovak Living Lab – CODECS as a relevant case study. It describes " +
          "soil moisture sensors, weather stations and IoT devices as tools that support irrigation decisions " +
          "and can also be used for farm demonstrations and virtual farm tours. In this module, the case study " +
          "is used to show that precision agriculture is not only about collecting data — it is about " +
          "translating data into a practical decision and communicating the decision in an educational way.</p>",
      },
      {
        id: "m4-mat10",
        type: "case-study",
        title: "Dingle Peninsula, Ireland / PLOUTOS SIP5: sensor data, food tourism and local branding",
        note: "Real case study — D3.2 Module 4, Annex B",
        body:
          "<p>The presentation uses this case as an example of farm sensor data supporting smart farming, food " +
          "tourism, local branding and rural business diversification. It helps learners understand that farm " +
          "data can contribute not only to internal farm management, but also to local identity and tourism " +
          "value.</p>",
      },
      {
        id: "m4-mat11",
        type: "case-study",
        title: "Aegean Islands and Crete, Greece: AI, drones and precision agriculture for sustainable island tourism",
        note: "Real case study — D3.2 Module 4, Annex B",
        body:
          "<p>The presentation refers to AI, UAVs and precision agriculture as tools explored for sustainable " +
          "island agriculture and tourism development. This supports the module's focus on island and remote " +
          "contexts, where agriculture, tourism and climate vulnerability are connected.</p>",
      },
      draftMaterial("m4-mat12", "case-study", "Interview with a VAC student — Plant Science Cert III (Vanuatu Agricultural College)", "Real video — https://www.youtube.com/watch?v=RQygpO_AKk8"),
      draftMaterial("m4-mat13", "interview-video", "Interview with a VAC student — Agribusiness Cert IV", "Real video, no transcript — https://www.youtube.com/watch?v=__9XltiDXrk"),
    ],
    references: [
      "AGRI-TOUR SUA presentation: Precision Agriculture for Micro-Farms (prof. Ing. Zuzana Palková, PhD., Slovak University of Agriculture in Nitra)",
      "AGRI-TOUR related material: Farm to Fork in Practice (where available on the project platform)",
      "CODECS Horizon Europe project – Slovak Living Lab / Artificial Irrigation Management Systems",
      "PLOUTOS SIP5 / Dingle Peninsula case study",
      "Aegean Islands and Crete smart agriculture examples",
    ],
  },
  {
    id: "m5",
    title: "Module 5: Samoan Culture of Food (NUS)",
    owner: "NUS",
    intro:
      "This module introduces Samoan food culture, traditional crops such as taro and coconut, and their role " +
      "in healthy nutrition and in a farm-to-table model. Students will learn how to connect culinary heritage " +
      "with an agritourism offer, and how farms and plantations can become part of the visitor experience. The " +
      "module emphasises preserving the food tradition as a form of cultural heritage and its value for both " +
      "the local community and tourism.",
    lessons: [
      {
        id: "m5-l1",
        title: "5.1 Introduction to Samoan food culture",
        content:
          "<p>NUS's presentation: in the Samoan way of life, food is not only nutrition but also part of " +
          "cultural tradition, social structure, respect and connection with the environment. At a Sunday " +
          "meal, grandparents, parents and church leaders are served first, children wait patiently and learn " +
          "discipline — hospitality is \"the heart\" of Samoan culture. Traditional food (taro, coconut, " +
          "breadfruit, fish) reminds Samoans living abroad of their connection to the land and ocean of " +
          "home.</p>",
        video: {
          youtubeId: "6-8PTVWURdY",
          checkpoints: [
            {
              id: "m5-l1-cp1",
              atSeconds: 220,
              question: {
                id: "m5-l1-cp1-q",
                question: "Which foods does the presentation mention as a reminder of Samoa's \"land and ocean\" for Samoans living abroad?",
                options: [
                  "Taro, coconut, breadfruit and seafood",
                  "Rice, wheat and corn",
                  "Beef and pork",
                  "Potatoes and carrots",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m5-l1-cp2",
              atSeconds: 380,
              question: {
                id: "m5-l1-cp2-q",
                question: "According to the presentation, why were people in traditional Samoa strong, active and healthy?",
                options: [
                  "Because they ate natural food and lived active lives",
                  "Because most food was imported from abroad",
                  "Thanks to industrially processed food",
                  "Thanks to dietary supplements",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m5-l2", title: "5.2 Traditional crops (taro, coconut) and their role", content: "<p>Content for this lesson will be provided by partner NUS.</p>" },
      { id: "m5-l3", title: "5.3 Supporting healthy nutrition in agritourism", content: "<p>Content for this lesson will be provided by partner NUS.</p>" },
      { id: "m5-l4", title: "5.4 Connecting tradition with the tourism offer", content: "<p>Content for this lesson will be provided by partner NUS.</p>" },
      { id: "m5-l5", title: "5.5 Case studies from Samoa", content: "<p>Content for this lesson will be provided by partner NUS.</p>" },
      {
        id: "m5-l6",
        title: "5.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner NUS.</p>",
        quiz: {
          questions: [
            draftQuestion("m5-q1", "Which traditional crops are key to Samoan cuisine?"),
            draftQuestion("m5-q2", "How does agritourism support healthy nutrition in Samoa?"),
            draftQuestion("m5-q3", "How can food tradition be connected to the tourism offer?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m5-mat1", "photo-story", "Ifieleele plantation — farm-to-table in Samoa", "Real video — https://www.youtube.com/watch?v=W5eh77T9hA0"),
      draftMaterial("m5-mat2", "fact-sheet", "Fact sheet: glossary of traditional ingredients", "TBD from NUS"),
      draftMaterial("m5-mat3", "case-study", "Sunshine Farm in Samoa", "Real video — https://www.youtube.com/watch?v=Qekfu7mShEY"),
      draftMaterial("m5-mat4", "worksheet", "Worksheet: design a farm-to-table experience", "TBD from NUS"),
      draftMaterial("m5-mat5", "case-study", "Manusina beach fale (Samoa)", "Real video — https://www.youtube.com/watch?v=kgGya2P9e9s"),
    ],
    references: ["TBD — reference list to be provided by partner NUS"],
  },
  {
    id: "m6",
    title: "Module 6: Women's empowerment & leadership (FNU)",
    owner: "FNU",
    intro:
      "This module focuses on the role of women in agriculture and tourism in Fiji and the wider Pacific " +
      "region. Students will learn about the barriers women face, about models for supporting gender equality " +
      "and leadership, and about concrete examples of women leaders in agritourism. The module aims to show " +
      "how inclusive agritourism and leadership development in remote island communities contribute to " +
      "strengthening women's position in the sector.",
    lessons: [
      {
        id: "m6-l1",
        title: "6.1 The position of women in agriculture and tourism in Fiji",
        content:
          "<p>FNU's presentation introduces <strong>FRIEND Fiji</strong> (Foundation for Rural Integrated " +
          "Enterprises and Development) — an organisation that engages local farmers, particularly in Fiji's " +
          "western division, in sustainable value chains, including links with hotels and resorts in the " +
          "region. The presentation also addresses the role of women in this system and the question of " +
          "protecting traditional/indigenous food knowledge.</p>",
        video: {
          youtubeId: "pcUb2NwoyKM",
          checkpoints: [
            {
              id: "m6-l1-cp1",
              atSeconds: 308,
              question: {
                id: "m6-l1-cp1-q",
                question: "What does the acronym FRIEND (Friends Fiji), mentioned in the FNU presentation, stand for?",
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
                question: "According to the presentation, who does FRIEND Fiji engage on a larger scale, particularly in the western division?",
                options: [
                  "Many local farmers",
                  "Only foreign investors",
                  "Exclusively government institutions",
                  "Only university researchers",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m6-l2", title: "6.2 Barriers and opportunities for women leaders", content: "<p>Content for this lesson will be provided by partner FNU.</p>" },
      { id: "m6-l3", title: "6.3 Models for supporting gender equality in agritourism", content: "<p>Content for this lesson will be provided by partner FNU.</p>" },
      { id: "m6-l4", title: "6.4 Developing leadership skills in remote island communities", content: "<p>Content for this lesson will be provided by partner FNU.</p>" },
      { id: "m6-l5", title: "6.5 Case studies of women leaders in Fiji", content: "<p>Content for this lesson will be provided by partner FNU.</p>" },
      {
        id: "m6-l6",
        title: "6.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner FNU.</p>",
        quiz: {
          questions: [
            draftQuestion("m6-q1", "What barriers do women face in agriculture in Fiji?"),
            draftQuestion("m6-q2", "Which measures support gender equality in agritourism?"),
            draftQuestion("m6-q3", "What strengthens women's leadership in remote communities?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m6-mat1", "interview-video", "Interview with a woman leader in agritourism in Fiji", "TBD from FNU"),
      draftMaterial("m6-mat2", "case-study", "Case study of a business led by a woman", "TBD from FNU"),
      draftMaterial("m6-mat3", "checklist", "Checklist: inclusion barriers and how to address them", "TBD from FNU"),
      draftMaterial("m6-mat4", "case-study", "Fiji video — raw field footage (content to be verified/edited)", "Real video — https://www.youtube.com/watch?v=fAbDTA9P7ik"),
    ],
    references: ["TBD — reference list to be provided by partner FNU"],
  },
  {
    id: "m7",
    title: "Module 7: Micro agri-tourism in remote islands (USP)",
    owner: "USP",
    intro:
      "This module addresses micro agritourism on remote islands and how it differs from the mainland model. " +
      "Students will learn the principles of community tourism, preserving the uniqueness of Pacific Island " +
      "Countries' (PICs) culture, and building local hospitality partnerships. The module also addresses how " +
      "geographical remoteness is both a challenge and an opportunity — for example, for online access to " +
      "education from USP's remote campuses — and how these factors shape island community resilience.",
    lessons: [
      {
        id: "m7-l1",
        title: "7.1 The specifics of micro agritourism on remote islands",
        content:
          "<p>USP's presentation defines \"micro\" agritourism in the Pacific: since income from agriculture " +
          "alone is low, agritourism allows the agricultural sector to capture a share of tourism income. Key " +
          "characteristics: very small scale (typically farms under five acres, unlike in Australia, New " +
          "Zealand or the US), additional income for farmers, and a direct connection between producer and " +
          "consumer/visitor.</p>",
        video: {
          youtubeId: "nVsq7TijZIk",
          checkpoints: [
            {
              id: "m7-l1-cp1",
              atSeconds: 511,
              question: {
                id: "m7-l1-cp1-q",
                question: "According to the USP presentation, why is agritourism interesting for the agricultural sector?",
                options: [
                  "It lets the sector capture a share of the income generated by tourism",
                  "It fully replaces agriculture",
                  "It removes the need for any regulation",
                  "It has no connection to agriculture",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m7-l1-cp2",
              atSeconds: 684,
              question: {
                id: "m7-l1-cp2-q",
                question: "What is the typical size of a \"micro\" agritourism farm in the Pacific, according to the presentation?",
                options: [
                  "Usually under five acres (smaller than farms in Australia, New Zealand or the US)",
                  "Over 100 hectares",
                  "Exactly 50 acres",
                  "Size does not matter",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m7-l2", title: "7.2 Preserving the uniqueness of PICs culture", content: "<p>Content for this lesson will be provided by partner USP.</p>" },
      { id: "m7-l3", title: "7.3 Geographical remoteness as a challenge and an opportunity", content: "<p>Content for this lesson will be provided by partner USP.</p>" },
      { id: "m7-l4", title: "7.4 Access to online education from USP's remote campuses", content: "<p>Content for this lesson will be provided by partner USP.</p>" },
      { id: "m7-l5", title: "7.5 Case studies from the Pacific islands", content: "<p>Content for this lesson will be provided by partner USP.</p>" },
      {
        id: "m7-l6",
        title: "7.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner USP.</p>",
        quiz: {
          questions: [
            draftQuestion("m7-q1", "What distinguishes micro agritourism on remote islands from the mainland model?"),
            draftQuestion("m7-q2", "How does geographical remoteness affect access to education?"),
            draftQuestion("m7-q3", "Which elements of PICs culture does agritourism aim to preserve?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m7-mat1", "interview-video", "Interview: Espiritu Santo Resort (Vanuatu)", "Real video — https://www.youtube.com/watch?v=cgM8T80SqSA"),
      draftMaterial("m7-mat2", "photo-story", "Photo story from a USP island community", "TBD from USP"),
      draftMaterial("m7-mat3", "checklist", "Checklist: readiness to host visitors", "TBD from USP"),
      draftMaterial("m7-mat4", "interview-video", "Interview: Beachfront Resort (Vanuatu)", "Real video, no transcript — https://www.youtube.com/watch?v=sNTv6NraLYU"),
      draftMaterial("m7-mat5", "interview-video", "Interview: Smugglers Resort (Vanuatu)", "Real video, no transcript — https://www.youtube.com/watch?v=ijIRRKmNgms"),
    ],
    references: ["TBD — reference list to be provided by partner USP"],
  },
  {
    id: "m8",
    title: "Module 8: Environmental rights in remote Pacific islands (NUV)",
    owner: "NUV",
    intro:
      "This module addresses environmental rights and climate justice in remote Pacific Island Countries. " +
      "Students will learn about the legal framework for environmental protection in the region, questions of " +
      "natural resources, biodiversity, water and waste, and the role of community interests in environmental " +
      "decisions in agritourism. The module also draws on Vanuatu's initiative at the United Nations on " +
      "climate justice, and shows how the impacts of climate change directly affect agritourism in the region " +
      "and which green practices strengthen community resilience.",
    lessons: [
      {
        id: "m8-l1",
        title: "8.1 Environmental rights and climate justice in the Pacific",
        content:
          "<p>NUV's presentation (Department of Environmental Protection and Conservation, Vanuatu) " +
          "introduces environmental rights as enshrined in the constitution, the system of " +
          "\"customary custodianship\" — customary rights over land, sea and rivers that are inherited (not " +
          "bought or officially registered) — and an overview of active environmental-impact-assessment " +
          "projects in Vanuatu (e.g. the South Sanma Road, Pentecost hydro projects). It also covers the " +
          "network of community conservation areas across Vanuatu's provinces.</p>",
        video: {
          youtubeId: "-ANBP6ICZhY",
          checkpoints: [
            {
              id: "m8-l1-cp1",
              atSeconds: 402,
              question: {
                id: "m8-l1-cp1-q",
                question: "According to the NUV presentation, how does someone become a \"customary custodian\" of land, sea or rivers in Vanuatu?",
                options: [
                  "They inherit those privileges",
                  "They register at a government office",
                  "They pay a fee to the state",
                  "They complete a university course",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m8-l1-cp2",
              atSeconds: 777,
              question: {
                id: "m8-l1-cp2-q",
                question: "According to the presentation, where are community conservation areas found in Vanuatu?",
                options: [
                  "Across coastal/island areas and provinces from south to north",
                  "Only in the capital, Port Vila",
                  "Only on one specific island",
                  "Vanuatu does not yet have any",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
      },
      { id: "m8-l2", title: "8.2 Vanuatu and the UN resolution on climate justice", content: "<p>Content for this lesson will be provided by partner NUV.</p>" },
      { id: "m8-l3", title: "8.3 Climate change impacts on agritourism", content: "<p>Content for this lesson will be provided by partner NUV.</p>" },
      { id: "m8-l4", title: "8.4 The legal framework for environmental protection in the region", content: "<p>Content for this lesson will be provided by partner NUV.</p>" },
      { id: "m8-l5", title: "8.5 Green practices for resilient communities", content: "<p>Content for this lesson will be provided by partner NUV.</p>" },
      {
        id: "m8-l6",
        title: "8.6 Module summary and proficiency test",
        content: "<p>The module summary will be prepared by partner NUV.</p>",
        quiz: {
          questions: [
            draftQuestion("m8-q1", "What triggered the March 2023 UN resolution on climate justice?"),
            draftQuestion("m8-q2", "How does climate change threaten agritourism in the Pacific?"),
            draftQuestion("m8-q3", "Which green practices increase the resilience of island communities?"),
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m8-mat1", "fact-sheet", "Fact sheet: glossary of environmental rights and terms", "TBD from NUV"),
      draftMaterial("m8-mat2", "case-study", "Case study: Vanuatu and the UN resolution on climate justice", "TBD from NUV"),
      draftMaterial("m8-mat3", "checklist", "Checklist: environmental decision-making in agritourism", "TBD from NUV"),
      draftMaterial("m8-mat4", "infographic", "Infographic: climate change impacts on island communities", "TBD from NUV"),
    ],
    references: ["TBD — reference list to be provided by partner NUV"],
  },
];

export const course: Course = {
  title: "Agritourism applied in the Pacific",
  description:
    "Applied Green Deal and Farm to Fork — the AGRI-TOUR (Erasmus+ CBHE) project MOOC. 8 modules, 48 lessons, " +
    "480 minutes of video content, piloted at universities in Fiji, Samoa and Vanuatu.",
  modules,
};
