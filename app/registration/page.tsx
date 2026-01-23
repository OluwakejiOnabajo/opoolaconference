"use client";
import { ArrowRight } from "lucide-react";
import Section from "../components/Section";
import { useState } from "react";

export default function RegistrationPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Section title="Registration" eyebrow="Secure Your Place">
      <p className="mb-2">
        Please complete the registration form below. For enquiries, kindly contact 
        the organising committee.
      </p>
      <p className="mb-4">
        Form not loading? click here <a
                      href="https://forms.gle/ASpLQdvWFeqLkNuZ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 px-4 py-1.5 bg-[#46021f] inline-flex gap-1 items-center text-base cursor-pointer text-white font-semibold rounded-md shadow hover:bg-[#3b021d] transition"
                    >
                      Register <ArrowRight size={18} />
                    </a>
      </p>

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
            src="https://forms.gle/ASpLQdvWFeqLkNuZ8"
            className={`w-full border-0 transition-opacity duration-300 h-750 ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)}
            title="Registration Form"
          >
            Loading…
          </iframe>

      </div>
    </Section>
  );
}
