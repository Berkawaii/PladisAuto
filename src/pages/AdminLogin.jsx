import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple mock login
        if (email === 'admin@pladis.com' && password === 'mercedes123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Hatalı giriş bilgileri!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass w-full max-w-md p-10 border border-glass-border relative z-10"
            >
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <ShieldAlert className="text-black" size={32} />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase">YÖNETİCİ GİRİŞİ</h1>
                    <p className="text-secondary text-sm">Pladis Auto Kontrol Paneli</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted flex items-center gap-2">
                            <Mail size={12} /> E-POSTA ADRESİ
                        </label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@pladis.com"
                            className="w-full bg-glass-bg border border-glass-border p-4 text-white focus:outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted flex items-center gap-2">
                            <Lock size={12} /> ŞİFRE
                        </label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-glass-bg border border-glass-border p-4 text-white focus:outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-white text-black font-extrabold text-sm tracking-[0.2em] uppercase hover:bg-chrome transition-all flex items-center justify-center gap-3 mt-4"
                    >
                        SİSTEME GİRİŞ YAP <ArrowRight size={18} />
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-[10px] text-muted uppercase tracking-widest font-bold">
                        Güvenli Oturum Yönetimi © 2024
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
