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
  labels: string[];
  images: string[];
  options: string[];
  description: string;
};

export const cars: Car[] = [
  {
    id: "audi-a4-36-jjz-6",
    slug: "audi-a4-avant-benzine-2008-36-jjz-6",
    licensePlate: "36-JJZ-6",
    brand: "Audi",
    model: "A4",
    title: "Audi A4 Avant Benzine",
    version: "Uitvoering nog invullen",
    price: null,
    year: 2008,
    buildMonth: "Oktober 2008",
    firstRegistration: "25-10-2008",
    mileage: null,
    powerHp: 210,
    powerKw: 155,
    engineSizeCc: 2000,
    cylinders: 4,
    fuel: "Benzine",
    transmission: null,
    bodyType: "Stationwagen",
    color: "Grijs",
    doors: 4,
    seats: 5,
    apk: "26-01-2027",
    nap: null,
    imported: true,
    wokStatus: "Geen WOK-status",
    maintenanceBooklets: null,
    keys: null,
    featured: true,
    status: "published",
    labels: ["Net binnen", "APK", "Uitgelicht"],
    images: [
      "/cars/audi-a4/1.jpg",
      "/cars/audi-a4/2.jpg",
      "/cars/audi-a4/3.jpg",
      "/cars/audi-a4/4.jpg",
      "/cars/audi-a4/5.jpg",
      "/cars/audi-a4/6.jpg",
      "/cars/audi-a4/7.jpg",
    ],
    options: [],
    description:
      "Nette Audi A4 stationwagen uit 2008 met benzinemotor en 210 pk. Ruime en comfortabele auto met sportieve uitstraling. Kilometerstand, prijs, transmissie en opties worden nog toegevoegd.",
  },
];
