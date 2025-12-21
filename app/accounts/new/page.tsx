"use client";

import { ArrowLeft, Search, Info } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function OpenNewAccount() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/accounts" className="flex items-center gap-2 text-slate-400 text-[10px] font-black hover:text-slate-600 transition-colors uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Accounts
          </Link>
          <div className="bg-slate-100 px-3 py-1 rounded text-[10px] font-bold text-slate-500 uppercase flex items-center gap-2">
            📅 17 Dec 2025
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-8">Open New Account</h1>

        <div className="flex gap-8 max-w-7xl">
          {/* Main Form Area */}
          <div className="flex-[2] space-y-6">
            
            {/* Section 1: Select Member */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6">1. Select Member</h3>
              <div className="flex gap-3 mb-6">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="M-10043" 
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 font-medium"
                  />
                </div>
                <button className="bg-[#0047AB] text-white px-6 py-2 rounded-lg text-sm font-bold">Search</button>
              </div>

              {/* Member Card Result */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">AD</div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">Anita Desai</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">ID: M-10043 | Mobile: +91 98450 99887</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[9px] font-black uppercase">Active</span>
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[9px] font-black uppercase">Standard Member</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Account Configuration */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6">2. Account Configuration</h3>
              
              {/* Account Type Tabs */}
              <div className="flex gap-2 mb-8 bg-slate-50 p-1 rounded-lg w-fit">
                {["Savings (SB)", "Fixed Deposit (FD)", "Recurring (RD)", "Pigmy"].map((tab) => (
                  <button 
                    key={tab}
                    className={`px-4 py-1.5 rounded-md text-[11px] font-bold transition-all ${
                      tab === "Fixed Deposit (FD)" ? "bg-[#0047AB] text-white shadow-sm" : "text-slate-500 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Deposit Amount (₹)</label>
                  <input type="text" defaultValue="100000" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tenure (Months)</label>
                  <input type="text" defaultValue="12" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interest Rate (% p.a)</label>
                  <input type="text" defaultValue="7.50%" className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scheme Code</label>
                  <input type="text" defaultValue="FD-GEN-1YR (General 1 Year)" className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-500 outline-none" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Maturity Instruction</label>
                  <select className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-500 outline-none appearance-none">
                    <option>Auto Renew Principal + Interest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Nominee Details */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#0047AB] font-bold text-sm">3. Nominee Details</h3>
                <button className="text-[10px] font-black text-[#0047AB] uppercase underline decoration-2 underline-offset-4">Same as Member Profile?</button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nominee Name</label>
                  <input type="text" defaultValue="Rohan Desai" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Relationship</label>
                  <input type="text" defaultValue="Son" className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <button className="px-8 py-2.5 border border-slate-200 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50">Cancel</button>
              <button className="px-10 py-2.5 bg-green-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-green-700/20 hover:bg-green-700">Create Account</button>
            </div>
          </div>

          {/* Right Sidebar: Maturity Simulator */}
          <div className="flex-1">
            <div className="bg-[#2D2D2D] text-white rounded-2xl p-6 shadow-xl sticky top-8">
              <h3 className="text-sm font-bold mb-6 flex items-center justify-between">
                Maturity Simulator
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Principal Invested</span>
                  <span className="text-white">₹ 1,00,000</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Interest Rate</span>
                  <span className="text-white">7.50%</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Tenure</span>
                  <span className="text-white">365 Days</span>
                </div>
                <hr className="border-slate-700" />
                <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Interest Earned</span>
                  <span className="text-green-400">+ ₹ 7,500</span>
                </div>
              </div>

              <div className="bg-[#3D3D3D] rounded-xl p-6 text-center border border-slate-600">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Maturity Value</p>
                <p className="text-3xl font-black text-blue-400 mb-1">₹ 1,07,500</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Due Date: 17 Dec 2026</p>
              </div>

              <div className="mt-6 bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg flex gap-3">
                <div className="w-5 h-5 bg-amber-500 text-black rounded flex items-center justify-center font-black text-[10px]">T</div>
                <p className="text-[9px] text-amber-200/80 leading-relaxed font-bold">
                  TDS is applicable if interest exceeds ₹40,000 per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}