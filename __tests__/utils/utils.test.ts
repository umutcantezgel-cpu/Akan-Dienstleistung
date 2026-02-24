import { describe, it, expect } from 'vitest';
import { cn } from '@/shared/utils/utils';

describe('Utility Functions - cn (tailwind-merge)', () => {
    it('should correctly merge standard tailwind classes', () => {
        expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
    });

    it('should correctly resolve conflicting tailwind classes', () => {
        // text-black should override text-white
        expect(cn('text-white', 'text-black')).toBe('text-black');
    });

    it('should handle conditional class strings correctly', () => {
        const isActive = true;
        const isHovered = false;

        expect(cn('base-class', isActive && 'active-class', isHovered && 'hover-class'))
            .toBe('base-class active-class');
    });

    it('should merge array class definitions', () => {
        expect(cn(['class-1', 'class-2'], 'class-3')).toBe('class-1 class-2 class-3');
    });

    it('should handle undefined or null gracefull', () => {
        expect(cn('class-1', undefined, null, false, 'class-2')).toBe('class-1 class-2');
    });
});
