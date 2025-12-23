"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Filter,
  Download,
  Pencil,
  X,
  Save,
  Sidebar as SidebarIcon,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const members = [
  { id: "#M-10042", name: "Rajesh Kumar", date: "Joined: 12 Jan 2024", mobile: "+91 99801 23456", capital: "10,000", shares: "100 Shares", status: "Active", initials: "RK", color: "bg-blue-100 text-blue-600" },
  { id: "#M-10043", name: "Anita Desai", date: "Joined: 15 Feb 2024", mobile: "+91 98450 99887", capital: "5,000", shares: "50 Shares", status: "Active", initials: "AD", color: "bg-purple-100 text-purple-600" },
  { id: "#M-00892", name: "Suresh Patil", date: "Resigned: 10 Dec 2025", mobile: "+91 88990 11223", capital: "0", shares: "0 Shares", status: "Resigned", initials: "SP", color: "bg-red-100 text-red-600" },
  { id: "#M-10045", name: "Mahesh Babu", date: "Joined: 20 Mar 2024", mobile: "+91 99001 22334", capital: "25,000", shares: "250 Shares", status: "Active", initials: "MB", color: "bg-green-100 text-green-600" },
];

export default function Members() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  
  // --- NEW LOGIC FOR BUTTONS ---
  const [statusFilter, setStatusFilter] = useState("All");

  // Logic: Cycle through statuses when button is clicked
  const toggleStatusFilter = () => {
    const filters = ["All", "Active", "Resigned"];
    const currentIndex = filters.indexOf(statusFilter);
    const nextIndex = (currentIndex + 1) % filters.length;
    setStatusFilter(filters[nextIndex]);
  };

  // Logic: Filter members based on selected status
  const filteredMembers = members.filter(m => 
    statusFilter === "All" ? true : m.status === statusFilter
  );

  // Logic: Export to Excel (CSV)
  const handleExportExcel = () => {
    const headers = ["Member ID,Full Name,Mobile,Capital,Status\n"];
    const rows = members.map(m => `${m.id},${m.name},${m.mobile},${m.capital},${m.status}\n`);
    const blob = new Blob([...headers, ...rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "Society_Members_Export.csv");
    a.click();
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setIsPanelOpen(true);
  };

  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8 relative">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Member Directory</h1>
            <p className="text-sm text-slate-500 mt-1 font-medium tracking-tight">Manage 4,500+ Registered Society Members</p>
          </div>
          <Link
            href="/members/new"
            className="bg-[#0047AB] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-700/20 hover:bg-[#003399] transition-all"
          >
            <Plus size={18} strokeWidth={3} />
            Register New Member
          </Link>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search by Name, Member ID, or Mobile..."
              className="w-full pl-11 pr-4 py-2.5 bg-indigo-200 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all font-medium"
            />
          </div>
          
          {/* UPDATED: STATUS FILTER BUTTON */}
          <button 
            onClick={toggleStatusFilter}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold transition-colors ${statusFilter !== "All" ? "bg-blue-50 border-blue-300 text-blue-700" : "border-slate-300 text-slate-600 hover:bg-slate-50"}`}
          >
            {statusFilter} Status <Filter size={14} />
          </button>

          {/* UPDATED: EXCEL EXPORT BUTTON */}
          <button 
            onClick={handleExportExcel}
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-600 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all"
          >
            Export Excel <Download size={14} />
          </button>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-200 border-b border-slate-300">
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Member ID</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Profile</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Share Capital</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* UPDATED: Now maps through filteredMembers */}
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50/50 transition-colors group border-b border-slate-300">
                  <td className="px-6 py-5 text-sm font-bold text-[#0047AB]">{member.id}</td>
                  <td className="px-6 py-5">
                    <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-black text-[10px] ${member.color}`}>
                      {member.initials}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-800">{member.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-0.5">{member.date}</p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-600">{member.mobile}</td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-slate-800">₹ {member.capital}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase tracking-tighter">({member.shares})</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${member.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button 
                      onClick={() => handleEditClick(member)}
                      className="p-2 text-slate-400 hover:text-[#b7ab03e2] hover:bg-indigo-50 rounded-lg transition-all"
                    >
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-slate-200 border-t border-slate-100 flex justify-between items-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Showing 1 to {filteredMembers.length} of {filteredMembers.length} entries
            </p>
            {/* ... PAGINATION REMAINS SAME ... */}
          </div>
        </div>

        {/* --- EDIT PANEL REMAINS UNCHANGED --- */}
        {isPanelOpen && selectedMember && (
          <>
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity" onClick={() => setIsPanelOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-[400px] bg-white z-50 shadow-2xl border-l border-slate-200 animate-in slide-in-from-right duration-300">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Edit Member</h2>
                    <p className="text-xs font-bold text-[#0047AB]">{selectedMember.id}</p>
                  </div>
                  <button onClick={() => setIsPanelOpen(false)} className="p-2 hover:bg-white rounded-full transition-all shadow-sm">
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>
                <div className="flex-1 p-8 space-y-6 overflow-y-auto">
                  <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-300">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg ${selectedMember.color}`}>
                      {selectedMember.initials}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 tracking-tight leading-none mb-1">{selectedMember.name}</p>
                      <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 rounded-md text-slate-400 border border-slate-200">System ID Verified</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Update Mobile Number</label>
                      <input type="text" defaultValue={selectedMember.mobile} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-xl text-sm font-bold focus:border-[#0047AB] outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Modify Share Capital (₹)</label>
                      <input type="text" defaultValue={selectedMember.capital} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-xl text-sm font-bold focus:border-[#0047AB] outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Membership Status</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-xl text-sm font-bold focus:border-[#0047AB] outline-none transition-all appearance-none cursor-pointer">
                        <option value="Active" selected={selectedMember.status === "Active"}>Active Member</option>
                        <option value="Resigned" selected={selectedMember.status === "Resigned"}>Resigned / Closed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <button 
                    onClick={() => setIsPanelOpen(false)}
                    className="w-full bg-[#0047AB] text-white py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-700/30 hover:bg-[#003399] flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Save size={18} />
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}