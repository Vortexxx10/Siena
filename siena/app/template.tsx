'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar";
import { isPublicRoute } from "@/utils/pagesRoutesEnum";
import { usePathname } from "next/navigation";

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const isPublic = isPublicRoute(pathname);
    



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

