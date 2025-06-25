import { clsx } from "clsx";

export function Button({ className = "", variant = "default", size = "default", ...props }) {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700"
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    icon: "h-9 w-9 p-0"
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md border border-transparent text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}