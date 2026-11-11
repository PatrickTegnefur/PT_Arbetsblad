# Instruktion till AI-assistenten (import)

Kopiera allt nedanför linjen till din assistent tillsammans med filen du vill läsa in. Samma text får du i verktyget under *Skapa › Importera uppgifter*, där den alltid följer det aktuella kategoriträdet.

---

Du hjälper en matematiklärare att läsa in uppgifter till sin uppgiftsbank. Läs den bifogade filen (PDF, Word eller foto) och svara med ENDAST giltig JSON, utan någon annan text, enligt formatet längre ned.

Regler:
- En post i "uppgifter" per uppgift i källan. Behåll uppgiftens ordalydelse och rätta bara uppenbara inläsningsfel.
- Matematik: skriv bråk som $\frac{täljare}{nämnare}$, använd · för gånger, : för division, − (riktigt minustecken) för minus, decimalkomma, ² och ³ för potenser, samt π och √.
- Fakta eller villkor i en textuppgift som är uppställda som punkter skrivs som egna rader som börjar med "* ".
- Deluppgifter a), b), c): är de korta beräkningar av samma slag, använd typ "grupp" (instruktion + delar). Annars typ "enkel", med deluppgifterna som egna rader i "text" (a), b) …).
- Facit och lösning: finns facit eller bedömningsanvisningar i källan, lägg det korta svaret i "facit" och lösningen i "losning" (en beräkning per rad, radbrytning som \n). För "grupp" anges facit och losning per del.
- Figurer och bilder kan du inte skicka. Beskriv dem i "figur": {"beskrivning":"...","sida":n}. Skriv in mått och uppgifter som står i bilden i uppgiftens text om uppgiften annars inte går att lösa.
- "kategori": välj EN sökväg ur listan längre ned. Passar uppgiften in i flera, välj den viktigaste och lägg resten i "ocksa". Finns ingen passande, skriv "kategori": "" och förklara i "anmarkningar".
- "arskurs": lista med 7, 8 och/eller 9. "svarighet": 1, 2 eller 3 (1 grundnivå, 3 mest krävande; anger källan E, C och A: E blir 1, C blir 2, A blir 3).
- "kalla": var uppgiften kommer ifrån (bok eller prov och uppgiftsnummer).
- "anmarkningar": kort text om sådant läraren bör kontrollera (osäker inläsning, tolkning, saknad figur).

Format (exempel):
{
 "version": 1,
 "kalla": "Bok eller prov, t.ex. \"Matte Direkt 8, Prov 2\"",
 "uppgifter": [
  {
   "typ": "grupp",
   "kategori": "taluppfattning/decimal-multiplikation-division/decimal-ganger-heltal",
   "ocksa": [],
   "arskurs": [
    8
   ],
   "svarighet": 1,
   "instruktion": "Beräkna.",
   "delar": [
    {
     "text": "7 · 13,5",
     "facit": "94,5",
     "losning": ""
    },
    {
     "text": "$\\frac{72}{0,6}$",
     "facit": "120"
    }
   ],
   "kalla": "Prov 2, del 1, uppgift 8",
   "anmarkningar": []
  },
  {
   "typ": "enkel",
   "kategori": "geometri/area/cirkel-radie",
   "ocksa": [
    "geometri/omkrets/cirkel"
   ],
   "arskurs": [
    8
   ],
   "svarighet": 2,
   "text": "En spegel är cirkelformad med radien 0,6 m. Beräkna spegelglasets pris.\n* Spegelglas 200 kr/m²",
   "facit": "226 kr",
   "losning": "0,6 m · 0,6 m · π · 200 kr/m² ≈ 226 kr",
   "figur": {
    "beskrivning": "Cirkelformad spegel med ram",
    "sida": 2
   },
   "kalla": "Prov 2, del 2, uppgift 1",
   "anmarkningar": [
    "Figuren är bara illustration"
   ]
  }
 ]
}

