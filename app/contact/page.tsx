import Section from "../components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact" eyebrow="Enquiries & Communication">
      <p className="text-lg text-gray-700 mb-10 max-w-2xl">
        For enquiries regarding the Opoola Legacy Conference 2026, please reach out
        to any member of the planning committee listed below.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Prof. O. A. Fadipe-Joseph",
            role: "Chairperson",
            email: "emalow@unilorin.edu.ng",
            tel: "+234 803 397 2496",
          },
          {
            name: "Prof. D. O. Makinde",
            role: "Event Planner",
            email: "funmideb@yahoo.com",
            tel: "+234 806 039 2066",
          },
          {
            name: "Prof. E. A. Oyekan",
            role: "Convener",
            email: "ea.oyekan@oaustech.edu.ng",
            tel: "+234 803 477 2630",
          },
          {
            name: "Dr. A. O. Lasode",
            role: "Organising Secretary",
            email: "lasode_ayo@yahoo.com",
            tel: "0703 736 2730",
          },
        ].map((person) => (
          <div
            key={person.email}
            className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-xl text-conferenceBlue mb-1">
              {person.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{person.role}</p>

            <div className="space-y-1">
              <p>
                <span className="font-medium">Email: </span>
                <a href={`mailto:${person.email}`} className="text-conferenceBlue hover:underline">
                  {person.email}
                </a>
              </p>

              <p>
                <span className="font-medium">Tel: </span>
                <a href={`tel:${person.tel}`} className="text-conferenceBlue hover:underline">
                  {person.tel}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
