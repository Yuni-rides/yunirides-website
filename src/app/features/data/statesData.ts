export interface KnowledgeCard {
  title: string;
  description: string;
  image: string;
}

export interface WhyTrustUsCard {
  title: string;
  description: string;
  image: string;
  isPurple: boolean;
}

export interface StateService {
  slug: string;
  stateName: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroTitle: string;
  heroCardText: string;
  heroSubtitle: string;
  ctaLabel: string;
  cities: string[];
  spedTitle: string;
  spedSubtitle: string;
  knowledgeCards: KnowledgeCard[];
  whyTrustUsTitle?: string;
  whyTrustUsSubtitle?: string;
  whyTrustUsCards: WhyTrustUsCard[];
}

export const statesData: StateService[] = [
  {
    slug: "california",
    stateName: "California",
    metaTitle: "Special Needs Transportation in California | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across California. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/CaliforniaBanner.png",
    heroTitle: "Special Needs Student Transportation In California",
    heroSubtitle:
      "Trusted by school districts across California for safe, on-time, and compassionate special needs student transportation.",
    heroCardText:
      "IEP-compliant transportation across major California regions, serving districts with vetted drivers, live tracking, and personalized student care.",
    ctaLabel: "Request A Quote",
    cities: [
      "Los Angeles",
      "San Diego",
      "San Jose",
      "Sacramento",
      "Fresno",
      "Oakland",
    ],
    spedTitle: "Understanding Special Education Transportation in California",
    spedSubtitle:
      "Navigating California Education Code guidelines and IEP mandates.",
    knowledgeCards: [
      {
        title: "What Qualifies a Student for IEP Rides in California?",
        description:
          "Under the California Education Code, transportation is mandated as a related service if specified in a student's IEP to ensure equal access to education.",
        image: "/images/w1.png",
      },
      {
        title: "Are Specialized Vehicles Provided?",
        description:
          "California districts partner with qualified transport providers to offer wheelchair-accessible vans, door-to-door service, and dedicated route monitors as needed.",
        image: "/images/w2.png",
      },
      {
        title: "How to Advocate for Transport at an IEP Meeting?",
        description:
          "Request an IEP assessment focused on physical, behavioral, or distance challenges. Ensure exact transportation needs are explicitly written into the IEP goals.",
        image: "/images/w3.png",
      },
      {
        title: "McKinney-Vento & Foster Youth Protections",
        description:
          "California law guarantees transportation stability for students in foster care or experiencing housing insecurity, matching school of origin requirements.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "California-aligned ride time standards and driver safety compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
  {
    slug: "washington",
    stateName: "Washington",
    metaTitle: "Special Needs Transportation in Washington State | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across Washington State. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/washingtonBanner.png",
    heroTitle: "Special Needs Student Transportation in Washington State",
    heroSubtitle:
      "Safe, compassionate, and reliable transportation tailored for students with special needs and IEP requirements across Washington.",
    heroCardText:
      "IEP-compliant transportation across local communities, serving districts with background-checked drivers, real-time GPS tracking, and route consistency built around each student.",
    ctaLabel: "Request A Quote",
    cities: [
      "Seattle",
      "Everett",
      "Lynnwood",
      "Renton",
      "Edmonds",
      "Tukwila",
      "Shoreline",
      "Kent",
      "Redmond",
      "Federal Way",
      "Bellevue",
      "Tacoma",
    ],
    spedTitle: "Understanding IEP & Special Needs Transportation",
    spedSubtitle:
      "What Washington State actually requires and how to request it.",
    knowledgeCards: [
      {
        title: "What Is IEP Transportation in Washington State?",
        description:
          "Under WAC 392-172A, transportation is a related service required to help a student benefit from special education. Eligibility is determined individually through the IEP process based on student needs.",
        image: "/images/w1.png",
      },
      {
        title: "Does Washington Require Special Needs Transportation?",
        description:
          "Yes, when written into a student's IEP. The district must provide it at no cost—whether wheelchair-accessible, door-to-door, or with a trained aide—even with private partners like Yuni Rides.",
        image: "/images/w2.png",
      },
      {
        title: "How Do I Request IEP Transportation in WA?",
        description:
          "Transportation can be requested or reviewed at any IEP meeting. Bring documentation from a doctor or therapist, specify requirements, and keep written records of your request.",
        image: "/images/w3.png",
      },
      {
        title: "Is McKinney-Vento Transportation Required in Washington?",
        description:
          "Yes. Districts must transport students experiencing homelessness to their school of origin. Students can qualify under McKinney-Vento and IEP transportation simultaneously.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "WAC-aligned ride time standards and driver benefits requirement compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
  {
    slug: "arizona",
    stateName: "Arizona",
    metaTitle: "Special Needs Transportation in Arizona | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across Arizona. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/ArizonaBanner.png",
    heroTitle: "Special Needs Student Transportation In Arizona",
    heroSubtitle:
      "Trusted by school districts across Arizona for safe, on-time, and compassionate special needs student transportation.",
    heroCardText:
      "Dedicated special needs transportation serving school districts across Arizona with trained care drivers and real-time route monitoring.",
    ctaLabel: "Request A Quote",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale"],
    spedTitle: "Understanding Special Education Transportation in Arizona",
    spedSubtitle:
      "Arizona Department of Education standards and IEP transport rights.",
    knowledgeCards: [
      {
        title: "IEP Transportation Rules in Arizona",
        description:
          "Arizona law requires school districts to provide free transportation when identified as a necessary related service in a student's IEP program.",
        image: "/images/w1.png",
      },
      {
        title: "Climate-Controlled & Safe Vehicles",
        description:
          "Given local weather conditions, Arizona routes prioritize climate-controlled, safe, and regularly inspected vehicles driven by certified personnel.",
        image: "/images/w2.png",
      },
      {
        title: "Requesting Accommodations in Arizona Districts",
        description:
          "Parents can present medical or behavioral evaluations during annual IEP reviews to establish specific door-to-door transportation needs.",
        image: "/images/w3.png",
      },
      {
        title: "Out-of-District & Special Placements",
        description:
          "When students are placed in specialized programs outside their home boundaries, districts coordinate dedicated transport services to bridge the gap.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "ADE-aligned ride time standards and driver safety compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
  {
    slug: "illinois",
    stateName: "Illinois",
    metaTitle: "Special Needs Transportation in Illinois | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across Illinois. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/IllinoisBanner.png",
    heroTitle: "Special Needs Student Transportation In Illinois",
    heroSubtitle:
      "Trusted by school districts across Illinois for safe, on-time, and compassionate special needs student transportation.",
    heroCardText:
      "Flexible student transportation across the Greater Chicago area and Illinois, tailored for special needs and specialized school placements.",
    ctaLabel: "Request A Quote",
    cities: [
      "Chicago",
      "Aurora",
      "Naperville",
      "Joliet",
      "Rockford",
      "Springfield",
    ],
    spedTitle: "Understanding Special Education Transportation in Illinois",
    spedSubtitle:
      "Illinois State Board of Education (ISBE) guidelines and student entitlements.",
    knowledgeCards: [
      {
        title: "ISBE Special Education Transportation Rights",
        description:
          "ISBE regulations mandate door-to-door transportation services for eligible students with disabilities when documented in their active IEP.",
        image: "/images/w1.png",
      },
      {
        title: "Safety Standards & Specialized Equipment",
        description:
          "Vehicles meet strict state inspection standards, offering safety harnesses, wheelchair lifts, and trained aides for high-need routes.",
        image: "/images/w2.png",
      },
      {
        title: "Initiating IEP Transportation Services",
        description:
          "Coordinate with your school district's SPED team to evaluate transportation requirements during your child's annual or transition IEP meeting.",
        image: "/images/w3.png",
      },
      {
        title: "Extreme Weather & Route Consistency",
        description:
          "Dedicated driver assignments and real-time tracking keep families and schools informed during seasonal winter shifts and delays.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "ISBE-aligned ride time standards and driver safety compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
  {
    slug: "texas",
    stateName: "Texas",
    metaTitle: "Special Needs Transportation in Texas | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across Texas. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/TexasBanner.png",
    heroTitle: "Special Needs Student Transportation In Texas",
    heroSubtitle:
      "Trusted by school districts across Texas for safe, on-time, and compassionate special needs student transportation.",
    heroCardText:
      "Comprehensive special education transport serving Texas school districts with background-checked drivers and real-time tracking.",
    ctaLabel: "Request A Quote",
    cities: [
      "Houston",
      "San Antonio",
      "Dallas",
      "Austin",
      "Fort Worth",
      "El Paso",
    ],
    spedTitle: "Understanding Special Education Transportation in Texas",
    spedSubtitle: "TEA guidelines and IEP transportation provisions.",
    knowledgeCards: [
      {
        title: "TEA Special Education Transportation Mandates",
        description:
          "Under Texas Education Agency (TEA) standards, transportation is a related service required for students whose disabilities require special travel arrangements.",
        image: "/images/w1.png",
      },
      {
        title: "Specialized Vehicle Accommodations",
        description:
          "Vehicles feature wheelchair lifts, safety restraints, and climate control, ensuring safe and comfortable commutes for students across Texas.",
        image: "/images/w2.png",
      },
      {
        title: "Requesting Transport in ARD / IEP Meetings",
        description:
          "Parents can request transportation during ARD committee meetings by demonstrating specific physical, medical, or behavioral needs.",
        image: "/images/w3.png",
      },
      {
        title: "Regional & Long-Distance Route Support",
        description:
          "Serving wide school district boundaries with consistent drivers, route planning, and live status updates for parents and administrators.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "TEA-aligned ride time standards and driver safety compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
  {
    slug: "oregon",
    stateName: "Oregon",
    metaTitle: "Special Needs Transportation in Oregon | Yuni Rides",
    metaDescription:
      "Safe, reliable special needs student transportation across Oregon. NEMT-trained drivers, real-time tracking, and district partnerships.",
    heroImage: "/images/OregonBanner.png",
    heroTitle: "Special Needs Student Transportation In Oregon",
    heroSubtitle:
      "Trusted by school districts across Oregon for safe, on-time, and compassionate special needs student transportation.",
    heroCardText:
      "Dedicated special needs transportation tailored for Oregon school districts with trained care drivers and real-time route tracking.",
    ctaLabel: "Request A Quote",
    cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro", "Bend"],
    spedTitle: "Understanding Special Education Transportation in Oregon",
    spedSubtitle: "ODE standards and IEP transport rights.",
    knowledgeCards: [
      {
        title: "ODE Special Education Transportation Rights",
        description:
          "The Oregon Department of Education ensures transportation is provided as a related service when specified in a student's IEP.",
        image: "/images/w1.png",
      },
      {
        title: "Safety Standards & Specialized Equipment",
        description:
          "Vehicles are equipped with wheelchair securements, harnesses, and climate controls to handle Oregon's varied weather conditions.",
        image: "/images/w2.png",
      },
      {
        title: "Initiating IEP Transportation Services",
        description:
          "Discuss transportation requirements during your IEP team meeting to ensure appropriate accommodations are documented.",
        image: "/images/w3.png",
      },
      {
        title: "Rural & Urban Route Support",
        description:
          "Flexible routing designed to seamlessly serve both urban centers and rural district boundaries across Oregon.",
        image: "/images/w4.png",
      },
    ],
    whyTrustUsTitle: "Districts & Families Choose Yuni Rides",
    whyTrustUsSubtitle:
      "Compliance is built into how we operate — not added afterward.",
    whyTrustUsCards: [
      {
        title: "Background-Checked Drivers",
        description:
          "Trained on securement systems, recognizing medical distress, and de-escalation.",
        image: "/images/trust-driver.png",
        isPurple: true,
      },
      {
        title: "Route & Driver Consistency",
        description:
          "Same driver, same route daily — part of the accommodation itself for many students.",
        image: "/images/route-consistency.png",
        isPurple: false,
      },
      {
        title: "Real-Time GPS Tracking",
        description:
          "Parents and district staff see exactly where a vehicle is, in real time.",
        image: "/images/gps-tracking.png",
        isPurple: true,
      },
      {
        title: "Built-In Compliance",
        description:
          "ODE-aligned ride time standards and driver safety compliance.",
        image: "/images/compliance.png",
        isPurple: false,
      },
    ],
  },
];

export function getStateBySlug(slug: string): StateService | undefined {
  return statesData.find((s) => s.slug === slug);
}
