"use client";

import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  userImage?: string;
  userName?: string;
  onToggleSidebar?: () => void;
  bgcolor?: string;
}

export function Header({
  title,
  userImage,
  userName = "User",
  onToggleSidebar,
  bgcolor = "#f75720",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span
            className={`absolute right-2 top-2 h-2 w-2 rounded-full`}
            style={{ background: bgcolor }}
          />
        </Button>

        <Avatar>
          <AvatarImage src={userImage || "/placeholder.svg"} alt={userName} />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
