import EventEmitter from 'events';

class Api extends EventEmitter {

    options = {
        baseUrl: ''
    };

    data = null;

    constructor (options) {
        super();
        Object.assign(this.options, options);
    }

    fetch () {
        return fetch(this.options.baseUrl + '/api/v1')
        .then((response) => {
            return response.json();
        }).then((data) => {
            this.data = data;
        });
    }

    get (type = null, id = null) {
        let returnData = (resolve, reject) => {
            if (type && id && this.data[type][id]) {
                resolve(this.data[type][id]);
            }
            else if (type && !id && this.data[type]) {
                resolve(this.data[type]);
            }
            else if (!this.data[type]){
                reject(Error('Unknown type: ' + type));
            }
            else if (!this.data[type][id]){
                reject(Error('Unknown object: ' + id));
            }
        };

        return new Promise((resolve, reject) => {
            if (!this.data) {
                this.fetch().then(() => returnData(resolve, reject));
            }
            else {
                returnData(resolve, reject);
            }
        });
    }
}

export default Api;