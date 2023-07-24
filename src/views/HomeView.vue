<template>
  <div class="home">
    <NavbarWa />
    <div class="container">
      <HeroWa />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong> Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="FoodsView" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye> Lihat Semua
          </router-link>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
        <CardProductWa :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarWa from "@/components/NavbarWa.vue";
import HeroWa from "@/components/HeroWa.vue";
import CardProductWa from "@/components/CardProductWa.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarWa,
    HeroWa,
    CardProductWa,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
