import type { ReactNode } from "react";

interface SectionHeaderProps {
  chip?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  spacing?: "sm" | "lg";
  className?: string;
}

export default function SectionHeader({
  chip,
  title,
  description,
  align = "center",
  spacing = "sm",
  className = "",
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const spacingCls = spacing === "lg" ? "mb-16" : "mb-12";
  const maxWidth = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignCls} ${spacingCls} ${className}`}>
      {chip && (
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
          {chip}
        </div>
      )}
      <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
        {title}
      </h2>
      {description && (
        <p className={`text-[var(--text-muted)] text-[1.05rem] max-w-[640px] ${maxWidth}`}>
          {description}
        </p>
      )}
    </div>
  );
}