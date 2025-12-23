"use client";

import React, { useState } from "react"; 
import { Search, Plus, Calculator, ChevronDown, X, CheckCircle2, Clock } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

// --- ADDED INTERFACE FOR TYPESCRIPT ---
interface Account {
  no: string;
  name: string;
  id: string;
  type: string;
  typeColor: string;
  interest: string;
  balance: string;
  status: string;
  statusColor: string;
  isMaturing?: boolean;
}

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

const accounts: Account[] = [
  { no: "SB-01-10042", name: "Rajesh Kumar", id: "M-10042", type: "Savings", typeColor: "bg-blue-50 text-blue-600", interest: "4.00%", balance: "₹ 12,450.00", status: "ACTIVE", statusColor: "bg-green-100 text-green-700" },
  { no: "FD-24-00892", name: "Anita Desai", id: "M-10043", type: "Fixed Deposit", typeColor: "bg-emerald-50 text-emerald-600", interest: "7.50%", balance: "₹ 1,00,000.00", status: "ACTIVE", statusColor: "bg-green-100 text-green-700", isMaturing: true },
  { no: "RD-24-00112", name: "Suresh Patil", id: "M-00892", type: "Recurring", typeColor: "bg-purple-50 text-purple-600", interest: "6.80%", balance: "₹ 5,000 / mo", status: "DUE", statusColor: "bg-amber-100 text-amber-700" },
  { no: "PG-01-05521", name: "Mahesh Babu", id: "Agent: Ramesh (A-01)", type: "Pigmy", typeColor: "bg-orange-50 text-orange-600", interest: "3.00%", balance: "₹ 850.00", status: "ACTIVE", statusColor: "bg-green-100 text-green-700" },
];

