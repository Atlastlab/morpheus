import $ from 'jquery';
import 'OwlCarousel2/OwlCarousel2';

export default function () {

    return {
        props: ['component-id'],
        mounted: function () {
            setTimeout(() => {
                this.slider = $(this.$el).owlCarousel({
                    items: 1,
                    stagePadding: 20
                });
            });
        },
        template: '<div class="owl-carousel"><slot></slot></div>'
    }

};