import React, { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "Understanding React",
        content: "React is a JavaScript library for building user interfaces...",
        author: "John Doe",
        date: "2023-10-01",
    },
    {
        id: 2,
        title: "Getting Started with Tailwind CSS",
        content: "Tailwind CSS is a utility-first CSS framework...",
        author: "Jane Smith",
        date: "2023-09-25",
    },
    {
        id: 3,
        title: "JavaScript ES6 Features",
        content: "ES6 introduced many new features to JavaScript...",
        author: "Alice Johnson",
        date: "2023-09-15",
    },
    {
        id: 4,
        title: "Building REST APIs with Node.js",
        content: "Node.js is a runtime environment for executing JavaScript...",
        author: "Bob Brown",
        date: "2023-09-10",
    },
    {
        id: 5,
        title: "CSS Grid vs Flexbox",
        content: "CSS Grid and Flexbox are two powerful layout systems...",
        author: "Charlie White",
        date: "2023-09-05",
    },
];

const UserDashboard = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-center text-3xl font-bold py-6">Blog Dashboard</h1>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
                {/* Main Blog Section */}
                <main className="col-span-12 lg:col-span-9">
                    <h2 className="text-2xl font-semibold mb-6">Latest Blogs</h2>
                    <div className="space-y-6">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white shadow-md rounded-lg p-6 border"
                            >
                                <h3 className="text-xl font-bold">{blog.title}</h3>
                                <p className="text-sm text-gray-500">
                                    By {blog.author} on {blog.date}
                                </p>
                                <p className="mt-4 text-gray-700">
                                    {blog.content.substring(0, 100)}...
                                </p>
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-3">
                <div className=" bg-gray-800 text-white h-screen p-4 pt-20 hidden lg:block">
                    <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Users</a></li>
                    </ul>
                </div>
                    <div className="bg-white shadow-md rounded-lg p-6 border">
                        <h3 className="text-lg font-semibold mb-4">Search</h3>
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
        
            </div>
            </div>
        </div>
    );
};

export default UserDashboard;