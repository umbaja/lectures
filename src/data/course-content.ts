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
 * Note: M2's owner is UCSC (Università Cattolica del Sacro Cuore, also
 * abbreviated "UNICATT" in the D3.2 guidelines table), confirmed by the
 * project team. An earlier version wrongly listed it as UNISG.
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

/** D3.2 Module 3 Scripts & Annexes, Glossary of terms — reused for the glossary list and the matching game. */
const MODULE3_GLOSSARY: Array<{ term: string; definition: string }> = [
  { term: "Agritourism 2.0", definition: "A presentation concept that connects agriculture, tourism and experience/education so that visitors move from only watching to actively doing, learning and sharing." },
  { term: "Authentic experience", definition: "A visitor experience rooted in real local products, people, knowledge, traditions and everyday rural life." },
  { term: "Kastom", definition: "The term used in the presentation for local customary knowledge, stories, practices and cultural traditions that can form part of an agritourism experience." },
  { term: "Product – Culture – People", definition: "The three-pillar framework used in the presentation: a local product, the cultural story around it and the people who host and interpret the experience." },
  { term: "Value-added product", definition: "A farm or local product that gains additional value through processing, presentation, experience, branding or direct sale." },
  { term: "Living museum", definition: "A rural heritage concept where buildings, collections, activities and people are used to interpret culture as a living visitor experience." },
  { term: "Social hub", definition: "A small community place where local people and visitors can meet, exchange information and connect with regional products or services." },
  { term: "Digital footprint", definition: "The visible online presence of a place or business through maps, reviews, social media and tourism platforms." },
  { term: "Pocket marketing", definition: "The presentation term for low-barrier marketing through mobile-first channels such as social media, reviews and online discovery platforms." },
  { term: "Nambawan Experience Challenge", definition: "The workshop format in the presentation that asks learners to design a memorable island experience around a hook, a hands-on action, a Kastom element and a takeaway." },
];

function worksheetMaterialM3(id: string, title: string, fields: string[]): SupplementaryMaterial {
  return {
    id,
    type: "worksheet",
    title,
    note: "Real, fillable worksheet — D3.2 Module 3 Worksheets",
    worksheetFields: fields,
  };
}

/** Glossary from the NUS Module 5 document ("Samoan Culture of Food — Farm to table", Glossary). */
const MODULE5_GLOSSARY: Array<{ term: string; definition: string }> = [
  { term: "Fa'a Samoa", definition: "The Samoan way of life" },
  { term: "Aiga", definition: "Extended family" },
  { term: "Matai", definition: "Chief or titleholder who represents and leads a family" },
  { term: "Nu'u", definition: "Village" },
  { term: "Fono", definition: "Village council" },
  { term: "Lotu", definition: "Church or worship" },
  { term: "Tulafale", definition: "Orator chief, who often speaks for a chief or host at formal events" },
  { term: "Fa'aaloalo", definition: "Respect" },
  { term: "Alofa", definition: "Love, care, compassion" },
  { term: "Tautua", definition: "Service to family, village and church" },
  { term: "To'ona'i", definition: "The Sunday feast after church" },
  { term: "Umu", definition: "Traditional earth oven using heated stones and leaves" },
  { term: "Talo", definition: "Taro" },
  { term: "Ta'amu", definition: "Giant taro" },
  { term: "Ulu", definition: "Breadfruit" },
  { term: "Fa'i", definition: "Banana" },
  { term: "Ufi", definition: "Yam" },
  { term: "Niu", definition: "Coconut" },
  { term: "Lu'au", definition: "Young taro leaves" },
  { term: "Palusami", definition: "Taro leaves baked with coconut cream" },
  { term: "Oka", definition: "Raw fish marinated in citrus juice, with coconut cream" },
  { term: "Koko Samoa", definition: "Samoan cocoa drink made from roasted local cocoa" },
  { term: "Panipopo", definition: "Sweet bread rolls baked in coconut cream" },
  { term: "Pisupo", definition: "Tinned corned beef" },
  { term: "Palolo", definition: "Marine worm that rises once a year and is eaten as a delicacy" },
  { term: "'Ava", definition: "Kava; the ceremonial drink served in order of rank" },
  { term: "'Ie toga", definition: "Fine mats exchanged at important family events" },
  { term: "Fa'alavelave", definition: "Family event or obligation involving the exchange of food, fine mats and money" },
  { term: "Fa'ato'aga", definition: "Plantation" },
  { term: "Malaga", definition: "Journey or visiting party" },
  { term: "Sa", definition: "Evening prayer time observed in villages" },
  { term: "Umete", definition: "Wooden bowl" },
  { term: "Alia", definition: "Large double-hulled canoe" },
  { term: "Pasifika Whole of Life", definition: "A holistic cultural framework emphasising balance, respect and community" },
  { term: "Agritourism", definition: "Tourism focused on farming, food and cultural experiences" },
  { term: "Benefit-sharing", definition: "Agreed distribution of income, credit and decisions with the community" },
  { term: "Climate change", definition: "Long-term changes in the Earth's climate that affect people, plants, animals and the environment" },
  { term: "Climate-smart", definition: "Farming and using resources in ways that prepare for climate change, protect the environment and support future food production" },
  { term: "Commensality", definition: "Eating together as a social act" },
  { term: "Cultural appropriation", definition: "Using a culture's elements without credit, consent or fair benefit" },
  { term: "Farm-to-table", definition: "A short, transparent chain from producer to plate" },
  { term: "Farm to Fork", definition: "EU strategy for fairer, healthier and more sustainable food systems" },
  { term: "Foodways", definition: "Practices around growing, preparing, sharing and remembering food" },
  { term: "Gastronomy tourism", definition: "Tourism in which the experience is linked to food and related activities" },
  { term: "Intangible cultural heritage", definition: "Living knowledge, skills and practices passed between generations" },
  { term: "Leakage", definition: "Income that leaves the local economy" },
  { term: "Non-communicable disease (NCD)", definition: "Long-term diseases that are not passed between people, such as type 2 diabetes and heart disease" },
  { term: "Nutrition transition", definition: "Shift from traditional diets to diets with many processed foods" },
  { term: "Sense of place (terroir)", definition: "The link between a food's qualities and its environment and tradition" },
  { term: "Staged authenticity", definition: "A performance that looks like everyday life but is arranged for visitors" },
  { term: "Staple foods", definition: "Main foods that provide energy and nutrients, such as taro, breadfruit and seafood" },
  { term: "Sustainability", definition: "Taking care of our resources today so they will still be available tomorrow" },
  { term: "Value added", definition: "Turning a basic product into a more valuable product that can earn more income" },
  { term: "Value chain", definition: "The steps that turn a crop or catch into a product, and the people involved" },
];

