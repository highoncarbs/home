<template>
  <div class="has-background-black has-navbar-fixed-top">
    <section class="section my-0 pt-0">
      <nav class="level is-mobile pt-4">
        <div class="level-left">
          <div class="level-item">
            <g-link to="/" class="is-size-6 has-text-white has-text-weight-semibold">Padam Sethia</g-link>
          </div>
        </div>
        <div class="level-item mono has-text-white pr-5" >HOME</div>

        <div class="level-right" @click="show = !show">
          <div class="level-item">
            <a class="has-text-white has-text-weight-medium">Menu ↴</a>
          </div>
        </div>
        <div v-if="show" class="custom-menu">
          <ul>
            <li @click="$router.push('/')" style="cursor:pointer">
              <g-link to="/work" class="has-text-white">Home</g-link>
            </li>
            <li @click="$router.push('/work')" style="cursor:pointer">
              <g-link to="/work" class="has-text-white">Work</g-link>
            </li>
            <li @click="$router.push('/notes')" style="cursor:pointer">
              <g-link to="/work" class="has-text-white">Journal</g-link>
            </li>
            <li style="cursor:pointer">
              <a href="#socials" class="has-text-white">Socials</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <slot />
      </div>
      <footer id="socials" class="has-text-centered">
        <br />
        <div class="columns is-centered has-text-centered">
          <div class="column is-half mt-6">
            <div class>
              <div class="level is-mobile pb-4">
                <a class="level-item has-text-grey" href="https://github.com/highoncarbs">Github ↗</a>

                <a class="level-item has-text-grey" href="https://twitter.com/highoncaarbs">Twitter ↗</a>

                <a class="level-item has-text-grey" href="https://dribbble.com/highoncarbs">Dribbble ↗</a>
                <a class="level-item has-text-grey" href="https://instagram.com/highoncarbs">Instagram ↗</a>
                <a class="level-item has-text-grey" href="mailto:padamsethia5@gmail.com">Email ↗</a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <div class="column">
              <div class="has-text-white">
                <div>
                  <p class="heading">AFTER ∞ iterations</p>
                  <p>Handcoded by Padam Sethia</p>
                  <br />
                  <p class="heading">SHAMELESS PLUG</p>
                  <a href="https://itminan.in" class="has-text-grey mono">itminan.in ↗</a>
                  <br />
                  <p class="mono mt-3">© 2020 Padam Sethia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
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
  data() {
    return {
      show: false
    };
  },
  methods: {
    gotop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style>
html {
  scroll-behavior: smooth;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.has-nav-shadow {
  box-shadow: 0 15px 50px lightgrey !important;
}
.has-nav-transparent {
  background-color: rgba(0, 0, 0, 0) !important;
}
html,
body,
.button,
section,
nav,
.card,
.level {
  /* background-color: whitesmoke; */
  font-family: "Inter", Helvetica, Arial, sans-serif !important;
}

h1 {
  font-family: "Inter", "Helvetica Neue" Helvetica, Arial, sans-serif !important;
  /* text-transform: uppercase; */
  font-weight: 300;
}

.navbar {
  font-family: "Inter" !important;
}
.img-shadow {
  box-shadow: 0px 5px 20px rgba(225, 225, 225, 0.2);
  border-radius: 50%;
}


.content blockquote {
  background-color: #fff !important;
  border-left: none !important;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  margin-top: 2.5rem !important;
  margin-bottom: 2.5rem !important;
}
.content blockquote::before {
  content: "“";
  position: relative;
  bottom: -10px;
  left: -20px;
  opacity: 0.2;
  font-size: 60px;
  line-height: 0.55556;
}

.has-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.is-size-0 {
  font-size: 4rem !important;
}
.has-equal-height .card-footer {
  margin-top: auto;
}

.mono {
  font-family: "Cousine", 'Roboto Mono' , 'Courier New', Courier, monospace !important;
}
.card-x {
  border: 1px solid lightgrey;
  box-shadow: none !important;
  border-radius: 10px;
}
.has-background-transparent {
  background-color: rgba(0, 0, 0, 0) !important;
}

.custom-menu {
  position: absolute;
  top: 46px;
  transform: translate(0.2s all ease);
  right: 25px;
  background-color: rgba(1, 1, 1, 1);
  border: 1px solid darkslategray;
  border-radius: 10px;
  z-index: 5;
  padding: 0.5rem 0.5rem;
}
.custom-menu li {
  padding: 0.5rem 2rem;
  width: 100%;
}
.custom-menu li:hover {
  background-color: #2c2c2c;
  border-radius: 5px;
  color: #fff;
}
.custom-menu li a:hover {
  color: #fff !important;
}
</style>


