import Section from "../components/Section";

export default function TributePage() {
  return (
    <Section title="Tribute" eyebrow="Honouring a Legend">
      <div className="space-y-6">
        <p className="text-lg">Tribute to Professor Timothy Oloyede Opoola</p>

        <p>
          Dear Colleague / Friend,
        </p>

        <p>
          As Prof. Timothy Oloyede Opoola marks 70 years of impactful life and service, 
          and retires from the University of Ilorin, we invite you to share your reflections, 
          tributes, or memories in his honour.
        </p>

        <p>
          Your words will form part of a commemorative publication celebrating his remarkable legacy 
          in scholarship, mentorship, and leadership.
        </p>

        <p>
        Please submit your tribute via the form below:
        </p>
<div className="p-4">
       <iframe
  src="https://forms.gle/EjayaJkCswYprrH38"
  className="w-full h-screen border-0"
>
  Loading…
</iframe>

      </div>
      </div>
    </Section>
  );
}
