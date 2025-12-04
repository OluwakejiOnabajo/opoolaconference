import Section from "../components/Section";
import SpeakerCard from "../components/SpeakerCard";

export default function SpeakersPage() {
    const hosts = [
  { 
    name: "Prof. W.	O. Egbewole,	SAN", 
    bio: "Vice-Chancellor,	University	of	Ilorin.",
    role: "Chief Host",
    image: "/assets/egbewole.jpg"
  },
  { 
    name: "Prof. O.	A. Adekeye", 
    bio: "Dean, Faculty of Physical Sciences",
    role: "Host",
    image: "/assets/adekeye.jpg"
  },
  { 
    name: "Prof. A. S. Idowu", 
    bio: "HOD, Mathematics Department",
    role: "Co-Host",
    image: "/assets/idowu.jpg"
  },
];

  const speakers = [
  { 
    name: "Prof. Mogbademu A. Alao", 
    bio: "Dept. of Mathematics, University of Lagos, Lagos, Nigeria",
    role: "Keynote Address Speaker",
    image: "/assets/alao.jpg"
  },
  { 
    name: "Prof. Pawel Zaprawa", 
    bio: "Dept. of Mathematics, Lublin University of Technology, Poland",
    role: "Lead Paper Presenter I",
    image: "/assets/zaprawa.jpg"
  },
  { 
    name: "Prof. Jozef Zajac", 
    bio: "The State University of Applied Sciences Chelm, Poland",
    role: "Lead Paper Presenter II",
    image: "/assets/zajac.jpg"
  },
  { 
    name: "Prof. E.	A. Oyekan", 
    bio: "Dept. of Mathematical Sciences, Olusegun Agagu University of Sci. & Tech., Okitipupa, Ondo State.",
    role: "Conference	Convener",
    image: "/assets/oyekan.jpg"
  },
];


  return (
    <Section title="Hosts & Speakers" eyebrow="Academic Leadership" muted>
      
      <div className="grid md:grid-cols-3 gap-3 mt-10">
        {hosts.map((s) => (
          <SpeakerCard key={s.name} {...s} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
        {speakers.map((s) => (
          <SpeakerCard key={s.name} {...s} />
        ))}
      </div>
    </Section>
  );
}
