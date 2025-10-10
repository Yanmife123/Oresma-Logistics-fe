import { SubHeader } from "@/components/shared/landingpage/sub-header";
import Image from "next/image";

const processSteps = [
  {
    numberimg:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1759731345/01_eokg99.png",
    title: "Step 1",
    description:
      "Customer submits inquiry with specific vehicle requirements and destination details for accurate quotation and timeline.",
  },
  {
    numberimg:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1759731345/02_fefwn5.png",
    title: "Step 2",
    description:
      "We source the best vehicles from our extensive network, negotiate competitive prices, and arrange quality inspection.",
  },
  {
    numberimg:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1759731345/03_emkkah.png",
    title: "Step 3",
    description:
      "Complete export documentation, customs clearance, and arrange reliable shipping to deliver vehicles safely to your location.",
  },
];

export default function Process() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-12 items-center">
        <SubHeader title="Our Process" />

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:flex items-start justify-center w-full gap-8">
          {processSteps.map((step, index) => (
            <div key={step.numberimg} className="flex items-start flex-1">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center gap-4 flex-1">
                <Image
                  src={step.numberimg}
                  alt={step.title}
                  width={96}
                  height={96}
                />

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-[#F75720]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[270px]">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (not after last step) */}
              {index < processSteps.length - 1 && (
                <div className="flex items-center pt-12 px-4">
                  <div className="h-1.5 w-25 bg-[#35445C]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="flex md:hidden flex-col gap-12 w-full mt-5">
          {processSteps.map((step, index) => (
            <div
              key={step.numberimg}
              className="flex flex-col items-center gap-4"
            >
              {/* Large Number */}
              {/* <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 [-webkit-text-stroke:2px_#e5e7eb]">
                {step.number}
              </div> */}
              <Image
                src={step.numberimg}
                alt={step.title}
                width={72}
                height={72}
              />

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-[#F75720]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-sm">
                {step.description}
              </p>

              {/* Connecting Line (not after last step) */}
              {index < processSteps.length - 1 && (
                <div className="flex items-center pt-12 px-4">
                  <div className="h-20 w-1.5 bg-[#35445C]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
