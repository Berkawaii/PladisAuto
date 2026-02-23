import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/mercedes_hero.png"
                        alt="Mercedes Excellence"
                        className="w-full h-full object-cover grayscale-[0.2]"
                    />
                </motion.div>
                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent md:block hidden" />
            </div>

            {/* Hero Content */}
            <div className="container relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-white opacity-40"></span>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-silver">
                                PLADIS AUTO | MERCEDES-BENZ SPECIALISTS
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-9xl mb-8 leading-[0.9] uppercase">
                            Mükemmellik <br />
                            <span className="premium-title">Kalıcıdır.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-silver opacity-80 mb-12 max-w-xl font-light leading-relaxed">
                            Teknoloji ve ustalığın zirvesinde, Mercedes'inizin ruhunu korumak için tasarlanmış üst düzey servis deneyimi.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link to="/randevu" className="btn-premium btn-primary group">
                                RANDEVU OLUŞTUR
                                <ArrowUpRight size={18} className="translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                            <Link to="/hizmetler" className="btn-premium btn-outline">
                                HİZMETLERİMİZ
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Scroll Reveal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 select-none"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Kaydır</span>
            </motion.div>
        </section>
    );
};

export default Hero;
