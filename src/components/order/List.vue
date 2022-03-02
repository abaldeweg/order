<template>
  <section>
    <b-list divider v-for="(item, index) in articles" :key="index">
      <template #title>
        <span @click="addItem(item)">{{ item.name }} ({{ item.size }})</span>
      </template>

      <template #options>
        <div class="items">
          <div class="item">
            {{ item.counter }}
          </div>
          <div class="item">
            <span @click="removeItem(index)"
              ><b-icon type="bin" :size="25"
            /></span>
          </div>
        </div>
      </template>
    </b-list>
  </section>
</template>

<script>
import useCart from '@/composables/useCart'

export default {
  name: 'order-list',
  setup() {
    const { articles, removeItem } = useCart()

    return { articles, removeItem }
  },
}
</script>

<style scoped>
.items {
  display: flex;
}
.item {
  margin-left: 20px;
}
</style>
