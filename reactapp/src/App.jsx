import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NavbarComp from "./components/NavbarComp"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import UserProfile from "./components/UserProfile"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import ProtectedRoute from "./ProtectRouting/ProtectedRoute"
import DashboardPage from "./ProtectRouting/DashboardPage"
import LoginPage from "./ProtectRouting/LoginPage"
const App = () => {

  return (
    <>
        <Router>
          <NavbarComp/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="profile" element={<Profile/>}/>
              <Route path="settings" element={<Settings/>}/>
            </Route>
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/users/:userID" element={<UserProfile/>}/>
            <Route path="/dashboardpage" element={<ProtectedRoute>
              <DashboardPage/>
            </ProtectedRoute>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App