import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Settings,
    Shield,
    Droplets,
    Activity,
    ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const serviceList = [
        {
            title: "Periyodik Bakım",
            icon: <Droplets className="w-8 h-8" />,
            desc: "Mercedes-Benz standartlarında yağ, filtre ve genel kontrol hizmetleri.",
            category: "BAKIM"
        },
        {
            title: "Mekanik Onarım",
            icon: <Settings className="w-8 h-8" />,
            desc: "Motor, şanzıman ve yürüyen aksamda meydana gelen tüm arızaların uzman onarımı.",
            category: "TAMİR"
        },
        {
            title: "Bilgisayarlı Diyagnoz",
            icon: <Zap className="w-8 h-8" />,
            desc: "En güncel Mercedes yazılımları ile hata tespiti ve sistem programlama.",
            category: "YAZILIM"
        },
        {
            title: "Elektrik & Elektronik",
            icon: <Zap className="w-8 h-8" />,
            desc: "Karmaşık elektronik sistemler ve tesisat arızalarının profesyonel çözümü.",
            category: "SİSTEM"
        },
        {
            title: "Fren & Güvenlik",
            icon: <Shield className="w-8 h-8" />,
            desc: "Aracınızın duruş mesafesini ve güvenliğini sağlayan tüm sistemlerin bakımı.",
            category: "GÜVENLİK"
        },
        {
            title: "Performans & Tuning",
            icon: <Activity className="w-8 h-8" />,
            desc: "Aracınızın gücünü ve estetiğini artıracak profesyonel dokunuşlar.",
            category: "GÜÇ"
        }
    ];

    return (
        <div className="pt-40 pb-24 bg-deep min-h-screen">
            <div className="container">
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[1px] bg-white opacity-20"></span>
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-silver/60">HİZMETLERİMİZ</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
                        Mercedes'iniz İçin <br />
                        <span className="premium-title">Kusursuz Çözümler.</span>
                    </h1>
                    <p className="max-w-2xl text-silver/50 font-light leading-relaxed text-lg">
                        Sadece bir servis değil, bir mühendislik ortağıyız. Aracınızın performansını ve ömrünü uzatmak için en ileri teknolojileri kullanıyoruz.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceList.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="glass-panel p-12 group flex flex-col justify-between h-[450px]"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-700">
                                        {service.icon}
                                    </div>
                                    <span className="text-[9px] font-black tracking-widest text-silver/30 border border-white/10 px-3 py-1 rounded-full uppercase">
                                        {service.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-silver/50 text-sm leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                            </div>
                            <Link
                                to="/randevu"
                                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:gap-4 transition-all text-white/50 hover:text-white"
                            >
                                RANDEVU TALEBİ <ArrowUpRight size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Support Banner */}
                <section className="mt-32 glass-panel p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-haze opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ücretsiz Ön Muayene.</h2>
                            <p className="text-silver/60 max-w-md font-light">Aracınızdaki sorunu tespit etmek için ileri düzey diyagnoz sistemlerimizi ücretsiz sunuyoruz.</p>
                        </div>
                        <Link to="/randevu" className="btn-premium btn-primary">
                            ŞİMDİ RANDEVU AL
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
