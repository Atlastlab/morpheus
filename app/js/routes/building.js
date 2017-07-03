import Vue from 'vue/dist/vue.js';
import 'FortAwesome/Font-Awesome/css/font-awesome.css!';
import Components from 'morpheus/core/Components.js';

let building = function (morpheus) {
    return {
        template: `<sprinkhaan :title="title" :icon="icon">
            <img :src="image" slot="media">
            <component :is="componentsMarkup"></component>
        </sprinkhaan>`,
        beforeRouteEnter (to, from, next) {
            morpheus.api.get('building_page', to.params.id).then((buildingPage) => {
                let componentsMarkup = new Components(buildingPage.components, morpheus).toNestedMarkup();
                next(vm => {
                    vm.title = buildingPage.title;
                    vm.icon = buildingPage.icon;
                    vm.image = morpheus.settings.api + buildingPage.image;
                    vm.componentsMarkup = Vue.extend({ template: componentsMarkup })
                });
            });
        },
        data () {
            return {
                title: '',
                image: '',
                icon: '',
                componentsMarkup: null,
            }
        }
    };
};

export default building;