<template>
  <div @click="$router.push({ name: 'order' })">
    <b-badge :content="'' + counter"><b-icon type="cart" /></b-badge>
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
