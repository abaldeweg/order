<template>
  <section>
    <b-container size="m">
      <article-cart :style="{ float: 'right' }" />
      <h1>{{ $t('articles') }}</h1>
    </b-container>

    <b-container size="m">
      <article-list />
    </b-container>

    <b-container size="m">
      <article-order />
    </b-container>
  </section>
</template>

<script>
import ArticleList from '@/components/article/List'
import ArticleCart from '@/components/article/Cart'
import ArticleOrder from '@/components/article/Order'

export default {
  name: 'article-view',
  components: {
    ArticleList,
    ArticleCart,
    ArticleOrder,
  },
  head: {
    title: 'Articles',
  },
}
</script>
