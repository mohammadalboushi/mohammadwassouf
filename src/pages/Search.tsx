import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { maqamat, lessons, rhythms } from '../data/maqamat';
import MaqamCard from '../components/Maqam/MaqamCard';
import { Search, X, Filter, ChevronLeft } from 'lucide-react';

type TabType = 'all' | 'maqamat' | 'lessons' | 'rhythms';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return { maqamat: [], lessons: [], rhythms: [] };

    const lowerQuery = query.toLowerCase();

    return {
      maqamat: activeTab === 'all' || activeTab === 'maqamat'
        ? maqamat.filter(m =>
            m.name.toLowerCase().includes(lowerQuery) ||
            m.description.toLowerCase().includes(lowerQuery) ||
            m.family.toLowerCase().includes(lowerQuery)
          )
        : [],
      lessons: activeTab === 'all' || activeTab === 'lessons'
        ? lessons.filter(l =>
            l.title.toLowerCase().includes(lowerQuery) ||
            l.description.toLowerCase().includes(lowerQuery) ||
            l.topics.some(t => t.toLowerCase().includes(lowerQuery))
          )
        : [],
      rhythms: activeTab === 'all' || activeTab === 'rhythms'
        ? rhythms.filter(r =>
            r.name.toLowerCase().includes(lowerQuery) ||
            r.arabicName.includes(query) ||
            r.description.toLowerCase().includes(lowerQuery)
          )
        : [],
    };
  }, [query, activeTab]);

  const totalResults = results.maqamat.length + results.lessons.length + results.rhythms.length;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="gold-text">البحث</span>
          </h1>
          <p className="text-[#71717a]">ابحث في المقامات والدروس والإيقاعات</p>
        </div>

        {/* Search input */}
        <div className="card p-4 mb-6">
          <div className="flex items-center gap-4">
            <Search size={24} className="text-[#71717a]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="اكتب ما تبحث عنه..."
              className="flex-1 bg-transparent text-lg outline-none"
              dir="auto"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-2 hover:bg-[#1f1f2e] rounded-lg transition-colors"
              >
                <X size={20} className="text-[#71717a]" />
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        {query && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {[
              { id: 'all', label: `الكل (${totalResults})` },
              { id: 'maqamat', label: `الماقات (${results.maqamat.length})` },
              { id: 'lessons', label: `الدروس (${results.lessons.length})` },
              { id: 'rhythms', label: `الإيقاعات (${results.rhythms.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#D4AF37] text-[#0a0a0f]'
                    : 'bg-[#111118] border border-[#1f1f2e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {!query ? (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-[#1f1f2e] mb-4" />
            <h2 className="text-xl font-bold mb-2">ابدأ البحث</h2>
            <p className="text-[#71717a]">
              اكتب في خانة البحث لاستكشاف المقامات والدروس والإيقاعات
            </p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-bold mb-2">لم يتم العثور على نتائج</h2>
            <p className="text-[#71717a]">
              جرب البحث بكلمات مختلفة
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Maqamat results */}
            {results.maqamat.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  المقامات ({results.maqamat.length})
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {results.maqamat.map(maqam => (
                    <MaqamCard key={maqam.id} maqam={maqam} />
                  ))}
                </div>
              </section>
            )}

            {/* Lessons results */}
            {results.lessons.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  الدروس ({results.lessons.length})
                </h2>
                <div className="space-y-3">
                  {results.lessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => navigate(`/lessons/${lesson.id}`)}
                      className="card p-4 w-full text-right hover:border-[#D4AF37] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">{lesson.title}</h3>
                          <p className="text-sm text-[#71717a]">{lesson.description}</p>
                        </div>
                        <ChevronLeft className="text-[#71717a]" size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Rhythms results */}
            {results.rhythms.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  الإيقاعات ({results.rhythms.length})
                </h2>
                <div className="space-y-3">
                  {results.rhythms.map(rhythm => (
                    <div key={rhythm.id} className="card p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">{rhythm.arabicName}</h3>
                          <p className="text-sm text-[#71717a]">{rhythm.description}</p>
                        </div>
                        <span className="text-[#D4AF37] font-bold">{rhythm.count} نقرات</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}