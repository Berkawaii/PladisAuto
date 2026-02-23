import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Hizmetler', path: '/hizmetler' },
        { name: 'Randevu', path: '/randevu' },
        { name: 'İletişim', path: '/iletisim' },
    ];

    const isAdmin = location.pathname.startsWith('/admin');
    if (isAdmin) return null;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                ? 'py-4 bg-black/60 backdrop-blur-3xl border-b border-white/5'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
                        <img src="/pladis_logo.png" alt="Pladis Auto Logo" className="w-full h-full object-cover scale-110" />
                        <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-[-0.05em] leading-none uppercase">PLADIS</span>
                        <span className="text-[8px] font-bold tracking-[0.5em] text-silver mt-1 pl-px opacity-60">AUTO EXCELLENCE</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-silver/60'
                                } relative group`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-white transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </Link>
                    ))}
                </div>

                {/* Action Section */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link
                        to="/admin/login"
                        className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-silver hover:text-white"
                    >
                        <User size={16} />
                    </Link>
                    <Link
                        to="/randevu"
                        className="btn-premium btn-primary !py-3 !px-6"
                    >
                        SİZE ÖZEL
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Modern Full-Screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[90] flex flex-col items-center justify-center gap-10 lg:hidden"
                    >
                        {navLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                            >
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-extrabold uppercase tracking-tighter hover:text-silver transition-all"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 pt-8 border-t border-white/10 w-48 text-center"
                        >
                            <Link
                                to="/admin/login"
                                onClick={() => setIsOpen(false)}
                                className="text-xs uppercase tracking-widest text-silver"
                            >
                                Yönetici Girişi
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
