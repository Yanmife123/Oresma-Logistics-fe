import { RouteMap } from "@/components/shared/map/route-map";
import { TripProcess } from "@/components/pages/rider/dashbord/requests/route/TripProcess";
export default function RoutePage() {
  return (
    <div>
      <div>
        <RouteMap
          origin="lagos,Nigeria"
          destination="Osun State, Nigeria"
          className="h-[430px] "
        />
        <TripProcess />
      </div>
    </div>
  );
}
