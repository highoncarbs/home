<template>
  <div class>
    <div class="section my-0 py-0">
      <!-- <nav class="navbar mb-0">
        <div class="container">
          <div class="navbar-brand">
            
          </div>
          <div class="navbar-start">
            <div class="navbar-item">
              <g-link to="/" class="has-text-weight-semibold has-text-dark">Home</g-link>
            </div>
            <div class="navbar-item">
              <g-link to="/work" class="has-text-weight-semibold has-text-dark">Projects</g-link>
            </div>
            <div class="navbar-item">
              <g-link  to="/work" class="has-text-weight-semibold has-text-dark">Work</g-link>
            </div>
            <div class="navbar-item">
              <g-link to="/notes" class="has-text-weight-semibold has-text-dark">Notes</g-link>
            </div>
          </div>
          <div class="navbar-right"></div>
        </div>
      </nav> -->
      <!-- <hr class="my-1" /> -->
    </div>
    <section class="section mx-2 my-1">
      <div class="container">
        <slot />
      </div>
    </section>
    <footer class="section has-background-white py-3">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-left">
            <a href="https://github.com/highoncarbs" class="level-item">Github</a>
            <a href="https://dribbble.com/highoncarbs" class="level-item">Dribbble</a>
            <a href="https://twitter.com/highoncaarbs" class="level-item">Twitter</a>
            <a href="https://instagram.com/highoncarbs" class="level-item">Instagram</a>
            <a href="mailto:padamsethia5@gmail.com" class="level-item">Email</a>
          </div>
        </div>
        <p class="has-text-grey">
          Some really non-enforceable Rights Reserved.
          <br />But do you even care ?
        </p>
      </div>
    </footer>
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
      showMenu: false,
      show: false,
    };
  },
  methods: {
    gotop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
html {
  scroll-behavior: smooth;
}

.content {
  display: inline-block;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.is-mono {
  font-family: "Cousine";
}
.menu-bar {
  position: fixed;
  transition: 2s -webkit-filter linear;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
}
.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  overflow-y: auto;
  width: 400px;
  top: 0;
  bottom: 0;

  border-right: 1px solid #dbdbdb;
}
.has-nav-shadow {
  box-shadow: 0 15px 50px lightgrey !important;
}
.has-nav-transparent {
  background-color: rgba(0, 0, 0, 0) !important;
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

.has-text-mono {
  font-family: "Cousine", "Roboto Mono", "Courier New", Courier, monospace !important;
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

.box-x {
  border: 1px solid #dbdbdb;
  box-shadow: none !important;
  border-radius: 0 !important;
}
.box-y {
  /* border: 1px solid #dbdbdb; */
  box-shadow: none !important;
  border-radius: 0 !important;
}

.title {
  font-family: "Gothic A1";
  font-weight: 900;
}

.is-size-0 {
  font-size: 5rem !important;
}

.has-text-serif {
  font-family: "Cormorant", Times, serif;
}
* {
  font-family: "Gothic A1";
}

.has-text-underlined{
  border-bottom: 1px solid black;
}
</style>


