<template>
  <Layout>
    <div class="columns is-centered">
      <div class="column is-8">
        <h2 class="title has-text-black is-size-1">{{ $page.post.title }}</h2>

        <p
          class="subtitle  has-text-grey is-size-6"
        >{{ getDateString($page.post.date).toUpperCase() }}</p>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <a href="https://twitter.com/highoncaarbs" class="button is-info">Let's Chat?</a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div>
                <p class="heading">SHARE</p>
                <div class="">
                  <a :href="'https://twitter.com/intent/tweet?&url='+'https://highoncarbs.ml'+$page.post.path" class="" style="margin-right:5px">Twitter</a>
                  <a :href="'http://www.facebook.com/sharer/sharer.php?u='+'https://highoncarbs.ml'+$page.post.path" class="">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="content has-text-black" >
          <div v-html="$page.post.content" />
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
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    getDateString(val) {
      let temp = new Date(String(val));
      return temp.toLocaleDateString("default", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
    }
  }
};
</script>
