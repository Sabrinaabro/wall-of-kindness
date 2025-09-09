import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Full-Width Image */}
      <Image
        src="/hero.png" // Replace with your hero image
        alt="Kindness Wall Hero"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Bottom-Left Text */}
      <div className="absolute bottom-10 left-6 text-left z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-brand font-display">
          Wall Of Kindness
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-8xl mt-2 text-brand font-display">
          دیوار مہربانی
        </h1>
      </div>
    </section>
  );
}
