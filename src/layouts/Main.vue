<template>
  <div>
    <a-layout>
      <a-layout-header class="layout-header">
        <h1 class="text-white">RandomUser</h1>
      </a-layout-header>
      <a-layout-content class="layout-content"> <slot /></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
.layout-content {
  min-height: calc(100vh - 64px - 69px);
  padding: 1rem 0px;
}
</style>