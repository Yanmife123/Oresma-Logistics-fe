import ProfileComponent from "@/components/pages/dashboard/profile/profile-component";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function CustomerProfilePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Profile" },
        ]}
      />
      <ProfileComponent />
    </div>
  );
}
