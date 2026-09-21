export type { }

// This file holds every bilingual text pair in one place so pages stay small.
export const company = {
  name: { en: "Papillon Packaging", hi: "पैपिलियन पैकेजिंग" },
  tagline: { en: "Crafted Boxes. Confident Brands.", hi: "सुनती है ना?" },
}

export const whatsappNumber = "919876543210"
export const callNumber = "+919876543210"

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function t<A extends { en: string; hi: string }>(map: A, lang: "en" | "hi") {
  return map[lang]
}

export const NAV = [
  { to: "/", key: { en: "Home", hi: "होम" }, iconId: "Home" },
  { to: "/about", key: { en: "About", hi: "परिचय" }, iconId: "User" },
  { to: "/products", key: { en: "Products", hi: "उत्पाद" }, iconId: "Box" },
  { to: "/capabilities", key: { en: "Capabilities", hi: "क्षमता" }, iconId: "Layers" },
  { to: "/testimonials", key: { en: "Reviews", hi: "रीव्यू" }, iconId: "Star" },
  { to: "/faq", key: { en: "FAQ", hi: "सवाल" }, iconId: "HelpCircle" },
  { to: "/contact", key: { en: "Contact", hi: "संपर्क" }, iconId: "Phone" },
] as const

export const PRODUCTS = [
  {
    id: "corrugated",
    img: "/product-corrugated.webp",
    name: { en: "Corrugated Shipping Boxes", hi: "कोरेगेटेड शिपिंग बॉक्स" },
    desc: { en: "3, 5, and 7-ply cartons engineered for e-commerce, retail, and industrial shipments. Brand-colored flexo or litho print available in-house.", hi: "3, 5 और 7-प्लाई कार्टन जो ई-कॉमर्स, रिटेल और इंडस्ट्रियल शिपमेंट के लिए तैयार हैं। फ्लेक्सो या लिथो ब्रांड प्रिंटिंग हाउस में।" },
    specs: [
      { en: "ECT 32–71, BCT range 300–1200 lbs", hi: "ECT 32–71, BCT रेंज 300–1200 पाउंड" },
      { en: "Sizes up to 44-inch", hi: "44 इंच तक आकार" },
      { en: "Flexo print up to 4 colors", hi: "4 रंगों तक फ्लेक्सो प्रिंट" },
    ],
  },
  {
    id: "eco-mailers",
    img: "/product-eco-mailers.webp",
    name: { en: "E-commerce Eco Mailers", hi: "ई-कॉमर्स इको मेलर" },
    desc: { en: "Die-cut mailers with tear-strip opening, perfectly sized for apparel, D2C, and returns-friendly shipping. Zero plastic.", hi: "टीयर-स्ट्रिप ओपन करने वाले डाई-कट मेलर, जो कपड़े, D2C और रिटर्न-फ्रेंडली शिपिंग के लिए बिल्कुल सही हैं। प्लास्टिक कतई नहीं।" },
    specs: [
      { en: "Tear-strip + adhesive closure", hi: "टीयर-स्ट्रिप + चिपकाने वाली क्लोजर" },
      { en: "Kraft / white liner options", hi: "क्राफ्ट / व्हाइट लिनर विकल्प" },
      { en: "FSC certified paper", hi: "FSC प्रमाणित कागज़" },
    ],
  },
  {
    id: "rigid-luxury",
    img: "/product-rigid-luxury.webp",
    name: { en: "Rigid Luxury Boxes", hi: "लक्जरी रिजिड बॉक्स" },
    desc: { en: "Premium shoulder & neck, drawer, and magnetic-closure boxes for D2C gifting, jewelry, and fragrance brands. Foil, deboss, and emboss finishing.", hi: "D2C गिफ्टिंग, ज्वेलरी और पर्फ्यूम ब्रांड के लिए प्रीमियम शोल्डर & नेक, ड्रॉवर और मैग्नेटिक-क्लोजर बॉक्स। फॉयल, डीबोस और एम्बोस फिनिश।" },
    specs: [
      { en: "Hardline board 2–3 mm", hi: "हार्डलाइन बोर्ड 2–3 मिमी" },
      { en: "Gold foil / deboss options", hi: "गोल्ड फॉयल / डीबोस विकल्प" },
      { en: "Custom foam inserts", hi: "कस्टम फोम इन्सर्ट" },
    ],
  },
  {
    id: "cushioning",
    img: "/product-cushioning.webp",
    name: { en: "Molded Pulp Cushioning", hi: "मोल्डेड पल्प कुशनिंग" },
    desc: { en: "Custom-engineered pulp trays, honeycomb pads, and corrugated partitions that replace EPS foam and plastic insert.", hi: "कस्टम-इन्जीनियर्ड पल्प ट्रे, हनीकूब पैड और कोरेगेटेड विभाजन जो EPS फोम और प्लास्टिक इन्सर्ट को बदल देते हैं।" },
    specs: [
      { en: "Zero-plastic alternative to EPS", hi: "EPS की जगह जीरो-प्लास्टिक" },
      { en: "Custom molded for your product", hi: "आपके उत्पाद के लिए कस्टम मोल्ड" },
      { en: "100% recyclable", hi: "100% रीसाइक्लेबल" },
    ],
  },
  {
    id: "paper-bags",
    img: "/product-paper-bags.webp",
    name: { en: "Paper Barriers & Mailers", hi: "पेपर बैरियर और मेलर" },
    desc: { en: "Heat-sealable paper mailer bags, grease-proof multiwall sacks, and stretch papers for food, pharma, and chemicals.", hi: "हीट-सील करने योग्य पेपर मेलर बैग, ग्रीस-प्रूफ मल्टीवॉल सैक और खाद्य, फार्मा और रसायनों के लिए स्ट्रेच पेपर।" },
    specs: [
      { en: "Grease-proof options", hi: "ग्रीस-प्रूफ विकल्प" },
      { en: "Heat-sealable liners", hi: "हीट-सील लाइनर" },
      { en: "Plastic-free liner available", hi: "प्लास्टिक-मुक्त लाइनर उपलब्ध" },
    ],
  },
  {
    id: "custom-pulp",
    img: "/hero-molded-pulp.webp",
    name: { en: "Custom Pulp Solutions", hi: "कस्टम पल्प सॉल्यूशंस" },
    desc: { en: "Complete bespoke packaging — design, prototyping, testing, and production for electronics, medical, and glassware.", hi: "पूरी तरह कस्टम पैकेजिंग — इलेक्ट्रॉनिक्स, चिकित्सा और कांच के सामान के लिए डिजाइन, प्रोटोटाइप, परीक्षण और उत्पादन।" },
    specs: [
      { en: "In-house CAD + prototyping", hi: "इन-हाउस CAD + प्रोटोटाइप" },
      { en: "Drop-test certified", hi: "ड्रॉप-टेस्ट प्रमाणित" },
      { en: "From idea to full production", hi: "आइडिया से लेकर पूर्ण उत्पादन तक" },
    ],
  },
] as const

