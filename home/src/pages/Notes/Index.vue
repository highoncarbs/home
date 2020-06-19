<template>
  <Read>
    <div class="columns is-mobile is-centered">
      <div class="column is-6-desktop mt-6 has-text-centered">
        <div class="">
          <h1 class="title">Journal</h1>
          <p class>Random thougts in no particular order</p>
          <p class>Usually scribbles about Programming, Technology, SMBs.</p>
          <br />
          <div>
            <p class="heading">FOLLOW</p>
            <div class>
              <a
                :href="'https://twitter.com/highoncaarbs'"
                class="tag is-medium is-info is-light"
                style="margin-right:5px"
              >@highoncaarbs</a>
            </div>
          </div>
        </div>
        <br />
        <div v-for="post in $page.posts.edges" :key="post.id" style="margin-top:2rem;">
          <g-link :to="post.node.path" v-if="post.node.tags != 'draftd'">
            <p class="label has-text-grey is-size-6">
              {{ getDateString(post.node.date).toUpperCase() }}
              <span
                v-if="post.node.tags == 'DRAFT'"
              >
                
                <span class="is-warning tag has-text-weight-semibold ml-2" v-html="post.node.tags" />
              </span>
            </p>
            <p class="title has-text-weight-medium is-size-4">{{ post.node.title }}</p>
          </g-link>
        </div>
      </div>
    </div>
  </Read>
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
import Read from "~/layouts/Read.vue";

export default {
  components: {
    Read
  },
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
