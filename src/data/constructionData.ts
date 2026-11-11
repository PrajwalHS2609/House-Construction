import {
  ConstructionService,
  ProjectCaseStudy,
  ConstructionPackage,
  ProcessStep,
  Testimonial,
  FaqItem,
  ConstructionGuide,
} from '../types/index.ts';

export const COMPANY_NAME = "VALENCE RESIDENTIAL";
export const COMPANY_TAGLINE = "Architectural Planning & Turnkey Home Construction";
export const PHONE_NUMBER = "+1 (800) 482-5362";
export const PHONE_CLEAN = "+18004825362";
export const EMAIL_ADDRESS = "enquiries@valenceresidential.com";
export const OFFICE_ADDRESS = "450 Architecture Boulevard, Suite 800, Metro Design District";
export const WHATSAPP_NUMBER = "18004825362";

export const SERVICES: ConstructionService[] = [
  {
    id: "independent-house",
    number: "01",
    title: "Independent House Construction",
    tagline: "Custom residential sanctuaries built from ground up",
    description: "Complete residential construction solutions engineered specifically for standalone residential plots. From geo-technical soil testing to foundation and roof slab casting, we manage all civil and finishing aspects with uncompromised engineering rigor.",
    keyBenefits: [
      "Tailored to plot orientation and setbacks",
      "Reinforced earthquake-resistant RCC frame",
      "Dedicated site civil engineer & daily logs",
      "Fixed timeline guarantee with stage sign-offs"
    ],
    deliverables: [
      "Geo-technical soil investigation report",
      "Structural calculation & load-bearing blueprint",
      "Complete civil masonry & roof slab casting",
      "Pre-handover 360° snag inspection"
    ],
    image: "/src/assets/images/hero_luxury_modern_home_1794391709745.jpg",
    idealFor: "Plot owners seeking an enduring custom standalone residence",
    timeline: "8 - 12 Months"
  },
  {
    id: "custom-home",
    number: "02",
    title: "Custom Home Construction",
    tagline: "Bespoke architectural execution matched to lifestyle",
    description: "Personalized home building that turns unique architectural visions into reality. We integrate bespoke cantilevered forms, double-height volumes, custom stone masonry, and passive solar design according to your personal aspirations.",
    keyBenefits: [
      "Bespoke spatial design with zero cookie-cutter compromises",
      "Premium material curation (natural stone, hardwood, steel)",
      "Seamless indoor-outdoor courtyard transitions",
      "Smart home cabling and acoustic insulation built-in"
    ],
    deliverables: [
      "Custom 3D walkthroughs & material moodboards",
      "Precision structural fabrication for custom spans",
      "Artisan joinery & specialized facade installations",
      "Post-occupancy warranty & maintenance dossier"
    ],
    image: "/src/assets/images/luxury_interior_finishing_1794391709717.jpg",
    idealFor: "Homeowners desiring a distinctive signature property",
    timeline: "10 - 14 Months"
  },
  {
    id: "turnkey-home",
    number: "03",
    title: "Turnkey Home Construction",
    tagline: "Single-point accountability from permit to move-in key",
    description: "Our flagship complete construction management model. We shoulder 100% of the complexity: government permits, architectural drawings, material procurement, structural engineering, civil contractors, interior MEP, and municipal occupancy certificates.",
    keyBenefits: [
      "Single contract with fixed cost and zero surprise escalation",
      "Weekly video progress reports & transparent material bills",
      "All municipal permissions and utility approvals handled",
      "Move-in ready with lighting, plumbing, and deep cleaning"
    ],
    deliverables: [
      "Full statutory clearance & building permit approval",
      "Comprehensive Bill of Quantities (BOQ)",
      "Complete civil, MEP, joinery, and interior package",
      "Certified occupancy certificate & handover key set"
    ],
    image: "/src/assets/images/construction_structural_craft_1794391709989.jpg",
    idealFor: "Busy professionals & NRIs needing hands-off reliability",
    timeline: "9 - 14 Months"
  },
  {
    id: "architectural-design",
    number: "04",
    title: "Architectural Design & Planning",
    tagline: "Intelligent space planning, light study & aesthetic form",
    description: "In-house architectural planning combining modern geometric aesthetics with intuitive daily functionality. We sculpt residential layouts optimized for natural cross-ventilation, daylight penetration, privacy, and local building bylaws.",
    keyBenefits: [
      "Optimized carpet-area efficiency with zero dead hallways",
      "Photorealistic 3D elevations and VR walkthroughs",
      "Vastu-compliant and climate-responsive zoning",
      "Municipal zoning and sanctioned floor-to-area (FAR) analysis"
    ],
    deliverables: [
      "Complete 2D floor plans (Working & Sanction sets)",
      "3D photorealistic exterior & interior renders",
      "Door/window schedule & detailed joinery details",
      "Electrical, plumbing & HVAC schematic drawings"
    ],
    image: "/src/assets/images/architectural_blueprint_plan_1794391710970.jpg",
    idealFor: "Clients wanting master-grade spatial planning before building",
    timeline: "4 - 8 Weeks"
  },
  {
    id: "structural-engineering",
    number: "05",
    title: "Structural Engineering & Vetting",
    tagline: "Rigorous civil calculations for generational safety",
    description: "Every home built by Valence undergoes rigorous structural engineering by licensed chartered engineers. We calculate seismic loads, dead and live loads, wind resistance, and soil bearing capacity to specify optimal rebar configurations.",
    keyBenefits: [
      "Calculated in compliance with international seismic codes",
      "Optimized steel-to-concrete ratio to eliminate wasteful costs",
      "Independent structural stability certificate provided",
      "Mandatory slump and 28-day concrete cube compression testing"
    ],
    deliverables: [
      "Foundation design (Raft, isolated footing, or under-reamed piles)",
      "Detailed column & beam reinforcement schedules",
      "Retaining wall and basement waterproofing engineering",
      "Certified Structural Stability Certificate"
    ],
    image: "/src/assets/images/construction_structural_craft_1794391709989.jpg",
    idealFor: "High-spec homes, multi-story buildings, and difficult terrains",
    timeline: "3 - 5 Weeks"
  },
  {
    id: "renovation-remodeling",
    number: "06",
    title: "Home Renovation & Modernization",
    tagline: "Transforming existing structures into contemporary marvels",
    description: "Breathe new life into aging residential structures. We perform structural strengthening, open-plan wall knockouts with steel flitch beams, modern facade updates, re-roofing, and complete infrastructure modernization.",
    keyBenefits: [
      "Preserves original property value while modernizing efficiency",
      "Non-destructive structural assessment prior to demolition",
      "Replacement of obsolete galvanized plumbing and electrical wiring",
      "Seamless architectural matching between old and new wings"
    ],
    deliverables: [
      "Structural health assessment & feasibility report",
      "Architectural renovation plans & 3D visualization",
      "Phased execution plan to minimize domestic disruption",
      "Updated MEP infrastructure and insulation upgrades"
    ],
    image: "/src/assets/images/luxury_interior_finishing_1794391709717.jpg",
    idealFor: "Heritage properties and outdated suburban residences",
    timeline: "2 - 6 Months"
  },
  {
    id: "interior-finishing",
    number: "07",
    title: "Interior & Exterior Finishing",
    tagline: "Tactile craftsmanship, acoustic balance & refined surfaces",
    description: "The tactile details that make a house a sanctuary. We execute Italian marble and engineered hardwood flooring, Venetian plaster walls, acoustic false ceilings, bespoke cabinetry, weatherproof facade cladding, and architectural lighting fixtures.",
    keyBenefits: [
      "Laser-leveled flooring with zero lippage",
      "Zero-VOC moisture-resistant wall paints and plasters",
      "Concealed architectural cove lighting & automation integration",
      "High-performance exterior silicone coatings & UV louvers"
    ],
    deliverables: [
      "Interior material palette & finish board",
      "Precision floor screed & waterproof sealant application",
      "Custom millwork & kitchen installation",
      "Complete fixture commissioning & final handover polish"
    ],
    image: "/src/assets/images/luxury_interior_finishing_1794391709717.jpg",
    idealFor: "Clients at the finishing phase seeking artisanal quality",
    timeline: "2 - 4 Months"
  },
  {
    id: "building-extension",
    number: "08",
    title: "Building Extensions & Vertical Addition",
    tagline: "Safe vertical and horizontal residential expansion",
    description: "Adding an additional floor, a rooftop terrace pavilion, or a ground-floor garden suite. We verify existing column and foundation load limits, engineer lightweight structural steel frames or aerated concrete additions, and manage municipal sanctions.",
    keyBenefits: [
      "Non-intrusive structural column retrofitting & rebar anchoring",
      "Lightweight steel framing (LSF) to reduce load on old footings",
      "Weather-sealed execution while lower floors remain occupied",
      "Full municipal building permit approval & zoning compliance"
    ],
    deliverables: [
      "Foundation load capacity verification audit",
      "Sanctioned extension architectural plan",
      "Waterproof structural connection between floors",
      "Separate utility metering and access stairways"
    ],
    image: "/src/assets/images/construction_structural_craft_1794391709989.jpg",
    idealFor: "Expanding families requiring additional living space",
    timeline: "3 - 6 Months"
  }
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "solarium-pavilion",
    title: "The Solarium Villa",
    category: "villa",
    categoryLabel: "Contemporary Villa",
    location: "Highland Estates, Sector 4",
    builtUpArea: "5,400 sq.ft",
    plotSize: "60 x 80 ft (4,800 sq.ft)",
    floors: "G + 2 Floors",
    architecturalStyle: "Warm Brutalist & Tropical Modernism",
    completionYear: "2025",
    status: "Completed",
    coverImage: "/src/assets/images/hero_luxury_modern_home_1794391709745.jpg",
    description: "A striking multi-generational residence engineered with an open cantilevered living pavilion, internal sunken courtyard, and high-performance thermal double glazing.",
    structuralHighlights: [
      "12-meter column-free living span with post-tensioned beam",
      "Exposed architectural board-formed concrete facade",
      "Passive solar courtyard generating natural cooling draft",
      "Integrated 8kW rooftop photovoltaic micro-inverter grid"
    ],
    materialsUsed: [
      "Fe550D High-ductility steel rebar",
      "Ultratech 53-grade OPC cement",
      "Hand-hewn Valser quartzite and fluted cedar louvers",
      "Reynaers aluminum thermally broken slimline windows"
    ],
    features: [
      "4 Ensuite Bedrooms",
      "Double-height gallery library",
      "Subterranean home theater & wine cellar",
      "Reflecting plunge pool with natural filtration"
    ],
    timeline: "13 Months"
  },
  {
    id: "monolith-house",
    title: "The Monolith Residence",
    category: "independent",
    categoryLabel: "Modern Independent House",
    location: "Meadowbrook Enclave",
    builtUpArea: "3,850 sq.ft",
    plotSize: "40 x 60 ft (2,400 sq.ft)",
    floors: "G + 1 Floor",
    architecturalStyle: "Minimalist Sculptural Concrete",
    completionYear: "2025",
    status: "Completed",
    coverImage: "/src/assets/images/construction_structural_craft_1794391709989.jpg",
    description: "Engineered on a compact urban footprint, this home delivers soaring ceiling heights, an illuminated central skylight shaft, and flawless acoustic separation from street noise.",
    structuralHighlights: [
      "Raft foundation engineered for deep alluvial clay soil",
      "Concealed rainwater harvesting system with 12,000L tank",
      "Earthquake resistant Grade IV compliance",
      "Thermal bridge insulation along all structural perimeters"
    ],
    materialsUsed: [
      "Wire-cut kiln clay bricks with high thermal mass",
      "Polished cement floor screed with brass inlay",
      "Treated white ash joinery and flush magnetic jambs",
      "Solar reflective heat-resistant roof tiling"
    ],
    features: [
      "3 Bedrooms + Study",
      "Internal Zen rock courtyard",
      "Custom gourmet show kitchen + dirty pantry",
      "2-Car EV charging port"
    ],
    timeline: "11 Months"
  },
  {
    id: "courtyard-duplex",
    title: "Verona Courtyard Duplex",
    category: "duplex",
    categoryLabel: "Duplex Home",
    location: "Oakridge Ridge, Block B",
    builtUpArea: "4,200 sq.ft",
    plotSize: "50 x 70 ft (3,500 sq.ft)",
    floors: "G + 1 with Terrace Lounge",
    architecturalStyle: "Contemporary Scandinavian-Indian Fusion",
    completionYear: "2024",
    status: "Completed",
    coverImage: "/src/assets/images/luxury_interior_finishing_1794391709717.jpg",
    description: "Designed for a family of five, this duplex balances grand entertaining spaces on the ground floor with peaceful private suites and a terrace garden above.",
    structuralHighlights: [
      "Floating cantilevered steel staircase with oak treads",
      "3-layer polymer waterproofing across entire terrace and wet areas",
      "Concealed HVAC ducting with zone-specific digital thermostats",
      "Double-wall perimeter masonry for enhanced heat protection"
    ],
    materialsUsed: [
      "Bespoke terrazzo tiles and honed Botticino marble",
      "Tata Tiscon Fe550D rebar with epoxy coating",
      "Low-VOC breathable micro-cement coatings",
      "Grohe SmartControl thermostatic shower fixtures"
    ],
    features: [
      "4 Bedrooms + Home Office",
      "Double-height dining atrium",
      "Landscaped terrace pergola with herb garden",
      "Staff quarters with separate service entry"
    ],
    timeline: "12 Months"
  },
  {
    id: "atelier-residence",
    title: "Atelier 24 Sanctuary",
    category: "luxury",
    categoryLabel: "Luxury Residential Home",
    location: "Pine Crest Boulevard",
    builtUpArea: "7,200 sq.ft",
    plotSize: "80 x 100 ft (8,000 sq.ft)",
    floors: "Basement + G + 2 Floors",
    architecturalStyle: "International Modernist",
    completionYear: "2026",
    status: "Under Construction",
    coverImage: "/src/assets/images/architectural_blueprint_plan_1794391710970.jpg",
    description: "A flagship residential estate featuring an engineered basement spa, triple-height entry foyer, and motorized glass sliding pocket walls that vanish into cavity walls.",
    structuralHighlights: [
      "Reinforced concrete secant pile wall for watertight basement",
      "Column-free 14m master cantilever spanning over pool",
      "Geothermal heat pump cooling system integration",
      "Grade 60 structural steel columns with fireproof intumescent coating"
    ],
    materialsUsed: [
      "Imported Greek Thassos white marble",
      "Weathering Cor-Ten steel exterior accent panels",
      "Thermally insulated triple-pane acoustic glazing",
      "Solar micro-grid with commercial-grade backup battery"
    ],
    features: [
      "5 Master Suites",
      "Private wellness spa & sauna",
      "4-Car basement showroom garage",
      "Elevator serving all 4 levels"
    ],
    timeline: "18 Months (Target Q3 2026)"
  },
  {
    id: "skyline-compact",
    title: "Urban Horizon House",
    category: "urban",
    categoryLabel: "Compact Urban Home",
    location: "City Central Parkside",
    builtUpArea: "2,600 sq.ft",
    plotSize: "30 x 40 ft (1,200 sq.ft)",
    floors: "G + 2 Floors",
    architecturalStyle: "Vertical Urban Loft",
    completionYear: "2024",
    status: "Completed",
    coverImage: "/src/assets/images/hero_luxury_modern_home_1794391709745.jpg",
    description: "A masterclass in space maximization on a narrow city plot. Lightwells pierce through all three floors to channel daylight into every corner.",
    structuralHighlights: [
      "Under-reamed pile foundation ensuring zero settlement near adjacent walls",
      "Acoustically isolated party walls achieving STC 55 sound rating",
      "High-velocity vertical airflow shafts reducing summer AC load by 35%",
      "Modular steel framed mezzanine home office"
    ],
    materialsUsed: [
      "Autoclaved Aerated Concrete (AAC) lightweight blocks",
      "Matte black architectural metalwork",
      "European white oak parquet flooring",
      "Schneider Electric automated smart switches"
    ],
    features: [
      "3 Bedrooms with built-in acoustic study nooks",
      "Rooftop entertaining deck with city skyline view",
      "Compact automated car turntable parking",
      "Zero-maintenance vertical green wall"
    ],
    timeline: "9 Months"
  },
  {
    id: "heritage-modern-retrofit",
    title: "The Heritage Modern House",
    category: "renovation",
    categoryLabel: "Renovation & Remodeling",
    location: "Old Cantonment Gardens",
    builtUpArea: "4,600 sq.ft",
    plotSize: "60 x 90 ft (5,400 sq.ft)",
    floors: "G + 1 Retrofit",
    architecturalStyle: "Colonial Modern Architectural Revival",
    completionYear: "2024",
    status: "Completed",
    coverImage: "/src/assets/images/luxury_interior_finishing_1794391709717.jpg",
    description: "Sensitive structural rehabilitation of a 45-year-old load-bearing masonry house into a breathable, solar-powered luxury family residence.",
    structuralHighlights: [
      "Insertion of structural steel portal frames to create open living layout",
      "Foundation underpinning and pressure-injected chemical damp-proof course",
      "Complete replacement of outdated plumbing and electrical risers",
      "Restoration of heritage teakwood rafters paired with insulated clay tiles"
    ],
    materialsUsed: [
      "Reclaimed vintage brickwork with lime mortar pointing",
      "Hydraulic pressed encaustic floor tiles",
      "Custom cast-bronze architectural hardware",
      "Low-emissivity heritage casement windows"
    ],
    features: [
      "Restored wrap-around verandah",
      "Open-concept chef's kitchen with brass island",
      "Modern insulated master wing with walk-in closet",
      "Smart water recycling system for garden irrigation"
    ],
    timeline: "7 Months"
  }
];

