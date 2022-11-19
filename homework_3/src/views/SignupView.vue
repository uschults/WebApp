<template>
  <Navigation/>
  <SignupForm/>
  <FooterComp/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FooterComp from '@/components/FooterComp.vue'
import SignupForm from '@/components/SignupForm.vue'


export default {
  name: 'SignupView',
  components: {
    Navigation,
    FooterComp,
    SignupForm
  }
}
</script>