<template>
  <Layout>
    <!-- <small class="modern has-text-grey tag" style="margin-bottom: 10px">HIGHONCARBS / PADAM SETHIA</small> -->
    <h2
      class="title is-size-1-mobile has-text-weight-medium title-text has-text-black"
    >I juggle with chars & pixels to make Indian MSMEs efficent AF!</h2>
    <hr />
    <h2
      class="title title-serif is-size-2 has-text-grey"
    >Currently building program for production & inventory tracking for textile manufacturers</h2>

    <a href="https://twitter.com/highoncaarbs" class="button is-info">
      <span class="has-icon">Discuss on Twitter</span>
      <ClientOnly>
      <box-icon name="twitter" color="white" type="logo"></box-icon></ClientOnly>
    </a>
    <hr />
    <br />

    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <h2 class="title is-size-1 is-size-2-mobile has-text-weight-medium">Projects</h2>
        </div>
        <g-link to="/work" class="level-item">
          <button class="button is-text has-text-grey">
            <span class="has-icon">View All</span>
            <ClientOnly>
            <box-icon type="solid" name="chevron-right-circle" color="grey"></box-icon></ClientOnly>
          </button>
        </g-link>
      </div>
    </div>
    <br />
    <div class="columns is-multiline">
      <div class="column is-4-fullhd is-6-desktop">
        <div class="card box-pr has-equal-height">
          <div class="card-content">
            <p class="modern is-size-4 has-text-black">AUTOMATO</p>
            <p class="tag is-info is-light">OPENSOURCE</p>
            <br />
            <br />
            <p class="is-size-5">
              Marketing Campaigns
              via Whatsapp.
              With built in scrapers* for Google & B2B Portals.
            </p>
          </div>
          <div class="card-footer" style="padding: 1rem">
            <a href="https://github.com/highoncarbs/automato" class="button is-fullwidth">
              <span>View Project</span>
              <ClientOnly>
              <box-icon type="solid" name="right-arrow-alt"></box-icon></ClientOnly>
            </a>
          </div>
        </div>
      </div>
      <div class="column is-4-fullhd is-6-desktop">
        <div class="card box-pr has-equal-height">
          <div class="card-content">
            <p class="modern is-size-4 has-text-black">HAFTA</p>
            <p class="tag is-info is-light">OPENSOURCE</p>
            <br />
            <br />
            <p class="is-size-5">Payroll & HR for MSME's</p>
          </div>
          <div class="card-footer" style="padding: 1rem">
            <a href="https://github.com/highoncarbs/hafta" class="button is-fullwidth">
              <span>View Project</span>
              <ClientOnly>
              <box-icon type="solid" name="right-arrow-alt"></box-icon></ClientOnly>
            </a>
          </div>
        </div>
      </div>
      <div class="column is-4-fullhd is-6-desktop">
        <div class="card box-pr has-equal-height">
          <div class="card-content">
            <p class="modern is-size-4 has-text-black">STOREFRONT</p>
            <p class="tag is-info is-light">OPENSOURCE</p>
            <br />
            <br />
            <p
              class="is-size-5"
            >Shopify Product upload on steroids. Bulk product uploads to your shopify store.</p>
          </div>
          <div class="card-footer" style="padding: 1rem">
            <a href="https://github.com/highoncarbs/storefront" class="button is-fullwidth">
              <span>View Project</span>
              <ClientOnly>
              <box-icon type="solid" name="right-arrow-alt"></box-icon></ClientOnly>
            </a>
          </div>
        </div>
      </div>
      <div class="column is-4-fullhd is-6-desktop">
        <div class="card box-pr has-equal-height">
          <div class="card-content">
            <p class="modern is-size-4 has-text-black">SHORTY</p>
            <p class="tag is-info is-light">OPENSOURCE</p>
            <br />
            <br />
            <p class="is-size-5">URL Shorter & analytics tool . Built as an alternative to bit.ly.</p>
          </div>
          <div class="card-footer" style="padding: 1rem">
            <a href="https://github.com/highoncarbs/shorty" class="button is-fullwidth">
              <span>View Project</span>
              <ClientOnly>
              <box-icon type="solid" name="right-arrow-alt"></box-icon></ClientOnly>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <h2 class="title is-size-1 is-size-2-mobile has-text-weight-medium">Notes</h2>
        </div>
        <div class="level-item">
          <g-link to="/notes" class="button is-text has-text-grey">
            <span class="has-icon">View All</span>
            <ClientOnly>
            <box-icon type="solid" name="chevron-right-circle" color="grey"></box-icon></ClientOnly>
          </g-link>
        </div>
      </div>
    </div>
    <div v-for="post in $page.posts.edges.slice(0 , 5)" :key="post.id" style="margin-top:2rem;">
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
  posts: allPost{
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
    title: "Home"
  },
  methods: {
    getDateString(val) {
      let temp = new Date(String(val));
      return temp.toDateString();
    }
  }
};
</script>

<style>
hr {
  margin: 0.5rem 0 0.5rem 0 !important;
  padding: 0 !important;
}
</style>