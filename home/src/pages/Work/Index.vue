<template>
  <Layout>
    <div class="project-card">
      <p class="has-text-mono  subtitle has-text-grey-light has-text-weight-semibold is-size-6">
        <span class="has-text-mono  is-rounded has-text-link mr-3">ACTIVE --</span> NEEDS AN UPGRADE SOON
      </p>
      <p class="title is-size-1 has-text-serif has-text-weight-medium has-text-black">
        Easy
        <span class="has-text-sans">Marketing</span> with
        <br />
        <span class="has-text-sans" style="padding: 0 0.5rem;border-bottom:2px solid black">Automato</span>
        for
        <span class="has-text-sans">Indian SMB's</span>
      </p>
      <p
        class="is-size-5"
      >Market to your cusomters using Whatsapp , SMS and Email ( Coming Very Soon )</p>
      <br />
      <a href class="is-black has-text-weight-medium">Go to Project →</a>
    </div>
    <div class="project-card mt-6">
      <p class="subtitle has-text-grey-light has-text-weight-semibold is-size-6">
        <span class="is-rounded tag is-success mr-3">ACTIVE</span>
      </p>
      <p class="title is-size-1 has-text-serif has-text-weight-medium has-text-black">
        Faster
        <span class="has-text-sans">Shopify</span> product uploads with
        <br />
        <span
          class="has-text-sans"
          style="padding: 0 0.5rem;border-bottom:2px solid black"
        >Storefront</span>
      </p>
      <p
        class="is-size-5"
      >Market to your cusomters using Whatsapp , SMS and Email ( Coming Very Soon )</p>
      <br />
      <a href class="is-black has-text-weight-medium">Go to Project →</a>
    </div>
    <div class="project-card mt-6">
      <p class="has-text-mono subtitle has-text-grey-light has-text-weight-semibold is-size-6">
        <span class="is-rounded tag is-success mr-3">ACTIVE</span>
      </p>
      <p class="title is-size-1 has-text-serif has-text-weight-medium has-text-black">
        Your own
        <span class="has-text-sans">Bit.ly</span> with click analytics with
        <br />
        <span
          class="has-text-sans"
          style="padding: 0 0.5rem;border-bottom:2px solid black"
        >Shorty</span>
      </p>
      <p
        class="is-size-5"
      >Market to your cusomters using Whatsapp , SMS and Email ( Coming Very Soon )</p>
      <br />
      <a href class="is-black has-text-weight-medium">Go to Project →</a>
    </div>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Work",
  },
  data() {
    return {
      work: [
        {
          title: "Automato",
          tag: "OPENSOURCE",
          desc:
            " Marketing Campaigns via Whatsapp & SMS. With built in scrapers for Google & B2B Portals.",
          link: "https://github.com/highoncarbs/automato",
        },
        {
          title: "Hafta",
          tag: "OPENSOURCE",
          desc: "Payroll & HR for Indian SMBs with flexible tax deductions",
          link: "https://github.com/highoncarbs/hafta",
        },
        {
          title: "Storefront",
          tag: "OPENSOURCE",
          desc:
            "Shopify Product upload on steroids. Bulk product uploads to your shopify store",
          link: "https://github.com/highoncarbs/storefront",
        },
        {
          title: "Shorty",
          tag: "OPENSOURCE",
          desc:
            "URL Shorter with analytics . Built as an alternative to bit.ly for marketing campaigns.",
          link: "https://github.com/highoncarbs/shorty",
        },
      ],
    };
  },
};
</script>
<style scoped>
html {
  background: #0a0a0a;
}
</style>