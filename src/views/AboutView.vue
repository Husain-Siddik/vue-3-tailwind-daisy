<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <!-- from store -->
  <div>
    <h4>Rajib namber of math is: {{ store.firstNamber }}</h4>
  </div>

</template>
<script setup>
import { useMathStore } from '@/stores/math';
const store = useMathStore();


</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
