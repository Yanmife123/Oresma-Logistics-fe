"use client";

import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  icon?: "start" | "destination";
}

export function LocationInput({
  value,
  onChange,
  placeholder,
  label,
  icon = "start",
}: LocationInputProps) {
  const iconColor = icon === "start" ? "text-yellow-500" : "text-gray-900";

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative">
        <MapPin
          className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 ${iconColor}`}
        />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10"
        />
      </div>
    </div>
  );
}
