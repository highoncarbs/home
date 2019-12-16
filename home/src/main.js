// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'typeface-eb-garamond'
import 'typeface-inter'
import '~/assets/main.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: "stylesheet",
    href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
  })

}
