import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SubHeader } from "@/components/shared/landingpage/sub-header";

export default function AboutUs() {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="w-full px-0 py-2 flex justify-between items-center md:flex-row flex-col max-md:gap-7 ">
        <div className="w-[332px] h-[337px] relative">
          <Image
            src="https://res.cloudinary.com/duyhha3mz/image/upload/v1759716602/db527da01185893706d5f6280b0b2089fff8c5a7_shv1kd.jpg"
            alt="about-us"
            fill
            className="object-cover rounded-tl-[96px] rounded-br-[96px]"
          />
        </div>
        <div className="px-2 flex flex-col md:items-start items-center">
          <SubHeader title="About Us" />
          <p className="mt-5 text-sm text-[#021533] max-w-[540px] font-normal md:text-start text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            gravida velit. Cras vehicula sodales ligula, ut pharetra nulla
            laoreet ut. In porttitor iaculis dolor non aliquet.
          </p>
          <Button
            className="bg-[#F75720] hover:bg-[#F75720]/90 text-primary-foreground hover:scale-105 transition-transform duration-300 animate-fade-in-up animate-pulse-subtle rounded-tl-3xl rounded-br-3xl mt-6 text-xs"
            style={{ animationDelay: "0.4s" }}
          >
            GET A QUOTE
          </Button>
        </div>
      </div>
    </main>
  );
}
