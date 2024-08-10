import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
import { useStore } from "zustand";
import { useSidebarToggle } from "@/shared/hooks/use-sidebar-toggle";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { LoadingSpinner } from "@/shared/ui";
import { Header } from "@/widgets/header/ui";
import { Sidebar } from "@/widgets/sidebar/ui";
import { Footer } from "@/widgets/footer/ui";

const queryClient = new QueryClient();

export const Layout = () => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <Sidebar />
        <main
          className={cn(
            "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
            sidebar.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
          )}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
            <div className="container pt-8 pb-8 px-4 sm:px-8">
              <Outlet />
            </div>
          </Suspense>
        </main>
        <footer
          className={cn(
            "transition-[margin-left] ease-in-out duration-300",
            sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
          )}
        >
          <Footer />
        </footer>
      </ThemeProvider>
      <ReactQueryDevtools position="right" />
      <TanStackRouterDevtools position="bottom-right" />
    </QueryClientProvider>
  );
};
