// import { useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function PrivateRoute({component, redirectTo}){
    const  [isLoggedIn] = useState(false);
    const [isRefreshing] = useState(false);
    // const  isLoggedIn = useSelector(selectIsLoggedIn);
    // const isRefreshing = useSelector(selectIsRefreshing);
        if (isRefreshing) {
            return <p>Loading...</p>
        }
    return isLoggedIn ? component : <Navigate to={redirectTo}/>;
}