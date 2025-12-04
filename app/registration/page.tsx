import Section from "../components/Section";

export default function RegistrationPage() {
  return (
    <Section title="Registration" eyebrow="Secure Your Place">
      <p className="mb-4">
        Please complete the registration form below. For enquiries, kindly contact 
        the organising committee.
      </p>

      <div className="bg-white p-2 md:p-4 h-full">
       <iframe
  src="https://forms.gle/ASpLQdvWFeqLkNuZ8"
  className="w-full h-[3000px] border-0"
>
  Loading…
</iframe>

      </div>
    </Section>
  );
}
