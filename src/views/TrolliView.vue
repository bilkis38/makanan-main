<template>
  <div class="TrolliView">
    <NavbarWa />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/FoodsView" class="text-dark"
                  >Foods</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavbarWa from "@/components/NavbarWa.vue";

export default {
  name: "TrolliView",
  components: {
    NavbarWa,
  },
};
</script>

<style>
</style>