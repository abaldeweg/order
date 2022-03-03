<template>
  <section>
    <b-container size="m">
      <h1>{{ $t('order') }}</h1>
    </b-container>

    <b-container size="m">
      <h2>{{ $t('cart') }}</h2>
      <order-list />
    </b-container>

    <b-container size="m">
      <h2>{{ $t('personal_details') }}</h2>

      <order-details @send="send" />

      <b-spinner size="m" v-if="pdf_state.isGenerating" />
    </b-container>
  </section>
</template>

<script>
import OrderList from '@/components/order/List'
import OrderDetails from '@/components/order/Details'
import useCart from '@/composables/useCart'
import usePersonalDetails from '@/composables/usePersonalDetails'
import usePdf from '@/composables/usePdf'

export default {
  name: 'order-view',
  components: {
    OrderList,
    OrderDetails,
  },
  head: {
    title: 'Order',
  },
  setup() {
    const { articles } = useCart()
    const { state: details } = usePersonalDetails()

    const { state: pdf_state, download } = usePdf(articles, details)

    const send = () => {
      download()
    }

    return { pdf_state, send }
  },
}
</script>
