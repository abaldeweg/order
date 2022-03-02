<template>
  <b-app>
    <b-masthead>
      <b-masthead-item type="center">
        <router-link :to="{ name: 'article' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 200 200"
            class="logo"
          >
            <path
              d="M 27.435547 7.4355469 A 20 20 0 0 0 7.4355469 27.435547 L 7.4355469 172.56445 A 20 20 0 0 0 27.435547 192.56445 L 172.56445 192.56445 A 20 20 0 0 0 192.56445 172.56445 L 192.56445 27.435547 A 20 20 0 0 0 172.56445 7.4355469 L 27.435547 7.4355469 z M 60 37.5 L 60.263672 37.5 L 71.076172 37.5 L 78.201172 37.5 A 25 25 0 0 0 100 50.5 A 25 25 0 0 0 121.79883 37.5 L 128.7168 37.5 L 140 37.5 L 140.35938 37.5 L 175 57.5 L 155 92.140625 L 140 83.480469 L 140 162.5 L 60 162.5 L 60 83.839844 L 45 92.5 L 25 57.859375 L 60 37.652344 L 60 37.5 z"
            />
          </svg>
        </router-link>
      </b-masthead-item>
    </b-masthead>

    <b-container size="m">
      <b-alert type="error">
        <p>
          {{ $t('order_info') }}
        </p>
      </b-alert>
    </b-container>

    <slot />
  </b-app>
</template>

<script>
export default {
  name: 'layout',
}
</script>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>
