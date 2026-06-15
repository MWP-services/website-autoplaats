import Image from "next/image";

export function BrandLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const dimension = size === "lg" ? 64 : 48;

  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-md bg-white p-1 shadow-sm ring-1 ring-white/20"
      style={{ width: dimension, height: dimension }}
    >
      <Image
        src="/brand/logo.jpeg"
        alt="Krijnen Auto Te Koop logo"
        width={dimension}
        height={dimension}
        className="h-full w-full rounded object-cover"
      />
    </span>
  );
}
