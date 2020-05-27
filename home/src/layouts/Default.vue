<template>
  <div class>
    <div class="container">
      <br class="is-hidden-mobile" />
      <div class="section" style="padding-top:0rem; padding-bottom:1rem">
        <div class="level is-hidden-mobile is-mobile is-fixed-top">
          <div class="level-left">
            <div class="level-item">
              <g-link to="/">Home</g-link>
            </div>
            <div class="level-item">
              <g-link to="/work">Work</g-link>
            </div>
            <div class="level-item">
              <g-link to="/notes">Journal</g-link>
            </div>
          </div>
          <div class="level-item">
            <p class="has-text-weight-bold has-text-black">HIGHONCARBS</p>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <g-link
                    aria-haspopup="true"
                    class="has-text-black"
                    aria-controls="dropdown-menu4"
                    to="/"
                  >Social</g-link>
                </div>
                <div class="dropdown-menu" style="min-width:7rem" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <a href="https://twitter.com/highoncaarbs">Twitter</a>
                    </div>
                    <div class="dropdown-item">
                      <a href="https://github.com/highoncarbs">Github</a>
                    </div>
                    <div class="dropdown-item">
                      <a href="https://dribbble.com/highoncarbs">Dribbble</a>
                    </div>
                    <div class="dropdown-item">
                      <a href="https://instagram.com/highoncarbs">Instagram</a>
                    </div>
                    <div class="dropdown-item">
                      <a href="mailto:padamsethia5@gmail.com">Email</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-item">
              <a href="https://www.youtube.com/channel/UCT48WYUE7S94SPTwTeljaRQ">Playlist</a>
            </div>
          </div>
        </div>
      </div>
      <hr
        class="is-paddingless is-marginless has-background-dark is-hidden-mobile"
        style="height: 0.5px"
      />
      <nav class="navbar is-hidden-tablet is-marginless">
        <div class="section" style="padding-top:1rem; padding-bottom:1rem">
          <div class="level-item has-text-weight-bold has-text-black">HIGHONCARBS</div>
          <div class="level is-mobile" style="margin-bottom: 0.5rem">
            <div class="level-left">
              <div class="level-item">
                <g-link to="/">Home</g-link>
              </div>
              <div class="level-item">
                <g-link to="/work">Work</g-link>
              </div>
              <div class="level-item">
                <g-link to="/notes">Journal</g-link>
              </div>
            </div>
            <div class="level-right">
              <div class="level-tem" style="margin-right:10px">
                <div class="dropdown is-hoverable is-right">
                  <div class="dropdown-trigger">
                    <g-link
                      aria-haspopup="true"
                      class="has-text-black"
                      aria-controls="dropdown-menu4"
                      to="/"
                    >Social</g-link>
                  </div>
                  <div class="dropdown-menu" style="min-width:7rem" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-item">
                        <a href="https://twitter.com/highoncaarbs">Twitter</a>
                      </div>
                      <div class="dropdown-item">
                        <a href="https://github.com/highoncarbs">Github</a>
                      </div>
                      <div class="dropdown-item">
                        <a href="https://dribbble.com/highoncarbs">Dribbble</a>
                      </div>
                      <div class="dropdown-item">
                        <a href="https://instagram.com/highoncarbs">Instagram</a>
                      </div>
                      <div class="dropdown-item">
                        <a href="mailto:padamsethia5@gmail.com">Email</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="level-item">
                <a href="https://www.youtube.com/channel/UCT48WYUE7S94SPTwTeljaRQ">Playlist</a>
              </div>
            </div>
          </div>
          <hr class="has-background-dark" style="padding: 0; margin: 0; height:1px" />
        </div>
      </nav>
    </div>
    <section class="section container">
      <slot />
    </section>
    <footer class="has-text-centered">
      <hr />
      <div class="section container" style="padding-top:1rem; padding-bottom:1rem">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="level is-mobile" style="margin-bottom: 1rem">
              <div class="level-left">
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading">AFTER ∞ iterations</p>
                    <p>Handcoded by Padam Sethia</p>
                  </div>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item">
                  <div class="has-text-right">
                    <p class="heading">SHAMELESS PLUG</p>
                    <a href="https://itminan.in">itminan.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

html,
body,
.button,
section,
nav,
.card,
.level {
  font-family: "Franklin Gothic", "Helvetica Neue", "Roboto Condensed",
    Helvetica, "Arial Narrow", Arial, sans-serif;
}

@font-face {
  font-family: "Source Serif Pro";
  src: url("../assets/fonts/SourceSerifPro-Regular.woff");
  font-display: swap;
}
@font-face {
  font-family: "Source Serif Pro Light";
  src: url("../assets/fonts/SourceSerifPro-Light.woff");
  font-display: swap;
}
@font-face {
  font-family: "Source Serif Pro Light Italic";
  src: url("../assets/fonts/SourceSerifPro-LightIt.otf");
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: "Source Serif Pro Italic";
  src: url("../assets/fonts/SourceSerifPro-It.otf");
  font-display: swap;
  font-weight: 400i;
}
@font-face {
  font-family: "Franklin Gothic";
  src: url("../assets/fonts/FranklinGothic-Medium.woff");
  font-display: swap;
}
.content {
  font-family: "Source Serif Pro", Georgia, serif !important;
}
.content blockquote {
  font-family: "Source Serif Pro Italic", serif !important;
  font-style: italic;
}

.has-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.has-equal-height .card-footer {
  margin-top: auto;
}

.card-x {
  border: 1px solid #eee;
  box-shadow: none !important;
}
</style>


