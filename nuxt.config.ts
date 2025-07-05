// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Hélitto Souza Ferreira" },
      ],
    },
  },

  vite: {
    build: {
      sourcemap: process.env.NODE_ENV !== "production",
    }
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  site: {
    url: "https://0xBlooD.github.io",
    name: "Portfólio Hélitto Souza Ferreira",
    titleTemplate: "%s · Hélitto Souza Ferreira",
    description: "Portfólio profissional de Hélitto Souza Ferreira.",
    // ogImage: '/cover.png', // i need do this later
    twitterCard: "summary_large_image",
    language: "pt-BR",
    trailingSlash: false,
    sitemap: true,
    robots: true,
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "pt",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      fallbackLocale: "en",
      alwaysRedirect: false,
      redirectOn: "root",
    },
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "pt", iso: "pt-BR", name: "Português", file: "pt.json" },
    ],
    lazy: true,
    langDir: "locales/",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  colorMode: {
    preference: "system",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
});
