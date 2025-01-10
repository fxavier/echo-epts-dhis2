import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const currentUser = request.cookies.get('user')?.value;
	const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

	// Always redirect to login if not authenticated (except for auth pages)
	if (!currentUser && !isAuthPage) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// Redirect to dashboard if trying to access auth pages while authenticated
	if (currentUser && isAuthPage) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