export const PACKAGES: ConstructionPackage[] = [
  {
    id: "essential",
    name: "Essential Construction Package",
    tier: "essential",
    pricePerSqFt: 1850,
    currency: "$",
    summary: "Solid, certified structural engineering and dependable finishes for budget-conscious quality homes.",
    inclusions: [
      {
        category: "Architectural & Structural",
        items: [
          "Complete 2D architectural floor plan & basic 3D elevation",
          "Soil testing and certified structural load design",
          "Civil engineering site supervision and municipal layout markout"
        ]
      },
      {
        category: "Civil & Masonry",
        items: [
          "RCC framed structure with Fe550D TMT rebar",
          "Ultratech / Birla 53-grade OPC cement",
          "6\" solid concrete blocks / wire-cut red bricks for external walls",
          "Anti-termite treatment with 5-year certificate"
        ]
      },
      {
        category: "Finishing & MEP",
        items: [
          "Double-charged vitrified floor tiles (up to $65/sq.m allowance)",
          "Polycab / Finolex FRLS fire-retardant electrical wiring",
          "Astral / Supreme CPVC plumbing lines",
          "Cera / Parryware sanitaryware & chrome CP fittings",
          "Asian Paints Tractor Emulsion interior & Apex exterior"
        ]
      }
    ],
    specifications: {
      steel: "Fe550D TMT (Jindal / Kamdhenu / Tata Tiscon equivalent)",
      cement: "Ultratech / Birla A1 / ACC 53 Grade",
      masonry: "6\" Solid Concrete Blocks (Class A) / Red Clay Bricks",
      flooring: "2x2 ft Double Charged Vitrified Tiles",
      electrical: "Polycab Fire-Resistant FRLS copper wires with modular plates",
      plumbing: "Astral CPVC piping with anti-clog valves",
      paint: "Asian Paints Tractor interior + Apex Weatherproof exterior",
      doorsWindows: "Flush door with teak veneer finish; 3-track UPVC sliding windows"
    },
    exclusions: [
      "Compound wall and main gate (quoted separately as per running feet)",
      "Solar PV array and battery backup",
      "Loose furniture and home automation",
      "Government plan sanction and utility deposit fees"
    ]
  },
  {
    id: "premium",
    name: "Premium Construction Package",
    tier: "premium",
    pricePerSqFt: 2450,
    currency: "$",
    badge: "Most Selected",
    summary: "Elevated architectural detailing, acoustic glass, imported tiles, and comprehensive project management.",
    inclusions: [
      {
        category: "Architectural & Engineering",
        items: [
          "Comprehensive 2D working drawings + VR 3D Walkthrough",
          "Vastu & Solar light analysis reports",
          "Dedicated site manager & digital weekly progress log with CCTV access",
          "10-Year Structural Stability Warranty certificate"
        ]
      },
      {
        category: "Civil & Materials",
        items: [
          "Tata Tiscon Fe550D primary steel rebar",
          "Ready-Mix Concrete (RMC) M25 grade with cube compression testing",
          "Under-slab waterproofing and Dr. Fixit 3-coat terrace polymer membrane",
          "Hardwood teak door frames with designer fluted panel doors"
        ]
      },
      {
        category: "Finishing & Fixtures",
        items: [
          "Large format GVT glazed vitrified tiles (up to $110/sq.m allowance)",
          "Kohler / Grohe concealed thermostatic plumbing fixtures",
          "Schneider Electric / Legrand Arteor modular switches",
          "Saint-Gobain acoustic double-glazed UPVC / aluminum window profiles",
          "Asian Paints Royale Luxury Emulsion interior finish"
        ]
      }
    ],
    specifications: {
      steel: "Tata Tiscon Fe550D Super Ductile Rebar",
      cement: "Ultratech Super / ACC Concrete Plus 53 Grade",
      masonry: "Wienerberger Porotherm Clay Bricks (High Thermal Insulation)",
      flooring: "4x2 ft Glazed Vitrified GVT Tiles / Engineered Wood Option",
      electrical: "Finolex / Havells multi-strand wires with Legrand Arteor switches",
      plumbing: "Supreme / Astral SDR-11 piping with Grohe / Kohler fixtures",
      paint: "Asian Paints Royale interior with anti-fungal silicone exterior",
      doorsWindows: "First-class Burma teak main door; Fenesta heavy UPVC double-glazed windows"
    },
    exclusions: [
      "High-voltage transformer substation (if required by local utility)",
      "Bespoke loose furniture and custom chandeliers",
      "Swimming pool filtration equipment (available as custom add-on)"
    ]
  },
  {
    id: "luxury",
    name: "Luxury Architectural Package",
    tier: "luxury",
    pricePerSqFt: 3450,
    currency: "$",
    badge: "Signature Collection",
    summary: "Ultra-luxury bespoke craftsmanship, Italian marble, cantilevered engineering, and full automation.",
    inclusions: [
      {
        category: "Design & Master Planning",
        items: [
          "Principal Architect lead design + MEP + Lighting design consultant",
          "Full building BIM 3D model and acoustic engineering",
          "Turnkey municipal approvals and environmental clearance facilitation",
          "Lifetime structural audit support and 15-year warranty"
        ]
      },
      {
        category: "Civil Craftsmanship",
        items: [
          "Post-tensioned long-span slab casting for column-free living zones",
          "Board-formed architectural exposed concrete finish options",
          "Full basement waterproofing with bentonite waterproofing membrane",
          "Cor-Ten steel or natural stone cladding exterior facade integration"
        ]
      },
      {
        category: "Finishing & Smart Living",
        items: [
          "Imported Italian Botticino / Statuario marble flooring with epoxy grout",
          "Hansgrohe Axor / Toto Neorest smart sanitary fittings",
          "Full KNX / Control4 smart home lighting and climate automation",
          "Reynaers / Schuco floor-to-ceiling minimal frame motorized sliding glass",
          "Solid season-cured Burmese teakwood woodwork throughout"
        ]
      }
    ],
    specifications: {
      steel: "Primary Steel: Tata Tiscon / SAIL Fe550D with anti-corrosion coating",
      cement: "Ultratech Premium M30/M35 Design-Mix with micro-silica",
      masonry: "Custom Wire-cut Clinker Bricks or Porotherm Thermobrick",
      flooring: "Italian Marble (Bottochino / Michaelangelo) + Solid Oak Hardwood",
      electrical: "Lapp Kabel Germany wiring + KNX / Lutron architectural automation",
      plumbing: "Geberit concealed cisterns, Viega press-fit piping, Axor Hansgrohe",
      paint: "Oikos Italian stucco decorative plaster + Jotun exterior silicone",
      doorsWindows: "Schüco / Reynaers slimline thermal break aluminum systems with 28mm DGU"
    },
    exclusions: [
      "Custom art curation and bespoke antique procurement",
      "Specialized geothermal drilling (if requested)"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation & Site Audit",
    duration: "Week 1",
    summary: "Understanding your lifestyle, plot topography, soil profile, and investment parameters.",
    deliverables: [
      "Plot boundary verification & geo-coordinate check",
      "Preliminary soil bearing test consultation",
      "Comprehensive homeowner lifestyle & space briefing dossier",
      "Indicative budget range & feasibility outline"
    ],
    keyChecks: [
      "Municipal setback guidelines & FAR compliance",
      "Groundwater table & drainage slope assessment",
      "Road width access for concrete transit mixers"
    ],
    description: "We meet at your plot or our design studio to analyze orientation, wind patterns, family requirements, and budget expectations. We inspect access roads, utility connections, and local municipal zoning laws."
  },
  {
    step: 2,
    title: "Architectural Planning & 3D Concepts",
    duration: "Weeks 2 - 4",
    summary: "Iterative floor plans, structural layouts, photorealistic 3D elevations, and Vastu orientation.",
    deliverables: [
      "2D Architectural schematic plans with exact dimensions",
      "Photorealistic day and twilight 3D exterior renders",
      "Detailed structural column grid and foundation engineering",
      "Full window schedule, solar path analysis, and door layouts"
    ],
    keyChecks: [
      "Light and ventilation cross-flow verification",
      "Furniture placement and functional pathway clearances",
      "Structural beam depth coordination to preserve ceiling heights"
    ],
    description: "Our architectural team drafts initial layout concepts and refines them with you until every square foot feels purposeful. Once the 2D layout is locked, we render 3D visuals and complete structural calculations."
  },
  {
    step: 3,
    title: "Itemized BOQ Estimate & Contract",
    duration: "Week 5",
    summary: "Transparent Bill of Quantities (BOQ), material specifications, fixed pricing, and milestone schedule.",
    deliverables: [
      "Exhaustive line-item BOQ detailing brand specifications",
      "Milestone-based payment schedule tied to concrete physical progress",
      "Legally binding construction agreement with penalty clauses",
      "Detailed Gantt chart timeline with target inspection dates"
    ],
    keyChecks: [
      "Zero hidden cost clauses or arbitrary price escalation formulas",
      "Brand-specific fixture allowances confirmed in writing",
      "Insurance coverage and worker safety protocols defined"
    ],
    description: "Transparency is our highest virtue. You receive an exhaustive line-by-line contract that outlines every bag of cement, brand of steel, and plumbing fixture with defined milestones. No surprise price hikes mid-construction."
  },
  {
    step: 4,
    title: "Structural Construction & Civil Execution",
    duration: "Months 2 - 7",
    summary: "Excavation, foundation, columns, beams, brickwork, slab casting, and rigorous QA tests.",
    deliverables: [
      "Anti-termite treatment certificate",
      "Foundation footing and plinth beam casting",
      "Slab casting logs with slump tests & concrete cube compression reports",
      "Daily digital site log photos uploaded to client portal"
    ],
    keyChecks: [
      "Rebar cover block positioning before every pour",
      "21-day continuous water curing monitoring",
      "Plumb line and diagonal squareness verification of all brick masonry"
    ],
    description: "Our civil engineering team breaks ground. Dedicated site supervisors coordinate soil compaction, rebar tying, shuttering checks, and concrete pours. You receive daily photographic logs and weekly video walkthroughs."
  },
  {
    step: 5,
    title: "Finishing, MEP & 360° Inspection",
    duration: "Months 8 - 11",
    summary: "Plumbing pressure testing, electrical wiring, plastering, waterproofing, tiling, and joinery.",
    deliverables: [
      "Hydrostatic pressure test report of all water lines",
      "Megger insulation test report of electrical circuits",
      "Flood-test certification of all sunken bathrooms & terrace (72 hrs)",
      "High-precision laser leveling of flooring across all rooms"
    ],
    keyChecks: [
      "Zero hollow sound tiles inspection",
      "Door swing clearances and acoustic seal checks",
      "Paint surface smoothness under oblique raking light"
    ],
    description: "We transition to delicate craftsmanship. Electrical conduits, concealed plumbing, and multi-layer waterproofing are pressure-tested before plastering. Tiles are laser-aligned and custom woodwork is installed with millimeter precision."
  },
  {
    step: 6,
    title: "Final Handover & 10-Year Warranty",
    duration: "Month 12",
    summary: "Deep chemical cleaning, municipal occupancy clearance, keys presentation, and warranty handover.",
    deliverables: [
      "Architectural 'As-Built' drawings and conduit mapping",
      "10-Year Structural Stability Warranty certificate",
      "Manufacturer warranty cards for all installed equipment & MEP",
      "Ceremonial key set, owner's manual, and complimentary 1-year service pass"
    ],
    keyChecks: [
      "Joint comprehensive snag list verification with homeowner",
      "Appliance testing and smart system walkthrough",
      "Deep cleaning of all glass, stone, and wood surfaces"
    ],
    description: "We walk every room together with a digital checklist. Once every detail meets our uncompromising standards, we present you with your keys, an as-built schematic file for future reference, and your formal structural warranty."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Dr. Arvind & Sunita Rao",
    location: "Highland Estates",
    projectType: "5,400 sq.ft Modern Contemporary Villa",
    builtUpArea: "5,400 sq.ft",
    year: "Completed 2025",
    highlight: "Delivered 18 days ahead of schedule with zero price escalation.",
    quote: "Building a house has a reputation for being stressful, but Valence was an absolute revelation. Their weekly digital logs kept us fully informed even when I was travelling for surgery. The structural finish and board-formed concrete work are museum-grade. Every rupee was accounted for.",
    rating: 5
  },
  {
    id: "test-2",
    clientName: "Marcus & Priya Sterling",
    location: "Oakridge Ridge",
    projectType: "4,200 sq.ft Duplex Home with Courtyard",
    builtUpArea: "4,200 sq.ft",
    year: "Completed 2024",
    highlight: "Masterful natural lighting study and acoustic isolation.",
    quote: "We wanted a home that celebrated natural sunlight without becoming a greenhouse in summer. Valence's architectural team modeled the solar angles perfectly. Their structural engineers solved our 10-meter column-free living room seamlessly. Our electricity bills are 40% lower than our old townhouse.",
    rating: 5
  },
  {
    id: "test-3",
    clientName: "Vikramaditya Singhania",
    location: "Meadowbrook Enclave",
    projectType: "3,850 sq.ft Independent Residence",
    builtUpArea: "3,850 sq.ft",
    year: "Completed 2025",
    highlight: "Uncompromising engineering rigor and transparent procurement.",
    quote: "As a civil engineer myself, I audited their rebar tying and concrete cube test reports personally. Their site team didn't cut a single corner. The waterproof flood testing on the terrace lasted four full days before they approved the tile laying. You cannot fake this level of professional pride.",
    rating: 5
  },
  {
    id: "test-4",
    clientName: "Elena Rostova",
    location: "City Central Parkside",
    projectType: "2,600 sq.ft Compact Urban Home",
    builtUpArea: "2,600 sq.ft",
    year: "Completed 2024",
    highlight: "Turnkey execution with zero neighbor friction on a tight plot.",
    quote: "Constructing on a 30x40 city plot surrounded by neighbors seemed impossible. Valence coordinated all permits, used micro-piles so the neighboring foundations were untouched, and kept the street spotless. They handed over a masterpiece on the exact date agreed in the contract.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What services are included in your turnkey home construction?",
    category: "Services",
    answer: "Our turnkey service is 100% comprehensive. It covers architectural floor plans, 3D elevation designs, structural load engineering, municipal permit coordination, soil testing, civil excavation, RCC framed structure, masonry, plumbing, electrical wiring, waterproofing, premium flooring, painting, door/window joinery, sanitaryware installation, and pre-handover deep cleaning. You receive a fully finished home ready for immediate furnishing and move-in."
  },
  {
    question: "How much does it cost to construct a residential house?",
    category: "Pricing",
    answer: "Residential construction costs typically range from $1,850 to $3,450 per square foot (or ₹1,850 to ₹3,500/sq.ft depending on regional currency context), based on the architectural complexity, soil conditions, and finish specifications. Our Essential Package starts at $1,850/sq.ft, our Premium Package averages $2,450/sq.ft, and our Luxury Architectural Package with Italian marble and custom facades is $3,450+/sq.ft. We provide an exact, itemized Bill of Quantities (BOQ) with zero hidden markups before work commences."
  },
  {
    question: "Can I customize the architectural design and floor plans?",
    category: "Design",
    answer: "Absolutely. Every Valence home is bespoke. We never use generic template blueprints. Our in-house architects work directly with you to tailor room dimensions, solar orientation, Vastu or Feng Shui preferences, private courtyards, double-height volumes, and specific storage requirements to your family's exact lifestyle."
  },
  {
    question: "Do you provide architectural and structural planning if I already have a builder?",
    category: "Engineering",
    answer: "Yes, our Architectural Design & Structural Engineering division operates both as part of turnkey contracts and as an independent consultancy. We can produce complete sanction sets, 3D photorealistic renderings, working structural drawings, MEP layouts, and provide periodic structural site audit supervision."
  },
  {
    question: "How long does it take to construct an independent residential house?",
    category: "Timeline",
    answer: "A typical 3,000 to 4,500 sq.ft independent home takes between 9 and 12 months from groundbreaking to keys handover. Larger custom luxury estates (6,000+ sq.ft) with basements and intricate imported finishes take 13 to 16 months. We issue a legally binding milestone schedule with a weekly Gantt chart tracker."
  },
  {
    question: "Can I choose or upgrade specific construction materials?",
    category: "Materials",
    answer: "Yes. In our detailed contract, every material category has a defined unit rate and brand specification (e.g., Kohler, Grohe, Italian marble, teakwood, Saint-Gobain glass). If you wish to upgrade to a specific designer fixture or custom imported stone, we adjust the line item directly at actual cost without penalty markups."
  },
  {
    question: "Do you provide fixed-cost guarantees against price escalation?",
    category: "Contracts",
    answer: "Yes. Once the final drawings and Bill of Quantities (BOQ) are signed, our turnkey contract locks the price for the agreed scope of work. We absorb routine material market fluctuations by maintaining direct manufacturer procurement contracts for steel, cement, and electrical supplies."
  },
  {
    question: "What warranties and guarantees do you provide after handover?",
    category: "Warranty",
    answer: "All Valence residential projects are backed by a formal 10-Year Structural Stability Warranty covering foundations, columns, beams, and load-bearing elements. We also provide a 1-Year Comprehensive Defect Liability Period where our service crew handles any plumbing, electrical, or cosmetic adjustments free of charge, plus manufacturer warranties on all installed fixtures."
  },
  {
    question: "Do you handle home renovation and vertical floor additions?",
    category: "Renovation",
    answer: "Yes. We have a dedicated team for structural retrofitting, architectural remodeling, and vertical additions. Before touching an existing building, our licensed structural engineers perform non-destructive concrete rebound hammer tests and foundation capacity checks to ensure total safety."
  },
  {
    question: "How do I get started with my home construction project?",
    category: "Onboarding",
    answer: "Getting started is simple. You can submit your plot details and requirements using our online consultation form or call our office. We arrange a complimentary initial consultation (in-person or virtual) and a free site visit to assess plot topography, after which we deliver a preliminary concept outline and budget estimate."
  }
];

export const GUIDES: ConstructionGuide[] = [
  {
    id: "soil-testing-guide",
    title: "Why Geotechnical Soil Testing Determines Your Home's Generational Lifespan",
    readTime: "5 min read",
    date: "March 2026",
    category: "Engineering Insights",
    summary: "Discover why spending 1% of your budget on borehole soil investigation prevents millions in foundation settlement and wall cracks decades down the road.",
    content: [
      "Many first-time builders skip borehole soil testing to save a nominal fee, relying on neighboring assumptions. However, sub-surface soil strata can vary drastically within just 20 meters.",
      "Black cotton soil, clay pockets, or loose alluvial backfill require specific footing types—such as deep under-reamed piles or continuous raft foundations—to resist seasonal swelling and shrinkage.",
      "At Valence, every project begins with a 3-point borehole core sample to determine safe bearing capacity (SBC) before a single structural column is drafted."
    ]
  },
  {
    id: "turnkey-vs-labor-contract",
    title: "Turnkey vs. Labor-Only Contracts: A Clear Cost & Stress Analysis",
    readTime: "7 min read",
    date: "February 2026",
    category: "Project Management",
    summary: "A transparent breakdown of why sourcing your own materials often leads to 25% cost overruns, supplier delays, and split accountability.",
    content: [
      "In a labor-only contract, the homeowner acts as the unpaid procurement manager—negotiating cement truck deliveries, resolving missing rebar specs, and refereeing disputes between plumbers and bricklayers.",
      "When a crack occurs, the labor contractor blames the cement supplier, and the cement supplier blames the curing schedule. In a turnkey model, single-point accountability guarantees that one licensed firm owns the result.",
      "Because established construction firms purchase steel, cement, and sanitaryware at institutional bulk discounts, turnkey projects frequently cost less overall while finishing 3 to 5 months faster."
    ]
  },
  {
    id: "waterproofing-mastery",
    title: "The 3 Critical Waterproofing Failures in Modern Homes and How to Prevent Them",
    readTime: "6 min read",
    date: "January 2026",
    category: "Quality Standards",
    summary: "From sunken toilet slabs to rooftop solar anchors, learn the multi-layer elastomeric protocols that guarantee 100% leak-proof living.",
    content: [
      "Over 80% of post-construction disputes stem from dampness, efflorescence, and water seepage. The most vulnerable spots are plumbing pipe penetrations through RCC slabs and perimeter parapet flashing.",
      "Traditional brick-bat coba is no longer adequate for modern residences. We utilize high-solid elastomeric polyurethane membranes reinforced with non-woven geotextile scrims.",
      "Every bathroom and terrace is subjected to a mandatory 72-hour ponding test (flooding the slab with 2 inches of colored water) before protective screeds and tiles are laid."
    ]
  }
];

export const TRUST_STATS = [
  { label: "Completed Residential Homes", value: "140+" },
  { label: "On-Time Handover Rate", value: "99.4%" },
  { label: "Structural Warranty", value: "10 Years" },
  { label: "Client Satisfaction Rating", value: "4.9 / 5.0" }
];

export const SERVICE_AREAS = [
  "Metro Central",
  "Highland Estates",
  "Oakridge Foothills",
  "Meadowbrook Valley",
  "Pine Crest Boulevard",
  "Lakeview Residential District",
  "Cantonment Enclave",
  "Greenfield Eco-Zone"
];
