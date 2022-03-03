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

      <order-details />

      <b-form @submit.prevent="download">
        <b-form-group>
          <b-form-item>
            <b-button design="primary_wide" v-if="!isGenerating">{{
              $t('order_now')
            }}</b-button>
            <b-spinner size="m" v-if="isGenerating" />
          </b-form-item>
        </b-form-group>
      </b-form>
    </b-container>
  </section>
</template>

<script>
import OrderList from '@/components/order/List'
import OrderDetails from '@/components/order/Details'
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
    const { isGenerating, download } = usePdf()

    return { isGenerating, download }
  },
}
</script>
