import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  bio: string;
  role: string;
  image?: string; // optional profile image
}

export default function SpeakerCard({ name, bio, role, image }: SpeakerCardProps) {
  return (
    <div className="bg-white p-6 shadow-sm border rounded-xl flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={200} // 16 * 4 = 64px
          height={200}
          className="rounded-full object-cover mb-4"
        />
      ) : (
        <div className="h-16 w-16 rounded-full bg-linear-to-br from-conferenceBlue to-conferenceGold mb-4"></div>
      )}
      <h3 className="font-semibold text-conferenceBlue text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-1">{bio}</p>
      <p className="text-gray-600 text-sm font-medium">{role}</p>
    </div>
  );
}
