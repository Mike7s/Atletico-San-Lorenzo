import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[40.931103, 14.183496]} 
      zoom={13}
      style={{ height: '400px', width: '100%' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.931103, 14.183496]}>
        <Popup>
          Indirizzo: <br /> Via innamorati 141, 80014 Giugliano in Campania (NA).
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
