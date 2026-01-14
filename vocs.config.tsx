import { defineConfig } from 'vocs'

export default defineConfig({
  iconUrl: '/img/favicon.svg',
  logoUrl: {
    light: '/img/logo-black.svg',
    dark: '/img/logo-white.svg',
  },
  socials: [
    { icon: 'github', link: 'https://github.com/MetaFi-labs' },
    { icon: 'x', link: 'https://x.com/genericmoney' },
  ],
  title: 'Generic Blog',
  description: 'The blog of Generic Protocol, neutral infrastructure for yield-generating and natively-private stablecoins.',
  head: (
    <meta property="og:image" content="/img/og-image.png" />
  ),
//   ogImageUrl: '/img/og-image.png',
})
