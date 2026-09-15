import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ConsentPreferences {
    essential: boolean; // Always true, cannot be disabled
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

interface ConsentState {
    hasConsented: boolean; // True if user made a choice
    preferences: ConsentPreferences;
    isBannerOpen: boolean;

    // Actions
    acceptAll: () => void;
    acceptNecessary: () => void;
    savePreferences: (prefs: Partial<ConsentPreferences>) => void;
    openBanner: () => void;
    closeBanner: () => void;
    revokeConsent: () => void; // Unsets everything
}

const defaultPreferences: ConsentPreferences = {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
};

export const useConsentStore = create<ConsentState>()(
    persist(
        (set, get) => ({
            hasConsented: false,
            preferences: { ...defaultPreferences },
            isBannerOpen: false, // Don't show by default until hydration check

            acceptAll: () => {
                set({
                    hasConsented: true,
                    preferences: {
                        essential: true,
                        analytics: true,
                        marketing: true,
                        functional: true,
                    },
                    isBannerOpen: false,
                });
            },

            acceptNecessary: () => {
                const currentPrefs = get().preferences;
                set({
                    hasConsented: true,
                    preferences: {
                        ...defaultPreferences, // Resets everything to false except essential
                    },
                    isBannerOpen: false,
                });

                // Trigger auto-deletion of cookies here if necessary
                if (currentPrefs.analytics || currentPrefs.marketing || currentPrefs.functional) {
                    // TODO: implement cookie wiping logic
                }
            },

            savePreferences: (newPrefs) => {
                set((state) => ({
                    hasConsented: true,
                    preferences: {
                        ...state.preferences,
                        ...newPrefs,
                        essential: true, // Safety override
                    },
                    isBannerOpen: false,
                }));
            },

            openBanner: () => set({ isBannerOpen: true }),

            closeBanner: () => set({ isBannerOpen: false }),

            revokeConsent: () => {
                set({
                    hasConsented: false,
                    preferences: { ...defaultPreferences },
                    isBannerOpen: true, // Prompt again
                });
                // wipe cookies
                // wipeCookies();
            },
        }),
        {
            name: 'akan-privacy-consent',
            storage: createJSONStorage(() => localStorage),
            skipHydration: true, // We will manually hydrate to avoid SSR mismatches
        }
    )
);
