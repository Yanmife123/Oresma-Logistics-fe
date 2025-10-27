"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
import { useState } from "react";
import { CustomerInput } from "@/components/utility/form/customInput";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Processnvoice } from "./processing";

export default function CreateInoiveModal({ open, onOpenChange }: Props) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <h4 className="font-semibold text-xl md:text-2xl ">
          Contractor Information
        </h4>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <CustomerInput
              type="text"
              register={register}
              label="Contractor"
              inputname="contractor"
              error={errors.contractor ? errors.contractor.message : undefined}
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
              error={errors.first_stop ? errors.first_stop.message : undefined}
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
          </div>
          <div>
            <Button
              type="submit"
              className="w-full h-11 font-semibold mt-5 cursor-pointer"
            >
              Create Invoice
            </Button>
          </div>
        </form>
        <Processnvoice
          open={openModal}
          onOpenChange={() => {
            setOpenModal(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
