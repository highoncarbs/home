<template>
  <Layout>
    <div class="columns is-mobile is-centered has-text-centered">
      <div class="column is-6-desktop mt-6">
        <div class>
          <h1 class="title has-text-white">Work</h1>
          <p class="has-text-light">Random thougts in no particular order</p>
          <br />
          <div>
            <p class="heading has-text-grey">FOLLOW</p>
            <div class>
              <a
                :href="'https://github.com/highoncarbs'"
                class="tag is-medium is-dark"
                style="margin-right:5px"
              >@highoncarbs</a>
            </div>
          </div>
        </div>
        <br />
        <hr style="height: 0.5px ;" class="has-background-grey-dark" />
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
        <br>
      </div>
    </div>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Work"
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
  }
};
</script>
<style scoped>
html {
  background: #0a0a0a;
}
</style>