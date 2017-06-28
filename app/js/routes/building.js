import Vue from 'vue/dist/vue.js';
import Components from 'morpheus/core/Components.js';

let building = function (morpheus) {
    return {
        template: `<sprinkhaan v-bind:title="title">
            <img v-bind:src="image" slot="media">
            <component :is="componentsMarkup"></component>
        </sprinkhaan>`,
        beforeRouteEnter (to, from, next) {
            morpheus.api.get('building_page', to.params.id).then((buildingPage) => {
                let componentsMarkup = new Components(buildingPage.components, morpheus).toNestedMarkup();
                next(vm => {
                    vm.title = buildingPage.title;
                    vm.image = morpheus.settings.api + buildingPage.image;
                    vm.componentsMarkup = Vue.extend({ template: componentsMarkup })
                });
            });
        },
        data () {
            return {
                title: '',
                image: '',
                componentsMarkup: null,
            }
        }
    };
};

export default building;