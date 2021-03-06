import Sprinkhaan from 'studio-fonkel/sprinkhaan';

export default function (morpheus) {

    return {
        props: ['youtube', 'title', 'icon'],
        mounted: function () {
            setTimeout(() => {
                morpheus.sprinkhaan = new Sprinkhaan({
                    scrollWheelEnabled: false
                }).show();
            });
        },
        template: `<div class="sprinkhaan-container" data-state="collapsed" id="sprinkhaan">
            <div class="sprinkhaan-header is-sticky">
                <h2><i v-if="icon" :class="[icon, 'fa']"></i> {{ title }}</h2>
                <div class="sprinkhaan-close-button"></div>
            </div>
        
            <div class="sprinkhaan-inner">
                <div class="sprinkhaan-media" :data-youtube="youtube"><slot name="media"></slot></div>
        
                <div class="sprinkhaan-content-wrapper">
                    <div class="sprinkhaan-header is-not-sticky">
                        <h2><i v-if="icon" :class="[icon, 'fa']"></i> {{ title }}</h2>
                        <div class="sprinkhaan-close-button"></div>
                    </div>
        
                    <div class="sprinkhaan-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>`
    }

};