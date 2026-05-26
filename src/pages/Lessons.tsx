import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { lessons, getLessonsByCategory } from '../data/maqamat';
import { BookOpen, Clock, Play, ChevronLeft, CheckCircle, Circle, Lock } from 'lucide-react';

export default function Lessons() {
  const { lessonId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'basics' | 'intermediate' | 'advanced'>('all');

  const filteredLessons = selectedCategory === 'all'
    ? lessons
    : getLessonsByCategory(selectedCategory);

  const currentLesson = lessonId ? lessons.find(l => l.id === lessonId) : null;

  // Lesson detail view
  if (currentLesson) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/lessons"
            className="flex items-center gap-2 text-[#71717a] hover:text-[#D4AF37] mb-6"
          >
            <ChevronLeft size={18} />
            العودة للدروس
          </Link>

          {/* Lesson hero */}
          <div className="card p-8 mb-8 bg-gradient-to-l from-[#D4AF37]/10 to-transparent">
            <div className="flex items-center gap-4 mb-6">
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center
                ${currentLesson.category === 'basics' ? 'bg-green-500/20 text-green-400' : ''}
                ${currentLesson.category === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                ${currentLesson.category === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
              `}>
                <BookOpen size={32} />
              </div>
              <div>
                <span className={`
                  text-sm px-3 py-1 rounded-full
                  ${currentLesson.category === 'basics' ? 'bg-green-500/20 text-green-400' : ''}
                  ${currentLesson.category === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  ${currentLesson.category === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                `}>
                  {currentLesson.category === 'basics' ? 'أساسي' :
                   currentLesson.category === 'intermediate' ? 'متوسط' : 'متقدم'}
                </span>
                <h1 className="text-3xl font-bold mt-2">{currentLesson.title}</h1>
              </div>
            </div>

            <div className="flex items-center gap-6 text-[#71717a]">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{currentLesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>مستوى الصعوبة:</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < currentLesson.difficulty ? 'bg-[#D4AF37]' : 'bg-[#1f1f2e]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">الوصف</h2>
            <p className="text-[#a1a1aa] leading-relaxed">{currentLesson.description}</p>
          </div>

          {/* Topics */}
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">المواضيع</h2>
            <div className="space-y-4">
              {currentLesson.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-[#0a0a0f] rounded-xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-[#a1a1aa]">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder content */}
          <div className="card p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
              <Play className="text-[#D4AF37]" size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">محتوى الدرس</h3>
            <p className="text-[#71717a] mb-6">
              هذا الدرس يتضمن video lessons, exercises, and quizzes
            </p>
            <button className="btn btn-primary">
              <Play size={20} />
              ابدأ الدرس
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Lessons list view
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gold-text">الدروس التعليمية</span>
          </h1>
          <p className="text-[#71717a]">
            تعلم الموسيقى العربية خطوة بخطوة مع دروسنا المنظمة
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'basics', label: 'أساسي', color: 'green' },
            { id: 'intermediate', label: 'متوسط', color: 'yellow' },
            { id: 'advanced', label: 'متقدم', color: 'red' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? cat.color ? `bg-${cat.color}-500 text-white` : 'bg-[#D4AF37] text-[#0a0a0f]'
                  : 'bg-[#111118] border border-[#1f1f2e] hover:border-[#D4AF37]'
              }`}
              style={selectedCategory === cat.id && cat.color ? {
                backgroundColor: cat.color === 'green' ? '#22c55e' : cat.color === 'yellow' ? '#eab308' : '#ef4444',
                color: 'white'
              } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="card p-4 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">
              {getLessonsByCategory('basics').length}
            </div>
            <div className="text-sm text-[#71717a]">أساسي</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">
              {getLessonsByCategory('intermediate').length}
            </div>
            <div className="text-sm text-[#71717a]">متوسط</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl font-bold text-red-400 mb-1">
              {getLessonsByCategory('advanced').length}
            </div>
            <div className="text-sm text-[#71717a]">متقدم</div>
          </div>
        </div>

        {/* Lessons list */}
        <div className="space-y-4">
          {filteredLessons.map((lesson, idx) => (
            <Link
              key={lesson.id}
              to={`/lessons/${lesson.id}`}
              className="card p-6 group flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center
                ${lesson.category === 'basics' ? 'bg-green-500/20 text-green-400' : ''}
                ${lesson.category === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                ${lesson.category === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
              `}>
                <BookOpen size={28} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                    {lesson.title}
                  </h3>
                  <span className={`
                    text-xs px-3 py-1 rounded-full
                    ${lesson.category === 'basics' ? 'bg-green-500/20 text-green-400' : ''}
                    ${lesson.category === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                    ${lesson.category === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                  `}>
                    {lesson.category === 'basics' ? 'أساسي' :
                     lesson.category === 'intermediate' ? 'متوسط' : 'متقدم'}
                  </span>
                </div>
                <p className="text-[#71717a] mb-3">{lesson.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-[#71717a]">
                    <Clock size={16} />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#71717a]">
                    <span>المستوى:</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < lesson.difficulty ? 'bg-[#D4AF37]' : 'bg-[#1f1f2e]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <ChevronLeft className="text-[#71717a] group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all" size={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}