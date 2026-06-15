export type CarStatus = "draft" | "published" | "sold";

export type Car = {
  id: string;
  slug: string;
  licensePlate: string;
  brand: string;
  model: string;
  title: string;
  version: string;
  price: number | null;
  year: number | null;
  buildMonth?: string;
  firstRegistration: string | null;
  mileage: number | null;
  powerHp: number | null;
  powerKw: number | null;
  engineSize?: string | null;
  engineSizeCc: number | null;
  cylinders?: number | null;
  fuel: string | null;
  transmission: string | null;
  bodyType: string | null;
  color: string | null;
  doors: number | null;
  seats: number | null;
  apk: string | null;
  nap: string | null;
  imported: boolean | null;
  wokStatus: string | null;
  maintenanceBooklets?: string | null;
  keys?: number | null;
  featured: boolean;
  status: CarStatus;
  badges?: string[];
  labels: string[];
  images: string[];
  options: string[];
  attentionPoints?: string[];
  description: string;
  descriptionSections?: {
    title: string;
    body?: string;
    items?: string[];
  }[];
};

export const cars: Car[] = [
  {
    id: "seat-leon-x-634-fv",
    slug: "seat-leon-fr-14-tsi-90kw-2013-x-634-fv",
    licensePlate: "X-634-FV",
    brand: "Seat",
    model: "Leon",
    title: "Seat Leon FR 1.4 TSI 90KW",
    version: "FR 1.4 TSI 90KW",
    price: null,
    year: 2013,
    firstRegistration: null,
    mileage: 148000,
    powerHp: 122,
    powerKw: 90,
    engineSize: "1.4 liter",
    engineSizeCc: null,
    fuel: "Benzine",
    transmission: "Handgeschakeld 6 versnellingen",
    bodyType: "Hatchback",
    color: "Zwart",
    doors: 5,
    seats: 5,
    apk: "31 augustus 2026",
    nap: null,
    imported: null,
    wokStatus: null,
    maintenanceBooklets: null,
    keys: null,
    featured: true,
    status: "published",
    badges: ["FR-uitvoering", "Stage 1", "APK tot 2026", "Sportief"],
    labels: ["FR-uitvoering", "Stage 1", "APK tot 2026", "Sportief"],
    images: [
      "/cars/seat-leon/1.png",
      "/cars/seat-leon/2.png",
      "/cars/seat-leon/3.png",
      "/cars/seat-leon/4.png",
      "/cars/seat-leon/5.png",
      "/cars/seat-leon/6.png",
      "/cars/seat-leon/8.png",
      "/cars/seat-leon/9.png",
    ],
    options: [
      "FR-uitvoering",
      "Sfeervolle interieurverlichting",
      "Verlichting bedienbaar via telefoon",
      "Stage 1 gechipt",
      "Middendemper delete",
    ],
    attentionPoints: [
      "Hoedenplank werkt niet helemaal zoals het hoort; bevestigingspuntjes zijn gebroken.",
    ],
    description:
      "Te koop aangeboden: Seat Leon FR uit 2013. De auto heeft momenteel 148.000 km gereden en is altijd goed onderhouden. De auto rijdt en schakelt goed en heeft een sportieve uitstraling.",
    descriptionSections: [
      {
        title: "Algemeen",
        body:
          "Te koop aangeboden: Seat Leon FR uit 2013. De auto heeft momenteel 148.000 km gereden en is altijd goed onderhouden. Onderhoud is tijdig uitgevoerd en de auto heeft geen achterstallig onderhoud.",
      },
      {
        title: "Staat en rijbeleving",
        body:
          "De auto is zorgvuldig behandeld, zowel van binnen als van buiten. Het betreft een fijne, betrouwbare en sportief ogende hatchback die nog jarenlang rijplezier kan bieden.",
      },
      {
        title: "Extra's",
        items: [
          "Sfeervolle interieurverlichting, zelf geinstalleerd",
          "Verlichting is via de telefoon te bedienen en naar wens in te stellen",
          "FR-uitvoering met sportieve uitstraling",
          "Stage 1 gechipt",
          "Middendemper delete voor een sportiever geluid, maar niet overdreven",
        ],
      },
      {
        title: "Afspraak maken",
        body:
          "De auto rijdt en schakelt goed en is altijd met zorg behandeld. Bij serieuze interesse kan er contact worden opgenomen voor meer informatie, een bezichtiging of een proefrit.",
      },
    ],
  },
];
