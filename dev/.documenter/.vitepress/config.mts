import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";
import { transformerMetaWordHighlight } from '@shikijs/transformers';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DocumenterVitepress.jl/', // TODO: replace this in makedocs!
  title: 'DocumenterVitepress',
  description: 'Documentation for DocumenterVitepress.jl',
  lastUpdated: true,
  cleanUrls: true,
  outDir: '../final_site', // This is required for MarkdownVitepress to work correctly...
  head: [['link', { rel: 'icon', href: '/DocumenterVitepress.jl/dev/favicon.ico' }]],
  vite: {
    build: {
      assetsInlineLimit: 0, // so we can tell whether we have created inlined images or not, we don't let vite inline them
    }
  },

  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
      md.use(mathjax3),
      md.use(footnote)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"
    },
    codeTransformers: [ transformerMetaWordHighlight(), ],

  },
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
{ text: 'Home', link: '/index' },
{ text: 'Getting started', link: '/getting_started' },
{ text: 'Examples', collapsed: false, items: [
{ text: 'Code', link: '/code_example' },
{ text: 'Markdown', link: '/markdown-examples' },
{ text: 'MIME output', link: '/mime_examples' },
{ text: 'Updating to DocumenterVitepress', link: '/documenter_to_vitepress_docs_example' },
{ text: 'DocumenterCitations integration', link: '/citations' },
{ text: 'CSS Styling', link: '/style_css' }]
 },
{ text: 'Developers\' documentation', collapsed: false, items: [
{ text: 'The rendering process', link: '/render_pipeline' }]
 },
{ text: 'Public API', link: '/api' }
]
,
    sidebar: [
{ text: 'Home', link: '/index' },
{ text: 'Getting started', link: '/getting_started' },
{ text: 'Examples', collapsed: false, items: [
{ text: 'Code', link: '/code_example' },
{ text: 'Markdown', link: '/markdown-examples' },
{ text: 'MIME output', link: '/mime_examples' },
{ text: 'Updating to DocumenterVitepress', link: '/documenter_to_vitepress_docs_example' },
{ text: 'DocumenterCitations integration', link: '/citations' },
{ text: 'CSS Styling', link: '/style_css' }]
 },
{ text: 'Developers\' documentation', collapsed: false, items: [
{ text: 'The rendering process', link: '/render_pipeline' }]
 },
{ text: 'Public API', link: '/api' }
]
,
    editLink: { pattern: "https://github.com/LuxDL/DocumenterVitepress.jl/edit/master/docs/src/:path" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuxDL/DocumenterVitepress.jl' }
    ],
    footer: {
      message: 'Made with <a href="https://documenter.juliadocs.org/stable/" target="_blank"><strong>Documenter.jl</strong></a>, <a href="https://vitepress.dev" target="_blank"><strong>VitePress</strong></a> and <a href="https://luxdl.github.io/DocumenterVitepress.jl/stable/" target="_blank"><strong>DocumenterVitepress.jl</strong></a> <br>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}.`
    }
  }
})
