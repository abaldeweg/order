<template>
  <b-form @submit.prevent="$emit('send')">
    <b-form-group>
      <b-form-item>
        <b-form-label for="staff_number">{{ $t('staff_number') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input id="staff_number" v-model="state.staffNumber" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="firstname">{{ $t('firstname') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input id="firstname" v-model="state.firstname" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="surname">{{ $t('surname') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input id="surname" v-model="state.surname" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="notes">{{ $t('notes') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea id="notes" maxlength="255" v-model="state.notes" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-button design="primary_wide">{{ $t('order_now') }}</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>

<script>
import usePersonalDetails from '@/composables/usePersonalDetails'

export default {
  name: 'order-details',
  setup() {
    const { state } = usePersonalDetails()

    return { state }
  },
}
</script>