export const STEPS = [
  { n: "01", title: { en: "Pick Materials", hi: "सामग्री चुनें" }, d: { en: "We audit your supply chain and pick the right paper grade, flute profile, and barrier options for price and performance.", hi: "हम आपकी सप्लाई चेन की जांच करते हैं और कीमत व प्रदर्शन के लिए सही पेपर ग्रेड और बैरियर चुनते हैं।" } },
  { n: "02", title: { en: "Structural Design", hi: "संरचनात्मक डिजाइन" }, d: { en: "CAD dielines and 3D renders so you can see exactly how your box assembles before a single sheet is cut.", hi: "CAD डाईलाइन्स और 3D रेंडर ताकि आप देख सकें कि आपका बॉक्स कैसे बैठता है।" } },
  { n: "03", title: { en: "Engineering & Test", hi: "इंजीनियरिंग और परीक्षण" }, d: { en: "Prototype gets poured, dropped, compressed, and vibrated in our ISTA-style lab until it survives the worst route.", hi: "प्रोटोटाइप हमारे ISTA-स्टyle लैब में परीक्षित होता है जब तक वह खरोंचग्रस्त रूट से बच जाता है।" } },
  { n: "04", title: { en: "Full Production", hi: "पूर्ण उत्पादन" }, d: { en: "High-speed rotary die-cutters, auto-flush corrugating lines, and skilled finishing operators bring your box to scale.", hi: "हाई-स्पीड रोटरी डाई-कटर और स्किल्ड फिनिशिंग ऑपरेटर आपके बॉक्स को स्केल पर लाते हैं।" } },
] as const

