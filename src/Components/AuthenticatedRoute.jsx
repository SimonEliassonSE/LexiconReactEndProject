import React from "react";
import { useContext } from "react";
import { Route,Navigate  } from "react-router-dom";
import Auth from "../Context/Auth";



const AuthenticatedRoute = ({path, component}) => {
    const {isAuthenticated} = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Navigate to="/Login" />
    )
}


    export default AuthenticatedRoute;
