import { AdminLoginForm } from "@/components/pages/admin/signin/signin-form";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4 animate-fade-in">
      <div className="w-full max-w-6xl flex gap-8 items-center justify-center">
        {" "}
        <AdminLoginForm />
      </div>
    </div>
  );
}
