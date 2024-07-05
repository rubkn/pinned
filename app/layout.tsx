import type { Metadata } from "next";
import { Inter, Chivo } from "next/font/google";
import "./styles/globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Pinned: Your pinned repositories",
  description: "Get quick access to your pinned repositories!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-chivo ${inter.variable} ${chivo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
