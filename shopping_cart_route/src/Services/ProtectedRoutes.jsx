import { Navigate, Outlet } from "react-router-dom"
const ProtectedRoutes = () => {
    const auth = localStorage.getItem("LoggedIn");
  return auth ? <Outlet /> : <Navigate to = {"/login"} />;
};

export default ProtectedRoutes;
