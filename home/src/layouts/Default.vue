<template>
  <div>
    <section class="section mx-2 pb-0 mt-1 mb-0">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-6">
            <div class="level is-mobile pb-0">
              <div class="level-left">
                <div class="level-item is-size-5">
                  <g-link
                    to="/"
                    :class="{'is-italic has-text-weight-semibold': $route.path=='/'}"
                  >Home</g-link>
                </div>
                <div class="level-item is-size-5">
                  <g-link
                    to="/work"
                    :class="{'is-italic has-text-weight-semibold': $route.path=='/work'}"
                  >Work</g-link>
                </div>
                <div class="level-item is-size-5">
                  <s>
                    <g-link
                      to="/"
                      :class="{'is-italic has-text-weight-semibold': $route.path=='/projects'}"
                    >Projects</g-link>
                  </s>
                </div>
                <div class="level-item is-size-5">
                  <s>
                    <g-link
                      to="/"
                      :class="{'is-italic has-text-weight-semibold': $route.path=='/blog'}"
                    >Blog</g-link>
                  </s>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section mx-2 my-1">
      <div class="container">
        <slot />
      </div>
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
* {
  font-family: "Source Serif Pro", Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif !important;
  color: black !important;
}
.is-serif {
  font-family: "Source Serif Pro", Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif !important;
}
html {
  background-color: #edeae5 !important;
}
.level-item {
  font-family: "Libre Franklin", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif !important;
}

.is-sans {
  font-family: "Libre Franklin", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif !important;
}
.is-mono {
  font-family: "Cousine", "Courier New", Courier, monospace !important;
}

.box-a {
  border: 0.5px solid #0a0a0a;
}
.box-b {
  border: 1px dashed #0a0a0a;
  border-top: 10px solid #0a0a0a;
}
</style>


