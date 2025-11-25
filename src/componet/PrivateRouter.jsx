import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({children}){
    const login=JSON.parse(localStorage.getItem("user")) || false;
    const register=JSON.parse(localStorage.getItem("registerData")) || false;

    return(
        <>
        {!register ?(
            <Navigate to="/register" />
        ): register && !login ? (
            <Navigate to="/login"/>
        ):(
            login && register && children
        )}
        </>
    )
}