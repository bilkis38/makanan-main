<template>
  <div id="app">
    <router-view/>
    <FooterWa />
    
  </div>
</template>

<script>
// @ is an alias to /src
import FooterWa from '@/components/FooterWa.vue'


 

export default {
  components: {
    FooterWa
  }
  
  
}
</script>
