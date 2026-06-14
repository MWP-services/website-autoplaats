"use client";

import Image from "next/image";
import { useState } from "react";

export function CarGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const selected = images[active] ?? images[0];

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-lg bg-slate-100 shadow-soft">
        <Image
          src={selected}
          alt={`${title} foto ${active + 1}`}
          width={1100}
          height={780}
          priority
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded border-2 bg-white ${
              index === active ? "border-gold" : "border-transparent"
            }`}
            aria-label={`Bekijk foto ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              width={180}
              height={130}
              className="aspect-[4/3] w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
