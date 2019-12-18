<template>
  <section class="section">
    <div class="container">
      <header class="header sans is-size-5">
        <div class="columns">
          <div class="column is-3">
            <h2 class="has-text-weight-semibold">Home of HighOnCarbs</h2>
            
            <div class="level is-mobile" style="margin-top:1rem;">
              <div class="level-left ">
                <g-link class="level-item " to="/">Home</g-link>
                <g-link class="level-item" to="/notes/">Notes</g-link>
                <g-link class="level-item" to="/work">Work</g-link>
              </div>
            </div>
          </div>
          <div class="column is-3" >
            <h2>
              Tinkers with bits & pixels to make
              <br />Indian Businesses more efficeint
            </h2>
          </div>
        </div>
      </header>
      <slot />
      <div class="has-background-white" style="margin-top:3rem;">
        <div class="level">
          <div class="level-left">

          <a href="https://github.com/padamsethia" class="level-item">Github</a>
          <a href="https://twitter.com/marwariboi"  class="level-item">Twitter</a>
          <a href="https://instagram.com/highoncarbs"  class="level-item">Instagram</a>
          <a href="https://dribbble.com/syncbo"  class="level-item">Dribbble</a>
          <a href="mailto:padamsethia5@gmail.com"  class="level-item">Email</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data (){
    return{
      onpage: null
    }
  },
  mounted(){
    this.onpage = this.$route
  }
}
</script>