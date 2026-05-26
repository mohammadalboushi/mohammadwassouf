import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        {/* 404 */}
        <div className="relative mb-8">
          <span className="text-[120px] font-bold gold-text opacity-20">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🎵</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h1>
        <p className="text-[#71717a] mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </p>

        <Link to="/" className="btn btn-primary">
          <Home size={20} />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}