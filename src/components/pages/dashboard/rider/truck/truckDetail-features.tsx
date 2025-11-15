import { Truck } from "@/_lib/type/trucks/trucks";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface TruckDetailFeaturesProps {
  truck: Truck;
}

export function TruckDetailFeatures({ truck }: TruckDetailFeaturesProps) {
  const features = [
    { label: "Lift Gate", value: truck.features.hasLiftGate },
    { label: "Refrigeration", value: truck.features.hasRefrigeration },
    { label: "GPS Tracking", value: truck.features.hasGPS },
    { label: "Ramp", value: truck.features.hasRamp },
    { label: "Crane", value: truck.features.hasCrane },
    { label: "Toolbox", value: truck.features.hasToolbox },
    { label: "Air Conditioning", value: truck.features.airConditioning },
    { label: "Power Steering", value: truck.features.powerSteering },
  ];

  return (
    <Card className="p-6 border-none bg-gradient-to-br from-white to-slate-50">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.label}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              feature.value
                ? "bg-orange-50 border border-orange-200"
                : "bg-slate-100 border border-slate-200 opacity-50"
            }`}
          >
            {feature.value ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
            )}
            <span
              className={`font-medium ${
                feature.value ? "text-slate-900" : "text-slate-500"
              }`}
            >
              {feature.label}
            </span>
          </div>
        ))}
      </div>

      {truck.features.other && truck.features.other.length > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">Other Features</h3>
          <div className="flex flex-wrap gap-2">
            {truck.features.other.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
