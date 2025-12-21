"use client";

import { Plus, Calculator, Search, AlertCircle } from "lucide-react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const loanStats = [
  { label: "Total Loan Asset", value: "₹ 5.82 Cr", sub: "Across 320 Active Loans", color: "border-blue-500" },
  { label: "Interest Earned (YTD)", value: "₹ 42.5 Lakh", sub: "Avg Yield: 11.5%", color: "border-green-500" },
  { label: "Overdue EMIs", value: "₹ 1.2 Lakh", sub: "12 Members missed date", color: "border-amber-500" },
  { label: "NPA (Bad Loans)", value: "₹ 8.50 Lakh", sub: "3 Loans > 90 Days Due", color: "border-red-500", bg: "bg-red-50/30" },
];

const loanRegistry = [
  { id: "#GL-24-055", borrower: "Anita Desai", memberId: "M-10043", type: "GOLD LOAN", typeBg: "bg-amber-100 text-amber-700", principal: "₹ 2,00,000", outstanding: "₹ 1,45,000", nextEmi: "15 Jan 2026", emiAmt: "₹ 4,500", status: "Standard", statusBg: "bg-green-100 text-green-700", action: "Pay EMI" },
  { id: "#PL-23-012", borrower: "Suresh Patil", memberId: "M-00892", type: "PERSONAL", typeBg: "bg-blue-100 text-blue-700", principal: "₹ 50,000", outstanding: "₹ 12,400", nextEmi: "Due: 10 Dec 2025", penalty: "+ ₹50 Penalty", status: "Overdue", statusBg: "bg-orange-100 text-orange-700", action: "Pay EMI" },
  { id: "#ML-21-003", borrower: "Ravi Verma", memberId: "M-00112", type: "MORTGAGE", typeBg: "bg-purple-100 text-purple-700", principal: "₹ 10,00,000", outstanding: "₹ 8,50,000", nextEmi: "95 Days Past Due", isNpa: true, status: "NPA", statusBg: "bg-red-100 text-red-700", action: "Legal View" },
  { id: "#SL-24-099", borrower: "Mahesh Babu", memberId: "M-10045", type: "SURETY", typeBg: "bg-slate-100 text-slate-700", principal: "₹ 25,000", outstanding: "₹ 24,000", nextEmi: "05 Jan 2026", emiAmt: "₹ 1,200", status: "Standard", statusBg: "bg-green-100 text-green-700", action: "Pay EMI" },
];

export default function LoanPortfolio() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Loan Portfolio</h1>
            <p className="text-sm text-slate-500 font-medium">Manage Gold, Personal, and Mortgage Loans</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">
              <Calculator size={16} /> EMI Calculator
            </button>
            <Link href="/loans/new">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0047AB] text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-700/20 hover:bg-blue-700 transition-all">
                <Plus size={16} strokeWidth={3} /> New Loan Application
              </button>
            </Link>
          </div>
        </div>

        {/* Loan Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {loanStats.map((stat, i) => (
            <div key={i} className={`bg-white p-6 rounded-xl border-l-4 ${stat.color} shadow-sm ${stat.bg || ''}`}>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-tight">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Filters and Table Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex gap-2">
              {["All Loans", "Gold Loan", "Personal", "NPA List"].map((tab) => (
                <button key={tab} className={`px-4 py-1.5 rounded-md text-xs font-bold tracking-tight transition-all ${tab === "All Loans" ? "bg-blue-50 text-[#0047AB]" : "text-slate-500 hover:bg-slate-100"}`}>
                  {tab === "NPA List" ? <span className="flex items-center gap-1">{tab} <AlertCircle size={12} /></span> : tab}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input type="text" placeholder="Search Loan ID or Name..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-medium w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Loan ID</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Borrower</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Principal</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Outstanding</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Next EMI Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loanRegistry.map((loan, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-xs font-black text-[#0047AB] tracking-tight">{loan.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-black text-slate-800 tracking-tight">{loan.borrower}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{loan.memberId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-tighter ${loan.typeBg}`}>
                      {loan.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-600">{loan.principal}</td>
                  <td className="px-6 py-4 text-xs font-black text-slate-800">{loan.outstanding}</td>
                  <td className="px-6 py-4">
                    <p className={`text-xs font-bold ${loan.isNpa ? 'text-red-500 font-black' : loan.penalty ? 'text-amber-600' : 'text-slate-600'}`}>
                      {loan.nextEmi}
                    </p>
                    {loan.emiAmt && <p className="text-[10px] text-slate-400 font-bold tracking-tight">EMI: {loan.emiAmt}</p>}
                    {loan.penalty && <p className="text-[9px] font-black text-amber-600 uppercase mt-0.5">{loan.penalty}</p>}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tight border ${loan.statusBg} border-current opacity-80`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${
                      loan.action === "Pay EMI" ? "bg-[#22C55E] text-white hover:bg-green-600 shadow-md shadow-green-200" : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}>
                      {loan.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}