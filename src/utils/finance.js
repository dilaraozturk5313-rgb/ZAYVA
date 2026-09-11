export const monthKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
export const formatMoney = (value, currency='SEK', language='sv') => new Intl.NumberFormat(language === 'sv' ? 'sv-SE' : 'en-US', { style:'currency', currency, maximumFractionDigits:0 }).format(value);
export function cycleRange(settings, anchor = new Date()) {
  const c = settings.cycle;
  if (c.type === 'calendar') return { start: new Date(anchor.getFullYear(), anchor.getMonth(), 1), end: new Date(anchor.getFullYear(), anchor.getMonth()+1, 0,23,59,59) };
  const day = Number(c.day || 25);
  const before = anchor.getDate() < day;
  const start = new Date(anchor.getFullYear(), anchor.getMonth() - (before ? 1 : 0), day);
  const end = new Date(start.getFullYear(), start.getMonth()+1, day-1,23,59,59);
  return { start, end };
}
export function inRange(dateString, range) { const d = new Date(`${dateString}T12:00:00`); return d >= range.start && d <= range.end; }
export function summary(state) {
  const range = cycleRange(state.settings);
  const tx = state.transactions.filter(t => inRange(t.date, range));
  const income = tx.filter(t=>t.amount>0).reduce((s,t)=>s+t.amount,0) || Number(state.profile.income||0);
  const spent = Math.abs(tx.filter(t=>t.amount<0).reduce((s,t)=>s+t.amount,0));
  const saved = state.savingsLog.filter(x=>x.month===monthKey()).reduce((s,x)=>s+x.amount,0);
  return { income, spent, saved, remaining: income-spent-saved, range };
}
export function categorySpent(state, categoryId) { const range=cycleRange(state.settings); return Math.abs(state.transactions.filter(t=>t.categoryId===categoryId && t.amount<0 && inRange(t.date,range)).reduce((s,t)=>s+t.amount,0)); }
