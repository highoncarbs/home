<template>
  <Layout>
    <div class="columns is-variable is-8">
      
      <div class="column is-6">
        <div class="content has-text-black is-size-6">
          <div>
            <p
              class="label is-size-3 has-text-medium has-text-black "
            >{{ $page.post.title }}</p>
            <p
              class="subtitle has-text-weight-bold has-text-grey is-size-6"
            >{{ getDateString($page.post.date).toUpperCase() }}</p>
            <!-- <article class="media box card-x">
              <figure class="media-left">
                <p class="image is-64x64 img-bordered">
                  <g-image class="is-rounded" src="~/assets/meme.jpg/" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-7 mb-0 pb-0 pt-1 mono">JOTTED BY</p>
                  <p class="is-size-4 has-text-weight-medium">Padam Sethia</p>
                </div>
              </div>
              <div class="media-right pt-2">
                <a href="https://twitter.com/highoncaarbs" class="button is-info">Let's Chat?</a>
              </div>
            </article> -->

            <div>
              <p class="heading">SHARE</p>
              <div class>
                <a
                  :href="'https://twitter.com/intent/tweet?&url='+'https://highoncarbs.ml'+$page.post.path"
                  class
                  style="margin-right:5px"
                >Twitter</a>
                <a
                  :href="'http://www.facebook.com/sharer/sharer.php?u='+'https://highoncarbs.ml'+$page.post.path"
                  class
                >Facebook</a>
              </div>
            </div>
            <hr />
          </div>
          <div class="content has-text-serif">

          <div v-html="$page.post.content" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    content
    date
    tags
  }
}
</page-query>

<script>
import Read from "~/layouts/Read.vue";

export default {
  components: {
    Read,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  methods: {
    getDateString(val) {
      let temp = new Date(String(val));
      return temp.toLocaleDateString("default", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>
