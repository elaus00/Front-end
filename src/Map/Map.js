import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addMarkers } from "./Marker/Marker.jsx"; // Import the addMarkers function from markers.js
import { useAuth } from "../AuthContext.jsx";

const MapNaverCur = () => {
  const mapElement = useRef(null); // Reference to the map container
  const { naver } = window; // Naver Maps object
  const [myLocation, setMyLocation] = useState({ latitude: 0, longitude: 0 }); // User's current location
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth); // Viewport width state
  const [RestaurantData, setRestaurantData] = useState([]); // Restaurant data state
  const { URL, bookmarks, bookmarksToggle, dietToggle, setDietToggle, isLoggedIn } = useAuth(); // Authentication context values
  const navigate = useNavigate(); // Navigation hook
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Update viewport size
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get User's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);
  
  // Fetch restaurant data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/api/restaurant/list`);
        setRestaurantData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, []);

  // Success callback for geolocation
  function success(position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  // Error callback for geolocation
  function error() {
    setMyLocation({ latitude: 37.631445, longitude: 127.077293 });
  }

  // Initialize Map
  useEffect(() => {
    if (!mapElement.current || !naver || !myLocation.latitude || !myLocation.longitude)
      return;

    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);

    const mapOptions = {
      center: location,
      zoom: 12,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_CENTER,
      },
      logoControlOptions: {
        position: naver.maps.Position.LEFT_BOTTOM,
      },
      scaleControl: false,
      mapDataControl: false,
    };

    // Map implementation
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const zoom = mapOptions.zoom;
    const windowWidth = window.innerWidth;
    const MarkerData = RestaurantData.data;

    // Add markers to the map using fetched data
    addMarkers(
      naver,
      map,
      MarkerData,
      windowWidth,
      zoom,
      navigate,
      bookmarksToggle,
      bookmarks,
      dietToggle,
      setDietToggle,
      isLoggedIn
    );
  }, [
    myLocation,
    naver,
    RestaurantData,
    bookmarksToggle,
    dietToggle,
    isLoggedIn,
  ]);

  return <div ref={mapElement} style={{ minHeight: "100vh" }} />; // Return Map container
};

export default MapNaverCur;