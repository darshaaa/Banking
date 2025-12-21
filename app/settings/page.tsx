"use client";

import React, { useState } from "react";
import { Save, Plus, Database, Cloud, Edit2, ShieldCheck, ChevronRight, Search, ArrowLeft, MoreHorizontal, Unlock } from "lucide-react";
import Sidebar from "../components/Sidebar";

// --- Data Constants ---
const depositRates = [
  { name: "Savings Account (SB)", rate: "4.00", date: "01 Apr 2024", status: "Active" },
  { name: "Fixed Deposit (1 Year)", rate: "7.50", date: "01 Dec 2025", status: "Active" },
  { name: "Fixed Deposit (Senior Citizen)", rate: "8.00", date: "01 Dec 2025", status: "Active" },
  { name: "Recurring Deposit (RD)", rate: "6.80", date: "01 Jan 2024", status: "Active" },
];

const loanRates = [
  { name: "Gold Loan (Secured)", base: "12.00", penal: "2.00", status: "Active" },
  { name: "Personal Loan", base: "14.50", penal: "2.00", status: "Active" },
  { name: "Mortgage Loan", base: "11.00", penal: "2.00", status: "Active" },
];

const staffStats = [
  { label: "Total Staff", value: "12", color: "text-slate-900" },
  { label: "Active Now", value: "4", color: "text-green-600" },
  { label: "Blocked/Locked", value: "1", color: "text-red-600" },
  { label: "Pending Invites", value: "3", color: "text-orange-500" },
];

const staffMembers = [
  { name: "Sunil Shetty", initials: "SS", role: "BRANCH MANAGER", roleColor: "bg-blue-100 text-blue-700", email: "sunil.s@corebank.com", access: "Full Admin", lastLogin: "Just Now", status: "online", actions: ["Edit Profile", "Permissions"] },
  { name: "Ramesh Kumar", initials: "RK", role: "HEAD CASHIER", roleColor: "bg-orange-100 text-orange-700", email: "ramesh.k@corebank.com", access: "High Value", lastLogin: "10 mins ago", status: "online", actions: ["Edit Profile", "Reset Pass"] },
  { name: "Anita Desai", initials: "AD", role: "JUNIOR CLERK", roleColor: "bg-purple-100 text-purple-700", email: "anita.d@corebank.com", access: "Read Only", lastLogin: "Yesterday", status: "offline", actions: ["Edit Profile", "Log Activity"] },
  { name: "Suresh Patil", initials: "SP", role: "ACCOUNT LOCKED", roleColor: "bg-red-100 text-red-700", email: "suresh.p@corebank.com", reason: "3 Failed Logins", lastLogin: "2 Days ago", isLocked: true, status: "offline" },
];

