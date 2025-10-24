"use client";
import Image from "next/image";
import { Ruler, SquareMenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function RequestDetail({ id }: { id: string | number }) {
  const tabData = [
    {
      id: 1,
      title: "2000 miles",
      description: "Distance covered",
    },
    {
      id: 2,
      title: "2000 miles",
      description: "Distance covered",
    },
    {
      id: 3,
      title: "2000 miles",
      description: "Distance covered",
    },
    {
      id: 4,
      title: "2000 miles",
      description: "Distance covered",
    },
  ];
  const navigate = useRouter();
  return (
    <div className="px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 h-auto lg:h-[450px] mb-6 md:mb-10">
        {/* Main image - responsive height */}
        <div className="col-span-1 md:col-span-3 h-[280px] sm:h-[320px] md:h-[380px] lg:h-full">
          <div className="h-full w-full relative rounded-lg overflow-hidden">
            <Image
              src={"/truck1.png"}
              alt="truck"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Secondary images grid - responsive layout */}
        <div className="grid lg:grid-cols-2 col-span-1 md:col-span-3 lg:col-span-2 gap-2 md:gap-3 h-[280px] sm:h-[320px] md:h-[380px] lg:h-full">
          {/* Large secondary image */}
          <div className="col-span-2 lg:col-span-2 h-[130px] sm:h-[150px] md:h-[180px] lg:h-auto">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src={"/truck2.png"}
                alt="truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Small secondary images */}
          <div className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-auto">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src={"/truck2.png"}
                alt="truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-auto">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src={"/truck2.png"}
                alt="truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl">
        2021 ISUZU M100-600 Truck
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-[90px] mt-5 md:mt-7">
        {tabData.map((data) => (
          <div className="flex gap-3 md:gap-4" key={data.id}>
            <div className="shadow-[0px_4px_4px_0px_#00000040] py-2 px-2 rounded-[10px] shrink-0">
              <SquareMenuIcon className="w-6 h-6 md:w-[35px] md:h-[35px]" />
            </div>
            <div className="flex justify-between flex-col items-start">
              <h3 className="font-semibold text-sm md:text-base">
                {data.title}
              </h3>
              <p className="font-normal text-xs md:text-sm">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-6 md:gap-7">
          <div className="flex flex-col gap-4 md:gap-7">
            <h4 className="font-semibold text-xl md:text-2xl">
              Vehicle Description
            </h4>
            <p className="text-primaryT text-sm md:text-base leading-relaxed">
              Nulla ex nulla, faucibus eu magna et, porttitor luctus augue. Nam
              ultrices massa ut justo vulputate, ut tempor turpis condimentum.
              Donec ac imperdiet metus, ut pharetra lorem. Fusce ac dapibus
              diam. Mauris at laoreet dui, vel congue lectus. Sed facilisis nunc
              aliquam, dignissim nibh vitae, hendrerit mauris. Nunc vitae
              euismod lorem. Mauris malesuada semper sem, vel ultrices massa
              sollicitudin non. Praesent id fermentum odio. Morbi ac ornare
              nisl. Phasellus id posuere urna, at vestibulum mi. Fusce varius
              maximus arcu at faucibus. Ut quis nisl dui. Proin sit amet porta
              enim. Donec in consequat massa
            </p>
            <p className="text-primaryT text-sm md:text-base leading-relaxed">
              Sed convallis convallis vehicula. Nullam feugiat libero at metus
              accumsan, sit amet tincidunt nulla consectetur. Donec id massa
              nisl. Nunc tincidunt orci ac quam lobortis vestibulum. Cras porta,
              nibh vel laoreet vulputate, augue ante viverra eros, in mattis
              elit lorem fermentum nulla. Ut iaculis mi eget dapibus pharetra
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-4 md:mb-6">
              Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-14">
              {[...Array(8)].map((_, index) => (
                <div className="flex gap-3 md:gap-4" key={index}>
                  <div className="shadow-[0px_4px_4px_0px_#00000040] py-2 px-2 rounded-[10px] shrink-0">
                    <Ruler className="w-6 h-6 md:w-[35px] md:h-[35px]" />
                  </div>
                  <div className="flex justify-between flex-col items-start">
                    <h3 className="font-semibold text-sm md:text-base">200M</h3>
                    <p className="font-normal text-xs md:text-sm">
                      Full height
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <h4 className="font-semibold text-xl md:text-2xl mb-4">
            Your trip details
          </h4>
          <div className="bg-[#FCFCFD] border border-[#F8F9FC] shadow-[0px_4px_4px_0px_#00000040]  rounded-[25px] px-7 py-3 flex flex-col gap-5">
            <div className="space-y-2">
              <h5 className="text-primaryT">Contractor</h5>
              <div className="py-3.5 px-8 text-[#AEAFB2] bg-[#FEFEFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]">
                Berger Corporation
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-primaryT">Date of contract</h5>
              <div className="py-3.5 px-8 text-[#AEAFB2] bg-[#FEFEFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]">
                14-06-2025
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-primaryT">Pick up location</h5>
              <div className="py-3.5 px-8 text-[#AEAFB2] bg-[#FEFEFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]">
                Ikorodu Main gate
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-primaryT">Ist stop</h5>
              <div className="py-3.5 px-8 text-[#AEAFB2] bg-[#FEFEFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]">
                Ojota by Nomansland
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-primaryT">Destination</h5>
              <div className="py-3.5 px-8 text-[#AEAFB2] bg-[#FEFEFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[25px]">
                Ikorodu Main gate
              </div>
            </div>
            <Button
              className="mt-4 py-6 px-8 rounded-[15px] cursor-pointer"
              onClick={() => {
                navigate.push(`/rider/dashboard/requests/${id}/route`);
              }}
            >
              Accept request
            </Button>
            <Button
              className="mt-4 py-6 px-8 rounded-[15px] cursor-pointer border border-[#DBD1D1]"
              variant={"ghost"}
            >
              Decline request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
