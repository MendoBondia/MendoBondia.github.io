import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/', // ¡Importante! Así los recursos se cargarán correctamente.
 
    plugins: [react()],
})