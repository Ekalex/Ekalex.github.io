//https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip

mapboxgl.accessToken = "pk.eyJ1IjoiZWthbGV4MDgiLCJhIjoiY2ttMTNzZmdtMDMxdDJwanZtajMwbzBoaiJ9.Rb0d4g6qLSpGbG8iIyvBJw";

const map = new mapboxgl.Map({
  container: "map",
  //   style: "mapbox://styles/mapbox/dark-v10",
  style: "mapbox://styles/mapbox/dark-v10", //I just changed the style
  center: [-71.091542, 42.358862],
  zoom: 14,
});

async function run() {
  const locations = await getBusLocations();
  let latLong = [];
  latLong.push(locations[0].attributes.longitude); //this will push the json data of longitude in latLong Array
  latLong.push(locations[0].attributes.latitude); //this will push the json data of latitude in latLong Array

  //   followMarker = [];
  //   followMarker.push(locations[0].attributes.latitude); //this will push the json data of longitude in latLong Array
  //   followMarker.push(locations[0].attributes.longitude);

  new mapboxgl.Marker().setLngLat(latLong).addTo(map);

  console.log(new Date());
  console.log(latLong);
  //marker.setLngLat(latLong);

  setTimeout(run, 6000);
}

async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  //   const url = "https://cdn.mbta.com/realtime/VehiclePositions_enhanced.json";
  // const url =
  //   "https://api-v3.mbta.com/trips/%22job%22?fields%5Btrip%5D=%22vehicle%22&include=%22route%22";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

run();
console.log(mapboxgl.Map.center);