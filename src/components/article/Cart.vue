<template>
  <div @click="$router.push({ name: 'order' })">
    <b-icon type="cart" /> ({{ counter }})
  </div>
</template>

<script>
import useCart from '@/composables/useCart'

export default {
  name: 'article-cart',
  setup() {
    const { counter } = useCart()

    return { counter }
  },
}
</script>
