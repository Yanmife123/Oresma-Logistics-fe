import { Truck } from "@/_lib/type/trucks/trucks";
import { Card } from "@/components/ui/card";

interface TruckDetailMaintenanceProps {
  truck: Truck;
}

export function TruckDetailMaintenance({ truck }: TruckDetailMaintenanceProps) {
  return (
    <Card className="p-6 border-none bg-gradient-to-br from-white to-slate-50">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Maintenance</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-slate-100 rounded-lg">
          <span className="text-slate-700 font-medium">Current Mileage</span>
          <span className="text-2xl font-bold text-orange-600">
            {truck.maintenance.mileage.toLocaleString()} km
          </span>
        </div>

        {truck.maintenance.serviceHistory &&
          truck.maintenance.serviceHistory.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Service History
              </h3>
              <div className="space-y-2">
                {truck.maintenance.serviceHistory.map(
                  (service: Record<string, unknown>, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <p className="text-slate-600">
                        {JSON.stringify(service)}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
      </div>
    </Card>
  );
}
