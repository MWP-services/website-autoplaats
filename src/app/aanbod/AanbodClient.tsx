"use client";

import { useEffect, useState } from "react";
import type { Car } from "@/data/cars";
import { InventoryGrid } from "@/components/public/InventoryGrid";

export function AanbodClient({ cars }: { cars: Car[] }) {
  const [initialQuery, setInitialQuery] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("zoek") ?? "";
    setInitialQuery(query);
  }, []);

  return <InventoryGrid key={initialQuery} cars={cars} initialQuery={initialQuery} />;
}
