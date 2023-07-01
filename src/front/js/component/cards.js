import React from "react";
import { Link } from "react-router-dom";


export const Cards = ({ img, title, text, url, buttonText }) => {


    return (

        <div className="col-12 col-xl-4" style={{ width: "20rem" }}>
            <div className="card m-2 text-white" style={{ backgroundColor: "rgb(174, 213, 129)" }}>
                <img src={img} className="img-thumbnail" style={{ height: "20rem" }} alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}.</p>
                    <Link to={url}>
                        <button className="btn btn-dark">{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>


    )
}