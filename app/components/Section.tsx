interface SectionProps {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  muted?: boolean;
}

export default function Section({ title, eyebrow, children, muted = false }: SectionProps) {
  return (
    <section className={`${muted ? "bg-[#46021f] text-white" : "bg-white"} py-24`}>
      <div className="container">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-conferenceBlue mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className={`text-4xl font-semibold ${muted ? "text-white" : "text-[#3b021d]"} mb-4`}>
          {title}
        </h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
}
