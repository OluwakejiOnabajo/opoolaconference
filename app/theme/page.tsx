import Section from "../components/Section";

export default function ThemePage() {
  return (
    <Section title="Conference Theme" eyebrow="2026 Academic Focus">
      <p className="text-xl font-semibold text-conferenceBlue mb-6">
        “Advances and Frontiers in Complex Analysis: Geometric Function Theory and 
        the Legacy of Professor T. O. Opoola.”
      </p>

      <p className="mb-4">
        The conference theme highlights ongoing advances in geometric function theory, 
        analytic structures, and related areas of complex analysis—fields deeply shaped 
        by Prof. Opoola’s pioneering work.
      </p>

      <p>
        Participants are invited to present original research aligned with this theme 
        or related mathematical subfields.
      </p>
    </Section>
  );
}
