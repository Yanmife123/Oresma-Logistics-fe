import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";

export const showToast = {
  success: (message: string, description?: string) =>
    toast.custom(() => (
      <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-400 bg-emerald-50 shadow-sm">
        <CheckCircle className="text-emerald-600 w-5 h-5" />
        <div>
          <p className="font-semibold text-emerald-900">{message}</p>
          {description && (
            <p className="text-sm text-emerald-700">{description}</p>
          )}
        </div>
      </div>
    )),

  error: (message: string, description?: string) =>
    toast.custom(() => (
      <div className="flex items-center gap-3 p-4 rounded-lg border border-red-400 bg-red-50 shadow-sm">
        <XCircle className="text-red-600 w-5 h-5" />
        <div>
          <p className="font-semibold text-red-900">{message}</p>
          {description && <p className="text-sm text-red-700">{description}</p>}
        </div>
      </div>
    )),
};
