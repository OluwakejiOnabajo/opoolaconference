import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { generateMetadata } from "./lib/seo";

export const metadata = generateMetadata({
  title: "Home | Opooola Conference 2026",
  url: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
