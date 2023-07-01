import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Dashboa = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.getUser();
    }, [])

    return (
        <div>
        <ul>
            {store.users.map((user, i)=> (
            <li key={i} className="list-group-item">
                {user.email}
            </li>
        ))}
        </ul>
        </div>
        )
}
