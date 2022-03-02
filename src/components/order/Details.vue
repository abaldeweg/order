<template>
  <b-form @submit.prevent="$emit('send')">
    <b-form-group>
      <b-form-item>
        <b-form-label for="staff_number">{{ $t('staff_number') }}</b-form-label>
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
        <b-button design="primary_wide">{{ $t('order_now') }}</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: 'order-details',
}
</script>
