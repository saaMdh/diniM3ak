<template>
  <HeaderView />
  <router-view />
</template>
<script>
import HeaderView from "./components/HeaderView.vue";
import { db } from "./firebase";
export default {
  name: "App",
  components: {
    HeaderView,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    // Fetch data from Firestore
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs, "querySnapshot.docs...");
        this.items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
