import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
} from "react-google-maps";
import { useState } from "react";
import { stops } from "../../../dummy/stops";

// const Markers = ({ places }) => {
//   return places.map((place) => {
//     return (
//       <Marker
//         key={place.stop_id}
//         position={{ lat: place.stop_lat, lng: place.stop_lon }}
//       />
//     );
//   });
// };

const Maps = () => {
  const [selectedStop, setSelectedStop] = useState(null);
  return (
    <GoogleMap
      //   style={{ width: "100%", height: "400px", margin: "auto" }}
      defaultZoom={4}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
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
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Maps));

const Map = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    // <Maps />
  );
};

export default Map;
