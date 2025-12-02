import Section from "../components/Section";
import { FaRegCalendar, FaRegPaperPlane, FaListUl } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

export default function CallForPapersPage() {
  return (
    <Section title="Call for Papers" eyebrow="Submission Guidelines">
      {/* Intro */}
      <p className="text-lg text-gray-700 mb-10 max-w-3xl">
        Submissions are invited for presentation at the 
        <span className="font-semibold text-[#3b021d]"> Professor Opoola Legacy Conference 2026</span>. 
        Only original, unpublished research contributions will be considered.
      </p>

      {/* Thematic Areas */}
      <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FaListUl className="text-[#3b021d] text-xl" />
          <h3 className="text-xl font-semibold text-[#3b021d]">
            Thematic Areas
          </h3>
        </div>

        <ul className="grid md:grid-cols-2 gap-3 ml-4">
          <li>Pure Mathematics</li>
          <li>Applied Mathematics & Statistics</li>
          <li>Computational & Discrete Mathematics</li>
          <li>Mathematics Education & Pedagogy</li>
        </ul>
      </div>

      {/* Submission Requirements */}
      <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FaRegPaperPlane className="text-[#3b021d] text-xl" />
          <h3 className="text-xl font-semibold text-[#3b021d]">
            Submission Requirements
          </h3>
        </div>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Abstract (maximum 500 words)</li>
          <li>Full paper in PDF or LaTeX format</li>
          <li>APA reference style</li>
          <li>Author names, affiliation, and email address</li>
          <li>3–6 keywords</li>
        </ul>
      </div>

      {/* Deadlines */}
      <div className="bg-green-50 border border-green-100 p-6 rounded-xl mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FaRegCalendar className="text-green-700 text-xl" />
          <h3 className="text-xl font-semibold text-green-700">
            Important Deadlines
          </h3>
        </div>

        <ul className="space-y-2 ml-2 text-gray-700">
          <li>
            <strong className="text-green-700">Abstract Deadline:</strong>{" "}
            16 January 2026
          </li>
          <li>
            <strong className="text-green-700">Full Paper Deadline:</strong>{" "}
            31 January 2026
          </li>
        </ul>
      </div>
      
          {/* Registration Fees */}
     <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-10">
  <div className="flex items-center gap-2 mb-4">
    <GiPriceTag className="text-[#3b021d] text-xl" />
    <h3 className="text-xl font-semibold text-[#3b021d]">
      Registration Fees
    </h3>
  </div>

  <ul className="space-y-2 ml-2 text-gray-700">
    <li>
      <strong className="text-[#3b021d]">Physical:</strong>{" "}
      Faculty ₦15,000 | Student ₦10,000
    </li>
    <li>
      <strong className="text-[#3b021d]">Virtual:</strong>{" "}
      Faculty ₦10,000 | Student ₦5,000
    </li>
  </ul>
</div>


      {/* Submission Email */}
      <p className="text-lg mb-6">
        All submissions should be emailed to:{" "}
        <span className="font-semibold text-[#3b021d]">
          topoolaconference2026@gmail.com
        </span>
      </p>

      {/* Publication Notice */}
      <p className="text-gray-700">
        All accepted papers will undergo peer review and will be published in a 
        reputable academic journal.
      </p>
    </Section>
  );
}
