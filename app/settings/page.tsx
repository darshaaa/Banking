"use client";

import React, { useState } from "react";
import { Save, Plus, Database, Cloud, Edit2, ShieldCheck, ChevronRight, Search, ArrowLeft, MoreHorizontal, Unlock, Trash2, X, Eye, Key, Shield } from "lucide-react";
import Sidebar from "../components/Sidebar";

// --- DATA MASTERS ---
const initialDepositRates = [
  { name: "Savings Account (SB)", rate: "4.00", date: "01 Apr 2024", status: "Active" },
  { name: "Fixed Deposit (1 Year)", rate: "7.50", date: "01 Dec 2025", status: "Active" },
  { name: "Fixed Deposit (Senior Citizen)", rate: "8.00", date: "01 Dec 2025", status: "Active" },
  { name: "Recurring Deposit (RD)", rate: "6.80", date: "01 Jan 2024", status: "Active" },
];

const initialLoanRates = [
  { name: "Gold Loan (Secured)", base: "12.00", penal: "2.00", status: "Active" },
  { name: "Personal Loan", base: "14.50", penal: "2.00", status: "Active" },
  { name: "Mortgage Loan", base: "11.00", penal: "2.00", status: "Active" },
];

const initialStaffMembers = [
  { id: 1, name: "Sunil Shetty", initials: "SS", role: "BRANCH MANAGER", roleGroup: "Managers", roleColor: "bg-blue-100 text-blue-700", email: "sunil.s@corebank.com", access: "Full Admin", lastLogin: "Just Now", status: "online", actions: ["Edit Profile", "Permissions"] },
  { id: 2, name: "Ramesh Kumar", initials: "RK", role: "HEAD CASHIER", roleGroup: "Cashiers", roleColor: "bg-orange-100 text-orange-700", email: "ramesh.k@corebank.com", access: "High Value", lastLogin: "10 mins ago", status: "online", actions: ["Edit Profile", "Reset Pass"] },
  { id: 3, name: "Anita Desai", initials: "AD", role: "JUNIOR CLERK", roleGroup: "Clerks", roleColor: "bg-purple-100 text-purple-700", email: "anita.d@corebank.com", access: "Read Only", lastLogin: "Yesterday", status: "offline", actions: ["Edit Profile", "Log Activity"] },
  { id: 4, name: "Suresh Patil", initials: "SP", role: "ACCOUNT LOCKED", roleGroup: "Clerks", roleColor: "bg-red-100 text-red-700", email: "suresh.p@corebank.com", reason: "3 Failed Logins", lastLogin: "2 Days ago", isLocked: true, status: "offline" },
];