Tillgängliga kategorier (sökväg  —  delområde › uppsättning):
taluppfattning/positionssystemet/storleksordning  —  Positionssystemet och avrundning › Storleksordning och jämförelse
taluppfattning/positionssystemet/avrundning  —  Positionssystemet och avrundning › Avrundning och överslagsräkning
taluppfattning/decimaltal-grunder/positionsvarde  —  Decimaltal: grunder › Positionsvärde och decimaltal på tallinjen
taluppfattning/decimaltal-grunder/jamfora-decimaltal  —  Decimaltal: grunder › Jämföra och storleksordna decimaltal
taluppfattning/decimaltal-grunder/avrundning-decimaler  —  Decimaltal: grunder › Avrundning till given decimal
taluppfattning/decimal-addition-subtraktion/samma-antal-decimaler  —  Addition och subtraktion av decimaltal › Lika många decimaler
taluppfattning/decimal-addition-subtraktion/olika-antal-decimaler  —  Addition och subtraktion av decimaltal › Olika många decimaler
taluppfattning/decimal-addition-subtraktion/textuppgifter  —  Addition och subtraktion av decimaltal › Textuppgifter
taluppfattning/decimal-multiplikation-division/ganger-delat-tiopotens  —  Multiplikation och division av decimaltal › Gånger och delat med 10, 100 och 1000
taluppfattning/decimal-multiplikation-division/decimal-ganger-heltal  —  Multiplikation och division av decimaltal › Decimaltal gånger heltal
taluppfattning/decimal-multiplikation-division/decimal-ganger-decimal  —  Multiplikation och division av decimaltal › Decimaltal gånger decimaltal
taluppfattning/decimal-multiplikation-division/division-decimaltal  —  Multiplikation och division av decimaltal › Division med decimaltal
taluppfattning/negativa-tal/tallinjen  —  Negativa tal › Negativa tal på tallinjen
taluppfattning/negativa-tal/addition-subtraktion  —  Negativa tal › Addition och subtraktion
taluppfattning/negativa-tal/multiplikation-division  —  Negativa tal › Multiplikation och division
taluppfattning/negativa-tal/textuppgifter  —  Negativa tal › Textuppgifter
taluppfattning/rakneordning/utan-parenteser  —  Räkneordning och parenteser › Räkneordning utan parenteser
taluppfattning/rakneordning/med-parenteser  —  Räkneordning och parenteser › Räkneordning med parenteser
taluppfattning/rakneordning/blandade-uttryck  —  Räkneordning och parenteser › Blandade uttryck med flera led
taluppfattning/delbarhet-primtal/delbarhetsregler  —  Delbarhet, primtal och faktorer › Delbarhetsregler
taluppfattning/delbarhet-primtal/primtalsfaktorisering  —  Delbarhet, primtal och faktorer › Primtalsfaktorisering
taluppfattning/delbarhet-primtal/sgd-mgm  —  Delbarhet, primtal och faktorer › Största gemensamma delare och minsta gemensamma multipel
taluppfattning/brak-grunder/del-av-helhet  —  Bråk: grunder › Bråk som del av helhet
taluppfattning/brak-grunder/forlanga-forkorta  —  Bråk: grunder › Förlänga och förkorta
taluppfattning/brak-grunder/blandad-form  —  Bråk: grunder › Blandad form och oäkta bråk
taluppfattning/brak-grunder/jamfora-brak  —  Bråk: grunder › Jämföra och storleksordna bråk
taluppfattning/brak-addition-subtraktion/samma-namnare  —  Addition och subtraktion av bråk › Samma nämnare
taluppfattning/brak-addition-subtraktion/multipel-namnare  —  Addition och subtraktion av bråk › Olika nämnare, en multipel av den andra
taluppfattning/brak-addition-subtraktion/forlangning  —  Addition och subtraktion av bråk › Olika nämnare som kräver förlängning
taluppfattning/brak-addition-subtraktion/blandad-form  —  Addition och subtraktion av bråk › Med blandad form
taluppfattning/brak-addition-subtraktion/textuppgifter  —  Addition och subtraktion av bråk › Textuppgifter
taluppfattning/brak-multiplikation-division/heltal-ganger-brak  —  Multiplikation och division av bråk › Heltal gånger bråk
taluppfattning/brak-multiplikation-division/brak-ganger-brak  —  Multiplikation och division av bråk › Bråk gånger bråk
taluppfattning/brak-multiplikation-division/brak-delat-med-brak  —  Multiplikation och division av bråk › Bråk delat med bråk
taluppfattning/brak-multiplikation-division/brakdel-av-tal  —  Multiplikation och division av bråk › Bråkdel av ett tal
taluppfattning/brak-multiplikation-division/blandad-form  —  Multiplikation och division av bråk › Med blandad form
taluppfattning/brak-multiplikation-division/textuppgifter  —  Multiplikation och division av bråk › Textuppgifter
taluppfattning/tal-i-olika-former/brak-decimal  —  Tal i olika former › Mellan bråk och decimalform
taluppfattning/tal-i-olika-former/brak-decimal-procent  —  Tal i olika former › Mellan bråk, decimalform och procent
taluppfattning/potenser-standardform/potens-grunder  —  Potenser och standardform › Potenser med heltalsbas
taluppfattning/potenser-standardform/potenslagar  —  Potenser och standardform › Potenslagar
taluppfattning/potenser-standardform/tiopotenser  —  Potenser och standardform › Tiopotenser
taluppfattning/potenser-standardform/standardform  —  Potenser och standardform › Standardform
taluppfattning/rotter/kvadrattal-rot  —  Kvadratrötter › Kvadrattal och kvadratrot
taluppfattning/rotter/uppskatta-rot  —  Kvadratrötter › Uppskatta och beräkna rötter
geometri/enheter-matt/langd  —  Enheter och mätning › Längdenheter
geometri/enheter-matt/areaenheter  —  Enheter och mätning › Areaenheter
geometri/enheter-matt/volymenheter  —  Enheter och mätning › Volymenheter och liter
geometri/vinklar/vinkeltyper  —  Vinklar och geometriska begrepp › Vinkeltyper och mätning
geometri/vinklar/vinkelsumma  —  Vinklar och geometriska begrepp › Vinkelsumma i trianglar och månghörningar
geometri/vinklar/parallella-linjer  —  Vinklar och geometriska begrepp › Vinklar vid parallella linjer
geometri/vinklar/symmetri  —  Vinklar och geometriska begrepp › Symmetri och spegling
geometri/omkrets/rektangel-kvadrat  —  Omkrets › Rektangel och kvadrat
geometri/omkrets/triangel-manghorning  —  Omkrets › Triangel och månghörning
geometri/omkrets/cirkel  —  Omkrets › Cirkelns omkrets
geometri/omkrets/sammansatta-figurer  —  Omkrets › Sammansatta figurer
geometri/area/rektangel  —  Area › Rektangel och kvadrat
geometri/area/parallellogram  —  Area › Parallellogram
geometri/area/triangel  —  Area › Triangel
geometri/area/trapets  —  Area › Trapets
geometri/area/sammansatta-figurer  —  Area › Sammansatta figurer
geometri/area/cirkel-diameter  —  Area › Cirkel: diametern given
geometri/area/cirkel-radie  —  Area › Cirkel: radien given
geometri/area/cirkel-ur-area  —  Area › Cirkel: beräkna radien ur arean
geometri/pythagoras/hypotenusa  —  Pythagoras sats › Beräkna hypotenusan
geometri/pythagoras/katet  —  Pythagoras sats › Beräkna en okänd katet
geometri/pythagoras/ratvinklig-kontroll  —  Pythagoras sats › Kontrollera om triangeln är rätvinklig
geometri/pythagoras/pythagoras-text  —  Pythagoras sats › Pythagoras i textuppgifter och sammansatta figurer
geometri/pythagoras/avstand-koordinatsystem  —  Pythagoras sats › Avstånd mellan punkter i ett koordinatsystem
geometri/volym/ratblock-kub  —  Volym › Rätblock och kub
geometri/volym/prisma-cylinder  —  Volym › Prisma och cylinder
geometri/volym/pyramid-kon  —  Volym › Pyramid och kon
geometri/volym/klot  —  Volym › Klot
geometri/volym/sammansatta-kroppar  —  Volym › Sammansatta kroppar
geometri/begransningsarea/ratblock-kub  —  Begränsningsarea › Rätblock och kub
geometri/begransningsarea/prisma-cylinder  —  Begränsningsarea › Prisma och cylinder
geometri/begransningsarea/pyramid-kon  —  Begränsningsarea › Pyramid och kon
geometri/begransningsarea/klot  —  Begränsningsarea › Klot
geometri/skala-likformighet/skala  —  Skala och likformighet › Skala på kartor och ritningar
geometri/skala-likformighet/likformiga-figurer  —  Skala och likformighet › Likformiga figurer
geometri/skala-likformighet/likformiga-trianglar  —  Skala och likformighet › Likformiga trianglar
geometri/skala-likformighet/area-volym-skala  —  Skala och likformighet › Skala för area och volym
geometri/transformationer/spegling  —  Geometriska transformationer › Spegling
geometri/transformationer/translation  —  Geometriska transformationer › Translation (parallellförflyttning)
geometri/transformationer/rotation  —  Geometriska transformationer › Rotation
geometri/transformationer/forstoring  —  Geometriska transformationer › Förstoring och förminskning
geometri/trigonometri/sin-cos-tan  —  Trigonometri i rätvinkliga trianglar › Förstå sinus, cosinus och tangens
geometri/trigonometri/berakna-sida  —  Trigonometri i rätvinkliga trianglar › Beräkna en sida
geometri/trigonometri/berakna-vinkel  —  Trigonometri i rätvinkliga trianglar › Beräkna en vinkel
geometri/trigonometri/trigonometri-text  —  Trigonometri i rätvinkliga trianglar › Trigonometri i textuppgifter
algebra/uttryck-formler/skriva-uttryck  —  Uttryck och formler › Skriva uttryck med variabler
algebra/uttryck-formler/satta-in-varde  —  Uttryck och formler › Beräkna värdet av ett uttryck
algebra/uttryck-formler/formler  —  Uttryck och formler › Använda och ställa upp formler
algebra/forenkla-uttryck/samla-termer  —  Förenkla uttryck › Samla lika termer
algebra/forenkla-uttryck/multiplicera-parentes  —  Förenkla uttryck › Multiplicera in i parentes
algebra/forenkla-uttryck/faktorisera  —  Förenkla uttryck › Bryta ut gemensam faktor
algebra/forenkla-uttryck/kvadreringsregler  —  Förenkla uttryck › Kvadreringsreglerna
algebra/forenkla-uttryck/konjugatregeln  —  Förenkla uttryck › Konjugatregeln
algebra/ekvationer/ett-steg  —  Ekvationer › Ekvationer i ett steg
algebra/ekvationer/tva-steg  —  Ekvationer › Ekvationer i två steg
algebra/ekvationer/variabel-bada-led  —  Ekvationer › Variabel i båda led
algebra/ekvationer/parenteser  —  Ekvationer › Ekvationer med parenteser
algebra/ekvationer/brak-i-ekvationer  —  Ekvationer › Ekvationer med bråk
algebra/ekvationer/ekvation-ur-text  —  Ekvationer › Ställa upp ekvation ur text
algebra/ekvationer/x-kvadrat  —  Ekvationer › Enkla ekvationer med x²
algebra/ekvationssystem/substitution  —  Ekvationssystem › Substitutionsmetoden
algebra/ekvationssystem/additionsmetoden  —  Ekvationssystem › Additionsmetoden
algebra/ekvationssystem/grafisk-losning  —  Ekvationssystem › Grafisk lösning
algebra/ekvationssystem/system-ur-text  —  Ekvationssystem › Ställa upp ekvationssystem ur text
algebra/monster-talfoljder/figurmonster  —  Mönster och talföljder › Figurmönster
algebra/monster-talfoljder/talfoljder  —  Mönster och talföljder › Talföljder
algebra/monster-talfoljder/allmanna-termen  —  Mönster och talföljder › Formel för mönster (n:te termen)
samband-forandring/proportionalitet/proportionella-samband  —  Proportionalitet › Känna igen proportionella samband
samband-forandring/proportionalitet/proportionalitet-tabell  —  Proportionalitet › Proportionalitet i tabeller
samband-forandring/proportionalitet/enhetspris  —  Proportionalitet › Enhetspris och jämförpris
samband-forandring/proportionalitet/recept-skala  —  Proportionalitet › Ändra mängder (recept, blandningar)
samband-forandring/koordinatsystem/avlasa-punkter  —  Koordinatsystem › Avläsa punkter
samband-forandring/koordinatsystem/rita-punkter  —  Koordinatsystem › Rita punkter och figurer
samband-forandring/koordinatsystem/fyra-kvadranter  —  Koordinatsystem › Koordinatsystem med negativa tal
samband-forandring/funktioner-grunder/tabell-formel-graf  —  Funktioner och samband › Tabell, formel och graf
samband-forandring/funktioner-grunder/funktionsvarde  —  Funktioner och samband › Beräkna funktionsvärden
samband-forandring/funktioner-grunder/tolka-grafer  —  Funktioner och samband › Tolka grafer i vardagssituationer
samband-forandring/linjara-funktioner/lasa-av-k-m  —  Linjära funktioner › Läsa av k och m
samband-forandring/linjara-funktioner/rita-graf  —  Linjära funktioner › Rita en linje
samband-forandring/linjara-funktioner/stalla-upp-funktion  —  Linjära funktioner › Ställa upp en linjär funktion
samband-forandring/linjara-funktioner/skarning  —  Linjära funktioner › Skärningspunkter
samband-forandring/hastighet-tid-strackan/berakna-v-s-t  —  Hastighet, tid och sträcka › Beräkna hastighet, tid eller sträcka
samband-forandring/hastighet-tid-strackan/omvandla-hastighet  —  Hastighet, tid och sträcka › Omvandla hastighetsenheter
samband-forandring/hastighet-tid-strackan/medelhastighet  —  Hastighet, tid och sträcka › Medelhastighet
samband-forandring/hastighet-tid-strackan/rorelsegrafer  —  Hastighet, tid och sträcka › Grafer för rörelse
samband-forandring/andra-funktioner/kvadratiska-samband  —  Andra typer av samband › Kvadratiska samband
samband-forandring/andra-funktioner/exponentiella-samband  —  Andra typer av samband › Exponentiella samband
procent/procent-grunder/tolka-procent  —  Procent som del av helhet › Tolka procent och skriva i bråk- och decimalform
procent/procent-grunder/procent-bilder  —  Procent som del av helhet › Procent i bilder och diagram
procent/procent-av-tal/enkla-procentsatser  —  Procent av ett tal › Enkla procentsatser
procent/procent-av-tal/valfria-procentsatser  —  Procent av ett tal › Valfria procentsatser
procent/procent-av-tal/textuppgifter  —  Procent av ett tal › Textuppgifter
procent/andel-procent/berakna-andel  —  Andel i procent › Beräkna andelen i procent
procent/andel-procent/berakna-helhet  —  Andel i procent › Beräkna helheten när delen är känd
procent/procentuell-forandring/okning  —  Procentuell förändring › Öka med ett antal procent
procent/procentuell-forandring/minskning  —  Procentuell förändring › Minska med ett antal procent
procent/procentuell-forandring/forandring-i-procent  —  Procentuell förändring › Beräkna förändringen i procent
procent/procentuell-forandring/forandringsfaktor  —  Procentuell förändring › Förändringsfaktor
procent/procentuell-forandring/flera-forandringar  —  Procentuell förändring › Flera förändringar i följd
procent/procent-vardagen/rabatt-paslag-moms  —  Procent i vardagen › Rabatt, påslag och moms
procent/procent-vardagen/ranta  —  Procent i vardagen › Ränta och sparande
procent/procent-vardagen/ranta-pa-ranta  —  Procent i vardagen › Ränta på ränta
procent/procent-vardagen/procentenheter  —  Procent i vardagen › Procentenheter och promille
sannolikhet/sannolikhet-grunder/sannolikhetsskalan  —  Sannolikhet: grunder › Sannolikhetsskalan
sannolikhet/sannolikhet-grunder/enkla-slumpforsok  —  Sannolikhet: grunder › Enkla slumpförsök (tärning, mynt, kulor)
sannolikhet/sannolikhet-grunder/sannolikhet-i-olika-former  —  Sannolikhet: grunder › Sannolikhet som bråk, decimaltal och procent
sannolikhet/kombinatorik/produktregeln  —  Kombinatorik › Antal kombinationer (produktregeln)
sannolikhet/kombinatorik/traddiagram-tabeller  —  Kombinatorik › Träddiagram och tabeller
sannolikhet/kombinatorik/ordning-urval  —  Kombinatorik › Ordning och urval
sannolikhet/flera-handelser/oberoende-handelser  —  Sannolikhet vid flera händelser › Oberoende händelser (och)
sannolikhet/flera-handelser/beroende-handelser  —  Sannolikhet vid flera händelser › Beroende händelser (utan återläggning)
sannolikhet/flera-handelser/komplementhandelse  —  Sannolikhet vid flera händelser › Komplementhändelse
sannolikhet/flera-handelser/eller-handelser  —  Sannolikhet vid flera händelser › Eller-händelser
sannolikhet/experiment-teori/relativ-frekvens  —  Experimentell och teoretisk sannolikhet › Relativ frekvens
sannolikhet/experiment-teori/jamfora-experiment-teori  —  Experimentell och teoretisk sannolikhet › Jämföra försök och teori
sannolikhet/experiment-teori/forvantat-antal  —  Experimentell och teoretisk sannolikhet › Förväntat antal utfall
statistik/lasa-diagram/tabeller-frekvens  —  Läsa och tolka diagram › Tabeller och frekvenstabeller
statistik/lasa-diagram/stapeldiagram  —  Läsa och tolka diagram › Stapeldiagram och histogram
statistik/lasa-diagram/linjediagram  —  Läsa och tolka diagram › Linjediagram
statistik/lasa-diagram/cirkeldiagram  —  Läsa och tolka diagram › Cirkeldiagram
statistik/lasa-diagram/vilseledande-diagram  —  Läsa och tolka diagram › Vilseledande diagram
statistik/rita-diagram/rita-stapel  —  Rita diagram › Stapeldiagram och histogram
statistik/rita-diagram/rita-linje  —  Rita diagram › Linjediagram
statistik/rita-diagram/rita-cirkel  —  Rita diagram › Cirkeldiagram och vinklar
statistik/lagesmatt/medelvarde  —  Lägesmått › Medelvärde
statistik/lagesmatt/median  —  Lägesmått › Median
statistik/lagesmatt/typvarde  —  Lägesmått › Typvärde
statistik/lagesmatt/saknat-varde  —  Lägesmått › Hitta ett saknat värde
statistik/lagesmatt/lagesmatt-frekvenstabell  —  Lägesmått › Lägesmått ur frekvenstabell
statistik/lagesmatt/valja-lagesmatt  —  Lägesmått › Jämföra och välja lägesmått
statistik/spridningsmatt/variationsbredd  —  Spridningsmått › Variationsbredd
statistik/spridningsmatt/kvartiler-ladagram  —  Spridningsmått › Kvartiler och lådagram
statistik/spridningsmatt/jamfora-spridning  —  Spridningsmått › Jämföra spridning
statistik/statistiska-undersokningar/urval-population  —  Statistiska undersökningar › Urval och population
statistik/statistiska-undersokningar/fragor-enkater  —  Statistiska undersökningar › Frågor och enkäter
statistik/statistiska-undersokningar/spridningsdiagram  —  Statistiska undersökningar › Spridningsdiagram och samband
statistik/statistiska-undersokningar/granska-statistik  —  Statistiska undersökningar › Granska statistik och slutsatser
