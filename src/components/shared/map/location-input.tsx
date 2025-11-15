"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Loader2 } from "lucide-react";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  icon?: "start" | "destination";
  onSubmit?: () => void;
  isLoading?: boolean;
}

export function LocationInput({
  value,
  onChange,
  placeholder,
  label,
  icon = "start",
  onSubmit,
  isLoading = false,
}: LocationInputProps) {
  const iconColor = icon === "start" ? "text-yellow-500" : "text-gray-900";

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <MapPin
            className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 ${iconColor}`}
          />
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="pl-10"
            disabled={isLoading}
          />
        </div>
        {icon === "destination" && onSubmit && (
          <Button
            onClick={onSubmit}
            disabled={isLoading || !value}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="hidden sm:inline">Searching...</span>
              </>
            ) : (
              "Search"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
