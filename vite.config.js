import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(projectRoot, 'app'),
  base: '/ucl-urban-spatial-science/',
  build: {
    outDir: path.join(projectRoot, 'site'),
    emptyOutDir: true,
  },
});
