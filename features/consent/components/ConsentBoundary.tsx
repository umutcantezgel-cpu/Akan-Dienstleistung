"use client";

import { useState, useSyncExternalStore, ReactNode } from "react";
import { useConsentStore } from "../store/useConsentStore";
import { ShieldAlert, Lock, Check } from "lucide-react";

const emptySubscribe = () => () => {};

interface ConsentBoundaryProps {
  type: "functional" | "analytics" | "marketing";
  title: string;
  description: string;
  children: ReactNode;
  fallbackImage?: string; // Optional blurred background or placeholder
  className?: string; // Optional layout adjustments like min-height
}

export default function ConsentBoundary({
  type,
  title,
  description,
  children,
  fallbackImage,
  className = "",
}: ConsentBoundaryProps) {
  const { preferences, savePreferences, hasConsented, openBanner } =
    useConsentStore();
  const [isRevealing, setIsRevealing] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Check permissions and state
  const hasPermission = mounted ? preferences[type] === true : false;

  const handleGrantPermission = () => {
    setIsRevealing(true);
    savePreferences({ [type]: true });
    // The overlay will fade out CSS-wise. We keep it mounted for a bit to allow the animation to finish.
    setTimeout(() => setIsRevealing(false), 800);
  };

  // Only render children instantly if we're fully mounted and have permission AND not currently revealing
  if (mounted && hasPermission && !isRevealing) {
    return <>{children}</>;
  }

  // SSR SAFE RENDER PATH:
  // Always render the wrapper on the server and on the first client pass.
  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden bg-surface flex items-center justify-center group isolate border border-border/80 shadow-sm ${className || "min-h-[250px]"}`}
    >
      {/* If permission is granted (client-side only), inject children into DOM behind the overlay so they can load */}
      {mounted && (hasPermission || isRevealing) && (
        <div className="absolute inset-0 z-0">{children}</div>
      )}

      {/* Premium Frosted Glass Overlay */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isRevealing ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"}`}
      >
        {/* Blur backdrop & Fallback Image */}
        <div className="absolute inset-0 bg-surface/60 backdrop-blur-lg z-0" />
        {fallbackImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.45] mix-blend-multiply z-[-1] transition-opacity duration-700 group-hover:opacity-[0.55]"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )}
        {/* Glow & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-60 z-0" />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)] z-0" />

        {/* Content */}
        <div className="relative z-20 max-w-md flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-background/60 backdrop-blur-md flex items-center justify-center mb-6 text-primary border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-white/30 transition-transform duration-500 group-hover:scale-110">
            {isRevealing ? (
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <Lock className="w-7 h-7" />
            )}
          </div>

          <h3 className="text-xl font-display font-bold text-text-primary mb-3">
            {title} durch Datenschutz blockiert
          </h3>
          <p className="text-sm text-text-secondary mb-8 leading-relaxed px-4">
            {description}
          </p>

          <div className="flex flex-col gap-4 w-full sm:w-10/12 mx-auto">
            <button
              onClick={handleGrantPermission}
              disabled={isRevealing}
              className="bg-primary text-white font-bold py-3.5 px-6 rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-[0_4px_14px_0_rgba(155,28,46,0.2)] hover:shadow-[0_6px_20px_rgba(155,28,46,0.25)] hover:-translate-y-0.5 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isRevealing
                  ? "Wird geladen..."
                  : "Inhalt laden & dauerhaft entsperren"}
              </span>
              {/* Hover shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            </button>

            {!hasConsented && (
              <button
                onClick={openBanner}
                disabled={isRevealing}
                className="text-xs font-medium text-text-secondary hover:text-primary transition-colors flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="w-3.5 h-3.5" /> Datenschutzeinstellungen
                öffnen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
