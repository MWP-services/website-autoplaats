import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        night: "#08090b",
        navy: "#181b20",
        steel: "#64748b",
        mist: "#f3f4f6",
        line: "#d9dee5",
        gold: "#f05a28",
        ember: "#d92d20",
        success: "#0f766e",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(8, 9, 11, 0.18)",
        card: "0 12px 34px rgba(8, 9, 11, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
