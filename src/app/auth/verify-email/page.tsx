import { VerificationForm } from "@/components/pages/auth/verifying-email";

export default function VeriyEmailPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-2xl">
        <VerificationForm />
      </div>
    </div>
  );
}
