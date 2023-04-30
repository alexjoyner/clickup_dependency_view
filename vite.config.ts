import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/clickup_dependency_view/',
	build: {
		outDir: './docs'
	}
})
