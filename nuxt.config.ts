export default defineNuxtConfig({
  experimental: {
    appManifest: false
  },
  runtimeConfig: {
    app: {
      accessToken: process.env.accessToken,
      alias: process.env.alias,
      projectId: process.env.projectId,
    }
  },
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
          defer: true,
        },
      ],
    },
  },
  compatibilityDate: '2024-09-20',
});
