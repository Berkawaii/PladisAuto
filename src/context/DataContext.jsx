import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([
        { id: 1, name: "Ali Yılmaz", vehicle: "Mercedes-Benz G-Class", phone: "0532 123 45 67", date: "2024-03-25", notes: "Periyodik bakım ve fren kontrolü.", status: "Beklemede" },
        { id: 2, name: "Zeynep Kaya", vehicle: "Mercedes-AMG GT", phone: "0544 987 65 43", date: "2024-03-26", notes: "Yazılım güncelleme ve performans testi.", status: "Onaylandı" },
        { id: 3, name: "Murat Demir", vehicle: "Mercedes-Benz C-Class", phone: "0505 555 44 33", date: "2024-03-27", notes: "Klima arızası tespiti.", status: "Tamamlandı" },
    ]);

    const addAppointment = (newApp) => {
        setAppointments([...appointments, { ...newApp, id: appointments.length + 1, status: "Beklemede" }]);
    };

    const updateAppointmentStatus = (id, newStatus) => {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status: newStatus } : app));
    };

    const deleteAppointment = (id) => {
        setAppointments(appointments.filter(app => app.id !== id));
    };

    return (
        <DataContext.Provider value={{ appointments, addAppointment, updateAppointmentStatus, deleteAppointment }}>
            {children}
        </DataContext.Provider>
    );
};
