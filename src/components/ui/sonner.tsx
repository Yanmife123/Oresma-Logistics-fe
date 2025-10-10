"use client";

// import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      className="toaster group"
      // style={
      //   {
      //     "--normal-bg": "var()",
      //     "--normal-text": "var(--popover-foreground)",
      //     "--normal-border": "var(--border)",
      //   } as React.CSSProperties
      // }
      {...props}
      position="top-right"
    />
  );
};

export { Toaster };
