<template>
  <Navigation/>
  <FooterComp/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'SignupView',
  components: {
    Navigation,
    FooterComp
  }
}
</script>