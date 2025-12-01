"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export function useRouterParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const updateParam = ({
    inputValue,
    paramName,
  }: {
    inputValue: string;
    paramName: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (inputValue.trim()) {
      params.set(paramName, inputValue);
    } else {
      params.delete(paramName);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearParams = ({ paramName }: { paramName: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);
    router.push(`${pathname}?${params.toString()}`);
  };
  return { updateParam, clearParams };
}
