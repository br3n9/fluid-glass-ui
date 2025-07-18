import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Function to copy theme files to dist directory during build
function copyThemeFiles() {
  return {
    name: 'copy-theme-files',
    closeBundle() {
      const themeSrcDir = path.resolve(__dirname, 'src/theme');
      const themeDestDir = path.resolve(__dirname, 'dist/theme');
      
      // Create theme directory if it doesn't exist
      if (!fs.existsSync(themeDestDir)) {
        fs.mkdirSync(themeDestDir, { recursive: true });
      }
      
      // Copy all theme CSS files
      fs.readdirSync(themeSrcDir).forEach(file => {
        if (file.endsWith('.css')) {
          fs.copyFileSync(
            path.join(themeSrcDir, file),
            path.join(themeDestDir, file)
          );
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyThemeFiles()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'FluidGlassUI',
      formats: ['es', 'umd'],
      fileName: (format) => `fluid-glass-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@react-aria/interactions'],
      output: {
        banner: '"use client";',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@react-aria/interactions': 'ReactAriaInteractions',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return '[name][extname]';
        },
      },
    },
    cssCodeSplit: false,
  },
});
