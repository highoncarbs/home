<template>
  <Layout>
    <div class="columns">
      <div class="column is-10">
        <div class>
          <p class>Random thougts in no particular order</p>
          <p class>Usually scribbles about Programming, Technology, SMBs.</p>
        </div>
        <table class="table is-fullwidth mt-6">
          <colgroup>
            <col width="10%" />
            <col width="60%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th class=" has-text-grey-light has-text-mono has-text-weight-normal">NO.</th>
              <th class="has-text-grey-light  has-text-mono has-text-weight-normal">TITLE</th>
              <th class="has-text-grey-light  has-text-mono has-text-weight-normal">DATE</th>
              <th class="has-text-grey-light  has-text-mono has-text-weight-normal">TAGGED</th>
            </tr>
          </thead>
          <tbody>
            <tr class="is-size-6 blog-link"  style="cursor:pointer;padding:2em 1rem;" @click="$router.push(post.node.path)" v-for="(post,idx) in $page.posts.edges" :key="idx">
              <td>{{idx+1}}</td>
              <td >{{post.node.title}}</td>
              <td>
                {{ getDateString(post.node.date)}}</td>
              <td>
                                <span class="has-text-mono is-italic has-text-grey">
                  
                {{post.node.tags.toUpperCase()}}
                </span>

                </td>
            </tr>
          </tbody>
        </table>
      
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
import Read from "~/layouts/Read.vue";

export default {
  components: {
    Read,
  },
  metaInfo: {
    title: "Journal",
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

<style>
.table{
  border: none !important;
}
</style>