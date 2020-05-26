<template>
  <Layout>
    <h2 class="title modern is-size-2-mobile title-text has-text-black">{{ $page.post.title }}</h2>
    <p
      class="subtitle has-text-weight-bold has-text-grey is-size-6"
    >{{ getDateString($page.post.date).toUpperCase() }}</p>
    <a href="https://twitter.com/highoncaarbs" class="button is-info">
      <span class="has-icon">Let's Chat?</span>
      <ClientOnly>
      <box-icon name="twitter" color="white" type="logo"></box-icon></ClientOnly>
    </a>
    <hr />
    <br>
    <div class="content serif is-size-5 has-text-black">
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
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
<style scoped>
.serif {
  font-family: "Source Serif Pro" !important;
}
</style>
