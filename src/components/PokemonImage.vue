<template>
  <figure class="image is-256x256 mx-auto">
    <img :src="image" :alt="name" />
  </figure>
</template>

<script setup>
defineProps({
  image: String,
  name: String
});
</script>
