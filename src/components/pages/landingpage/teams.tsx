import { SubHeader } from "@/components/shared/landingpage/sub-header";
import { title } from "process";
import Image from "next/image";

const teams = [
  {
    name: "Afisoye Oresma",
    id: 1,
    title: "Founder",
    img: "https://res.cloudinary.com/duyhha3mz/image/upload/v1759728843/c42075600c91225d1734751ce36192a23327f836_e4won1.jpg",
  },
  {
    name: "Afisoye Oresma",
    id: 2,
    title: "Founder",
    img: "https://res.cloudinary.com/duyhha3mz/image/upload/v1759728843/40cf4511298a2fa3042d7367bb951903fb29370d_bjo408.jpg",
  },
  {
    name: "Afisoye Oresma",
    id: 3,
    title: "Founder",
    img: "https://res.cloudinary.com/duyhha3mz/image/upload/v1759716602/db527da01185893706d5f6280b0b2089fff8c5a7_shv1kd.jpg",
  },
];
export function Team() {
  return (
    <section className="w-full max-7xl mx-auto ">
      <div className="flex flex-col gap-2 items-center py-7">
        <SubHeader title="Our Experts" />
        <p className="text-xs font-normal">
          Curabitur a gravida velit. <br /> Cras vehicula sodales ligula
        </p>
      </div>
      <div className="flex gap-14 mt-10 justify-center items-center flex-wrap">
        {teams.map((individual) => (
          <div className="w-[296px] h-[337px] relative" key={individual.id}>
            <Image
              src={individual.img}
              alt={individual.name}
              fill
              className="object-cover animate-zoom-in rounded-tl-[96px] rounded-br-[96px]"
            />
            <div className="absolute z-2 -bottom-2 -left-1 w-full h-auto  flex justify-center">
              <div className="py-2 px-9 flex flex-col gap-1 bg-white rounded-md items-center">
                <h2 className="font-semibold text-lg text-center">
                  {individual.name}
                </h2>
                <p className="text-xs font-normal">{individual.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
