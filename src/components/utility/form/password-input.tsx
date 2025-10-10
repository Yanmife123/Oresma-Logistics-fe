"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";
type Props = {
  error?: string | undefined;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  inputname: string;
  placeholder?: string;
  label: string;
};
export function PasswordInput({
  error,
  register,
  inputname,
  label,
  placeholder = "*********",
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={inputname} className="text-foreground font-medium">
          {label}
        </Label>
      </div>
      <Input
        id={inputname}
        type="password"
        placeholder={placeholder}
        {...register(inputname)}
        className="h-11 bg-background border-input focus:border-primary transition-colors"
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
