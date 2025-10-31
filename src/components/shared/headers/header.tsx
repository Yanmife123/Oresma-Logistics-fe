"use client";

import { Bell, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  userImage?: string;
  userName?: string;
  onToggleSidebar?: () => void;
  bgcolor?: string;
  isMobileOpen?: boolean;
}

export function Header({
  title,
  userImage,
  userName = "User",
  onToggleSidebar,
  bgcolor = "#f75720",
  isMobileOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            {isMobileOpen ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </Button>
        )}
        <h1 className="text-2xl font-semibold capitalize">{title}</h1>
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

export function Header2({
  title,
  userImage,
  userName = "User",
  onToggleSidebar,
  isMobileOpen,
}: // bgcolor = "#f75720",
HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            {isMobileOpen ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </Button>
        )}
        <h1 className="md:text-2xl text-lg font-semibold capitalize">
          {title}
        </h1>
        <div className="bg-primaryT w-[30px] h-[30px] rounded-full flex justify-center items-center">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={userImage || "/placeholder.svg"} alt={userName} />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="capitalize font-semibold md:text-xl max-md:hidden text-primaryT ">
          {userName}
        </p>
      </div>
    </header>
  );
}
