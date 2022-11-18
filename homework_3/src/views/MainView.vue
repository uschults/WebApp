<template>
  <Navigation/>
  <FooterComp/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    Navigation,
    FooterComp
  }
}
</script>
