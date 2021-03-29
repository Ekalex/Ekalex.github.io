mapboxgl.accessToken = 'pk.eyJ1IjoiZWthbGV4MDgiLCJhIjoiY2ttMTNzZmdtMDMxdDJwanZtajMwbzBoaiJ9.Rb0d4g6qLSpGbG8iIyvBJw'

let map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.0942, 42.3601],
    zoom: 14
});

let busLocations = [];
async function run(){
	// get bus data  
    let location = [];
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	
	for(let element of locations){
		let lng = element.attributes.longitude;
		let lat = element.attributes.latitude;
		location = [lng, lat];
		var marker = new mapboxgl.Marker()
			.setLngLat(location)
			.addTo(map);
		}
    //remove previous markers
	
	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();	
	
	return json.data;
}

run();