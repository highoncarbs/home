<template>
  <Layout>
    <div class="columns is-centered">
      <div class="column is-8-tablet">
        <h2 class="title has-text-black has-text-centered" style="font-size: 4rem">Journal</h2>
        <hr />

        <div v-for="post in $page.posts.edges" :key="post.id" style="margin-top:2rem;">
          <g-link :to="post.node.path" v-if="post.node.tags != 'draftd'">
            <p class="heading has-text-centered has-text-grey is-size-6">
              {{ getDateString(post.node.date).toUpperCase() }}
              <span
                v-if="post.node.tags == 'DRAFT'"
              >
                -
                <span class="is-warning tag has-text-weight-semibold" v-html="post.node.tags" />
              </span>
            </p>
            <p class="title has-text-centered has-text-weight-medium is-size-4">{{ post.node.title }}</p>
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
