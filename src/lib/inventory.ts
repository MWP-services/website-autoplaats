import type { Car } from "@/data/cars";

export type InventoryFilters = {
  query: string;
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  maxMileage: string;
  minPower: string;
  maxPower: string;
  fuel: string;
  transmission: string;
  bodyType: string;
  option: string;
};

export type SortKey =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "year-desc"
  | "mileage-asc";

export const initialFilters: InventoryFilters = {
  query: "",
  brand: "",
  model: "",
  minPrice: "",
  maxPrice: "",
  minYear: "",
  maxYear: "",
  maxMileage: "",
  minPower: "",
  maxPower: "",
  fuel: "",
  transmission: "",
  bodyType: "",
  option: "",
};

function numericFilter(value: number | null, input: string, mode: "min" | "max") {
  if (!input) return true;
  const parsed = Number(input);
  if (Number.isNaN(parsed)) return true;
  if (value === null) return false;
  return mode === "min" ? value >= parsed : value <= parsed;
}

export function filterCars(cars: Car[], filters: InventoryFilters) {
  const query = filters.query.trim().toLowerCase();

  return cars.filter((car) => {
    const searchable = [
      car.brand,
      car.model,
      car.title,
      car.version,
      car.licensePlate,
      car.fuel,
      car.bodyType,
      car.color,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const optionMatch =
      !filters.option ||
      car.options.some((option) =>
        option.toLowerCase().includes(filters.option.toLowerCase()),
      );

    return (
      car.status === "published" &&
      (!query || searchable.includes(query)) &&
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.model || car.model === filters.model) &&
      numericFilter(car.price, filters.minPrice, "min") &&
      numericFilter(car.price, filters.maxPrice, "max") &&
      numericFilter(car.year, filters.minYear, "min") &&
      numericFilter(car.year, filters.maxYear, "max") &&
      numericFilter(car.mileage, filters.maxMileage, "max") &&
      numericFilter(car.powerHp, filters.minPower, "min") &&
      numericFilter(car.powerHp, filters.maxPower, "max") &&
      (!filters.fuel || car.fuel === filters.fuel) &&
      (!filters.transmission || car.transmission === filters.transmission) &&
      (!filters.bodyType || car.bodyType === filters.bodyType) &&
      optionMatch
    );
  });
}

export function sortCars(cars: Car[], sortKey: SortKey) {
  const sorted = [...cars];

  return sorted.sort((a, b) => {
    if (sortKey === "price-asc") {
      return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER);
    }
    if (sortKey === "price-desc") {
      return (b.price ?? -1) - (a.price ?? -1);
    }
    if (sortKey === "year-desc") {
      return (b.year ?? 0) - (a.year ?? 0);
    }
    if (sortKey === "mileage-asc") {
      return (a.mileage ?? Number.MAX_SAFE_INTEGER) - (b.mileage ?? Number.MAX_SAFE_INTEGER);
    }
    return Number(b.featured) - Number(a.featured);
  });
}

export function uniqueValues(cars: Car[], key: keyof Car) {
  return Array.from(new Set(cars.map((car) => car[key]).filter(Boolean).map(String))).sort();
}
