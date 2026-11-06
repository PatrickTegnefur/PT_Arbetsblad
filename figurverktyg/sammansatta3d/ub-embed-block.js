// ===== UB-EMBED v1 (Uppgiftsbanken) – behåll detta block när verktyget uppdateras =====
// Aktivt bara när sidan öppnas inbäddad med ?embed=1. Kräver knappen #ub och adaptern längst ned i blocket.
(function(A){if(!/[?&]embed/.test(location.search)||window.parent===window)return;document.body.classList.add('emb');
const b=document.getElementById('ub');
if(b){b.style.display='';b.onclick=()=>{try{const r=A.hamta();parent.postMessage({type:'ub-figur',svg:r.svg,kalla:{verktyg:A.id,v:1,tillstand:r.tillstand}},'*')}catch(e){alert('Kunde inte skicka figuren: '+e.message)}}}
addEventListener('message',e=>{const m=e.data;if(!m||m.type!='ub-ladda'||!m.kalla||m.kalla.verktyg!=A.id)return;try{A.satt(m.kalla.tillstand)}catch(x){alert('Kunde inte läsa in figurens inställningar (verktyget kan ha uppdaterats).')}});
parent.postMessage({type:'ub-redo',verktyg:A.id,v:1},'*')})({id:'sammansatta3d',
hamta:()=>{const ui={};['unit','um','nm','md','hm','sep','rest','hid','stroke','sw','fs','lj','cz','bw','tpb'].forEach(i=>{const e=$(i);if(e)ui[i]=e.type=='checkbox'?e.checked:e.value});return{svg:exp(),tillstand:{fig:JSON.parse(snapJ()),ui:ui,sel:SEL}}},
satt:t=>{push();if(t.ui){Object.keys(t.ui).forEach(i=>{const e=$(i);if(e){if(e.type=='checkbox')e.checked=!!t.ui[i];else e.value=t.ui[i]}});if($('cz'))$('cz').onchange&&$('cz').onchange()}SEL=Math.min(+t.sel||0,t.fig.length-1);setS(JSON.stringify(t.fig))}});
// ===== slut UB-EMBED =====
