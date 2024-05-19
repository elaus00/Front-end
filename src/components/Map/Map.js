import { useEffect, useRef, useState } from 'react';

const MapNaverCur = () => {
  const mapElement = useRef(null);
  const { naver } = window;

  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };
    
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [mapElement, myLocation]);

  return (
    <>
      {/* <h1>Naver Map - Current Position</h1> */}
      <div ref={mapElement} style={{ minHeight: '400px' }} />
    </>
  );

  // 위치추적에 성공했을때 위치 값을 넣어줍니다.
  function success(position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
  function error() {
    setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
  }
};

export default MapNaverCur;