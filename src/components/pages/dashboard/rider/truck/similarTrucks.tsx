import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TruckCardProps {
  image: string;
  title: string;
  mileage: string;
  miles: string;
  color: string;
  id: string;
  brand: string;
  type: string;
}

export function SimilarTruckCard({
  image,
  title,
  mileage,
  miles,
  color,
  id,
  brand,
  type,
}: TruckCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg bg-[#F7F8FB]">
      <div className="relative h-[180px] w-full overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-3">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{mileage}</p>
        <p className="text-sm text-muted-foreground mb-4">
          {miles} | {color} | #{id}
        </p>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-xs font-medium">
            {brand}
          </span>
          <span className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-xs font-medium">
            {type}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
