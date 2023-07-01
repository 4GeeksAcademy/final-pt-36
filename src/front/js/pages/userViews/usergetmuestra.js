import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useform";

export const UserGetMuestra = () => {

  const [muestras, setMuestras] = useState([])

  const [values, handleInputChange] = useForm({
    specimen:"",
    quality_specimen:"",
    aditional_comments:""

  })

  const { specimen, quality_specimen, aditional_comments } = values

    const heading= ["Id","Proyecto", "Ubicacion" , "Especie", "Coordenadas", "Calidad",  "imagen", "Comentarios", "Editar"]

    const [selectedMuestra, setSelectedmuestra] = useState(null)

    const selectMuestra = (muestraId) => {
        let newMuestras = [...muestras]
        let filteredMuestra = newMuestras.filter((x)=> x.id == muestraId)
        setSelectedmuestra(()=> filteredMuestra)
    }


    let storageUSer = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
            try {
                const getMuestras = async () => {
                    const resp = await fetch(`https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/user/${storageUSer.id}/muestras`)
                    const data = await resp.json()
                    setMuestras(data)  
                  
                    };
                    getMuestras();
              } catch (error) {
                console.log("error", error);
              };
     }, []);



     const handleChangeSampleData = async (id) =>{
      try{
          fetch(`https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/muestra/${id}`,
          {
              method: "PUT",
              body: JSON.stringify({
                specimen:"",
                quality_specimen:"",
                aditional_comments:""
              }),
              headers: {
                  "Content-Type": "application/json",
                },
          })
      }
      catch(error){
          console.log("error", error)
      }

  }
console.log(selectedMuestra)
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
       
          {muestras.length !== 0 ? (
                muestras.muestras.map(({project_name, id, area, aditional_comments, specimen, image_specimen, quality_specimen, ubication}, i) =>
             
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{project_name}</td>
                      <td>{ubication}</td>
                      <td>{specimen}</td>
                      <td>{area}</td>
                      <td>{quality_specimen}</td>
                      <td>{image_specimen}</td>
                      <td>{aditional_comments}</td>
                      <td><button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e)=>{handleInputChange(e); selectMuestra(e.target.value) }} name="id" defaultValue>Editar</button>
                      
                      
                      
                      </td>
                    </tr>
                    
                  )
                  
                 
                )
                : (<div></div>)}
        </tbody>
        </table>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Terminar muestreso</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           Solo puede modificar los siguientes datos:
                        </div>
                        <form>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example1c" className="form-control" name="specimen" value={specimen} onChange={handleInputChange} />
                                <label className="form-label" htmlFor="form3Example1c">Especie</label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example1c" className="form-control" name="quality_specimen" value={quality_specimen} onChange={handleInputChange} />
                                <label className="form-label" htmlFor="form3Example1c">Calidad</label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example1c" className="form-control" name="aditional_comments" value={aditional_comments} onChange={handleInputChange}/>
                                <label className="form-label" htmlFor="form3Example1c">Comentarios</label>
                              </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={()=> handleChangeSampleData()}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>




      </>
     
    
    )
    
  }
     

    
       