export default function (morpheus) {

    return {
        props: ['component-id'],
        data: function () {
            morpheus.api.get('image',  this._props.componentId).then((response) => {
                this.url = morpheus.settings.api + response.url;
            });

            return {
                url: '',
            };
        },
        template: '<img class="component-image" :src="url">'
    }

};