export const FEATURES = [
  { title: { en: "Design Support", hi: "डिजाइन सपोर्ट" }, d: { en: "In-house structural design, CAD, and prototyping studio.", hi: "इन-हाउस स्ट्रक्चरल डिजाइन, CAD और प्रोटोटाइपिंग स्टूडियो।" }, img: "/design-studio.webp" },
  { title: { en: "Brand Printing", hi: "ब्रांड प्रिंटिंग" }, d: { en: "Flexo and litho-lamination printing up to four colors — or no-print with clean kraft.", hi: "चार रंगों तक फ्लेक्सो और लिथो-लैमिनेशन - या बिना प्रिंट साफ क्राफ्ट।" }, img: "/hero-factory-line.webp" },
  { title: { en: "Custom Engineering", hi: "कस्टम इंजीनियरिंग" }, d: { en: "Pulp mold tooling, die-cut tooling, and box board grades engineered for your fragility limit.", hi: "आपकी चुन्नु सीमा के लिए पल्प मोल्ड, डाई-कट टूलिंग और बोर्ड ग्रेड।" }, img: "/testing-lab.webp" },
  { title: { en: "Testing & Audit", hi: "परीक्षण और ऑडिट" }, d: { en: "Drop, compression, and vibration testing to validate survival on the worst routes before production.", hi: "ई-कॉमर्स रूट पर उत्पादन से पहले ड्रॉप, संकुचन और कंपन परीक्षण।" }, img: "/facility-exterior.webp" },
  { title: { en: "Sustainability", hi: "टिकाऊपन" }, d: { en: "FSC-certified papers, zero-plastic options, and end-of-life reuse & recycle programs.", hi: "FSC प्रमाणित कागज़, जीरो-प्लास्टिक विकल्प, और पुन: उपयोग कार्यक्रम।" }, img: "/sustainability.webp" },
  { title: { en: "Logistics Support", hi: "लॉजिस्टिक्स सपोर्ट" }, d: { en: "Kitting, fulfilment and freight audits — optional weekly delivery windows across NCR.", hi: "किटिंग, फुलफिलमेंट और फ्रेट ऑडिट - अनुकूल वीकली डिलीवरी विंडो।" }, img: "/hero-corrugated.webp" },
] as const

export const STATS = [
  { v: { en: "65", hi: "65" }, l: { en: "Products", hi: "उत्पाद" } },
  { v: { en: "20", hi: "20" }, l: { en: "Team members", hi: "टीम सदस्य" } },
  { v: { en: "2", hi: "2" }, l: { en: "Production units", hi: "उत्पादन इकाइयां" } },
  { v: { en: "200+", hi: "200+" }, l: { en: "Happy Clients", hi: "खुश ग्राहक" } },
  { v: { en: "4.9★", hi: "4.9★" }, l: { en: "Client rating", hi: "क्लाइंट रेटिंग" } },
  { v: { en: "17+", hi: "17+" }, l: { en: "Years of craft", hi: "वर्षों का शिल्प" } },
] as const

export const TEAM = [
  { name: { en: "Udayan Chauhan", hi: "उदयन चौहान" }, role: { en: "Founder & Production Lead", hi: "संस्थापक और प्रोडक्शन लीड" }, img: "/team-udayan.webp", d: { en: "Two decades inside Delhi's packaging corridors — runs the machines, sets the quality bar.", hi: "दिल्ली के पैकेजिंग कॉरिडोर में दो दशक - मशीनें चलाता है, गुणवत्ता ब्रांड।" } },
  { name: { en: "Tarini Iyer", hi: "तरिनी आयर" }, role: { en: "Materials & Sustainability Lead", hi: "सामग्री और टिकाऊपन लीड" }, img: "/team-tarini.webp", d: { en: "Paper scientist who tests every board grade in-house before approving a sheet.", hi: "पेपर वैज्ञानिक जो हर बोर्ड ग्रेड को आसानी से परीक्षण करती है।" } },
  { name: { en: "Devavrat Kharand", hi: "देवव्रत खरान्द" }, role: { en: "Client Partner", hi: "क्लाइंट पार्टनर" }, img: "/team-devavrat.webp", d: { en: "Handles your account from discovery call to final delivery window — always on WhatsApp.", hi: "आपकी अकाउंट डिस्कवरी से फाइनल डिलीवरी तक - हमेशा WhatsApp पर।" } },
  { name: { en: "Nayantara Sen", hi: "नयनतारा सेन" }, role: { en: "Brand & Design Lead", hi: "ब्रांड और डिजाइन लीड" }, img: "/team-nayantara.webp", d: { en: "Leads the offering prints, dielines, colour system, and finishing for premium looks.", hi: "प्रीमियम रूप के लिए डाईलाइन्स, रंग प्रणाली और फिनिशिंग की अगुवाई।" } },
] as const

