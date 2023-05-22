import {
  Public_Sans as FontSans,
  Fira_Code as FontMono,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const fontHeading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/MabryPro-Bold.woff2",
      style: "normal",
    },
  ],
});
