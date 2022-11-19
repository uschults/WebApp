<template>
  <Navigation/>
  <Posts/>
  <FooterComp/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Posts from '@/components/Posts.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    Navigation,
    Posts,
    FooterComp
  }
}
</script>
