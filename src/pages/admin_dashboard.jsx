import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/add-blog');
    };

    return (
        <div className="p-5 font-sans pt-20">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <button 
                onClick={handleCreate} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
                Create
            </button>
        </div>
    );
};

export default AdminDashboard;