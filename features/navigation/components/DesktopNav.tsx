'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { navLinks } from '../config/navLinks';
import MegaMenu from './MegaMenu';
import Magnetic from '@/shared/components/Magnetic';

export default function DesktopNav() {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const activeLinkConfig = navLinks.find(l => l.href === hoveredMenu);
    const hasDropdown = !!activeLinkConfig?.children;

    return (
        <nav aria-label="Hauptnavigation" className="hidden xl:flex h-full items-center relative" onMouseLeave={() => setHoveredMenu(null)}>
            <div className="flex space-x-4 xl:space-x-8 h-full items-center">
                {navLinks.map((link) => {
                    const isDropdown = !!link.children;

                    return (
                        <div
                            key={link.href}
                            className="h-full flex items-center px-2"
                            onMouseEnter={() => setHoveredMenu(link.href)}
                        >
                            <Magnetic intensity={0.12}>
                                <Link
                                    href={link.href}
                                    prefetch={link.href === '/contact' || link.href.startsWith('/leistungen') ? true : null}
                                    aria-haspopup={isDropdown ? "true" : "false"}
                                    aria-expanded={hoveredMenu === link.href ? "true" : "false"}
                                    className="relative text-[13px] uppercase tracking-[0.1em] text-text-secondary hover:text-text-primary font-semibold transition-all duration-300 py-2 pt-[10px] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-md group"
                                >
                                    {link.label}
                                    {isDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === link.href ? 'rotate-180 text-primary' : ''}`}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ease-out origin-left ${hoveredMenu === link.href ? 'w-full scale-x-100' : 'w-full scale-x-0'}`} />
                                </Link>
                            </Magnetic>
                        </div>
                    );
                })}
            </div>

            {/* Kinetic Morphing Mega Menu Integration (HE-04) */}
            <MegaMenu
                isOpen={hasDropdown}
                activeHref={hoveredMenu}
                items={activeLinkConfig?.children || []}
                type={activeLinkConfig?.href === '/leistungen' ? 'leistungen' : 'standorte'}
                onClose={() => setHoveredMenu(null)}
            />
        </nav>
    );
}
