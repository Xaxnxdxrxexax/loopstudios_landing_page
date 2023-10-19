import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        Fm: "376px",
      },
      fontFamily: {
        sans: ["var(--font-josefin)", ...fontFamily.sans],
        serif: ["var(--font-alata)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
