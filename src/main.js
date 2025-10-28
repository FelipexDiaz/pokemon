import { createApp } from "vue";
import { createPinia } from "pinia"; // 👈 importamos Pinia
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.css";

const app = createApp(App);

const pinia = createPinia(); // 👈 creamos la instancia de Pinia
app.use(pinia); // 👈 registramos Pinia

app.use(router);
app.mount("#app");
