// ===== UB-EMBED v1 (Uppgiftsbanken) – behåll detta block när verktyget uppdateras =====
// Aktivt bara när sidan öppnas inbäddad med ?embed=1. Kräver knappen #ub och adaptern längst ned i blocket.
(function(A){if(!/[?&]embed/.test(location.search)||window.parent===window)return;document.body.classList.add('emb');
const b=document.getElementById('ub');
if(b){b.style.display='';b.onclick=()=>{try{const r=A.hamta();parent.postMessage({type:'ub-figur',svg:r.svg,kalla:{verktyg:A.id,v:1,tillstand:r.tillstand}},'*')}catch(e){alert('Kunde inte skicka figuren: '+e.message)}}}
addEventListener('message',e=>{const m=e.data;if(!m||m.type!='ub-ladda'||!m.kalla||m.kalla.verktyg!=A.id)return;try{A.satt(m.kalla.tillstand)}catch(x){alert('Kunde inte läsa in figurens inställningar (verktyget kan ha uppdaterats).')}});
parent.postMessage({type:'ub-redo',verktyg:A.id,v:1},'*')})({id:'sammansatta2d',
hamta:()=>{if(!N.length)throw new Error('Rita en figur först.');const ui={};['unit','um','per','len','names','dots','snap','grid','cz','fillon','fill','lj','stroke','sw','fs','ms','bw','tp'].forEach(i=>{const e=$(i);if(e)ui[i]=e.type=='checkbox'?e.checked:e.value});return{svg:exp().svg,tillstand:{fig:JSON.parse(snapJ()),ui:ui}}},
satt:t=>{push();if(t.ui){if(t.ui.cz!=null&&$('cz')){$('cz').value=t.ui.cz;$('cz').onchange()}Object.keys(t.ui).forEach(i=>{const e=$(i);if(e&&i!='cz'){if(e.type=='checkbox')e.checked=!!t.ui[i];else e.value=t.ui[i]}})}setS(JSON.stringify(t.fig))}});
// ===== slut UB-EMBED =====
