import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";


export const AssignTask = () => {
    
  const { store, actions } = useContext(Context)
  
  const heading= ["Proyecto","id", "area" , "Especie", "imagen", "Calidad", "Ubicacion", "imagen ubicacion" , "Comentarios", "Eliminar"]

  useEffect(()=>{
    actions.getSample()
}, []);


const handledelete = async (id) => {
  try {
   const response = await fetch(
      `https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/muestra/${id}`,
      {
        method: "DELETE",
      }
    ); if (response.ok){
        await response.json()
        actions.getSample()
    };
  } catch (error) {
    console.log("error", error);
  }


 }
  console.log(store.getMuestra)
  return (
      <>
      <table class="table">
        <thead>
          <tr>
            {heading.map((head, i) => (
              <th scope="col" key={i}>{head}</th>
            ))
            }
          </tr>
        </thead>
        <tbody>
   
        {store.getMuestra.length !== 0 ? (
              store.getMuestra.map(({project_name, id, area, aditional_comments, specimen, image_specimen, quality_specimen, ubication, ubication_image}, i) =>
           
                  <tr key={i}>
                    <td>{project_name}</td>
                    <td>{id}</td>
                    <td>{area}</td>
                    <td>{specimen}</td>
                    <td>{image_specimen}</td>
                    <td>{quality_specimen}</td>
                    <td>{ubication}</td>
                    <td>{aditional_comments}</td>
                    <td>{ubication_image}</td>
                    <td><button onClick={()=>handledelete(id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                )
               
              )
              : (<div></div>)}
      </tbody>
      </table>

    </>
   
  
  )
        }