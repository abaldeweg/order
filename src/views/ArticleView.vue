<template>
  <section>
    <b-container size="m">
      <p :style="{ float: 'right' }" @click="$router.push({ name: 'order' })">
        {{ $t('cart') }} ({{ counter }})
      </p>
      <h1>{{ $t('articles') }}</h1>
    </b-container>

    <b-container size="m">
      <article-list />
    </b-container>

    <b-container size="m">
      <b-button design="primary_wide" @click="$router.push({ name: 'order' })"
        >{{ $t('order') }} ({{ counter }})</b-button
      >
    </b-container>
  </section>
</template>

<script>
import ArticleList from '@/components/article/List'
import useCart from '@/composables/useCart'

export default {
  name: 'article-view',
  components: {
    ArticleList,
  },
  head: {
    title: 'Articles',
  },
  setup() {
    const { counter } = useCart()

    return { counter }
  },
}
</script>
