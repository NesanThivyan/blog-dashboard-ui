import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-gray-800 text-white px-7 py-4 flex justify-between items-center w-full fixed top-0 left-0 z-50">
            <div className="text-lg font-bold">Blog Dashboard</div>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
                >
                    <span>User</span>
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                        <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">
                           <Link to="/login">Log in</Link>
                        </a>
                       
                        <a href="#settings" className="block px-4 py-2 hover:bg-gray-100">
                           <Link to="/profile">Admin</Link>
                        </a>
                      
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;