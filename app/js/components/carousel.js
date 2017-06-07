import $ from 'jquery';
import 'OwlCarousel2/OwlCarousel2';

export default function (api) {

    return {
        props: ['component-id'],
        mounted: function () {
            this.slider = $(this.$el).owlCarousel({
                items: 1,
                nav: true,
            });
        },
        template: '<div class="carousel"><slot></slot></div>'
    }

};