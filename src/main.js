// @ts-nocheck

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import Fonts
import 'typeface-montserrat';
import 'typeface-source-sans-pro';

// Import Global Styles
import '~/assets/styles/index.css';

// Import Global Components
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
