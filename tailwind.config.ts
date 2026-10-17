import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { canvas: "#F8FAFC", ink: "#0F172A", muted: "#64748B", line: "#E2E8F0" },
    fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
