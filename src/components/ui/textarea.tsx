import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-28 w-full rounded-lg bg-surface px-3 py-3 text-base text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-pine/35 md:text-sm",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
