<template>
  <section>
    <b-list divider>
      <template #title>
        <span @click="addItem(item, size)">{{ item }}</span>
      </template>

      <template #options>
        <div class="items">
          <div class="item">
            <b-form-input
              :placeholder="$t('size')"
              :aria-label="$t('size')"
              size="3"
              minlength="1"
              maxlength="3"
              v-model="size"
            />
          </div>
          <div class="item">
            <b-button
              design="text"
              @click="addItem(item, size)"
              :style="{ lineHeight: '0' }"
              ><b-icon type="plus" :size="25"
            /></b-button>
          </div>
        </div>
      </template>
    </b-list>
  </section>
</template>

<script>
import useCart from '@/composables/useCart'

export default {
  name: 'article-show',
  props: {
    item: String,
  },
  setup() {
    const size = null
    const { addItem } = useCart()

    return { size, addItem }
  },
}
</script>

<style scoped>
.items {
  display: flex;
  align-items: center;
}
.item {
  margin-left: 20px;
}
</style>
