import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Blog',
  description: 'Integração e comentários sobre os dados e informações extraídos de Portais Oficiais do Governo Federal, Institutos e Instituições Oficiais, Câmara Federal e Senado Federal.',
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
