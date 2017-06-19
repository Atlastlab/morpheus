import settings from '../settings.json!json';
import EventEmitter from 'events';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Api from 'morpheus/core/Api.js';
import building from 'morpheus/routes/building.js';

class Morpheus extends EventEmitter {

    settings = null;
    api = null;
    router = null;
    vueRoot = null;

    routes = [
        { path: '/building/:id', component: building(this) }
    ];

    components = [
        'sprinkhaan'
    ];

    constructor () {
        super();
        Vue.use(VueRouter);

        this.registerComponents();

        this.settings = settings;
        this.api = new Api({ baseUrl: this.settings.api });
        this.router = new VueRouter({ routes: this.routes });
        this.vueRoot = new Vue({ router: this.router }).$mount('#app');
    }

    registerComponents () {
        this.components.forEach((componentName) => {
            Vue.component(componentName, () => System.import('./js/components/' + componentName + '.js')
            .then((component) => {
                return component.default(this);
            }));
        });
    }

}

new Morpheus();