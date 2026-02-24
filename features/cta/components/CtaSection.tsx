import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import ParticleCanvas from '@/shared/components/ParticleCanvas';
import KineticHeading from '@/shared/components/KineticHeading';
import AnimatedSection from '@/shared/components/AnimatedSection';
import { scaleIn } from '@/shared/styles/animations';

export default function CtaSection() {
    return (
        <section className="relative py-section-lg bg-primary overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ParticleCanvas
                    particleCount={40}
                    colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)', 'rgba(232,93,117,0.5)']}
                    speed={0.15}
                    maxRadius={2}
                    connectDistance={60}
                    mouseRepel={false}
                />
            </div>
            <AnimatedSection className="max-w-4xl mx-auto px-6 text-center relative z-10" variants={scaleIn}>
                <KineticHeading as="h2" className="text-h2 font-bold text-white mb-8 leading-[1.1]">
                    Lassen Sie uns gemeinsam herausfinden, wie Ihr Gebäude strahlen kann.
                </KineticHeading>
                <p className="text-large font-light text-white/90 mb-12 max-w-2xl mx-auto leading-[1.8]">
                    Kostenlos. Unverbindlich. Persönlich. Ein Anruf genügt – und wir erstellen Ihnen ein maßgeschneidertes Reinigungskonzept, das sich rechnet.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                        <Link href="/contact" className="bg-white hover:bg-surface text-primary tracking-wide text-base font-bold py-5 px-10 rounded-xl shadow-elevated transition-colors font-display inline-flex items-center justify-center w-full sm:w-auto">
                            Kostenloses Angebot anfordern
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                        <a href="tel:+4915234754386" className="bg-transparent border border-white/40 hover:bg-white/10 text-white tracking-wide text-base font-bold py-5 px-10 rounded-xl transition-all font-display flex items-center justify-center w-full sm:w-auto">
                            <Phone className="w-5 h-5 mr-3" />
                            0152 34754386
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="https://wa.me/4915234754386?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Reinigung."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#20BD5A] text-white tracking-wide text-base font-bold py-5 px-10 rounded-xl transition-all font-display flex items-center justify-center w-full sm:w-auto"
                        >
                            <MessageCircle className="w-5 h-5 mr-3" />
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}
