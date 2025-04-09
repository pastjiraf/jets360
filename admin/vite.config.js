import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port: 5174}
})

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'https://jets360-backend.vercel.app'
//     }
//   }
// });
