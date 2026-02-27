import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		{
			name: 'redirect-evento',
			configureServer(server)
			{
				server.middlewares.use((req, res, next) =>
				{
					if (req.url === '/evento')
					{
						res.statusCode = 301
						res.setHeader('Location', '/evento/')
						res.end()
						return
					}

					next()
				})
			},
		},
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				evento: resolve(__dirname, 'evento/index.html'),
			},
		},
	},
})