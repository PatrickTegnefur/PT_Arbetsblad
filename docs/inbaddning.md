# Figurverktygen i uppgiftsbanken

Uppgiftsbanken kan öppna dina tre figurverktyg i ett fönster (knappen *Rita figur…* i fliken Skapa), ta emot den färdiga figuren och spara verktygets inställningar så att figuren kan redigeras igen (*Redigera figur…*).

## Hur det fungerar
- Verktygens adresser står i `index.json` under `figurverktyg`. Uppgiftsbanken öppnar adressen med `?embed=1` efter. Det är den version som ligger på GitHub Pages som används, inte någon kopia i det här paketet.
- I inbäddat läge visas knappen **Använd i uppgiftsbanken** och sidhuvudet döljs. Trycker du på knappen skickas figurens SVG och verktygets inställningar till uppgiftsbanken (`postMessage`). Öppnas verktyget på vanligt sätt ändras ingenting.
- Uppgiftsbanken tar bara emot meddelanden från samma ursprung som adresserna i `index.json`.
- Inställningarna sparas i uppgiftens fält `figurKalla`. Själva figuren ligger som `figurer/<id>.svg` och fungerar även om verktyget senare ändras.

## Du kan fortsätta bygga verktygen
Det ställer inte till något att du uppdaterar verktygen på annat håll. Det enda som krävs är att tre saker finns kvar i varje verktyg efter en uppdatering:

1. **Knappen** `<button class="btn" id="ub" style="display:none">Använd i uppgiftsbanken</button>` bland exportknapparna.
2. **CSS-raderna** `body.emb header,body.emb .amb{display:none}` och `body.emb nav{padding-top:12px}` (de döljer sidhuvudet i inbäddat läge).
3. **Blocket** som börjar med `// ===== UB-EMBED v1` och slutar med `// ===== slut UB-EMBED =====`, placerat sist i huvudskriptet. Varje verktyg har sin egen version i `ub-embed-block.js` i sin mapp.

Blocket består av en gemensam del (samma i alla tre) och en liten **adapter** som kopplar till verktygets egna funktioner:
- `hamta()` ska returnera `{svg, tillstand}`: figurens SVG-text och det som behövs för att återskapa den.
- `satt(tillstand)` ska återställa figuren från det tillståndet.

Om du byter namn på eller ändrar något som adaptern använder måste adaptern uppdateras. Det adaptern använder:

| Verktyg | Namn i verktyget som adaptern använder |
|---|---|
| Matematikfigurer (`2dfigurer`) | `last`, `cur`, `S`, `OFF`, `LST`, `NOTE`, `F`, `getP`, `applyP`, `surf`, `tabs`, `fields`, `draw`, `$` |
| Sammansatta figurer 2D (`sammansatta2d`) | `N`, `exp()`, `snapJ()`, `setS()`, `push()`, `$` och inställningsfälten `unit`, `um`, `per`, `len`, `names`, `dots`, `snap`, `grid`, `cz`, `fillon`, `fill`, `lj`, `stroke`, `sw`, `fs`, `ms`, `bw`, `tp` |
| Sammansatta kroppar 3D (`sammansatta3d`) | `exp()`, `snapJ()`, `setS()`, `push()`, `SEL`, `$` och inställningsfälten `unit`, `um`, `nm`, `md`, `hm`, `sep`, `rest`, `hid`, `stroke`, `sw`, `fs`, `lj`, `cz`, `bw`, `tpb` |

Ändras formatet på verktygets tillstånd (`snapJ()`) kan äldre figurer få problem med *Redigera figur…*. Då visas ett meddelande, och själva figuren finns kvar som SVG.

### Text att klistra in i chatten där du bygger vidare
> Verktyget används inbäddat i min uppgiftsbank. Filen innehåller en knapp med id="ub", CSS-regler för `body.emb` och ett block som börjar med `// ===== UB-EMBED v1` och slutar med `// ===== slut UB-EMBED =====`. Behåll dem orörda när du ändrar verktyget och flytta inte blocket från slutet av huvudskriptet. Blocket använder funktioner och variabler som anges i dess adapter (`hamta` och `satt`). Byter du namn på eller ändrar något av det, uppdatera adaptern så att `hamta()` fortfarande returnerar `{svg, tillstand}` och `satt(tillstand)` återställer figuren. Ändra inte adapterns `id`. Säg till om formatet på tillståndet ändras.

## Om något inte fungerar
- Visas ingen knapp *Använd i uppgiftsbanken* i fönstret: blocket eller knappen saknas i den version som ligger på GitHub Pages. Uppgiftsbanken varnar efter sju sekunder om verktyget inte svarar.
- Går det inte att öppna fönstret alls: kontrollera adressen i `index.json`.
