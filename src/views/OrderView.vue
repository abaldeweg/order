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
import { jsPDF } from 'jspdf'
import useCart from '@/composables/useCart'
import i18n from '~b/i18n'

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

    const download = () => {
      const doc = new jsPDF()

      const headers = [
        {
          id: 'name',
          name: 'name',
          prompt: i18n.t('name'),
          width: 150,
          align: 'left',
          padding: 10,
        },
        {
          id: 'size',
          name: 'size',
          prompt: i18n.t('size'),
          width: 50,
          align: 'left',
          padding: 10,
        },
        {
          id: 'quantity',
          name: 'quantity',
          prompt: i18n.t('quantity'),
          width: 50,
          align: 'left',
          padding: 10,
        },
      ]

      const data = (val) => {
        for (var key in val) {
          val[key].quantity = val[key].quantity.toString()
        }

        return val
      }

      doc.table(10, 10, data(articles.value), headers)

      doc
        .save('order_' + new Date() / 1000 + '.pdf', {
          returnPromise: true,
        })
        .then(() => {
          dialog.value = false
        })
    }

    const send = () => {
      dialog.value = true
      download()
    }

    return { dialog, send }
  },
}
</script>
