import EventEmitter from 'events';

class AtlasApi extends EventEmitter {

    options = {
        baseUrl: ''
    };

    constructor (options) {
        super();
        Object.assign(this.options, options);
    }

    get (type, id) {
        return fetch(this.options.baseUrl).then(function(response) {
            return response.json();
        }).then(function(appData) {
            if (appData[type][id]) {
                return appData[type][id];
            }
            else if (!appData[type]){
                throw 'Unknown type: ' + type;
            }
            else if (!appData[type][id]){
                throw 'Unknown object: ' + id;
            }
        });
    }
}

export default AtlasApi;