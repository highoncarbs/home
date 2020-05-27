<template>
  <Layout>
    <div class="columns is-centered">
      <div class="column is-8">
        <h2 class="title has-text-black has-text-centered" style="font-size: 4rem">
          Work
          <span class="has-text-grey">+</span> Projects
        </h2>

        <hr />
        <br />
        <!-- <h2 class="title is-size-1 is-size-2-mobile has-text-weight-medium has-text-grey">Selected</h2> -->

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
