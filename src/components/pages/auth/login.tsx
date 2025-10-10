import { Package } from "lucide-react";
import { LoginForm } from "./loginForm";

export default function LoginComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4 animate-fade-in">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-6 animate-slide-in-right">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Package className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold text-foreground">Oresma</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground leading-tight text-balance">
            Welcome back to Oresma Logistics
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your trusted partner in seamless logistics solutions. Sign in to
            manage your shipments and track deliveries in real-time.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">
                Active Clients
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1k+</div>
              <div className="text-sm text-muted-foreground">Shipments</div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <LoginForm />
      </div>
    </div>
  );
}
