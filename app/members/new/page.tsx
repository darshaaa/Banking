"use client";

import { ArrowLeft, Upload, PenTool } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function RegisterMember() {
  return (
    <div className="flex h-screen bg-indigo-200 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/members" className="flex items-center gap-2 text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Member List
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-8">Register New Member</h1>

        <div className="space-y-6 max-w-6xl">
          
          {/* Section 1: Personal Information */}
          <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6">
            <h3 className="text-[#0047AB] font-bold text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
              Personal Information
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">First Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Ramesh" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Last Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Kumar" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Father's / Husband's Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Date of Birth</label>
                <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Gender</label>
                <select className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none bg-gray-300">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Occupation</label>
                <input type="text" placeholder="e.g. Business" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Section 2: Contact & KYC */}
            <div className="col-span-2 bg-white rounded-xl border border-slate-300 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6 flex items-center gap-3">
                <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                Contact & KYC
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="+91" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Aadhar Number</label>
                  <input type="text" placeholder="12 Digit UID" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Current Address</label>
                  <textarea rows={2} className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">PAN Number</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Email (Optional)</label>
                  <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Section 3: Biometrics */}
            <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6">
              <h3 className="text-[#0047AB] font-bold text-sm mb-6 flex items-center gap-3">
                <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-[10px]">3</span>
                Biometrics
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer group bg-slate-200">
                  <Upload size={24} className="mx-auto text-slate-300 group-hover:text-blue-500 mb-2" />
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Upload Photo</p>
                  <p className="text-[9px] text-slate-600 mt-1">Max 2MB (JPG)</p>
                </div>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer group bg-slate-200">
                  <PenTool size={24} className="mx-auto text-slate-300 group-hover:text-blue-500 mb-2" />
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Upload Signature</p>
                  <p className="text-[9px] text-slate-600 mt-1">Scan Copy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Initial Share Capital */}
          <div className="bg-white/40 rounded-xl border border-blue-300 p-6 ">
            <h3 className="text-[#0047AB] font-bold text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-[10px]">4</span>
              Initial Share Capital
            </h3>
            <div className="flex items-end gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">No. of Shares</label>
                <input type="number" defaultValue="10" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none" />
              </div>
              <div className="text-slate-600 font-bold mb-2">×</div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Face Value (₹)</label>
                <input type="text" readOnly defaultValue="100" className="w-full border bg-gray-300 border-slate-300 rounded-lg px-4 py-2 text-sm font-bold text-black" />
              </div>
              <div className="text-slate-600 font-bold mb-2">=</div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Total Share Amount</label>
                <div className="w-full bg-green-200 border border-green-400 text-green-900 rounded-lg px-4 py-2 text-sm font-black">₹ 1,000</div>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Admission Fee</label>
                <input type="text" defaultValue="₹ 50" className="w-full border bg-white border-slate-300 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none" />
              </div>
            </div>
          </div>

          {/* Section 5: Nominee Details */}
          <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6">
            <h3 className="text-[#0047AB] font-bold text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-[10px]">5</span>
              Nominee Details
            </h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Nominee Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Relationship</label>
                <select className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none bg-gray-300">
                  <option>Spouse</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Parent</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Nominee DOB</label>
                <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
              </div>
            </div>
            <div className="w-1/3 space-y-2">
              <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Allocation (%)</label>
              <input type="text" defaultValue="100%" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none" />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end items-center gap-4 pt-4 pb-12">
            <button className="px-8 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Reset Form</button>
            <button className="bg-[#0047AB] text-white px-10 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-700/20 hover:bg-[#003399]">Create Member</button>
          </div>

        </div>
      </div>
    </div>
  );
}