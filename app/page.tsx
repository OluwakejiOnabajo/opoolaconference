import HomePage from "./components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "The official website for the one-day international conference in honour of Professor Timothy Oloyede Opoola, a distinguished scholar of Complex Analysis.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
      <HomePage />
  );
}
