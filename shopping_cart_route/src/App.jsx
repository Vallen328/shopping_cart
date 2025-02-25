import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useAuth0 } from "@auth0/auth0-react";

import ProtectedRoutes from "./Services/ProtectedRoutes";
const App = () => {
  const { user, loginWithRedirect } = useAuth0();

  console.log("Current user", user)
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path = "/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;