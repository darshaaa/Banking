"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Landmark,
  BadgePercent,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Members", href: "/members" },
  { icon: Landmark, label: "Accounts", href: "/accounts" },
  { icon: BadgePercent, label: "Loans", href: "/loans" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <div className="w-60 h-screen bg-white border-r border-slate-300 flex flex-col sticky top-0 shrink-0">
        <div className="p-6 flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#003399] rounded-md flex items-center justify-center text-white font-bold">
            C
          </div>
          <h1 className="text-xl font-bold text-slate-900">CoreBank</h1>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#0047AB] text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button
            onClick={() => setShowLogout(true)}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-200 ease-out
        ${showLogout ? "opacity-100 visible" : "opacity-0 invisible"}
        bg-gray-300/55 backdrop-blur-[1px]`}
      >
        <div
          className={`bg-white rounded-2xl p-6 w-[320px] shadow-xl
          transform transition-all duration-200 ease-out
          ${showLogout ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            Confirm Logout
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            Are you sure you want to logout?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowLogout(false)}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
            >
              No
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("loggedIn");
                router.push("/login");
              }}
              className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
