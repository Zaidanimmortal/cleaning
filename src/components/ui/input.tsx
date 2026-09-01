import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-surface px-3 text-base text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-pine/35 md:text-sm",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
