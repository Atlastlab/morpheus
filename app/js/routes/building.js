import Vue from 'vue/dist/vue.js';
import Components from 'morpheus/core/Components.js';

let building = function (morpheus) {
    return {
        template: '<component :is="componentsMarkup"></component>',
        beforeRouteEnter (to, from, next) {
            morpheus.api.get('building_page', to.params.id).then((buildingPage) => {
                let componentsMarkup = new Components(buildingPage.components, morpheus.api, Vue).toNestedMarkup();
                next(vm => vm.componentsMarkup = Vue.extend({ template: componentsMarkup }));
            });
        },
        data () {
            return {
                componentsMarkup: null,
            }
        }
    };
};

export default building;