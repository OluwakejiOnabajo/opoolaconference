import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#d9b526]">

      <div className="relative container py-28 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          One-Day International Conference in Honour of Professor Timothy Oloyede Opoola
        </h1>

        <p className="text-lg text-[#3b021d] mb-6 max-w-xl font-medium">
          University Auditorium, University of Ilorin &middot; 24 February 2026
        </p>

        <div className="flex gap-4">
          <Link
            href="/registration"
            className="bg-[#3b021d] text-conferenceBlue px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Register Now
          </Link>
          <Link
            href="#call-for-papers"
            className="border border-white/70 px-6 py-3 rounded-full hover:bg-white/10"
          >
            Call for Papers
          </Link>
        </div>
      </div>
    </section>
  );
}
