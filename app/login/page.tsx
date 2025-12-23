"use client";

import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  if (email && password) {
    localStorage.setItem("loggedIn", "true"); 
    router.push("/dashboard"); 
  } else {
    alert("Please enter credentials");
  }
};

  return (
    <div className="flex h-screen w-full bg-indigo-200 overflow-hidden font-sans">
      <div className="hidden lg:block lg:w-3/5 relative">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?auto=format&fit=crop&q=80&w=2000"
          alt="Bank Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600/30 backdrop-blur-[2px]"></div>
        <div className="absolute bottom-12 left-12 text-white z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-lg">
              <LayoutDashboard className="text-[#0047AB]" size={32} />
            </div>
            <h1 className="text-4xl font-black tracking-tight">SOCIETY MANAGE</h1>
          </div>
          <p className="text-indigo-50 text-lg max-w-md font-medium leading-relaxed">
            The complete cooperative society management system. Secure, transparent, and easy to use.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-indigo-50/50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 p-10 border border-white">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500 font-medium">Please enter your details to sign in</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Admin Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0047AB] transition-colors" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@society.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#0047AB] transition-all font-medium"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  Password
                </label>
                <a href="#" className="text-[11px] font-bold text-[#0047AB] hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0047AB] transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#0047AB] transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-[#0047AB] focus:ring-[#0047AB]" />
              <label htmlFor="remember" className="text-xs font-bold text-slate-600 cursor-pointer">Stay signed in for 30 days</label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0047AB] text-white py-4 rounded-2xl text-sm font-black shadow-xl shadow-blue-700/20 hover:bg-[#003399] transform active:scale-[0.98] transition-all mt-4"
            >
              Sign In to Dashboard
            </button>
          </form>
          <p className="mt-10 text-center text-xs text-slate-400 font-medium">
            Don't have an account? <span className="text-[#0047AB] font-bold cursor-pointer hover:underline">Contact Support</span>
          </p>
        </div>
      </div>
    </div>
  );
}