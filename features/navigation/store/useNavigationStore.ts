import { create } from 'zustand';

interface NavigationState {
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
    toggleMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
