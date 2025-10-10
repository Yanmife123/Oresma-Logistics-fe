"use client";
import { AlertBanner } from "@/components/shared/dashboard/alert-banner";
export function AdminDashboardBanner() {
  return (
    <AlertBanner
      title="The road is your platform to undiluted wealth 
Take a chance and help more people"
      description="Learn more details on our latest blog post"
      actionLabel="Explore Logistics"
      onAction={() => console.log("Action clicked")}
      image="/dashboard/adminBanner.jpg"
      btnVarinat="secondary"
    />
  );
}
