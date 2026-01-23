"use client";

import { MdAnnouncement } from "react-icons/md";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  handleCloseAnnouncement: () => void;
}

const Announcement = ({handleCloseAnnouncement}: Props) => {
  return (
    <DialogContent
      onInteractOutside={(e) => e.preventDefault()}
      onEscapeKeyDown={(e) => e.preventDefault()}
      className="
      w-[90%] 
          md:max-w-md
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
          data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
          duration-300
          rounded-lg overflow-y-auto max-h-[90vh] p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg transition-colors"
    >
      <div className="flex flex-col justify-center text-center items-center text-[#46021f] dark:text-blue-300 mb-4">
        <MdAnnouncement size={40} />
        <h2 className="text-2xl font-bold">📣 Second Call for Submission</h2>
      </div>

        {/* Hidden title for accessibility */}
        <DialogTitle>
          <VisuallyHidden>Second Call for Submission</VisuallyHidden>
        </DialogTitle>

      <div className="text-sm text-gray-700 space-y-4 mb-3 leading-relaxed text-justify">
        <p>
          The Organizing Committee of the One-day International Conference in Honour of Professor Timothy Oloyede Opoola hereby announces the second deadline for the submission of Abstracts and Full-length Manuscripts.
        </p>

        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-green-800 text-center">
                New Submission Deadline: <span className="font-bold text-lg">7th February, 2026</span>
            </p>
        </div>

        <p>
          Authors are encouraged to submit their works on or before the stated deadline and strictly adhere to the Conference submission guidelines.
        </p>

        <p className="italic">
          <strong>Note:</strong> Please submit evidence of payment of registration fee along with your abstract for acceptance.
        </p>

        <div>
            <h4 className="font-bold text-center mb-2 text-[#46021f]">Publication Opportunity</h4>
            <p>
            All papers whose abstracts are reviewed, accepted, and presented at the Conference will be subjected to rigorous peer review and published in one of the following journals:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-xs">
                <li>International Journal of Mathematical Sciences and Optimization: Theory & Applications (IJMSO)</li>
                <li>International Journal of Mathematical Analysis and Modelling</li>
            </ul>
        </div>
      </div>

      
                              {/* Footer button */}
            <div className="flex justify-end">
              <button
                onClick={handleCloseAnnouncement}
                className="px-4 py-1.5 bg-[#46021f] text-sm cursor-pointer text-white font-semibold rounded-md shadow hover:bg-[#3b021d] transition"
              >
                Close
              </button>
            </div>
    </DialogContent>
  );
};

export default Announcement;
