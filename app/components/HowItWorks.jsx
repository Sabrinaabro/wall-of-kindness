import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "/1.png",
      textTop: "Join as Donor/NGO",
      textBottom: "or Receiver",
    },
    {
      number: "/2.png",
      textTop: "Post",
      textBottom: "or Browse Donations",
    },
    {
      number: "/3.png",
      textTop: "Choose Pickup",
      textBottom: "or Delivery",
    },
    {
      number: "/4.png",
      textTop: "Item is Handed to",
      textBottom: "Receiver",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-display text-center mb-16 text-[#D96C35]">
          How It Works?
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center max-w-[200px]"
            >
              {/* Number Image */}
              <Image
                src={step.number}
                alt={`Step ${i + 1}`}
                width={100}
                height={100}
                className="mb-4"
              />

              {/* Text */}
              <p className="text-lg font-bold text-[#5E4132] leading-snug">
                {step.textTop}
              </p>
              <p className="text-lg text-[#5E4132] leading-snug">
                {step.textBottom}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
