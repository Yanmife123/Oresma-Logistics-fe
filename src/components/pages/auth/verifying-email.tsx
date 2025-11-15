"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "@/_lib/api/auth/verify-email";
import { showToast } from "@/components/shared/toast";

const verificationSchema = z.object({
  code: z
    .string()
    .min(6, "Verification code must be 6 digits")
    .max(6, "Verification code must be 6 digits")
    .regex(/^[0-9]+$/, "Verification code must contain only numbers"),
});

type VerificationFormValues = z.infer<typeof verificationSchema>;

export function VerificationForm() {
  const [isVerified, setIsVerified] = useState(false);

  const {
    // register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const otpValue = watch("code");

  const mutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess(data) {
      console.log(data);
      showToast.success("done");
      setIsVerified(true);
    },
    onError(error) {
      console.log(error);
      showToast.error("Verificatin failed", error.message);
    },
  });

  async function onSubmit(values: VerificationFormValues) {
    await mutation.mutateAsync(values);
  }

  if (isVerified) {
    return (
      <Card className="p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <span className="text-3xl text-primary font-bold">✓</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Email Verified!
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Your email has been successfully verified.
            </p>
          </div>
        </div>
        <Button
          className="w-full h-11"
          onClick={() => {
            reset();
            setIsVerified(false);
          }}
        >
          Verify Another Email
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Verify Your Email
        </h2>
        <p className="text-muted-foreground text-sm">
          Enter the 6-digit code we sent to your email address
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-3">
          <label className="text-base font-medium text-foreground block">
            Verification Code
          </label>

          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={otpValue}
              onChange={(value: string) => setValue("code", value)}
            >
              <InputOTPGroup className="gap-3">
                <InputOTPSlot index={0} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={1} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={2} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={3} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={4} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={5} className="w-12 h-12 text-lg" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <p className="text-xs text-muted-foreground">
            Check your email for the verification code. It may take a few
            seconds to arrive.
          </p>

          {errors.code && (
            <p className="text-sm text-destructive font-medium mt-2">
              {errors.code.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant={"secondary"}
          className="w-full h-11 text-base font-medium"
          disabled={mutation.isPending || !otpValue}
        >
          {mutation.isPending ? "Verifying..." : "Verify Email"}
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Didn&apos;t receive the code?{" "}
            <button
              type="button"
              className="text-primary hover:underline font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log("Resend code clicked");
              }}
            >
              Resend
            </button>
          </p>
        </div>
      </form>
    </Card>
  );
}
