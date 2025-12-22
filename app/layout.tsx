"use client";

import "./globals.css";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");

    // Not logged in → block dashboard
    if (!logged && pathname.startsWith("/dashboard")) {
      router.push("/login");
    }

    // Logged in → block login page
    if (logged && pathname === "/login") {
      router.push("/dashboard");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className="antialiased">
        {pathname === "/login" ? (
          <>{children}</>
        ) : pathname.startsWith("/dashboard") ? (
          <div className="flex h-screen w-full overflow-hidden bg-white">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
