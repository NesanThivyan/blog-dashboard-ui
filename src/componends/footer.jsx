import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-2 text-center border-t border-gray-700 fixed bottom-0 left-0 w-full">
            <div>
                <Link to="/admin" className="text-blue-500 hover:underline mx-2">Admin</Link>
                <Link to="/login" className="text-blue-500 hover:underline mx-2">Login</Link>
            </div>
            <div className="text-gray-400 text-sm mt-2">
                <p>&copy; {new Date().getFullYear()} Blog Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;