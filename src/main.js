import { getState, subscribe } from './state/store.js';
import { createTranslator } from './i18n/strings.js';
import { applyTheme, widgetLibrary } from './ui/components.js';
import { openTransactionModal } from './ui/transactionModal.js';
import { HomeView } from './views/home.js';
import { ActivityView, bindActivity } from './views/activity.js';
import { PlanView, bindPlan } from './views/plan.js';
import { GoalsView, bindGoals } from './views/goals.js';
import { MoreView, bindMore } from './views/more.js';
import { OnboardingView, bindOnboarding } from './views/onboarding.js';

let route='home'; const t=createTranslator(getState); const app=document.querySelector('#app');
function shell(content){ return `<div class="app-shell"><main>${content}</main><nav class="bottom-nav"><button data-route="home" class="${route==='home'?'active':''}"><span>⌂</span>${t('home')}</button><button data-route="activity" class="${route==='activity'?'active':''}"><span>↕</span>${t('activity')}</button><button data-route="plan" class="${route==='plan'?'active':''}"><span>▣</span>${t('plan')}</button><button data-route="goals" class="${route==='goals'?'active':''}"><span>◎</span>${t('goals')}</button><button data-route="more" class="${route==='more'?'active':''}"><span>•••</span>${t('more')}</button></nav></div>`; }
function render(){ applyTheme(); const s=getState(); document.documentElement.lang=s.settings.language;if(!s.onboardingComplete){app.innerHTML=OnboardingView(t);bindOnboarding();return;} const views={home:HomeView,activity:ActivityView,plan:PlanView,goals:GoalsView,more:MoreView};app.innerHTML=shell(views[route](t));document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>{route=b.dataset.route;render()});document.querySelectorAll('[data-action="add-transaction"]').forEach(b=>b.onclick=()=>openTransactionModal(t));document.querySelectorAll('[data-action="open-widget-library"]').forEach(b=>b.onclick=()=>widgetLibrary(t));if(route==='activity')bindActivity(t);if(route==='plan')bindPlan(t);if(route==='goals')bindGoals(t);if(route==='more')bindMore(t);}
subscribe(render);render();
