import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../store/appContext";


export const ViewWorkers = () => {
    const { store, actions } = useContext(Context)
   
    const heading = ["name", "last Name", "email"] 

    useEffect(()=>{
      actions.loadUser()
     }, []);

     const handledelete = async (id) => {
      try {
       const response = await fetch(
          `https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/user/${id}`,
          {
            method: "DELETE",
          }
        ); if (response.ok){
            await response.json()
            actions.loadUser()
        };
      } catch (error) {
        console.log("error", error);
      }


     }

    return (
        <>
        <table className="table">
          <thead>
            <tr>
              {heading.map((head, i) => (
                <th scope="col" key={i}>{head}</th>
              ))
              }
            </tr>
          </thead>
          <tbody>
              {(
                store.users.map(({name, last_name, email, id}, i) =>{
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{last_name}</td>
                      <td>{email}</td>
                      <td><button onClick={()=>handledelete(id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                  )
                }))
                }
          </tbody>
        </table>

      </>
     
    
    )
}