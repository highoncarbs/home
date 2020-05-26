<template>
  <Layout>
    <h2 class="title is-size-1-mobile has-text-weight-medium title-text has-text-black">
      Notes
      <span class="title-serif">& Scribbles</span>
    </h2>
    <hr />

    <div v-for="post in $page.posts.edges" :key="post.id" style="margin-top:2rem;">
      <g-link :to="post.node.path" v-if="post.node.tags != 'draftd'">
        <p class="title modern has-text-weight-medium is-size-4">{{ post.node.title }}</p>
        <p class="subtitle has-text-weight-bold has-text-grey is-size-6">
          {{ getDateString(post.node.date).toUpperCase() }}
          <span v-if="post.node.tags == 'DRAFT'">
            -
            <span class="is-warning tag has-text-weight-semibold" v-html="post.node.tags" />
          </span>
        </p>
      </g-link>
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
    title: "Notes"
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