export const TESTIMONIALS = [
  { name: "Prawesh Bandal", company: { en: "Director, Wellness-box India", hi: "निदेशक, वेलनेस-बॉक्स इंडिया" }, stars: 5, quote: { en: "The custom mailer not only reduced our damage rate from 6% to under 1%, it increased unboxing shares on Instagram. Best call we've made all year.", hi: "कस्टम मेलर ने हमारी damage rate को 6% से 1% तक घटाया और Instagram में अनबॉक्सिंग शेयर बढ़ाई।" } },
  { name: "Arib Sen", company: { en: "Founder, Ink & Thread", hi: "संस्थापक, इंक एंड थ्रेड" }, stars: 5, quote: { en: "Devavrat stayed on WhatsApp for the whole project. When the rigid box came out with gold foil, it felt like a different product. Premium look, local cost.", hi: "देवव्रत पूरे प्रोजेक्ट के दौरान WhatsApp पर रहा। रिजिड बॉक्स गोल्ड फॉयल के साथ - प्रीमियम लुक, लोकल लागत।" } },
  { name: "Sania Yengdef", company: { en: "COO, D2C Wellness Drops", hi: "सीओओ, D2C वेलनेस ड्रॉप्स" }, stars: 5, quote: { en: "The lab team drop-tested thirteen prototypes before production. That rigour is why we send them every launch. 100% recommended.", hi: "लैब टीम ने उत्पादन से पहले 13 प्रोटोटाइप ड्रॉप-टेस्ट किया। इसलिए हम हर लॉन्च यहाँ भेजते हैं।" } },
  { name: "Shakeel Wrishton", company: { en: "CEO, Badshah Trading", hi: "सीईओ, बादशाह ट्रेडिंग" }, stars: 5, quote: { en: "We ordered season-critical volumes and got them on time — no drama, no hidden charges. Long-term vendor material.", hi: "ताजपोशी की मात्रा समय पर - कोई नाटक नहीं, कोई छिपा हुआ शुल्क नहीं।" } },
  { name: "Devina Chengalar", company: { en: "Brand Manager, Fragrance Nook", hi: "ब्रांड मैनेजर, फ्रेगरेंस नूक" }, stars: 5, quote: { en: "Nayantara's structural design cut our retail shelf space by 40% while making the box look richer. That's packaging that works at retail.", hi: "नयनतारा का स्ट्रक्चरल डिजाइन ने रिटेल शेल्फ स्पेस 40% घटाया और बॉक्स को अमीर दिखाया।" } },
  { name: "Rishabh Chandly", company: { en: "Operations Head, NCR Gifting Co.", hi: "ऑपरेशंस हेड, NCR गिफ्टिंग कंपनी" }, stars: 4, quote: { en: "Very strong engineering support — they machined a custom pulp insert in a week for our glass candle line. Could improve lead-time on weekends.", hi: "ग्लास कैंडल लाइन के लिए एक हफ्ते में कस्टम पल्प इन्सर्ट बना। सप्ताह-अंत में लीड-टाइम बेहतर कर सकते हैं।" } },
  { name: "Rabita Charan", company: { en: "E-commerce Head, Kids' Rack", hi: "ई-कॉमर्स हेड, किड्स रैक" }, stars: 5, quote: { en: "Packaging used to be our biggest headache for returns. Post-Papillon size-fit redesign, reverse logistics is down by 70%. They know e-commerce.", hi: "रिटर्न के लिए पैकेजिंग सबसे बड़ी समस्या थी। Papillon पुन: डिजाइन के बाद रिवर्स लॉजिस्टिक्स 70% कम।" } },
  { name: "Rekha Dhananjay", company: { en: "Founder, Nth Trade & Exports", hi: "संस्थापक, Nth ट्रेड और एक्सपोर्ट्स" }, stars: 5, quote: { en: "Tarini's sustainability audit moved us off plastic completely — something our European clients demanded. Smooth, professional, and kind of a joy.", hi: "तरिनी की टिकाऊपन ऑडिट ने हमें पूरी तरह से प्लास्टिक से बचा दिया - यूरोपीय क्लाइंट की मांग।" } },
] as const

