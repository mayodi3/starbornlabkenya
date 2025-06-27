"use client";

import { useEffect, useRef } from "react";

interface MapSectionProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
  description?: string;
  markerTitle?: string;
  className?: string;
}

const getDirections = (lat: number, lng: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export function MapSection({
  latitude,
  longitude,
  zoom = 13,
  title = "Find Us",
  description = "Visit us at our location",
  markerTitle = "Our Location",
  className = "",
}: MapSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initMap = async () => {
      const L = (await import("leaflet")).default;

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      if (mapRef.current && !mapInstanceRef.current) {
        const map = L.map(mapRef.current).setView([latitude, longitude], zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([latitude, longitude]).addTo(map);
        marker
          .bindPopup(
            `
              <div style="text-align: center; padding: 8px;">
                <strong>${markerTitle}</strong><br/>
                <button
                  onclick="window.open('http://maps.google.com/maps?daddr=${latitude},${longitude}', '_blank', 'noopener,noreferrer')"
                  style="
                    background: #34a853; /* Green for directions */
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 8px;
                    font-size: 12px;
                    margin-right: 5px; /* Added spacing */
                  "
                >
                  Get Directions
                </button>
                <button
                  onclick="navigator.clipboard.writeText('http://maps.google.com/maps?q=${latitude},${longitude}').then(() => alert('Location link copied!'))"
                  style="
                    background: #8e24aa; /* Purple for copy */
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 8px;
                    font-size: 12px;
                  "
                >
                  Copy Link
                </button>
              </div>
            `
          )
          .openPopup();

        mapInstanceRef.current = map;
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, markerTitle]);

  return (
    <div id="location">
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      <section className={`py-16 md:py-24 bg-white ${className}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            {/* Map Container */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div
                  ref={mapRef}
                  className="w-full h-96 md:h-[500px]"
                  style={{ minHeight: "400px" }}
                />
              </div>

              {/* Coordinates Display */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Coordinates: {latitude.toFixed(6)}, {longitude.toFixed(6)}
                </p>
              </div>
            </div>

            {/* Enhanced Info Cards with Actions */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {" "}
              {/* Changed to 2 columns */}
              {/* Get Directions Card */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Get Directions
                </h3>
                <button
                  onClick={() => getDirections(latitude, longitude)}
                  className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200"
                >
                  Navigate Here
                </button>
              </div>
              {/* Share Location Card */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Share Location
                </h3>
                <button
                  onClick={() => {
                    const shareUrl = `http://maps.google.com/maps?q=${latitude},${longitude}`;
                    navigator.clipboard.writeText(shareUrl).then(() => {
                      alert("Location link copied to clipboard!");
                    });
                  }}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
