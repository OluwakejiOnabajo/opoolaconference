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
        <h2 className="text-2xl font-bold">📢 An Important Update!</h2>
      </div>

        {/* Hidden title for accessibility */}
        <DialogTitle>
          <VisuallyHidden>An Important Update!</VisuallyHidden>
        </DialogTitle>

      <div className="text-sm text-gray-700 space-y-4 mb-3 leading-relaxed text-justify">
        <p>
          To all participants and prospective participants, please be informed that all presenters are required to submit a full-length manuscript prepared in LaTeX on or before <strong>Tuesday, 10th March 2026</strong>.
        </p>

        <p>
          This is to ensure that all papers presented at the conference and submitted for publication are ready for final processing in any of the two journals earlier indicated, latest by the end of May 2026.
        </p>

        <p>
          We wish to assure all authors that, after a rigorous peer-review process, all accepted manuscripts will be published in one of the two journals on or before the end of May 2026.
        </p>

        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="italic">
            <strong>Note:</strong> Abstract submission is still ongoing and will close on <strong>17th February 2026</strong>.
          </p>
        </div>

        <p>
          Kindly submit yours as soon as possible.<br />
          Thank you.
        </p>
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
