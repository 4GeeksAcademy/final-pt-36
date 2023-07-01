import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { AdminDashboard } from "../component/adminDashboard";
import { UserDashboard } from "../component/userDashboard"

export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const [ user, setUser ] = useState(store.user)
   
    
    useEffect(()=>{
        let storageUSer = JSON.parse(localStorage.getItem("user"))
        if (storageUSer && user === null) { 
            setUser(() => storageUSer)
        } 
        if (!storageUSer && user === null){
            actions.getUser();
    
        }
    
    }, [user , store.user])

  
    return (
        <>
        {user !== null && user.rol === "1" && <AdminDashboard user={user} /> } 
        {user !== null && user.rol === "2" && <UserDashboard user={user} /> }
        </>

        )
}