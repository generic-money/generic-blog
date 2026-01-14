import { defineConfig } from 'vocs'

export default defineConfig({
  iconUrl: '/img/favicon.svg',
  logoUrl: {
    light: '/img/logo-black.svg',
    dark: '/img/logo-white.svg',
  },
  title: 'Generic Blog',
  description: 'The official blog of Generic Protocol, neutral infrastructure for yield-generating and natively-private stablecoins.',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
})
