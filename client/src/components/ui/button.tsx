import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={`inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
));

Button.displayName = "Button";
