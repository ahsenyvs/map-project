import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
} from "react-google-maps";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import StopContext from "../../../context/StopContext";

const Maps = () => {
  const [selectedStop, setSelectedStop] = useState(null);
  const { stops } = useContext(StopContext);
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 40.762741, lng: 29.943461 }}
    >
      {stops.map((stop) => (
        <Marker
          key={stop.stop_id}
          position={{ lat: stop.stop_lat, lng: stop.stop_lon }}
          onClick={() => {
            setSelectedStop(stop);
          }}
        />
      ))}

      {selectedStop && (
        <InfoWindow
          position={{ lat: selectedStop.stop_lat, lng: selectedStop.stop_lon }}
          onCloseClick={() => {
            setSelectedStop(null);
          }}
        >
          <div>
            <h2>{selectedStop.selectedStop.stop_name}</h2>
            <p>{selectedStop.selectedStop.stop_desc}</p>
            <p>{selectedStop.selectedStop.stop_code}</p>
            <p>{selectedStop.selectedStop.stop_lat}</p>
            <p>{selectedStop.selectedStop.stop_lon}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Maps));

const Map = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <Button sx={{ margin: "10px" }} onClick={handleClick}>
        Login Page
      </Button>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
