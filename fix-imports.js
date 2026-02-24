const fs = require('fs');
const path = require('path');

const componentMap = {
    // Shared
    'Accordion': '@/shared/components/Accordion',
    'AnimatedCounter': '@/shared/components/AnimatedCounter',
    'AnimatedSection': '@/shared/components/AnimatedSection',
    'AnimatedItem': '@/shared/components/AnimatedSection',
    'BackToTop': '@/shared/components/BackToTop',
    'Button': '@/shared/components/Button',
    'Container': '@/shared/components/Container',
    'CursorTrail': '@/shared/components/CursorTrail',
    'DarkModeToggle': '@/shared/components/DarkModeToggle',
    'HorizontalScroller': '@/shared/components/HorizontalScroller',
    'ImagePlaceholder': '@/shared/components/ImagePlaceholder',
    'KineticHeading': '@/shared/components/KineticHeading',
    'MagneticButton': '@/shared/components/MagneticButton',
    'ParticleCanvas': '@/shared/components/ParticleCanvas',
    'RadarChart': '@/shared/components/RadarChart',
    'ScrollProgress': '@/shared/components/ScrollProgress',
    'Section': '@/shared/components/Section',
    'SocialProofToast': '@/shared/components/SocialProofToast',
    'TextReveal': '@/shared/components/TextReveal',
    'Tooltip': '@/shared/components/Tooltip',

    // Features (including sections)
    'AboutSection': '@/features/about/components/AboutSection',
    'BeforeAfterSlider': '@/features/before-after/components/BeforeAfterSlider',
    'ContactForm': '@/features/contact-form/components/ContactForm',
    'CtaSection': '@/features/cta/components/CtaSection',
    'FaqSection': '@/features/faq/components/FaqSection',
    'Footer': '@/features/footer/components/Footer',
    'GalleryGrid': '@/features/gallery/components/GalleryGrid',
    'HeroSection': '@/features/hero/components/HeroSection',
    'HistorySection': '@/features/history/components/HistorySection',
    'Navbar': '@/features/navigation/components/Navbar',
    'ServiceTabs': '@/features/services/components/ServiceTabs',
    'ServicesSection': '@/features/services/components/ServicesSection',
    'StatsRing': '@/features/stats/components/StatsRing',
    'StatsSection': '@/features/stats/components/StatsSection',
    'TeamCard': '@/features/team/components/TeamCard',
    'TeamSection': '@/features/team/components/TeamSection',
    'TestimonialCarousel': '@/features/testimonials/components/TestimonialCarousel',
    'TestimonialsSection': '@/features/testimonials/components/TestimonialsSection',
    'Timeline': '@/features/timeline/components/Timeline',
    'ProofSection': '@/features/trust-signals/components/ProofSection',
};

const hookMap = {
    'useIsMobile': '@/shared/hooks/use-mobile',
    'useCursorTrail': '@/shared/hooks/useCursorTrail',
    'useParticlePhysics': '@/shared/hooks/useParticlePhysics',
    'useScrollProgress': '@/shared/hooks/scrollPhysics',
    'useAmbientWarmth': '@/shared/hooks/scrollPhysics',
};

const libMap = {
    'animations': '@/shared/styles/animations',
    'performance': '@/shared/utils/performance',
    'rewards': '@/shared/utils/rewards',
    'scrollPhysics': '@/shared/hooks/scrollPhysics',
    'utils': '@/shared/utils/utils',
    'data': '@/config/data',
};

// Also account for direct file imports like '@/components/Button' or '@/components/layout/Container'
// or '@/components/sections/HeroSection'

const regexImports = [
    // 1. Destructured imports from @/components: import { Button, TextReveal } from '@/components' (if any exist, wait, mostly they imported directly)
    // Actually, let's just do a regex replace for any import from '@/components/XXX'
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Replace components
    for (const [name, newPath] of Object.entries(componentMap)) {
        // Handle default imports: import Button from '@/components/Button'
        let re1 = new RegExp(`from ['"\`]((@/components/|@/components/layout/|@/components/sections/|\\.\\./\\.\\./components/|\\.\\./components/)${name}(\\.tsx)?)['"\`]`, 'g');
        content = content.replace(re1, `from '${newPath}'`);

        // Handle destructured imports: import { AnimatedItem } from '@/components/AnimatedSection' -> mapped to same file
        let re2 = new RegExp(`from ['"\`]((@/components/|@/components/layout/|@/components/sections/|\\.\\./\\.\\./components/|\\.\\./components/)[a-zA-Z0-9_-]+)['"\`]`, 'g');
        content = content.replace(re2, (match, oldPath) => {
            const basename = oldPath.split('/').pop();
            if (componentMap[basename]) {
                return `from '${componentMap[basename]}'`;
            }
            return match;
        });
    }

    // 2. Replace hooks
    for (const [name, newPath] of Object.entries(hookMap)) {
        let re = new RegExp(`from ['"\`]((@/hooks/|\\.\\./\\.\\./hooks/|\\.\\./hooks/)[a-zA-Z0-9_-]+)['"\`]`, 'g');
        content = content.replace(re, (match, oldPath) => {
            const basename = oldPath.split('/').pop();
            // Since some hooks share files, let's just map the file basename
            // Wait, useIsMobile is from use-mobile.
            let mapping = {
                'use-mobile': '@/shared/hooks/use-mobile',
                'useCursorTrail': '@/shared/hooks/useCursorTrail',
                'useParticlePhysics': '@/shared/hooks/useParticlePhysics',
                'scrollPhysics': '@/shared/hooks/scrollPhysics'
            };
            if (mapping[basename]) return `from '${mapping[basename]}'`;
            return match;
        });
    }

    // 3. Replace libs
    for (const [name, newPath] of Object.entries(libMap)) {
        let re = new RegExp(`from ['"\`]((@/lib/|\\.\\./\\.\\./lib/|\\.\\./lib/)${name})['"\`]`, 'g');
        content = content.replace(re, `from '${newPath}'`);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

const dirsToScan = ['app', 'features', 'shared', 'config'];
dirsToScan.forEach(dir => {
    const fullDir = path.join(__dirname, dir);
    if (!fs.existsSync(fullDir)) return;

    const files = fs.readdirSync(fullDir, { recursive: true });
    files.forEach(file => {
        if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            processFile(path.join(fullDir, file));
        }
    });
});
console.log('Done mapping imports.');
