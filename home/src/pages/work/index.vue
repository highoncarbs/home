 <template>
  <Layout>
    <div>
      <div>
        <p
          class="is-pulled-right is-mono has-text-grey is-hidden-mobile"
        >SCROLL TO RIGHT TO VIEW ALL PROJECTS ⇾</p>
      </div>
      <br />
      <div class="columns pb-6 mt-6 is-vcentered is-variable is-8" style="overflow-x:auto">
        <div class="column is-4">
          <p class="is-mono has-text-centered mb-5">CURRENTLY BUILDING</p>

          <figure class="image is-2by3">
            <g-image quality="50" width="500" src="~/assets/work/panya-hero.jpg"></g-image>
          </figure>
          <h1 class="mt-4 title is-size-1">Panya</h1>
          <p class="subtitle is-sans">Open Source & Free B2B Alternative to Shopify</p>
          <a class="is-sans mr-2">
            <s class="is-sans">View Project</s>
          </a>
          <a class="is-sans mr-2">
            <s class="is-sans">Github</s>
          </a>
        </div>
        <div class="column is-4">
          <div class="box-a pb-5 pt-4 px-6">
            <p class="is-mono has-text-centered mb-5">UNDER BETA TESTING</p>
            <figure class="container">
              <g-image width="250" src="~/assets/work/peplum-studio-logo.png"></g-image>
            </figure>
            <h1 class="mt-6 title is-size-1">Peplum Studio</h1>
            <p
              class="subtitle is-sans"
            >Inventory and Process-Programme Tracking for Textile Businesses.</p>
            <a class="is-sans mr-2">
              <s class="is-sans">View Project</s>
            </a>
            <a class="is-sans mr-2">
              <s class="is-sans">Github</s>
            </a>
          </div>
        </div>
        <div class="column is-4">
          <p class="is-mono has-text-centered mb-5">FREE & OPEN-SOURCE</p>

          <figure class="image is-2by3">
            <g-image quality="50" width="500" src="~/assets/work/hafta-hero.jpg"></g-image>
          </figure>
          <h1 class="mt-4 title is-size-1">Hafta</h1>
          <p class="subtitle is-sans">Manage Payrolls, Taxes, Performance of your employees.</p>
          <a href="https://github.com/highoncarbs/hafta" class="is-sans mr-2">View Project</a>
        </div>
        <div class="column is-4">
          <div class="box-b pb-5 pt-4 px-5">
            <p class="is-mono mb-2">OPEN SOURCE</p>
            <!-- <figure class="container">
              <g-image width="250" src="~/assets/work/peplum-studio-logo.png"></g-image>
            </figure>-->
            <h1 class="mt-4 title is-size-1">Automato</h1>
            <p class="subtitle is-sans">Simple Marketing Campaigns over Whatsapp , SMS & Email*</p>
            <p class="is-mono mb-5">NEXT IN LINE FOR AN OVERHAUL INTO A COMPLETE CRM</p>
            <a href="https://github.com/highoncarbs/automato" class="is-sans mr-2">View Project</a>
          </div>
        </div>
        <div class="column is-4">
          <p class="is-mono has-text-centered mb-5">FREE & OPEN-SOURCE</p>

          <figure class="image is-2by3">
            <g-image quality="50" width="500" src="~/assets/work/storefront-hero.jpg"></g-image>
          </figure>
          <h1 class="mt-4 title is-size-1">Storefront</h1>
          <p
            class="subtitle is-sans"
          >Power up your Shopify Store with fasterbulk uploads. It's 80% faster</p>
          <a href="https://github.com/highoncarbs/storefront" class="is-sans mr-2">View Project</a>
        </div>
        <div class="column is-4">
          <div class="box-a pb-5 pt-4 px-5">
            <p class="is-mono mb-2">OPEN SOURCE</p>
            <!-- <figure class="container">
              <g-image width="250" src="~/assets/work/peplum-studio-logo.png"></g-image>
            </figure>-->
            <h1 class="mt-4 title is-size-1">Shorty</h1>
            <p class="subtitle is-sans">
              Link Shorterner with click analytics. Built as a Bit.ly alternative at
              <a href="https://mobikwik.com">Mobikwik</a>
            </p>
            <a href="https://github.com/highoncarbs/shorty" class="is-sans mr-2">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>


</page-query>


<script>
export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      projects: [
        {
          name: "Panya",
          description:
            "Panya is an Open Source B2B alternative to Shopify. Built with speed and extensibility in mind.",
          link: "https://github.com/highoncabrs/panya",
        },
      ],
    };
  },
};
</script>
<style >
</style>