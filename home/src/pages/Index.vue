 <template>
  <Layout>
    <div>
      <div class>
        <div class="columns">
          <div class="column is-5">
            <h1 class="is-size-3 has-text-serif has-text-weight-medium has-text-black">
              <span class="has-text-sans has-text-underlined">Padam Sethia</span> builds
              <span class="has-text-sans has-text-underlined has-text-black">
                <a class="has-text-black" href="https://github.com/highoncarbs">Open Source Software</a>
              </span>
              for
              <span class="has-text-sans has-text-underlined">Indian SMB's</span>
              , drools over orgasmic food. He is lazy as f**k , wannabe designer and cooks just the best home-made pizza there is , stays high always listening to
              <span class="has-text-sans has-text-underlined">
                <a
                  class="has-text-black"
                  href="https://www.youtube.com/playlist?list=PL-FOM5JskLGQ0WuEQIJq9kDhhuCxS2fDN"
                >Good Music</a>
              </span>.
            </h1>
          </div>
        </div>
      </div>
      <br />
      <br />
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
    title: "Home",
  },
};
</script>
<style >
</style>