import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-background text-foreground shadow-md">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="hidden md:flex space-x-8 text-lg font-display text-[#5E4132]">
        <Link href="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-orange-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-orange-500 transition">
          Contact
        </Link>
      </div>

      <div>
        <Link
          href="/donate"
          className="bg-[#C99372] hover:bg-[#C99372]/80 text-[#5E4132] px-4 py-2 rounded-xl font-sans shadow-md transition"
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
