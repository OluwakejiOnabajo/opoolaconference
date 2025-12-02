import Section from "../components/Section";
import SpeakerCard from "../components/SpeakerCard";

export default function SpeakersPage() {
  const speakers = [
    { name: "Prof. Pawel Zaprawa", role: "International Speaker" },
    { name: "Prof. Jozef Zajac", role: "International Speaker" },
    { name: "Prof. Mogbademu A. Alao", role: "Co-Host" },
    { name: "Prof. A. S. Idowu", role: "Co-Host" },
  ];

  return (
    <Section title="Speakers & Hosts" eyebrow="Academic Leadership">
      <div className="grid md:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <SpeakerCard key={s.name} {...s} />
        ))}
      </div>
    </Section>
  );
}
