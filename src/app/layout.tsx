import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Esat Yalnızcalı",
  authors: [
    { name: "Mehmet Alperen YEDİK", url: "https://github.com/Alperen7K" },
    { name: "Esat Yalnızcalı", url: "https://github.com/esatylnzcl" },
  ],
  description: "Esat Yalnızcalı Personal Portfolio Website",
  icons: "./facion.ico",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={montserrat.className}>
        <div className="min-h-screen w-full overflow-x-hidden bg-black  text-white">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
