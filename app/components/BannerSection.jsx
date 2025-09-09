import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="flex justify-center items-center py-16 px-4">
      <div className="bg-[#C99372] text-[#EFDECD] rounded-2xl shadow-lg p-10 text-center max-w-6xl w-full">
        {/* Banner Heading */}
        <h1 className="text-5xl md:text-7xl font-sans mb-6">
          A Little Help Can Make Big Changes
        </h1>

        {/* Small Icon */}
        <div className="flex justify-center">
          <Image
            src="/Donate.png" // 🔹 Put your image here
            alt="Donation Icon"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
