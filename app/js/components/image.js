export default function (api) {

    return {
        props: ['component-id'],
        data: function () {
            api.get('image',  this._props.componentId).then((response) => {
                this.url = 'http://atlas.daniel/' + response.url;
            });

            return {
                url: '',
            };
        },
        template: '<img class="component-image" :src="url">'
    }

};