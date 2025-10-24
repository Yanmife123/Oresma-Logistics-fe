interface LoadingSpinnerProps {
  color?: "blue" | "purple" | "green" | "orange" | "default";
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  blue: { hue: 210, saturation: 100, lightness: 60 },
  purple: { hue: 270, saturation: 100, lightness: 60 },
  green: { hue: 120, saturation: 100, lightness: 60 },
  orange: { hue: 30, saturation: 100, lightness: 60 },
  default: { hue: 45, saturation: 100, lightness: 60 },
};

const sizeMap = {
  sm: { container: "h-16 w-16", dot: "h-3 w-3", translate: "-36px" },
  md: { container: "h-24 w-24", dot: "h-5 w-5", translate: "-42px" },
  lg: { container: "h-32 w-32", dot: "h-6 w-6", translate: "-52px" },
};

export function LoadingSpinner({
  color = "default",
  size = "md",
}: LoadingSpinnerProps) {
  const colorConfig = colorMap[color];
  const sizeConfig = sizeMap[size];

  return (
    <div className="flex items-center justify-center mb-6">
      <div className={`relative ${sizeConfig.container}`}>
        {[...Array(8)].map((_, index) => {
          const rotation = (index * 360) / 8;
          const delay = index * 0.15;
          const lightness = colorConfig.lightness - index * 5;

          return (
            <div
              key={index}
              className={`absolute left-1/2 top-1/2 ${sizeConfig.dot} -translate-x-1/2 -translate-y-1/2`}
              style={{
                transform: `rotate(${rotation}deg) translateY(${sizeConfig.translate})`,
              }}
            >
              <div
                className="h-full w-full rounded-full animate-pulse"
                style={{
                  backgroundColor: `hsl(${colorConfig.hue}, ${colorConfig.saturation}%, ${lightness}%)`,
                  animationDelay: `${delay}s`,
                  animationDuration: "1.2s",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
