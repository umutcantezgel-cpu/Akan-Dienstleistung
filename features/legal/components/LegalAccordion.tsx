"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface LegalAccordionProps {
  title: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function LegalAccordion({
  title,
  icon,
  defaultOpen = false,
  children,
}: LegalAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0,
  );

  useEffect(() => {
    if (!contentRef.current) return;

    // Use ResizeObserver to auto-adjust height if content changes (e.g. window resize)
    const resizeObserver = new ResizeObserver(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    });

    resizeObserver.observe(contentRef.current);

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  return (
    <div className="border border-border/50 rounded-2xl bg-surface mb-8 overflow-hidden transition-all duration-300 hover:border-border/80 shadow-sm relative group">
      {/* Subtle glow on hover/open */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${isOpen ? "opacity-100" : "group-hover:opacity-50"}`}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 relative z-10"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5 pr-4">
          {icon && (
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 [&>svg]:w-5 [&>svg]:h-5 ${isOpen ? "bg-primary/10 text-primary shadow-inner" : "bg-background text-text-secondary group-hover:bg-primary/5 group-hover:text-primary"}`}
            >
              {icon}
            </div>
          )}
          <h3
            className={`text-xl md:text-2xl font-bold font-display m-0! leading-tight transition-colors duration-300 ${isOpen ? "text-text-primary" : "text-text-primary group-hover:text-primary"}`}
          >
            {title}
          </h3>
        </div>
        <div
          className={`mt-4 sm:mt-0 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-180 bg-primary/10 text-primary" : "bg-background text-text-secondary group-hover:bg-primary/5"}`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className="transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden relative z-10"
        style={{ height: height === undefined ? "auto" : `${height}px` }}
      >
        <div
          ref={contentRef}
          className="p-6 sm:p-8 pt-0 border-t border-border/20 mt-2 text-text-secondary leading-relaxed prose prose-lg prose-p:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-hover max-w-none"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
