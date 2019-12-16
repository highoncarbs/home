<template>
  <Layout class="sans">
    <br />
    <div class="columns is-size-5">
      <div class="column is-7">
        <div style="margin-top:2rem;">
          <p class="title is-size-5">{{ $page.post.title }}</p>
          <p class="subtitle has-text-weight-normal is-size-6">{{ $page.post.date }} <span v-if="$page.post.tags"> - <span class="is-warning tag has-text-weight-semibold" v-html="$page.post.tags"  /> </span> </p>
        </div>
        <br />
        <p class="serif" v-html="$page.post.content" />
      </div>
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
    }
  }
}
</script>