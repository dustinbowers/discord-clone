// import { createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//     '/' // Add any additional routes here
// ]);// Update clerkMiddleware to manually protect routes


// export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) {
//         auth().protect(); // Protect the route if it matches the defined criteria
//     }
// });

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/sign-in',
    '/sign-up',
    '/api/uploadthing',
]);

export default clerkMiddleware((auth, request) => {
    if (!isPublicRoute(request)) {
        auth().protect();
    }
}, { debug: true });

export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: [
        '/((?!.*\\..*|_next).*)',
        '/',
        '/(api|trpc)(.*)'
    ],
};