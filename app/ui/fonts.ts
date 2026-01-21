import { Inter, Lusitana } from "next/font/google"; // primary font

export const inter = Inter({ subsets: ["latin"] }); // specific subset to load
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
