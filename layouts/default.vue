<template>
  <Header/>
  <slot/>
  <Footer/>
</template>

<script>
export default {
  name: "default"
}
</script>

<script setup>
useHead({
  titleTemplate: 'Homebrew — %s'
})
</script>