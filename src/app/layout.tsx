import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kvarkmed.rs"),
  title: {
    default: "Kvark Med — Medicinska dijagnostika i laboratorijska oprema",
    template: "%s | Kvark Med",
  },
  description:
    "Kvark Med je distributer medicinske dijagnostike, laboratorijske opreme i farmaceutskih proizvoda namenjen laboratorijama, klinikama i zdravstvenim ustanovama.",
  applicationName: "Kvark Med",
  keywords: [
    "medicinska dijagnostika",
    "laboratorijska oprema",
    "PCR dijagnostika",
    "brzi testovi",
    "POCT analizatori",
    "farmaceutski proizvodi",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Kvark Med",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-body text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
