import React from "react";
import { Cards } from "./cards";


export const UserDashboard = ({user}) => {

    const data = [
		{ 
        img:"",
		title: "Relizar Muestras",
		text:"Cumple con las muestras asignadas.", 
		buttonText: "Realizar",
		url:"/dashboard/makemuestra"
		},
		{ 
        img:"",
        title: "Ver muestras",
		text: "Edita y ve tus muestras",
		buttonText: "Ver",
		url:"/dashboard/usergetmuestra"
		},		
	]
	return (
		
		<div className="container">
			<div>
				<p>hola, {user.name}</p>
			</div>
			<div className="row  p-4 d-flex justify-content-center text-center">
					{
						data.map(({ img, title, text, buttonText, url }, i) => {
							return (
								
								<Cards
									key={i}
									src={img}
									title={title}
									text={text}
									buttonText={buttonText}
									url={url}
								/>
							)
						})}
			
			</div>

		

		</div>
	)

}