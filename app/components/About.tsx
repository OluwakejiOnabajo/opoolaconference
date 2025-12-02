import Section from ".././components/Section";

export default function AboutPage() {
  return (
    <Section title="About the Conference" eyebrow="Professor Opoola Legacy Conference 2026">
     <div className="text-justify">
       <p className="mb-4">
        The Professor Opoola Legacy Conference 2026 is a one-day international gathering 
        honouring Professor Timothy Oloyede Opoola, a distinguished scholar of 
        Complex Analysis whose work has shaped several generations of mathematicians.
      </p>

      <p className="mb-4">
        Hosted by the University of Ilorin, the conference provides a platform for 
        researchers, educators, students, and international collaborators to share 
        advances in mathematical research and celebrate Prof. Opoola’s enduring 
        contributions.
      </p>

      <p>
        The event will feature keynote lectures, research presentations, networking 
        sessions, and academic dialogue centred on the frontiers of geometric function 
        theory and related fields.
      </p>
     </div>
    </Section>
  );
}
