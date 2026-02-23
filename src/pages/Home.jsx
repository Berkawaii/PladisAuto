import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { PenTool as Tool, ShieldCheck, Gauge, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: <Tool className="w-8 h-8" />,
            title: "Uzman Mühendislik",
            desc: "Mercedes-Benz sertifikalı ekip ile her adımda milimetrik hassasiyet."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Orijinal Kalite",
            desc: "Sadece orijinal parçalar kullanarak aracınızın değerini koruyoruz."
        },
        {
            icon: <Gauge className="w-8 h-8" />,
            title: "Performans Analizi",
            desc: "En güncel diagnostik sistemlerle güç ve verimlilik optimizasyonu."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Vip Zaman Yönetimi",
            desc: "Hızlı servis ve konforlu lounge alanı ile zamanınıza değer veriyoruz."
        }
    ];

    return (
        <main className="bg-deep">
            <Hero />

            {/* Dynamic Features Section */}
            <section className="section-padding relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-haze rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />

                <div className="container">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl mb-6">
                            Neden <span className="premium-title">Pladis Auto?</span>
                        </h2>
                        <p className="max-w-xl text-silver opacity-60 font-light">
                            Standartların ötesinde bir servis deneyimi için her detayda mükemmelliği arıyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="glass-panel p-10 flex flex-col group h-full"
                            >
                                <div className="text-white mb-10 group-hover:scale-110 transition-transform origin-left duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight drop-shadow-md">
                                    {feature.title}
                                </h3>
                                <p className="text-silver/60 text-sm leading-relaxed font-light mb-8">
                                    {feature.desc}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                    Detayları Gör <ChevronRight size={12} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cinematic Showcase Section */}
            <section className="section-padding bg-dark border-y border-glass-border">
                <div className="container grid md:grid-cols-2 lg:grid-cols-5 gap-16 items-center">
                    <div className="lg:col-span-3 h-[600px] relative overflow-hidden glass-panel p-1 group">
                        <img
                            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1400"
                            alt="Luxury Workshop"
                            className="luxury-image w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-10 left-10 z-10">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 block text-white/60">EST. 2024</span>
                            <h4 className="text-3xl font-bold">ZİRVEYE ODAKLI.</h4>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-silver/40 mb-6 block">HAKKIMIZDA</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Sıradan Değil, <br />
                            <span className="premium-title">Eşsiz Bir Vizyon.</span>
                        </h2>
                        <div className="space-y-6 text-silver/70 font-light leading-relaxed mb-12">
                            <p>
                                Pladis Auto olarak bizler, otomobil servisinden daha fazlasını sunuyoruz. Bir Mercedes'in taşıdığı o eşsiz mühendislik mirasına saygı duyuyor ve bu mirası her gün daha ileriye taşıyoruz.
                            </p>
                            <p className="border-l border-glass-border pl-6 italic font-medium text-white/80 text-sm">
                                "Aracınız bizim için sadece bir makine değil, korunması gereken bir sanat eseridir."
                            </p>
                        </div>

                        <div className="flex gap-12 border-t border-glass-border pt-12">
                            <div>
                                <div className="text-4xl font-bold mb-2">15<span className="text-silver/30">+</span></div>
                                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-silver/60">Yıllık Ustalık</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">5K<span className="text-silver/30">+</span></div>
                                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-silver/60">Memnun Sürücü</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding text-center">
                <div className="container">
                    <div className="max-w-2xl mx-auto glass-panel p-20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-haze opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                            Mükemmelliği Deneyimlemeye <br />
                            <span className="premium-title">Hazır Mısınız?</span>
                        </h2>
                        <p className="text-silver/60 mb-12 font-light">
                            Aracınızın gerçek gücünü keşfedin ve güvenli ellerde olduğunuzdan emin olun.
                        </p>
                        <Link to="/randevu" className="btn-premium btn-primary group">
                            RANDEVU OLUŞTUR
                            <ChevronRight size={18} className="translate-y-px transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
