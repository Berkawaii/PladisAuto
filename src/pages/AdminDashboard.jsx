import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import {
    Users,
    Calendar,
    Settings,
    LogOut,
    CheckCircle2,
    Clock,
    XCircle,
    Car
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const { appointments, updateAppointmentStatus, deleteAppointment } = useData();
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Onaylandı': return 'text-blue-400 bg-blue-400/10';
            case 'Tamamlandı': return 'text-green-400 bg-green-400/10';
            case 'İptal Edildi': return 'text-red-400 bg-red-400/10';
            default: return 'text-yellow-400 bg-yellow-400/10';
        }
    };

    return (
        <div className="min-h-screen bg-primary flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 glass border-r border-glass-border p-6 flex flex-col justify-between">
                <div>
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gradient uppercase tracking-tighter">Pladis Admin</h2>
                    </div>
                    <nav className="space-y-4">
                        <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
                            <Calendar size={18} /> Randevular
                        </Link>
                        <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg text-secondary transition-colors cursor-not-allowed">
                            <Users size={18} /> Müşteriler
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg text-secondary transition-colors cursor-not-allowed">
                            <Settings size={18} /> Ayarlar
                        </button>
                    </nav>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/5 rounded-lg transition-colors mt-auto"
                >
                    <LogOut size={18} /> Çıkış Yap
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Randevu Yönetimi</h1>
                        <p className="text-secondary">Bekleyen ve onaylanan servis talepleri</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="glass px-6 py-3 border border-glass-border">
                            <p className="text-[10px] text-muted uppercase font-bold tracking-widest">TOPLAM</p>
                            <p className="text-2xl font-bold">{appointments.length}</p>
                        </div>
                        <div className="glass px-6 py-3 border border-glass-border">
                            <p className="text-[10px] text-muted uppercase font-bold tracking-widest">BEKLEYEN</p>
                            <p className="text-2xl font-bold text-yellow-400">
                                {appointments.filter(a => a.status === 'Beklemede').length}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Table/List */}
                <div className="space-y-4">
                    {appointments.map((app) => (
                        <motion.div
                            key={app.id}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass p-6 border border-glass-border flex flex-col lg:flex-row items-center justify-between gap-6 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center gap-6 w-full lg:w-auto">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mercedes-silver">
                                    <Car size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{app.name}</h3>
                                    <p className="text-sm text-secondary">{app.vehicle} • {app.phone}</p>
                                </div>
                            </div>

                            <div className="w-full lg:w-auto flex flex-col lg:items-end">
                                <p className="text-sm font-medium mb-1">{app.date}</p>
                                <p className="text-xs text-muted max-w-md line-clamp-1 italic">{app.notes}</p>
                            </div>

                            <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${getStatusColor(app.status)}`}>
                                    {app.status}
                                </span>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateAppointmentStatus(app.id, 'Onaylandı')}
                                        className="p-2 hover:bg-blue-400/10 rounded-full text-blue-400 transition-colors"
                                    >
                                        <CheckCircle2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => updateAppointmentStatus(app.id, 'Tamamlandı')}
                                        className="p-2 hover:bg-green-400/10 rounded-full text-green-400 transition-colors"
                                    >
                                        <Clock size={18} />
                                    </button>
                                    <button
                                        onClick={() => deleteAppointment(app.id)}
                                        className="p-2 hover:bg-red-400/10 rounded-full text-red-400 transition-colors"
                                    >
                                        <XCircle size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