export default function CombinedConfiguration() {
  const [activeTab, setActiveTab] = useState("Interest Masters");

  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        {/* Dynamic Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            {activeTab === "User Management" && (
              <button 
                onClick={() => setActiveTab("Interest Masters")}
                className="flex items-center gap-2 text-slate-500 text-[10px] font-black hover:text-slate-700 uppercase tracking-widest mb-2 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Settings
              </button>
            )}
            <h1 className="text-2xl font-bold text-slate-900">
              {activeTab === "Interest Masters" ? "System Configuration" : "User Management"}
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              {activeTab === "Interest Masters" ? "Manage Rates, Users, and Data Backup" : "Manage Staff Access, Roles, and Security"}
            </p>
          </div>
          
          <button className="bg-[#0047AB] text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-700/20 hover:bg-blue-700 transition-all">
            {activeTab === "Interest Masters" ? "Save All Changes" : <><Plus size={18} strokeWidth={3} /> Add New Staff</>}
          </button>
        </div>

        <div className="flex gap-8 items-start">
          {/* Left Navigation Menu */}
          <div className="w-64 space-y-1">
            {["Interest Masters", "User Management", "Branch Details", "Database & Backup"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === item 
                  ? "bg-white text-[#0047AB] border-l-4 border-[#0047AB] shadow-sm" 
                  : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-8 pb-12">
            
            {activeTab === "Interest Masters" ? (
              /* --- INTEREST MASTERS VIEW --- */
              <>
                {/* 1. Deposit Rates */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                    <h3 className="text-[#0047AB] font-black text-xs uppercase tracking-widest">Deposit Rates (Interest Expense)</h3>
                    <span className="text-[10px] text-slate-400 font-bold">Update the current interest rates.</span>
                  </div>
                  <table className="w-full text-left">
                    <thead className="bg-slate-50/50 border-b border-slate-100">
                      <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-3">Product Name</th>
                        <th className="px-6 py-3 text-center">Current Rate (%)</th>
                        <th className="px-6 py-3">Effective Date</th>
                        <th className="px-6 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {depositRates.map((row, i) => (
                        <tr key={i} className="text-xs font-bold text-slate-700">
                          <td className="px-6 py-4">{row.name}</td>
                          <td className="px-6 py-4 text-center">
                            <input type="text" defaultValue={row.rate} className="w-16 text-center py-1 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-50" />
                          </td>
                          <td className="px-6 py-4 text-slate-500">{row.date}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded text-[9px] uppercase font-black">{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 2. Loan Rates */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/30">
                    <h3 className="text-[#0047AB] font-black text-xs uppercase tracking-widest">Loan Rates (Interest Income)</h3>
                  </div>
                  <table className="w-full text-left">
                    <thead className="bg-slate-50/50 border-b border-slate-100">
                      <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-3">Product Name</th>
                        <th className="px-6 py-3 text-center">Base Rate (%)</th>
                        <th className="px-6 py-3 text-center">Penal Interest (%)</th>
                        <th className="px-6 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {loanRates.map((row, i) => (
                        <tr key={i} className="text-xs font-bold text-slate-700">
                          <td className="px-6 py-4">{row.name}</td>
                          <td className="px-6 py-4 text-center">
                            <input type="text" defaultValue={row.base} className="w-16 text-center py-1 border border-slate-200 rounded-md focus:outline-none" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <input type="text" defaultValue={row.penal} className="w-16 text-center py-1 border border-slate-200 rounded-md focus:outline-none" />
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded text-[9px] uppercase font-black">{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 3. Data & Backup Dark Bar */}
                <div className="bg-[#2D3748] rounded-xl p-6 flex items-center justify-between shadow-xl mt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/50 border border-white/10">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-widest">Cloud Backup Status</h4>
                      <p className="text-white/40 text-[10px] font-bold mt-1 uppercase">Last synced: Today at 10:00 AM</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-green-500 text-[10px] font-black uppercase tracking-tighter">System is Healthy</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#3182CE] text-white px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-3 hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all">
                    Force Backup Now <Cloud size={16} />
                  </button>
                </div>
              </>
            ) : (
              /* --- USER MANAGEMENT VIEW --- */
              <div className="animate-in fade-in duration-500">
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  {staffStats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                      <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Search and Filter */}
                <div className="flex justify-between items-center mb-8">
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search staff name..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none" />
                  </div>
                  <div className="flex gap-2">
                    {["All", "Managers", "Cashiers", "Clerks"].map((tab) => (
                      <button key={tab} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${tab === "All" ? "bg-blue-50 text-[#0047AB]" : "text-slate-500 hover:bg-slate-100"}`}>{tab}</button>
                    ))}
                  </div>
                </div>

                {/* Staff Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {staffMembers.map((staff, i) => (
                    <div key={i} className={`bg-white rounded-2xl border p-6 relative shadow-sm hover:shadow-md transition-all ${staff.isLocked ? "border-red-200 bg-red-50/10" : "border-slate-200"}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${staff.isLocked ? "bg-red-100 text-red-600" : "bg-blue-50 text-[#0047AB]"}`}>
                          {staff.initials}
                        </div>
                        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20} /></button>
                      </div>
                      <div className="text-center mb-6">
                        <h3 className="text-base font-black text-slate-900 mb-1">{staff.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-tighter uppercase ${staff.roleColor}`}>{staff.role}</span>
                        <p className="text-[10px] text-slate-400 font-bold mt-2">{staff.email}</p>
                      </div>
                      <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                        <div className="flex justify-between text-[11px] font-bold">
                          <span className="text-slate-400">{staff.reason ? "Reason:" : "Access Level:"}</span>
                          <span className="text-slate-900">{staff.reason || staff.access}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {staff.isLocked ? (
                          <button className="w-full bg-green-600 text-white py-2 rounded-lg text-[11px] font-black uppercase flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                            <Unlock size={14} /> Unlock User
                          </button>
                        ) : (
                          staff.actions?.map((action, idx) => (
                            <button key={idx} className="flex-1 py-2 border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 hover:bg-slate-50 uppercase tracking-tighter transition-colors">
                              {action}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}