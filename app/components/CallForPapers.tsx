import Section from "../components/Section";
import { FaRegCalendar, FaRegPaperPlane, FaListUl } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdAccountBalanceWallet, MdPublishedWithChanges } from "react-icons/md";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
          <div className="flex items-center gap-2 mb-4">
          <FaRegCalendar className="text-green-700 text-xl" />
          <h3 className="text-xl font-semibold text-green-700">
            Important Deadlines
          </h3>
        </div>

        <ul className="space-y-2 ml-2 text-gray-700">
          <li>
            <strong className="text-green-700">Abstract & Full Paper Deadline:</strong>{" "}
            7th February, 2026
          </li>
        </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
    <MdPublishedWithChanges className="text-[#3b021d] text-xl" />
    <h3 className="text-xl font-semibold text-[#3b021d]">
      Publication	Fee
    </h3>
  </div>

  <ul className="space-y-2 ml-2 text-gray-700">
    <li>
      <strong className="text-[#3b021d]">Nigerian authors:</strong>{" "}
      ₦25,000
    </li>
    <li>
      <strong className="text-[#3b021d]">Foreign authors:</strong>{" "}
      $20
    </li>
  </ul>
        </div>
        </div>
        
      <p className="my-6 text-center">
        All submissions should be emailed to:{" "}
        <span className="font-semibold text-[#3b021d]">
          topoolaconference2026@gmail.com
        </span> or WhatsApp: <a href="tel:08034772730" className="hover:underline">08034772730</a>, {" "}
        <a href="tel:08055941695" className="hover:underline">08055941695</a>.
      </p>

      <div className="text-gray-700 text-center mt-1 space-y-4">
        <p>
          All papers whose abstracts are reviewed, accepted, and presented at the Conference will be subjected to rigorous peer review and, upon successful review, published in any one of the following journals:
        </p>
        <ul className="text-left max-w-3xl mx-auto list-disc list-inside">
            <li>
                <a href="https://ijmso.unilag.edu.ng" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#3b021d] hover:underline">International Journal of Mathematical Sciences and Optimization: Theory & Applications (IJMSO)</a>
            </li>
            <li>
                <a href="http://www.tnsmb.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#3b021d] hover:underline">International Journal of Mathematical Analysis and Modelling</a>
            </li>
        </ul>
        <p>Authors are encouraged to submit their works on or before the stated deadline and strictly adhere to the Conference submission guidelines.</p>
      </div>
      </div>
      
          {/* Conference Fees */}
     <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-10">
  <div className="flex items-center gap-2 mb-4">
    <GiPriceTag className="text-[#3b021d] text-xl" />
    <h3 className="text-xl font-semibold text-[#3b021d]">
      Conference Fee
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="space-y-2 ml-2 text-gray-700">
    <strong className="text-[#3b021d] mb-1">Virtual:</strong>
    <ul className="space-y-1 ml-2">
    <li>
      <span className="text-[#3b021d] font-medium">Faculty:</span>{" "}
      ₦10,000
    </li>
    <li>
      <span className="text-[#3b021d] font-medium">Student:</span>{" "}
      ₦5,000
    </li>
  </ul>
  </div>
  <div className="space-y-2 ml-2 text-gray-700">
    <strong className="text-[#3b021d] mb-1">Physical:</strong>
    <ul className="space-y-1 ml-2">
    <li>
      <span className="text-[#3b021d] font-medium">Faculty:</span>{" "}
      ₦15,000
    </li>
    <li>
      <span className="text-[#3b021d] font-medium">Student:</span>{" "}
      ₦10,000
    </li>
  </ul>
  </div>
  <div className="space-y-2 ml-2 text-gray-700">
    <strong className="text-[#3b021d] mb-1">International	Participants:</strong>
    <ul className="space-y-1 ml-2">
    <li>
      <span className="text-[#3b021d] font-medium">Faculty:</span>{" "}
      $30
    </li>
    <li>
      <span className="text-[#3b021d] font-medium">Student:</span>{" "}
      $10
    </li>
  </ul>
  </div>
</div>
</div>

  <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-10">
  <div className="flex items-center gap-2 mb-4">
    <MdAccountBalanceWallet className="text-[#3b021d] text-xl" />
    <h3 className="text-xl font-semibold text-[#3b021d]">
      Account Details
    </h3>
  </div>

  <div className="space-y-2 ml-2 text-gray-700">
    <p><strong className="text-[#3b021d] mb-1">Account Name:</strong> Prof. Opoola Legacy Conference</p>
    <p><strong className="text-[#3b021d] mb-1">Bank:</strong> UnilorinMfb</p>
    <p><strong className="text-[#3b021d] mb-1">Account Number:</strong> 1100175404</p>
  </div>
</div>
    </Section>
  );
}
