"use client";

import type React from "react";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchFilterProps {
  paramName?: string;
  placeholder?: string;
  className?: string;
}

export function SearchFilter({
  paramName = "search",
  placeholder = "Search...",
  className = "",
}: SearchFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get(paramName) || "";
  const [inputValue, setInputValue] = useState(currentSearch);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (inputValue.trim()) {
      params.set(paramName, inputValue);
    } else {
      params.delete(paramName);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setInputValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-9 bg-transparent border-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-none shadow-none"
        />
        {inputValue && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Button onClick={handleSearch} size="sm" className="px-4">
        Search
      </Button>
    </div>
  );
}
