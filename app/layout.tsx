"use client"
import { Noto_Sans_JP } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/globals.scss";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { metadata } from "./lib/meta";
import { useEffect } from "react";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300","400","500","700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const anchor = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", {
        handleEvent: function(event: MouseEvent) {
          event.preventDefault();
          const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const id = href.slice(1);
            const target = document.getElementById(id);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
      });
    });
  }

  useEffect(() => {
    anchor();
  }, []);
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
