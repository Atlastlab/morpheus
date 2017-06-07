export default function (api) {

    return {
        props: ['component-id'],
        data: function () {
            api.get('text',  this._props.componentId).then((response) => {
                this.text = response.value;
            });

            return {
                text: '<p>Loading...</p>',
            };
        },
        template: '<div class="component-text" v-html="text"></div>'
    }

};