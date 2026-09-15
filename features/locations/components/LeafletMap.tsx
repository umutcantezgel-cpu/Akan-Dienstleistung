'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import * as ReactDOMServer from 'react-dom/server';

interface LocationCoordinate {
    lat: number;
    lng: number;
}

// Fallback Coordinates for Hessen cities if geocoding is skipped
const CityCoordinates: Record<string, LocationCoordinate> = {
    'Kassel': { lat: 51.3127, lng: 9.4797 },
    'Baunatal': { lat: 51.2589, lng: 9.4168 },
    'Gudensberg': { lat: 51.1805, lng: 9.3664 },
    'Fritzlar': { lat: 51.1311, lng: 9.2736 },
    'Melsungen': { lat: 51.1306, lng: 9.5445 },
    'Homberg': { lat: 51.0333, lng: 9.4000 },
    'Borken': { lat: 51.0454, lng: 9.2828 },
    'Felsberg': { lat: 51.1360, lng: 9.4206 },
    'Schwalmstadt': { lat: 50.9133, lng: 9.1866 },
    'Bad Wildungen': { lat: 51.1206, lng: 9.1232 },
    'Edermünde': { lat: 51.2138, lng: 9.4312 },
    'Wabern': { lat: 51.1011, lng: 9.3364 },
};

// Create Custom Map Pin (Pulsating Red Eye - MAP-03)
const createCustomIcon = () => {
    const htmlString = `
        <div class="relative flex items-center justify-center w-8 h-8">
            <div class="absolute inset-0 rounded-full bg-[#9b1c2e]/30 animate-ping"></div>
            <div class="absolute inset-2 z-10 rounded-full bg-[#9b1c2e] shadow-[0_0_15px_#9b1c2e] border-2 border-[#0a0a0c]"></div>
        </div>
    `;
    return L.divIcon({
        html: htmlString,
        className: 'custom-leaflet-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
};

const RecenterAutomatically = ({ lat, lng, zoom }: { lat: number; lng: number, zoom: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], zoom);
    }, [lat, lng, zoom, map]);
    return null;
};

interface LeafletMapProps {
    cityName: string;
    zoom?: number;
}

export default function LeafletMap({ cityName, zoom = 11 }: LeafletMapProps) {
    const [mounted, setMounted] = useState(false);

    // Default to center of Hessen if city is not found
    const defaultCoords = { lat: 51.3127, lng: 9.4797 };
    const coords = CityCoordinates[cityName] || defaultCoords;

    useEffect(() => {
        setTimeout(() => setMounted(true), 0);
    }, []);

    if (!mounted) return <div className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/5">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 animate-pulse mb-6 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
        <span className="text-white/50 font-mono text-xs tracking-[0.3em] uppercase">Initialisierung...</span>
    </div>;

    const customIcon = createCustomIcon();

    return (
        <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={11}
            scrollWheelZoom={false}
            zoomControl={false}
            attributionControl={false}
            className="w-full h-full z-10"
        >
            <TileLayer
                // Dark mode OpenStreetMap alternative (CartoDB Dark Matter)
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {/* Action Radius */}
            <Circle
                center={[coords.lat, coords.lng]}
                radius={25000} // 25km radius
                pathOptions={{
                    color: '#9b1c2e',
                    fillColor: '#9b1c2e',
                    fillOpacity: 0.1,
                    weight: 2,
                    dashArray: '5, 10',
                    className: 'animated-leaflet-radius'
                }}
            />
            <Marker position={[coords.lat, coords.lng]} icon={customIcon}>
                <Popup className="premium-leaflet-popup">
                    <div className="flex flex-col gap-1.5 p-3 min-w-[180px]">
                        <span className="font-display font-bold text-base text-white leading-tight">AKAN Dienstleistung</span>
                        <span className="text-white/60 text-[10px] font-mono uppercase tracking-widest border-b border-white/10 pb-2 mb-1">
                            {cityName === 'Melsungen' ? 'Hauptstandort' : `Servicegebiet ${cityName}`}
                        </span>
                        <span className="text-primary text-sm font-medium">Bereit für Ihren Einsatz.</span>
                    </div>
                </Popup>
            </Marker>
            <RecenterAutomatically lat={coords.lat} lng={coords.lng} zoom={zoom} />
        </MapContainer>
    );
}
