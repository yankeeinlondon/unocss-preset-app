import type { Theme } from "@unocss/preset-uno";

export const colors: Theme["colors"] = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "var(--tw-black, #000)",
  white: "var(--tw-white, #fff)",
  rose: {
    50: "var(--tw-rose-50, #fff1f2)",
    100: "var(--tw-rose-100, #ffe4e6)",
    200: "var(--tw-rose-200, #fecdd3)",
    300: "var(--tw-rose-300, #fda4af)",
    400: "var(--tw-rose-400, #fb7185)",
    500: "var(--tw-rose-500, #f43f5e)",
    600: "var(--tw-rose-600, #e11d48)",
    700: "var(--tw-rose-700, #be123c)",
    800: "var(--tw-rose-800, #9f1239)",
    900: "var(--tw-rose-900, #881337)",
    950: "var(--tw-rose-950, #4c0519)",
  },
  pink: {
    50: "var(--tw-pink-50, #fdf2f8)",
    100: "var(--tw-pink-100, #fce7f3)",
    200: "var(--tw-pink-200, #fbcfe8)",
    300: "var(--tw-pink-300, #f9a8d4)",
    400: "var(--tw-pink-400, #f472b6)",
    500: "var(--tw-pink-500, #ec4899)",
    600: "var(--tw-pink-600, #db2777)",
    700: "var(--tw-pink-700, #be185d)",
    800: "var(--tw-pink-800, #9d174d)",
    900: "var(--tw-pink-900, #831843)",
    950: "var(--tw-pink-950, #500724)",
  },
  fuchsia: {
    50: "var(--tw-fuchsia-50, #fdf4ff)",
    100: "var(--tw-fuchsia-100, #fae8ff)",
    200: "var(--tw-fuchsia-200, #f5d0fe)",
    300: "var(--tw-fuchsia-300, #f0abfc)",
    400: "var(--tw-fuchsia-400, #e879f9)",
    500: "var(--tw-fuchsia-500, #d946ef)",
    600: "var(--tw-fuchsia-600, #c026d3)",
    700: "var(--tw-fuchsia-700, #a21caf)",
    800: "var(--tw-fuchsia-800, #86198f)",
    900: "var(--tw-fuchsia-900, #701a75)",
    950: "var(--tw-fuchsia-950, #4a044e)",
  },
  purple: {
    50: "var(--tw-purple-50, #faf5ff)",
    100: "var(--tw-purple-100, #f3e8ff)",
    200: "var(--tw-purple-200, #e9d5ff)",
    300: "var(--tw-purple-300, #d8b4fe)",
    400: "var(--tw-purple-400, #c084fc)",
    500: "var(--tw-purple-500, #a855f7)",
    600: "var(--tw-purple-600, #9333ea)",
    700: "var(--tw-purple-700, #7e22ce)",
    800: "var(--tw-purple-800, #6b21a8)",
    900: "var(--tw-purple-900, #581c87)",
    950: "var(--tw-purple-950, #3b0764)",
  },
  violet: {
    50: "var(--tw-violet-50, #f5f3ff)",
    100: "var(--tw-violet-100, #ede9fe)",
    200: "var(--tw-violet-200, #ddd6fe)",
    300: "var(--tw-violet-300, #c4b5fd)",
    400: "var(--tw-violet-400, #a78bfa)",
    500: "var(--tw-violet-500, #8b5cf6)",
    600: "var(--tw-violet-600, #7c3aed)",
    700: "var(--tw-violet-700, #6d28d9)",
    800: "var(--tw-violet-800, #5b21b6)",
    900: "var(--tw-violet-900, #4c1d95)",
    950: "var(--tw-violet-950, #2e1065)",
  },
  indigo: {
    50: "var(--tw-indigo-50, #eef2ff)",
    100: "var(--tw-indigo-100, #e0e7ff)",
    200: "var(--tw-indigo-200, #c7d2fe)",
    300: "var(--tw-indigo-300, #a5b4fc)",
    400: "var(--tw-indigo-400, #818cf8)",
    500: "var(--tw-indigo-500, #6366f1)",
    600: "var(--tw-indigo-600, #4f46e5)",
    700: "var(--tw-indigo-700, #4338ca)",
    800: "var(--tw-indigo-800, #3730a3)",
    900: "var(--tw-indigo-900, #312e81)",
    950: "var(--tw-indigo-950, #1e1b4b)",
  },
  blue: {
    50: "var(--tw-blue-50, #eff6ff)",
    100: "var(--tw-blue-100, #dbeafe)",
    200: "var(--tw-blue-200, #bfdbfe)",
    300: "var(--tw-blue-300, #93c5fd)",
    400: "var(--tw-blue-400, #60a5fa)",
    500: "var(--tw-blue-500, #3b82f6)",
    600: "var(--tw-blue-600, #2563eb)",
    700: "var(--tw-blue-700, #1d4ed8)",
    800: "var(--tw-blue-800, #1e40af)",
    900: "var(--tw-blue-900, #1e3a8a)",
    950: "var(--tw-blue-950, #172554)",
  },
  sky: {
    50: "var(--tw-sky-50, #f0f9ff)",
    100: "var(--tw-sky-100, #e0f2fe)",
    200: "var(--tw-sky-200, #bae6fd)",
    300: "var(--tw-sky-300, #7dd3fc)",
    400: "var(--tw-sky-400, #38bdf8)",
    500: "var(--tw-sky-500, #0ea5e9)",
    600: "var(--tw-sky-600, #0284c7)",
    700: "var(--tw-sky-700, #0369a1)",
    800: "var(--tw-sky-800, #075985)",
    900: "var(--tw-sky-900, #0c4a6e)",
    950: "var(--tw-sky-950, #082f49)",
  },
  cyan: {
    50: "var(--tw-cyan-50, #ecfeff)",
    100: "var(--tw-cyan-100, #cffafe)",
    200: "var(--tw-cyan-200, #a5f3fc)",
    300: "var(--tw-cyan-300, #67e8f9)",
    400: "var(--tw-cyan-400, #22d3ee)",
    500: "var(--tw-cyan-500, #06b6d4)",
    600: "var(--tw-cyan-600, #0891b2)",
    700: "var(--tw-cyan-700, #0e7490)",
    800: "var(--tw-cyan-800, #155e75)",
    900: "var(--tw-cyan-900, #164e63)",
    950: "var(--tw-cyan-950, #083344)",
  },
  teal: {
    50: "var(--tw-teal-50, #f0fdfa)",
    100: "var(--tw-teal-100, #ccfbf1)",
    200: "var(--tw-teal-200, #99f6e4)",
    300: "var(--tw-teal-300, #5eead4)",
    400: "var(--tw-teal-400, #2dd4bf)",
    500: "var(--tw-teal-500, #14b8a6)",
    600: "var(--tw-teal-600, #0d9488)",
    700: "var(--tw-teal-700, #0f766e)",
    800: "var(--tw-teal-800, #115e59)",
    900: "var(--tw-teal-900, #134e4a)",
    950: "var(--tw-teal-950, #042f2e)",
  },
  emerald: {
    50: "var(--tw-emerald-50, #ecfdf5)",
    100: "var(--tw-emerald-100, #d1fae5)",
    200: "var(--tw-emerald-200, #a7f3d0)",
    300: "var(--tw-emerald-300, #6ee7b7)",
    400: "var(--tw-emerald-400, #34d399)",
    500: "var(--tw-emerald-500, #10b981)",
    600: "var(--tw-emerald-600, #059669)",
    700: "var(--tw-emerald-700, #047857)",
    800: "var(--tw-emerald-800, #065f46)",
    900: "var(--tw-emerald-900, #064e3b)",
    950: "var(--tw-emerald-950, #022c22)",
  },
  green: {
    50: "var(--tw-green-50, #f0fdf4)",
    100: "var(--tw-green-100, #dcfce7)",
    200: "var(--tw-green-200, #bbf7d0)",
    300: "var(--tw-green-300, #86efac)",
    400: "var(--tw-green-400, #4ade80)",
    500: "var(--tw-green-500, #22c55e)",
    600: "var(--tw-green-600, #16a34a)",
    700: "var(--tw-green-700, #15803d)",
    800: "var(--tw-green-800, #166534)",
    900: "var(--tw-green-900, #14532d)",
    950: "var(--tw-green-950, #052e16)",
  },
  lime: {
    50: "var(--tw-lime-50, #f7fee7)",
    100: "var(--tw-lime-100, #ecfccb)",
    200: "var(--tw-lime-200, #d9f99d)",
    300: "var(--tw-lime-300, #bef264)",
    400: "var(--tw-lime-400, #a3e635)",
    500: "var(--tw-lime-500, #84cc16)",
    600: "var(--tw-lime-600, #65a30d)",
    700: "var(--tw-lime-700, #4d7c0f)",
    800: "var(--tw-lime-800, #3f6212)",
    900: "var(--tw-lime-900, #365314)",
    950: "var(--tw-lime-950, #1a2e05)",
  },

  yellow: {
    50: "var(--tw-yellow-50, #fefce8)",
    100: "var(--tw-yellow-100, #fef9c3)",
    200: "var(--tw-yellow-200, #fef08a)",
    300: "var(--tw-yellow-300, #fde047)",
    400: "var(--tw-yellow-400, #facc15)",
    500: "var(--tw-yellow-500, #eab308)",
    600: "var(--tw-yellow-600, #ca8a04)",
    700: "var(--tw-yellow-700, #a16207)",
    800: "var(--tw-yellow-800, #854d0e)",
    900: "var(--tw-yellow-900, #713f12)",
    950: "var(--tw-yellow-950, #422006)",
  },
  amber: {
    50: "var(--tw-amber-50, #fffbeb)",
    100: "var(--tw-amber-100, #fef3c7)",
    200: "var(--tw-amber-200, #fde68a)",
    300: "var(--tw-amber-300, #fcd34d)",
    400: "var(--tw-amber-400, #fbbf24)",
    500: "var(--tw-amber-500, #f59e0b)",
    600: "var(--tw-amber-600, #d97706)",
    700: "var(--tw-amber-700, #b45309)",
    800: "var(--tw-amber-800, #92400e)",
    900: "var(--tw-amber-900, #78350f)",
    950: "var(--tw-amber-950, #451a03)",
  },
  orange: {
    50: "var(--tw-orange-50, #fff7ed)",
    100: "var(--tw-orange-100, #ffedd5)",
    200: "var(--tw-orange-200, #fed7aa)",
    300: "var(--tw-orange-300, #fdba74)",
    400: "var(--tw-orange-400, #fb923c)",
    500: "var(--tw-orange-500, #f97316)",
    600: "var(--tw-orange-600, #ea580c)",
    700: "var(--tw-orange-700, #c2410c)",
    800: "var(--tw-orange-800, #9a3412)",
    900: "var(--tw-orange-900, #7c2d12)",
    950: "var(--tw-orange-950, #431407)",
  },
  red: {
    50: "var(--tw-red-50, #fef2f2)",
    100: "var(--tw-red-100, #fee2e2)",
    200: "var(--tw-red-200, #fecaca)",
    300: "var(--tw-red-300, #fca5a5)",
    400: "var(--tw-red-400, #f87171)",
    500: "var(--tw-red-500, #ef4444)",
    600: "var(--tw-red-600, #dc2626)",
    700: "var(--tw-red-700, #b91c1c)",
    800: "var(--tw-red-800, #991b1b)",
    900: "var(--tw-red-900, #7f1d1d)",
    950: "var(--tw-red-950, #450a0a)",
  },
  gray: {
    50: "var(--tw-gray-50, #f9fafb)",
    100: "var(--tw-gray-100, #f3f4f6)",
    200: "var(--tw-gray-200, #e5e7eb)",
    300: "var(--tw-gray-300, #d1d5db)",
    400: "var(--tw-gray-400, #9ca3af)",
    500: "var(--tw-gray-500, #6b7280)",
    600: "var(--tw-gray-600, #4b5563)",
    700: "var(--tw-gray-700, #374151)",
    800: "var(--tw-gray-800, #1f2937)",
    900: "var(--tw-gray-900, #111827)",
    950: "var(--tw-gray-950, #030712)",
  },
  slate: {
    50: "var(--tw-slate-50, #f8fafc)",
    100: "var(--tw-slate-100, #f1f5f9)",
    200: "var(--tw-slate-200, #e2e8f0)",
    300: "var(--tw-slate-300, #cbd5e1)",
    400: "var(--tw-slate-400, #94a3b8)",
    500: "var(--tw-slate-500, #64748b)",
    600: "var(--tw-slate-600, #475569)",
    700: "var(--tw-slate-700, #334155)",
    800: "var(--tw-slate-800, #1e293b)",
    900: "var(--tw-slate-900, #0f172a)",
    950: "var(--tw-slate-950, #020617)",
  },
  zinc: {
    50: "var(--tw-zinc-50, #fafafa)",
    100: "var(--tw-zinc-100, #f4f4f5)",
    200: "var(--tw-zinc-200, #e4e4e7)",
    300: "var(--tw-zinc-300, #d4d4d8)",
    400: "var(--tw-zinc-400, #a1a1aa)",
    500: "var(--tw-zinc-500, #71717a)",
    600: "var(--tw-zinc-600, #52525b)",
    700: "var(--tw-zinc-700, #3f3f46)",
    800: "var(--tw-zinc-800, #27272a)",
    900: "var(--tw-zinc-900, #18181b)",
    950: "var(--tw-zinc-950, #09090b)",
  },
  neutral: {
    50: "var(--tw-neutral-50, #fafafa)",
    100: "var(--tw-neutral-100, #f5f5f5)",
    200: "var(--tw-neutral-200, #e5e5e5)",
    300: "var(--tw-neutral-300, #d4d4d4)",
    400: "var(--tw-neutral-400, #a3a3a3)",
    500: "var(--tw-neutral-500, #737373)",
    600: "var(--tw-neutral-600, #525252)",
    700: "var(--tw-neutral-700, #404040)",
    800: "var(--tw-neutral-800, #262626)",
    900: "var(--tw-neutral-900, #171717)",
    950: "var(--tw-neutral-950, #0a0a0a)",
  },
  stone: {
    50: "var(--tw-stone-50, #fafaf9)",
    100: "var(--tw-stone-100, #f5f5f4)",
    200: "var(--tw-stone-200, #e7e5e4)",
    300: "var(--tw-stone-300, #d6d3d1)",
    400: "var(--tw-stone-400, #a8a29e)",
    500: "var(--tw-stone-500, #78716c)",
    600: "var(--tw-stone-600, #57534e)",
    700: "var(--tw-stone-700, #44403c)",
    800: "var(--tw-stone-800, #292524)",
    900: "var(--tw-stone-900, #1c1917)",
    950: "var(--tw-stone-950, #0c0a09)",
  },
  light: {
    50: "var(--tw-light-50, #fdfdfd)",
    100: "var(--tw-light-100, #fcfcfc)",
    200: "var(--tw-light-200, #fafafa)",
    300: "var(--tw-light-300, #f8f9fa)",
    400: "var(--tw-light-400, #f6f6f6)",
    500: "var(--tw-light-500, #f2f2f2)",
    600: "var(--tw-light-600, #f1f3f5)",
    700: "var(--tw-light-700, #e9ecef)",
    800: "var(--tw-light-800, #dee2e6)",
    900: "var(--tw-light-900, #dde1e3)",
    950: "var(--tw-light-950, #d8dcdf)",
  },
  dark: {
    50: "var(--tw-dark-50, #4a4a4a)",
    100: "var(--tw-dark-100, #3c3c3c)",
    200: "var(--tw-dark-200, #323232)",
    300: "var(--tw-dark-300, #2d2d2d)",
    400: "var(--tw-dark-400, #222222)",
    500: "var(--tw-dark-500, #1f1f1f)",
    600: "var(--tw-dark-600, #1c1c1e)",
    700: "var(--tw-dark-700, #1b1b1b)",
    800: "var(--tw-dark-800, #181818)",
    900: "var(--tw-dark-900, #0f0f0f)",
    950: "var(--tw-dark-950, #080808)",
  },
  get lightblue() {
    return this.sky;
  },
  get lightBlue() {
    return this.sky;
  },
  get warmgray() {
    return this.stone;
  },
  get warmGray() {
    return this.stone;
  },
  get truegray() {
    return this.neutral;
  },
  get trueGray() {
    return this.neutral;
  },
  get coolgray() {
    return this.gray;
  },
  get coolGray() {
    return this.gray;
  },
  get bluegray() {
    return this.slate;
  },
  get blueGray() {
    return this.slate;
  },
};

Object.values(colors as Required<Theme>["colors"]).forEach((color) => {
  if (typeof color !== "string" && color !== undefined) {
    color.DEFAULT = color.DEFAULT || (color[400] as string);
    Object.keys(color).forEach((key) => {
      const short = +key / 100;
      if (short === Math.round(short))
        color[short] = color[key];
    });
  }
});
