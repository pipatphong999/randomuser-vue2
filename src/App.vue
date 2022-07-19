<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>
<script>
import MainLayout from "@/layouts/Main.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
