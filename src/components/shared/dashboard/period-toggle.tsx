"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"

export interface PeriodOption {
  label: string
  value: string
}

interface PeriodToggleProps {
  options: PeriodOption[]
  paramName?: string
  defaultValue?: string
  className?: string
}

export function PeriodToggle({ options, paramName = "period", defaultValue, className = "" }: PeriodToggleProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPeriod = searchParams.get(paramName) || defaultValue || options[0]?.value

  const handlePeriodChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(paramName, value)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={`inline-flex items-center rounded-lg bg-gray-100 p-1 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handlePeriodChange(option.value)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            currentPeriod === option.value ? "bg-white text-orange-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
