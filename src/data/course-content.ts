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

/** D3.2 Module 4 Scripts & Annexes, Section 2 — reused for both the glossary list and the matching game. */
const MODULE4_GLOSSARY: Array<{ term: string; definition: string }> = [
  { term: "Precision agriculture", definition: "Use of observation, data and technology to support better farm decisions. In the module, the focus is on practical, affordable and locally relevant use on micro-farms." },
  { term: "Micro-farm", definition: "A small farm with limited land, labour and financial resources, often closely connected with local customers, visitors and community life." },
  { term: "Farm monitoring", definition: "The regular observation or measurement of conditions on a farm, such as soil moisture, weather, crop condition or production activities." },
  { term: "Farm data", definition: "Information collected from observations, sensors, weather stations, digital records, maps or other farm-management tools and used to support decisions." },
  { term: "Data-driven decision-making", definition: "Making a farm-management decision on the basis of relevant observations and data instead of relying only on routine or assumptions." },
  { term: "Decision cycle", definition: "A five-step process used in the module: Measure, Understand, Act, Evaluate and Communicate." },
  { term: "Soil moisture sensor", definition: "A tool that helps farmers understand whether water is available in the soil and whether irrigation may be needed." },
  { term: "Weather station", definition: "A device or set of sensors that records local weather conditions such as temperature, rainfall, wind, humidity or solar radiation." },
  { term: "Soil and water management", definition: "Farm practices aimed at monitoring and managing soil and water resources efficiently, including decisions about when and how much to irrigate." },
  { term: "Smart irrigation", definition: "Irrigation supported by observation, sensors, rainfall information, schedules or timers so that water is used only when and where it is needed." },
  { term: "Digital farm diary", definition: "A simple digital record of planting, irrigation, fertilisation, pests, harvest, quality, weather and visitor feedback." },
  { term: "Drone imagery", definition: "Images or video taken from above to observe the farm, identify visible patterns and support communication or promotion." },
  { term: "QR code", definition: "A scannable code that connects a physical product or farm location with digital information, for example product origin, production methods or the farm story." },
  { term: "Smart agritourism", definition: "Agritourism that uses real farming practices and simple technologies as learning points for visitors." },
  { term: "Authenticity", definition: "The quality of keeping the farmer, land, product, culture and human story at the centre, while using technology only as support." },
  { term: "Climate resilience", definition: "The capacity of a farm to respond and adapt to conditions such as drought, heat, irregular rainfall and changing pest pressures." },
  { term: "Sustainability", definition: "In this module, the responsible management of resources and farming practices that can reduce water use, protect soil, improve input efficiency, reduce losses and strengthen resilience." },
];

/** D3.2 Module 1 Scripts & Annexes, Glossary of terms — reused for the glossary list and the matching game. */
const MODULE1_GLOSSARY: Array<{ term: string; definition: string }> = [
  { term: "Agritourism", definition: "A tourism activity connected with a farm or agricultural setting; discussed within multifunctional farming." },
  { term: "Multifunctional farming", definition: "Farming that combines production with additional services such as accommodation, food service, education, recreation or social activities." },
  { term: "Eco-gastronomy", definition: "A practical connection between food, territory, sustainability, local production and visitor experience." },
  { term: "Educational marketing", definition: "Communication that helps customers understand the value and characteristics of a product through useful learning." },
  { term: "Cognitive bias", definition: "A systematic tendency in decision-making associated with the use of mental shortcuts." },
  { term: "Limited rationality", definition: "The idea that decisions are made under limits of attention, working memory, information and calculation." },
  { term: "Reward circuit", definition: "Neural systems involved in pleasure, motivation and preference." },
  { term: "Framing", definition: "Presenting equivalent or similar information in different ways that can alter evaluation or choice." },
  { term: "Expectation", definition: "A prior belief about a product or experience that can influence attention and evaluation." },
  { term: "Sensory cue", definition: "A feature such as taste, smell, texture, appearance, sound or context that contributes to perception." },
  { term: "Geographical origin", definition: "The place associated with the production or identity of a food product." },
  { term: "Sustainable consumption", definition: "Food choice and use connected with local production, responsible resource use and reduced waste." },
];

function worksheetMaterialM1(id: string, title: string, fields: string[]): SupplementaryMaterial {
  return {
    id,
    type: "worksheet",
    title,
    note: "Real, fillable worksheet — D3.2 Module 1 Scripts & Annexes",
    worksheetFields: fields,
  };
}

