"use client";

import { ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar"; 

export default function NewLoanApplication() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="flex items-center gap-2 text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Loan List
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-8">New Loan Application</h1>
        <div className="flex gap-8 items-start">
          <div className="flex-[2.5] space-y-6">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6">1. Borrower Information</h3>
              <div className="space-y-4">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Search Member (Name or ID)</label>
                <div className="flex gap-2">
                  <input type="text" defaultValue="M-10042" className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB]/10" />
                  <button className="bg-[#0047AB] text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-[#003399]">Find</button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-xl border border-slate-300">
                  <div className="w-10 h-10 bg-blue-100 text-[#0047AB] rounded-full flex items-center justify-center font-bold text-xs">RK</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Rajesh Kumar</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium">ID: M-10042 | +91 99801 23456</p>
                    <span className="inline-block mt-1 text-[9px] font-bold text-green-600 uppercase tracking-tight">Active Member</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6">2. Loan Details</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loan Product</label>
                  <input type="text" readOnly value="Gold Loan (Secured)" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-sm text-slate-600 font-medium cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interest Rate (p.a)</label>
                  <input type="text" readOnly value="12.00%" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-sm text-slate-600 font-medium cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Requested Amount (₹)</label>
                  <input type="text" defaultValue="100000" className="w-full border border-blue-300 rounded-lg px-4 py-2 text-sm text-[#0047AB] font-bold focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tenure (Months)</label>
                  <input type="text" defaultValue="12" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6">3. Guarantor / Surety</h3>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Guarantor Member ID</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter ID..." className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                  <button className="border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-50">Check Eligibility</button>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg flex items-start gap-2 border border-amber-100">
                  <Info size={14} className="text-amber-600 mt-0.5" />
                  <p className="text-[10px] text-amber-700 font-bold uppercase tracking-tight">Note: Guarantor must have {">"} ₹5,000 Share Capital.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-6 pt-4">
              <button className="text-slate-400 text-xs font-bold hover:text-slate-600">Cancel</button>
              <button className="bg-[#22C55E] text-white px-10 py-2.5 rounded-lg text-xs font-bold hover:bg-green-600 shadow-md transition-all">Submit Application</button>
            </div>
          </div>
          <div className="flex-1 sticky top-8">
            <div className="bg-[#0047AB] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-sm mb-6 uppercase tracking-widest opacity-80">Repayment Preview</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-xs font-medium opacity-90">
                  <span>Principal:</span>
                  <span>₹ 1,00,000</span>
                </div>
                <div className="flex justify-between text-xs font-medium opacity-90">
                  <span>Interest (12%):</span>
                  <span>₹ 12,000</span>
                </div>
                <div className="flex justify-between text-xs font-medium opacity-90">
                  <span>Processing Fee:</span>
                  <span>₹ 500</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
                <div className="flex justify-between text-sm font-black uppercase tracking-wider">
                  <span>Total Payable:</span>
                  <span>₹ 1,12,000</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center mb-6">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">Monthly EMI</p>
                <p className="text-3xl font-black">₹ 9,333</p>
                <p className="text-[9px] mt-2 opacity-50 italic">First Date: 17 Jan 2026</p>
              </div>
              <div className="flex items-center gap-2 text-[9px] font-bold bg-black/10 p-2.5 rounded-lg border border-white/5 uppercase tracking-tighter">
                 <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                 Loan exceeds 20x Share Capital linkage.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}