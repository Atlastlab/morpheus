import AtlasApi from './core/AtlasApi.js';
import Components from './core/Components.js';
import Vue from 'vue/dist/vue.js';

let api = new AtlasApi({
    baseUrl: 'http://atlas.daniel/api/v1'
});

let fetchPage = api.get('building_page', 2);

let appElement = document.querySelector('#app');

fetchPage.then((page) => {
    let markup = new Components(page.components, api).toNestedMarkup();
    appElement.insertAdjacentHTML('beforeend', markup);

    let app = new Vue({
        el: '#app'
    });
});