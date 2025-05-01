function Addblog() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-800 text-white h-screen p-4 pt-20 hidden lg:block">
                    <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Users</a></li>
                    </ul>
                </div>

                {/* Add Blog Form */}
                <div className="p-6 bg-gray-100 w-full lg:mt-6 lg:pt-14">
                    <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                placeholder="Enter blog title"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Content</label>
                            <textarea
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                rows="5"
                                placeholder="Enter blog content"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Author</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                placeholder="Enter author name"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Addblog;