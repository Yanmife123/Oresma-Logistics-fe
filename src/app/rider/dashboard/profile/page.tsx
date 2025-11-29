import RiderProfileComponent from "@/components/pages/rider/dashbord/profile/profile-component";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default function RiderProfilePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/rider/dashboard" },
          { label: "Profile", href: "/rider/dashboard/profile" },
        ]}
      />
      <RiderProfileComponent />
    </div>
  );
}
