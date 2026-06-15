import type { CarStatus } from "@/data/cars";
import { carStatusLabel } from "@/lib/format";

type StatusBadgeProps = {
  label?: string;
  status?: CarStatus;
};

export function StatusBadge({ label, status }: StatusBadgeProps) {
  const text = label ?? (status ? carStatusLabel(status) : "");
  const isSold = status === "sold" || label?.toLowerCase() === "verkocht";

  return (
    <span
      className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-extrabold ${
        isSold ? "bg-slate-900 text-white" : "bg-gold text-white"
      }`}
    >
      {text}
    </span>
  );
}
