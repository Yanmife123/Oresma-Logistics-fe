"use client";
import Image from "next/image";
import { useState } from "react";
import { Ruler, SquareMenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CustomerInput } from "@/components/utility/form/customInput";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
import { Processnvoice } from "../processing";
export function AdminReqestsDetail({ id }: { id: string | number }) {
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

  type FormSchema = z.infer<typeof InvoiceCreateSchema>;
  const InvoiceCreateSchema = z.object({
    contractor: z.string().min(1, "Contractor name is required"),
    email: z.email("Invalid email address"),
    date_of_contract: z.string().min(1, "Date of contract is required"),
    pickup_location: z.string().min(1, "Pick up location is required"),
    first_stop: z.string().min(1, "First stop is required"),
    destination: z.string().min(1, "Destination is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(InvoiceCreateSchema),
  });
  const [openModal, setOpenModal] = useState(false);

  const onSubmit: SubmitHandler<FormSchema> = async () => {
    setOpenModal(true);
  };
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
          <h4 className="font-semibold text-xl md:text-2xl ">
            Contractor Information
          </h4>
          <Card className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <CustomerInput
                  type="text"
                  register={register}
                  label="Contractor"
                  inputname="contractor"
                  error={
                    errors.contractor ? errors.contractor.message : undefined
                  }
                />
                <CustomerInput
                  type="text"
                  register={register}
                  label="Email"
                  inputname="email"
                  error={errors.email ? errors.email.message : undefined}
                />
                <CustomerInput
                  type="text"
                  register={register}
                  label="Date of Contract"
                  inputname="date_of_contract"
                  error={
                    errors.date_of_contract
                      ? errors.date_of_contract.message
                      : undefined
                  }
                />
                <CustomerInput
                  type="text"
                  register={register}
                  label="Pickup Location"
                  inputname="pickup_location"
                  error={
                    errors.pickup_location
                      ? errors.pickup_location.message
                      : undefined
                  }
                />
                <CustomerInput
                  type="text"
                  register={register}
                  label="Ist stop"
                  inputname="first_stop"
                  error={
                    errors.first_stop ? errors.first_stop.message : undefined
                  }
                />
                <CustomerInput
                  type="text"
                  register={register}
                  label="Destination"
                  inputname="destination"
                  error={
                    errors.destination ? errors.destination.message : undefined
                  }
                />
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full h-11 font-semibold mt-5 cursor-pointer"
                >
                  Create Invoice
                </Button>
              </CardFooter>
            </form>
          </Card>
          <Processnvoice
            open={openModal}
            onOpenChange={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
