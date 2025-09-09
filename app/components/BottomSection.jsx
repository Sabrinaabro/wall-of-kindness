import Image from "next/image";
import Link from "next/link";

export default function BottomSection() {
  return (
    <section className="relative w-full h-screen bg-[#C99372] flex items-center justify-center overflow-hidden">
      {/* Background Vector */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/Vector 1.png" // Replace with your background vector image path
          alt="Background Vector"
          layout="responsive"
          width={1920}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-display text-[#EFDECD] mb-16">
          Are You
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
          {/* Donor Card */}
          <Link href="/donate">
            <div className="bg-[#EFDECD] text-[#FB7369] w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl shadow-2xl text-2xl font-sans cursor-pointer hover:scale-110 transition flex flex-col items-center justify-center p-8">
              <Image
                src="/Charity.png"
                alt="Donor"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-4xl font-bold mb-2">Donor / NGO</h3>
              <span className="text-4xl font-bold mb-2">?</span>
              <p className="text-xl text-[#C99372] mt-4">
                Join us & make a difference!
              </p>
            </div>
          </Link>

          {/* Receiver Card */}
          <Link href="/browse">
            <div className="bg-[#EFDECD] text-[#6B96D6] w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl shadow-2xl text-2xl font-sans cursor-pointer hover:scale-110 transition flex flex-col items-center justify-center p-8">
              <Image
                src="/receiver.png"
                alt="Receiver"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-4xl font-bold mb-2">Receiver</h3>
              <span className="text-4xl font-bold mb-2">?</span>
              <p className="text-xl text-[#C99372] mt-4">
                Browse & get donations!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
