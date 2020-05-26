// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/main.css'

export default function (Vue, { router, head, isClient }) {
  if (isClient) {
    // Vue.use(boxicons);
    require("boxicons");
  }
  // Set default layout as a global component
  head.script.push({
    // rel: "sript",
    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
  })
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: "stylesheet",
    href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
  })

  head.script.push({
    // rel: "script",
    SameSite: 'None',
    src: 'https://www.youtube.com/player_api'
  })

}
