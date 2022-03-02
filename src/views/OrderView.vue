<template>
  <section>
    <b-container size="m">
      <h1>{{ $t('order') }}</h1>
    </b-container>

    <b-container size="m">
      <b-alert type="error">
        <p>
          {{ $t('order_info') }}
        </p>
      </b-alert>
    </b-container>

    <b-container size="m">
      <h2>{{ $t('cart') }}</h2>
      <order-list />
    </b-container>

    <b-container size="m">
      <h2>{{ $t('personal_details') }}</h2>

      <b-form @submit.prevent>
        <b-form-group>
          <b-form-item>
            <b-form-label for="staff_number">{{
              $t('staff_number')
            }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input id="staff_number" />
          </b-form-item>
        </b-form-group>

        <b-form-group>
          <b-form-item>
            <b-form-label for="firstname">{{ $t('firstname') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input id="firstname" />
          </b-form-item>
        </b-form-group>

        <b-form-group>
          <b-form-item>
            <b-form-label for="surname">{{ $t('surname') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input id="surname" />
          </b-form-item>
        </b-form-group>

        <b-form-group>
          <b-form-item>
            <b-form-label for="notes">{{ $t('notes') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-textarea id="notes" />
          </b-form-item>
        </b-form-group>

        <b-form-group>
          <b-form-item>
            <b-button design="primary_wide" @click="dialog = true">{{
              $t('order_now')
            }}</b-button>
          </b-form-item>
        </b-form-group>
      </b-form>
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

export default {
  name: 'order-view',
  components: {
    OrderList,
  },
  head: {
    title: 'Order',
  },
  setup() {
    const dialog = false

    return { dialog }
  },
}
</script>
