import mapboxgl from 'mapbox-gl';
import 'mapbox/mapbox-gl-js/dist/mapbox-gl.css!css';

let map = function (morpheus) {
    return {
        mounted: function () {
            mapboxgl.accessToken = morpheus.settings.mapbox_token;

            morpheus.api.get('instance').then((instances) => {
                let instance = instances[Object.keys(instances)[0]];
                let bounds = instance['geographical-bounding-box'][0];

                const map = new mapboxgl.Map({
                    container: 'map',
                    style: {
                        "version": 8,
                        "sources": {},
                        "layers": []
                    },
                    center: [parseFloat(bounds.southwest_lat), parseFloat(bounds.southwest_lng)],
                    zoom: 9
                });

                map.fitBounds([[
                    parseFloat(bounds.southwest_lat),
                    parseFloat(bounds.southwest_lng),
                ], [
                    parseFloat(bounds.northeast_lat),
                    parseFloat(bounds.northeast_lng),
                ]], {
                    animate: false,
                    padding: 20
                });

                map.on('load', () => {
                    morpheus.api.get('building').then((buildings) => {
                        Object.keys(buildings).forEach((buildingId) => {
                            let building = buildings[buildingId];

                            map.addLayer({
                                "id": buildingId,
                                "type": "line",
                                "source": {
                                    "type": "geojson",
                                    "data": building.geojson[0]
                                },
                                "paint": {
                                    "line-color": "#888",
                                    "line-width": 1
                                }
                            });

                        });
                    });
                });
            });
        },
        template: `<div class="map-view">
            <div class="map" id="map"></div>
            <router-view></router-view>
        </div>`,
    };
};

export default map;