class Gmap {
  constructor () {
  }
  render () {
    console.log("start rendering map")
    // var mymap = L.map('lmap').setView([51.505, -0.09], 1);
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'your.mapbox.project.id',
    //   accessToken: 'your.mapbox.public.access.token'
    // }).addTo(mymap);
    console.log("map rendered")
  }
}

module.exports = Gmap;