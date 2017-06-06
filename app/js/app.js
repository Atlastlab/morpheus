import AtlasApi from './core/AtlasApi.js';

let api = new AtlasApi({
    baseUrl: 'http://atlas.daniel/api/v1'
});

let fetchPage = api.get('building_page', 2);

let createComponentsMarkup = function (components) {
    let markup = '';

    components.forEach((component, delta) => {
        let currentDepth = parseInt(component.depth);
        let nextDepth = components[delta + 1] ? parseInt(components[delta + 1].depth) : 0;

        markup += `<component id="${component.target_id}">`;

        if (currentDepth === nextDepth) {
            markup += `</component>\n`;
        }

        if (nextDepth < currentDepth) {
            for (let i = currentDepth; i >= nextDepth; i--) {
                markup += `</component>\n`;
            }
        }
    });

    return markup;
};

fetchPage.then((page) => {
    let markup = createComponentsMarkup(page.components);
    document.body.innerHTML = markup;
});
