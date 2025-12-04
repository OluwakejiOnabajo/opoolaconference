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
        <h2 className="text-2xl font-bold">Announcement</h2>
      </div>

        {/* Hidden title for accessibility */}
        <DialogTitle>
          <VisuallyHidden>Announcement</VisuallyHidden>
        </DialogTitle>

      <div className="text-sm text-gray-700 space-y-4 mb-3 leading-relaxed text-justify">
        <p className="mb-3">
        Good day, everyone.
      </p>

      <p className="mb-3">
        We hope this message finds you well.
      </p>

      <p className="mb-3">
        In honour of our <em>“one-in-a-millennium”</em> professor, 
        <strong> Professor Timothy Oloyede Opoola</strong>, we, his mentees across the world, are writing a <strong> documentary</strong> of his legend to mark his retirement as lecturer. We are gathering videos of students&apos; experience with him from his students across all academic levels, from professors to undergraduates.</p>
        <p className="mb-3"> Please do well to share with us your experience with him in a short video (not more than 30 seconds) and send it to the contact below.       
      </p>

      <p className="mb-3">
        Introduce yourself, state the course (if you remember), experience and knowledge you gained from him...also,  state the reason why you think he is different from other lecturers.
</p>

      <p className="mb-3">
        Thank you for joining us to celebrate this <em>super lecturer</em>.
      </p>

      <p className="font-semibold">
        His Mentees, <br />
        Represented by: <br />
        Abass Adesokan <br />
        0813 404 3529
      </p>
      </div>

      
                              {/* Footer button */}
            <div className="mb-2 flex justify-end">
              <button
                onClick={handleCloseAnnouncement}
                className="px-6 py-2 bg-[#46021f] cursor-pointer text-white font-semibold rounded-lg shadow hover:bg-[#3b021d] transition"
              >
                Close
              </button>
            </div>
    </DialogContent>
  );
};

export default Announcement;
