
import type { LineLayerSpecification } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as maplibregl from 'maplibre-gl';
import { Map as MapGL, Marker, Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

maplibregl.setWorkerUrl(`${import.meta.env.BASE_URL}maplibre-gl-csp-worker.js`);

const mapKey = import.meta.env.VITE_MAPTILER_KEY;

type Delivery = {
     id: number | string;
     latitude: number;
     longitude: number;
};

type PropsMap = {
     deliveries: Delivery[] | any[];
     lat: number;
     long: number;
};

const routeLayer: LineLayerSpecification = {
     id: 'route-line',
     type: 'line',
     source: 'route',
     layout: { 'line-join': 'round', 'line-cap': 'round' },
     paint: { 'line-color': '#2563eb', 'line-width': 4 },
};

export function RouteMap({ lat, long, deliveries }: PropsMap) {
     const routeGeoJson = {
          type: 'Feature' as const,
          properties: {},
          geometry: {
               type: 'LineString' as const,
               coordinates: deliveries.map(d => [d.longitude, d.latitude]),
          },
     };

     return (
          <MapGL
               initialViewState={{ longitude: long, latitude: lat, zoom: 13 }}
               style={{ width: '100%', height: 300, borderRadius: '10px', marginBottom: '30px' }}
               mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapKey}`}
          >
               {deliveries.length > 1 && (
                    <Source id="route" type="geojson" data={routeGeoJson}>
                         <Layer {...routeLayer} />
                    </Source>
               )}

               {deliveries.map(d => (
                    <Marker key={d.id} longitude={d.longitude} latitude={d.latitude} />
               ))}
          </MapGL>
     );
}