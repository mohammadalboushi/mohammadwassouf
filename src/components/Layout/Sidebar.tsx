import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Library,
  Music,
  BookOpen,
  Play,
  Search,
  Menu,
  X
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { path: '/', label: 'الرئيسية', icon: <Home size={20} /> },
  { path: '/library', label: 'المكتبة', icon: <Library size={20} /> },
  { path: '/rhythms', label: 'الإيقاعات', icon: <Music size={20} /> },
  { path: '/lessons', label: 'الدروس', icon: <BookOpen size={20} /> },
  { path: '/about', label: 'عن الموسيقى العربية', icon: <Play size={20} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-[#111118] border border-[#1f1f2e] p-3 rounded-xl"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 bg-[#111118] border-l border-[#1f1f2e]
          z-40 transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[#1f1f2e]">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
              <span className="text-2xl font-bold text-[#0a0a0f]">م</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gold-text">محمد وسوف</h1>
              <p className="text-sm text-[#71717a]">تعليم الموسيقى العربية</p>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="p-4">
          <Link
            to="/search"
            className="flex items-center gap-3 bg-[#0a0a0f] border border-[#1f1f2e] rounded-xl px-4 py-3 text-[#71717a] hover:border-[#D4AF37] transition-colors"
          >
            <Search size={18} />
            <span>البحث في الموقات...</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-all
                  ${isActive
                    ? 'bg-gradient-to-l from-[#D4AF37]/20 to-transparent border-r-4 border-[#D4AF37] text-[#D4AF37]'
                    : 'text-[#a1a1aa] hover:bg-[#1a1a24] hover:text-white'
                  }
                `}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Info section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#1f1f2e]">
          <div className="bg-gradient-to-l from-[#D4AF37]/10 to-transparent rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[#D4AF37] mb-2">المميزات</h3>
            <ul className="text-xs text-[#71717a] space-y-1">
              <li>• مكتبة شاملة للموقات</li>
              <li>• إيقاعات عربية متعددة</li>
              <li>• دروس تعليمية متقدمة</li>
              <li>• مقاطع صوتية توضيحية</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}