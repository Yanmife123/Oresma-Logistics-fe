import type { ReactNode } from "react";
import { ChevronRight, CircleQuestionMark } from "lucide-react";
import { cn } from "@/_lib/utils";
import Link from "next/link";
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn("space-y-2 border-b bg-background px-6 py-4", className)}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:primaryT transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    index === breadcrumbs.length - 1 &&
                      "text-primaryT font-medium"
                  )}
                >
                  {item.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          ))}
        </nav>
      )}

      {/* Title and Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-primaryT">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Actions */}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}

export function PageHeader2({
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn("space-y-2 border-b bg-background px-6 py-4", className)}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:primaryT transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    index === breadcrumbs.length - 1 &&
                      "text-primaryT font-medium"
                  )}
                >
                  {item.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          ))}
        </nav>
      )}

      {/* Title and Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-primaryT">
            {title}{" "}
            <span>
              <CircleQuestionMark
                height={25}
                width={25}
                className="bg-primaryT text-white ml-1 my-auto rounded-full inline-block"
              />
            </span>
          </h1>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Actions */}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
