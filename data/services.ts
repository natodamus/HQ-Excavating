export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  overview: string[];
  capabilities: string[];
  process: {
    title: string;
    description: string;
  }[];
  relatedImages: {
    image: string;
    category: string;
    title: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    slug: "site-development",
    title: "Site Development",
    shortDescription:
      "Complete site preparation for residential and commercial construction projects.",
    heroDescription:
      "From clearing and excavation through drainage, utilities, grading, and final preparation, we provide coordinated site-development services built around the needs of the project.",
    image: "/images/projects/hero-trench.webp",
    overview: [
      "A successful construction project begins with a properly prepared site. High Quality Excavating provides complete site-development services for residential and commercial properties throughout Massachusetts.",
      "We evaluate the conditions of the property, coordinate the required excavation and infrastructure work, and prepare the site for the next phase of construction.",
      "Our approach emphasizes accurate excavation, proper drainage, dependable scheduling, and clear communication throughout the project.",
    ],
    capabilities: [
      "Land clearing and site preparation",
      "Building pad excavation",
      "Rough and finish grading",
      "Underground utility installation",
      "Drainage and stormwater systems",
      "Foundation excavation",
      "Driveway and access preparation",
      "Backfilling and compaction",
    ],
    process: [
      {
        title: "Site Review",
        description:
          "We review the property, access conditions, plans, elevations, and the overall scope of work.",
      },
      {
        title: "Project Planning",
        description:
          "We coordinate excavation, drainage, utilities, equipment access, and material requirements.",
      },
      {
        title: "Site Preparation",
        description:
          "The site is cleared, excavated, graded, and prepared according to the project specifications.",
      },
      {
        title: "Final Preparation",
        description:
          "We complete backfilling, compaction, finish grading, and preparation for the next contractor.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/foundation-drainage.webp",
        category: "Foundation Work",
        title: "Foundation site preparation",
        description:
          "Excavation, drainage preparation, and careful backfilling around a new foundation.",
      },
      {
        image: "/images/projects/utility-trench.webp",
        category: "Utilities",
        title: "Underground utility coordination",
        description:
          "Trenching and installation coordinated with the surrounding site work.",
      },
      {
        image: "/images/projects/asphalt-restoration.webp",
        category: "Site Restoration",
        title: "Prepared for the next phase",
        description:
          "Compaction and surface preparation completed after excavation work.",
      },
    ],
  },
  {
    slug: "excavation",
    title: "Excavation",
    shortDescription:
      "Professional excavation for construction, site improvements, utilities, and property preparation.",
    heroDescription:
      "Professional excavation requires the right equipment, careful planning, and an understanding of the surrounding property. We provide precise excavation for projects of varying sizes.",
    image: "/images/projects/hydraulic-hammer.webp",
    overview: [
      "High Quality Excavating provides professional excavation services for residential and commercial construction projects.",
      "Whether the project involves preparing a building site, removing unsuitable material, opening a utility trench, or reshaping the property, we perform the work carefully and efficiently.",
      "We pay close attention to access, existing structures, utilities, drainage patterns, and the condition in which the site must be left.",
    ],
    capabilities: [
      "General excavation",
      "Building and addition excavation",
      "Trench excavation",
      "Material removal",
      "Rock and concrete breaking",
      "Cut and fill operations",
      "Driveway excavation",
      "Pool and landscape excavation",
    ],
    process: [
      {
        title: "Evaluate",
        description:
          "We review the excavation area, site access, proposed depths, existing utilities, and project plans.",
      },
      {
        title: "Prepare",
        description:
          "We establish safe equipment access and determine the proper excavation and material-handling approach.",
      },
      {
        title: "Excavate",
        description:
          "Material is removed carefully while maintaining the required dimensions and elevations.",
      },
      {
        title: "Complete",
        description:
          "The area is cleaned, graded, compacted, or prepared for the next stage of work.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/hydraulic-hammer.webp",
        category: "Heavy Excavation",
        title: "Concrete and rock removal",
        description:
          "Hydraulic equipment used for demanding demolition and excavation work.",
      },
      {
        image: "/images/projects/hero-trench.webp",
        category: "Trenching",
        title: "Controlled excavation",
        description:
          "Careful trench excavation through an active construction site.",
      },
      {
        image: "/images/projects/asphalt-restoration.webp",
        category: "Restoration",
        title: "Site prepared after excavation",
        description:
          "Final compaction and surface preparation after underground work.",
      },
    ],
  },
  {
    slug: "underground-utilities",
    title: "Underground Utilities",
    shortDescription:
      "Trenching and installation support for water, sewer, drainage, electrical, and other underground systems.",
    heroDescription:
      "We provide careful trenching, bedding, backfilling, and site coordination for underground utility installations.",
    image: "/images/projects/utility-trench.webp",
    overview: [
      "Underground utility installation requires accurate trench depths, proper bedding, controlled backfilling, and coordination with the rest of the construction site.",
      "High Quality Excavating provides excavation and installation support for water, sewer, drainage, electrical, and other underground systems.",
      "Our work is performed with attention to existing utilities, property conditions, required elevations, and long-term system performance.",
    ],
    capabilities: [
      "Water service trenching",
      "Sewer service excavation",
      "Electrical conduit trenching",
      "Drainage pipe installation",
      "Utility bedding preparation",
      "Backfilling and compaction",
      "Utility crossing coordination",
      "Surface restoration",
    ],
    process: [
      {
        title: "Layout",
        description:
          "The utility route, elevations, connection points, and site constraints are reviewed before excavation.",
      },
      {
        title: "Trenching",
        description:
          "The trench is excavated to the required dimensions while protecting the surrounding property.",
      },
      {
        title: "Installation Support",
        description:
          "Bedding, pipe placement, conduit installation, and connection work are coordinated as required.",
      },
      {
        title: "Backfill",
        description:
          "The trench is backfilled, compacted, graded, and prepared for surface restoration.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/utility-trench.webp",
        category: "Utility Trenching",
        title: "Precision trench excavation",
        description:
          "Accurate trenching and pipe installation through an active jobsite.",
      },
      {
        image: "/images/projects/stormwater-install.webp",
        category: "Drainage Utilities",
        title: "Pipe and aggregate placement",
        description:
          "Drainage bedding and stone installation using professional equipment.",
      },
      {
        image: "/images/projects/asphalt-restoration.webp",
        category: "Restoration",
        title: "Completed utility area",
        description:
          "Compaction and surface restoration after underground installation.",
      },
    ],
  },
  {
    slug: "drainage",
    title: "Drainage",
    shortDescription:
      "Practical drainage solutions designed to control water and protect the property.",
    heroDescription:
      "Proper drainage protects foundations, driveways, lawns, and construction sites. We install drainage systems designed around the conditions of the property.",
    image: "/images/projects/stormwater-install.webp",
    overview: [
      "Water problems can damage foundations, wash out soil, create standing water, and make portions of a property difficult to use.",
      "High Quality Excavating installs practical drainage solutions based on the layout, elevations, soil conditions, and intended use of the site.",
      "We focus on creating reliable paths for water while minimizing unnecessary disruption to the surrounding property.",
    ],
    capabilities: [
      "Foundation drainage",
      "French drains",
      "Curtain drains",
      "Catch basin installation",
      "Drainage pipe installation",
      "Downspout drainage",
      "Swale construction",
      "Grading for water control",
    ],
    process: [
      {
        title: "Assess",
        description:
          "We identify where water originates, how it moves across the property, and where it can be discharged.",
      },
      {
        title: "Design",
        description:
          "The drainage route, pipe elevations, aggregate, structures, and grading requirements are determined.",
      },
      {
        title: "Install",
        description:
          "Drainage components are installed with proper bedding, slope, and connections.",
      },
      {
        title: "Restore",
        description:
          "The disturbed area is backfilled, compacted, and graded to support the completed system.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/foundation-drainage.webp",
        category: "Foundation Drainage",
        title: "Foundation protection",
        description:
          "Drainage piping and aggregate installed around a new foundation.",
      },
      {
        image: "/images/projects/stormwater-install.webp",
        category: "Drainage Installation",
        title: "Stone and drainage placement",
        description:
          "Proper aggregate and pipe installation for dependable water management.",
      },
      {
        image: "/images/projects/detention-system.webp",
        category: "Stormwater",
        title: "Subsurface water management",
        description:
          "Underground chambers and drainage components installed beneath the site.",
      },
    ],
  },
  {
    slug: "demolition",
    title: "Demolition",
    shortDescription:
      "Controlled demolition and removal for structures, concrete, pavement, and site improvements.",
    heroDescription:
      "We provide controlled demolition using professional equipment, careful planning, and coordinated debris removal.",
    image: "/images/projects/hydraulic-hammer.webp",
    overview: [
      "Demolition work must be performed with attention to the surrounding structures, utilities, access limitations, and the condition required for the next phase of construction.",
      "High Quality Excavating provides demolition and removal services for concrete, pavement, structures, and other site improvements.",
      "We coordinate breaking, removal, material handling, and final site preparation to keep the work organized and efficient.",
    ],
    capabilities: [
      "Concrete demolition",
      "Foundation removal",
      "Pavement removal",
      "Small structure demolition",
      "Hydraulic hammer work",
      "Debris loading and removal",
      "Site clearing",
      "Post-demolition grading",
    ],
    process: [
      {
        title: "Review",
        description:
          "The structure, utilities, surrounding improvements, access, and removal requirements are evaluated.",
      },
      {
        title: "Prepare",
        description:
          "The work area is organized and the appropriate equipment and removal plan are established.",
      },
      {
        title: "Demolish",
        description:
          "Materials are broken, separated, loaded, and removed in a controlled sequence.",
      },
      {
        title: "Clean Up",
        description:
          "The area is cleared, backfilled where necessary, and graded for the next phase.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/hydraulic-hammer.webp",
        category: "Concrete Demolition",
        title: "Hydraulic demolition",
        description:
          "Professional hydraulic equipment used to break heavy concrete.",
      },
      {
        image: "/images/projects/asphalt-restoration.webp",
        category: "Surface Work",
        title: "Removal and restoration",
        description:
          "Surface demolition followed by compaction and site restoration.",
      },
      {
        image: "/images/projects/hero-trench.webp",
        category: "Site Preparation",
        title: "Ready for reconstruction",
        description:
          "Excavation and cleanup completed for the next stage of work.",
      },
    ],
  },
  {
    slug: "foundation-excavation",
    title: "Foundation Excavation",
    shortDescription:
      "Accurate excavation, drainage preparation, and backfilling for foundations and additions.",
    heroDescription:
      "Foundation excavation sets the dimensions, elevations, and working conditions for the structure that follows. We perform this work carefully and accurately.",
    image: "/images/projects/foundation-drainage.webp",
    overview: [
      "Accurate foundation excavation is essential to keeping a construction project on schedule and providing the proper working area for foundation installation.",
      "High Quality Excavating performs foundation excavation for new homes, additions, garages, and other structures.",
      "We coordinate excavation depths, access, material handling, drainage preparation, and backfilling with the requirements of the project.",
    ],
    capabilities: [
      "New home foundation excavation",
      "Addition excavation",
      "Garage foundation excavation",
      "Footing excavation",
      "Over-excavation and material replacement",
      "Foundation drainage preparation",
      "Backfilling",
      "Final grading around foundations",
    ],
    process: [
      {
        title: "Layout Review",
        description:
          "Foundation dimensions, elevations, setbacks, access, and excavation limits are reviewed.",
      },
      {
        title: "Excavation",
        description:
          "The foundation area is excavated to provide the required depth and working room.",
      },
      {
        title: "Drainage Preparation",
        description:
          "The area is prepared for foundation drainage, aggregate, waterproofing support, and utilities.",
      },
      {
        title: "Backfill and Grade",
        description:
          "After foundation work, the area is backfilled, compacted, and graded appropriately.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/foundation-drainage.webp",
        category: "Foundation Excavation",
        title: "Foundation prepared correctly",
        description:
          "Excavation, drainage, waterproofing support, and careful backfill.",
      },
      {
        image: "/images/projects/stormwater-install.webp",
        category: "Drainage",
        title: "Aggregate and drainage work",
        description:
          "Stone placement and drainage installation adjacent to new construction.",
      },
      {
        image: "/images/projects/hero-trench.webp",
        category: "Site Development",
        title: "Construction-site excavation",
        description:
          "Professional excavation coordinated with ongoing site development.",
      },
    ],
  },
  {
    slug: "stormwater-management",
    title: "Stormwater Management",
    shortDescription:
      "Underground detention, infiltration, drainage, and water-management system installation.",
    heroDescription:
      "We install stormwater systems that help control runoff, manage peak flows, and support the long-term performance of the developed property.",
    image: "/images/projects/detention-system.webp",
    overview: [
      "Stormwater systems play an important role in controlling runoff and protecting developed properties from erosion, flooding, and drainage problems.",
      "High Quality Excavating provides excavation and installation support for underground detention, infiltration, drainage, and related stormwater systems.",
      "We coordinate excavation, subgrade preparation, aggregate placement, system installation, connections, backfilling, and compaction.",
    ],
    capabilities: [
      "Underground detention systems",
      "Infiltration systems",
      "Stormwater chamber installation",
      "Catch basins and manholes",
      "Drainage structures",
      "Aggregate bedding and surround",
      "Stormwater pipe installation",
      "Backfilling and compaction",
    ],
    process: [
      {
        title: "Plan Review",
        description:
          "System dimensions, elevations, structures, piping, material specifications, and site access are reviewed.",
      },
      {
        title: "Excavation",
        description:
          "The system area is excavated and the subgrade is prepared to the required elevations.",
      },
      {
        title: "Installation",
        description:
          "Aggregate, chambers, piping, structures, and connections are installed according to the project requirements.",
      },
      {
        title: "Backfill",
        description:
          "The system is carefully surrounded, backfilled, compacted, and prepared for the finished surface.",
      },
    ],
    relatedImages: [
      {
        image: "/images/projects/detention-system.webp",
        category: "Stormwater Management",
        title: "Underground detention installation",
        description:
          "Subsurface chambers, aggregate, and utility coordination.",
      },
      {
        image: "/images/projects/stormwater-install.webp",
        category: "Drainage",
        title: "System bedding and stone",
        description:
          "Aggregate placement and drainage installation using full-size equipment.",
      },
      {
        image: "/images/projects/utility-trench.webp",
        category: "Stormwater Utilities",
        title: "Pipe connections",
        description:
          "Careful trenching and underground pipe installation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}