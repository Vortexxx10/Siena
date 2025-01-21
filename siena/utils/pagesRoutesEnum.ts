type Route = {
    path: string;
    isPrivate: boolean;
  };
  
  export const RoutesEnum: Record<string, Route> = {
    home: { path: "/", isPrivate: true },
    login: { path: "/login", isPrivate: false },
    // notFound: { path: "/not-found", isPrivate: false },
    // passwordReset: { path: "/password-reset", isPrivate: false },
    // accessDenied: { path: "/access-denied", isPrivate: false },
    booking: { path: "/booking", isPrivate: true },
  };


  export function isPublicRoute(pathname: string): boolean {
    return Object.values(RoutesEnum).some((route) => 
        pathname === route.path && !route.isPrivate
    );
}