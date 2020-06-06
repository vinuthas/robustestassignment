<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
}
</script>
<style>
body {
  background: #222831 !important;
}
.container {
  max-width: 900px;
}
.card {
  background: #1a1d24;

}
.card-body {
  color: #f9ffee;
}
.card-body a{
  color: #efbb35;
}
</style>
