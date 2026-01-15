import Link from "next/link";
import Section from "./Section";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <Section title="Tribute" eyebrow="Honouring a Legend" herob>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="space-y-6 text-white">
            <p className="text-lg">Tribute to Professor Timothy Oloyede Opoola</p>
    <p>
              As Prof. Timothy Oloyede Opoola marks 70 years of impactful life and service, 
              and retires from the University of Ilorin, we invite you to share your reflections, 
              tributes, or memories in his honour.
            </p>
    
          </div>
           <div className="text-center">
            {/* <a
                      href="https://forms.gle/EjayaJkCswYprrH38"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#46021f] inline-flex gap-1 items-center text-base cursor-pointer text-white font-semibold rounded-md shadow hover:bg-[#3b021d] transition"
                    >
                      Leave a Tribute <ArrowRight size={18} />
                    </a> */}
              <Link
                href="/tribute"
                className="px-4 py-2 bg-[#46021f] inline-flex gap-1 items-center text-base cursor-pointer text-white font-semibold rounded-md shadow hover:bg-[#3b021d] transition"
              >
                Leave a Tribute <ArrowRight size={18} />
              </Link>
            </div>
         </div>
        </Section>
  );
}
 