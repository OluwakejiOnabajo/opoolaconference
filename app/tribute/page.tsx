"use client";

import Section from "../components/Section";
// import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function TributePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Section title="Tribute" eyebrow="Honouring a Legend">
      <div className="space-y-6">
        <p className="text-lg">Tribute to Professor Timothy Oloyede Opoola</p>

        <p>
          Dear Colleague / Friend,
        </p>

        <p>
          As Prof. Timothy Oloyede Opoola marks 70 years of impactful life and service, 
          and retires from the University of Ilorin, we invite you to share your reflections, 
          tributes, or memories in his honour.
        </p>

        <p>
          Your words will form part of a commemorative publication celebrating his remarkable legacy 
          in scholarship, mentorship, and leadership.
        </p>

        {/* <p>
        Form not loading? click here 
        <a
          href="https://forms.gle/EjayaJkCswYprrH38"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 px-3 py-2 bg-[#46021f] cursor-pointer text-white rounded-md shadow hover:bg-[#3b021d] inline-flex items-center gap-1 font-semibold transition"
        >
          Submit Tribute <ArrowRight size={18} />
        </a>
        </p> */}
        <div className="bg-white py-2 md:p-4 h-full">
          {isLoading && (
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                <p className="text-gray-600">Loading form...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe1SeO4k8KEBnsLu5sBW4BHFwnbFG8lmG_LCatCZ_nUQ2wxNA/viewform?embedded=true"
            className={`w-full border-0 transition-opacity duration-300 h-150 ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)}
            title="Tribute Submission Form"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </Section>
  );
}
