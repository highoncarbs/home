<template>
  <div>
    <section class="section is-paddingless-mobile is-marginless-mobile" id="top">
      <div class="columns">
        <div
          class="column is-hidden-mobile is-2-desktop is-2-tablet is-size-4 has-text-black"
          id="sidebar"
        >
          <ul>
            <li>
              <g-link to="/" class="modern has-text-black">Home</g-link>
            </li>
            <li>
              <g-link to="/work" class="modern has-text-black">Work</g-link>
            </li>
            <li>
              <g-link to="/notes" class="modern has-text-black">Notes</g-link>
            </li>
          </ul>

          <br />
          <a href="#radio">
            <div class="card box-x">
              <div class="card-content" style="padding: 0.75rem 1rem">
                <p class="title has-text-black is-size-5-tablet is-size-3-desktop">
                  PLAY
                  <br />MY
                  <br />JAM
                </p>
              </div>
              <footer class="card-footer" style="border-top: 0;">
                <p
                  class="card-footer-item has-background-black has-text-white"
                  style="border-radius:0 0 10px 9px; padding: 0.5rem 0rem 0.3rem 0;"
                >
                <ClientOnly>
                  <box-icon name="play" color="white"></box-icon></ClientOnly>
                  <span class="has-icon-left modern is-size-5-desktop is-size-6-tablet">PLAY</span>
                </p>
              </footer>
            </div>
          </a>
          <br />

          <a href="https://itminan.in">
            <div class="card box-xy">
              <div class="card-content" style="padding: 0.75rem 1rem">
                <p
                  class="is-uppercase is-size-7-tablet title-serif has-text-white is-size-6-desktop has-text-centered has-text-white"
                >
                  HANDMADE
                  <br />PRODUCTS
                </p>

                <figure class="image has-image-centered is-4by3" style=" margin-top:1rem">
                  <g-image src="~/assets/itminan-logo.svg" alt class="filter-white" />
                </figure>
              </div>
              <footer class="card-footer" style="border-top: 0; margin-top:1rem">
                <p
                  class="card-footer-item"
                  style="border-radius:0 0 10px 9px; padding: 0.5rem 0rem 0.3rem 0; background-color:#E9B4B0;"
                >
                <ClientOnly>
                  <box-icon name="shopping-bag-alt" type="solid" flip="horizontal" color="#000"></box-icon></ClientOnly>
                  <span
                    class="has-icon-left modern is-size-5-desktop is-size-6-tablet has-text-black"
                  >SHOP</span>
                </p>
              </footer>
            </div>
          </a>
          <br />
          <br />
          <ul>
            <li>
              <a href="https://github.com/padamsethia" class="modern has-text-grey">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/highoncaarbs" class="modern has-text-grey">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com/highoncarbs" class="modern has-text-grey">Instagram</a>
            </li>
            <li>
              <a href="https://dribbble.com/highoncarbs" class="modern has-text-grey">Dribbble</a>
            </li>
            <li>
              <a href="mailto:padamsethia5@gmail.com" class="modern has-text-grey">Email</a>
            </li>
          </ul>
        </div>
        <div class="column is-hidden-tablet is-2 is-size-5 has-text-black">
          <div class="level is-mobile is-is-paddingless is-marginless">
            <div class="level-left">
              <g-link to="/" class="level-item has-text-black modern">Home</g-link>
              <g-link to="/work" class="level-item has-text-black modern">Work</g-link>
              <g-link to="/notes" class="level-item has-text-black modern">Notes</g-link>
            </div>
          </div>
          <hr />
          <div class="level is-mobile is-size-6 is-paddingless is-marginless">
            <div class="level-left">
              <a
                href="https://github.com/highoncarbs"
                class="has-text-grey-light level-item modern"
              >Github</a>
              <a
                href="https://twitter.com/highoncaarbs"
                class="has-text-grey-light level-item modern"
              >Twitter</a>
              <a
                href="https://instagram.com/highoncarbs"
                class="has-text-grey-light level-item modern"
              >Instagram</a>
              <a
                href="https://dribbble.com/highoncarbs"
                class="has-text-grey-light level-item modern"
              >Dribbble</a>
              <a
                href="mailto:padamsethia5@gmail.com"
                class="has-text-grey-light level-item modern"
              >Email</a>
            </div>
          </div>
          <br />
          <div class="buttons">
            <a href="#radio" class="button is-black modern">
              <ClientOnly>
              <box-icon name="play" color="white"></box-icon></ClientOnly>
              <span style=" font-family: 'Fivo Sans Modern' " class="has-icon-left">PLAY MY JAM</span>
            </a>
            <a href="https://itminan.in" class="button modern" style="background-color:#E9B4B0;">
            <ClientOnly>  <box-icon name="shopping-bag-alt" type="solid" flip="horizontal" color="#000"></box-icon></ClientOnly>
              <span style=" font-family: 'Fivo Sans Modern' " class="has-icon-left">SHOP</span>
            </a>
          </div>

          <br />
        </div>
        <div class="sans column is-6-fullhd is-8-desktop is-offset-1-tablet">
          <slot />
        </div>
      </div>

      <!-- <slot /> -->
    </section>
    <footer
      class="has-background-black footer"
      id="radio"
      style="padding-bottom: 1rem; border-radius: 10px 10px 0 0 "
    >
      <div class="columns">
        <div class="column is-2">
          <a
            href="https://www.youtube.com/playlist?list=PL-FOM5JskLGQ0WuEQIJq9kDhhuCxS2fDN"
            class="button is-hidden-tablet is-white modern"
          >
            <ClientOnly><box-icon name="plus-circle" color="black"></box-icon></ClientOnly>
            <span style=" font-family: 'Fivo Sans Modern' " class="has-icon-left">FOLLOW</span>
          </a>
          <a href="https://www.youtube.com/playlist?list=PL-FOM5JskLGQ0WuEQIJq9kDhhuCxS2fDN">
            <div class="card box-xyz is-hidden-mobile">
              <div class="card-content" style="padding: 0.75rem 1rem">
                <p class="title has-text-white is-size-5-tablet is-size-3-desktop">
                  MY
                  <br />JAM
                </p>
              </div>
              <footer class="card-footer" style="border-top: 0; margin-top:1rem">
                <p
                  class="card-footer-item"
                  style="border-radius:0 0 10px 9px; padding: 0.5rem 0rem 0.3rem 0; background-color:#fff;"
                >
                 <ClientOnly> <box-icon name="plus-circle" type="solid" flip="horizontal" color="#000"></box-icon></ClientOnly>
                  <span
                    class="has-icon-left modern is-size-5-desktop is-size-7-tablet has-text-black"
                  >FOLLOW</span>
                </p>
              </footer>
            </div>
          </a>
        </div>
        <div class="column sans is-6-fullhd is-8-desktop is-offset-1-tablet">
          <h1 class="is-size-0 is-size-1-mobile modern is-uppercase has-text-white">NOW PLAYING</h1>
          <p class="has-text-white title">{{music_data[curr_idx].title}}</p>
          <p class="subtitle">{{music_data[curr_idx].desc}}</p>
          <div
            class="columns"
            style="border: solid 4px rgba(225,225,225,0.15); border-radius: 15px"
          >
            <div class="column" style>
              <figure class="image is-1by1">
                <iframe
                  class="has-ratio"
                  id="existing-player"
                  :src="'https://www.youtube.com/embed/'+music_data[curr_idx].vid+'?enablejsapi=1'"
                  frameborder="0"
                  style="border-left: solid 1px rgba(225,225,225,0.15); border-radius: 12px"
                ></iframe>
              </figure>
            </div>
            <div class="column">
              <div class="style-4" style="height: 440px; overflow-y: scroll;">
                <div v-for="(  item , index) in music_data" :key="index">
                  <div class="has-text-white box-hover" @click="updatePlayer(index)">
                    <div id="content-grid">
                      <div>
                        <ClientOnly>
                        <box-icon
                          color="#fff"
                          style="margin:15px 0 0 0 "
                          v-if="music_data[curr_idx].title == item.title"
                          name="music"
                        ></box-icon>
                        <box-icon
                          style="margin:15px 0 0 0 "
                          v-else
                          name="play"
                          color="#fff"
                          type="solid"
                        ></box-icon>
                        </ClientOnly>
                        
                      </div>

                      <div>
                        <span class="is-size-5 has-text-weight-normal" v-html="item.title"></span>
                        <br />
                        <span class="is-size-6" v-html="item.desc"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <a class="button is-fullwidth modern is-white is-outlined">KEEP THE JAM ON</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p class="has-text-centered">
        <a @click="scrollToTop" class="has-text-grey">Rocket Launch ?</a>
      </p>
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
import axios from "axios";
export default {
  data() {
    return {
      player: null,
      music_data: [
        {
          title: "The Silence",
          desc: " Manchester Orchestra",
          vid: "8KfwXac4ftI"
        },
        {
          title: "Highway Houses",
          desc: " Pat LePoidevin",
          vid: "ylASx-naAfk"
        },
        {
          title: "Keep The Wolves Away",
          desc: " Uncle Lucius",
          vid: "-bATjVI0gNM"
        },
        { title: "A Different Age", desc: " Current Joys", vid: "3G5Conn-b2o" },
        { title: "All I've Ever Known", desc: " Bahamas", vid: "wNcz5AagtaU" },
        { title: "I’ll Still Have Me", desc: " Cyn", vid: "yBDaTpBmQiI" },
        { title: "Naturaleza", desc: " Danit ", vid: "clOM9DQB9ks" },
        {
          title: "Somebody Else (Alt Edit)",
          desc: " The 1975",
          vid: "STbSEQ5LpJg"
        },
        {
          title: "The Moonwolf Departure",
          desc: " Pat LePoidevin",
          vid: "VmkFWNkWf4o"
        },
        { title: "Get You The Moon", desc: " Kina ", vid: "JtN3eRbSHEM" },
        { title: "I Still Dream Of You", desc: " Kina ", vid: "enCxZEeEGf4" },
        {
          title: "Dead In The Water",
          desc: " James Gillespie",
          vid: "4sOurD35HAg"
        },
        {
          title: "Colour Me (Acoustic)",
          desc: " Juke Ross",
          vid: "8d8LM6zqVLo"
        },
        { title: "In My Head", desc: " Bedroom", vid: "S1KNYqEpI2w" },
        { title: "Hand Over Hand", desc: " Roland Faunte", vid: "Gm6hT2Bc-mk" },
        { title: "Grow As We Go", desc: " Ben Platt", vid: "KM38-goPJEU" },
        {
          title: "On Our Knees (feat. R.O)",
          desc: " Konoba ",
          vid: "NVKNpIjtew8"
        },
        { title: "Brave", desc: " Riley Pearce", vid: "4E0RPK-9k0M" },
        { title: "Circles", desc: " Riley Pearce", vid: "AzSHgONd3qE" },
        { title: "Cinnamon", desc: " Jome", vid: "KHTmaR9CYi4" },
        {
          title: "Don't Keep Driving",
          desc: " The Paper Kites",
          vid: "hiQUXYZw2KQ"
        },
        { title: "The Wisp Sings", desc: " Winter Aid", vid: "o-BbeLmOAYE" },
        { title: "In My Head", desc: " Peter Manos", vid: "5ZBKr4E4uBk" },
        {
          title: "A Soulmate Who Wasnt Meant to Be",
          desc: " Jess Benko",
          vid: "RwISVSxhjTc"
        },
        {
          title: "Lonely (feat. Yoe Mase)",
          desc: " Makutamusic",
          vid: "P51HC27bj5s"
        },
        { title: "Tú", desc: " maye", vid: "g-mh4JTOhVw" },
        { title: "Bare", desc: " WILDES ", vid: "TK_O0oXzfeM" },
        {
          title: "Sing of the Moon",
          desc: " The Collection",
          vid: "PfQije6qJFI"
        },
        { title: "Give Me Something", desc: " Seafret", vid: "mrTnr_h_wnc" },
        { title: "The Woods", desc: " Hollow Coves", vid: "qQ0egPxPKSI" },
        {
          title: "Caterpillar",
          desc: " Mountains of the Moon",
          vid: "k47TJon1C3Y"
        },
        { title: "Falling Down", desc: " Harrison Storm", vid: "HP0FfTVMpwg" },
        { title: "Sleeper", desc: " whenyoung", vid: "TBgCyJiCb6c" },
        {
          title: "You're the Last Thing on My Mind",
          desc: " Aron Wright",
          vid: "A-mWmWcHJI4"
        },
        { title: "Okinawa", desc: " 92914", vid: "uHUpuON1y08" }
      ],
      playevent: null,
      music_data_details: [],
      curr_idx: 0,
      new_play: 0,
      key: "AIzaSyA7nihagWxnELgHF_8kbdaWINckrPf_d7s",
      playlistId: "PLTYLI-PmZP8lcRp_kpVLOstEWFfyHgrxD",
      URL: "https://www.googleapis.com/youtube/v3/playlistItems",
      options: {
        part: "snippet",
        key: "AIzaSyA7nihagWxnELgHF_8kbdaWINckrPf_d7s",
        maxResults: 50,
        shuffle: true,

        playlistId: "PLTYLI-PmZP8lcRp_kpVLOstEWFfyHgrxD"
      },
      onpage: null,
      now_playing: null
    };
  },
  mounted() {
    this.onpage = this.$route;

    this.now_playing = this.music_data[0];
  },
  methods: {
    scrollToTop() {
      if (process.isClient) {
        window.scrollTo(0, 0);
      }
    },
    onPlayerReady(event) {
      if (this.new_play != 0) {
        this.player.playVideo();
      }
    },

    updatePlayer(index) {
      this.curr_idx = index;
      this.new_play = 1;
      this.player.loadVideoById({ videoId: this.music_data[index].vid });
      if (this.player && typeof this.player.playVideo === "function") {
        setTimeout(this.player.playVideo(), 1000);
      }
    },
    getCurrent() {
      return music_data.filter(item => item.vid === vid);
    },
    onPlayerStateChange(event) {
      if (event.data === 0) {
        this.new_play = 1;
        this.curr_idx += 1;
        // console.log(this.music_data[this.curr_idx].vid);
        this.player.loadVideoById(this.music_data[this.curr_idx].vid);
        event.target.playVideo();
      }
    },
    // loadVids() {
    //   const options = {
    //     part: "snippet",
    //     key: "AIzaSyA7nihagWxnELgHF_8kbdaWINckrPf_d7s",
    //     maxResults: 50,
    //     shuffle: true,

    //     playlistId: "PLTYLI-PmZP8lcRp_kpVLOstEWFfyHgrxD"
    //   };
    //   let self = this;
    //   self.mainVid(this.music_data[0].vid);
    //   // self.resultsLoop(data);
    //   // axios.get(this.URL, { 'data' : options}).then( function(data) {
    //   //   var id = data.items[0].snippet.resourceId.videoId;
    //   // });
    // },
    mainVid(id) {
      this.player = new YT.Player("existing-player", {
        height: "200",
        width: "200",
        videoId: id,
        autoplay: true,
        host: "https://www.youtube.com",
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    }
    // resultsLoop(data) {
    //   let self = this;
    //   data.items.forEach(function(item, index) {
    //     var title = item.snippet.title;
    //     var desc = item.snippet.description
    //       .substring(0, 100)
    //       .split("\n\n")[1]
    //       .split("·")[1];
    //     var vid = item.snippet.resourceId.videoId;

    //     self.music_data.push({ title: title, desc: desc, vid: vid });
    //   });
    // }
  }
};
</script>
<style>
@font-face {
  font-family: Fivo Sans;
  src: url("../assets/fonts/FivoSans-Regular.woff");
  font-weight: normal;
}
@font-face {
  font-family: Fivo Sans Modern;
  src: url("../assets/fonts/FivoSansModern-Medium.woff");
  font-weight: bold;
}
@font-face {
  font-family: Source Serif Pro;
  src: url("../assets/fonts/SourceSerifPro-Regular.woff");
  font-weight: normal;
}
@font-face {
  font-family: Source Serif Pro;
  src: url("../assets/fonts/SourceSerifPro-Light.woff");
  font-weight: 300;
}

html,
body {
  font-family: "Fivo Sans" !important;
}

.sans {
  font-family: "Fivo Sans";
}
* > .content {
  font-family: "Source Serif Pro" !important;
}

.style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555555;
}

.style-4::-webkit-scrollbar {
  width: 10px;
  background-color: #0e0e0e;
}

.style-4::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 2px solid #555555;
}

