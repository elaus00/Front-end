import { useEffect, useRef, useState } from 'react';
import styles from './Map.module.css'; // CSS 파일을 임포트

const MapNaverCur = () => {
  const mapElement = useRef(null);
  const { naver } = window;

  const [myLocation, setMyLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  useEffect(() => {
    if (!mapElement.current || !naver || !myLocation.latitude || !myLocation.longitude) return;

    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      scaleControl: false,
      mapDataControl: false,
      padding_top: 15,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [myLocation, naver]);

  return (
    <div ref={mapElement} style={{ minHeight: '100vh' }} />
  );

  function success(position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
  }
};

export default MapNaverCur;
