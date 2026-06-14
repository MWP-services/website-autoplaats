import { dealerConfig } from "@/data/dealerConfig";
import type { Car } from "@/data/cars";

export function formatPrice(price: number | null) {
  if (price === null) return "Prijs op aanvraag";
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(mileage: number | null) {
  if (mileage === null) return "Km-stand op aanvraag";
  return `${new Intl.NumberFormat("nl-NL").format(mileage)} km`;
}

export function showValue<T extends string | number | null | undefined>(
  value: T,
  fallback = "Nog niet ingevuld",
) {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

export function formatBoolean(value: boolean | null) {
  if (value === null) return "Nog niet ingevuld";
  return value ? "Ja" : "Nee";
}

export function getWhatsappHref(car?: Car, action = "interesse") {
  const text = car
    ? `Hallo, ik heb interesse in de ${car.title} ${car.fuel ?? ""} uit ${
        car.year ?? "onbekend bouwjaar"
      } die ik op jullie website zag.`
    : `Hallo Autoplaats, ik wil graag contact over jullie actuele aanbod.`;

  const cleanNumber = dealerConfig.whatsapp.replace(/\D/g, "");
  const encodedText = encodeURIComponent(text.replace(/\s+/g, " ").trim());

  if (cleanNumber.length >= 8) {
    return `https://wa.me/${cleanNumber}?text=${encodedText}`;
  }

  return `https://wa.me/?text=${encodedText}&source=${encodeURIComponent(action)}`;
}

export function carStatusLabel(status: Car["status"]) {
  const labels: Record<Car["status"], string> = {
    draft: "Concept",
    published: "Gepubliceerd",
    sold: "Verkocht",
  };

  return labels[status];
}
