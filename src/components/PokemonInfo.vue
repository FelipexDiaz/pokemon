<template>
  <div class="box">
    <p><strong>Altura:</strong> {{ height }}</p>
    <p><strong>Peso:</strong> {{ weight }}</p>
    <p><strong>Tipos:</strong> {{ types.join(", ") }}</p>
  </div>
</template>

<script setup>
defineProps({
  height: Number,
  weight: Number,
  types: Array
});
</script>
