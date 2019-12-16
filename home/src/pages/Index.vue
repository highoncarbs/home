<template>
  <Layout class="sans">
    <br />
    <h2 style="margin-top:3rem; " class="is-size-5">
      Projects
      <span class="has-text-grey">/ Selected</span>
    </h2>
    <div class="columns is-size-5">
      <div class="column is-3">
        <div style="margin-top:2rem;">
          <p class="has-text-weight-bold">Noice</p>

          <p class="serif">
            Helps Indian MSE's to develop
            new products* rapidly
          </p>
          <hr />
          <a href="https://github.com/padamsethia/noice" class="is-size-6 is-text">View Project</a>
        </div>
        <div style="margin-top:2rem;">
          <p class="has-text-weight-bold">Automato</p>

          <p
            class="serif"
          >Automate marketing with Whatsapp , built in scrapers for Google and Justdial</p>
          <hr />
          <a href="https://github.com/padamsethia/automato" class="is-size-6 is-text">View Project</a>
        </div>
      </div>
      <div class="column is-3">
        <div style="margin-top:2rem;">
          <p class="has-text-weight-bold">Hafta</p>

          <p class="serif">Simple Payroll & HR management for Indian MSE's</p>
          <hr />
          <a href="https://github.com/padamsethia/hafta" class="is-size-6 is-text">View Project</a>
        </div>
        <div style="margin-top:2rem;">
          <p class="has-text-weight-bold">Shorty</p>

          <p class="serif">Url shortner service with anayltics and tracking for marketing campaigns</p>
          <hr />
          <a href="https://github.com/padamsethia/shorty" class="is-size-6 is-text">View Project</a>
        </div>
      </div>
    </div>
    <h2 style="margin-top:3rem; " class="is-size-5">
      Notes
      <span class="has-text-grey">/ Selected</span>
    </h2>
    <div class="columns is-size-5">
      <div class="column is-7">
        <div v-for="post in $page.posts.edges" :key="post.id" style="margin-top:2rem;">
          <g-link :to="post.node.path">
            <p class="title is-size-5">{{ post.node.title }}</p>
            <p class="subtitle has-text-weight-normal is-size-6">{{ post.node.date }} <span v-if="post.node.tags"> - <span class="is-warning tag has-text-weight-semibold" v-html="post.node.tags"  /> </span> </p>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(limit: 5) {
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
    title: 'Home'
  }
}


</script>

<style>
hr {
  margin: 0.5rem 0 0.5rem 0 !important;
  padding: 0 !important;
}
</style>