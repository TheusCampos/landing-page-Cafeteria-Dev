import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
// Trae badge plugin removed to disable injected badge on the site

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    // removed traeBadgePlugin to prevent the Trae/Thae badge from appearing
    tsconfigPaths()
  ],
})