export default function CombinedConfiguration() {
  const [activeTab, setActiveTab] = useState("Interest Masters");
  const [staffList, setStaffList] = useState(initialStaffMembers);
  const [filterRole, setFilterRole] = useState("All");
  
  // Interaction States
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [editingStaff, setEditingStaff] = useState<any>(null);

  // --- LOGIC ---
  const handleDelete = (id: number) => {
    setStaffList(prev => prev.filter(s => s.id !== id));
    setDeleteConfirmId(null);
  };

  const filteredStaff = staffList.filter(s => 
    filterRole === "All" || s.roleGroup === filterRole
  );

  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden relative">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <button 
              onClick={() => setActiveTab("Interest Masters")}
              className="flex items-center gap-2 text-slate-500 text-[10px] font-black hover:text-slate-700 uppercase tracking-widest mb-2 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Settings
            </button>
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

          <div className="flex-1 space-y-8 pb-12">
            {activeTab === "Interest Masters" ? (
              <>
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
                    <tbody className="divide-y divide-slate-50 text-slate-800">
                      {initialDepositRates.map((row, i) => (
                        <tr key={i} className="text-xs font-bold">
                          <td className="px-6 py-4">{row.name}</td>
                          <td className="px-6 py-4 text-center">
                            <input type="text" defaultValue={row.rate} className="w-16 text-center py-1 border border-slate-200 rounded-md" />
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

                <div className="bg-[#2D3748] rounded-xl p-6 flex items-center justify-between shadow-xl mt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/50 border border-white/10">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-widest">Cloud Backup Status</h4>
                      <p className="text-white/40 text-[10px] font-bold mt-1 uppercase">Last synced: Today at 10:00 AM</p>
                    </div>
                  </div>
                  <button className="bg-[#3182CE] text-white px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-3 hover:bg-blue-500 transition-all">
                    Force Backup Now <Cloud size={16} />
                  </button>
                </div>
              </>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="relative w-64 text-slate-800">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search staff name..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium outline-none" />
                  </div>
                  <div className="flex gap-2">
                    {["All", "Managers", "Cashiers", "Clerks"].map((tab) => (
                      <button 
                        key={tab} 
                        onClick={() => setFilterRole(tab)}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${filterRole === tab ? "bg-[#0047AB] text-white" : "text-slate-500 hover:bg-slate-100 bg-white border border-slate-200"}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {filteredStaff.map((staff) => (
                    <div key={staff.id} className={`bg-white rounded-2xl border p-6 relative shadow-sm hover:shadow-md transition-all ${staff.isLocked ? "border-red-200 bg-red-50/10" : "border-slate-200"}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${staff.isLocked ? "bg-red-100 text-red-600" : "bg-blue-50 text-[#0047AB]"}`}>
                          {staff.initials}
                        </div>
                        <div className="relative">
                          <button onClick={() => setOpenMenuId(openMenuId === staff.id ? null : staff.id)} className="text-slate-400 hover:text-slate-600 p-1 rounded-md">
                            <MoreHorizontal size={20} />
                          </button>
                          {openMenuId === staff.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl z-10 overflow-hidden">
                              <button 
                                onClick={() => { setDeleteConfirmId(staff.id); setOpenMenuId(null); }}
                                className="w-full text-left px-4 py-2 text-[10px] font-black text-red-600 hover:bg-red-50 uppercase tracking-widest flex items-center gap-2"
                              >
                                <Trash2 size={12} /> Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-base font-black text-slate-900 mb-1">{staff.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-tighter uppercase ${staff.roleColor}`}>{staff.role}</span>
                        <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase">{staff.email}</p>
                      </div>

                      <div className="flex gap-2">
                        {staff.isLocked ? (
                          <button className="w-full bg-green-600 text-white py-2 rounded-lg text-[11px] font-black uppercase flex items-center justify-center gap-2">
                            <Unlock size={14} /> Unlock User
                          </button>
                        ) : (
                          <button 
                            onClick={() => setEditingStaff(staff)}
                            className="w-full py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 hover:bg-slate-100 uppercase tracking-tighter transition-colors"
                          >
                            Edit Profile & Security
                          </button>
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

      {/* --- DELETE CONFIRM MODAL --- */}
      {deleteConfirmId && (
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Are you sure?</h3>
            <p className="text-xs text-slate-500 font-bold mb-8 uppercase leading-relaxed">
              This action will permanently delete this staff member and revoke all system access immediately.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirmId(null)} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirmId)} className="flex-1 py-3 bg-red-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-200">Delete User</button>
            </div>
          </div>
        </div>
      )}

      {/* --- EDIT PROFILE & PERMISSIONS MODAL --- */}
      {editingStaff && (
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-800">
            <div className="bg-[#0047AB] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black">{editingStaff.initials}</div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight">{editingStaff.name}</h3>
                  <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">{editingStaff.role} Settings</p>
                </div>
              </div>
              <button onClick={() => setEditingStaff(null)} className="p-2 hover:bg-white/10 rounded-full"><X /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-2 gap-8">
              {/* Security & Access */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-[#0047AB] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Shield size={14} /> Permissions & Access
                  </h4>
                  <div className="space-y-3">
                    {["Loan Disbursement", "Cash Collection", "Audit View", "Customer KYC Edit"].map(perm => (
                      <div key={perm} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[11px] font-bold text-slate-700">{perm}</span>
                        <div className="w-10 h-5 bg-green-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" /></div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 border-2 border-slate-100 rounded-xl text-[10px] font-black text-slate-600 uppercase flex items-center justify-center gap-2 hover:bg-slate-50">
                  <Key size={14} /> Reset Password
                </button>
              </div>

              {/* Activity Log */}
              <div>
                <h4 className="text-[10px] font-black text-[#0047AB] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Eye size={14} /> Recent Login Activity
                </h4>
                <div className="space-y-4">
                  {[
                    { date: "Today, 10:12 AM", desc: "Logged in via Web (Mysuru IP)" },
                    { date: "Yesterday, 04:45 PM", desc: "Updated Loan ID #GL-24-055" },
                    { date: "21 Dec, 11:20 AM", desc: "Exported Trial Balance" },
                  ].map((log, i) => (
                    <div key={i} className="border-l-2 border-slate-100 pl-4 py-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{log.date}</p>
                      <p className="text-[11px] font-bold text-slate-600">{log.desc}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setEditingStaff(null)} className="w-full mt-8 py-3 bg-[#0047AB] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-200">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}