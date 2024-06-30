import { clerkMiddleware } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(['/'])

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
