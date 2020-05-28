<template>
  <Layout>
    <div class="columns is-centered">
      <div class="column is-8">
        <h2
          class="has-text-weight-light is-size-1-mobile has-text-uppercase title has-text-black serif-light"
          style="font-size: 4rem;"
        >
          I juggle with chars & pixels to make
          <span class="serif-it"
          >Indian SMB's</span> efficent AF!
        </h2>
        <hr />

        <h2
          class="subtitle has-text-weight-normal is-size-2 is-size-3-mobile"
        >Currently building Production & Inventory ERP System for Textile manufacturers</h2>

        <a href="https://twitter.com/highoncaarbs" class="button is-info">Discuss on Twitter</a>
        <hr />
        <br />

        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <h2 class="title is-size-1 has-text-centered has-text-black">Work</h2>
            </div>
          </div>
          <div class="level-right">
            <g-link to="/work" class="level-item">
              <button class="button is-text has-text-link">View All</button>
            </g-link>
          </div>
        </div>
        <br />
        <div class="columns is-multiline">
          <div class="column is-4-fullhd is-6-desktop" v-for="item in work" :key="item.title">
            <div class="card card-x has-equal-height">
              <div class="card-content">
                <p class="modern is-size-4 has-text-black">{{ item.title}}</p>
                <p class="tag is-info is-light">{{item.tag}}</p>
                <br />
                <br />
                <p class="is-size-5 has-text-black">{{ item.desc }}</p>
              </div>
              <div class="card-footer" style="padding: 1rem">
                <a :href="item.link" class="button is-text has-text-link is-fullwidth">
                  <span>View Project</span>
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
              <h2 class="title is-size-1 has-text-black">Journal</h2>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <g-link to="/notes" class="button is-text has-text-link">View All</g-link>
            </div>
          </div>
        </div>
        <div v-for="post in $page.posts.edges.slice(0 , 5)" :key="post.id" style="margin-top:2rem;">
          <g-link :to="post.node.path" v-if="post.node.tags != 'draftd'">
            <p class="title has-text-weight-medium is-size-4">{{ post.node.title }}</p>
            <p class="subtitle has-text-grey is-size-6">
              {{ getDateString(post.node.date).toUpperCase() }}
              <span
                v-if="post.node.tags == 'DRAFT'"
              >
                -
                <span class="is-warning tag has-text-weight-semibold" v-html="post.node.tags" />
              </span>
            </p>
          </g-link>
        </div>
      </div>
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
  data() {
    return {
      work: [
        {
          title: "Automato",
          tag: "OPENSOURCE",
          desc:
            " Marketing Campaigns via Whatsapp & SMS. With built in scrapers for Google & B2B Portals.",
          link: "https://github.com/highoncarbs/automato"
        },
        {
          title: "Hafta",
          tag: "OPENSOURCE",
          desc: "Payroll & HR for Indian SMBs with flexible tax deductions",
          link: "https://github.com/highoncarbs/hafta"
        },
        {
          title: "Storefront",
          tag: "OPENSOURCE",
          desc:
            "Shopify Product upload on steroids. Bulk product uploads to your shopify store",
          link: "https://github.com/highoncarbs/storefront"
        },
        {
          title: "Shorty",
          tag: "OPENSOURCE",
          desc:
            "URL Shorter with analytics . Built as an alternative to bit.ly for marketing campaigns.",
          link: "https://github.com/highoncarbs/shorty"
        }
      ]
    };
  },
  methods: {
    getDateString(val) {
      let temp = new Date(String(val));
      return temp.toDateString();
    }
  }
};
</script>
