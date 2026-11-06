// ===== UB-EMBED v1 (Uppgiftsbanken) – behåll detta block när verktyget uppdateras =====
// Aktivt bara när sidan öppnas inbäddad med ?embed=1. Kräver knappen #ub och adaptern längst ned i blocket.
(function(A){if(!/[?&]embed/.test(location.search)||window.parent===window)return;document.body.classList.add('emb');
const b=document.getElementById('ub');
if(b){b.style.display='';b.onclick=()=>{try{const r=A.hamta();parent.postMessage({type:'ub-figur',svg:r.svg,kalla:{verktyg:A.id,v:1,tillstand:r.tillstand}},'*')}catch(e){alert('Kunde inte skicka figuren: '+e.message)}}}
addEventListener('message',e=>{const m=e.data;if(!m||m.type!='ub-ladda'||!m.kalla||m.kalla.verktyg!=A.id)return;try{A.satt(m.kalla.tillstand)}catch(x){alert('Kunde inte läsa in figurens inställningar (verktyget kan ha uppdaterats).')}});
parent.postMessage({type:'ub-redo',verktyg:A.id,v:1},'*')})({id:'2dfigurer',
hamta:()=>{const cp=o=>JSON.parse(JSON.stringify(o));return{svg:last,tillstand:{typ:cur,matt:cp(S[cur]),stil:getP(),etikettpos:cp(OFF[cur]||{}),lista:cp(LST[cur]||{}),notering:NOTE[cur]||''}}},
satt:k=>{if(!F[k.typ])throw 0;if(k.stil)applyP(k.stil);cur=k.typ;Object.assign(S[cur],k.matt||{});if(k.etikettpos)OFF[cur]=k.etikettpos;else delete OFF[cur];if(k.lista)LST[cur]=k.lista;else delete LST[cur];NOTE[cur]=k.notering||'';$('surf').innerHTML='';surf();tabs();fields();draw()}});
// ===== slut UB-EMBED =====
