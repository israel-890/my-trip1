import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  const mapCenter = { lat: 31.6968, lng: 34.8604 };

  return (
    <div style={{ height: "80vh", display: "flex"}}>
      <div style={{ flex: "0 0 50%", height: "100%"}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyB3VsoS6NJQoT8rPz_zuobAjtZCbXjyHtY",
          }}
          defaultCenter={mapCenter}
          defaultZoom={12}
        />
      </div>
    </div>
  );
};

export default GoogleMap;
