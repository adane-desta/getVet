import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";


function ProtectedRoute({children , role}) {

    const {isAuthenticated , user} = useAuth()

    if(!isAuthenticated){
        return <Navigate to = '/login' />
    }

    if(user.role !== role ){
        return <Navigate to = '/' />
    }

    return children
    
}

export default ProtectedRoute