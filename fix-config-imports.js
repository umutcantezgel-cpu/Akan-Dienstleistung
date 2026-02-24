const fs = require('fs');
const path = require('path');

const configMap = {
    'navLinks': '@/config/navigation',
    'NavLink': '@/config/navigation',
    'services': '@/config/services',
    'Service': '@/config/services',
    'testimonials': '@/config/site',
    'Testimonial': '@/config/site',
    'team': '@/config/site',
    'TeamMember': '@/config/site',
    'faqs': '@/config/site',
    'FAQ': '@/config/site',
    'stats': '@/config/site',
    'Stat': '@/config/site',
    'regions': '@/config/site',
    'Region': '@/config/site',
    'companyInfo': '@/config/site',
    'timeline': '@/config/site',
    'TimelineEvent': '@/config/site',
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We want to replace standard imports:
    // import { services } from '@/config/data';
    // Let's grab all imports from '@/config/data'
    // and split them into multiple lines depending on their destination.
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"`](@\/config\/data|@\/lib\/data|.*\.\.\/?lib\/data|.*\.\.\/?config\/data)['"`];?/g;

    content = content.replace(importRegex, (match, importsStr) => {
        const imports = importsStr.split(',').map(i => i.trim()).filter(i => i);

        let groups = {
            '@/config/navigation': [],
            '@/config/services': [],
            '@/config/site': []
        };

        imports.forEach(imp => {
            // handle "import type { Name }" or "import { type Name }"
            let cleanlyM = imp.replace('type ', '').trim();
            let dest = configMap[cleanlyM] || '@/config/site';
            groups[dest].push(imp);
        });

        let result = '';
        for (const [dest, imps] of Object.entries(groups)) {
            if (imps.length > 0) {
                result += `import { ${imps.join(', ')} } from '${dest}';\n`;
            }
        }
        return result.trim();
    });

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
console.log('Done mapping config imports.');
