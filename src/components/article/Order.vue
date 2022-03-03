<template>
  <b-button design="primary_wide" @click="$router.push({ name: 'order' })"
    >{{ $t('ordering') }} ({{ counter }})</b-button
  >
</template>

<script>
import useCart from '@/composables/useCart'

export default {
  name: 'article-order',
  setup() {
    const { counter } = useCart()

    return { counter }
  },
}
</script>
