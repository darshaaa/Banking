"use client";

import { Search, Plus, Calculator, ChevronDown } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

const accountSummary = [
  { label: "Total Savings Balance", value: "₹ 1.24 Cr", sub: "2,100 Active Accounts" },
  { label: "Fixed Deposits (FD)", value: "₹ 3.50 Cr", sub: "450 Active Certs" },
  { label: "Daily Pigmy Collection", value: "₹ 45,000", sub: "Collected Today" },
  { 
    label: "Interest Rates", 
    isRates: true,
    rates: [
      { type: "Savings:", val: "4.0%" },
      { type: "FD (1Yr):", val: "7.5%" }
    ] 
  }
];

const accounts = [
  { no: "SB-01-10042", name: "Rajesh Kumar", id: "M-10042", type: "Savings", typeColor: "bg-blue-50 text-blue-600", interest: "4.00%", balance: "₹ 12,450.00", status: "ACTIVE", statusColor: "bg-green-100 text-green-700" },
  { no: "FD-24-00892", name: "Anita Desai", id: "M-10043", type: "Fixed Deposit", typeColor: "bg-emerald-50 text-emerald-600", interest: "7.50%", balance: "₹ 1,00,000.00", status: "Due: 15 Dec 2026", subStatus: "Mat: ₹ 1,15,800", isMaturing: true },
  { no: "RD-24-00112", name: "Suresh Patil", id: "M-00892", type: "Recurring", typeColor: "bg-purple-50 text-purple-600", interest: "6.80%", balance: "₹ 5,000 / mo", status: "1 INSTALLMENT DUE", statusColor: "bg-amber-100 text-amber-700" },
  { no: "PG-01-05521", name: "Mahesh Babu", id: "Agent: Ramesh (A-01)", type: "Pigmy", typeColor: "bg-orange-50 text-orange-600", interest: "3.00%", balance: "₹ 850.00", status: "ACTIVE", statusColor: "bg-green-100 text-green-700" },
];

export default function AccountOperations() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Account Operations</h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">Manage Savings, FDs, RDs, and Daily Deposits</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              <Calculator size={18} /> Calculator
            </button>
           <Link href="/accounts/new">
  <button className="bg-[#0047AB] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-700/20 hover:bg-[#003399]">
    <Plus size={18} strokeWidth={3} /> Open New Account
  </button>
</Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {accountSummary.map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">{card.label}</p>
              {card.isRates ? (
                <div className="space-y-1">
                  {card.rates?.map((r, idx) => (
                    <div key={idx} className="flex justify-between text-sm font-bold">
                      <span className="text-slate-500">{r.type}</span>
                      <span className="text-slate-900">{r.val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-2xl font-black text-[#0047AB]">{card.value}</p>
                  <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase">{card.sub}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Tabbed Table Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-300 px-6 pt-4 bg-slate-200">
            {["All Accounts", "Savings (SB)", "Fixed Deposits (FD)", "Recurring (RD)", "Pigmy"].map((tab, i) => (
              <button 
                key={tab} 
                className={`pb-4 px-4 text-xs font-bold transition-all border-b-2 ${
                  i === 0 ? "border-[#0047AB] text-[#0047AB]" : "border-transparent text-slate-600 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table Controls */}
          <div className="p-4 flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
              <input 
                type="text" 
                placeholder="Search A/c Number or Member Name..." 
                className="w-full pl-11 pr-4 py-2 bg-indigo-200 border border-slate-300 rounded-lg text-xs focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600">
              Filter Status <ChevronDown size={14} />
            </button>
          </div>

          {/* Table */}
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-y border-slate-300">
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">Account No</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">Member Name</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest text-center">Interest %</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">Balance / Principal</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">Maturity / Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-600 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {accounts.map((acc) => (
                <tr key={acc.no} className="hover:bg-slate-50/50 transition-colors border-b border-slate-300">
                  <td className="px-6 py-5 text-sm font-bold text-[#0047AB]">{acc.no}</td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-800">{acc.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">ID: {acc.id}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${acc.typeColor}`}>
                      {acc.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-600 text-center">{acc.interest}</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-800">{acc.balance}</td>
                  <td className="px-6 py-5">
                    {acc.isMaturing ? (
                      <div>
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">Due: 15 Dec 2026</p>
                        <p className="text-[10px] font-black text-green-600 uppercase tracking-tighter mt-0.5">Mat: ₹ 1,15,800</p>
                      </div>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${acc.statusColor}`}>
                        {acc.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-slate-300 rounded-lg text-[11px] font-bold text-slate-600 hover:bg-slate-50">
                      View
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