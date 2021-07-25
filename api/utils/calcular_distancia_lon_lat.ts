function getDistanceFromLatLonInKm(position1, position2) {
  let deg2rad = function (deg) {
      return deg * (Math.PI / 180);
    },
    R = 6371,
    dLat = deg2rad(position2.lat - position1.lat),
    dLng = deg2rad(position2.lng - position1.lng),
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1.lat)) *
        Math.cos(deg2rad(position1.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseInt(((R * c * 1000) / 1000).toFixed());
}

let distancia = getDistanceFromLatLonInKm(
  { lat: -15.6653954, lng: -48.1925916 },
  { lat: -16.039595, lng: -48.020784 }
);

console.log(distancia, "km");
