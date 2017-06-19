import $ from 'jquery';
import 'OwlCarousel2/OwlCarousel2';

export default function () {

    return {
        props: ['component-id'],
        mounted: function () {
            this.slider = $(this.$el).owlCarousel({
                items: 1,
                autoHeight: true
            });
        },
        template: '<div class="owl-carousel"><slot></slot></div>'
    }

};