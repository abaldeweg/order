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
import 'jspdf-autotable'

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

    const download = (details) => {
      const doc = new jsPDF()

      const data = () => {
        let list = []

        articles.value.forEach((element) => {
          list.push([element.name, element.size, element.quantity])
        })

        return list
      }

      doc.setFontSize(12)
      doc.text(
        [
          details.staffNumber ?? '',
          (details.firstname ?? '') + ' ' + (details.surname ?? ''),
        ],
        15,
        20
      )

      doc.autoTable({
        theme: 'plain',
        styles: {
          fontSize: 12,
          lineColor: '#cccccc',
          lineWidth: 0.1,
        },
        columnStyles: {
          0: { cellWidth: 'auto' },
          1: { cellWidth: 20 },
          2: { cellWidth: 20 },
        },
        head: [[i18n.t('name'), i18n.t('size'), i18n.t('quantity')]],
        body: data(),
        startY: 50,
      })

      doc.autoTable({
        theme: 'plain',
        styles: {
          fontSize: 12,
          lineColor: '#cccccc',
          lineWidth: 0.1,
        },
        columnStyles: {
          0: { cellWidth: 'auto' },
        },
        head: [[i18n.t('notes')]],
        body: [[details.notes ?? '']],
      })

      doc
        .save('order_' + Math.round(new Date() / 1000) + '.pdf', {
          returnPromise: true,
        })
        .then(() => {
          dialog.value = false
        })
    }

    const send = (details) => {
      dialog.value = true
      download(details)
    }

    return { dialog, send }
  },
}
</script>
