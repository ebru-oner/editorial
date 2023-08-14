import { Roboto, Shantell_Sans } from "next/font/google";
export const shantell = Shantell_Sans({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
