;( function() {

    var touch2 = {};
    
    // Check for Tocca
    var Tocca = typeof require === 'function' ? require( 'tocca' ) : window.Tocca;
    if( !Tocca ) {
        throw new Error( '[vue-touch2] cannot locate Tocca.js.' )
    }

    var gestures = [ 'tap', 'dbltap', 'longtap', 'swipeleft', 'swiperight', 'swipeup', 'swipedown' ];

    // exposed global options
    touch2.config = {};

    touch2.install = function( Vue ) {

        Vue.directive( 'touch', {

            isFn: true,
            acceptStatement: true,
            priority: Vue.directive( 'on' ).priority,

            bind: function() {

                // Determine event type
                if( !this.arg ) {
                    console.warn( '[vue-touch2] event type argument is required.' );
                    return;
                }

                var event;
                for( var i = 0; i < gestures.length; i++ ) {
                    if( this.arg == gestures[ i ] ) {
                        event = this.arg;
                        break;
                    }
                }
                if( !event ) {
                    console.warn('[vue-touch2] invalid event type: ' + this.arg );
                    return;
                }

                // this.event = event;
                // this.el.addEventListener( event )
            },

            update: function( fn ) {
                // Remove old listener
                if( this.handler ) {
                    this.el.removeEventListener( this.arg, this.handler );
                }

                // Add new listener if valid function
                if( typeof fn !== 'function' ) {
                    this.handler = null;
                    console.warn(
                        '[vue-touch2] invalid handler function for v-touch: ' +
                        this.arg + '=' + this.descriptor.raw
                    );
                }
                else {
                    this.handler = fn;
                    this.el.addEventListener( this.arg, this.handler );
                }
            },

            unbind: function () {
                if( this.handler ) {
                    this.el.removeEventListener( this.arg, this.handler );
                }
            }
        } );
    }

    if( typeof exports == 'object' ) {
        module.exports = touch2;
    }
    else if( typeof define == 'function' && define.amd ) {
        define( [], function(){ return touch2 } );
    }
    else if( window.Vue ) {
        window.VueTouch2 = touch2;
        Vue.use( touch2 );
    }
} )()
