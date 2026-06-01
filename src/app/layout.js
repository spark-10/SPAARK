
import './globals.css'; // تأكد من وجود ملف الـ CSS الخاص بتايلوند الافتراضي

export const metadata = {
  title: 'مقاطعة سبارك - لوحة التحكم',
  description: 'لوحة تحكم مشرفي النظام لبوت التذاكر',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0b1220] text-slate-100 antialiased min-h-screen selection:bg-yellow-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
