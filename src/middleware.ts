import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const url = request.nextUrl.clone();

  // P0: consolidate on the non-www canonical domain.
  if (host.startsWith('www.')) {
    url.host = host.replace(/^www\./, '');
    return NextResponse.redirect(url, 308);
  }

  // P0: force HTTPS (Cloudflare sets x-forwarded-proto).
  if (proto !== 'https') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
