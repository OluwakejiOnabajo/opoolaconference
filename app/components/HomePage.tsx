"use client";

import AboutPage from "./About";
import CallForPapersPage from "./CallForPapers";
import ContactPage from "./Contact";
import Hero from "./Hero";
import SpeakersPage from "./Speakers";
import ThemePage from "./Theme";
import { useState } from "react";
import Announcement from "./Announcement";
import { Dialog } from "@/components/ui/dialog";
import TributePage from "./Tribute";

export default function HomePage() {
  // initialize state based on localStorage
  const today = new Date().toDateString();
  const lastSeen =
    typeof window !== "undefined"
      ? localStorage.getItem("lastAnnouncementSeen")
      : null;

  const [showAnnouncement, setShowAnnouncement] = useState(lastSeen !== today);

  const handleCloseAnnouncement = () => {
    localStorage.setItem("lastAnnouncementSeen", today);
    setShowAnnouncement(false);
  };

  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutPage />
      </div>
      <div id="theme">
        <ThemePage />
      </div>
      <div id="call-for-papers">
        <CallForPapersPage />
      </div>
      <div id="speakers">
        <SpeakersPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <div id="tribute">
        <TributePage />
      </div>

      {/* Announcement Modal */}
      {showAnnouncement && (
        <Dialog open={showAnnouncement} onOpenChange={handleCloseAnnouncement}>
          <Announcement handleCloseAnnouncement={handleCloseAnnouncement} />
        </Dialog>
      )}
    </>
  );
}