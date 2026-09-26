import { copyFile } from 'node:fs/promises';

await copyFile('site/index.html', 'site/404.html');
