"use client"

import { UserProvider } from "@/src/utils/user/user-context";
import { ReactNode, } from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarLayout, SidebarTrigger } from "../ui/sidebar";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  // mar - commented out to remove unused code
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const sidebarState = document.cookie.split('; ')
  //     .find(row => row.startsWith('sidebar:state='))
  //     ?.split('=')[1];
  //   setIsSidebarOpen(sidebarState === 'true');
  // }, []);

  return (
    <UserProvider>
      <SidebarLayout defaultOpen={true}>
        <AppSidebar />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
          <div className="h-full rounded-md border-2 border-dashed p-2">
            <SidebarTrigger />
            {children}
          </div>
        </main>
      </SidebarLayout>
    </UserProvider>
  );
}


// this is the original code:

// "use client"

// import { UserProvider } from "@/src/utils/user/user-context";
// import { ReactNode } from "react";
// import { AppSidebar } from "../app-sidebar";
// import { SidebarLayout, SidebarTrigger } from "../ui/sidebar";

// interface AuthLayoutProps {
//   children: ReactNode;
// }

// export default async function AuthLayout({ children }: AuthLayoutProps) {
//   const { cookies } = await import("next/headers")
//   return (
//     <UserProvider>
//       <SidebarLayout
//         defaultOpen={cookies().get("sidebar:state")?.value === "true"}
//       >
//         <AppSidebar />
//         <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
//           <div className="h-full rounded-md border-2 border-dashed p-2">
//             <SidebarTrigger />
//             {children}
//           </div>
//         </main>
//       </SidebarLayout>
//     </UserProvider>
//   )
// };
