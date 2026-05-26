// Arabic Music Types and Interfaces

export interface QuarterTone {
  note: string;
  cents: number;
  name: string;
}

export interface Scale {
  degrees: string[];
  intervals: number[];
  quarterTones: QuarterTone[];
  tonic: string;
}

export interface Branch {
  name: string;
  scale: Scale;
  description: string;
  emotionalCharacter: string;
}

export interface Modulation {
  targetMaqam: string;
  description: string;
}

export interface HistoricalOrigin {
  period: string;
  region: string;
  description: string;
  notableCompositions: string[];
}

export interface AudioDemo {
  title: string;
  description: string;
  duration: string;
  composer?: string;
}

export interface Maqam {
  id: string;
  name: string;
  family: string;
  origin: string;
  scale: Scale;
  description: string;
  emotionalCharacter: string;
  branches: Branch[];
  modulations: Modulation[];
  historicalOrigin: HistoricalOrigin;
  relatedMaqamat: string[];
  audioDemos: AudioDemo[];
  teachingPriority: 'beginner' | 'intermediate' | 'advanced' | 'master';
}

export interface Rhythm {
  id: string;
  name: string;
  arabicName: string;
  pattern: string;
  count: number;
  description: string;
  usage: string;
  examples: string[];
}

export interface Lesson {
  id: string;
  title: string;
  category: 'basics' | 'intermediate' | 'advanced';
  duration: string;
  difficulty: number;
  description: string;
  topics: string[];
}

export interface MaqamFamily {
  id: string;
  name: string;
  color: string;
  mainMaqam: string;
  description: string;
  characteristics: string[];
}

// Note: Quarter tones explanation
// - Half flat (نصف低了): 50 cents
// - Quarter flat (ربع低了): 25 cents
// - Three-quarter tone (ثلاثة أرباع低了): 75 cents
// Common Arabic microtones:
// - Bayati quarter tone: between 2nd and 3rd degree (~50 cents flat from 3rd)
// - Rast quarter tone: between 4th and 5th degree (~50 cents flat from 4th)
// - Saba quarter tone: between 2nd and 3rd degree (75 cents flat from 2nd)