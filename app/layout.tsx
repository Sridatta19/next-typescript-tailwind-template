import { Metadata } from "next";
import "@/styles/globals.css";
import { fontMono, fontSans, fontHeading } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Nextjs Tailwind Starter",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-gray-300 min-h-screen font-sans antialiased ${fontMono.variable} ${fontHeading.variable} ${fontSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
