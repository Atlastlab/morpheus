import Sprinkhaan from 'studio-fonkel/sprinkhaan';

export default function (morpheus) {

    return {
        props: ['youtube', 'title'],
        mounted: function () {
            this.sprinkhaan = new Sprinkhaan().show();
        },
        template: `<div class="sprinkhaan-container" data-state="collapsed" id="sprinkhaan">
            <div class="sprinkhaan-header is-sticky">{{ title }}</div>
            <div class="sprinkhaan-close-button"></div>
        
            <div class="sprinkhaan-inner">
                <div class="sprinkhaan-media" v-bind:data-youtube="youtube"><slot name="media"></slot></div>
        
                <div class="sprinkhaan-content-wrapper">
                    <div class="sprinkhaan-header is-not-sticky">{{ title }}</div>
        
                    <div class="sprinkhaan-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>`
    }

};