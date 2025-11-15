import { Truck } from "@/_lib/type/trucks/trucks";
import { Card } from "@/components/ui/card";

interface TruckDetailSpecsProps {
  truck: Truck;
}

export function TruckDetailSpecs({ truck }: TruckDetailSpecsProps) {
  const specs = [
    { label: "Year", value: truck.year ?? "" },
    { label: "Make", value: truck.make ?? "" },
    { label: "Model", value: truck.vehicleModel ?? "" },
    { label: "Type", value: truck.truckType ?? "" },
    { label: "Transmission", value: truck.transmissionType ?? "" },
    { label: "Fuel Type", value: truck.fuelType ?? "" },
    { label: "Condition", value: truck.condition ?? "" },
    { label: "Color", value: truck.color ?? "" },
    { label: "License Plate", value: truck.licensePlate ?? "" },
    { label: "VIN", value: truck.vin ?? "" },
  ];

  return (
    <Card className="p-6 border-none bg-gradient-to-br from-white to-slate-50">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between items-start">
            <span className="text-slate-600 font-medium">{spec.label}</span>
            <span className="text-slate-900 font-semibold">{spec.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