#sidebar {
  font-family: "Fivo Sans Modern";
}

.title {
  font-family: "Fivo Sans Modern";
  /* font-weight: 00 !important; */
}

.modern {
  font-family: "Fivo Sans Modern", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500 !important;
}
.title-serif {
  font-family: "Source Serif Pro", Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif;
  font-weight: 300 !important;
}

.has-icon {
  padding-right: 1rem;
}

.has-icon-left {
  padding-left: 1rem;
}

.button {
  font-family: "Fivo Sans" !important;
}

.is-size-0 {
  font-size: 4rem !important;
}

.box-x {
  width: 150px;
  border-radius: 10px;
  border: 0.5px solid #000;
  box-shadow: none !important;
}
.filter-white {
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(33deg)
    brightness(103%) contrast(101%);
}
.box-xy {
  width: 150px;
  border-radius: 10px;
  border: none !important;
  box-shadow: none !important;
  background-color: #a41e16 !important;
}
.box-xyz {
  width: 150px;
  border-radius: 10px;
  border: 0.5px solid #fff;
  box-shadow: none !important;
  background-color: black !important;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.box-pr {
  /* background-color: #000 !important; */
  border: 1px solid lightgrey;
  box-shadow: none !important;
  border-radius: 10px !important;
}

.box-pr img {
  border-radius: 7px !important;
}

#video {
  grid-area: a;
}

