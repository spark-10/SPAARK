"use client";
import React, { useState } from 'react';
import { UserPlus, Search, RefreshCw, AlertTriangle, Trash2, Shield, LogOut, Moon, Menu, CheckCircle2, X } from 'lucide-react';

export default function Dashboard() {
  // البيانات الافتراضية للمشرفين كما ظهرت تماماً في الصورة البرمجية المرسلة
  const [admins, setAdmins] = useState([ ]);

  // حالات التحكم في الواجهات
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  
  // حقول إضافة مشرف جديد
  const [newAdminId, setNewAdminId] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminRole, setNewAdminRole] = useState('مشرف نظام جديد');

  // تصفية المشرفين بناءً على محرك البحث بالاسم أو الأيدي
  const filteredAdmins = admins.filter(admin => 
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    admin.id.includes(searchTerm)
  );

  // دالة إضافة المشرف الجديد للـ State مباشرة
  const handleAddAdmin = (e) => {
    e.preventDefault();
    if (!newAdminId || !newAdminName) return;

    const newAdmin = {
      id: newAdminId,
      name: newAdminName,
      role: newAdminRole,
      addedBy: 'أنت (Dev Matrex)',
      daysAgo: 0,
      avatar: ''
    };

    setAdmins([newAdmin, ...admins]);
    setIsModalOpen(false);
    setNewAdminId('');
    setNewAdminName('');
    
    // إظهار تنبيه تم الإضافة بنجاح
    setSuccessAlert(true);
    setTimeout(() => setSuccessAlert(false), 5000);
  };

  // دالة حذف المشرف
  const handleDeleteAdmin = (id) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#090f1c] text-slate-100 font-sans flex flex-col pb-12">
      
      {/* البار العلوي (Top Navbar) */}
      <header className="bg-[#0c1424] border-b border-slate-800/60 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400">
            <Menu className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400">
            <Moon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-red-950/40 text-red-400 hover:text-red-300 rounded-lg transition">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        <div className="text-sm font-semibold tracking-wide text-slate-300 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800">
          مقاطعة سبارك – مشرفين النظام
        </div>
      </header>

      {/* المحتوى الرئيسي للوحة التحكم */}
      <main className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        
        {/* إشعار نجاح الإضافة العلوي الديناميكي */}
        {successAlert && (
          <div className="bg-emerald-950/80 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between shadow-xl text-emerald-400 animate-fadeIn duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="font-medium text-sm sm:text-base">تم إضافة الشخص بنجاح إلى قائمة مشرفي النظام! لديه الآن الصلاحية الكاملة.</span>
            </div>
            <button onClick={() => setSuccessAlert(false)} className="text-emerald-500/60 hover:text-emerald-400">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* ترويسة الصفحة وزر الإضافة الرئيسي */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">مشرفين النظام</h1>
            <p className="text-sm text-slate-400">الأشخاص المضافين هنا يحصلون على صلاحية كاملة على النظام بالكامل. استخدم بحذر شديد.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="self-start sm:self-center bg-[#f5c43a] hover:bg-[#e0b02b] text-black font-bold px-5 py-3 rounded-xl transition duration-150 shadow-lg shadow-yellow-500/10 flex items-center gap-2 text-sm"
          >
            <UserPlus className="w-4 h-4 stroke-[2.5]" />
            إضافة مشرف
          </button>
        </div>

        {/* شبكة الإحصائيات (Metrics Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#121b2d] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between h-32 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">مضاف بواسطتك</span>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">0</span>
              <span className="text-xs text-slate-500 mt-1">مشرفون أضفتهم أنت</span>
            </div>
          </div>
          
          <div className="bg-[#121b2d] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between h-32 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">آخر إضافة</span>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">منذ 9 يوم</span>
              <span className="text-xs text-slate-500 mt-1">آخر مشرف تمت إضافته</span>
            </div>
          </div>

          <div className="bg-[#121b2d] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between h-32 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">إجمالي المشرفين</span>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">{admins.length}</span>
              <span className="text-xs text-slate-500 mt-1">أشخاص لديهم صلاحيات النظام</span>
            </div>
          </div>
        </div>

        {/* صندوق التحذير الأصفر */}
        <div className="bg-[#1c1817] border border-amber-500/20 rounded-xl p-4 flex items-start gap-3 shadow-inner">
          <AlertTriangle className="w-5 h-5 text-[#f5c43a] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#f5c43a]/90 leading-relaxed font-medium">
            إضافة شخص كمشرف نظام يمنحه صلاحية كاملة على جميع القطاعات والإعدادات — تأكد قبل الإضافة. فقط أصحاب الصلاحيات العامة يمكنهم الوصول لهذه الصفحة.
          </p>
        </div>

        {/* شريط البحث والتحديث */}
        <div className="bg-[#111928] border border-slate-800/80 rounded-xl p-3 flex flex-col sm:flex-row items-center gap-3 shadow-md">
          <div className="relative w-full sm:flex-1">
            <Search className="w-5 h-5 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="ابحث بالاسم أو المعرف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#090f1c] border border-slate-800 rounded-xl pr-12 pl-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-700 transition"
            />
          </div>
          <button 
            onClick={() => setSearchTerm('')}
            className="w-full sm:w-auto bg-[#162238] hover:bg-[#1c2b47] text-slate-300 font-medium px-5 py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 border border-slate-800"
          >
            <RefreshCw className="w-4 h-4" />
            تحديث
          </button>
        </div>

        {/* قائمة بطاقات المشرفين المتجاوبة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredAdmins.map((admin) => (
            <div key={admin.id} className="bg-[#111928] border border-slate-800/70 rounded-2xl p-5 flex flex-col justify-between space-y-5 transition duration-200 hover:border-slate-700 relative overflow-hidden shadow-lg group">
              
              <div className="space-y-4">
                {/* الجزء العلوي للبطاقة: الصورة والاسم والمعرف */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-black shrink-0 uppercase text-lg shadow-inner">
                    {admin.name.substring(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-sm sm:text-base truncate tracking-wide">{admin.name}</h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-mono select-all mt-0.5 truncate">{admin.id}</p>
                  </div>
                </div>

                {/* التفاصيل والمسؤوليات */}
                <div className="space-y-1.5 text-xs text-slate-400 bg-[#090f1c]/50 p-3 rounded-xl border border-slate-800/40">
                  <div className="flex items-center gap-2 truncate">
                    <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="font-medium text-slate-300 truncate">{admin.role}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span>أُضيف بواسطة:</span>
                    <span className="text-slate-400 font-medium">{admin.addedBy}</span>
                  </div>
                </div>
              </div>

              {/* ذيل البطاقة: الأزرار وحالة المدة الإضافية */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/50 text-xs">
                <button 
                  onClick={() => handleDeleteAdmin(admin.id)}
                  className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-3 py-2 rounded-lg transition font-medium flex items-center gap-1 border border-red-500/20 hover:border-transparent"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  حذف
                </button>
                <div className="flex flex-col items-end text-[10px] text-slate-500">
                  <span className="bg-[#172033] text-amber-400/90 font-bold px-2.5 py-1 rounded-md border border-amber-500/10 mb-1">
                    مشرف نظام
                  </span>
                  <span>منذ {admin.daysAgo} يوم</span>
                </div>
              </div>

            </div>
          ))}

          {/* في حال عدم وجود أي نتائج في البحث */}
          {filteredAdmins.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 text-sm">
              لم يتم العثور على أي مشرفين يطابقون معايير البحث.
            </div>
          )}
        </div>
      </main>

      {/* النافذة المنبثقة الإضافية الاحترافية (Add Admin Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#111928] border border-slate-800 max-w-md w-full rounded-2xl shadow-2xl p-6 space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#f5c43a]" />
                تعيين مشرف نظام جديد
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddAdmin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">اسم المشرف بالكامل</label>
                <input 
                  type="text" 
                  required
                  placeholder="مثال: مروان البدوي"
                  value={newAdminName}
                  onChange={(e) => setNewAdminName(e.target.value)}
                  className="w-full bg-[#090f1c] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-slate-700 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">معرف الديسكورد (Discord User ID)</label>
                <input 
                  type="text" 
                  required
                  placeholder="مثال: 895962505753546872"
                  value={newAdminId}
                  onChange={(e) => setNewAdminId(e.target.value)}
                  className="w-full bg-[#090f1c] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 font-mono text-right focus:outline-none focus:border-slate-700 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">الرتبة / الدور الوظيفي داخل لوحة التحكم</label>
                <input 
                  type="text" 
                  placeholder="مثال: مسؤول القطاعات أو الدعم الفني"
                  value={newAdminRole}
                  onChange={(e) => setNewAdminRole(e.target.value)}
                  className="w-full bg-[#090f1c] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-slate-700 transition"
                />
              </div>

              <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3 text-[11px] text-amber-400/80 leading-relaxed">
                تنبيه: بمجرد النقر على إضافة، سيُمنح الحساب وصولاً فورياً لإدارة البوت بالكامل وتعديل الأقسام.
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button 
                  type="submit"
                  className="flex-1 bg-[#f5c43a] hover:bg-[#e0b02b] text-black font-bold py-3 rounded-xl transition text-sm shadow-md"
                >
                  إضافة وإعطاء الصلاحية
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-[#162238] hover:bg-[#1c2b47] text-slate-300 font-medium py-3 rounded-xl transition text-sm border border-slate-800"
                >
                  إلغاء الأمر
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
