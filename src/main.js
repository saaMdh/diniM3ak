import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase";
import "./app.css";
const app = createApp(App);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});
app.use(store).use(router).mount("#app");