function worksheetMaterialM5(id: string, title: string, fields: string[]): SupplementaryMaterial {
  return {
    id,
    type: "worksheet",
    title,
    note: "Real, fillable worksheet — NUS Module, Supplementary material S3",
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
        video: {
          youtubeId: "C_xXZOio-E0",
          checkpoints: [
            {
              id: "m1-l1-cp1",
              atSeconds: 710,
              rewindToSeconds: 602,
              question: {
                id: "m1-l1-cp1-q",
                question: "According to this video, who guides the ethnobotany (wild-herb recognition) workshop example from Foggia?",
                options: [
                  "A qualified botanist",
                  "A professional chef only, with no botanist involved",
                  "A random tourist guide",
                  "A government food-safety inspector",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
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
        video: {
          youtubeId: "xBExtEmr6tY",
          checkpoints: [
            {
              id: "m1-l3-cp1",
              atSeconds: 1100,
              rewindToSeconds: 1032,
              question: {
                id: "m1-l3-cp1-q",
                question: "According to the ISMEA 2024 report cited in this video, what share of the value in Italian agriculture comes from secondary (non-production) activities like agritourism?",
                options: [
                  "About 19.6%",
                  "About 2%",
                  "About 90%",
                  "None — all value comes from production",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m1-l3-cp2",
              atSeconds: 1300,
              rewindToSeconds: 1239,
              question: {
                id: "m1-l3-cp2-q",
                question: "According to this video, approximately how many regional and national laws regulate multifunctional farming in Italy?",
                options: [
                  "116",
                  "Around 10",
                  "Exactly 1 (a single national law)",
                  "Over 1,000",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
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
        video: {
          youtubeId: "5vL3Ef8jjZE",
          checkpoints: [
            {
              id: "m1-l4-cp1",
              atSeconds: 130,
              rewindToSeconds: 99,
              question: {
                id: "m1-l4-cp1-q",
                question: "According to this video, is informed decision-making about food automatically free of limits?",
                options: [
                  "No — even when consumers are well informed, human decision-making still has many limits",
                  "Yes, once informed, decisions become fully rational",
                  "Information has no relationship to decision quality at all",
                  "Only uninformed consumers have limited rationality",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m1-l4-cp2",
              atSeconds: 740,
              rewindToSeconds: 590,
              question: {
                id: "m1-l4-cp2-q",
                question: "According to the Eurobarometer data presented in this video, which factor ranks third among EU citizens' food-decision drivers, right after cost and taste?",
                options: [
                  "Geographical origin",
                  "Environmental impact",
                  "Ethics and beliefs",
                  "Nutritional factors",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
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
        video: {
          youtubeId: "5vL3Ef8jjZE",
          checkpoints: [
            {
              id: "m1-l5-cp1",
              atSeconds: 1780,
              rewindToSeconds: 1730,
              question: {
                id: "m1-l5-cp1-q",
                question: "In the wine-tasting study described in this video, what happened when the same wine was served with background classical music?",
                options: [
                  "Its perceived value was overestimated by about 75%",
                  "It was rated exactly the same as without music",
                  "Participants refused to taste it",
                  "It was rated as cheaper than without music",
                ],
                correctIndex: 0,
              },
            },
            {
              id: "m1-l5-cp2",
              atSeconds: 2630,
              rewindToSeconds: 2521,
              question: {
                id: "m1-l5-cp2-q",
                question: "According to this video, in whom did the organic food label specifically increase activity in reward-related brain regions (ventral striatum, nucleus accumbens)?",
                options: [
                  "Only in people who already buy and understand the value of organic food — not all consumers equally",
                  "In every consumer equally, regardless of their habits",
                  "Only in young children",
                  "The label had no measurable effect on brain activity in anyone",
                ],
                correctIndex: 0,
              },
            },
          ],
        },
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
      {
        id: "m1-mat14",
        type: "case-study",
        title: "Educational marketing in practice: the \"Five Ages of Parmigiano\" (chef Massimo Bottura)",
        note: "Real content — D3.2 Module 1, \"The culture of haute cuisine 2\" — https://www.youtube.com/watch?v=jYoltS98cCo",
        body:
          "<p>Dr. Vitale uses three-Michelin-star chef Massimo Bottura's dish \"Five Ages of Parmigiano\" as a " +
          "worked example of educational marketing: a single local ingredient (Parmigiano Reggiano) served at " +
          "five different ages, textures and temperatures. The dish teaches almost without words — the " +
          "contrast between a younger, firmer version and an older, creamier or crumblier one lets the " +
          "diner discover how ageing changes flavour and texture directly, through comparison rather than " +
          "explanation.</p>" +
          "<p>The same lecture also recaps the <strong>usefulness × novelty matrix</strong> for educational " +
          "marketing: telling a visitor something true but already obvious (\"fruit and vegetables are " +
          "healthy\") loses attention fast, and something novel but irrelevant does too. The strongest " +
          "material is specific to the business — the example given is a grain variety grown on the " +
          "presenter's own farm, explained by what makes it nutritionally distinctive, then used as the " +
          "signature ingredient of a local craft beer unavailable anywhere else.</p>" +
          "<p><strong>Student task:</strong> pick one local ingredient you could serve in at least two visibly " +
          "different forms (age, preparation, temperature) without needing to explain anything verbally; " +
          "identify one fact about a product in your own context that is both useful and likely new to a " +
          "visitor, and one that is obvious and should be skipped.</p>",
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
    title: "Module 2: Cultural sustainability of food through Food Labels (UCSC)",
    owner: "UCSC",
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
          "ban on greenwashing.</p>" +
          "<p>Two further rules close the gap between marketing and fact. The <strong>QUID rule</strong> " +
          "(Quantitative Ingredient Declaration) means that if an ingredient is highlighted on the packaging — " +
          "e.g. a picture of strawberries — its exact percentage must be stated, so a product cannot imply it " +
          "is fruit-rich from 1% real fruit. Voluntary nutrition and health claims (e.g. \"low fat\", \"high in " +
          "protein\") are only allowed when they meet strict, legally defined numerical thresholds, and any " +
          "claim linking a food to a health benefit must be scientifically vetted and pre-authorised by the " +
          "<strong>European Food Safety Authority (EFSA)</strong> before it can appear on a label. The law also " +
          "bans claiming a \"special characteristic\" that is actually standard for the whole category — " +
          "marketing plain apples as \"Fat-Free\" is misleading, because it implies other apples might contain " +
          "fat.</p>",
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
          "brochure\" a rural area can have.</p>" +
          "<p>A third, less common scheme is <strong>TSG (Traditional Speciality Guaranteed)</strong>, which " +
          "protects a traditional recipe or production method rather than a place — a TSG pizza or TSG " +
          "mozzarella can be made in a different city, as long as it follows the traditional technique. PDO and " +
          "PGI protect the link to the land; TSG protects the know-how itself.</p>",
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
          "greenwashing.</p>" +
          "<p>The lecture also explains the <strong>\"Brussels Effect\"</strong>: because the EU is one of the " +
          "world's largest consumer markets, multinational food companies often find it easier to align their " +
          "entire global production with strict EU transparency standards than to maintain different labels " +
          "for different regions — so EU rules on scientific validation of claims and clear definitions (like " +
          "\"organic\") become a de facto blueprint well beyond Europe's borders.</p>",
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
              question: "Under Regulation (EU) No 1169/2011 (FIC Regulation), how must ingredients be listed on an EU food package?",
              options: [
                "Alphabetically by technical and chemical name",
                "In descending order of weight as recorded at the time of their use",
                "Grouped strictly by caloric contribution and fat density",
                "In ascending order of cost and market availability",
              ],
              correctIndex: 1,
            },
            {
              id: "m2-q2",
              question: "Which European authority is legally tasked with scientifically vetting and authorizing health claims before they can appear on commercial food packaging?",
              options: [
                "European Medicines Agency (EMA)",
                "European Commission Directorate-General for Trade (DG TRADE)",
                "European Food Safety Authority (EFSA)",
                "European Environmental Agency (EEA)",
              ],
              correctIndex: 2,
            },
            {
              id: "m2-q3",
              question: "What is the core regulatory and practical difference between \"Use by\" and \"Best before\" date markings on European food products?",
              options: [
                "\"Use by\" relates to microbial safety (a hard cutoff), whereas \"Best before\" refers to organoleptic quality and texture",
                "\"Use by\" is mandatory exclusively for canned foods, while \"Best before\" is applied solely to fresh meats",
                "\"Use by\" indicates when a product can be sold at a discount, whereas \"Best before\" defines disposal requirements for retailers",
                "Both terms are legally interchangeable and serve as advisory quality suggestions for consumers",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q4",
              question: "Under EU Geographical Indication (GI) law, which scheme requires that all stages of production, processing, and preparation take place exclusively within a defined geographical area?",
              options: [
                "Protected Geographical Indication (PGI)",
                "Traditional Speciality Guaranteed (TSG)",
                "Protected Designation of Origin (PDO)",
                "Recognized Territorial Brand (RTB)",
              ],
              correctIndex: 2,
            },
            {
              id: "m2-q5",
              question: "What is the main function of the Quantitative Ingredient Declaration (QUID) rule?",
              options: [
                "Mandating that all 14 major allergens constitute less than 5% of the total net volume",
                "Stating the percentage of an ingredient on the label when it is highlighted in text, pictorial representations, or the product's legal name",
                "Certifying that packaging material is composed of at least 80% recycled fibers",
                "Calculating the exact transport emissions generated along the product supply chain",
              ],
              correctIndex: 1,
            },
            {
              id: "m2-q6",
              question: "How does the \"Brussels Effect\" influence commercial food labeling and transparency outside the borders of the European Union?",
              options: [
                "It mandates that third countries sign treaties adopting European criminal codes for food fraud",
                "It forces non-EU nations to print labels exclusively in English and French",
                "Multinational producers align global production with stringent EU standards to avoid fragmenting manufacturing operations",
                "It bans the import of any food item that contains non-European native agricultural crops",
              ],
              correctIndex: 2,
            },
            {
              id: "m2-q7",
              question: "Why is marketing a package of standard, fresh apples as \"Fat-Free\" considered deceptive under Article 7 of the FIC Regulation?",
              options: [
                "Fresh produce cannot display nutritional claims under any circumstance",
                "It suggests the food possesses unique characteristics when, in fact, all comparable foods naturally share that same attribute",
                "Fresh fruit contains trace lipids that legally classify it as a moderate-fat item",
                "The claim must always be accompanied by an EFSA clinical trial authorization",
              ],
              correctIndex: 1,
            },
            {
              id: "m2-q8",
              question: "How does the \"Traditional Speciality Guaranteed\" (TSG) designation differ from Protected Designation of Origin (PDO) and Protected Geographical Indication (PGI)?",
              options: [
                "TSG protects the traditional method, recipe, or know-how regardless of where the food is physically produced",
                "TSG applies exclusively to wine, spirits, and alcoholic beverages",
                "TSG allows multinational companies to trademark agricultural recipes as private intellectual property",
                "TSG is granted by municipal authorities rather than European institutions",
              ],
              correctIndex: 0,
            },
            {
              id: "m2-q9",
              question: "Why does the mandatory nutrition declaration on EU food labels require standardized values per 100 grams or 100 milliliters?",
              options: [
                "Because European food portions are legally restricted to 100 grams",
                "To prevent deceptive manufacturer-defined serving sizes and enable direct, objective comparisons across products",
                "Because European laboratory instruments cannot measure quantities smaller than 100 grams",
                "To discourage consumers from purchasing bulk and multi-pack items",
              ],
              correctIndex: 1,
            },
            {
              id: "m2-q10",
              question: "According to the lecture, how do Geographical Indications (GIs) and transparent labeling support rural economies and rural tourism?",
              options: [
                "They allow local producers to bypass regional environmental protection directives",
                "They convert traditional names into public cultural assets that capture added value, combat depopulation, and stimulate gastronomic tourism",
                "They subsidize urban food retailers who stock rural produce at low price points",
                "They replace the requirement for transparent ingredient lists with national flags",
              ],
              correctIndex: 1,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      draftMaterial("m2-mat1", "case-study", "Interview: Matteo Currò, cellarman at Cantina Sociale di Lù (Monferrato, IT)", "Real video, in Italian (no English subtitles) — https://www.youtube.com/watch?v=7YVOr0FCDuo"),
      draftMaterial("m2-mat2", "case-study", "Interview: Luca Gatti, president of Corilù (hazelnuts, Piedmont, IT)", "Real video, in Italian (no English subtitles) — https://www.youtube.com/watch?v=pOdY1ixwqtU"),
      draftMaterial("m2-mat3", "infographic", "Infographic: types of food origin designations in the EU and the Pacific", "TBD from UCSC"),
      draftMaterial("m2-mat4", "checklist", "Checklist: how to read a food label and verify origin", "TBD from UCSC"),
    ],
    references: [
      "Regulation (EU) No 1169/2011 on the provision of food information to consumers (FIC)",
      "Regulation (EC) No 1924/2006 on nutrition and health claims made on foods",
      "Regulation (EU) No 1151/2012 on quality schemes for agricultural products and foodstuffs (PDO/PGI/TSG)",
      "AGRI-TOUR YouTube: \"The anatomy of a food label\", \"Decoding the EU food label\", \"Geographical indications in the European food sector\", \"The principle of transparency in agri food commercial communication\"",
    ],
  },
  {
    id: "m3",
    title: "Module 3: Promoting Rural Culture in Islands (NewEdu)",
    owner: "NewEdu",
    intro:
      "This module introduces \"Agritourism 2.0\" — the idea that a farm, market, family recipe or everyday " +
      "rural routine can become a meaningful visitor experience, not just a beach stay. Based on a presentation " +
      "New Edu prepared for the AGRI-TOUR Vanuatu Capacity Building, it uses the Product – Culture – People " +
      "framework and two Slovak case studies — Madonan Farm Park and Lišov Museum — to show how rural " +
      "traditions can be modernised without losing their identity. The module closes with pocket marketing for " +
      "a basic digital footprint and a hands-on workshop in which learners design and pitch their own island " +
      "agritourism experience.",
    lessons: [
      {
        id: "m3-l1",
        title: "3.1 Beyond the Beach: Agritourism 2.0 and the Value of the Everyday",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain why everyday rural practices can become tourism assets when they are interpreted for " +
          "visitors;</li>" +
          "<li>describe the Agritourism 2.0 model used in the New Edu presentation;</li>" +
          "<li>identify how health, sustainability, small-group travel and meaningful local impact are linked " +
          "to rural tourism demand;</li>" +
          "<li>distinguish between a raw rural resource and a designed visitor experience.</li>" +
          "</ul>" +
          "<h3>Beyond the beach</h3>" +
          "<p>The presentation opens with a simple question: why can a local backyard be part of the future of " +
          "tourism? A farm, a village garden, a market, a food-processing routine or a family story can become " +
          "part of the tourism offer once visitors are given a clear reason to engage with it. This is the " +
          "\"boring routine\" paradox: a task repeated every day by a local family may be a once-in-a-lifetime " +
          "experience for a visitor. The task is not to invent artificial attractions, but to identify which " +
          "real practices are safe, meaningful and understandable to outsiders.</p>" +
          "<h3>Agritourism 2.0</h3>" +
          "<p>Agritourism 2.0 is presented as the overlap of agriculture, tourism and experience/education. " +
          "Agriculture provides the real production setting, tourism brings the visitor, and " +
          "experience/education turns the visit into participation, learning and sharing — the value lies in " +
          "the overlap of all three. For a learner, this means an agritourism product should answer three " +
          "questions: What is real here? What can a visitor understand or do? What value is created for the " +
          "host community and the visitor?</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m3-l1-mq1\"></div>" +
          "<h3>Why now?</h3>" +
          "<p>The presentation links the opportunity to a post-pandemic traveller seeking health, sustainability " +
          "and smaller, more personal experiences, and stresses meaningful impact: visitors increasingly value " +
          "experiences where their spending supports local people and places. A market-growth chart illustrates " +
          "expanding interest in agritourism, but — as the module itself notes — its exact figures still need a " +
          "verified source before publication; it is used here only as a discussion trigger.</p>" +
          "<h3>Applied learning activity: Everyday-to-Experience Audit</h3>" +
          "<p>Choose one activity, product or routine from your village or farm that local people consider " +
          "normal. Describe why a visitor might find it unusual or memorable, what the visitor could safely do, " +
          "and what story or learning point would make the experience meaningful. (Worksheet 1.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain Agritourism 2.0 in my own words.</li>" +
          "<li>I can identify at least three everyday rural assets that could become visitor experiences.</li>" +
          "<li>I can distinguish between simply showing something and designing participation or " +
          "learning.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Look at your own community as if you were visiting it for the first time. Which routine would be " +
          "hardest for an outsider to understand without a local host? That is often where interpretation " +
          "creates value.</p>",
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
        aiSummaryPrompt:
          "Write a short summary (100–150 words) of this lesson: what Agritourism 2.0 means, and one everyday " +
          "rural routine or product (real or imagined) that could become a visitor experience.",
        microQuizzes: [
          {
            id: "m3-l1-mq1",
            question: "According to the presentation, what does \"Agritourism 2.0\" mean?",
            options: [
              "The overlap of agriculture, tourism and experience/education, moving visitors from watching to doing",
              "A certification scheme for organic farms",
              "A mobile app for booking farm stays",
              "A government subsidy programme for rural tourism",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m3-l2",
        title: "3.2 Product, Culture and People: Turning Local Life into Authentic Experiences",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>use the Product – Culture – People framework to design an agritourism experience;</li>" +
          "<li>identify how crops and foods such as kava, cocoa, coconut and coffee can become experience " +
          "anchors;</li>" +
          "<li>explain why a local story or practice adds value beyond the physical product;</li>" +
          "<li>recognise the difference between authenticity as a lived practice and authenticity as a " +
          "marketing claim.</li>" +
          "</ul>" +
          "<h3>The three pillars</h3>" +
          "<p>The presentation organises an agritourism experience around three pillars. The <strong>product</strong> " +
          "is tangible — kava, cocoa, coconut or coffee. <strong>Culture</strong> explains how the product is " +
          "grown, prepared, used or remembered. <strong>People</strong> provide hospitality, knowledge and " +
          "interpretation. A coconut is not only a product once the visitor also sees how it is harvested and " +
          "understands its place in everyday life; a kava drink is not only consumed once the visitor learns " +
          "about the ritual and the social meaning around it.</p>" +
          "<h3>From product to experience</h3>" +
          "<p>Instead of only selling or displaying a product, the host can create a safe hands-on moment: " +
          "preparing, tasting, observing, making or learning. Participation makes the product easier to " +
          "remember and gives the host an opportunity to explain local knowledge.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m3-l2-mq1\"></div>" +
          "<h3>The idea of \"Organic by Default\"</h3>" +
          "<p>The presentation uses the phrase \"Organic by Default\" to highlight the value of natural, " +
          "traditional and low-input farming practices in Vanuatu, in contrast to the cost of formal organic " +
          "certification in Europe. For educational use, the phrase should be understood as a communication " +
          "concept, not as a formal organic certification — the learning point is that existing sustainable " +
          "practices can be visible assets when explained accurately and responsibly.</p>" +
          "<h3>Authenticity and visitor respect</h3>" +
          "<p>The host should not turn culture into a performance that loses its meaning. The practical " +
          "challenge is to decide what can be shared, what requires explanation, what is private or sacred, and " +
          "how the community remains in control of the story.</p>" +
          "<h3>Applied learning activity: Product – Culture – People Canvas</h3>" +
          "<p>Select one local product. Complete three fields — Product: what the visitor sees or tastes; " +
          "Culture: what story, skill or tradition gives it meaning; People: who hosts, demonstrates or " +
          "explains it. Then add one safe visitor action and one takeaway or memory. (Worksheet 2.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can design an experience around product, culture and people.</li>" +
          "<li>I can explain why the same product can create different visitor experiences depending on the " +
          "story and participation.</li>" +
          "<li>I can identify at least one cultural element that should be shared carefully or only with " +
          "community permission.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Use the workshop examples from the presentation — Kava Ritual, Cacao/Chocolate Journey, Tree of " +
          "Life (Coconut), Seafood, Coffee and Sugarcane. Which of these feels closest to a product already " +
          "present in your own community?</p>",
        aiSummaryPrompt:
          "Summarize the Product – Culture – People framework from this lesson, and apply it to one local " +
          "product (real or imagined): what is the product, the cultural story and who are the people?",
        microQuizzes: [
          {
            id: "m3-l2-mq1",
            question: "Which three pillars does the presentation use to structure an authentic agritourism experience?",
            options: [
              "Product, Culture and People",
              "Price, Promotion and Place",
              "Food, Hotel and Transport",
              "Farm, City and Beach",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m3-l3",
        title: "3.3 Making Traditions Modern: Madonan Farm Park",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>analyse how a rural attraction can combine agriculture, entertainment and education;</li>" +
          "<li>identify different forms of visitor participation used in the Madonan Farm Park case;</li>" +
          "<li>explain how events, education and value-added products diversify rural income opportunities;</li>" +
          "<li>adapt one lesson from the case to a Pacific or island context without copying the business model " +
          "directly.</li>" +
          "</ul>" +
          "<h3>The Farmpark concept</h3>" +
          "<p>Madonan Farm Park, in the Slovak village of Kľačany, is presented under the motto " +
          "\"Nature, Tradition, and Family Fun.\" Instead of relying on a single attraction, the farm is " +
          "organised into different visitor touchpoints where agriculture meets entertainment.</p>" +
          "<h3>Learning by playing</h3>" +
          "<p>The presentation lists a milking simulator, feeding animals, archery, a digging simulator and a " +
          "tractor-train. Some activities simulate farm work for safety or accessibility, while others use the " +
          "farm itself as the learning environment — the principle is that the visitor does something rather " +
          "than only receives information.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m3-l3-mq1\"></div>" +
          "<h3>Business diversification</h3>" +
          "<p>The case extends beyond casual visits: school programmes use the farm as a living classroom, " +
          "while birthday parties and summer camps create additional reasons to visit. The same rural place can " +
          "serve different target groups if activities are designed around their needs.</p>" +
          "<h3>Value-added products</h3>" +
          "<p>The presentation contrasts selling a raw farm product with selling a processed or branded one — " +
          "\"don't sell raw milk, sell ice cream\" — with examples like nut cream, vouchers and branded " +
          "merchandise. The learning point is not the exact price shown, which may change, but the principle of " +
          "increasing value through processing, experience and direct customer connection.</p>" +
          "<h3>Applied learning activity: Attraction and Diversification Design</h3>" +
          "<p>Choose a real rural site. Design one learning-by-doing attraction, one educational programme or " +
          "event, and one value-added product. For each, explain the target visitor, the practical action, the " +
          "safety consideration and the value for the local host. (Worksheet 3.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can identify at least three types of visitor participation in the Madonan case.</li>" +
          "<li>I can explain how one rural site can serve families, schools and other visitor groups.</li>" +
          "<li>I can distinguish between a raw product and a value-added product or experience.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>When adapting a case study, transfer the principle rather than copying the exact activity. A safe " +
          "local food demonstration may be more appropriate than a farm simulator, depending on context.</p>",
        aiSummaryPrompt:
          "Summarize how Madonan Farm Park combines learning-by-playing, business diversification and " +
          "value-added products, then describe one principle from the case (not the exact activity) you'd " +
          "adapt to a rural or island site you know.",
        microQuizzes: [
          {
            id: "m3-l3-mq1",
            question: "In the Madonan Farm Park case, \"learning by playing\" is illustrated mainly by:",
            options: [
              "Simulated and hands-on activities such as milking, animal feeding and a tractor-train",
              "Only selling raw agricultural products",
              "Replacing farm activities with online videos",
              "Limiting visitors to guided observation only",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m3-l4",
        title: "3.4 Living Heritage and Community Hubs: The Lišov Museum Case",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>explain how rural cultural heritage can function as a living visitor experience;</li>" +
          "<li>identify how local heritage can be connected with global exchange without losing local " +
          "identity;</li>" +
          "<li>describe how natural building, education and a small café can support rural revitalisation;</li>" +
          "<li>assess which heritage elements in a Pacific community could become respectful learning " +
          "experiences.</li>" +
          "</ul>" +
          "<h3>The Living Museum</h3>" +
          "<p>Lišov Museum, in a Slovak village of about 200 inhabitants, is presented as a \"Living Museum\" " +
          "built around cultural heritage, international exchange and natural building. The core idea is that " +
          "heritage is not only displayed — it is used to create activity, education and reasons for people to " +
          "meet.</p>" +
          "<h3>Local meets global</h3>" +
          "<p>The Gallery of Masks is a collection of more than 400 masks from Africa, Asia and Europe. The " +
          "collection attracts visitors to a small village and creates a conversation between local and global " +
          "culture — a rural place can host international content while still keeping a strong local " +
          "identity.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m3-l4-mq1\"></div>" +
          "<h3>Natural building and adaptive use</h3>" +
          "<p>The presentation highlights clay, stone and wood, a Celtic-style dwelling built with no nails, " +
          "and the adaptation of a historic building into an information centre and café — architecture itself " +
          "becomes part of the story, and old structures can receive a new visitor function.</p>" +
          "<h3>Education, exchange and social hub</h3>" +
          "<p>Erasmus+ mobility and adult education — bringing students from Germany, Romania and the United " +
          "Kingdom — are presented as drivers that bring people and skills into the village. The small café is " +
          "a meeting point for locals and tourists, served with local coffee and connected to a wider network " +
          "of information points (Dudince – Krupina – Lišov). A small service can have a social function larger " +
          "than its commercial role.</p>" +
          "<h3>Applied learning activity: Living Heritage and Social Hub Canvas</h3>" +
          "<p>Identify one cultural asset, building, craft, collection or community practice. Describe how it " +
          "could become a living experience, what educational activity could be connected to it, and what " +
          "small social-hub function could help locals and visitors meet. (Worksheet 4.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain the difference between displaying heritage and activating heritage.</li>" +
          "<li>I can identify one way education or exchange can support a rural attraction.</li>" +
          "<li>I can describe how a small café, information point or shared space can strengthen a visitor " +
          "network.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Ask whether the community is comfortable with the proposed interpretation. Cultural heritage " +
          "should be shared with local ownership and clear boundaries.</p>",
        aiSummaryPrompt:
          "Summarize how Lišov Museum combines heritage, international exchange and a small café/social hub, " +
          "then describe one heritage asset (real or imagined) in a Pacific community that could become a " +
          "respectful learning experience for visitors.",
        microQuizzes: [
          {
            id: "m3-l4-mq1",
            question: "What is the role of the \"small café\" in the Lišov Museum case?",
            options: [
              "It acts as a social hub where locals and visitors can meet and connect with the region",
              "It replaces the museum entirely",
              "It is used only to sell imported products",
              "It functions only as staff facilities",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m3-l5",
        title: "3.5 Pocket Marketing and the Digital Footprint",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>identify the role of social media, reviews and online maps in rural tourism visibility;</li>" +
          "<li>distinguish between discovery, visual storytelling, community connection and reputation " +
          "channels;</li>" +
          "<li>create a minimal digital-footprint plan for a small agritourism operator;</li>" +
          "<li>explain why accurate basic information can be more important than complex marketing tools.</li>" +
          "</ul>" +
          "<h3>Pocket marketing</h3>" +
          "<p>The presentation calls mobile-first promotion \"Pocket Marketing.\" It names TikTok as a " +
          "discovery engine, Instagram as a visual catalogue, Facebook as a community connector, influencers as " +
          "storytellers, and TripAdvisor / Google Reviews as reputation and discovery channels. Not every " +
          "operator needs every platform — but a small rural offer needs to be discoverable and understandable " +
          "online.</p>" +
          "<h3>The digital footprint</h3>" +
          "<p>Tourism listings and a map of attractions in Vanuatu illustrate a practical problem: if a farm or " +
          "rural experience does not appear where visitors search, it may remain invisible even when the " +
          "experience itself is strong. A basic digital footprint can include a correct location, opening " +
          "information, contact details, photos, a short description and recent reviews.</p>" +
          "<div class=\"micro-quiz-slot\" data-micro-quiz-id=\"m3-l5-mq1\"></div>" +
          "<h3>Choosing channels strategically</h3>" +
          "<p>A visual platform can inspire a visit, a map helps the visitor find the place, reviews reduce " +
          "uncertainty, and a community page can announce events or maintain relationships. Learners should " +
          "choose channels according to their capacity rather than opening accounts that will not be " +
          "maintained.</p>" +
          "<h3>Trust and accuracy</h3>" +
          "<p>A wrong location, outdated opening time or unanswered message can damage the visitor experience " +
          "before arrival. Digital marketing therefore starts with reliable basic information.</p>" +
          "<h3>Applied learning activity: Digital Footprint Starter Plan</h3>" +
          "<p>Prepare a one-page starter plan for a small rural attraction: name, short description, map " +
          "location, contact method, five essential photos, one social channel, one review/map channel and a " +
          "simple monthly update routine. (Worksheet 5.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can explain what a digital footprint is.</li>" +
          "<li>I can match at least three digital channels with different visitor needs.</li>" +
          "<li>I can design a basic online presence that is realistic for a small rural operator.</li>" +
          "</ul>" +
          "<h3>Reflection</h3>" +
          "<p>Review an existing rural attraction online. What information can a visitor find in two minutes? " +
          "What is missing?</p>",
        aiSummaryPrompt:
          "Summarize what a \"digital footprint\" means in this lesson and which digital channels play which " +
          "role, then sketch a minimal digital-footprint plan for one small rural operator (real or imagined).",
        microQuizzes: [
          {
            id: "m3-l5-mq1",
            question: "According to the module, what does a \"digital footprint\" mean for a small rural operator?",
            options: [
              "The online visibility of a place through maps, reviews, social media and basic visitor information",
              "A legal registration required to run a tourism business",
              "The number of visitors who physically walk through a farm",
              "A type of soil-moisture sensor",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m3-l6",
        title: "3.6 Design Your Island Experience: From Idea to One-Minute Pitch",
        content:
          "<h3>Learning objectives</h3>" +
          "<ul>" +
          "<li>use a before – during – after journey to structure a visitor experience;</li>" +
          "<li>apply the Hook – Action – Kastom – Takeaway framework from the Nambawan Experience Challenge;</li>" +
          "<li>create a simple one-minute pitch for an island agritourism concept;</li>" +
          "<li>reflect on how younger rural actors can connect digital tools with local roots and " +
          "traditions.</li>" +
          "</ul>" +
          "<h3>Before, during and after</h3>" +
          "<p>The workshop visualises the visitor journey in three stages. Before the visit, the experience " +
          "must be discoverable and understandable. During the visit, the visitor needs a hands-on farm or " +
          "cultural activity. After the visit, the visitor should leave with a memory, story, product or " +
          "connection that extends the experience.</p>" +
          "<h3>The \"Nambawan Experience\" Challenge</h3>" +
          "<p>Learners design an experience around four elements: the <strong>Hook</strong> — the memorable " +
          "name or idea; the <strong>Action</strong> — the one thing the tourist will do with their own hands; " +
          "the <strong>Kastom</strong> — the traditional story, knowledge or secret that gives meaning; and the " +
          "<strong>Takeaway</strong> — the physical or memorable element the visitor carries home.</p>" +
          "<h3>Product themes for the workshop</h3>" +
          "<p>The presentation suggests six group themes — Kava Ritual, Cacao/Chocolate Journey, Tree of Life " +
          "(Coconut), Seafood, Coffee and Sugarcane — examples that can be replaced by locally relevant products " +
          "or practices in other island or rural contexts.</p>" +
          "<h3>Pitch time</h3>" +
          "<p>The workshop ends with a one-minute pitch: \"you have 1 minute to sell the dream.\" The goal is " +
          "not a long business plan but to communicate the experience clearly — what is it, what will the " +
          "visitor do, why is it special, and what local value does it create?</p>" +
          "<h3>The bridge generation</h3>" +
          "<p>The presentation closes with the idea of a \"Bridge Generation\": people who understand the " +
          "digital world but still have roots in village life. How can digital skills make rural culture more " +
          "visible without replacing the people, practices and values that make the place distinctive?</p>" +
          "<h3>Applied learning activity: Nambawan Experience Design and 1-Minute Pitch</h3>" +
          "<p>Design one island agritourism concept. Complete: name/hook, target visitor, one hands-on action, " +
          "one Kastom story or knowledge element, one takeaway, the before–during–after journey and a " +
          "60-second spoken pitch. (Worksheet 6.)</p>" +
          "<h3>Self-check</h3>" +
          "<ul>" +
          "<li>I can structure an experience across before, during and after stages.</li>" +
          "<li>I can complete the Hook – Action – Kastom – Takeaway framework.</li>" +
          "<li>I can explain my concept in one minute without losing the local value proposition.</li>" +
          "</ul>" +
          "<h3>Module summary and proficiency test</h3>" +
          "<p>A 10-question test follows to check understanding of the module. Suggested scoring: 8–10 correct " +
          "= strong understanding; 6–7 = acceptable, review the units linked to incorrect answers; 0–5 = review " +
          "the module before retaking the test.</p>",
        quiz: {
          questions: [
            {
              id: "m3-q1",
              question: "Which statement best describes Agritourism 2.0 in this module?",
              options: [
                "A tourism model based only on accommodation near farms",
                "A combination of agriculture, tourism and experience/education that moves visitors from watching to doing",
                "A certification system for organic farms",
                "A digital marketing strategy for rural hotels",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q2",
              question: "What is the main idea behind the presentation's \"boring routine\" paradox?",
              options: [
                "Routine farm work should be hidden from visitors",
                "Everyday local practices can be memorable for visitors when they are interpreted and experienced safely",
                "Visitors are interested only in unusual technology",
                "Farmers should replace daily work with staged entertainment",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q3",
              question: "Which three pillars are used to structure an authentic agritourism experience?",
              options: ["Price – Promotion – Place", "Product – Culture – People", "Food – Hotel – Transport", "Farm – City – Beach"],
              correctIndex: 1,
            },
            {
              id: "m3-q4",
              question: "In the Madonan Farm Park case, \"learning by playing\" is illustrated by:",
              options: [
                "Only selling raw agricultural products",
                "Simulated and hands-on activities such as milking, animal feeding and a tractor-train",
                "Replacing farm activities with online videos",
                "Limiting visitors to guided observation only",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q5",
              question: "Which is an example of business diversification shown in the Madonan case?",
              options: [
                "School programmes, birthday events and summer camps",
                "Closing the farm outside harvest season",
                "Selling only one raw product",
                "Removing educational activities",
              ],
              correctIndex: 0,
            },
            {
              id: "m3-q6",
              question: "What is the key idea of the Lišov Museum case?",
              options: [
                "Rural heritage should remain closed to outsiders",
                "A living museum can connect cultural heritage, education, exchange and community functions",
                "Only large museums can attract international visitors",
                "Natural buildings should not be reused for visitor services",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q7",
              question: "What is the role of the \"small café\" in the Lišov case?",
              options: [
                "Only to sell imported products",
                "To act as a social hub where locals and visitors can meet and connect with the region",
                "To replace the museum",
                "To function only as staff facilities",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q8",
              question: "What does the module mean by a digital footprint?",
              options: [
                "The number of steps a visitor walks on a farm",
                "The online visibility of a place through maps, reviews, social media and basic visitor information",
                "A legal registration for tourism businesses",
                "A type of agricultural sensor",
              ],
              correctIndex: 1,
            },
            {
              id: "m3-q9",
              question: "In the Design Your Island Experience workshop, which sequence describes the visitor journey?",
              options: ["Before – During – After", "Price – Product – Promotion", "Map – Review – Booking", "Farm – Hotel – Airport"],
              correctIndex: 0,
            },
            {
              id: "m3-q10",
              question: "Which four elements form the Nambawan Experience Challenge?",
              options: [
                "Hook – Action – Kastom – Takeaway",
                "Price – Ticket – Hotel – Transport",
                "Product – Patent – Platform – Payment",
                "Farm – Food – Flight – Feedback",
              ],
              correctIndex: 0,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      {
        id: "m3-mat1",
        type: "fact-sheet",
        title: "Module glossary",
        note: "Real content — D3.2 Module 3 Scripts & Annexes, Section 2",
        body:
          "<dl>" +
          MODULE3_GLOSSARY.map(({ term, definition }) => `<dt>${term}</dt><dd>${definition}</dd>`).join("") +
          "</dl>",
        glossaryGame: MODULE3_GLOSSARY,
      },
      worksheetMaterialM3("m3-mat2", "Worksheet 1 – Everyday-to-Experience Audit", [
        "Local activity / product / routine",
        "Why locals consider it ordinary",
        "Why a visitor may find it interesting",
        "What the visitor could safely do",
        "What the visitor learns",
        "Who explains or hosts it",
        "Possible takeaway or memory",
        "Reflection — what part of the experience is genuinely local?",
        "Reflection — what would need to be simplified or explained to a first-time visitor?",
        "Reflection — what could make the activity unsafe, disrespectful or difficult to deliver?",
      ]),
      worksheetMaterialM3("m3-mat3", "Worksheet 2 – Product – Culture – People Canvas", [
        "Product",
        "Culture / story / practice",
        "People / host",
        "Hands-on visitor action",
        "Key learning point",
        "What should not be shared publicly",
        "Takeaway / memory",
        "Reflection — does the experience depend on all three pillars?",
        "Reflection — what would be lost if the cultural story was removed?",
        "Reflection — how will the local community remain in control of the story?",
      ]),
      worksheetMaterialM3("m3-mat4", "Worksheet 3 – Attraction and Diversification Design", [
        "Rural site / farm",
        "Learning-by-doing attraction",
        "Target visitor",
        "Educational programme or event",
        "Value-added product",
        "Safety / accessibility consideration",
        "Local benefit",
        "Reflection — which element creates the strongest reason to visit?",
        "Reflection — which element creates income beyond the basic visit?",
        "Reflection — which idea can realistically be delivered with existing resources?",
      ]),
      worksheetMaterialM3("m3-mat5", "Worksheet 4 – Living Heritage and Social Hub Canvas", [
        "Heritage asset / building / practice",
        "What visitors can see or learn",
        "Interactive or educational element",
        "Community role",
        "Possible small social-hub function",
        "Local product / service connection",
        "Permission / sensitivity check",
        "Reflection — how does the idea keep heritage active rather than static?",
        "Reflection — how can local people benefit even when they are not tourists?",
        "Reflection — what cultural boundary must be respected?",
      ]),
      worksheetMaterialM3("m3-mat6", "Worksheet 5 – Digital Footprint Starter Plan", [
        "Experience / business name",
        "One-sentence description",
        "Map / location information",
        "Contact method",
        "Five essential photos",
        "Primary social channel",
        "Review / map channel",
        "Monthly update routine",
        "Reflection — can a visitor understand what you offer in two minutes?",
        "Reflection — can they find you easily?",
        "Reflection — which information will become outdated fastest?",
      ]),
      worksheetMaterialM3("m3-mat7", "Worksheet 6 – Nambawan Experience and 1-Minute Pitch", [
        "Experience name / Hook",
        "Target visitor",
        "Hands-on Action",
        "Kastom / cultural story or knowledge",
        "Takeaway",
        "Before the visit",
        "During the visit",
        "After the visit",
        "Three main barriers in your context",
        "One practical response to each barrier",
        "Reflection — can you explain the experience in 60 seconds?",
        "Reflection — is the visitor doing something, not only watching?",
        "Reflection — is the local cultural value clear and respectfully presented?",
      ]),
      {
        id: "m3-mat8",
        type: "checklist",
        title: "How island communities can start",
        note: "Real content — D3.2 Module 3 Learning Content, \"How Island Communities Can Start\"",
        checklistItems: [
          "Start with what already exists — one product, activity, story, landscape feature, traditional skill or routine that is real and available",
          "Add the cultural meaning — how ancestors used it, what story is connected with it, what should visitors understand",
          "Identify the people — decide who can explain, demonstrate or host the activity",
          "Create one hands-on action — something safe and realistic the visitor can do",
          "Define the takeaway — a product, skill, recipe, story, photograph, souvenir or new understanding",
          "Make it discoverable — a basic digital footprint with accurate information, location, photos and contact details",
          "Test and improve — try the experience with a small group, collect feedback and improve before expanding it",
        ],
      },
      draftMaterial("m3-mat9", "case-study", "Visit to Teouma Valley Farm (owner Michelle Prendergast, Vanuatu)", "Real video — https://www.youtube.com/watch?v=VEl-GhijywA"),
      draftMaterial("m3-mat10", "photo-story", "Making traditional LapLap at Api Farm (Vanuatu)", "Real video — https://www.youtube.com/watch?v=QBAcjsRyPPE"),
      draftMaterial("m3-mat11", "case-study", "Visit to Api Farm (Vanuatu)", "Real video — https://www.youtube.com/watch?v=LW6aKTMrj2E"),
      draftMaterial("m3-mat12", "case-study", "Visit to 83 Islands Distillery (Vanuatu)", "Real video — https://www.youtube.com/watch?v=ArKrksl_gpM"),
      draftMaterial("m3-mat13", "case-study", "Visit to Gaston Chocolat factory (owner Olivier, Vanuatu)", "Real video — https://www.youtube.com/watch?v=5elGIW1SzuY"),
      draftMaterial("m3-mat14", "case-study", "Visit to Tanna Coffee (Vanuatu)", "Real video, no transcript — https://www.youtube.com/watch?v=YGhmIqbmyWY"),
      draftMaterial("m3-mat15", "interview-video", "Interview: Million Dollar Point Restaurant and Bar (Vanuatu)", "Real video — https://www.youtube.com/watch?v=rzYGbEQi1u4"),
    ],
    references: [
      "AGRI-TOUR New Edu presentation: Promoting Rural Culture in Islands — How to Import the Agritourism Model in the Pacific Islands? (New Edu, n.o., prepared for the AGRI-TOUR Vanuatu Capacity Building)",
      "Case study: Madonan Farm Park, Kľačany, Slovakia",
      "Case study: Lišov Museum, Lišov, Slovakia — Gallery of Masks and living-heritage village initiative",
      "AGRI-TOUR Vanuatu farm and producer visits: Teouma Valley Farm, Api Farm, 83 Islands Distillery, Gaston Chocolat, Tanna Coffee, Million Dollar Point Restaurant and Bar (where available on the project platform)",
    ],
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
      "Food in Samoa is far more than nourishment. It expresses respect, hospitality and belonging, and it ties " +
      "families to the land and sea they care for. This module introduces Samoan food culture as a living " +
      "heritage: the values of fa'a Samoa that shape how food is served and shared, the root crops, seafood and " +
      "coconut at the heart of the traditional diet, the umu and the ceremonies around it, and the health and " +
      "climate challenges facing the food system today. You will then explore how entrepreneurship, " +
      "agritourism and farm-to-table experiences can bring people back to nutritious local food, support " +
      "farmers and keep traditions alive, and you will design a respectful food experience of your own.",
    lessons: [
      {
        id: "m5-l1",
        title: "5.1 Food and Fa'a Samoa: Respect, Hospitality and Community",
        content: `<h3>Learning objectives</h3>
<ul>
<li>explain how food represents respect, hospitality, collective responsibility and identity in fa'a Samoa;</li>
<li>describe the significance of serving chiefs, church leaders and other leaders first, and what this order says about social structure;</li>
<li>identify locally grown and harvested foods as the cultural foundation of Samoan meals;</li>
<li>explain why visitors to a Samoan community need to understand food protocol.</li>
</ul>
<p><em>Key terms:</em> fa'a Samoa, aiga, matai, nu'u, fa'aaloalo, alofa, tautua, to'ona'i, foodways, commensality.</p>

<h3>Why start with food?</h3>
<p>Think about the last meal that mattered to you. It was probably important not because of the calories, but
because of who was there, who cooked it and what it meant. Scholars call the whole set of practices around food
— growing, gathering, preparing, serving, sharing and remembering — <strong>foodways</strong>. Foodways are
learned, not inherited, which is why a dish can feel ordinary to the host and extraordinary to a guest. A taro
leaf, a coconut or a fish is a biological fact, but it is also a symbol: everyday food in one setting, a gift that
honours someone in another. Visitors therefore do not simply buy a meal — they receive meanings, and anyone who
hosts visitors shares a piece of culture that belongs to someone.</p>

<h3>Fa'a Samoa in brief</h3>
<p><em>Fa'a Samoa</em> means "the Samoan way", the way of life that organises family, village, church and land:</p>
<ul>
<li>the <strong>aiga</strong> (extended family) is the basic unit of life, often spanning many households and generations;</li>
<li>the <strong>matai</strong> system gives each family and village leadership — matai hold titles on behalf of the family, represent it in the village council (<em>fono</em>) and are responsible for its welfare and land;</li>
<li>the <strong>nu'u</strong> (village) is governed by its fono and by committees, including women's committees;</li>
<li>the church (<em>lotu</em>) is central to village life, and Sunday worship shapes the weekly rhythm of meals.</li>
</ul>
<p>Three values run through all of these, and all three appear at the table:</p>
<table>
<thead><tr><th>Value</th><th>Meaning</th><th>How it appears in food</th></tr></thead>
<tbody>
<tr><td>Fa'aaloalo</td><td>Respect</td><td>Serving the right people first, in the right way; not eating before others are served</td></tr>
<tr><td>Alofa</td><td>Love, care, compassion</td><td>Cooking for the family, feeding visitors well, sharing with those in need</td></tr>
<tr><td>Tautua</td><td>Service</td><td>Younger or untitled members cooking, serving and working the plantation for the family and its leaders</td></tr>
</tbody>
</table>
<p>The NUS outline adds the <strong>Pasifika Whole of Life</strong> framework, which stresses balance, respect and
community — and food is one of the clearest places where this balance becomes visible.</p>
<div class="micro-quiz-slot" data-micro-quiz-id="m5-l1-mq1"></div>

<h3>Food as respect: who is served first?</h3>
<p>At formal meals and gatherings, the people honoured with the first and best food are (1) high chiefs and chiefs
(matai), (2) church leaders and ministers, and (3) government leaders and other officials. The order is not a
ranking of human worth: it acknowledges the responsibilities leaders carry for the family, the church and the
community. Orators (<em>tulafale</em>) often speak for the host or chief when food is presented, and those who
serve — often younger, untitled family members — show tautua through their work.</p>
<p>The pattern is flexible in ways that reveal its logic. On <strong>White Sunday</strong> (Lotu a Tamaiti),
children are the guests of honour and are served first by the adults; a visiting party (<em>malaga</em>) is
likewise honoured through food. Two practical points: serving order is observed, not improvised — guests wait to
be invited to eat; and respect includes quality and quantity — the best portions go to those being honoured.</p>

<h3>Hospitality, generosity and collective responsibility</h3>
<p>A family that receives guests is expected to feed them well, often with more than they can eat. Generosity
brings honour; failing to host properly can bring embarrassment. Eating together as a social act is called
<strong>commensality</strong>, and the weekly Sunday feast, the <strong>to'ona'i</strong>, is its best-known
example: after church, families gather for the main meal of the week, often prepared in an umu. Generosity is
also reciprocal — families give and, over time, receive.</p>
<p>Many tasks behind a meal are shared: working the plantation (<em>fa'ato'aga</em>), fishing on the reef,
gathering coconuts, preparing the umu and cooking. Collective responsibility has two sides: a
<strong>strength</strong> (nobody is left without food, and knowledge passes on by working together) and a
<strong>pressure</strong> (large gatherings and obligations can be costly for families). A good learner holds both
facts in mind.</p>

<h3>Food and identity</h3>
<p>For Samoans at home and abroad, food is a marker of identity. Taro, palusami (taro leaves baked with coconut
cream) or <em>oka</em> (raw fish with coconut cream) bring back memories of family and village; for the diaspora in
New Zealand, Australia and the United States, cooking an umu or sharing a Sunday meal keeps fa'a Samoa alive far
from home. Identity is also tied to the environment: the table cannot be understood without the plantation, the
reef and the forest (Lesson 5.2).</p>

<h3>Why this matters for agritourism</h3>
<ul>
<li><strong>Brief visitors before they arrive</strong> — how food is served, why leaders are served first, what behaviour is expected.</li>
<li><strong>Do not stage hierarchy as a show without agreement</strong> — if it is demonstrated, the community decides how and says clearly that it is a demonstration.</li>
<li><strong>Let hosts tell their own stories</strong> — the people who hold the knowledge explain what food means.</li>
<li><strong>Honour the meaning, not only the menu.</strong></li>
</ul>
<p><strong>In practice — a village lunch for visitors.</strong> A coastal village receives eight visitors for a
farm-to-table lunch. The host family explains beforehand that the matai and the pastor will be welcomed first,
that visitors will be served after them and that everyone waits for a short blessing. Visitors help carry food
from the umu, learn the names of the dishes and afterwards ask how the plantation and the reef supply the table.
<em>Which parts express respect, which hospitality, and what could an unbriefed visitor misunderstand?</em></p>

<h3>Learning activity: Food protocol — "Do and Don't"</h3>
<p>Decide whether each behaviour is <em>Respectful</em>, <em>Needs guidance</em> or <em>Disrespectful</em>, and
explain why: a visitor begins eating before the blessing; waits until the hosts invite them to eat; asks about an
unfamiliar food respectfully; refuses food without explaining politely; interrupts the person presenting the food;
helps carry food when invited; takes the best portion before others are served.</p>

<h3>Key points</h3>
<ul>
<li>In fa'a Samoa, food represents respect, hospitality, collective responsibility and identity.</li>
<li>Serving chiefs, church leaders and government leaders first reflects social structure and the responsibilities leaders carry.</li>
<li>The Sunday to'ona'i and other communal meals reinforce family and village bonds.</li>
<li>Visitors receive meanings as well as meals, which makes briefing and consent essential in agritourism.</li>
</ul>

<h3>Self-check</h3>
<ul>
<li>What do fa'aaloalo, alofa and tautua mean, and how does each show up in a meal?</li>
<li>Name three groups who are traditionally served first at formal meals.</li>
<li>Why is serving order different on White Sunday?</li>
<li>Give one strength and one pressure of collective responsibility for food.</li>
</ul>`,
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
        aiSummaryPrompt:
          "Write a short reflection (100–150 words): how does food reflect respect in fa'a Samoa? Use at least two " +
          "examples from this lesson (for example serving order, the to'ona'i or White Sunday).",
        microQuizzes: [
          {
            id: "m5-l1-mq1",
            question: "Which value means \"service\" and is shown by younger or untitled family members cooking and serving?",
            options: ["Tautua", "Fa'aaloalo", "Alofa", "Malaga"],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m5-l2",
        title: "5.2 Land, Sea and Seasons: The Local Ingredients of Samoa",
        content: `<h3>Learning objectives</h3>
<ul>
<li>list the main root crops, fruits, leafy vegetables, coconut products and seafood of the traditional Samoan diet;</li>
<li>explain what each food group contributes to nutrition;</li>
<li>describe how the plantation, the reef and the forest supply the Samoan table through the year;</li>
<li>explain how customary land and village rules shape access to food resources;</li>
<li>identify pressures on local food supply, and why they matter for agritourism.</li>
</ul>
<p><em>Key terms:</em> talo, ta'amu, ulu, fa'i, niu, fa'ato'aga, customary land, staple food, palolo, sense of place.</p>

<h3>An island food system</h3>
<p>Samoa is a group of volcanic islands — Upolu and Savai'i and several smaller ones — with warm temperatures,
high rainfall, fertile soils, coral reefs and lagoons. A traditional village is organised around three zones:</p>
<ul>
<li><strong>the sea in front</strong> — reef, lagoon and open ocean, for fish, octopus, shellfish and seaweed;</li>
<li><strong>the village in the middle</strong> — houses, family gardens, coconut palms and fruit trees;</li>
<li><strong>the plantation and forest behind</strong> — the fa'ato'aga, with root crops and bananas, and the forest, for timber, leaves and wild foods.</li>
</ul>
<p>A traditional meal is the end of a short chain that starts a few hundred metres from where it is eaten. This
link between food and place is sometimes called <strong>terroir</strong> or <strong>sense of place</strong>. In
Samoa it is not guaranteed by a label; it is held in family knowledge and in the village rules that govern land
and sea.</p>

<h3>Root crops: the energy foods</h3>
<ul>
<li><strong>Talo (taro)</strong> — the best-known staple; the corm is boiled or baked in the umu, and taro is a prestige food in many ceremonies.</li>
<li><strong>Ta'amu (giant taro)</strong> — a large, hardy root crop.</li>
<li><strong>Ulu (breadfruit)</strong> — a tree crop baked, boiled or fried; traditionally some was fermented and stored in pits for lean times.</li>
<li><strong>Fa'i (bananas)</strong> — eaten green (boiled or baked) and ripe.</li>
<li><strong>Ufi (yams)</strong> and other root crops complement these staples.</li>
</ul>
<p><strong>A lesson in resilience — the taro blight of 1993.</strong> Taro was Samoa's main staple and an export
crop until taro leaf blight spread rapidly across the islands in 1993 and devastated production. Farmers and
researchers responded with new crops and resistant varieties, and families relied more on bananas, breadfruit and
giant taro. The lesson: a food system that depends on one crop is fragile, and traditional diversity is a form of
food security.</p>
<div class="micro-quiz-slot" data-micro-quiz-id="m5-l2-mq1"></div>

<h3>Leaves, fruits, coconut and the sea</h3>
<p>Taro leaves (<em>lu'au</em>) are a staple vegetable — cooked with coconut cream and wrapped, they become
<strong>palusami</strong>. Papaya, mango, pineapple, bananas and citrus add vitamins and variety. The simple
three-part pattern: <strong>root crops for energy, fruits and vegetables for vitamins, seafood for protein and
minerals such as iron</strong>.</p>
<p>The <strong>coconut</strong> (<em>niu</em>) is at the heart of the kitchen: drinking water, coconut cream,
cooking oil, leaves, shells and fibre, and copra as a cash product. Coconut cream and oil are nutritious but
energy-dense; in a traditional diet they flavoured fibre-rich meals balanced by physical work — used in large
quantities with processed foods and little exercise, they add to weight gain.</p>
<p>From the <strong>sea</strong> come fish, octopus, shellfish, crabs and seaweed, gathered on the reef at low
tide, by net, line and trap, and by deep-sea fishing. The <strong>palolo</strong>, a marine worm that rises from
the reef once a year (usually October or November, a few nights after the full moon), shows how food, the moon and
the seasons are tied together in local knowledge. Under community-based fisheries management, many villages make
bylaws and set aside reserves. Pigs (<em>pua'a</em>) and chickens (<em>moa</em>) are closely associated with
feasts and gifts and were traditionally eaten less often than vegetables and seafood.</p>

<h3>Land, tenure and who decides</h3>
<p>About four-fifths of land in Samoa is <strong>customary land</strong>, held by families under the authority of
their matai and not bought and sold like freehold property. A family decides what is grown and who may enter; a
farm visit usually needs agreement from the family or village; and benefits must be shared in ways they find fair.
<strong>You cannot design a farm-to-table experience on customary land without the consent of the people who hold
it.</strong></p>

<h3>Seasons, climate risk and pressures</h3>
<p>Samoa has a wetter season (about November–April, overlapping with the cyclone season) and a drier season
(about May–October). Cyclones in 1990 and 1991 showed how quickly crops, breadfruit trees and reefs can be
damaged; climate change adds heavier storms, drought, warmer seas and rising seas. Local food supply is also under
pressure from cheap imports, young people moving away from the plantation, the time cost of fresh food and
environmental damage. Markets such as the Fugalei Fresh Produce Market in Apia show the other side: places where
growers sell directly and visitors can meet producers.</p>

<table>
<thead><tr><th>Food group</th><th>Examples</th><th>Main contribution</th><th>Cultural note</th></tr></thead>
<tbody>
<tr><td>Root crops and starchy fruits</td><td>talo, ta'amu, ulu, fa'i, ufi</td><td>Carbohydrates, energy, fibre</td><td>Staples at daily meals and feasts</td></tr>
<tr><td>Leafy vegetables</td><td>lu'au, garden greens</td><td>Vitamins, minerals, fibre</td><td>Palusami is a signature dish</td></tr>
<tr><td>Fruits</td><td>papaya, mango, pineapple, banana, citrus</td><td>Vitamins, fibre</td><td>Eaten fresh, in desserts, as snacks</td></tr>
<tr><td>Seafood</td><td>fish, octopus, shellfish, seaweed, palolo</td><td>Protein, minerals such as iron</td><td>Seasonal and community-managed</td></tr>
<tr><td>Coconut products</td><td>drinking nut, cream, oil</td><td>Energy, flavour</td><td>Used in many dishes; portion size matters</td></tr>
<tr><td>Animal foods</td><td>pork, chicken</td><td>Protein, fat</td><td>Linked to ceremonies and festive meals</td></tr>
</tbody>
</table>

<h3>Why this matters for agritourism</h3>
<ul>
<li>Show the full chain: sea, plantation, kitchen and table.</li>
<li>Name the people: the family, the village and the person who taught the recipe.</li>
<li>Follow the seasons: serve what is in season rather than relying on imports.</li>
<li>Respect land and sea rules: ask first, follow village bylaws, avoid damaging gardens or reefs.</li>
</ul>
<p><strong>In practice — a plantation walk.</strong> A family farm invites visitors to walk the plantation before
lunch: taro and giant taro at different stages, a breadfruit tree, banana plants, how the family decides what to
plant and how the village protects the lagoon. Visitors help harvest taro leaves, and the host says clearly which
areas are family gardens visitors may enter and which are not.</p>

<h3>Learning activity: Food map and seasonal calendar</h3>
<p>For ten local foods (e.g. coconut, taro, banana, breadfruit, cassava, tuna, reef fish, octopus, taro leaves,
papaya), note the main source (land/plantation or sea), who produces or collects it, its season and its food group
(Worksheet C). Then, with a family member or neighbour, list five foods and the months when they are best
available.</p>

<h3>Self-check</h3>
<ul>
<li>Which three zones structure a traditional Samoan village food system?</li>
<li>What does each of root crops, vegetables and fruits, and seafood mainly provide?</li>
<li>Why did the 1993 taro blight matter for food security?</li>
<li>Why must agritourism planners ask permission before using customary land?</li>
</ul>`,
        aiSummaryPrompt:
          "Write a short summary (100–150 words): name three Samoan staple foods with the main nutrition benefit " +
          "of each, and explain in one or two sentences what a visitor would learn about the \"sense of place\" on " +
          "a plantation walk.",
        microQuizzes: [
          {
            id: "m5-l2-mq1",
            question: "What did the 1993 taro leaf blight show about Samoa's food system?",
            options: [
              "Dependence on one crop is fragile, and crop diversity is a form of food security",
              "Taro cannot be grown in Samoa",
              "Imported food is always more reliable than local food",
              "Breadfruit is more vulnerable to disease than taro",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m5-l3",
        title: "5.3 The Umu and the Samoan Table: Food Preparation, Ceremony and Food Heritage",
        content: `<h3>Learning objectives</h3>
<ul>
<li>describe the umu (earth oven) cooking method step by step, including the roles people play;</li>
<li>name and describe several traditional Samoan dishes and the occasions on which they are served;</li>
<li>explain the role of food in ceremonies and exchanges, including the Sunday feast;</li>
<li>explain why food knowledge is living cultural heritage, and what threatens it;</li>
<li>use the open, adapted or private test to decide what could be shared with visitors.</li>
</ul>
<p><em>Key terms:</em> umu, palusami, oka, to'ona'i, fa'alavelave, 'ava, intangible cultural heritage, staged authenticity.</p>

<h3>Cooking is more than a method</h3>
<p>The NUS presentation describes the umu as an earth oven that uses heated stones and leaves to slow-cook food,
preserving nutrients and flavour. That is correct, but the most important point is that <strong>the umu is also a
social event</strong>: it gathers family members around a shared task, follows a rhythm of roles and timing, and
produces food shared with the whole household and guests. Other methods sit alongside it: boiling, roasting over
fire or hot stones, wrapping food in leaves, preparing raw fish with citrus and coconut cream, and fermenting
breadfruit for storage. Food is served from woven baskets, leaves and wooden bowls (<em>umete</em>).</p>

<h3>The umu step by step</h3>
<p>An umu is usually prepared in the early morning, especially on Sundays before church, or the day before a major
event. Each family has its own way — treat this as an introduction, not a recipe.</p>
<ol>
<li><strong>Prepare the fire and the stones</strong> — firewood is stacked in a shallow pit or on the ground, volcanic stones are placed on top, and the fire burns until the stones are very hot.</li>
<li><strong>Prepare the food</strong> — taro, breadfruit and bananas are peeled or cleaned, fish and meat seasoned or wrapped, and taro leaves filled with coconut cream and folded into palusami parcels.</li>
<li><strong>Clear the embers and arrange the stones</strong> — burning wood is raked away and the hot stones spread evenly.</li>
<li><strong>Load the oven</strong> — sturdier foods such as root crops first, then wrapped and more delicate items, with layers of leaves separating food from stones.</li>
<li><strong>Cover and cook</strong> — banana leaves, coconut fronds and cloths or mats hold in the steam; the umu cooks slowly, often for an hour or more.</li>
<li><strong>Open and serve</strong> — the covers are lifted carefully and food is served first to those being honoured (Lesson 5.1).</li>
</ol>
<p><strong>Roles.</strong> In many families men mainly prepare the fire, stones and oven, women prepare many
wrapped dishes, the coconut cream and the table, and young people fetch, carry and clean. Roles are flexible and
are part of what young people learn by taking part. <strong>Why people value it:</strong> slow steaming uses very
little added fat, keeps juices and flavour, gives a smoky, earthy taste and feeds many people at once.
<strong>Safety:</strong> hot stones and open fires carry a real risk of burns — anyone leading an umu for visitors
must keep a safe distance, prepare food hygienically and manage children carefully.</p>
<div class="micro-quiz-slot" data-micro-quiz-id="m5-l3-mq1"></div>

<h3>A table of Samoan dishes</h3>
<table>
<thead><tr><th>Dish</th><th>Main ingredients</th><th>How it is made</th><th>Typical occasion</th></tr></thead>
<tbody>
<tr><td>Palusami</td><td>Taro leaves, coconut cream</td><td>Leaves filled with cream, wrapped and baked in the umu</td><td>Sunday meal, feasts</td></tr>
<tr><td>Umu-baked root crops</td><td>Taro, breadfruit, bananas, giant taro</td><td>Baked in the earth oven</td><td>Everyday and ceremonial meals</td></tr>
<tr><td>Oka</td><td>Raw fish, citrus juice, coconut cream, onion</td><td>Fish marinated in citrus, mixed with coconut cream</td><td>Meals, guests</td></tr>
<tr><td>Baked pork or chicken</td><td>Pork or chicken</td><td>Cooked in the umu</td><td>Feasts, ceremonies</td></tr>
<tr><td>Koko Samoa</td><td>Roasted local cocoa, hot water, sugar</td><td>Roasted cocoa ground, shaped into balls and dissolved in hot water</td><td>Breakfast and everyday drink</td></tr>
<tr><td>Panipopo</td><td>Flour, sugar, coconut cream</td><td>Sweet bread rolls baked in coconut cream</td><td>Breakfast, church events</td></tr>
</tbody>
</table>
<p>Food culture adapts: <em>pisupo</em> (tinned corned beef) is now common and sometimes added to palusami, and
<em>sapasui</em>, a noodle dish with Chinese influence, is served at celebrations. These adaptations are part of
living heritage, but they also raise health questions (Lesson 5.4).</p>

<h3>Food in ceremony and exchange</h3>
<ul>
<li><strong>The Sunday feast (to'ona'i)</strong> — the main meal of the week after church, often cooked in the umu.</li>
<li><strong>Life events</strong> — weddings, funerals, the bestowal of a matai title and church events are marked with large shared meals.</li>
<li><strong>Family exchanges (fa'alavelave)</strong> — relatives contribute food, fine mats (<em>'ie toga</em>), money and labour, and gifts are returned in due course: an obligation as well as a source of pride.</li>
<li><strong>The 'ava ceremony</strong> — the ceremonial drink of 'ava (kava) is served in strict order of rank, setting the tone of respect.</li>
<li><strong>Church occasions</strong> — White Sunday, Christmas and fundraising events involve special foods and shared meals.</li>
</ul>
<p>Because these events cost money and effort, a visitor experience should never reduce a ceremony to a menu.</p>

<h3>Food as living heritage</h3>
<p>UNESCO uses the term <strong>intangible cultural heritage</strong> for living knowledge, skills and practices
passed from one generation to the next. The palusami recipe is only a small part of it: heritage also includes
selecting the stones, building the fire, judging when the umu is ready, wrapping the leaves, sharing the food in
the right order and saying the words of thanks. It is fragile when knowledge is not passed on, when practices are
shortened or staged, or when materials change (foil for leaves, gas for stones, tinned for fresh). Culture is not a
museum — the important question is <strong>who decides, and whether the community benefits</strong>.</p>

<h3>What can be shared with visitors? The open, adapted and private test</h3>
<table>
<thead><tr><th>Circle</th><th>Question</th><th>Examples for discussion</th></tr></thead>
<tbody>
<tr><td>Open</td><td>Is this open to sharing with visitors as it is?</td><td>A palusami cooking demonstration or an umu meal prepared for visitors; a plantation walk; tasting koko Samoa</td></tr>
<tr><td>Adapted</td><td>Can it be shared only in a modified form?</td><td>A shortened welcome with food; an 'ava ceremony explained clearly as a demonstration; a lunch inspired by a feast</td></tr>
<tr><td>Private</td><td>Is it private or sacred?</td><td>Title-bestowal ceremonies, funeral meals, family protocols and any practice the family or village asks to keep private</td></tr>
</tbody>
</table>
<p>The right answer always comes from the family and village that hold the practice, not from a tour operator or a
textbook. This connects to <strong>staged authenticity</strong> (Dean MacCannell): a performance that looks like
everyday life but is arranged for visitors. Staging is not wrong — a cooking class is staged — but it becomes a
problem when it is hidden, or when private life is exposed without agreement. Honest labelling ("this is a
demonstration prepared for visitors") protects guests and hosts.</p>

<h3>Women, men, youth and elders</h3>
<p>Elders hold knowledge of how things used to be done; women often hold deep knowledge of gardens, reef gathering,
wrapped dishes and everyday cooking; men often lead umu preparation and plantation work; and young people carry the
future of the practice. Agritourism is fairer and more sustainable when all of these groups take part in planning,
are paid for their work and are credited for their knowledge. (Module 6 explores women's leadership and
entrepreneurship in more depth.)</p>

<h3>In practice: a half-day umu experience</h3>
<table>
<thead><tr><th>Time</th><th>Step</th><th>Visitor role</th></tr></thead>
<tbody>
<tr><td>Early morning</td><td>Gathering firewood and preparing the stones</td><td>Watch and help with simple tasks</td></tr>
<tr><td>Morning</td><td>Preparing taro, breadfruit, fish and palusami</td><td>Peel, wrap and ask questions</td></tr>
<tr><td>Morning</td><td>Loading and covering the umu</td><td>Observe from a safe distance</td></tr>
<tr><td>Late morning</td><td>Welcome and a short story about the family and the food</td><td>Listen and ask questions</td></tr>
<tr><td>Midday</td><td>Opening the umu, blessing and shared meal</td><td>Eat together, following the host's lead</td></tr>
<tr><td>Afternoon</td><td>Farewell and feedback</td><td>Share comments</td></tr>
</tbody>
</table>
<p>All steps are led by the host family. <em>Which parts belong in the open circle? What would the family need to
decide before offering it?</em></p>

<h3>Learning activity: Three circles</h3>
<p>List five food practices in your community. Place each in the open, adapted or private circle and write who in
the community should make the decision (Worksheet A). Optional group task: create a 30–60 second Reel showing the
six stages of the umu in the correct order, with captions, respectful filming and at least one cultural
explanation.</p>

<h3>Self-check</h3>
<ul>
<li>Why is the umu described as both a cooking method and a social event?</li>
<li>What are the main ingredients of palusami?</li>
<li>What does intangible cultural heritage mean, and why is food knowledge a good example?</li>
<li>What are the three circles, and who answers the questions?</li>
</ul>`,
        aiSummaryPrompt:
          "Write a short summary (about 150 words): describe the six steps of the umu method, name two roles people " +
          "play, and explain why the umu is also a social event.",
        microQuizzes: [
          {
            id: "m5-l3-mq1",
            question: "In the umu, which foods usually go onto the hot stones first?",
            options: [
              "Sturdier foods such as root crops",
              "Delicate wrapped foods such as palusami",
              "Raw fish for oka",
              "Koko Samoa",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m5-l4",
        title: "5.4 Food, Nutrition and Climate: Healthy and Sustainable Food Futures",
        content: `<h3>Learning objectives</h3>
<ul>
<li>explain why the traditional Samoan diet is regarded as nutritious, and where it needs a more careful look;</li>
<li>describe the nutrition transition in Samoa, its main causes, and its health and cultural consequences;</li>
<li>propose healthy practical choices based on local foods, without blaming individuals;</li>
<li>explain the impacts of climate change on Samoa's food system and agritourism;</li>
<li>recommend sustainable, climate-resilient food practices that combine traditional knowledge with modern approaches.</li>
</ul>
<p><em>Key terms:</em> nutrition transition, processed food, non-communicable disease (NCD), food security, food
environment, climate change, sustainability, climate resilience, food solutions.</p>

<h3>Part A — Food and nutrition</h3>
<h4>What made the traditional diet nutritious?</h4>
<p>A typical traditional meal combines a starchy root crop or breadfruit, a leafy vegetable, fish or other
seafood, and fruit, with coconut as flavouring. Its key features were whole, unprocessed foods; variety; fibre; low
added sugar and salt (flavour from coconut, citrus, herbs, smoke and leaves); gentle cooking in the umu or by
boiling; and daily physical activity in gardening, fishing, carrying and cooking. The NUS presentation summarises
this by saying traditional meals were balanced with physical activity, which supported strong bodies.</p>
<p><strong>A more careful look.</strong> It is easy to romanticise the past: coconut cream, pork and feast foods
are energy-dense; traditional life was not free of illness or hardship; and a diet is a <em>pattern</em> — the mix
of foods, portions and lifestyle determines health, not a single food.</p>

<h4>The nutrition transition</h4>
<p>In recent decades Samoa, like many Pacific countries, has experienced a <strong>nutrition transition</strong>:
a shift from traditional diets of local foods towards diets with many imported and processed foods — tinned corned
beef (pisupo), instant noodles, white rice and bread, fatty imported meat and sugary drinks. This is not simply a
matter of personal choice. Drivers include imports and trade (cheap, shelf-stable products), the cash economy,
time and convenience, urbanisation and migration, reduced physical activity, marketing and the food environment,
and the cost and availability of fresh local food.</p>
<div class="micro-quiz-slot" data-micro-quiz-id="m5-l4-mq1"></div>

<h4>Health and cultural consequences</h4>
<p>The transition is linked to rising <strong>non-communicable diseases (NCDs)</strong>: obesity, type 2 diabetes,
hypertension and heart disease, which burden families, communities and the health system. Population surveys found
obesity among Samoan men aged 25–64 rising from about 28% in 1978 to about 53% in 2013, with levels among women
higher still. Survey methods differ, so check the most recent national survey (e.g. WHO STEPS, Samoa Demographic
and Health Survey) before quoting numbers. <strong>A note on language:</strong> obesity and diabetes have many
causes — genetics, history, poverty, food prices and lifestyle. Use respectful language and focus on conditions
and solutions, not on blaming people.</p>
<p>The change in diet is also a change in knowledge: younger generations risk losing traditional farming, fishing
and cooking practices. Skills are learned by doing, language and stories follow food, crop diversity declines and
identity weakens. A strategy that improves nutrition without respecting culture is unlikely to last, and one that
preserves culture without caring about health is incomplete.</p>

<h4>Case study: the turkey tail policy</h4>
<p>Turkey tails, a cheap and fatty imported cut, became widely eaten in Samoa. In 2007, concerned about obesity,
Samoa banned their import. During negotiations to join the World Trade Organization the ban became a trade issue;
Samoa joined in 2012 and the ban was repealed in 2013, after which the government used import duties and nutrition
policy and education instead. The case shows that price and availability shape diets as much as taste, that public
health goals can conflict with trade rules, and that local foods compete poorly if they cost more than cheap
imports. <em>Which policy tools would you choose to promote healthier eating while respecting culture and
livelihoods?</em></p>

<h4>A traditional and a modern plate</h4>
<table>
<thead><tr><th>Aspect</th><th>Traditional meal (umu-baked taro, fish, palusami, fruit)</th><th>Modern processed meal (instant noodles, tinned meat, sugary drink)</th></tr></thead>
<tbody>
<tr><td>Processing</td><td>Fresh or lightly prepared</td><td>Highly processed and packaged</td></tr>
<tr><td>Fibre and vitamins</td><td>Higher</td><td>Usually lower</td></tr>
<tr><td>Added sugar and salt</td><td>Low</td><td>Often high</td></tr>
<tr><td>Fat</td><td>From coconut and fish; moderate in typical portions</td><td>Often higher in saturated fat</td></tr>
<tr><td>Cost</td><td>Depends on whether grown at home or bought</td><td>Often cheap per serving</td></tr>
<tr><td>Social and cultural value</td><td>High: shared, local, tied to knowledge</td><td>Low</td></tr>
<tr><td>Environmental footprint</td><td>Local, low packaging</td><td>Imported, packaged, more waste</td></tr>
</tbody>
</table>
<p>This is a simplified teaching comparison, not a claim that every traditional meal is healthy or every modern
meal is not.</p>

<h4>Healthy choices based on local foods</h4>
<ul>
<li>fill more of the plate with vegetables, leafy greens, fruit and fish, with root crops as the energy food;</li>
<li>use coconut cream and oil in moderation, and choose baking, steaming or boiling over frying;</li>
<li>choose water and unsweetened drinks instead of sugary drinks;</li>
<li>keep processed and tinned foods for occasional use and look for lower-salt options;</li>
<li>plant a home garden, even a small one, and keep active;</li>
<li>follow national dietary guidelines and Ministry of Health advice for individual needs.</li>
</ul>
<p>This is general educational information, not personal medical advice. Individual choices work best when the
wider environment supports them — affordable local produce, accessible markets, healthy school canteens and
community events that include local foods.</p>

<h3>Part B — Climate change and food culture sustainability</h3>
<p><strong>Climate change</strong> refers to long-term changes in temperature, rainfall, sea levels and weather
patterns. <strong>Sustainability</strong> means using natural resources responsibly so they meet today's needs
without reducing the ability of future generations to meet theirs — using water and land carefully, protecting soil
and coasts, growing local and seasonal crops, reducing harmful chemicals and food waste, using renewable energy and
supporting local producers.</p>
<h4>Climate impacts on the Samoan food system</h4>
<ul>
<li>higher temperatures affect crop growth and livestock;</li>
<li>heavy rainfall and flooding damage crops, farms and roads, while drought reduces water for crops and animals;</li>
<li>cyclones and strong winds destroy farms, fruit trees and infrastructure;</li>
<li>sea-level rise and saltwater intrusion affect coastal farms and freshwater;</li>
<li>changing ocean conditions affect fish and other marine foods;</li>
<li>crop damage can raise food prices and increase food insecurity.</li>
</ul>
<h4>Traditional knowledge and modern practice</h4>
<p>Traditional knowledge — seasonal planting and harvest times, choosing crops suited to local conditions, the umu,
preserving food by drying and smoking, using local plants and marine resources, and sharing food through aiga and
nu'u — can be strengthened by climate-smart farming, better water management, sustainable fishing, food safety and
hygiene, improved storage and processing, and solar energy. Combining the two protects food culture while improving
food security.</p>
<h4>Food solutions</h4>
<p>Practical solutions include climate-resilient and locally adapted crops, compost, rainwater harvesting,
agroforestry and mixed cropping, buying local, reducing food waste, value-added products and renewable energy. For
agritourism, these solutions can themselves become visitor experiences: farm tours, cooking demonstrations,
food-growing activities, composting demonstrations and workshops on local food preservation.</p>

<h3>Learning activities</h3>
<ul>
<li><strong>Traditional meal vs. fast food:</strong> compare a Sunday to'ona'i with a takeaway meal using the table above — ingredients, fibre, salt and sugar, cost, and connection to family and hospitality.</li>
<li><strong>Climate scenario:</strong> "A cyclone has damaged a village's taro and banana crops and cut the road to the market." What food problems follow, how are families and tourists affected, and how could the community recover and prepare for the next cyclone?</li>
<li><strong>Sustainability sorting:</strong> sort composting, overfishing, rainwater harvesting, burning plastic, growing local crops, solar energy, excessive pesticide use and buying imports when local food exists into sustainable or unsustainable, and suggest alternatives.</li>
</ul>

<h3>Key points</h3>
<ul>
<li>The traditional Samoan diet is based on fresh, local, seasonal foods, cooked gently and balanced by activity.</li>
<li>The nutrition transition is driven by price, convenience, trade, urbanisation and changing lifestyles, and is linked to rising NCDs.</li>
<li>Healthy choices need a supportive food environment as well as individual action.</li>
<li>Climate change threatens crops, reefs and food security; traditional knowledge combined with climate-smart practice builds resilience.</li>
</ul>

<h3>Self-check</h3>
<ul>
<li>What is the nutrition transition? Name four health conditions linked to it.</li>
<li>Give three drivers of the shift that are not simply personal choice.</li>
<li>Name three climate change impacts on Samoa's food system.</li>
<li>Give two food solutions that could also become agritourism experiences.</li>
</ul>`,
        aiSummaryPrompt:
          "Write a short summary (100–150 words): explain the nutrition transition in Samoa with two of its causes " +
          "and two health consequences, and suggest one climate-smart, local-food solution a village could also " +
          "offer to visitors.",
        microQuizzes: [
          {
            id: "m5-l4-mq1",
            question: "Which of these is a driver of Samoa's nutrition transition that is NOT simply personal choice?",
            options: [
              "Cheap, widely available imported and shelf-stable foods",
              "A lack of interest in taste",
              "Higher daily physical activity",
              "More time available for gardening",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m5-l5",
        title: "5.5 From Plantation to Plate: Entrepreneurship, Agritourism and Safeguarding Food Heritage",
        content: `<h3>Learning objectives</h3>
<ul>
<li>explain how entrepreneurship can preserve and promote Samoa's traditional food culture through local food businesses and value-added products;</li>
<li>define agritourism and farm-to-table, and explain with examples how they link health, culture and livelihoods in Samoa;</li>
<li>map a simple value chain from plantation to plate and identify who benefits;</li>
<li>design a respectful, healthy and sustainable food experience and audit it against consent and benefit-sharing criteria.</li>
</ul>
<p><em>Key terms:</em> value-added product, agritourism, farm-to-table, Farm to Fork, gastronomy tourism, value
chain, leakage, consent, benefit-sharing, cultural appropriation.</p>

<h3>Part A — Entrepreneurship and food culture</h3>
<p>Samoa has many opportunities for small businesses based on locally produced food, and agritourism connects
farmers and food producers directly with visitors and local consumers: farm tours and farm-to-table meals, local
food cafés, traditional catering, fruit and vegetable stalls, coconut, cocoa and vanilla products, juices, jams and
preserves, cooking classes, and sales to markets, hotels and resorts.</p>
<p><strong>Value addition</strong> means processing or improving a local product so it can be sold at a higher
price: taro → chips, flour or packaged cooked taro; banana → chips, flour or banana bread; coconut → oil, cream,
milk or soap; breadfruit → flour or chips; pineapple and other fruits → juice, jam or dried fruit; cocoa → cocoa
products and chocolate; cassava → chips or flour. Value-added products reduce food losses and give farmers extra
income.</p>
<p><strong>Climate-smart agritourism</strong> uses resilient crops, compost, rainwater, solar power, tree planting,
less plastic and local buying. <strong>Food waste</strong> wastes the water, land, energy and labour used to
produce food, raises costs and produces greenhouse gases in landfills; businesses can reduce it by planning
quantities, storing food properly, using leftovers safely, composting and educating visitors. Farmers and
communities can take part by supplying hotels and restaurants, selling directly to tourists, joining farmers'
markets, offering farm tours and cooking demonstrations, forming cooperatives and promoting products online.</p>
<p><strong>Samoan examples to explore:</strong> Ifieleele Plantation, Sunshine Pacific Farm, Aleisa Coffee Samoa
and the Savaia Giant Clam Sanctuary (see the module's supplementary materials).</p>
<div class="micro-quiz-slot" data-micro-quiz-id="m5-l5-mq1"></div>

<h3>Part B — Agritourism and farm-to-table in Samoa</h3>
<p><strong>Agritourism</strong> connects agriculture and tourism: visitors go to farms, plantations and rural
communities to see how food is grown, learn how it is prepared, take part and eat fresh local food — farm and
plantation tours, hands-on harvesting, umu demonstrations, tastings and cooking classes, market visits, food trails
and village stays. It overlaps with <strong>gastronomy tourism</strong> (food-linked experiences), cultural tourism
and ecotourism. <strong>Farm-to-table</strong> describes a short, transparent chain from producer to plate. The
AGRI-TOUR project — "Agriculture-Tourism Alliance: From Farm to Fork Strategy Applied in the Pacific Island
Countries" — is inspired by the EU's <strong>Farm to Fork Strategy</strong> for fairer, healthier and more
environmentally friendly food systems.</p>
<p><strong>Agritourism in Samoa</strong> has developed through a 2016 Samoa Tourism Authority (STA) policy workshop
that recommended an agritourism action plan, and a Gastronomy Tourism Workshop hosted by the Pacific Tourism
Organisation (SPTO) and STA in November 2025, where the National University of Samoa presented its agritourism
training and research and STA announced plans for a dedicated taskforce. In practice it includes cocoa plantation
tours, food trails, umu demonstrations and partnerships in which hotels and restaurants buy local produce.</p>
<table>
<thead><tr><th>How agritourism helps</th><th>What happens</th><th>What is needed</th></tr></thead>
<tbody>
<tr><td>1. Encourages local, fresh food</td><td>Visitors and communities eat fresh crops, fruit and local fish</td><td>Reliable supply, quality, fair prices</td></tr>
<tr><td>2. Educates visitors and locals</td><td>People learn the value of traditional foods and cooking skills</td><td>Skilled hosts, accurate nutrition information</td></tr>
<tr><td>3. Supports farmers and food systems</td><td>Income for farmers, more demand, stronger food security</td><td>Fair payment, regular orders, inclusive planning</td></tr>
<tr><td>4. Preserves traditional knowledge</td><td>Umu cooking, indigenous crops and practices are valued</td><td>Community consent, elders and youth involved</td></tr>
<tr><td>5. Shifts demand towards healthy food</td><td>Hotels and restaurants buy more local ingredients</td><td>Procurement agreements, chef training, food safety</td></tr>
</tbody>
</table>
<p><strong>A realistic view.</strong> Agritourism is a useful tool, not a miracle cure: it is small in scale,
benefits shrink through <strong>leakage</strong> (income leaving the local economy through imported food or outside
owners), benefits can be unequal, seasons and shocks disrupt it, and poorly designed experiences can commercialise
what should stay private. Island challenges also include skills, quality standards, transport and cold storage
(especially in Savai'i and outer areas), land consent and coordination between agriculture, fisheries, tourism,
health and village authorities.</p>

<h4>Following one product: cocoa from plantation to plate</h4>
<table>
<thead><tr><th>Step</th><th>What happens</th><th>Visitor opportunity</th></tr></thead>
<tbody>
<tr><td>Growing</td><td>Cocoa trees tended on family land</td><td>Walk through the plantation</td></tr>
<tr><td>Harvesting</td><td>Ripe pods picked and opened</td><td>Try opening a pod</td></tr>
<tr><td>Fermenting and drying</td><td>Beans fermented and dried</td><td>See and smell the process</td></tr>
<tr><td>Roasting and grinding</td><td>Dried beans roasted and ground</td><td>Watch and taste</td></tr>
<tr><td>Making and serving</td><td>Ground cocoa turned into koko Samoa or chocolate</td><td>Taste and buy</td></tr>
<tr><td>Selling</td><td>Sold at markets, shops and to visitors</td><td>Buy directly from the producer</td></tr>
</tbody>
</table>
<p>At each step ask <strong>who earns, who decides, who carries the work and who is named</strong>.</p>

<h3>Part C — Designing a respectful, healthy and sustainable food experience</h3>
<h4>Six guiding principles</h4>
<ol>
<li><strong>Consent first</strong> — the family and village that hold the knowledge, land and sea decide whether and how to take part; consent is informed, given before planning, and can be withdrawn.</li>
<li><strong>Respect for protocol and meaning</strong> — serving order, blessings, dress and ceremonies are honoured; what is private stays private.</li>
<li><strong>Honesty about what is staged.</strong></li>
<li><strong>Healthy, local and seasonal food.</strong></li>
<li><strong>Environmental care</strong> — land, reef and water are protected, and waste is kept low.</li>
<li><strong>Fair benefit</strong> — income, credit and decisions are shared with those who do the work and hold the knowledge, including women, young people and elders.</li>
</ol>
<p>Sustainability has three dimensions that must hold together: <strong>environmental</strong> (buy local, avoid
single-use plastic, follow fisheries rules, limit group size), <strong>economic</strong> (fair prices, written
benefit-sharing, local hosts) and <strong>cultural</strong> (consent, elders and youth involved, correct names and
stories). A project that protects soil but takes recipes without permission is not sustainable — nor is one that
earns money but harms the reef.</p>
<p><strong>The experience.</strong> Memorable experiences involve visitors actively (Pine and Gilmore's "experience
economy"). A simple structure: (1) welcome and protocol briefing, (2) place and story told by a host, (3) hands-on
activity, (4) shared meal served by custom, (5) farewell, local products and feedback. Send visitors a short
briefing in advance (greetings, serving order, modest dress, asking before photographs, quiet times such as Sunday
worship and evening prayer, <em>sa</em>). Keep groups small. Build the menu around root crops, greens, fruit and
fish, use coconut cream moderately, offer water or coconut water, ask about allergies and dietary or religious needs,
and follow food safety rules.</p>
<p><strong>Ethics.</strong> <strong>Cultural appropriation</strong> means using a culture's recipes, names,
designs or stories without credit, consent or fair benefit. Good practice: ask first, record who gave consent,
credit recipes and stories to named families or villages, share income, and respect a "no".</p>
<p><strong>The benefit audit.</strong> Test any activity with four questions — <strong>who earns, who decides, who
carries the burden, who is credited?</strong> — then score the planning checklist (yes / partly / no) and write
three actions to improve the weakest items. After each event, gather feedback, keep simple records and review at
least once a year with the family and village; if a practice causes discomfort, remove it.</p>

<h3>Capstone activity: design a food trail or farm experience</h3>
<ol>
<li>Choose the place and host partners (family, farm, village, cooperative or women's committee).</li>
<li>Map consent: place each food, story and place in the open, adapted or private circle and note who decides.</li>
<li>Draft a two-hour or half-day storyboard (Worksheet B): welcome, place and story, hands-on activity, shared meal, farewell.</li>
<li>Plan a local, seasonal, healthy menu and note allergies and dietary needs.</li>
<li>Plan benefits: how income is shared, who is trained, who is credited.</li>
<li>Check sustainability and risks: environment, safety, storms or low demand.</li>
<li>Complete the benefit audit and pitch your proposal in 5–7 minutes.</li>
</ol>

<h3>Key points</h3>
<ul>
<li>Entrepreneurship and value-added products can preserve traditional foods while creating income.</li>
<li>Agritourism links health, culture and livelihoods, but only with the right conditions; leakage and unequal benefits are real risks.</li>
<li>Designing a food experience starts with the consent of those who hold the knowledge, land and sea.</li>
<li>Fair benefit-sharing is judged by four questions: who earns, who decides, who carries the burden and who is credited.</li>
</ul>

<h3>Self-check</h3>
<ul>
<li>What is a value-added product? Give two examples using Samoan crops.</li>
<li>Define agritourism and farm-to-table. What is leakage, and why is it a problem?</li>
<li>Name the six guiding principles and the three dimensions of sustainability.</li>
<li>What is cultural appropriation, and how can it be avoided?</li>
</ul>
<p><strong>Tofa soifua!</strong> You have reached the end of the learning units — take the module proficiency
test when you are ready.</p>`,
        aiSummaryPrompt:
          "Write a short proposal (100–150 words) for a food experience in a Samoan village or farm (real or " +
          "imagined): what visitors do, what stays private, and how you would answer the four benefit questions " +
          "(who earns, who decides, who carries the burden, who is credited).",
        microQuizzes: [
          {
            id: "m5-l5-mq1",
            question: "Which is an example of value addition?",
            options: [
              "Turning breadfruit into breadfruit flour or chips",
              "Selling raw taro at the same price",
              "Importing chips to sell to tourists",
              "Leaving surplus bananas to rot",
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "m5-l6",
        title: "5.6 Module summary and proficiency test",
        content: `<h3>Module summary</h3>
<ul>
<li><strong>Food and fa'a Samoa</strong> — food expresses respect (fa'aaloalo), love and care (alofa) and service (tautua); chiefs, church leaders and government leaders are served first at formal meals.</li>
<li><strong>Land, sea and seasons</strong> — root crops for energy, fruits and vegetables for vitamins, seafood for protein and minerals; about four-fifths of land is customary land, so consent is central.</li>
<li><strong>The umu and the table</strong> — the umu is both a slow-cooking method and a social event; communities decide what is open, adapted or private.</li>
<li><strong>Nutrition and climate</strong> — the nutrition transition is linked to rising NCDs; climate change threatens crops and reefs; traditional knowledge plus climate-smart practice builds resilience.</li>
<li><strong>From plantation to plate</strong> — entrepreneurship, value addition and agritourism can support farmers and healthy food when consent, fair benefit-sharing and honesty about staging are in place.</li>
</ul>
<h3>Proficiency test</h3>
<p>The test has 10 multiple-choice questions with one correct answer each. Pass mark: 7 out of 10. Suggested time:
about 30 minutes.</p>`,
        quiz: {
          questions: [
            {
              id: "m5-q1",
              question: "In fa'a Samoa, which statement best describes the role of food at formal meals?",
              options: [
                "Food is mainly a matter of nutrition and has no social rules",
                "Food expresses respect, hospitality and collective responsibility, and serving order reflects social structure",
                "Food is a private matter for each individual",
                "Food is mainly a commercial product",
              ],
              correctIndex: 1,
            },
            {
              id: "m5-q2",
              question: "Which groups are traditionally served first at formal Samoan meals?",
              options: [
                "Whoever arrives first",
                "The young people who did the cooking",
                "Overseas visitors only",
                "Chiefs, church leaders and ministers, and government leaders",
              ],
              correctIndex: 3,
            },
            {
              id: "m5-q3",
              question: "Which pairing of food group and main nutrition contribution matches the NUS presentation?",
              options: [
                "Root crops: carbohydrates for energy",
                "Fresh fruits and vegetables: protein and iron",
                "Seafood: mainly carbohydrates",
                "Coconut cream: mainly vitamins",
              ],
              correctIndex: 0,
            },
            {
              id: "m5-q4",
              question: "Why does customary land matter for agritourism planning in Samoa?",
              options: [
                "The government owns all farms and decides what is grown",
                "Visitors may enter any family garden they find",
                "Families and villages hold the land, so their consent is needed before it is used",
                "Customary land cannot be used to grow food",
              ],
              correctIndex: 2,
            },
            {
              id: "m5-q5",
              question: "What is the umu?",
              options: [
                "A raw fish dish with coconut cream",
                "An earth oven that uses heated stones and leaves to slow-cook food",
                "A ceremonial bowl for kava",
                "A taro leaf parcel with coconut cream",
              ],
              correctIndex: 1,
            },
            {
              id: "m5-q6",
              question: "Which action best respects food heritage when designing a visitor experience?",
              options: [
                "Shortening a ceremonial meal so it fits the tour schedule",
                "Presenting a demonstration as a private family ritual",
                "Selling a family's recipe under the business's own name",
                "Asking the community what is open, adapted or private, and letting hosts tell their own stories",
              ],
              correctIndex: 3,
            },
            {
              id: "m5-q7",
              question: "What does the nutrition transition in Samoa refer to?",
              options: [
                "A shift from traditional diets of local foods to diets with many imported, processed foods",
                "A move from cooked food to raw food",
                "An increase in daily physical activity",
                "A shift from eating fish to eating only crops",
              ],
              correctIndex: 0,
            },
            {
              id: "m5-q8",
              question: "Which set of conditions is linked to the shift to processed foods?",
              options: [
                "Taro leaf blight and cyclone damage",
                "Higher physical activity and better fibre intake",
                "Rising obesity, type 2 diabetes, hypertension and heart disease",
                "Faster growth of coral reefs",
              ],
              correctIndex: 2,
            },
            {
              id: "m5-q9",
              question: "Which statement best defines agritourism?",
              options: [
                "Any holiday near a hotel swimming pool",
                "Tourism based on farms, food and cultural experiences, where visitors learn how food is grown and enjoy local produce",
                "Tourism that consists only of buying souvenirs",
                "Tourism that serves imported food to visitors",
              ],
              correctIndex: 1,
            },
            {
              id: "m5-q10",
              question: "Which four questions test whether benefits from a food experience are shared fairly?",
              options: [
                "Who pays, who travels, who cooks, who photographs?",
                "How many visitors, how long, how far, how cheap?",
                "Who is oldest, who is richest, who is nearest, who is first?",
                "Who earns, who decides, who carries the burden, who is credited?",
              ],
              correctIndex: 3,
            },
          ],
        },
      },
    ],
    supplementaryMaterials: [
      {
        id: "m5-mat1",
        type: "fact-sheet",
        title: "Glossary of Samoan food culture",
        note: "Real content — NUS Module \"Samoan Culture of Food — Farm to table\", Glossary",
        body:
          "<dl>" +
          MODULE5_GLOSSARY.map(({ term, definition }) => `<dt>${term}</dt><dd>${definition}</dd>`).join("") +
          "</dl>",
        glossaryGame: MODULE5_GLOSSARY,
      },
      {
        id: "m5-mat2",
        type: "fact-sheet",
        title: "Fact sheet: Samoan food at a glance",
        note: "Real content — NUS Module, Supplementary material S4",
        body: `<table>
<thead><tr><th>Topic</th><th>Key facts</th></tr></thead>
<tbody>
<tr><td>Way of life</td><td>Fa'a Samoa organises life around the aiga (family), matai (chiefs), nu'u (village) and lotu (church)</td></tr>
<tr><td>Values at the table</td><td>Fa'aaloalo (respect), alofa (love and care), tautua (service)</td></tr>
<tr><td>Serving order</td><td>Chiefs, church leaders and ministers, and government leaders are served first at formal meals; children are honoured on White Sunday</td></tr>
<tr><td>Weekly feast</td><td>To'ona'i, the Sunday meal after church, often cooked in an umu</td></tr>
<tr><td>Staples</td><td>Talo (taro), ta'amu (giant taro), ulu (breadfruit), fa'i (banana), ufi (yam), coconut</td></tr>
<tr><td>Sea foods</td><td>Fish, octopus, shellfish, seaweed, and the seasonal palolo</td></tr>
<tr><td>Cooking</td><td>Umu earth oven with hot stones and leaves; boiling; roasting; raw fish dishes</td></tr>
<tr><td>Signature dishes</td><td>Palusami, oka, umu-baked root crops, baked pork, koko Samoa, panipopo</td></tr>
<tr><td>Land</td><td>About four-fifths of land is customary land held by families under matai</td></tr>
<tr><td>Diet change</td><td>More imported and processed foods; rising obesity, type 2 diabetes, hypertension and heart disease</td></tr>
<tr><td>Agritourism</td><td>Food and gastronomy workshops, farm and cocoa tours, food trails, cooking demonstrations, farmer and tourism partnerships</td></tr>
<tr><td>Key idea</td><td>Agritourism links health, culture and livelihoods and encourages a return to nutritious traditional foods</td></tr>
</tbody>
</table>`,
      },
      {
        id: "m5-mat3",
        type: "case-study",
        title: "Case studies: cocoa tour, 2025 Gastronomy Tourism Workshop, turkey tail policy, Pacific comparisons",
        note: "Real content — NUS Module, Supplementary material S1",
        body: `<h4>Case 1: A cocoa plantation tour in Samoa</h4>
<p>Visitors walk through a family cocoa plantation, learn how pods are harvested, fermented, dried and roasted, and
taste koko Samoa and chocolate. The tour links a crop, a family, a place and a product in one story.
<em>Which parts of the farm give visitors a sense of place? What should be behind the scenes? Who earns at each
step?</em></p>
<h4>Case 2: The 2025 Gastronomy Tourism Workshop, Samoa</h4>
<p>On 19 November 2025 the Pacific Tourism Organisation (SPTO) and the Samoa Tourism Authority (STA) hosted a
Gastronomy Tourism Workshop focused on localising cuisine in the visitor experience, developing food trails and
integrating culinary heritage into sustainable itineraries. Tour operators, hoteliers, small businesses, NGOs and
training institutions took part, and the National University of Samoa presented its agritourism training and
research. Participants discussed a national agritourism strategy, and STA announced plans for a dedicated
taskforce. <em>Who should be at the table when a national agritourism strategy is written? What role should
villages and women's committees play?</em></p>
<h4>Case 3: The turkey tail policy</h4>
<p>In 2007 Samoa banned imports of turkey tails because of health concerns. During negotiations to join the WTO the
ban became a trade issue and was removed as part of the accession process (accession in 2012; ban repealed in
2013), with high import duties used instead. The Ministry of Health later commissioned a study on a trade-compliant
nutrition policy. <em>Why were turkey tails popular? What alternatives to a ban could improve diets without
harming livelihoods or culture?</em></p>
<h4>Case 4: Pacific comparisons</h4>
<p>In Fiji, an ACIAR-supported programme helped five agritourism businesses become market-ready, including a
crop-to-cup coffee tour near Sigatoka where guests see beans being dried. In Vanuatu, a project under the banner of
Regenerative Vanua has been recognised for building regenerative agritourism and gastronomy experiences while
respecting Indigenous knowledge systems. <em>What can Samoan hosts learn from these examples? How can tourism
support Indigenous knowledge without taking it over?</em></p>`,
      },
      {
        id: "m5-mat4",
        type: "checklist",
        title: "Checklist: planning a Samoan food experience",
        note: "Real content — NUS Module, Supplementary material S2",
        checklistItems: [
          "The family and village have agreed which foods, stories and places are shared, and who gave consent is recorded",
          "A host from the community leads the storytelling",
          "The programme says honestly what is a demonstration and what is daily life",
          "Ingredients are local and seasonal wherever possible",
          "The menu is built around local root crops, greens, fruit and fish, with moderate coconut cream and no sugary drinks",
          "Visitors take part actively (harvest, prepare, cook or eat together)",
          "Visitors receive a briefing on protocol before arrival",
          "Allergy, dietary and religious needs are asked in advance",
          "Safety rules are in place for the umu (fire, hot stones, children) and for food hygiene",
          "Waste is reduced, and leaves, baskets and reusable items replace single-use plastic",
          "Income is shared fairly, and the split is written down",
          "Women, young people and elders have roles and are credited",
          "Group size respects the land, reef and community",
          "Feedback from hosts and visitors is collected after each event",
        ],
      },
      worksheetMaterialM5("m5-mat5", "Worksheet A – Three circles: open, adapted or private", [
        "Food practice 1 — open / adapted / private, who decides, and why",
        "Food practice 2 — open / adapted / private, who decides, and why",
        "Food practice 3 — open / adapted / private, who decides, and why",
        "Food practice 4 — open / adapted / private, who decides, and why",
        "Food practice 5 — open / adapted / private, who decides, and why",
      ]),
      worksheetMaterialM5("m5-mat6", "Worksheet B – Experience storyboard (two-hour food experience)", [
        "1 Welcome — what happens, who hosts, story told, what stays private",
        "2 Place and story — what happens, who hosts, story told, what stays private",
        "3 Hands-on activities — what happens, who hosts, story told, what stays private",
        "4 Shared meal — what happens, who hosts, story told, what stays private",
        "5 Farewell and feedback — what happens, who hosts, story told, what stays private",
      ]),
      worksheetMaterialM5("m5-mat7", "Worksheet C – Nutrition matching and food map", [
        "Talo (taro) — main contribution, where it comes from, season",
        "Ulu (breadfruit) — main contribution, where it comes from, season",
        "Taro leaves — main contribution, where it comes from, season",
        "Papaya — main contribution, where it comes from, season",
        "Fish — main contribution, where it comes from, season",
        "Coconut cream — main contribution, where it comes from, season",
      ]),
      {
        id: "m5-mat8",
        type: "worksheet",
        title: "Interview guide: elders and food change",
        note: "Real content — NUS Module, Supplementary material S6. Interview an elder, farmer, fisher or cook for about 20 minutes, with permission to record; afterwards write a 150-word summary and thank the interviewee.",
        worksheetFields: [
          "What foods did you eat most when you were a child?",
          "Who taught you to grow, catch or prepare them?",
          "Which foods do you eat less now, and why?",
          "What do you think changed the way families eat?",
          "When is the umu prepared in your family, and who does what?",
          "What would you like young people to know about traditional food?",
          "What parts of food culture would you share with visitors, and what would you keep private?",
          "150-word summary of the interview (with quotes you have permission to use)",
        ],
      },
      {
        id: "m5-mat9",
        type: "photo-story",
        title: "Photo story brief: one dish from plantation or reef to table",
        note: "Real content — NUS Module, Supplementary material S5",
        body:
          "<p>Create six to ten photographs telling the story of one dish from plantation or reef to table: the " +
          "place, the producer, the preparation, the meal and the people. Add a one-line caption to each. Obtain " +
          "written consent from everyone shown, avoid photographing sacred items or ceremonies without permission, " +
          "and credit the photographer and the family. Submit as a short slide deck or PDF.</p>",
      },
      {
        id: "m5-mat10",
        type: "infographic",
        title: "Infographic briefs: the traditional and modern plate; from plantation to plate",
        note: "Real content — NUS Module, Supplementary material S7 (briefs; final graphics to be produced)",
        body:
          "<p><strong>Infographic 1: The traditional plate and the modern plate.</strong> One page comparing two " +
          "meals: what is on each plate, where each food comes from, and the main differences in fibre, added sugar " +
          "and salt, cost and social meaning. Use plain language and local icons, and avoid blaming people.</p>" +
          "<p><strong>Infographic 2: From plantation to plate.</strong> One page showing five steps (grow, harvest, " +
          "prepare, share, remember), the people involved at each step and one sustainability action for each. Use " +
          "local images with permission.</p>",
      },
      {
        id: "m5-mat11",
        type: "recommended-links",
        title: "Recommended reading and links",
        note: "Real content — NUS Module, Supplementary material S8 and Units 5–6 linked materials",
        body: `<ul>
<li><a href="https://www.ifieleele.com/" target="_blank" rel="noopener">Ifieleele Plantation</a></li>
<li><a href="https://www.samoa.travel/plan-book/activities/savaia-giant-clam-sanctuary/" target="_blank" rel="noopener">Savaia Giant Clam Sanctuary (Samoa Tourism Authority)</a></li>
<li><a href="https://www.samoa.travel/discover/our-food-and-cuisine/samoan-food/" target="_blank" rel="noopener">Samoa Tourism Authority — Samoan food</a></li>
<li><a href="https://southpacificislands.travel/sustainable/gastronomy-tourism-project/" target="_blank" rel="noopener">Pacific Sustainable Tourism Portal — Gastronomy Tourism Project</a></li>
<li><a href="https://www.aciar.gov.au/media-search/blogs/growing-agritourism-pacific" target="_blank" rel="noopener">ACIAR — Growing agritourism in the Pacific</a></li>
<li><a href="https://extranet.who.int/ncdsmicrodata/index.php/catalog/study/WSM_2013_STEPS_v01" target="_blank" rel="noopener">WHO — Samoa STEPS survey 2013</a></li>
<li><a href="https://www.agri-tour.eu/" target="_blank" rel="noopener">AGRI-TOUR project website</a> and <a href="https://www.youtube.com/@AgriTourProject" target="_blank" rel="noopener">YouTube channel</a></li>
</ul>`,
      },
      {
        id: "m5-mat12",
        type: "case-study",
        title: "Ifieleele plantation — farm-to-table in Samoa (video)",
        url: "https://www.youtube.com/watch?v=W5eh77T9hA0",
        note: "Real video",
      },
      {
        id: "m5-mat13",
        type: "case-study",
        title: "Sunshine Farm in Samoa (video)",
        url: "https://www.youtube.com/watch?v=Qekfu7mShEY",
        note: "Real video",
      },
      {
        id: "m5-mat14",
        type: "case-study",
        title: "Manusina beach fale, Samoa (video)",
        url: "https://www.youtube.com/watch?v=kgGya2P9e9s",
        note: "Real video",
      },
    ],
    references: [
      "National University of Samoa (NUS), Samoan Culture of Food — Farm to Table: AGRI-TOUR MOOC module (D3.2, final version 2026)",
      "NUS presentation, Samoan Food Culture: Promoting Healthy Food through Agritourism (21 slides)",
      "ACIAR, Growing agritourism in the Pacific: https://www.aciar.gov.au/media-search/blogs/growing-agritourism-pacific",
      "ACIAR, Vanuatu's regenerative agritourism: https://www.aciar.gov.au/media-search/blogs/vanuatus-regenerative-agritourism",
      "AGRI-TOUR project website: https://www.agri-tour.eu/",
      "CoCoNet, Localising agri-tourism: https://www.thecoconet.tv/coco-talanoa/coco-news/localising-agri-tourism-bringing-home-tourism/",
      "Gastronomy Tourism Project, Pacific Sustainable Tourism Portal: https://southpacificislands.travel/sustainable/gastronomy-tourism-project/",
      "South Pacific Tourism Organisation, Samoa strengthens culinary tourism through regional collaboration and capacity building (19 December 2025): https://southpacificislands.travel/samoa-strengthens-culinary-tourism-through-regional-collaboration-and-capacity-building/",
      "University of the South Pacific, Project advances sustainable agritourism in the Pacific: https://www.usp.ac.fj/news/project-advances-sustainable-agritourism-in-the-pacific/",
      "UN Tourism and FAO Mountain Partnership, sustainable gastronomy tourism in Pacific SIDS: https://www.fao.org/mountain-partnership/news/newsroom/news-detail/un-tourism-and-fao-mountain-partnership-launch-sustainable-gastronomy-tourism-project-in-pacific-sids/en",
      "NPR, Samoans await the return of the tasty turkey tail (2013): https://www.npr.org/sections/thesalt/2013/05/14/182568333/samoans-await-the-return-of-the-tasty-turkey-tail",
      "Penn State and Unizin, Food in Samoa: https://psu.pb.unizin.org/internatag/chapter/food-in-samoa/",
      "Samoa Tourism Authority, Samoan food: https://www.samoa.travel/discover/our-food-and-cuisine/samoan-food/",
      "Things to Do in Samoa, Food culture: https://thingstodoinsamoa.com/food-culture/",
      "US National Park Service, Samoan food and culture: https://home.nps.gov/npsa/learn/historyculture/samoan-food-and-culture.htm",
      "World Health Organization, Samoa STEPS surveys (2002 and 2013): https://extranet.who.int/ncdsmicrodata/index.php/catalog/study/WSM_2013_STEPS_v01",
      "Counihan, C., Van Esterik, P. and Julier, A. (eds), Food and Culture: A Reader (Routledge)",
      "Douglas, M. (1966), Purity and Danger (Routledge)",
      "Hall, C.M. and Sharples, L. (eds) (2003), Food Tourism Around the World (Butterworth-Heinemann)",
      "Long, L. (ed.) (2004), Culinary Tourism (University Press of Kentucky)",
      "MacCannell, D. (1976), The Tourist: A New Theory of the Leisure Class (Schocken)",
      "Pine, B.J. and Gilmore, J.H. (1998), Welcome to the experience economy, Harvard Business Review",
      "Sutton, D. (2001), Remembrance of Repasts: An Anthropology of Food and Memory (Berg)",
      "UNESCO (2003), Convention for the Safeguarding of the Intangible Cultural Heritage",
    ],
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
