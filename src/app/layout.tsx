import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shindi Toyama",
    default: "Shindi Toyama",
  },
  description: "Meu site pessoal onde posto meus projetos.",
  authors: [{ name: "Shindi Toyama" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