const modules: Module[] = [
  {
    id: "m1",
    title: "Module 1: Neuroscience of Food (IVI)",
    owner: "IVI",
    intro:
      "Food choice is not determined by taste alone — it emerges from sensory information, reward, memory, " +
      "expectations and the social and commercial context in which food is encountered. This module, built " +
      "directly on IVI's official D3.2 scripts for Module 1, applies these principles to agritourism, " +
      "eco-gastronomy and sustainable food choices across six units: eco-gastronomy and sustainable food " +
      "systems; food, community and wellbeing; local food and educational marketing; food choice and cognitive " +
      "bias; sensory experience and food labels; and behaviour-change design. Six real case studies (a cheese " +
      "maker, a bread-reuse workshop, a territory-led restaurant, a wild-fermentation brewer and a chef) show " +
      "the same principles applied in practice.",
    lessons: [
      {
        id: "m1-l1",
        title: "1.1 Eco-gastronomy, agritourism and sustainable food systems",
        content:
          "<p><em>This unit's video does not yet have interactive checkpoint questions inside it — those will " +
          "be added once verified timestamps are available. For now it plays straight through, with a written " +
          "summary at the end.</em></p>" +
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain the relationship between agriculture, tourism and eco-gastronomy;</li>" +
          "<li>describe how local production can become part of a visitor experience;</li>" +
          "<li>identify the four food-system areas: production, processing/distribution, consumption, and " +
          "food-loss/waste prevention;</li>" +
          "<li>recognise practical agritourism activities that connect local food with education and " +
          "sustainability.</li>" +
          "</ul>" +
          "<h3>Eco-gastronomy as a bridge between agriculture and tourism</h3>" +
          "<p>The starting point is the relationship between the producer, the territory, the food product and " +
          "the visitor. Local ingredients are not simply inputs for a meal — they are part of the identity of a " +
          "place and can become the basis of an educational experience. Every territory should identify what is " +
          "genuinely local, seasonal and distinctive, rather than copying a generic tourism offer: available " +
          "biodiversity, fishing traditions, local crops and community knowledge can become the content of the " +
          "visitor experience.</p>" +
          "<h3>Farm to fork as a practical framework</h3>" +
          "<p>Sustainability is not a single action at the end of the chain — it can be considered at each " +
          "step:</p>" +
          "<ul>" +
          "<li><strong>Sustainable production</strong> — how food is grown, harvested or produced (farm visits, " +
          "seasonal harvesting, crop interpretation).</li>" +
          "<li><strong>Processing and distribution</strong> — how products are transformed, packaged and sold " +
          "(olive-oil processing demonstrations, bread workshops, direct sales).</li>" +
          "<li><strong>Sustainable consumption</strong> — how visitors choose and use food (tastings, menus " +
          "based on local products).</li>" +
          "<li><strong>Food-loss and waste prevention</strong> — how unused food or by-products can be reduced " +
          "or reused (workshops on traditional reuse, such as recipes using older bread).</li>" +
          "</ul>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m1-l1-mq1\"></div>" +
          "<h3>The educational function of agritourism</h3>" +
          "<p>A visitor can learn while walking through a farm, tasting food, observing processing or " +
          "participating in a recreational activity — education does not need a formal classroom session, the " +
          "experience itself can carry knowledge. Practical examples from the lectures include wild-herb and " +
          "ethnobotany activities, bread and baking workshops, farm-to-table cooking, fishing and coastal food " +
          "experiences, and food-waste learning through traditional reuse.</p>" +
          "<h3>Sustainability needs rules, skills and communication</h3>" +
          "<p>Sustainability claims should not be vague. A <strong>claim</strong> says a product is " +
          "sustainable; a <strong>demonstration</strong> shows the local origin, production practice, reduced " +
          "transport, seasonal use or waste-prevention method that supports the statement. A convincing " +
          "agritourism offer combines what the business does with what it can explain and demonstrate — and " +
          "the same logic transfers to island and remote contexts by starting from the local system: " +
          "producers, foods, traditions, landscapes and skills already in place.</p>" +
          "<h3>Applied learning activity</h3>" +
          "<p>Choose one real territory and design a short pathway that links production, processing, " +
          "consumption and waste prevention for one local product. (Worksheet 1.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Eco-gastronomy links food, territory, tourism and learning.</li>" +
          "<li>Local products can become both food and educational content.</li>" +
          "<li>Visitors can learn during ordinary tourism activities, not only in formal lessons.</li>" +
          "<li>Sustainable production, processing, consumption and waste prevention can all be built into an " +
          "agritourism experience.</li>" +
          "<li>Transfer to another region requires adaptation to local products, culture and regulations.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the main concept of this unit in my own words.</li>" +
          "<li>I can apply the concept to one local or island agritourism example.</li>" +
          "<li>I can distinguish observable practice from promotional claim.</li>" +
          "<li>I can identify one practical improvement to a food or visitor experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Which local ingredient in your region could become the focus of an agritourism activity, and " +
          "where in the food chain could visitors learn something usually invisible to them? Write a " +
          "150–200 word response applying the unit to one real or hypothetical setting.</p>",
        video: { youtubeId: "C_xXZOio-E0" },
        aiSummaryPrompt:
          "Answer: which local ingredient in your region could become the focus of an agritourism activity, " +
          "and where in the food chain (production, processing, consumption, or waste prevention) could " +
          "visitors learn something that is usually invisible to them? Write 150–200 words applying the unit " +
          "to one real or hypothetical agritourism or local-food setting.",
        microQuizzes: [
          {
            id: "m1-l1-mq1",
            question: "According to this unit, which four areas make up the eco-gastronomy food-system framework used in the lecture?",
            options: [
              "Sustainable production, processing & distribution, consumption, and food-loss & waste prevention",
              "Only farming and retail",
              "Marketing, finance, logistics and HR",
              "Only consumption and waste",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m1-l2",
        title: "1.2 Food, community and wellbeing: a systemic perspective",
        content:
          "<p><em>This unit's video does not yet have interactive checkpoint questions inside it — those will " +
          "be added once verified timestamps are available.</em></p>" +
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>describe the Roseto example as it is used in the lecture;</li>" +
          "<li>explain why the lecture moves from individual food choices to a systemic perspective;</li>" +
          "<li>identify individual, community, economic and policy influences on food and tourism behaviour;</li>" +
          "<li>apply a systemic map to an agritourism or local-food context.</li>" +
          "</ul>" +
          "<h3>Why food behaviour is more than nutrition: the Roseto case</h3>" +
          "<p>The lecture describes a community formed by migrants from Roseto Valfortore (southern Italy) to " +
          "Roseto, Pennsylvania, where researchers observed unusually low cardiovascular disease. Diet, " +
          "occupation, physical activity and alcohol consumption were considered and did not fully explain the " +
          "pattern — the lecture highlights social cohesion and family or community support as the distinctive " +
          "element. <strong>The case is conceptual and observational, not proof that social cohesion alone " +
          "causes better cardiovascular health</strong> — its role here is to show that a food or health " +
          "experience is embedded in social life, not only individual diet.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m1-l2-mq1\"></div>" +
          "<h3>From person to system</h3>" +
          "<p>The person makes choices, but those choices happen inside a community, shaped by local policy, " +
          "economic conditions and national or international trends:</p>" +
          "<ul>" +
          "<li><strong>Individual</strong> — what does the visitor know, value and prefer?</li>" +
          "<li><strong>Community</strong> — what norms and relationships influence behaviour (shared meals, " +
          "local hosts, family traditions)?</li>" +
          "<li><strong>Local economy and policy</strong> — what makes sustainable action easier or harder " +
          "(support for local producers, incentives, rules, infrastructure)?</li>" +
          "<li><strong>Wider system</strong> — which national or global forces shape choices (food prices, " +
          "tourism trends, supply chains)?</li>" +
          "</ul>" +
          "<h3>Agritourism as a social and educational space</h3>" +
          "<p>Because the visitor spends time in a production environment, the business can show how food is " +
          "produced and also create conditions for conversation, shared meals and contact with local people. " +
          "Small-group tastings, producer conversations and shared preparation tasks create opportunities for " +
          "learning through participation — though participation should remain invited rather than forced, " +
          "since some travellers prefer quieter or more private experiences.</p>" +
          "<h3>Applied learning activity</h3>" +
          "<p>Select one food-related visitor experience and map it across four circles: individual, " +
          "community, business/local economy and wider system. Identify at least two relationships between " +
          "levels and one practical change that would strengthen the experience. (Worksheet 2.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Food decisions occur inside social and economic systems.</li>" +
          "<li>Community relationships can be part of the meaning of a food experience.</li>" +
          "<li>Agritourism can combine food, nature, learning and social interaction.</li>" +
          "<li>Systemic analysis helps avoid reducing sustainable food behaviour to individual willpower alone.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the main concept of this unit in my own words.</li>" +
          "<li>I can apply the concept to one local or island agritourism example.</li>" +
          "<li>I can distinguish observable practice from promotional claim.</li>" +
          "<li>I can identify one practical improvement to a food or visitor experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Which community relationships would strengthen an agritourism experience in your region, and " +
          "which local policy or economic factor most affects sustainable food choices there? Write a " +
          "150–200 word response applying the unit to one real or hypothetical setting.</p>",
        video: {
          youtubeId: "vl6Gn6YODYw",
          checkpoints: [
            {
              id: "m1-l2-cp1",
              atSeconds: 620,
              rewindToSeconds: 522,
              question: {
                id: "m1-l2-cp1-q",
                question: "What did Dr. Stewart Wolf conclude was the real protective factor in Roseto, Pennsylvania — after ruling out diet, profession and alcohol consumption?",
                options: [
                  "Social cohesion and community support at the table",
                  "A unique local climate",
                  "Higher average income",
                  "Genetic differences between the two communities",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m1-l2-cp2",
              atSeconds: 828,
              rewindToSeconds: 711,
              question: {
                id: "m1-l2-cp2-q",
                question: "According to the systemic approach presented in this video, which levels — beyond the individual — shape food and tourism behaviour?",
                options: [
                  "Community, local economy/policy, and the wider national or global system",
                  "Only the weather and soil quality",
                  "Only government military policy",
                  "Only global stock markets",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
        aiSummaryPrompt:
          "Answer: which community relationships (families, local hosts, producers, traditions) would " +
          "strengthen an agritourism experience in your region, and which local policy or economic factor most " +
          "affects sustainable food choices there? Write 150–200 words applying the unit to one real or " +
          "hypothetical agritourism or local-food setting.",
        microQuizzes: [
          {
            id: "m1-l2-mq1",
            question: "What did researchers consider and set aside before highlighting social cohesion as the distinctive factor in the Roseto case?",
            options: [
              "Diet, occupation, physical activity and alcohol consumption",
              "The exact street layout of the town",
              "Only the average age of the population",
              "Nothing — social cohesion was the only explanation ever considered",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m1-l3",
        title: "1.3 Local food, haute cuisine and educational marketing",
        content:
          "<p><em>This unit's video does not yet have interactive checkpoint questions inside it — those will " +
          "be added once verified timestamps are available.</em></p>" +
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain the lecture's concept of local haute cuisine;</li>" +
          "<li>describe multifunctional farming and the role of additional agritourism services;</li>" +
          "<li>explain educational marketing in an agritourism context;</li>" +
          "<li>design a food experience that communicates why a local product is distinctive.</li>" +
          "</ul>" +
          "<h3>Rethinking luxury through locality</h3>" +
          "<p>Instead of defining luxury through rare imported ingredients, the lecture argues for an " +
          "experience built around sustainability, local territory and the creative use of local products. An " +
          "ingredient can be ordinary in its own region but unfamiliar to a visitor — the role of the food " +
          "professional is to reveal its qualities through preparation, presentation and explanation.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m1-l3-mq1\"></div>" +
          "<h3>Multifunctional farming</h3>" +
          "<p>Production remains the core activity, but a farm can add meals, accommodation, educational " +
          "activities, social agriculture, culture, recreation and sport. Producing a high-quality product and " +
          "creating a service around that product are different competences — an agritourism operator also " +
          "needs to host visitors, explain production, organise a tasting and connect the experience with the " +
          "place.</p>" +
          "<h3>Educational marketing and the usefulness × novelty matrix</h3>" +
          "<p>Educational marketing transfers useful knowledge that helps the customer understand the value of " +
          "the offer, before, during and after the visit. Information that is already known and not useful " +
          "rarely holds attention; information that is new but irrelevant has little value either. The " +
          "strongest educational content is both <strong>new to the visitor and useful</strong> — which " +
          "requires asking: what makes your product unique?</p>" +
          "<h3>Food as an educational medium</h3>" +
          "<p>The lecture's haute cuisine example serves Parmigiano Reggiano at different ages, textures and " +
          "temperatures — the dish itself communicates information through taste, texture and comparison. " +
          "Education does not always require a long explanation; a well-designed tasting can make differences " +
          "perceptible on its own.</p>" +
          "<h3>From storytelling to verifiable learning</h3>" +
          "<p>A credible narrative separates three layers: <strong>direct observation</strong> (what the " +
          "visitor can see, smell or taste), <strong>documented information</strong> (facts about origin, " +
          "production or certification) and <strong>interpretation</strong> (cultural meaning, memories or the " +
          "producer's own perspective). Keeping these distinct avoids turning interpretation into unsupported " +
          "fact — especially important once neuroscience or health claims enter food communication.</p>" +
          "<h3>Applied learning activity</h3>" +
          "<p>Choose one local product and prepare a two-minute educational-marketing script: one sentence on " +
          "why this product and not another, three pieces of information (at least two useful and novel), one " +
          "sensory prompt, and one practical takeaway. (Worksheet 3.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Local ingredients can support a high-quality gastronomic experience without relying on exotic " +
          "imports.</li>" +
          "<li>Multifunctional farming adds services around production.</li>" +
          "<li>Educational marketing helps visitors understand the value behind a product.</li>" +
          "<li>Useful and novel information is more likely to hold attention.</li>" +
          "<li>Sensory comparison can be an educational method in itself.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the main concept of this unit in my own words.</li>" +
          "<li>I can apply the concept to one local or island agritourism example.</li>" +
          "<li>I can distinguish observable practice from promotional claim.</li>" +
          "<li>I can identify one practical improvement to a food or visitor experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>What local product in your region has qualities visitors may not immediately notice, and what " +
          "information about it is likely to be both new and useful to a traveller? Write a 150–200 word " +
          "response applying the unit to one real or hypothetical setting.</p>",
        video: { youtubeId: "xBExtEmr6tY" },
        aiSummaryPrompt:
          "Answer: what local product in your region has qualities that visitors may not immediately notice, " +
          "and what information about that product is likely to be both new and useful to a traveller? Write " +
          "150–200 words applying the unit to one real or hypothetical agritourism or local-food setting.",
        microQuizzes: [
          {
            id: "m1-l3-mq1",
            question: "According to this unit, how does the lecture redefine \"luxury\" in local haute cuisine?",
            options: [
              "Luxury is built around local ingredients, biodiversity, seasonality and territorial identity rather than rare imports",
              "Luxury only means imported, rare ingredients",
              "Luxury means the most expensive menu possible",
              "Luxury has no place in local food tourism",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m1-l4",
        title: "1.4 Food choice, limited rationality and cognitive bias",
        content:
          "<p><em>This unit's video does not yet have interactive checkpoint questions inside it — those will " +
          "be added once verified timestamps are available.</em></p>" +
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain limited rationality in food decision-making;</li>" +
          "<li>define cognitive bias in the context used by the lecture;</li>" +
          "<li>identify common drivers of food choice discussed in the lecture;</li>" +
          "<li>analyse how price, taste and context can shape food decisions.</li>" +
          "</ul>" +
          "<h3>Food choice as a complex decision</h3>" +
          "<p>Food choice can involve many variables at once — price, taste, origin, safety, nutrition, " +
          "environmental impact, ethics, habit and prior experience. People cannot calculate every factor " +
          "simultaneously, so decisions get simplified.</p>" +
          "<h3>Limited rationality and mental shortcuts</h3>" +
          "<p>Drawing on Daniel Kahneman's behavioural decision research, people do not always act as fully " +
          "rational decision-makers — they rely on mental shortcuts that make decisions faster but can also " +
          "produce systematic errors (cognitive biases). A consumer may rely on an immediately available " +
          "signal, such as price, brand or a familiar label, rather than carefully evaluating every " +
          "characteristic — not because they are unintelligent, but because real decisions are made under " +
          "limits of time, attention and information.</p>" +
          "<h3>Drivers of food choice</h3>" +
          "<table><tr><th>Driver</th><th>Why it can be influential</th></tr>" +
          "<tr><td>Cost</td><td>Immediate and easy to compare.</td></tr>" +
          "<tr><td>Taste</td><td>Directly linked to liking and dislike.</td></tr>" +
          "<tr><td>Geographical origin</td><td>A simple cue about identity or expected quality.</td></tr>" +
          "<tr><td>Food safety</td><td>Important, but may require trust in systems or labels.</td></tr>" +
          "<tr><td>Nutrition</td><td>Often requires interpreting information.</td></tr>" +
          "<tr><td>Environmental / ethical factors</td><td>More abstract, requiring additional knowledge.</td></tr>" +
          "</table>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m1-l4-mq1\"></div>" +
          "<h3>Framing and responsible use</h3>" +
          "<p>Information about price, brand, wording or atmosphere creates expectations before tasting, which " +
          "then influence attention and evaluation. For an agritourism operator this cuts both ways: " +
          "presentation matters, and it should be used responsibly — to help visitors notice real qualities " +
          "that might otherwise remain invisible, not to disguise weaknesses or manipulate choice.</p>" +
          "<h3>Applied learning activity</h3>" +
          "<p>Take a real or hypothetical menu of at least six items. For each, note the most visible decision " +
          "cue, then rewrite two descriptions (one emphasising origin, one emphasising taste) without changing " +
          "the underlying product. (Worksheet 4.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Food decisions are made under limits of attention, memory and information.</li>" +
          "<li>Mental shortcuts can shape choices.</li>" +
          "<li>Price, taste, brand, wording and context can influence perception.</li>" +
          "<li>Sustainable food communication is stronger when complex information is made understandable.</li>" +
          "<li>Responsible design helps visitors notice real qualities rather than simply increasing " +
          "persuasion.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the main concept of this unit in my own words.</li>" +
          "<li>I can apply the concept to one local or island agritourism example.</li>" +
          "<li>I can distinguish observable practice from promotional claim.</li>" +
          "<li>I can identify one practical improvement to a food or visitor experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Which cue do customers in your context use first — price, taste, origin or brand — and which " +
          "sustainability information is currently too complex for visitors? Write a 150–200 word response " +
          "applying the unit to one real or hypothetical setting.</p>",
        video: { youtubeId: "5vL3Ef8jjZE" },
        aiSummaryPrompt:
          "Answer: which cue do customers in your context use first when deciding what to eat (price, taste, " +
          "origin, brand, or something else), and which sustainability information is currently too complex " +
          "for visitors to understand? Write 150–200 words applying the unit to one real or hypothetical " +
          "agritourism or local-food setting.",
        microQuizzes: [
          {
            id: "m1-l4-mq1",
            question: "According to this unit, which two factors does the lecture describe as the most immediate and easy-to-process drivers of food choice?",
            options: [
              "Cost and taste",
              "Environmental impact and ethics",
              "Nutrition and geographical origin",
              "Food safety and ethics",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m1-l5",
        title: "1.5 Sensory experience, reward, expectations and food labels",
        content:
          "<p><em>This unit's video does not yet have interactive checkpoint questions inside it — those will " +
          "be added once verified timestamps are available.</em></p>" +
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>describe the role of reward and sensory cues in the lecture's model of food choice;</li>" +
          "<li>explain how expectations can alter food evaluation;</li>" +
          "<li>identify ways labels, words, images and atmosphere can direct attention;</li>" +
          "<li>design a sensory activity that supports learning rather than distraction.</li>" +
          "</ul>" +
          "<h3>Sensory experience and the reward system</h3>" +
          "<p>Eating is fundamentally multisensory — taste, smell, texture, appearance, expectation and " +
          "context all contribute to how food is experienced. Sustainable or traditional foods do not " +
          "automatically become attractive simply because they are local or healthy; visitors may need an " +
          "experience that helps them discover flavour, preparation methods and meaning.</p>" +
          "<h3>Expectations before tasting</h3>" +
          "<p>Expectations are created by price information, brand, descriptions, prior reputation, visual " +
          "presentation and the surrounding environment — the same sensory stimulus can be judged differently " +
          "once expectations change. For educational design, this means the introduction to a tasting is part " +
          "of the tasting.</p>" +
          "<h3>Music, atmosphere and attention</h3>" +
          "<p>Atmosphere can support an experience, but strong or distracting stimuli can pull attention away " +
          "from the food itself. If the educational objective is careful tasting, the visitor needs enough " +
          "attentional space to notice aroma, texture, flavour and differences between samples.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m1-l5-mq1\"></div>" +
          "<h3>Labels and learned meaning</h3>" +
          "<p>Nutritional, organic and fair-trade labels are signals that can shape choices — but a label is " +
          "not automatically meaningful. Its effect depends on whether the consumer recognises it and " +
          "understands the value it represents, which is why labels need to be connected with education, not " +
          "just displayed.</p>" +
          "<table><tr><th>Cue</th><th>Possible benefit</th><th>Risk if poorly used</th></tr>" +
          "<tr><td>Menu wording</td><td>Directs attention to sensory or local qualities.</td><td>Vague or exaggerated claims.</td></tr>" +
          "<tr><td>Images</td><td>Creates expectation and recognition.</td><td>Image does not match the real product.</td></tr>" +
          "<tr><td>Music / atmosphere</td><td>Supports place identity and mood.</td><td>Distracts from the tasting.</td></tr>" +
          "<tr><td>Labels / logos</td><td>Condenses information into a visible cue.</td><td>Visitors do not understand what it means.</td></tr>" +
          "</table>" +
          "<h3>Applied learning activity</h3>" +
          "<p>Select one local product offered in two versions (two varieties, production methods, or ageing " +
          "stages). Let participants observe first, then add a short explanation, then taste again and discuss " +
          "what changed. (Worksheet 5.)</p>" +
          "<h3>Key takeaways</h3>" +
          "<ul>" +
          "<li>Food perception combines sensory input with expectation and context.</li>" +
          "<li>Atmosphere can support learning but can also distract attention.</li>" +
          "<li>Words, images and labels shape expectations before tasting.</li>" +
          "<li>Labels work best when consumers understand what they represent.</li>" +
          "<li>A sensory activity should help visitors notice genuine differences.</li>" +
          "</ul>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the main concept of this unit in my own words.</li>" +
          "<li>I can apply the concept to one local or island agritourism example.</li>" +
          "<li>I can distinguish observable practice from promotional claim.</li>" +
          "<li>I can identify one practical improvement to a food or visitor experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>What sensory quality of a local product is difficult to communicate in text alone, and which " +
          "label or certification used in your region needs more explanation for visitors? Write a 150–200 " +
          "word response applying the unit to one real or hypothetical setting.</p>",
        video: { youtubeId: "jYoltS98cCo" },
        aiSummaryPrompt:
          "Answer: what sensory quality of a local product is difficult to communicate in text alone, and " +
          "which label or certification used in your region needs more explanation for visitors before it " +
          "becomes meaningful to them? Write 150–200 words applying the unit to one real or hypothetical " +
          "agritourism or local-food setting.",
        microQuizzes: [
          {
            id: "m1-l5-mq1",
            question: "What does this unit say about background music and atmosphere during a tasting?",
            options: [
              "It can support the experience but should not dominate or distract attention from the food",
              "It should always be as loud as possible to energise guests",
              "It has no effect on tasting at all",
              "It should replace any explanation of the product",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m1-l6",
        title: "1.6 Behaviour change, practical design and proficiency test",
        content:
          "<h3>From knowledge to action</h3>" +
          "<p>Sustainable food behaviour is not produced by information alone — people choose under limits of " +
          "attention, habit, expectations and immediate reward. Behaviour-change design in this module means " +
          "creating conditions in which the sustainable option is <strong>understandable, visible, meaningful " +
          "and easy to experience</strong>.</p>" +
          "<h3>Five design principles</h3>" +
          "<ul>" +
          "<li><strong>Make the local option visible</strong> — show where food comes from, who produces it " +
          "and how it is prepared.</li>" +
          "<li><strong>Make learning experiential</strong> — use tasting, harvesting, cooking, observation or " +
          "comparison rather than explanation alone.</li>" +
          "<li><strong>Use useful and novel information</strong> — prioritise what the visitor can apply or " +
          "remember.</li>" +
          "<li><strong>Connect immediate experience with wider meaning</strong> — link taste and enjoyment " +
          "with origin, sustainability, community or seasonality.</li>" +
          "<li><strong>Extend learning beyond the visit</strong> — provide a takeaway, recipe, product, " +
          "checklist or practical technique.</li>" +
          "</ul>" +
          "<h3>Behaviour change without manipulation</h3>" +
          "<p>A responsible intervention follows four rules: the information is accurate; the visitor retains " +
          "choice; the intended benefit is clear; and the intervention can be explained openly. Placing a " +
          "local seasonal dish more visibly on a menu is an educational nudge if the menu states clearly what " +
          "the dish is and why it is seasonal — presenting an imported product as local would be deceptive " +
          "regardless of how effective the framing is.</p>" +
          "<h3>Applied learning activity: behaviour-change mini project</h3>" +
          "<p>Design a 30-minute educational food experience for a farm or agritourism site using one local " +
          "ingredient and one sustainable behaviour as the focus — target visitor, learning objective, " +
          "activity sequence, three key messages, one behaviour-change prompt, one take-home element, and one " +
          "immediate evaluation question such as \"What was new?\" (Worksheet 6.)</p>" +
          "<h3>Module summary</h3>" +
          "<p>Across the module: the brain's reward circuit and limited rationality shape food choices by " +
          "default (Units 1 and 4); food behaviour is embedded in social systems, not just individual diet " +
          "(Unit 2); local ingredients can carry high-quality distinction through educational marketing (Unit " +
          "3); sensory perception is actively constructed by expectation, atmosphere and labels (Unit 5); and " +
          "all of this can be translated into concrete, responsible behaviour-change design for agritourism " +
          "visitors (Unit 6). The six real case studies below (a cheese maker, a bread-reuse workshop, Roseto, " +
          "a territory-led restaurant, a wild-fermentation brewer and a chef) show the same ideas in " +
          "practice.</p>",
        quiz: {
          questions: [
            {
              id: "m1-q1",
              question: "Which statement best describes eco-gastronomy in the module?",
              options: [
                "A cooking style based only on imported luxury ingredients",
                "A connection between food, territory, sustainability, local production and visitor experience",
                "A method for increasing portion size",
                "A system used only for restaurant accounting",
              ],
              correctIndex: 1,
            },
            {
              id: "m1-q2",
              question: "In the lecture, multifunctional farming means:",
              options: [
                "A farm grows only one crop",
                "A farm replaces production with tourism",
                "A farm combines production with additional services or activities",
                "A hotel buys food from a farm",
              ],
              correctIndex: 2,
            },
            {
              id: "m1-q3",
              question: "What is the main purpose of educational marketing in the module?",
              options: [
                "To hide technical information from consumers",
                "To educate customers about the value of the offer",
                "To reduce all communication to price",
                "To use only social media advertising",
              ],
              correctIndex: 1,
            },
            {
              id: "m1-q4",
              question: "According to the module, why do people use mental shortcuts in food decisions?",
              options: [
                "Because every food decision is unimportant",
                "Because attention, memory and calculation are limited",
                "Because labels are illegal",
                "Because taste has no influence",
              ],
              correctIndex: 1,
            },
            {
              id: "m1-q5",
              question: "Which information is most likely to support attention in the usefulness-novelty matrix?",
              options: [
                "Information that is both useful and new to the visitor",
                "Information that is known and not useful",
                "Information that is long and technical",
                "Information unrelated to the product",
              ],
              correctIndex: 0,
            },
            {
              id: "m1-q6",
              question: "What does the module mean by framing?",
              options: [
                "Putting food in a physical picture frame",
                "Changing the farm building",
                "Presenting information in a way that can influence evaluation or choice",
                "Removing all information from a tasting",
              ],
              correctIndex: 2,
            },
            {
              id: "m1-q7",
              question: "Why can labels require education?",
              options: [
                "A logo may have little meaning if consumers do not understand what it represents",
                "Labels always make food taste better",
                "Labels replace production standards",
                "Consumers never look at packages",
              ],
              correctIndex: 0,
            },
            {
              id: "m1-q8",
              question: "What is a recommended principle for a sensory tasting?",
              options: [
                "Use as many distractions as possible",
                "Let participants observe sensory qualities before giving a long explanation",
                "Avoid local products",
                "Explain everything before the food is visible",
              ],
              correctIndex: 1,
            },
            {
              id: "m1-q9",
              question: "Which element is part of the systemic perspective used in the module?",
              options: [
                "Only individual preference",
                "Individual, community, economic and policy influences",
                "Only national law",
                "Only food chemistry",
              ],
              correctIndex: 1,
            },
            {
              id: "m1-q10",
              question: "What is the final purpose of the behaviour-change design exercise?",
              options: [
                "To create vague sustainability messages",
                "To make local and sustainable choices understandable, visible and practical",
                "To eliminate visitor participation",
                "To replace food experiences with lectures",
              ],
              correctIndex: 1,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      {
        id: "m1-mat1",
        type: "fact-sheet",
        title: "Module glossary",
        note: "Real content — D3.2 Module 1 Scripts & Annexes",
        body:
          "<dl>" +
          MODULE1_GLOSSARY.map(({ term, definition }) => `<dt>${term}</dt><dd>${definition}</dd>`).join("") +
          "</dl>",
        glossaryGame: MODULE1_GLOSSARY,
      },
      worksheetMaterialM1("m1-mat2", "Worksheet 1 – Build a Local Eco-Gastronomy Pathway", [
        "Local product and its season",
        "Producer or type of producer",
        "Production stage the visitor can observe",
        "Stage where the product changes form (transformation)",
        "One tasting or practical action",
        "Sustainability message to demonstrate",
        "Visitor journey — before / during / after the visit",
      ]),
      worksheetMaterialM1("m1-mat3", "Worksheet 2 – Map the Social System Around a Food Experience", [
        "Individual — visitor's motivations, prior knowledge, preferences, barriers",
        "Community — families, producers, guides or traditions involved",
        "Business / local economy — services, prices, supply, partnerships",
        "Wider system — regulations, transport, tourism trends, supply chains",
        "Desired outcome of the experience",
        "One practical system change that would strengthen it",
      ]),
      worksheetMaterialM1("m1-mat4", "Worksheet 3 – Create an Educational Marketing Script", [
        "Local product chosen",
        "Why this product and not another?",
        "Two pieces of information that are useful AND new to the visitor",
        "One sensory prompt (aroma, texture, flavour, appearance)",
        "Sentence connecting the product with producer or territory",
        "Practical takeaway for the visitor",
      ]),
      worksheetMaterialM1("m1-mat5", "Worksheet 4 – Identify Decision Shortcuts in a Menu", [
        "Menu items and their most visible decision cue (price, brand, origin, image…)",
        "Rewritten description #1 — emphasising origin",
        "Rewritten description #2 — emphasising taste or preparation",
        "One item whose sustainability/nutrition info is hard to understand — simplified version",
        "Which mental shortcut most influences visitors here, and how to respond responsibly",
      ]),
      worksheetMaterialM1("m1-mat6", "Worksheet 5 – Design a Controlled Sensory Comparison", [
        "Local product and its two versions (variety, method, or ageing stage)",
        "The one difference you want participants to notice",
        "First-impression notes (appearance, aroma, texture, taste) — before explanation",
        "Short explanation given (origin, production, preparation)",
        "Second-observation notes — after explanation",
        "Learning point to close the activity",
      ]),
      worksheetMaterialM1("m1-mat7", "Worksheet 6 – Behaviour-Change Mini Project", [
        "Title of the experience",
        "Local ingredient or product",
        "Target visitor group",
        "Learning objective",
        "Activity sequence (attention → experience → explanation → reflection → transfer)",
        "Three key messages (no more)",
        "Behaviour-change target (observable action)",
        "Take-home element",
        "Immediate evaluation question",
      ]),
      {
        id: "m1-mat8",
        type: "case-study",
        title: "Caciocavallo and transhumance — Luca Pallotta (Alto Molise)",
        note: "Real interview — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=YUVjLOUFzkM",
        body:
          "<p>Luca Pallotta presents Azienda Agricola Pallotta and Caseificio Pallotta, a farm and dairy in a " +
          "high-altitude area of the central Apennines. The animals are Brown-breed cattle that graze, and the " +
          "farm produces its own cereals and forage. The interview connects Caciocavallo with transhumance — " +
          "the seasonal movement of livestock recognised by UNESCO as living cultural heritage — and with how " +
          "the cheese was traditionally transported and hung for ageing. Among the products presented is " +
          "\"Macchione\", a handmade 20 kg Caciocavallo aged 15 months, alongside Morbidone and Stracciata. The " +
          "visitor receives more than a cheese sample: the product is connected with animals, grazing, " +
          "farm-produced feed, place, ageing and a story about local tradition.</p>" +
          "<p><strong>Student task:</strong> map the product story from farm inputs to the final cheese; " +
          "design a comparison tasting using two of the products mentioned; identify which historical or " +
          "technical claims in the interview would need independent verification before being presented as " +
          "general fact.</p>",
      },
      {
        id: "m1-mat9",
        type: "case-study",
        title: "Pancotto: traditional bread reuse — chef Domenico Cilenti",
        note: "Real workshop — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=V61yP1lzzjI",
        body:
          "<p>Pancotto and related bread-based preparations are traditional ways of using bread that was no " +
          "longer fresh — rather than discarding it, communities used it in pancotto, acquasale, bruschetta, " +
          "frisella or vegetable fillings. The workshop uses seasonal vegetables (broccoli, turnip tops, " +
          "potatoes, cabbage) and dried products such as Fave di Carpino when fresh produce is unavailable. " +
          "Different parts of the bread get different uses — harder crusts for pancotto, softer crumb for " +
          "fillings — and the activity is collaborative: participants prepare ingredients and combine them in " +
          "the final dish.</p>" +
          "<p><strong>Student task:</strong> list the ways the recipe changes by season; describe how the " +
          "workshop teaches through doing rather than explanation; design a similar food-reuse workshop using " +
          "a traditional ingredient from your own region.</p>",
      },
      {
        id: "m1-mat10",
        type: "case-study",
        title: "Roseto, Pennsylvania — food, social context and wellbeing",
        note: "Real content — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=jYoltS98cCo (related to Roseto)",
        body:
          "<p>Roseto, Pennsylvania was founded by migrants from Roseto Valfortore in southern Italy. " +
          "Researchers observed unusually low cardiovascular disease there; diet, occupation, physical " +
          "activity and alcohol did not fully explain the pattern, and the lecture highlights social cohesion " +
          "and community support as the distinctive factor discussed. A later 50-year mortality comparison " +
          "found Roseto's early advantage diminished as the community's traditional social structure changed " +
          "(Egolf et al., 1992) — a reminder that the case is observational, not proof that social cohesion " +
          "alone causes better health.</p>" +
          "<p><strong>Student task:</strong> list the individual-level and the community-level explanations " +
          "considered; explain in 150 words how this case changes how you would design a food or agritourism " +
          "experience; identify one limitation of using a historical case to design a modern intervention.</p>",
      },
      {
        id: "m1-mat11",
        type: "case-study",
        title: "Locanda Mammì — territory, memory and waste reduction (Agnone, Alto Molise)",
        note: "Real interview — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=-i173REqCcM",
        body:
          "<p>Stefania Di Pasquo explains that Locanda Mammì began in her grandmother's country house and " +
          "grew to represent the local territory ever more closely — the menu follows seasonality and a small " +
          "vegetable garden. Concrete waste-reduction examples include potato peels used for broth, carrot " +
          "peels as a crunchy component, and using different parts of an animal rather than only selected " +
          "cuts. Dishes link food with memory and local history — one dessert is a reinterpretation of a " +
          "farmer's breakfast using bread, wine and Caciocavallo.</p>" +
          "<p><strong>Student task:</strong> identify five elements the restaurant uses to communicate the " +
          "territory's identity; give three examples of waste reduction through culinary use; design one short " +
          "educational activity for visitors using a product or practice from the case.</p>",
      },
      {
        id: "m1-mat12",
        type: "case-study",
        title: "Istrian Wild Ale \"Karega\" — spontaneous fermentation (Aleš Marušič, 22Brewing)",
        note: "Real interview — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=SIk8RpJ6hFE",
        body:
          "<p>22Brewing, in Slovenian Istria, experiments with older and more unusual brewing approaches using " +
          "ingredients from the surrounding environment: nearby juniper, local water, a small quantity of " +
          "locally collected hops, spontaneous yeast, and long maturation in previously used wooden barrels. " +
          "The resulting beer, Karega, is described as sweet, acidic and herbal, and many of the brewery's " +
          "beers rest for at least a year. Spontaneous fermentation is more complex than \"yeast from the air\" " +
          "— it involves successions of yeast and bacterial species and lower predictability than controlled " +
          "fermentation — and \"local\" is a related but distinct idea from \"terroir\".</p>" +
          "<p><strong>Student task:</strong> identify the elements connecting the beer with its territory; " +
          "list the sensory terms used and how they could shape visitor expectations before tasting; design a " +
          "short educational tasting using this beer, including one sensory prompt and one production fact.</p>",
      },
      {
        id: "m1-mat13",
        type: "case-study",
        title: "Menu design, seasonality and expectations — chef Giuseppe Di Iorio",
        note: "Real interview — D3.2 Module 1 Case Studies — https://www.youtube.com/watch?v=JPPdwgpxQ9w",
        body:
          "<p>Giuseppe Di Iorio places seasonality first when designing a menu — seasonal products are at " +
          "their best and support cost control — while adapting to customer needs such as lactose-free, vegan " +
          "and vegetarian options. Since the COVID period he pays closer attention to food waste and portion " +
          "control, treating the kitchen scale as a tool for respecting resources. On expectations, he notes " +
          "that customers often check a restaurant's website or menu before arriving, so menu wording should " +
          "be simple and tell the customer clearly what is in the dish — smell, taste, cleanliness, welcome " +
          "and presentation all shape the experience before the first bite.</p>" +
          "<p><strong>Student task:</strong> map a visitor journey in three stages (before arrival, " +
          "arrival/service, tasting) and place the relevant expectations and cues in each; write a short, " +
          "accurate menu description for one dish following Di Iorio's principles.</p>",
      },
    ],
    references: [
      "D3.2 — Scripts, audioguides and educational materials: Module 1, Neurosciences of Food (Igor Vitale International srl / IVI)",
      "D3.2 Module 1 — Proficiency Test (Igor Vitale International srl / IVI)",
      "Spence, C. (2015). Multisensory flavor perception. Cell, 161(1), 24–35",
      "Motoki, K. & Suzuki, S. (2020). Reprint of: Toward a deeper understanding of the sensory and psychological factors that influence food choice",
      "Hare, T.A., Camerer, C.F. & Rangel, A. (2009). Self-control in decision-making involves modulation of the vmPFC valuation system. Science, 324(5927), 646–648",
      "Plassmann, H., O'Doherty, J., Shiv, B. & Rangel, A. (2008). Marketing actions can modulate neural representations of experienced pleasantness. PNAS, 105(3), 1050–1054",
      "Egolf, B., Lasker, J., Wolf, S. & Potvin, L. (1992). The Roseto effect: a 50-year comparison of mortality rates. American Journal of Public Health, 82(8), 1089–1092",
      "Holt-Lunstad, J., Smith, T.B. & Layton, J.B. (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine, 7(7), e1000316",
      "UNESCO (2023). Transhumance, the seasonal droving of livestock — Representative List of the Intangible Cultural Heritage of Humanity",
      "Sims, R. (2009). Food, place and authenticity: local food and the sustainable tourism experience. Journal of Sustainable Tourism, 17(3), 321–336",
      "Papargyropoulou, E. et al. (2014). The food waste hierarchy as a framework for the management of food surplus and food waste. Journal of Cleaner Production, 76, 106–115",
    ],
  },  {
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
              atSeconds: 760,
              rewindToSeconds: 634,
              question: {
                id: "m4-l1-cp2-q",
                question: "What does the presentation say must happen before adopting any new farm technology?",
                options: [
                  "The technology must fit the farm's real, locally relevant needs — not the other way around",
                  "The farm must first buy the newest and most advanced equipment available",
                  "The farm must already have fast, reliable internet everywhere",
                  "The farm must copy exactly what large European cereal farms do",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp3",
              atSeconds: 1065,
              rewindToSeconds: 1025,
              question: {
                id: "m4-l1-cp3-q",
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
            {
              id: "m4-l1-cp4",
              atSeconds: 2060,
              rewindToSeconds: 1946,
              question: {
                id: "m4-l1-cp4-q",
                question: "According to the presentation, what is the first step in using precision agriculture to enrich agritourism?",
                options: [
                  "Make sustainability visible to visitors",
                  "Install the most advanced sensors available",
                  "Reduce the number of farm visitors",
                  "Hide technical details from visitors",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp5",
              atSeconds: 2560,
              rewindToSeconds: 2506,
              question: {
                id: "m4-l1-cp5-q",
                question: "In the presenter's research, what do small and family farmers say is the main barrier to precision agriculture?",
                options: [
                  "High investment costs",
                  "Too much free time",
                  "Excessive government support",
                  "Lack of interest from tourists",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp6",
              atSeconds: 2670,
              rewindToSeconds: 2617,
              question: {
                id: "m4-l1-cp6-q",
                question: "Which risk, specific to drones, does the presentation mention?",
                options: [
                  "Safety, privacy rules and certification/licensing requirements",
                  "Drones cannot be used on any kind of farm",
                  "Drones remove the need for any farmer knowledge",
                  "Drones are illegal everywhere in Europe",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m4-l1-cp7",
              atSeconds: 3310,
              rewindToSeconds: 3257,
              question: {
                id: "m4-l1-cp7-q",
                question: "What is presented as the final key message of the lecture?",
                options: [
                  "Precision agriculture is not only for large farms — it matters for micro-farms too, if used wisely",
                  "Micro-farms should avoid any new technology",
                  "Agritourism has no real connection to precision agriculture",
                  "Only fully automated farms can benefit from data",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
        aiSummaryPrompt:
          "Write a short summary (100–150 words) of this lesson: what precision agriculture means for a " +
          "micro-farm, and one way it could realistically help a small farm you know (real or imagined).",
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
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m4-l2-mq1\"></div>" +
          "<h3>5. Communicate</h3>" +
          "<p>For agritourism, communication is part of the system. The same information that supports farm " +
          "management can also become a story for visitors: how the farm saves water, protects soil, monitors " +
          "crops or learns from previous seasons.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m4-l2-mq2\"></div>" +
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
        aiSummaryPrompt:
          "Summarize the five-step decision cycle from this lesson (Measure, Understand, Act, Evaluate, " +
          "Communicate), and briefly describe how you'd apply it to one real decision on a small farm — e.g. " +
          "irrigation, fertilising, or planning a visitor route.",
        microQuizzes: [
          {
            id: "m4-l2-mq1",
            question: "According to the decision cycle in this lesson, what is the purpose of the \"Evaluate\" step?",
            options: [
              "To check whether the action actually worked, turning the decision into learning for next season",
              "To collect the first round of raw data from the field",
              "To decide what action to take before any data is collected",
              "To replace the need for communication with visitors",
            ],
            correctIndex: 0,
          },
          {
            id: "m4-l2-mq2",
            question: "In the decision cycle, what does the \"Communicate\" step specifically add, according to this lesson?",
            options: [
              "It turns farm information into a story that visitors can also learn from",
              "It is only used internally and never shared with visitors",
              "It happens before any data is measured",
              "It replaces the need to evaluate whether an action worked",
            ],
            correctIndex: 0,
          },
        ],
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
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m4-l3-mq1\"></div>" +
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
        aiSummaryPrompt:
          "Summarize the key points about water and smart irrigation from this lesson, and briefly explain " +
          "when you would — and wouldn't — irrigate a small farm, based on evidence rather than guesswork.",
        microQuizzes: [
          {
            id: "m4-l3-mq1",
            question: "Why can the soil surface be misleading when deciding whether to irrigate, according to this lesson?",
            options: [
              "The surface may look dry while deeper soil layers still hold water",
              "Soil colour always indicates its nutrient level",
              "Surface appearance has no connection to irrigation decisions at all",
              "A dry-looking surface always means the crop needs no water whatsoever",
            ],
            correctIndex: 0,
          },
        ],
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
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m4-l4-mq1\"></div>" +
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
        aiSummaryPrompt:
          "Summarize what drones can — and cannot — tell a farmer about their fields, and describe one way " +
          "drone imagery could be used both for farm management and for a visitor tour.",
        microQuizzes: [
          {
            id: "m4-l4-mq1",
            question: "Besides farm monitoring, what else does this lesson say drone imagery can support?",
            options: [
              "Visitor storytelling — showing the farm's beauty, layout and routes",
              "Automatically eliminating pests",
              "Replacing the farmer's relationship with visitors",
              "Avoiding all safety and privacy rules",
            ],
            correctIndex: 0,
          },
        ],
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
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m4-l5-mq1\"></div>" +
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
        aiSummaryPrompt:
          "Summarize the step-by-step model (problem – tool – test – benefit – story) and the main risks of " +
          "adopting new technology on a micro-farm, then describe how you'd introduce one precision-agriculture " +
          "tool without losing the farm's authenticity.",
        microQuizzes: [
          {
            id: "m4-l5-mq1",
            question: "Which of these is listed in this lesson as a real risk of adopting new farm technology?",
            options: [
              "Adopting technology without a clear purpose",
              "Having too much authenticity",
              "Too much interaction between farmers and visitors",
              "Owning too few digital tools",
            ],
            correctIndex: 0,
          },
        ],
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
          MODULE4_GLOSSARY.map(({ term, definition }) => `<dt>${term}</dt><dd>${definition}</dd>`).join("") +
          "</dl>",
        glossaryGame: MODULE4_GLOSSARY,
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
