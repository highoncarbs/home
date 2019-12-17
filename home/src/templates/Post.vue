<template>
  <Layout class="sans">
    <br />
    <div class="columns ">
      <div class="column is-7 ">
        <div style="margin-top:2rem;">
          <p class="title is-size-1 has-text-weight-bold">{{ $page.post.title }}</p>

          <p class="subtitle has-text-weight-normal has-text-grey is-size-6">
            {{ getDateString($page.post.date) }}
            <span v-if="$page.post.tags">
              -
              <span class="is-warning tag has-text-weight-semibold" v-html="$page.post.tags" />
            </span>
          </p>
        </div>
        <br />
        <div class="serif" v-html="$page.post.content" />
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
  },
   methods : {
      getDateString(val){
          let temp = new Date(String(val))
          return temp.toDateString()
      }
  }
}
</script>
