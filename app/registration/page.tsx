import Section from "../components/Section";

export default function RegistrationPage() {
  return (
    <Section title="Registration" eyebrow="Secure Your Place">
      <p className="mb-4">
        Please complete the registration form below. For enquiries, kindly contact 
        the organising committee.
      </p>

      <div className="bg-white rounded-xl shadow-md border p-4">
       <iframe
  src="YOUR_GOOGLE_FORM_EMBED_LINK_HERE"
  className="w-full h-[900px] border-0"
>
  Loading…
</iframe>

      </div>
    </Section>
  );
}
