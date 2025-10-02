<template>
  <div class="mt-4" style="height: 250px;">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  stats: Array,
});

const chartData = computed(() => ({
  labels: props.stats.map((s) => s.stat.name),
  datasets: [
    {
      label: "Estadísticas base",
      data: props.stats.map((s) => s.base_stat),
      backgroundColor: "#3273dc", // Azul Bulma
      borderRadius: 4,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};
</script>
