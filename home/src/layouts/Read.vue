<template>
  <div class="has-navbar-fixed-top">
    <section class="section my-0 pt-0">
      <nav class="level is-mobile pt-4">
        <div class="level-left">
          <div class="level-item">
            <g-link to="/" class="is-size-6 has-text-black has-text-weight-semibold">Padam Sethia</g-link>
          </div>
        </div>
        <div class="level-item mono has-text-black pr-5">JOURNAL</div>

        <div class="level-right" @click="show = !show">
          <div class="level-item">
            <a class="has-text-black has-text-weight-medium">Menu ↴</a>
          </div>
        </div>
        <div v-if="show" class="custom-menu">
          <ul>
            <li @click="$router.push('/')" style="cursor:pointer">
              <g-link to="/work" class="has-text-black">Home</g-link>
            </li>
            <li @click="$router.push('/work')" style="cursor:pointer">
              <g-link to="/work" class="has-text-black">Work</g-link>
            </li>
            <li @click="$router.push('/notes')" style="cursor:pointer">
              <g-link to="/work" class="has-text-black">Journal</g-link>
            </li>
            <li style="cursor:pointer">
              <a href="#socials" class="has-text-black">Socials</a>
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
            <div>
              <div class="level pb-4">
                <a class="level-item has-text-grey" href="https://github.com/highoncarbs">Github ↗</a>

                <a
                  class="level-item has-text-grey"
                  href="https://twitter.com/highoncaarbs"
                >Twitter ↗</a>

                <a
                  class="level-item has-text-grey"
                  href="https://dribbble.com/highoncarbs"
                >Dribbble ↗</a>
                <a
                  class="level-item has-text-grey"
                  href="https://instagram.com/highoncarbs"
                >Instagram ↗</a>
                <a class="level-item has-text-grey" href="mailto:padamsethia5@gmail.com">Email ↗</a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <div class="column">
              <div class="has-text-black">
                <div>
                  <p class="heading">AFTER ∞ iterations</p>
                  <p>Handcoded by Padam Sethia</p>
                  <br />
                  <p class="heading">SHAMELESS PLUG</p>
                  <a href="https://itminan.in" class="has-text-grey mono">itminan.in ↗</a>
                  <br />
                  <p class="mono mt-3">© 2020 Padam Sethia</p>
                  <br>
                  <a  @click="gotop()">Rocket Launch 🚀</a>
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
<style scoped>
.custom-menu {
  position: absolute;
  top: 46px;
  transform: translate(0.2s all ease);
  right: 25px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 10px;
  z-index: 5;
  padding: 0.5rem 0.5rem;
}
.custom-menu li {
  padding: 0.5rem 2rem;
  width: 100%;
}
.custom-menu li:hover {
  background-color: #eee;
  border-radius: 5px;
  color: #000;
}
.custom-menu li a:hover {
  color: #000 !important;
}
</style>