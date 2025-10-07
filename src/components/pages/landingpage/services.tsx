import { SubHeader } from "@/components/shared/landingpage/sub-header";
import { Button } from "@/components/ui/button";
export default function Services() {
  return (
    <section className="w-full relative bg-gray-50 max-w-7xl mx-auto px-0 py-2">
      <div>
        <SubHeader title="Our Services" />
        <div>
          <Button
            className="bg-[#F75720] hover:bg-[#F75720]/90 text-primary-foreground hover:scale-105 transition-transform duration-300 animate-fade-in-up animate-pulse-subtle rounded-tl-3xl rounded-br-3xl mt-6 text-xs"
            style={{ animationDelay: "0.4s" }}
          >
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,256px))]  gap-6 mt-10">
        <div></div>
      </div>
    </section>
  );
}
