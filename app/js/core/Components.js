import EventEmitter from 'events';
import Vue from 'vue/dist/vue.js';

class Components extends EventEmitter {

    registeredComponents = [];
    prefix = 'atlast-';

    constructor (components, morpheus) {
        super();
        this.components = components;
        this.morpheus = morpheus;
    }

    registerVueComponent (type) {
        if (!this.registeredComponents.includes(type)) {
            this.registeredComponents.push(type);

            Vue.component(this.prefix + type, () => System.import('./js/components/' + type + '.js')
            .then((component) => {
                return component.default(this.morpheus);
            }));
        }
    }

    toNestedMarkup () {
        let markup = '';
        let typesStack = [];

        this.components.forEach((component, delta) => {
            this.registerVueComponent(component.type);

            let currentDepth = parseInt(component.depth);
            let nextDepth = this.components[delta + 1] ? parseInt(this.components[delta + 1].depth) : 0;

            markup += `<${this.prefix}${component.type} component-id="${component.target_id}">`;

            if (nextDepth > currentDepth) {
                typesStack.push(component.type)
            }

            if (currentDepth === nextDepth) {
                markup += `</${this.prefix}${component.type}>`;
            }

            if (nextDepth < currentDepth) {
                let counter = 0;
                for (let i = currentDepth; i >= nextDepth; i--) {

                    if (counter) {
                        markup += `</${this.prefix}${typesStack[0]}>`;
                        typesStack.splice(typesStack.length - 1, 1);
                    }
                    else {
                        markup += `</${this.prefix}${component.type}>`;
                    }

                    counter++;
                }
            }
        });

        return `<div class="components-wrapper">${markup}</div>`;
    }
}

export default Components;