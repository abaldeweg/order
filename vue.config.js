module.exports = {
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
    },
    name: 'Order',
    themeColor: '#d7621d',
  },
  pluginOptions: {
    components: {
      title: 'Order',
      needsAuth: false,
    },
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: undefined,
    },
  },
}
