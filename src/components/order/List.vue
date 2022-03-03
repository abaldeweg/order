<template>
  <section>
    <b-list divider v-for="(item, index) in articles" :key="index">
      <template #title>{{ item.name }}</template>

      <template #meta>
        {{ $t('quantity') }}: {{ item.quantity }} &bull; {{ $t('size') }}:
        {{ item.size }}
      </template>

      <template #options>
        <b-button
          design="text"
          @click="remove(index)"
          :style="{ lineHeight: '0' }"
          ><b-icon type="bin" :size="25"
        /></b-button>
      </template>
    </b-list>
  </section>
</template>

<script>
import useCart from '@/composables/useCart'

export default {
  name: 'order-list',
  setup() {
    const { articles, remove } = useCart()

    return { articles, remove }
  },
}
</script>
