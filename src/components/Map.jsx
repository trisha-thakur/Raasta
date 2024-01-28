// map.jsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const [response, setResponse] = useState(null);
  const [travelMode, setTravelMode] = useState('DRIVING');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [languageTranslations, setLanguageTranslations] = useState({
    DRIVING: 'Driving',
    WALKING: 'Walking',
    BICYCLING: 'Bicycling',
    TRANSIT: 'Transit',
  });

  const directionsCallback = (result, status) => {
    if (status === 'OK') {
      setResponse(result);
    } else {
      console.error(`Directions request failed due to ${status}`);
    }
  };

  const onClickHandler = () => {
    if (origin && destination) {
      setResponse(null);
    }
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch('http://localhost:5000/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sentences: ['driving', 'walking', 'bicycling', 'transit'],
            src_lang: 'en_Latn',
            tgt_lang: 'hin_Deva', // Replace with the selected language
          }),
        });

        const data = await response.json();
        if (data.translations) {
          setLanguageTranslations({
            DRIVING: data.translations[0],
            WALKING: data.translations[1],
            BICYCLING: data.translations[2],
            TRANSIT: data.translations[3],
          });
        }
      } catch (error) {
        console.error('Error fetching translations:', error);
      }
    };

    fetchTranslations();
  }, []); // Ensure it runs only once when the component mounts

  return (
    <div className="relative">
      <LoadScript googleMapsApiKey="AIzaSyAl15nnKrPtS08ep2qhq2NVIhS_qHNbWDY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={options}
        >
          {response ? (
            <>
              <DirectionsRenderer directions={response} />
            </>
          ) : null}

          <DirectionsService
            options={{
              destination,
              origin,
              travelMode,
            }}
            callback={directionsCallback}
          />

          <div className="absolute top-0 left-0 p-6 z-10">
            <div className="mb-4">
              <label className="block text-white text-lg font-bold mb-2" htmlFor="origin">
                Origin
              </label>
              <input
                id="origin"
                type="text"
                className="text-black bg-white border rounded focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-lg font-bold mb-2" htmlFor="destination">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                className="text-black bg-white border rounded focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-lg font-bold mb-2" htmlFor="travelMode">
                Travel Mode
              </label>
              <select
                id="travelMode"
                className="text-black bg-white border rounded focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
                value={travelMode}
                onChange={(e) => setTravelMode(e.target.value)}
              >
                <option value="DRIVING">{languageTranslations.DRIVING}</option>
                <option value="WALKING">{languageTranslations.WALKING}</option>
                <option value="BICYCLING">{languageTranslations.BICYCLING}</option>
                <option value="TRANSIT">{languageTranslations.TRANSIT}</option>
              </select>
            </div>
            <button
              onClick={onClickHandler}
              className="bg-[#FFFFEC] text-lg text-black px-6 py-3 rounded-md hover:bg-[#C6A969] transform transition-transform duration-300 hover:scale-110"
            >
              Get Directions
            </button>
          </div>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
