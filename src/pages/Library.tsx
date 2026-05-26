import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { maqamFamilies, maqamat, getMaqamatByFamily } from '../data/maqamat';
import FamilyCard from '../components/Maqam/FamilyCard';
import MaqamCard from '../components/Maqam/MaqamCard';
import { Search, Filter, Grid, List } from 'lucide-react';

export default function Library() {
  const [searchParams] = useSearchParams();
  const familyFilter = searchParams.get('family');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFamily, setSelectedFamily] = useState<string | null>(familyFilter);

  const filteredMaqamat = useMemo(() => {
    let result = maqamat;

    if (selectedFamily) {
      result = getMaqamatByFamily(selectedFamily);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedFamily, searchQuery]);

  const selectedFamilyData = maqamFamilies.find(f => f.id === selectedFamily);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gold-text">المكتبة الموسيقية</span>
          </h1>
          <p className="text-[#71717a]">
            اكتشف جميع الماقات العربية وأصولها
          </p>
        </div>

        {/* Search & Filters */}
        <div className="card p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71717a]" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مقام..."
                className="w-full bg-[#0a0a0f] border border-[#1f1f2e] rounded-xl px-12 py-3 text-white placeholder-[#71717a] focus:outline-none focus:border-[#D4AF37]"
                dir="rtl"
              />
            </div>

            {/* View toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-[#D4AF37] text-[#0a0a0f]' : 'bg-[#0a0a0f] border border-[#1f1f2e]'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-[#D4AF37] text-[#0a0a0f]' : 'bg-[#0a0a0f] border border-[#1f1f2e]'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Family filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedFamily(null)}
              className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                !selectedFamily
                  ? 'bg-[#D4AF37] text-[#0a0a0f]'
                  : 'bg-[#0a0a0f] border border-[#1f1f2e] hover:border-[#D4AF37]'
              }`}
            >
              الكل
            </button>
            {maqamFamilies.map(family => (
              <button
                key={family.id}
                onClick={() => setSelectedFamily(family.id)}
                className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                  selectedFamily === family.id
                    ? 'text-[#0a0a0f]'
                    : 'border border-[#1f1f2e] hover:border-[#D4AF37]'
                }`}
                style={{
                  backgroundColor: selectedFamily === family.id ? family.color : 'transparent',
                  color: selectedFamily === family.id ? '#fff' : '#a1a1aa'
                }}
              >
                {family.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected family info */}
        {selectedFamilyData && (
          <div
            className="card p-6 mb-8"
            style={{ borderColor: `${selectedFamilyData.color}40` }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: `${selectedFamilyData.color}20`, color: selectedFamilyData.color }}
              >
                {selectedFamilyData.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: selectedFamilyData.color }}>
                  {selectedFamilyData.name}
                </h2>
                <p className="text-[#71717a]">{selectedFamilyData.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-6 text-[#71717a]">
          عرض {filteredMaqamat.length} مقام
        </div>

        {/* Maqamat grid/list */}
        {filteredMaqamat.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredMaqamat.map((maqam, idx) => (
              <div key={maqam.id} className={`animate-fade-in`} style={{ animationDelay: `${idx * 50}ms` }}>
                <MaqamCard maqam={maqam} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-[#71717a]">جرب البحث بكلمات مختلفة أو تصفية النتائج</p>
          </div>
        )}
      </div>
    </div>
  );
}