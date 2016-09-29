# vue-touch2

> Alternate Touch events plugin for Vue.js

This is a directive wrapper for Tocca.js. This is an alternative to vue-touch which uses Hammer.js.

## Install

#### CommonJS

- Available through npm as `vue-touch2`.

  ``` js
  var VueTouch2 = require( 'vue-touch2' );
  Vue.use( VueTouch2 );
  ```

#### Direct include

- You can also directly include it with a `<script>` tag when you have Vue and Tocca.js already included globally. It will automatically install itself, and will add a global `VueTouch2`.

## Usage

#### Using the `v-touch` directive

``` html
<a v-touch:tap="onTap">Tap me!</a>

<div v-touch:swipeleft="onSwipeLeft">Swipe me!</div>
```

The supported touch events are: `tap`, `dbltap`, `longtap`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`

See `/example` for a multi-event demo. To build it, run `npm install && npm run build`.

## License

[MIT](http://opensource.org/licenses/MIT)
