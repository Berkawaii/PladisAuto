import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    Car,
    Phone,
    User,
    Send,
    ArrowRight,
    CheckCircle,
    Clock
} from 'lucide-react';

const AppointmentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-16 text-center max-w-3xl mx-auto border border-white/10"
            >
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10">
                    <CheckCircle size={40} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6 italic uppercase tracking-tighter">İşlem Tamamlandı.</h2>
                <p className="text-silver/60 mb-12 font-light leading-relaxed max-w-md mx-auto">
                    Talebiniz uzman ekibimize ulaştı. Mercedes'inizin ihtiyacı olan özeni planlamak için en kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-premium btn-outline"
                >
                    YENİ TALEP OLUŞTUR
                </button>
            </motion.div>
        );
    }

    return (
        <section className="py-24 max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
                <div className="inline-block py-1 px-4 mb-6 rounded-full border border-white/5 glass text-[9px] font-black uppercase tracking-[0.4em] text-silver/60">
                    VIP SERVİS PLANI
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">
                    Size Özel <span className="premium-title">Hizmet.</span>
                </h2>
                <p className="text-silver/50 max-w-xl mx-auto font-light leading-relaxed italic">
                    Aracınızın gerçek gücünü ve güvenliğini uzman ellere emanet edin.
                </p>
            </div>

            <div className="glass-panel p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-haze rounded-full blur-[150px] opacity-10 pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        {/* Ad Soyad */}
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/40 flex items-center gap-3">
                                <User size={12} className="opacity-50" /> AD VE SOYAD
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Örn. Berkay Acar"
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors text-lg font-light"
                            />
                        </div>

                        {/* Telefon */}
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/40 flex items-center gap-3">
                                <Phone size={12} className="opacity-50" /> İLETİŞİM NUMARASI
                            </label>
                            <input
                                required
                                type="tel"
                                placeholder="05-- --- -- --"
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors text-lg font-light"
                            />
                        </div>

                        {/* Model */}
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/40 flex items-center gap-3">
                                <Car size={12} className="opacity-50" /> ARAÇ MODELİ VE YILI
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Örn. 2023 Mercedes-Benz S 580"
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors text-lg font-light"
                            />
                        </div>

                        {/* Tarih */}
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/40 flex items-center gap-3">
                                <Calendar size={12} className="opacity-50" /> TERCİH EDİLEN TARİH
                            </label>
                            <input
                                required
                                type="date"
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors text-lg font-light [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    {/* Notlar */}
                    <div className="space-y-4 pt-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/40">TALEBİNİZİN DETAYLARI</label>
                        <textarea
                            rows="4"
                            placeholder="Aracınızdaki sorunu veya beklediğiniz hizmeti kısaca betimleyin..."
                            className="w-full bg-white/5 border border-white/5 p-8 text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-colors resize-none text-lg font-light rounded-2xl"
                        ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3 text-silver/40 text-[10px] font-bold uppercase tracking-widest">
                            <Clock size={14} /> Tahmini Geri Dönüş: 15 Dakika
                        </div>
                        <button
                            type="submit"
                            className="btn-premium btn-primary !px-16 !py-6 w-full md:w-auto text-center"
                        >
                            RANDEVUYU ONAYLA <ArrowRight size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AppointmentForm;
