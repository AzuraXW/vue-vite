<template>
  <div>
    <button @click="store.increment">add: {{ store.count }}</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
</script>

<style scoped>
</style>