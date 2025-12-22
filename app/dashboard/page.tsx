import { AlertTriangle, TrendingDown, TrendingUp, Users } from "lucide-react";

export default function DashboardContent() {
  return (
    <div className="flex-1 bg-indigo-200 min-h-screen flex">
      {/* 1. Main Center Content Area */}
      <div className="flex-[3] p-8 overflow-y-auto">
        {/* Header Row */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Welcome back, Manager</h2>
            <p className="text-slate-500 text-sm">Wednesday, 17 Dec 2025 | Main Branch</p>
          </div>
          
          {/* Top Right Profile & Safe */}
          <div className="flex items-center gap-6">
            <div className="bg-[#E0F2FE] text-[#0369A1] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100">
              🔒 Safe: ₹ 12,50,400
            </div>
            <div className="flex items-center gap-3 text-right">
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none">Sunil Shetty</p>
                <p className="text-[10px] text-slate-500 font-medium">Branch Manager</p>
              </div>
              <div className="w-10 h-10 bg-slate-300 rounded-full border border-slate-200"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="TOTAL DEPOSITS (TODAY)" value="₹ 4,20,500" trend="▲ 12% vs yesterday" trendColor="text-green-600" />
          <StatCard title="TOTAL WITHDRAWALS" value="₹ 1,15,200" trend="▼ 5% vs yesterday" trendColor="text-red-600" />
          <StatCard title="NEW MEMBERS (MONTH)" value="45" trend="+8 this week" trendColor="text-green-600" />
          <StatCard title="PENDING APPROVALS" value="3" subtitle="Requires Action" isWarning />
        </div>

        {/* --- REFINED FUND FLOW SECTION --- */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-slate-700">Fund Flow (Last 7 Days)</h3>
            <div className="flex gap-4 text-[10px] font-bold text-slate-400">
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600"></span> Income</span>
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400"></span> Outflow</span>
            </div>
          </div>
          
          {/* Chart Bars */}
          <div className="relative h-40 flex items-end justify-between px-4">
            {/* Grid lines for background */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full border-t border-slate-50"></div>
              <div className="w-full border-t border-slate-50"></div>
              <div className="w-full border-t border-slate-50"></div>
              <div className="w-full border-b border-slate-100"></div>
            </div>

            {/* Bars: Data mapping (heights are example values) */}
            {[
              { day: 'Mon', income: 60, outflow: 30 },
              { day: 'Tue', income: 85, outflow: 45 },
              { day: 'Wed', income: 40, outflow: 20 },
              { day: 'Thu', income: 95, outflow: 60 },
              { day: 'Fri', income: 70, outflow: 40 },
              { day: 'Sat', income: 50, outflow: 25 },
            ].map((data, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 z-10 w-full">
                <div className="flex items-end gap-1">
                  <div style={{ height: `${data.income}px` }} className="w-2.5 bg-blue-600 rounded-t-sm"></div>
                  <div style={{ height: `${data.outflow}px` }} className="w-2.5 bg-slate-400 rounded-t-sm"></div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
        {/* --- END FUND FLOW --- */}

        {/* Recent Transactions Table */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-5 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-[#0047AB] text-xs font-bold hover:underline">View Day Book →</button>
          </div>
          <table className="w-full text-left text-sm border-b border-slate-500 ">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px]  font-bold">
              <tr>
                <th className="px-6 py-4">Txn ID</th>
                <th className="px-6 py-4">Member Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y  divide-slate-50">
              <TableRow id="#TX-9921" name="Ramesh Kumar (M-102)" type="Deposit (Cash)" typeColor="text-green-600" amount="₹ 10,000" time="10:45 AM" status="Success" />
              <TableRow id="#TX-9922" name="Anita Desai (M-305)" type="Withdrawal" typeColor="text-red-500" amount="₹ 5,000" time="10:48 AM" status="Success" />
              <TableRow id="#TX-9924" name="Mahesh Babu (M-889)" type="Withdrawal (High Value)" typeColor="text-red-500" amount="₹ 85,000" time="11:15 AM" status="Pending Approval" />
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Separate Right Action Sidebar */}
      <div className="w-65 bg-slate-50 border-l border-slate-300 p-6 space-y-8">
        <div>
          <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-yellow-600" /> Action Required
          </h3>
          <div className="space-y-4">
            <ActionCard title="High Value Withdrawal" detail="Member: Mahesh Babu" amount="₹ 85,000" />
            <ActionCard title="Loan Sanction #LN-55" detail="Type: Gold Loan" amount="₹ 2,00,000" />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">System Status</h3>
          <div className="space-y-3">
            <StatusRow label="Database" value="Online" color="text-green-600" />
            <StatusRow label="Cloud Sync" value="Synced (10:00 AM)" color="text-green-600" />
            <StatusRow label="Server Load" value="12%" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components (StatCard, TableRow, ActionCard, StatusRow) remain the same as your previous logic...
function StatCard({ title, value, trend, trendColor, subtitle, isWarning }: any) {
  return (
    <div className={`p-4 rounded-xl border ${isWarning ? 'bg-[#FFFBEB] border-[#FEF3C7]' : 'bg-white border-slate-100 shadow-sm'}`}>
      <p className="text-[9px] font-black text-slate-400 tracking-wider mb-1 uppercase">{title}</p>
      <p className="text-xl font-bold text-slate-700">{value}</p>
      {trend && <p className={`text-[10px] font-bold mt-1 ${trendColor}`}>{trend}</p>}
      {subtitle && <p className="text-[10px] text-yellow-700 font-bold mt-1">{subtitle}</p>}
    </div>
  );
}

function TableRow({ id, name, type, typeColor, amount, time, status }: any) {
  const isPending = status.includes("Pending");
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 text-slate-400 font-medium">{id}</td>
      <td className="px-6 py-4 font-bold text-slate-800">{name}</td>
      <td className={`px-6 py-4 font-bold text-xs ${typeColor}`}>{type}</td>
      <td className="px-6 py-4 font-bold text-slate-900">{amount}</td>
      <td className="px-6 py-4 text-slate-400 text-xs">{time}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${isPending ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function ActionCard({ title, detail, amount }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm">
      <p className="font-bold text-sm text-slate-900 leading-tight">{title}</p>
      <p className="text-[11px] text-slate-500 mt-1">{detail}</p>
      <p className="text-[11px] font-bold text-slate-900">Amount: {amount}</p>
      <button className="w-full mt-3 py-2 bg-[#0047AB] text-white text-[11px] font-bold rounded-md hover:bg-[#003399]">
        Review & Approve
      </button>
    </div>
  );
}

function StatusRow({ label, value, color }: any) {
  return (
    <div className="flex justify-between items-center text-[11px]">
      <span className="text-slate-500 font-medium tracking-tight">● {label}:</span>
      <span className={`font-bold ${color || 'text-slate-700'}`}>{value}</span>
    </div>
  );
}