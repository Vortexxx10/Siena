'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar";
import { isPublicRoute } from "@/utils/pagesRoutesEnum";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const isAuth = true
    const pathname = usePathname();
    const isPublic = isPublicRoute(pathname);

    // useEffect(() => {
    //   if (!isAuth && !isPublicRoute(pathname)) {
    //     redirect(LinksEnum.login);
    //   }
    // }, [isAuth, pathname]);

    useEffect(()=>{
        console.log(isPublic);
        
    },[isPublic])    

    return (
        <>
           <div className="relative flex justify-start w-full h-screen overflow-y-hidden">
            {isPublic ? (
                <div className="relative w-full overflow-y-scroll">
                    {children}
                </div>
            ) : (
                <SidebarProvider>
                    <AppSidebar />
                    <main className="flex-1">
                        <SidebarTrigger />
                        {children}
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti error veniam rerum reiciendis, eum delectus? Sequi debitis enim adipisci voluptate ab, ratione consequatur placeat! Est aliquid illo repellendus nam repudiandae.</h1>
                    </main>
                </SidebarProvider>
            )}
        </div>
        </>
    )
}

