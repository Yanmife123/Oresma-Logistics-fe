"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterForm() {
  return (
    <form action="" className="w-full max-w-md">
      <div className="flex items-center rounded-tl-[20px] rounded-br-[20px] overflow-hidden shadow-lg">
        <Input
          name="email"
          type="email"
          required
          placeholder="email@yourexample.com"
          className="flex-1 border-0 rounded-none bg-white text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 h-14 px-6"
        />
        <Button
          type="submit"
          className="rounded-none bg-[#FF5722] hover:bg-[#F4511E] text-white h-14 px-8 font-semibold cursor-pointer"
        >
          Send
        </Button>
      </div>
    </form>
  );
}
