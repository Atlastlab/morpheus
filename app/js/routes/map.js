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
                        "sources": {
                            "instance": {
                                "type": "raster",
                                "tiles": [
                                    instance.map
                                ],
                                "tileSize": 256
                            }
                        },
                        "layers": [{
                            "id": "simple-tiles",
                            "type": "raster",
                            "source": "instance",
                            "minzoom": 0,
                            "maxzoom": 22
                        }]
                    },
                    pitch: 50,
                    // bearing: -60,
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

                map.addControl(new mapboxgl.NavigationControl());

                map.on('load', () => {
                    morpheus.api.get('building').then((buildings) => {
                        Object.keys(buildings).forEach((buildingId) => {
                            let building = buildings[buildingId];

                            building.geojson[0].properties.buildingId = buildingId;

                            map.addLayer({
                                "id": 'building-' + buildingId,
                                "type": "fill",
                                "source": {
                                    "type": "geojson",
                                    "data": building.geojson[0]
                                },
                                "paint": {
                                    "fill-color": "black",
                                }
                            });
                        });
                    });

                    morpheus.api.get('building_page').then((buildingPages) => {
                        Object.keys(buildingPages).forEach((buildingPageId) => {
                            let buildingPage = buildingPages[buildingPageId];

                            map.on('click', 'building-' + buildingPage.building[0], (e) => {
                                if (morpheus.router.currentRoute.name === 'building' && morpheus.router.currentRoute.params.id === buildingPageId) {
                                    return;
                                }

                                morpheus.router.push({ name: 'building', params: { id: buildingPageId }});
                            });
                        });


                        map.on('click',function (e) {
                            if (morpheus.router.currentRoute.name !== 'map') {
                                morpheus.router.push({ name: 'map' });
                            }
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