#video-text {
  grid-area: c;
}

#icon {
  grid-area: q;
}

#dd {
  grid-area: r;
}

#content-grid:hover {
  text-decoration: underline;
  cursor: pointer;
}

#playlist {
  grid-area: b;
}

#grid {
  display: grid;
  grid-template-areas:
    "a b "
    "c b";
}

#content-grid {
  display: grid;
  grid-template-columns: 20px repeat(1, 1fr);
  column-gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 770px) {
  #grid {
    grid-template-areas:
      "a c"
      "b b";
    row-gap: 20px;
  }
}

.has-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.has-equal-height .card-footer {
  margin-top: auto;
}
.box-hover {
  padding: 15px 10px 0px 10px;
  /* border-bottom: 0.5px solid gray ; */
  display: block;
  cursor: pointer;
  /* transition: 0.2s all ; */
  /* border-radius: 5px */
}

#radio {
  /* border: 1px solid #fefefe; */
  /* padding: 1rem 1rem 2rem 2rem; */
  border-radius: 10px;
}
.box-hover:hover {
  /* border-bottom: 0.5px solid #eee ; */
  padding: 15px 10px 00px 10px;
  display: block;
  /* box-shadow: 0 2px 7px #0e0e0e; */
  border: 0.5px solid #eee;
  border-radius: 10px;
}
</style>


