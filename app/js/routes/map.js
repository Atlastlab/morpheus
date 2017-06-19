import mapboxgl from 'mapbox/mapbox-gl-js/dist/mapbox-gl.js';
import 'mapbox/mapbox-gl-js/dist/mapbox-gl.css!css';

let map = function (morpheus) {
    return {
        mounted: function () {
            mapboxgl.accessToken = morpheus.settings.mapbox_token;

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9'
            });
        },
        template: `<div class="map-view">
            <div class="map" id="map"></div>
            <router-view></router-view>
        </div>`,
    };
};

export default map;