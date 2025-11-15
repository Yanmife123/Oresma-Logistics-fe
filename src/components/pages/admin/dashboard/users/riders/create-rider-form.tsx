"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailInput } from "@/components/utility/form/email-input";
import { PasswordInput } from "@/components/utility/form/password-input";
import { CustomerInput } from "@/components/utility/form/customInput";
import { useMutation } from "@tanstack/react-query";
import { SignUp } from "@/_lib/type/auth";
import { CreateRider } from "@/_lib/api/admin/rider/create-rider";
import { showToast } from "@/components/shared/toast";

interface RiderSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RiderSignupModal({
  isOpen,
  onClose,
}: RiderSignupModalProps) {
  type FormData = z.infer<typeof signUpScheme>;
  const signUpScheme = z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
    email: z.email(),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(
        /^[\d\+]{1,14}$/,
        "Invalid phone number format. Include country code if possible."
      ),
    password: z
      .string()
      .min(1, "Password is Required")
      .min(7, "Minimum of 8 characters"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpScheme),
  });

  const mutation = useMutation({
    mutationFn: CreateRider,
    onSuccess: (data) => {
      showToast.success("Rider Registered Successful", data.messae);
      onClose();
    },
    onError: (error) => {
      showToast.error("Registered Failed", error.message);
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data: SignUp) => {
    await mutation.mutateAsync(data);
  };
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 min-h-screen bg-black/50 z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl py-0 pb-4">
          <CardHeader className="bg-slate-900 text-white rounded-t-lg flex flex-row items-start justify-between py-4">
            <div className="flex-1">
              <CardTitle className="text-2xl">Create Rider Account</CardTitle>
              <CardDescription className="text-slate-300">
                Register your rider profile with Oresma Logistics
              </CardDescription>
            </div>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <CustomerInput
                inputname={"name"}
                register={register}
                type="text"
                label="Full Name"
                placeholder="John Doe"
                error={errors.name ? errors.name.message : undefined}
              />

              {/* Email Field */}
              <EmailInput
                inputname="email"
                register={register}
                error={errors.email ? errors.email.message : undefined}
                label="Email"
                placeholder="john301@gmail.com"
              />

              {/* Phone Number Field */}
              <CustomerInput
                label="Phone Number"
                inputname="phone"
                type={"text"}
                placeholder="8087488566"
                register={register}
                error={errors.phone ? errors.phone.message : undefined}
              />

              {/* Password Field */}
              <div className="space-y-2">
                <div className="hidden">
                  {" "}
                  <PasswordInput
                    inputname="password"
                    register={register}
                    label="Passowrd"
                    defaultValue="user2020"
                    error={
                      errors.password ? errors.password.message : undefined
                    }
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Default password starts with &quot;user2020&quot;
                </p>
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full text-white py-3 font-medium rounded-lg transition-colors cursor-pointer"
              >
                {mutation.isPending
                  ? "Creating Account..."
                  : "Create Rider Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
