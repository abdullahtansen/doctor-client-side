import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/Dashboard/MyProfile/MyProfile";
import MakeAdmin from "./Pages/Dashboard/Dashboard/MakeAdmin/MakeAdmin";
import DashBoardHome from "./Pages/Dashboard/Dashboard/DashBoardHome/DashBoardHome";
import AddDoctor from "./Pages/Dashboard/Dashboard/AddDoctor/AddDoctor";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
       <Route index element={<MyProfile />} /> 
           <Route path="makeAdmin" element={<MakeAdmin />} />
           <Route path="dashboardHome" element={<DashBoardHome />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          {/*<Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          /> */}
        </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
