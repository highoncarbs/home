// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component

  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: "stylesheet",
    href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'
  })
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cousine&family=Libre+Franklin&family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap",
    body: true
  })


  head.meta.push({
    name: 'keywords',
    content: 'Indie Hacker , developer working on Open source software for Indian SMBs & B2B tools'
  })

}
