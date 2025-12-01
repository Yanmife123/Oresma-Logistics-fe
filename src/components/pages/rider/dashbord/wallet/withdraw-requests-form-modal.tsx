"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { X } from "lucide-react";
import { useRouterParams } from "@/_lib/functions/params-router-function";
import { NonDirectionalSuspenseListProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMutation } from "@tanstack/react-query";
import { CreateWithdrawWithPin } from "@/_lib/api/wallet/wallet-action";
import { showToast } from "@/components/shared/toast";

export default function WithdrawRequestsFormModal() {
  const { clearParams } = useRouterParams();
  const [isConfirming, setIsConfirming] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: CreateWithdrawWithPin,
    onSuccess: (data) => {
      showToast.success("Success", data.message);
      clearParams({ paramName: "withdraw" });
    },
    onError: (error) => {
      showToast.error("Failed", error.message);
    },
  });

  const ConfirmRquest = () => {
    const handleConfirm = async () => {
      if (!amount) {
        setError("Amount is required");
        return;
      }
      if (pin.length !== 4) {
        setError("Please enter a valid 4-digit PIN");
        return;
      }

      setError("");
      try {
        await mutation.mutateAsync({ pin: pin, amount: amount });
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === "Insufficient wallet balance") {
            setError(e.message);
            setIsConfirming(false);
          } else {
            setError(e.message);
          }
        }
      }
    };

    return (
      <CardContent className="text-center mt-4 text-gray-500 ">
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <p className="text-sm text-gray-600">You are about to withdraw</p>
            <p className="text-2xl font-medium">
              ${Number(amount ?? 0).toFixed(2)}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Label htmlFor={"amount"} className="text-foreground font-medium">
                Confirm Your Pin
              </Label>
            </div>
            <div className="flex justify-center">
              <InputOTP
                maxLength={4}
                onChange={(value) => setPin(value)}
                value={pin}
                autoFocus
              >
                <InputOTPGroup className="justify-center gap-4">
                  <InputOTPSlot
                    index={0}
                    className="w-12 h-12 text-lg border rounded-lg flex items-center justify-center shadow-sm"
                  />
                  <InputOTPSlot
                    index={1}
                    className="w-12 h-12 text-lg border rounded-lg flex items-center justify-center shadow-sm"
                  />
                  <InputOTPSlot
                    index={2}
                    className="w-12 h-12 text-lg border rounded-lg flex items-center justify-center shadow-sm"
                  />
                  <InputOTPSlot
                    index={3}
                    className="w-12 h-12 text-lg border rounded-lg flex items-center justify-center shadow-sm"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => {
                setIsConfirming(false);
                setPin("");
                setError("");
              }}
              className="flex-1"
              disabled={mutation.isPending}
            >
              Back
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1"
              disabled={mutation.isPending || mutation.isSuccess}
            >
              {mutation.isPending
                ? "Confirming..."
                : mutation.isSuccess
                ? "Confirmed"
                : "Confirm"}
            </Button>
          </div>
        </div>
      </CardContent>
    );
  };

  const hanldeClick = () => {
    if (!amount) {
      setError("Amount is required");
      return;
    }
    setError("");
    setIsConfirming(true);
  };
  return (
    <>
      <div className="fixed inset-0 min-h-screen bg-black/50 z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl py-0 pb-4">
          <CardHeader className="bg-slate-900 text-white rounded-t-lg flex flex-row items-start justify-between py-4">
            <div className="flex-1">
              <CardTitle className="text-2xl">Withdraw Request Form</CardTitle>
              <CardDescription className="text-slate-300">
                Fill in the details to request a withdrawal from your wallet.
              </CardDescription>
            </div>
            <button
              onClick={() => clearParams({ paramName: "withdraw" })}
              className="text-slate-300 hover:text-white transition-colors"
              disabled={mutation.isPending}
            >
              <X size={24} />
            </button>
          </CardHeader>
          {isConfirming ? (
            <ConfirmRquest />
          ) : (
            <CardContent className="text-center mt-4 text-gray-500 ">
              {error && <p className="text-red-500">{error}</p>}
              <div className="max-w-md mx-auto space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor={"amount"}
                      className="text-foreground font-medium"
                    >
                      Amount
                    </Label>
                  </div>
                  <Input
                    id={"amount"}
                    type={"number"}
                    value={amount ?? ""}
                    onChange={(e) => {
                      setAmount(Number(e.target.value));
                    }}
                    placeholder={"Enter amount"}
                    className="h-11 bg-background border-input focus:border-primary transition-colors"
                    step={1}
                  />
                </div>

                <div className="pt-4 w-full">
                  <Button
                    onClick={hanldeClick}
                    className="w-full cursor-pointer"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}
