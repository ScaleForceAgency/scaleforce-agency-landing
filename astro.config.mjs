import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astrowind from './vendor/integration';
import astroAirtable from './src/integrations/astro-airtable/astro-airtable';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter.mjs';
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;
const whenExternalScripts = (items = []) => hasExternalScripts ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    astroAirtable(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'line-md': ['*'],
      }
    }),
    ...whenExternalScripts(() => partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false
        }
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1
    }),
    astrowind({
      config: './src/config.yaml'
    }),
    react(),
    {
      name: "astro-hello",
      hooks: {},
    },
  ],
  image: {
    service: squooshImageService(),
    domains: ['cdn.pixabay.com']
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});