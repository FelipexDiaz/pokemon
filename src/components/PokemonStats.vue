<template>
  <div class="box">
    <h2 class="title is-4">Estadísticas</h2>
    <ul>
      <li v-for="s in stats" :key="s.stat.name">
        {{ s.stat.name }}: {{ s.base_stat }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  stats: Array
});
</script>
