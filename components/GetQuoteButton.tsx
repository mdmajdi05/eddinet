"use client";

import { useState } from "react";
import QuotePopup from "@/components/QuotePopup";

interface GetQuoteButtonProps {
  service: string;
}

export default function GetQuoteButton({ service }: GetQuoteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 self-start inline-flex items-center gap-2 font-bold text-[0.88rem] text-[var(--main-accent)] hover:gap-3 transition-all duration-300 cursor-pointer bg-transparent border-0 p-0 group"
      >
        Get Quote <span aria-hidden>→</span>
      </button>
      {open && <QuotePopup service={service} onClose={() => setOpen(false)} />}
    </>
  );
}