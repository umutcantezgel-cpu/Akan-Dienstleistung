import { create } from 'zustand';

interface AppState {
    isDarkMode: boolean;
    initializeDarkMode: () => void;
    toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({

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
