interface SpeakerCardProps {
  name: string;
  role: string;
}

export default function Section({ name, role }: SpeakerCardProps) {
  return (
    <div className="bg-white p-6 shadow-sm border rounded-xl">
      <div className="h-10 w-10 rounded-full bg-linear-to-br from-conferenceBlue to-conferenceGold mb-4"></div>
      <h3 className="font-semibold text-conferenceBlue text-lg">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
