import "./assets/main.css";
import icons from "v-svg-icons";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.component("icon", icons);

app.mount("#app");
