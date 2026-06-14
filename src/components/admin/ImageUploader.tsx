"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function ImageUploader({ existingImages = [] }: { existingImages?: string[] }) {
  const [files, setFiles] = useState<File[]>([]);
  const previews = useMemo(() => files.map((file) => URL.createObjectURL(file)), [files]);
  const images = previews.length ? previews : existingImages;

  return (
    <div className="grid gap-4">
      <label className="grid cursor-pointer place-items-center rounded-lg border-2 border-dashed border-line bg-mist px-6 py-10 text-center hover:border-gold">
        <span className="text-lg font-black text-ink">Foto’s uploaden</span>
        <span className="mt-2 text-sm font-semibold text-slate-600">De eerste foto wordt gebruikt als hoofdfoto</span>
        <input
          type="file"
          multiple
          accept="image/*"
          className="sr-only"
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
        />
      </label>
      {images.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="relative overflow-hidden rounded border border-line bg-white">
              <Image
                src={image}
                alt={`Preview ${index + 1}`}
                width={260}
                height={190}
                unoptimized={image.startsWith("blob:")}
                className="aspect-[4/3] w-full object-cover"
              />
              {index === 0 ? (
                <span className="absolute left-2 top-2 rounded bg-gold px-2 py-1 text-xs font-black text-night">
                  Hoofdfoto
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
