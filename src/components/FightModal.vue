<template>
  <div :class="['modal', { 'is-active': active }]">
    <!-- Fondo del modal -->
    <div class="modal-background" @click="close"></div>

    <!-- Contenido del modal -->
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">¡Pelea Pokémon!</p>
        <!-- Botón de cerrar -->
        <button class="delete" aria-label="close" @click="close"></button>
      </header>

      <section class="modal-card-body">
        <!-- Contenido principal del modal (slot) -->
        <slot></slot>
      </section>

      <footer class="modal-card-foot is-justify-content-space-between">
        <!-- Botón Cerrar siempre visible -->
        <button class="button" @click="close">Cerrar</button>

        <!-- Slot para botones adicionales (Pelear otra vez / Ver resultados anteriores) -->
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean
});

const emit = defineEmits(['close']);

const close = () => emit('close');
</script>

<style>
/* Opcional: animación del modal */
.modal-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>
