export default function (api) {

    return {
        props: ['component-id'],
        template: '<div class="carousel"><slot></slot></div>'
    }

};