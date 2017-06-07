import EventEmitter from 'events';
import Vue from 'vue/dist/vue.js';

class Components extends EventEmitter {

    registeredComponents = [];

    constructor (components, data) {
        super();
        this.components = components;
        this.data = data;
    }

    registerComponent (type) {
        if (!this.registeredComponents.includes(type)) {
            Vue.component(
                'atlast-' + type,
                () => System.import('./js/components/' + type + '.js')
                .then((component) => component.default(this.data))
            );
        }
    }

    toNestedMarkup () {
        let markup = '';
        let typesStack = [];

        this.components.forEach((component, delta) => {

            this.registerComponent(component.type);

            let currentDepth = parseInt(component.depth);
            let nextDepth = this.components[delta + 1] ? parseInt(this.components[delta + 1].depth) : 0;

            markup += `<atlast-${component.type} component-id="${component.target_id}">`;

            if (nextDepth > currentDepth) {
                typesStack.push(component.type)
            }

            if (currentDepth === nextDepth) {
                markup += `</atlast-${component.type}>`;
            }

            if (nextDepth < currentDepth) {
                let counter = 0;
                for (let i = currentDepth; i >= nextDepth; i--) {

                    if (counter) {
                        markup += `</atlast-${typesStack[0]}>`;
                        typesStack.splice(typesStack.length - 1, 1);
                    }
                    else {
                        markup += `</atlast-${component.type}>`;
                    }

                    counter++;
                }
            }
        });

        return markup;
    }

}

export default Components;