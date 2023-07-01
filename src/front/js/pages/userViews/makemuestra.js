import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useForm } from "../../../hooks/useform";


export const MakeMuestra = () => {
    const { store, actions } = useContext(Context)
    const [tasks, setTasks] = useState(null);

    const [coordinates, setCoordinates] = useState(null);
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates([latitude, longitude] );
                },
                error => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

   

    const [values, handleInputChange] = useForm({
       
        ubication_image:"",
        area:"",
        specimen:"",
        quality_specimen:"",
        image_specimen:"",
        aditional_comments:"",
        proyecto_id: ""

    })

    const [selectedTask, setSelectedTask] = useState(null)

    const selectTask = (taskId) => {
        let newTasks = [...tasks]
        let filteredTask = newTasks.filter((x)=> x.id == taskId)
        setSelectedTask(()=> filteredTask)
    }

    const { ubication_image, specimen, quality_specimen, image_specimen, aditional_comments} = values;

    const estado = [{val: "Conservada", id: 1}, {val:"Ligeramente afectada",  id: 2}, {val: "Mal estado", id: 3}]; 

    let storageUSer = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (tasks === null) {
        try{
            const getTasks = async () =>{
                const res = await fetch(`https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/user/${storageUSer.id}/projects`)
                const data = await res.json();
                setTasks(data)
                
            };
            getTasks()
        }
        catch(error){
            console.log("error", error)
        }
    };
    getLocation();

    }, [tasks])



    const createSampleRequest = async () => {
        try {
            await fetch(
              "https://manolos05-bug-free-computing-machine-w655gv4jqqpfgrj9-3001.preview.app.github.dev/muestra",
              {
                method: "POST",
                body: JSON.stringify({
                    user_id: `${storageUSer.id}`,
                    proyecto_id: `${selectedTask !== null ? selectedTask[0].id : ""}`,
                    project_name:`${selectedTask[0].name}`,
                    ubication:`${selectedTask[0].direction}`,
                    area: `${coordinates}`,
                    ubication_image:"",
                    specimen: specimen,
                    quality_specimen: quality_specimen,
                    image_specimen:"",
                    aditional_comments:aditional_comments,

                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          } catch (error) {
            console.log("error", error);
          };
        }

        const handleChangeProjectState = async () =>{
            try{
                fetch(`https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/proyecto/${selectedTask[0].id}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        is_active: false
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

    return (
       
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create una nueva muestra</p>
                                        {tasks !== null && 
                                        <form className="mx-1 mx-md-4">
                                             <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
																										<select onChange={(e)=>{handleInputChange(e); selectTask(e.target.value) }} name="proyecto_id" className="form-select" aria-label="Default select example">
                                                    <option defaultValue>Seleccionar Proyecto</option>
                                                    {
                                                        tasks.map((task, i) => {
                                                            
                                                            return (
                                                            task.is_active && <option value={task.id} key={i}>{task.name}</option>
                                                            )                                                  
                                                        })                                                                                
                                                    }        
                                                </select>
																								<label className="form-label" htmlFor="form3Example1c">Seleccionar el muestreo correspondiente</label>


																										</div>
                                               
                                                </div>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" name="specimen" value={specimen} onChange={handleInputChange} />
                                                <label className="form-label" htmlFor="form3Example1c">Nombre de la especie</label>
                                            </div>
                                        </div>
                                   <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                            <select onChange={handleInputChange} name="quality_specimen" className="form-select" aria-label="Default select example">
                                                    <option defaultValue>Seleccionar Estado de la Muestra</option>
                                                    {
                                                        estado.map(({val, id}, i) => {
                                                            return (
                                                              <option  value={val} key={i}>{val}</option>
                                                               
                                                    )
                                                })
                                            }           
                                                </select>
																								<label className="form-label" htmlFor="form3Example1c">Seleccionar el estado de la muestra</label>
                                            </div>
                                        </div>
                                      
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">Imagen</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <textarea  type="text" id="form3Example1c" className="form-control" name="aditional_comments" value={aditional_comments} onChange={handleInputChange} />
                                                <label className="form-label" htmlFor="form3Example1c">Comentarios adicionales</label>
                                            </div>
                                        </div>
                                       
                                        <div className="d-flex flex-row align-items-center mb-4">
																				<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button"  className="btn btn-primary btn-lg"  data-bs-toggle="modal"  data-bs-target="#staticBackdrop1">Create</button>
																				
																				<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"></div>
                                            <button type="button"  className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Terminar muestreo</button>
																				</div>
                                        </div>
                                       
                                    </form>
                                        }
                                        
                                </div>
                            
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
     
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Terminar muestreso</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           ¿Desea finalizar este muestreo?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={()=>handleChangeProjectState()}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>


						<div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirnar la muestra</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           Confirmar la muestra
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={()=>createSampleRequest()} data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

      

    )
}