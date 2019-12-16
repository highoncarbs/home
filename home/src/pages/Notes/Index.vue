<template>
  <Layout class="sans">
    <br />

    <h2 style="margin-top:3rem; " class="is-size-5">
      Notes
      <span class="has-text-grey">/ All</span>
    </h2>
    <div class="columns is-size-5">
      <div class="column is-7">
        <div v-for="post in $page.posts.edges" :key="post.id" style="margin-top:2rem;">
          <g-link :to="post.node.path">
          <p class="title is-size-5" >{{ post.node.title }}</p>
          <p class="subtitle has-text-weight-normal is-size-6">{{ post.node.date }} <span v-if="post.node.tags == 'DRAFT'"> - <span class="is-warning tag has-text-weight-semibold" v-html="post.node.tags"  /> </span> </p>
        </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date
        tags
      }
    }
  }
 
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Notes'
  }
}
</script>
