import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
      <div className="flex justify-center">  <progress className="w-56 progress"></progress></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoutes;