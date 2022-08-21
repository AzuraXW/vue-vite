<template>
  <div class="app">
    <h1>Hello Vue + Vite!</h1>
    <div class="link">
      <RouterLink to="/">首页</RouterLink> |
      <RouterLink to="/about">关于</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
const s: string = "test"
console.log(s)
</script>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link {
  display: flex;
  margin: 20px 0;
}
</style>
