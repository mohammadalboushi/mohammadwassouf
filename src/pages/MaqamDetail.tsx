import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMaqamById, getMaqamFamily, maqamat } from '../data/maqamat';
import ScaleDiagram from '../components/Maqam/ScaleDiagram';
import BranchTree from '../components/Maqam/BranchTree';
import MaqamCard from '../components/Maqam/MaqamCard';
import {
  ArrowRight,
  ChevronLeft,
  MapPin,
  History,
  Heart,
  GitBranch,
  Music2,
  ArrowLeftRight,
  Play,
  Volume2
} from 'lucide-react';

export default function MaqamDetail() {
  const { maqamId } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'scales' | 'branches' | 'modulations'>('overview');

  const maqam = getMaqamById(maqamId || '');
  const family = maqam ? getMaqamFamily(maqam.family) : null;

  if (!maqam) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎵</div>
          <h2 className="text-2xl font-bold mb-2">المقام غير موجود</h2>
          <Link to="/library" className="btn btn-primary mt-4">
            العودة للمكتبة
          </Link>
        </div>
      </div>
    );
  }

  const relatedMaqamat = maqam.relatedMaqamat
    .map(id => maqamat.find(m => m.id === id))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-l from-[#D4AF37]/10 to-transparent border-b border-[#1f1f2e]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#71717a] mb-6">
            <Link to="/library" className="hover:text-[#D4AF37]">المكتبة</Link>
            <span>/</span>
            {family && (
              <>
                <Link to={`/library?family=${family.id}`} className="hover:text-[#D4AF37]">
                  {family.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#D4AF37]">{maqam.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                {family && (
                  <span
                    className="family-badge"
                    style={{ backgroundColor: `${family.color}20`, color: family.color }}
                  >
                    {family.name}
                  </span>
                )}
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${maqam.teachingPriority === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
                  ${maqam.teachingPriority === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  ${maqam.teachingPriority === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                  ${maqam.teachingPriority === 'master' ? 'bg-purple-500/20 text-purple-400' : ''}
                `}>
                  {maqam.teachingPriority === 'beginner' ? 'مبتدئ' :
                   maqam.teachingPriority === 'intermediate' ? 'متوسط' :
                   maqam.teachingPriority === 'advanced' ? 'متقدم' : 'احترافي'}
                </span>
              </div>

              <h1 className="text-5xl font-bold mb-4 gold-text">{maqam.name}</h1>

              <div className="flex items-center gap-4 text-[#71717a] mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>الأصل: {maqam.origin}</span>
                </div>
              </div>

              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                {maqam.description}
              </p>

              {/* Emotional character */}
              <div className="card p-4 bg-gradient-to-l from-[#EC4899]/10 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="text-[#EC4899]" size={18} />
                  <span className="font-semibold text-[#EC4899]">الطابع العاطفي</span>
                </div>
                <p className="text-[#a1a1aa]">{maqam.emotionalCharacter}</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 text-center">
                <div className="text-3xl font-bold gold-text mb-1">{maqam.branches.length}</div>
                <div className="text-sm text-[#71717a]">فرع</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-3xl font-bold blue-text mb-1">{maqam.modulations.length}</div>
                <div className="text-sm text-[#71717a]">تنقل</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-3xl font-bold text-[#10B981] mb-1">
                  {maqam.scale.quarterTones.length}
                </div>
                <div className="text-sm text-[#71717a]">نغمة ربع</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-3xl font-bold text-[#8B5CF6] mb-1">
                  {maqam.relatedMaqamat.length}
                </div>
                <div className="text-sm text-[#71717a]">مقام ذو صلة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: <Music2 size={18} /> },
            { id: 'scales', label: 'المقاييس', icon: <Volume2 size={18} /> },
            { id: 'branches', label: 'الفروع', icon: <GitBranch size={18} /> },
            { id: 'modulations', label: 'التنقلات', icon: <ArrowLeftRight size={18} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#D4AF37] text-[#0a0a0f]'
                  : 'bg-[#111118] border border-[#1f1f2e] hover:border-[#D4AF37]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Scale */}
                <ScaleDiagram scale={maqam.scale} />

                {/* Audio placeholder */}
                {maqam.audioDemos.length > 0 && (
                  <div className="card p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Play size={20} className="text-[#D4AF37]" />
                      مقاطع صوتية
                    </h4>
                    <div className="space-y-3">
                      {maqam.audioDemos.map((demo, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-[#0a0a0f] rounded-xl"
                        >
                          <div>
                            <div className="font-medium">{demo.title}</div>
                            <div className="text-sm text-[#71717a]">{demo.description}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-[#71717a]">{demo.duration}</span>
                            <button className="p-2 bg-[#D4AF37] rounded-full text-[#0a0a0f]">
                              <Play size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Historical origin */}
                <div className="card p-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <History size={20} className="text-[#D4AF37]" />
                    الأصل التاريخي
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717a]">الفترة</span>
                      <span className="font-medium">{maqam.historicalOrigin.period}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#71717a]">المنطقة</span>
                      <span className="font-medium">{maqam.historicalOrigin.region}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-[#a1a1aa] leading-relaxed">
                    {maqam.historicalOrigin.description}
                  </p>
                  {maqam.historicalOrigin.notableCompositions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#1f1f2e]">
                      <span className="text-sm text-[#71717a] mb-2 block">الإنجازات البارزة:</span>
                      <div className="flex flex-wrap gap-2">
                        {maqam.historicalOrigin.notableCompositions.map((comp, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scales' && (
            <div className="grid md:grid-cols-2 gap-8">
              <ScaleDiagram scale={maqam.scale} highlightTonic />

              {maqam.branches.length > 0 && (
                <div className="card p-6">
                  <h4 className="text-lg font-semibold mb-4">مقاييس الفروع</h4>
                  <div className="space-y-4">
                    {maqam.branches.map((branch, idx) => (
                      <div key={idx} className="p-4 bg-[#0a0a0f] rounded-xl">
                        <h5 className="font-semibold mb-2">{branch.name}</h5>
                        <div className="scale-diagram mb-2">
                          {branch.scale.degrees.map((note, i) => (
                            <div
                              key={i}
                              className={`
                                scale-note text-sm
                                ${i === 0 ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#1f1f2e] text-[#a1a1aa]'}
                              `}
                            >
                              {note}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-[#71717a]">{branch.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'branches' && (
            <BranchTree
              branches={maqam.branches}
              mainMaqamName={maqam.name}
              mainMaqamId={maqam.id}
            />
          )}

          {activeTab === 'modulations' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ArrowLeftRight size={20} className="text-[#D4AF37]" />
                  التنقلات المتاحة
                </h4>
                {maqam.modulations.length > 0 ? (
                  <div className="space-y-4">
                    {maqam.modulations.map((mod, idx) => {
                      const targetMaqam = getMaqamById(mod.targetMaqam);
                      return (
                        <Link
                          key={idx}
                          to={`/maqam/${mod.targetMaqam}`}
                          className="flex items-center justify-between p-4 bg-[#0a0a0f] rounded-xl hover:bg-[#1a1a24] transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-[#D4AF37]">{targetMaqam?.name || mod.targetMaqam}</div>
                            <div className="text-sm text-[#71717a]">{mod.description}</div>
                          </div>
                          <ChevronLeft className="text-[#71717a]" size={20} />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[#71717a]">لا توجد تنقلات محددة لهذا المقام</p>
                )}
              </div>

              <div className="card p-6">
                <h4 className="text-lg font-semibold mb-4">المقامات ذات الصلة</h4>
                <div className="grid gap-4">
                  {relatedMaqamat.map(related => related && (
                    <Link
                      key={related.id}
                      to={`/maqam/${related.id}`}
                      className="flex items-center gap-4 p-4 bg-[#0a0a0f] rounded-xl hover:bg-[#1a1a24] transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold">
                        {related.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{related.name}</div>
                        <div className="text-sm text-[#71717a]">{related.family}</div>
                      </div>
                      <ChevronLeft className="text-[#71717a]" size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}