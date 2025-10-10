// import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TripCardProps {
  image: string;
  title: string;
  subtitle: string;
  distance: string;
  price: string;
  distanceLabel?: string;
  priceLabel?: string;
}

export function TripCard({
  image,
  title,
  subtitle,
  distance,
  price,
  distanceLabel = "Kilometers",
  priceLabel = "Naira/price",
}: TripCardProps) {
  return (
    <div className="overflow-hidden border-b-2 border-[#CCCCCC]">
      <div className="p-0">
        <div className="flex gap-4 p-4 items-center">
          <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h4 className="font-semibold text-foreground">{title}</h4>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-end  gap-[20px] justify-between text-right">
            <div>
              <p className="font-semibold text-foreground">{distance}</p>
              <p className="text-xs text-muted-foreground">{distanceLabel}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">{price}</p>
              <p className="text-xs text-muted-foreground">{priceLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