export const FAQ = [
  { q: { en: "What custom packaging options do you offer?", hi: "आप कौन से कस्टम पैकेजिंग विकल्प देते हैं?" }, a: { en: "Everything from shipping cartons to luxury rigid boxes, mailers, trays, partitions, and pulp inserts — over 65 product families. Tell us your product and we design to fit it.", hi: "शिपिंग कार्टन से लेकर लक्जरी रिजिड बॉक्स, मेलर्स, ट्रे और पल्प इन्सर्ट - 65 से अधिक उत्पाद परिवार। अपना उत्पाद बताएं और हम फिट बनाते हैं।" } },
  { q: { en: "How does custom packaging help my business?", hi: "कस्टम पैकेजिंग मेरे व्यापार को कैसे मदद करता है?" }, a: { en: "It cuts damage costs, increases unboxing shareability, builds brand recall, and can even reduce freight cost by shrinking box volume to fit the product snugly.", hi: "यह damage लागत घटाता है, अनबॉक्सिंग बढ़ाता है, ब्रांड रीकॉल बनाता है और फ्रेट लागत भी घटा सकता है।" } },
  { q: { en: "What materials do you use and are they eco-friendly?", hi: "कौन से सामग्री उपयोग करते हैं? क्या वे टिकाऊ हैं?" }, a: { en: "Primarily FSC-certified kraft, SBS, and recycled board. Plastic-free options across lines, with grease-proof and compostable papers for food lines.", hi: "मुख्य रूप से FSC-प्रमाणित क्राफ्ट, SBS और रीसायकल बोर्ड। फूड लाइन्स के लिए ग्रीस-प्रूफ और कंपोस्टेबल पेपर।" } },
  { q: { en: "How does pricing work for a first project?", hi: "पहली बार प्रोजेक्ट में प्राइस कैसे होता है?" }, a: { en: "Discovery → design & prototype → validation → production. The cost per phase is quoted upfront with zero hidden charges — we know that \"low-cost, low-quality\" is a trap.", hi: "डिस्कवरी → डिजाइन → वेलिडेशन → प्रोडक्शन। हर चरण का लागत पहले से सामने - शून्य छिपा शुल्क।" } },
  { q: { en: "What is your typical lead time?", hi: "लीड टाइम कितना है?" }, a: { en: "3–5 days for design, 7–12 days for production in Delhi NCR. Time-critical? Tell us your launch window and we'll back-plan it together.", hi: "डिजाइन 3-5 दिन, प्रोडक्शन 7-12 दिन। लॉन्च विंडो बताएं, हम साथ में back-plan करते हैं।" } },
  { q: { en: "Do you handle small orders too?", hi: "छोटे ऑर्डर भी लेते हैं?" }, a: { en: "Yes. We have an express lane for startup runs and samples at low MOQ, especially if you want to test before scaling.", hi: "हां। स्नैपी लेन हमारे पास है - कम MOQ पर स्टार्टअप रन और सैंपल।" } },
  { q: { en: "Can I get samples before full ordering?", hi: "पूरी ऑर्डर से पहले सैंपल मिल सकते हैं?" }, a: { en: "We ship a physical prototype and let you drop-test it. Upfront, transparent, and if you want changes we iterate fast.", hi: "हम फिजिकल प्रोटोटाइप शिप करते हैं। अगर बदलाव चाहिए तो जल्दी iterate करते हैं।" } },
  { q: { en: "Is there quality testing?", hi: "क्या गुणवत्ता परीक्षण होता है?" }, a: { en: "Yes — drop, compression, moisture, and flex-testing before every production run. Reports can be shared by email.", hi: "हां - हर प्रोडक्शन से पहले ड्रॉप, संकुचन, नमी और फ्लेक्स परीक्षण।" } },
] as const

export const LANG_SWITCH = {
  enLabel: "EN",
  hiLabel: "हि",
}
