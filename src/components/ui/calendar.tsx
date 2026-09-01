import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/style.css";

export function Calendar({ className, ...props }: DayPickerProps) {
  return (
    <DayPicker
      className={cn("rdp-svarabin text-ink", className)}
      classNames={{
        today: "text-pine font-semibold",
        selected: "bg-pine text-pine-fg rounded-md",
        chevron: "fill-pine",
        disabled: "text-subtle opacity-40",
        outside: "text-subtle/70",
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          ),
      }}
      {...props}
    />
  );
}
