import { DEFAULT_STATE } from '../data/defaults.js';
const KEY = 'zayva-v0.1-state';
const clone = (x) => JSON.parse(JSON.stringify(x));
let state;
try { state = JSON.parse(localStorage.getItem(KEY)) || clone(DEFAULT_STATE); } catch { state = clone(DEFAULT_STATE); }
const listeners = new Set();
export const getState = () => state;
export function setState(updater) {
  const next = typeof updater === 'function' ? updater(clone(state)) : updater;
  state = next;
  localStorage.setItem(KEY, JSON.stringify(state));
  listeners.forEach(fn => fn(state));
}
export const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
export const resetState = () => setState(clone(DEFAULT_STATE));
