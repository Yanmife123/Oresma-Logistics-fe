"use client";
import { AlertBanner } from "@/components/shared/dashboard/alert-banner";
export function DashboardBanner() {
  return (
    <AlertBanner
      title="We’ve updated our cancellation policy to  ensure a 
seamless user experience"
      description="Learn more details on our latest blog post"
      actionLabel="Explore Logistics"
      onAction={() => console.log("Action clicked")}
    />
  );
}
