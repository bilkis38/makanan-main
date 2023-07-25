<template>
  <div class="pesanan-sukses">
    <NavbarWa />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" width="300" />
        </div>
        <h2><strong>Sukses!!</strong></h2>
        <br><h4>
          Pesanan Anda segera diproses <br />
          Selamat Menunggu
        </h4>
      </div>
    </div>
  </div>
</template>
  
  <script>
import NavbarWa from "@/components/NavbarWa.vue";

export default {
  name: "PesananSukses",
  components: {
    NavbarWa,
  },
};
</script>
  
  <style>
</style>