import { execSync } from 'node:child_process';

execSync('npm install', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });
execSync('npx wrangler deploy', { stdio: 'inherit' });
