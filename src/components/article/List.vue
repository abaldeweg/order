<template>
  <div v-if="inventory">
    <article-show
      v-for="(item, index) in inventory"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import ArticleShow from '@/components/article/Show'

export default {
  name: 'article-list',
  components: {
    ArticleShow,
  },
  setup() {
    const inventory = process.env.VUE_APP_INVENTORY.split(',')

    return { inventory }
  },
}
</script>
