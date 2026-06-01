import React from 'react';
import { Search, RefreshCw, UserPlus, AlertTriangle, Shield, Clock, User } from 'lucide-react';

export default function AdminsPage() {
  // هنا تضع مصفوفة البيانات التي ستجلبها من السيرفر (فارغة حالياً كقالب)
  const admins = []; 

  return (
    <div dir="rtl" className="min-h-screen bg-[#0d1117] text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* الترويسة العلوية */}
        <div className="bg-[#161b22] p-4 rounded-xl flex justify-between items-center border border-slate-800/50 shadow-sm">
          <h1 className="text-lg font-bold text-gray-200">مقاطعة سبارك - مشرفين النظام</h1>
        </div>

        {/* قسم الإحصائيات وزر الإضافة */}
        <div className="flex flex-col-reverse md:flex-row gap-6">
          
          <div className="w-full md:w-1/4 flex flex-col justify-start">
            <button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              <UserPlus size={20} />
              إضافة مشرف
            </button>
          </div>

          <div className="w-full md:w-3/4 bg-[#161b22] p-6 rounded-xl border border-slate-800/50 shadow-sm space-y-6">
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-2">مشرفين النظام</h2>
              <p className="text-gray-400 text-sm">الأشخاص المضافين هنا يحصلون على صلاحية كاملة على النظام بالكامل. استخدم بحذر شديد.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1c212b] p-5 rounded-xl border border-slate-700/50">
                <p className="text-gray-400 text-sm mb-2 text-right">إجمالي المشرفين</p>
                {/* استبدل الصفر بمتغير الإجمالي الخاص بك */}
                <p className="text-3xl font-bold text-right">0</p> 
              </div>
              <div className="bg-[#1c212b] p-5 rounded-xl border border-slate-700/50">
                <p className="text-gray-400 text-sm mb-2 text-right">آخر إضافة</p>
                {/* استبدل النص بمتغير الوقت الخاص بك */}
                <p className="text-3xl font-bold text-right">--</p>
              </div>
              <div className="bg-[#1c212b] p-5 rounded-xl border border-slate-700/50">
                <p className="text-gray-400 text-sm mb-2 text-right">مضاف بواسطتك</p>
                {/* استبدل الصفر بمتغير الإضافات الخاصة بالمستخدم */}
                <p className="text-3xl font-bold text-right">0</p>
              </div>
            </div>

            <div className="bg-[#422c16] text-[#facc15] p-3 rounded-lg flex items-center gap-3 text-sm border border-[#5c3e1a]">
              <AlertTriangle size={20} className="shrink-0" />
              <span>إضافة شخص كمشرف نظام يمنحه صلاحية إدارة كاملة على جميع القطاعات والإعدادات — تأكد قبل الإضافة.</span>
            </div>
          </div>
        </div>

        {/* شريط البحث */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-[#161b22] hover:bg-[#1c212b] text-gray-300 px-6 py-3 rounded-xl border border-slate-700/50 flex items-center justify-center gap-2 transition-colors order-2 md:order-1 w-full md:w-auto">
            <RefreshCw size={18} />
            تحديث
          </button>
          
          <div className="flex-1 bg-[#161b22] rounded-xl border border-slate-800/50 p-2 flex items-center gap-3 px-4 order-1 md:order-2">
            <Search size={20} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="ابحث بالاسم أو المعرف..." 
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 focus:ring-0 text-right" 
            />
          </div>
        </div>

        {/* شبكة بطاقات المشرفين الديناميكية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {admins.map((admin, index) => (
            <AdminCard key={index} data={admin} />
          ))}
        </div>
      </div>
    </div>
  );
}

// مكون فرعي لبطاقة المشرف يعتمد كلياً على البيانات الممررة له
function AdminCard({ data }) {
  return (
    <div className="bg-[#161b22] p-5 rounded-xl border border-slate-800/50 flex flex-col gap-4 hover:border-slate-600 transition-colors">
      <div className="flex justify-between items-start flex-row-reverse">
        <div className="flex flex-col items-end w-full">
          <div className="flex items-center gap-3 mb-1 flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
               {/* سيتم عرض صورة المشرف من البيانات */}
               {data.avatar ? (
                 <img src={data.avatar} alt="avatar" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full bg-gradient-to-tr from-slate-600 to-slate-800"></div>
               )}
            </div>
            <h3 className="font-bold flex items-center gap-1">
              {data.name}
              {data.isOwner && <span className="text-yellow-500 text-xs">👑</span>}
            </h3>
          </div>
          <span className="text-xs text-gray-500 font-mono">{data.id}</span>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-400 text-right mt-2">
        <p className="flex items-center justify-end gap-2"><span className="text-gray-300">{data.role}</span> <Shield size={14} className="text-blue-400"/></p>
        <p className="flex items-center justify-end gap-2"><span className="text-gray-300">أضيف بواسطة {data.addedBy}</span> <User size={14} className="text-gray-500" /></p>
        <p className="flex items-center justify-end gap-2"><span className="text-gray-300">منذ {data.time}</span> <Clock size={14} className="text-gray-500" /></p>
      </div>

      <div className="flex justify-between items-center mt-2 pt-4 border-t border-slate-800/50 flex-row-reverse">
        <span className="bg-[#422c16] text-[#facc15] text-xs px-3 py-1 rounded-md border border-[#5c3e1a] flex items-center gap-1">
           مشرف نظام <Shield size={12} />
        </span>
        <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
          حذف
        </button>
      </div>
    </div>
  );
}
