import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3b021d] text-white py-6 text-center">
      <div className="container text-sm flex flex-col gap-1 md:flex-row justify-between">
        <p>© 2026 Professor Opoola Legacy Conference. All Rights Reserved.</p>
        <p className="text-blue-200 text-xs">
          University of Ilorin — Ilorin, Kwara State, Nigeria
        </p>
        <p> Made with 💗 by{" "} <Link className="font-medium text-conferenceBlue underline" href="mailto:info.tekkspace@gmail.com?subject=Interested%20in%20Custom%20Software%20Development&body=Hi,%0D%0A%0D%0AI am interested in having a custom website or software built. Please let me know how we can collaborate.%0D%0A%0D%0AThank you!">TekkSpace Interactive</Link></p>
      </div>
    </footer>
  );
}