export default function AccountOperations() {
  const [activeTab, setActiveTab] = useState("All Accounts");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  
  // --- FIXED STATE DECLARATION ---
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredAccounts = accounts.filter((acc) => {
    const matchesTab = 
      activeTab === "All Accounts" || 
      (activeTab === "Savings (SB)" && acc.type === "Savings") ||
      (activeTab === "Fixed Deposits (FD)" && acc.type === "Fixed Deposit") ||
      (activeTab === "Recurring (RD)" && acc.type === "Recurring") ||
      (activeTab === "Pigmy" && acc.type === "Pigmy");

    const matchesSearch = 
      acc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      acc.no.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = 
      statusFilter === "All Status" || 
      acc.status.toUpperCase().includes(statusFilter.toUpperCase());

    return matchesTab && matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden font-sans relative">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 text-slate-900">
          <div>
            <h1 className="text-2xl font-bold tracking-tight uppercase">Account Operations</h1>
            <p className="text-sm text-slate-500 mt-1 font-bold">Manage Savings, FDs, RDs, and Daily Deposits</p>
          </div>
          <div className="flex gap-3 text-slate-600">
            <button 
              onClick={() => setShowCalculator(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-black hover:bg-slate-50 transition-all shadow-sm active:scale-95"
            >
              <Calculator size={18} /> Calculator
            </button>
            <Link href="/accounts/new">
              <button className="bg-[#0047AB] text-white px-5 py-2.5 rounded-lg text-sm font-black flex items-center gap-2 shadow-lg shadow-blue-700/20 hover:bg-[#003399] transition-all active:scale-95">
                <Plus size={18} strokeWidth={3} /> Open New Account
              </button>
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {accountSummary.map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{card.label}</p>
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
                  <p className="text-2xl font-black text-[#0047AB] tracking-tighter">{card.value}</p>
                  <p className="text-[11px] text-slate-400 font-black mt-1 uppercase">{card.sub}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden">
          <div className="flex border-b border-slate-300 px-6 pt-4 bg-slate-200">
            {["All Accounts", "Savings (SB)", "Fixed Deposits (FD)", "Recurring (RD)", "Pigmy"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-4 text-xs font-black transition-all border-b-2 uppercase tracking-tighter ${
                  activeTab === tab ? "border-[#0047AB] text-[#0047AB]" : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 flex gap-3 bg-white relative">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search A/c Number or Member Name..." 
                className="w-full pl-11 pr-4 py-2.5 bg-indigo-200 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all text-slate-800"
              />
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-xs font-black transition-all ${
                  statusFilter !== "All Status" ? "bg-[#0047AB] text-white border-[#0047AB]" : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {statusFilter} <ChevronDown size={14} className={isFilterOpen ? "rotate-180 transition-transform" : ""} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 shadow-xl rounded-xl z-50 overflow-hidden">
                  {["All Status", "Active", "Due"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-[10px] font-black uppercase hover:bg-indigo-50 text-slate-600 transition-colors"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-300">
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Account No</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Member Name</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Interest %</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Balance / Principal</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Maturity / Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAccounts.map((acc) => (
                <tr key={acc.no} className="hover:bg-slate-50 transition-colors border-b border-slate-300">
                  <td className="px-6 py-5 text-sm font-bold text-[#0047AB]">{acc.no}</td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-slate-800 tracking-tight">{acc.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">ID: {acc.id}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-tighter shadow-sm border ${acc.typeColor}`}>
                      {acc.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-600 text-center">{acc.interest}</td>
                  <td className="px-6 py-5 text-sm font-black text-slate-800">{acc.balance}</td>
                  <td className="px-6 py-5">
                    {acc.isMaturing ? (
                      <div>
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">Due: 15 Dec 2026</p>
                        <p className="text-[10px] font-black text-green-600 uppercase tracking-tighter mt-0.5">Mat: ₹ 1,15,800</p>
                      </div>
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${acc.statusColor}`}>
                        {acc.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button 
                      onClick={() => setSelectedAccount(acc)}
                      className="px-4 py-1.5 border-2 border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all uppercase tracking-widest shadow-sm active:scale-95"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- CALCULATOR MODAL --- */}
      {showCalculator && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCalculator(false)}>
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#0047AB] p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter">FD/RD Calculator</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Investment Forecast</p>
              </div>
              <button onClick={() => setShowCalculator(false)} className="p-2 hover:bg-white/20 rounded-full transition-all">
                <X size={20} />
              </button>
            </div>
            <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Principal Amount (₹)</label>
                  <input type="number" placeholder="Enter amount" className="w-full px-4 py-4 bg-slate-100 border-2 border-slate-200 rounded-xl text-lg font-black outline-none focus:border-blue-600 transition-all text-slate-800" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 text-slate-800">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rate (%)</label>
                    <input type="number" defaultValue="7.5" className="w-full px-4 py-3 bg-slate-100 border-2 border-slate-200 rounded-xl font-bold outline-none" />
                  </div>
                  <div className="space-y-2 text-slate-800">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tenure (Months)</label>
                    <input type="number" defaultValue="12" className="w-full px-4 py-3 bg-slate-100 border-2 border-slate-200 rounded-xl font-bold outline-none" />
                  </div>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-100 text-center">
                  <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Maturity Estimate</p>
                  <p className="text-3xl font-black text-green-700">₹ 0.00</p>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* --- ACCOUNT DETAILS DRAWER --- */}
      {selectedAccount && (
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-40 flex justify-end" onClick={() => setSelectedAccount(null)}>
          <div className="w-[450px] bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col border-l border-slate-300" onClick={(e) => e.stopPropagation()}>
             <div className="p-8 border-b border-slate-200 bg-slate-50 flex justify-between items-center text-slate-900">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">Statement</h3>
                  <p className="text-xs font-bold text-[#0047AB] uppercase tracking-widest">{selectedAccount.no}</p>
                </div>
                <button onClick={() => setSelectedAccount(null)} className="p-2 hover:bg-white rounded-full transition-all border border-slate-200 shadow-sm text-slate-600"><X size={20}/></button>
             </div>
             <div className="flex-1 p-8 space-y-6">
                <div className="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-3xl">
                   <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Current Balance</p>
                   <p className="text-4xl font-black text-indigo-900">{selectedAccount.balance}</p>
                </div>
                <div className="space-y-4 text-slate-800">
                   <div className="flex justify-between py-3 border-b border-slate-100 font-bold uppercase text-[10px]">
                      <span className="text-slate-400">Member Name</span>
                      <span>{selectedAccount.name}</span>
                   </div>
                   <div className="flex justify-between py-3 border-b border-slate-100 font-bold uppercase text-[10px]">
                      <span className="text-slate-400">Interest Rate</span>
                      <span className="text-green-600">{selectedAccount.interest} P.A.</span>
                   </div>
                </div>
             </div>
             <div className="p-8 border-t border-slate-200 bg-slate-50">
                <button className="w-full bg-[#0047AB] text-white py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-700/30">Print Passbook</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}