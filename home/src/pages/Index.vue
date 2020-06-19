<template>
  <Layout>
    <div class="columns is-centered has-text-centered">
      <div class="column is-half mt-6">
        <br />
        <h1 class="title has-text-white">
          Building open-source tools for
          <span class>Indian businesses</span> to make them efficent AF.
        </h1>
        <br />
        <label for class="label has-text-grey-dark">CURRENTLY</label>
        <h2
          class="title has-text-weight-normal has-text-white is-size-3-mobile"
        >Working on Inventory & Production management for textile business based in India</h2>

        <br />
        <g-link to="/notes" class="has-text-weight-bold is-size-6 has-text-grey">🤷‍♀️ Read my random thoughts ↗</g-link>
        <hr style="height:0.5px; background-color:darkslategray" />
        <br />
        <label for class="label has-text-grey-dark">SELECTED WORK</label>
        <div v-for="item in work" :key="item.title">
          <p class="title is-size-4 has-text-white">
            {{ item.title}}
            <span class="ml-3 tag is-dark has-text-grey-light">{{item.tag}}</span>
          </p>

          <br />
          <p class="is-size-3 has-text-white">{{ item.desc }}</p>
          <br />
          <a :href="item.link" class="has-text-success is-size-7 has-text-weight-semibold">
            <span>View Project →</span>
          </a>
          <br />
          <hr style="height:0.5px; background-color:darkslategray" />
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