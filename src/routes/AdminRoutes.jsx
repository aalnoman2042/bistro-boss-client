
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/USeAuth";
import useAdmin from "../hooks/UseAdmin";


const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] =useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
      <div className="flex justify-center">  <progress className="w-56 progress"></progress></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from: location}} replace ></Navigate>
};

export default AdminRoutes;