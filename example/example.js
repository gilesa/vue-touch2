var Vue = require( 'vue' );
var VueTouch2 = require( '../' );

Vue.use( VueTouch2 );

new Vue( {
    el: 'div',
    data: {
        event: ''
    },
    methods: {
        test: function (e) {
            this.event = e.type;
        }
    }
} );
