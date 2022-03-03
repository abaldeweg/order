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
    </b-container>

    <b-dialog v-if="dialog">
      <template #actions>
        <b-button @click="dialog = false">{{ $t('ok') }}</b-button>
      </template>

      <p>{{ $t('order_info') }}</p>
    </b-dialog>
  </section>
</template>

<script>
import OrderList from '@/components/order/List'
import OrderDetails from '@/components/order/Details'
import { ref } from '@vue/composition-api'
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
    const dialog = ref(false)

    const { articles } = useCart()
    const { state: details } = usePersonalDetails()

    const { download } = usePdf(articles, details, dialog)

    const send = () => {
      dialog.value = true
      download()
    }

    return { dialog, send }
  },
}
</script>
