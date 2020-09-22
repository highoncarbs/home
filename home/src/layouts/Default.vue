<template>
  <div class>
   
    <section class="section mx-2 my-1">
      <div class="container">
        <slot />
      </div>
    </section>
 
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  data() {
    return {
      showMenu: false,
      show: false,
    };
  },
  methods: {
    gotop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
* {
  font-family: "Spectral", serif !important;
  color: black !important;
}

</style>


