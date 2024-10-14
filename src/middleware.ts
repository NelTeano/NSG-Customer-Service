import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'


const isProtectedRoute = createRouteMatcher([
  '/',
  // '/(.*)',
  '/Home',
  // '/Home/(.*)',
  '/create-order',
  '/dashboard',
  '/orders-history',
  '/orders-history/(.*)',
  '/orders',
  '/orders/(.*)',
]);

export default clerkMiddleware((auth, request) => {
  if (!auth().userId && isProtectedRoute(request)) {

        // Add custom logic to run before redirecting

        return auth().redirectToSignIn();
    }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}