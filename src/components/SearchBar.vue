<template>
  <div class="field has-addons is-justify-content-center">
    <div class="control">
      <input
        v-model="localSearch"
        class="input"
        type="text"
        placeholder="Busca por nombre o ID"
        @keydown.enter="handleSearch"
      />
    </div>
    <div class="control">
      <button @click="handleSearch" class="button is-link">Buscar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  search: String,
});
const emit = defineEmits(["update", "onSearch"]);

const localSearch = ref(props.search);

watch(localSearch, (val) => emit("update", val));

const handleSearch = () => {
  emit("onSearch");
};
</script>
