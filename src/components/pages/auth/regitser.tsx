import { CheckCircle2 } from "lucide-react";
import { RegisterForm } from "./registerForm";
import Image from "next/image";

export default function RegisterComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4 animate-fade-in">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Registration Form */}
        <RegisterForm />
        {/* Right side - Benefits */}
        <div className="hidden lg:flex flex-col justify-center space-y-6 animate-slide-in-right lg:order-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative rounded-lg flex items-center justify-center">
              <Image src={"/logo.svg"} alt="Oresema Logo" fill />
            </div>
            <span className="text-3xl font-bold text-secondaryT">Oresma</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground leading-tight text-balance">
            Start your logistics journey today
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of businesses that trust Oresma for their shipping
            needs. Get started in minutes.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Real-time Tracking
                </h3>
                <p className="text-muted-foreground">
                  Monitor your shipments every step of the way
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Competitive Rates
                </h3>
                <p className="text-muted-foreground">
                  Get the best prices for your logistics needs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  24/7 Support
                </h3>
                <p className="text-muted-foreground">
                  Our team is always here to help you succeed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
