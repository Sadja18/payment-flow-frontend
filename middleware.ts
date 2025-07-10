// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    // host: pay.sadja.localtest.me:3000

    // Extract subdomain parts by splitting host
    const hostParts = host.split('.'); // ['pay', 'sadja', 'localtest', 'me:3000']

    // Assuming 'localtest.me' is domain and subdomain is the one before that
    // Remove port if any in last part
    // const lastPart = hostParts[hostParts.length - 1].split(':')[0]; // 'me'
    // const domainParts = hostParts.slice(-3); // ['sadja', 'localtest', 'me:3000']

    // For localtest.me, the subdomain is likely hostParts[1]
    // For 'pay.sadja.localtest.me' => ['pay','sadja','localtest','me']
    // subdomain = 'sadja' (hostParts[1])

    // Find the merchant subdomain ignoring the 'pay' prefix
    let merchantSubDomain = '';
    if (hostParts.length >= 4 && hostParts[0] === 'pay') {
        merchantSubDomain = hostParts[1];
    } else if (hostParts.length >= 3) {
        merchantSubDomain = hostParts[0];
    }

    // Clone url to modify it
    const url = request.nextUrl.clone();

    // Rewrite /invoices to /merchant/invoices with merchantSubDomain param
    if (url.pathname === '/invoices') {
        url.pathname = '/merchant/invoices';
        url.searchParams.set('merchantSubDomain', merchantSubDomain);
        return NextResponse.rewrite(url);
    }

    // Default: do nothing
    return NextResponse.next();
}

// Tell middleware which routes to run on
export const config = {
    matcher: ['/invoices', '/invoices/:path*'],
};
