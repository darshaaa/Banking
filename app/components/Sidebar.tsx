"use client";

import { LayoutDashboard, Users, Landmark, BadgePercent, FileText, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Members", href: "/members" },
  { icon: Landmark, label: "Accounts", href: "/accounts" },
  { icon: BadgePercent, label: "Loans", href: "/loans" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-60 h-screen bg-white border-r border-slate-300 flex flex-col sticky top-0 shrink-0">
      <div className="p-6 flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-[#003399] rounded-md flex items-center justify-center text-white font-bold">C</div>
        <h1 className="text-xl font-bold text-slate-900">CoreBank</h1>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          // Logic to determine if the current path matches the link
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
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}