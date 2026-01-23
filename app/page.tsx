import HomePage from "./components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Prof. Opoola Conference 2026. Join us for a celebration of technology, innovation, and community.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
      <HomePage />
  );
}
