// components/Map.js
import React from 'react';
import GoogleMapReact from "google-map-react";

const Map = ({ places }) => {
  const mapCenter = { lat: 31.6968, lng: 34.8604 };

  return (
    <div style={{ height: "90vh", display: "flex"}} >
      <div style={{ flex: "0 0 100%", height: "100%", border: "2px solid blue" }} >
        <GoogleMapReact
          bootstrapURLKeys={{
            key:"AIzaSyBE_SSzcqj9Ty_y0BOJi3L1lkA9f7oDZao",
          }}
          defaultCenter={mapCenter}
          defaultZoom={12}
        />
      </div>
      </div>
  );
};

export default Map;