"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailInput } from "@/components/utility/form/email-input";
import { PasswordInput } from "@/components/utility/form/password-input";
import { showToast } from "@/components/shared/toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { adminLogin } from "@/_lib/api/auth/adminAuth";
import { useMutation } from "@tanstack/react-query";

export function AdminLoginForm() {
  const navigate = useRouter();
  type FormSchema = z.infer<typeof signInScheme>;
  const signInScheme = z.object({
    email: z.email(),
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
    resolver: zodResolver(signInScheme),
  });

  const mutation = useMutation({
    mutationFn: (data: FormSchema) => adminLogin(data),
    onSuccess: (data) => {
      if (data.success) {
        showToast.success(data.message || "Login successful");
        setTimeout(() => {
          navigate.push("/admin/dashboard");
        }, 2000);
      } else {
        showToast.error(data.message || "Login failed");
      }
    },
    onError: (error) => {
      if (error instanceof Error) {
        showToast.error(error.message);
      } else {
        showToast.error("An unknown error occurred");
      }
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-border/50 animate-fade-in-up">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center relative">
            <Image src={"/logo2.svg"} alt="Oresema Logo" fill />
          </div>
          <span className="text-2xl font-bold text-foreground">Oresma</span>
        </div>
        <CardTitle className="text-3xl text-center font-bold text-primaryT ">
          Admin Sign in
        </CardTitle>
        <CardDescription className="text-base text-[#021533] text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <EmailInput
            label="Email"
            inputname="email"
            register={register}
            error={errors.email ? errors.email.message : undefined}
          />
          <PasswordInput
            label="Passoword"
            inputname="password"
            register={register}
            error={errors.password ? errors.password.message : undefined}
          />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 mt-4 ">
          <Button
            type="submit"
            className="w-full h-11 bg-primaryT hover:bg-primaryT/90 text-primary-foreground font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
