"use client";

import Link from "next/link";
import {
  Search,
  Plus,
  Filter,
  Download,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const members = [
  { id: "#M-10042", name: "Rajesh Kumar", date: "Joined: 12 Jan 2024", mobile: "+91 99801 23456", capital: "₹ 10,000", shares: "100 Shares", status: "Active", initials: "RK", color: "bg-blue-100 text-blue-600" },
  { id: "#M-10043", name: "Anita Desai", date: "Joined: 15 Feb 2024", mobile: "+91 98450 99887", capital: "₹ 5,000", shares: "50 Shares", status: "Active", initials: "AD", color: "bg-purple-100 text-purple-600" },
  { id: "#M-00892", name: "Suresh Patil", date: "Resigned: 10 Dec 2025", mobile: "+91 88990 11223", capital: "₹ 0", shares: "0 Shares", status: "Resigned", initials: "SP", color: "bg-red-100 text-red-600" },
  { id: "#M-10045", name: "Mahesh Babu", date: "Joined: 20 Mar 2024", mobile: "+91 99001 22334", capital: "₹ 25,000", shares: "250 Shares", status: "Active", initials: "MB", color: "bg-green-100 text-green-600" },
];

export default function Members() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Member Directory
            </h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Manage 4,500+ Registered Society Members
            </p>
          </div>

          {/* ✅ LINK FIXED HERE */}
          <Link
            href="/members/new"
            className="bg-[#0047AB] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-700/20 hover:bg-[#003399] transition-all"
          >
            <Plus size={18} strokeWidth={3} />
            Register New Member
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by Name, Member ID, or Mobile..."
              className="w-full pl-11 pr-4 py-2.5 bg-indigo-200 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
            All Status <Filter size={14} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
            Export Excel <Download size={14} />
          </button>
        </div>

        {/* Members Table */}
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
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-slate-50/50 transition-colors group border-b border-slate-300"
                >
                  <td className="px-6 py-5 text-sm font-bold text-[#0047AB]">
                    {member.id}
                  </td>
                  <td className="px-6 py-5">
                    <div
                      className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${member.color}`}
                    >
                      {member.initials}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-800">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                      {member.date}
                    </p>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-600">
                    {member.mobile}
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-800">
                      {member.capital}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                      ({member.shares})
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${
                        member.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all">
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-200 border-t border-slate-100 flex justify-between items-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Showing 1 to 4 of 4,500 entries
            </p>
            <div className="flex gap-1">
              <button className="px-3 py-1.5 rounded-md text-xs font-bold text-slate-400 hover:bg-white border border-slate-300 hover:border-slate-200 transition-all">
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-md text-xs font-black transition-all ${
                    page === 1
                      ? "bg-[#0047AB] text-white shadow-md"
                      : "text-slate-500 hover:bg-white border border-slate-300 hover:border-slate-200"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1.5 rounded-md text-xs font-bold text-slate-500 hover:bg-white border border-slate-300 hover:border-slate-200 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
