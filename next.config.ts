import path from 'node:path';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  // Cloudflare Workers (OpenNext) 部署必须用 standalone 产物：
  // export 模式不生成 .next/standalone，opennext build 会因找不到 pages-manifest.json 而失败。
  output: 'standalone',
};

export default withNextIntl(nextConfig);
