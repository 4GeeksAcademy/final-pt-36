import React from "react";
import { Cards } from "./cards";



export const AdminDashboard = ({ user }) => {

	const data = [
		{
			img: "https://i.pinimg.com/564x/37/a7/63/37a763eb1c17d3a3cf8048667965a0da.jpg",
			title: "Crear Muestra",
			text: "Asignar tareas por usuario",
			buttonText: "Create",
			url: "/dashboard/create"
		},
		{
			img: "https://i.pinimg.com/564x/45/13/e8/4513e8eefc46a300b61201be0d0912af.jpg",
			title: "Administrar Usuarios",
			text: "Ve tus usuarios",
			buttonText: "Administrar",
			url: "/dashboard/workers"
		},
		{
			img: "https://i.pinimg.com/564x/af/5c/11/af5c1182913d06ce07857fe25fc88ad7.jpg",
			title: "Ver Muestras realizadas",
			text: "Ve las muestras realizadas",
			buttonText: "Ver",
			url: "/dashboard/viewmuestras"
		},

	]

	return (


		<div className="" style={{ backgroundImage: "url('https://res.cloudinary.com/dz6bglmyq/image/upload/v1688068965/banner3_xq4wvf.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
			<div>
				<p>hola, {user.name}</p>
			</div>
			<div >
				<div className="row p-4 d-flex justify-content-center text-center">
					{
						data.map(({ img, title, text, buttonText, url }, i) => {
							return (
								<Cards
									key={i}
									img={img}
									title={title}
									text={text}
									url={url}

									buttonText={buttonText}
								/>
							)
						})}
				</div>

			</div>

		</div>


	)
};