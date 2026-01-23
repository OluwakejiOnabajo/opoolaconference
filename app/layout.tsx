import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

const conferenceTitle = "Opoola Conference 2026";
const conferenceDescription = "Join us for the Professor Opoola Legacy Conference 2026, is a one-day international gathering honouring Professor Timothy Oloyede Opoola, to discuss the latest trends in technology and innovation.";
const conferenceUrl = "https://opoolaconference.vercel.app/"; 

export const metadata: Metadata = {
  metadataBase: new URL(conferenceUrl),
  title: {
    template: `%s | ${conferenceTitle}`,
    default: conferenceTitle,
  },
  description: conferenceDescription,
  openGraph: {
    title: conferenceTitle,
    description: conferenceDescription,
    url: conferenceUrl,
    siteName: conferenceTitle,
    images: [
      // TODO: Replace with your actual OG image
      { url: "/assets/prof-opoola.png", width: 1200, height: 630 },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: conferenceTitle, description: conferenceDescription, images: ["/assets/prof-opoola.png"] }, // TODO: Replace with your actual Twitter image
};

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
