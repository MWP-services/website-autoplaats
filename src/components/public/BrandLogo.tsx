import Image from "next/image";

export function BrandLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const dimension = size === "lg" ? 56 : 44;

  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded bg-white shadow-sm"
      style={{ width: dimension, height: dimension }}
    >
      <Image
        src="/brand/logo.jpeg"
        alt="Autoplaats logo"
        width={dimension}
        height={dimension}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
