"use client";

import AboutPage from "./components/About";
import CallForPapersPage from "./components/CallForPapers";
import ContactPage from "./components/Contact";
import Hero from "./components/Hero";
import SpeakersPage from "./components/Speakers";
import ThemePage from "./components/Theme";
import { useState } from "react";
import Announcement from "./components/Announcement";
import { Dialog } from "@/components/ui/dialog";
import TributePage from "./components/Tribute";

export default function Home() {  
   // initialize state based on localStorage
  const today = new Date().toDateString();
  const lastSeen = typeof window !== "undefined"
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
