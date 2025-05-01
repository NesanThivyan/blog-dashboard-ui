import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
import Navbar from './componends/navbar'
import Login from './pages/login'
import AdminDashboard from './pages/admin_dashboard'
import UserDashboard from './pages/user_dashboard'
import AddBlogForm from './pages/addblog'
import Footer from './componends/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/add-blog" element={<AddBlogForm />} />
        </Routes>
    
      <Footer />
    </>
  )
}

export default App
