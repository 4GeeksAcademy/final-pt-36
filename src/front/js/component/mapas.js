
import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Mapss.css"


export  const Mapas = () => {

     const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBJZvuPMhRyzqRVJwbNwO2P03360jQy2V0",
      });
      const center = useMemo(() => ({ lat: -36.82699, lng: -73.04977 }), []);
    
      return (
        <div className="Mapss">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
          
            >
              <Marker position={{ lat: -33.43428200388383, lng: -70.54494520587248 }} />, 
            </GoogleMap>
          )}
        </div>
      );

};
