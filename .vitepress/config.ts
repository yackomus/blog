import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Brasília',
  description: 'Comentários amostrais que demonstram a rotina da qual os burocratas brasileiros participam para tomar um cafezinho, cantar palavras vazias e trair a nação.',
  cleanUrls: true,
  outDir: './docs',
  head: [
    ['meta', { name: 'twitter:site', content: '@yackomus' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JL3G0RBEG0' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JL3G0RBEG0');`
    ]
  ],
  buildEnd: genFeed
})
