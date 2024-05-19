import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthContext";
import CarProvider from "@/context/CarContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "carStore | Início",
  description: "carStore - Página inicial",
  creator: "Pedro Marques",
  icons: "/carStoreLogo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`select-none ${inter.className}`}>
        <AuthProvider>
          <CarProvider>
            <Header/>
            {children}
            <Footer/>
          </CarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
