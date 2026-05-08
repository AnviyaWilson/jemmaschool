import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './componants/Home'
import ContactUs from './componants/ContactUs'
import AboutUs from './componants/AboutUs'
import Register from './componants/Register'
import Courses from './componants/Courses'
import AdminLogin from './componants/AdminLogin'
import UserLogin from './componants/UserLogin'
import LoginSelector from './componants/LoginSelector'
import AdminDashboard from './componants/AdminDashboard'
import UserDashboard from './componants/UserDashboard'
import Members from './componants/Members'
import Signup from './componants/SignUp'
import { Routes, Route } from 'react-router-dom'
import LayoutHome from './layout/LayoutHome'
import LayoutAdmin from './layout/LayoutAdmin'
import LayoutUser from './layout/LayoutUser'
import Courses1 from './componants/Courses1'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <div className="background-container"></div>

  <div
    className="app-container"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <main style={{ flex: 1 }}>

      {/* ✅ MOVE Routes INSIDE here */}
      <Routes>
        {/* Public Layout */}
        <Route element={<LayoutHome />}>
          <Route path="/" element={<ContactUs />} />
          <Route path="/h" element={<Home />} />
          <Route path="/a" element={<AboutUs />} />
          <Route path="/r" element={<Register />} />
          <Route path="/c" element={<Courses />} />
          <Route path="/s" element={<Signup />} />
          <Route path="/login-select" element={<LoginSelector />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/user" element={<UserLogin />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/c" element={<Courses1 />} />
          <Route path="h" element={<Home />} />
          <Route path="/admin/" element={<ContactUs />} />
          <Route path="a" element={<AboutUs />} />
          <Route path="/admin/r" element={<Members />} />
        </Route>

        {/* User Layout */}
        <Route path="/user" element={<LayoutUser />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/c" element={<Courses />} />
          <Route path="h" element={<Home />} />
          <Route path="/user/" element={<ContactUs />} />
          <Route path="/user/a" element={<AboutUs />} />
          <Route path="/user/r" element={<Register />} />
        </Route>
      </Routes>

    </main>

    {/* Footer */}
    <div
      className="footer"
      style={{
        backgroundColor: "#f1f1f1",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <footer>
        <p>
          &copy; {new Date().getFullYear()} St. Jemma's School. All rights
          reserved.
        </p>
      </footer>
    </div>
  </div>
</>
 )
}
export default App;
