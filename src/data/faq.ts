export type FaqItem = { question: string; answer: string }
export type { SanityFaqItem } from '@/sanity/types'
export { getAllFaqItems } from '@/sanity/queries'

export type FaqCategory = 'skilsmassa' | 'vardnad' | 'ekonomi' | 'process' | 'kostnader'

export const faqCategories: { id: FaqCategory | 'alla'; label: string }[] = [
  { id: 'alla', label: 'Alla frågor' },
  { id: 'skilsmassa', label: 'Skilsmässa' },
  { id: 'vardnad', label: 'Vårdnad' },
  { id: 'ekonomi', label: 'Ekonomi & arv' },
  { id: 'kostnader', label: 'Kostnader' },
  { id: 'process', label: 'Processen' },
]

/** Vanliga frågor på startsidan (kort, välkomnande) */
export const homePageFaq: FaqItem[] = [
  {
    question: 'Hur snabbt kan ni komma ut?',
    answer:
      'Vi försöker alltid hitta en tid samma vecka om det gäller planerat arbete, och svarar samma dag så ofta det går. Vid akuta fel: ring så styr vi om vi kan.',
  },
  {
    question: 'Jobbar ni där vi bor också – utanför centrum?',
    answer:
      'Ja, vi rör oss i hela regionen. Ser du inte ditt område i listan på sidan, hör av dig i alla fall — vi löser ofta samma resor in i grannorter.',
  },
  {
    question: 'Vad ingår när vi ber om en offert?',
    answer:
      'Du får tydlig omfattning, ungefärlig tidsram och en prisram att förhålla dig till. Om något är oklart ring vi hellre upp en gång extra än gissar snett.',
  },
  {
    question: 'Får man referenser från tidigare kunder?',
    answer:
      'Här ovan hittar du omdömen, och när uppdraget känns likt ert gärna tips vi om liknande jobb. Fråga bara så svarar vi.',
  },
  {
    question: 'Kan man kombinera med ROT?',
    answer:
      'När arbetet berättigar enligt gällande regler hjälper vi med deklarationssmart underlag, så att du får stöttning du har rätt till — utan onödig administration.',
  },
]

export const servicesPageFaq: FaqItem[] = [
  {
    question: 'Arbetar ni med både privatpersoner och företag?',
    answer:
      'Ja. Vi tar oss an allt från mindre bostadsjobb till större entreprenader och serviceavtal för fastighetsägare. Samma kvalitetskrav oavsett uppdragets storlek.',
  },
  {
    question: 'Hur fungerar journ?',
    answer:
      'Vår jour är bemannad dygnet runt för akuta fel. Ring det nummer som anges här på sidan så kopplar vi dig vidare. För planerade arbeten bokar vi tid enligt överenskommelse.',
  },
  {
    question: 'Får ni använda ROT-avdraget?',
    answer:
      'Där arbetet berättigar enligt Skatteverkets regler hjälper vi dig att reda ut det och dokumentera underlag så att avdraget blir rätt.',
  },
  {
    question: 'Vad behöver ni veta innan ni ger en offert?',
    answer:
      'En kort beskrivning av plats, typ av arbete, ungefärlig tidsram och om det gäller ny el eller ombyggnad räcker ofta. Vi kan följa upp med platsbesök om det behövs.',
  },
]

export const aboutPageFaq: FaqItem[] = [
  {
    question: 'Hur länge har ni funnits i Göteborg?',
    answer:
      'Företaget grundades 2008 och vi har vuxet med stadsdelarna vi jobbar i. Idag servar vi både centrum, kringliggande kommuner och företag i regionen.',
  },
  {
    question: 'Vilken behörighet har era elektriker?',
    answer:
      'Våra installationer utförs av behörig personal enligt gällande elregler, och vi ser till att all dokumentation följer bygg- och elbesiktningskrav.',
  },
  {
    question: 'Erbjuder ni fast pris eller löpande tid?',
    answer:
      'Beroende på uppdraget kan vi lämna fast pris när omfattningen är tydlig, annars arbetar vi transparent med löpande redovisning i dialog med dig som kund.',
  },
  {
    question: 'Kan jag få referenser?',
    answer:
      'På vår startsida samlar vi omdömen från fler än 90 kunder, och vi kan i dialog visa relevanta referenser beroende på typ av projekt du planerar.',
  },
]
