import { PageHeader } from "@/components/shared/headers/page-headers";
import { TrucksListing } from "@/components/pages/dashboard/rider/truck/truckList";
export default function AllTrucksPage() {
  return (
    <div>
      <PageHeader
        title="Trucks"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Trucks" },
        ]}
      />
      <div>
        <TrucksListing />
      </div>
    </div>
  );
}
