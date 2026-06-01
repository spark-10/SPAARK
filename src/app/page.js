"use client";
import { signIn } from "next-auth/react";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070c16] px-4">
      <div className="p-8 rounded-2xl bg-[#0f192c] border border-slate-800 shadow-2xl max-w-md w-full text-center space-y-6">
        <div className="mx-auto bg-yellow-500/10 text-yellow-500 p-4 rounded-full w-16 h-16 flex items-center justify-center border border-yellow-500/20">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">لوحة تحكم مقاطعة سبارك</h1>
          <p className="text-sm text-slate-400">يجب تسجيل الدخول عبر Discord OAuth2 للوصول للنظام.</p>
        </div>
        
        {/* زر تسجيل الدخول الذي ينقل المستخدم بعد التحقق مباشرة للـ Dashboard */}
        <button
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
          className="w-full py-3 px-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-xl transition duration-200 flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.71-11,68.6,68.6,0,0,1-10.64-5.12c.91-.67,1.81-1.37,2.65-2.1a75.22,75.22,0,0,0,72.86,0c.84.73,1.74,1.43,2.65,2.1a68.86,68.86,0,0,1-10.64,5.12,74.74,74.74,0,0,0,6.71,11,105.54,105.54,0,0,0,31.06-18.83C129.24,48.52,122.9,25.74,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
          </svg>
          تسجيل الدخول بواسطة ديسكورد
        </button>
      </div>
    </div>
  );
}
