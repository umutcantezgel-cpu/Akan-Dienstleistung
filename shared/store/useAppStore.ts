import { create } from 'zustand';

interface AppState {
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
    toggleMobileMenu: () => void;

    isDarkMode: boolean;
    initializeDarkMode: () => void;
    toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

    isDarkMode: false,
    initializeDarkMode: () => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('akan-dark-mode');
            if (stored === 'true') {
                document.documentElement.classList.add('dark');
                set({ isDarkMode: true });
            } else {
                document.documentElement.classList.remove('dark');
                set({ isDarkMode: false });
            }
        }
    },
    toggleDarkMode: () => {
        const next = !get().isDarkMode;
        if (next) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('akan-dark-mode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('akan-dark-mode', 'false');
        }
        set({ isDarkMode: next });
    }
}));
