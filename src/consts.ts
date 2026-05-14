import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// IMPORTANTE: Coloque o seu domínio real abaixo para as fotos aparecerem no Zap
	site: 'https://www.receitagratis.com.br', 
	integrations: [mdx(), sitemap()],
});
