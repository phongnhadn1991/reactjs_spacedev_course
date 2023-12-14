import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../stores/context/AuthContext";


export const PrivateRouter = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to={"/login"} />
}