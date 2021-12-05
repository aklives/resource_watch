// TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYWtsaXZlcyIsImEiOiJja3dzbGRkYXowc3EyMm9udzZjNzJ0OGI3In0.IWd2KgoBl-YAYb-wCAnapg';


// initiate a new map by passing an object describing a config
// for more info see: https://docs.mapbox.com/mapbox-gl-js/api/map/
var map = new mapboxgl.Map({
    // id of div that will hold map
    container: 'map',

    // one of the existing mapbox map styles
    style: 'mapbox://styles/mapbox/light-v10',

    // zoom in (greater = smaller area displayed)
    zoom: 4,

    // longitude, latitude of the map center
    center: [20, 0]
});
