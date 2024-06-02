import CustomWindow from "./CustomInfoWindow.jsx";

// Function to create an info window for a Naver map marker
export const createInfoWindow = (naver, map, marker, name, Id, navigate, ReviewCount, Rating) => {
  // Generate the content for the info window using a custom component
  const InfoWindowContent = CustomWindow({
    title: name,
    id: Id,
    ReviewCount,
    Rating,
  });

  // Create a new InfoWindow instance with specified options
  const infowindow = new naver.maps.InfoWindow({
    content: InfoWindowContent,
    backgroundColor: "transparent",
    maxWidth: 140,
    borderWidth: 0,
    disableAnchor: true,
    disableAutoPan: true,
    pixelOffset: new naver.maps.Point(80, -5),
  });

  // When mouse hovered, show infowindow. Otherwise, hide it.
  naver.maps.Event.addListener(marker, "mouseover", function (e) {
    infowindow.open(map, marker);
  });

  naver.maps.Event.addListener(marker, "mouseout", function (e) {
    infowindow.close();
  });

  // When mouse is click marker, move to detail window.
  naver.maps.Event.addListener(marker, "click", function (e) {
    navigate(`/${Id}`);
  });

  return infowindow;
};