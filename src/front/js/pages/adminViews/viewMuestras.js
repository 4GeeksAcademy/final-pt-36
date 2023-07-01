import React, {useState, useEffect} from "react";



export const ViewMuestras = () => {

    const [muestras, setMuestras] = useState("")

    const heading= ["Proyecto","id", "area" , "Especie", "imagen", "Calidad", "Ubicacion", "Comentarios"]


    useEffect(()=>{
            try {
                const getMuestras = async () => {
                    const resp = await fetch("https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/muestra")
                    const data = await resp.json()
                    setMuestras(data)  
                    };
                    getMuestras();
              } catch (error) {
                console.log("error", error);
              };
     }, []);

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
          {console.log(muestras)}
          {muestras.length !== 0 ? (
                muestras.map(({project_name, id, area, aditional_comments, specimen, image_specimen, quality_specimen, ubication}, i) =>{
                  return (
                    <tr key={i}>
                      <td>{project_name}</td>
                      <td>{id}</td>
                      <td>{area}</td>
                      <td>{specimen}</td>
                      <td>{image_specimen}</td>
                      <td>{quality_specimen}</td>
                      <td>{ubication}</td>
                      <td>{aditional_comments}</td>
                    </tr>
                  )
                 
                }))
                : (<div></div>)}
        </tbody>
        </table>

      </>
     
    
    )
}