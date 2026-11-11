# Uppgiftsbanken – dataformat (förslag, version 2)

## Mappstruktur
```
uppgiftsbank/
├─ index.json                    ← register över filer (webbsidor kan inte lista mappar)
├─ kategorier.json               ← träd: arbetsområde › delområde › uppsättning
├─ uppgifter/
│   ├─ taluppfattning/           ← en fil per delområde, en mapp per arbetsområde
│   │   ├─ brak-addition-subtraktion.json
│   │   └─ negativa-tal.json
│   └─ geometri/area.json
├─ figurer/                      ← SVG, filnamn = uppgiftens id
├─ samlingar/                    ← urval av uppgifter (lista med id) att gallra och fördela
├─ generatorer/                  ← mallar som slumpar fram rutinuppgifter (en fil per mall)
└─ arbetsblad/                   ← sparade arbetsblad (pekar på uppgifter via id)
```

## Kategorier: tre nivåer, definierade på ett ställe
| Nivå | Betydelse | Exempel |
|---|---|---|
| Arbetsområde | Taluppfattning, Geometri, Algebra, Samband och förändring, Procent, Sannolikhetslära, Statistik | Taluppfattning |
| Delområde | Grupp av kunskapsmål | Addition och subtraktion av bråk |
| Uppsättning | Uppgifter med samma struktur och samma typ av variation | Samma nämnare / Olika nämnare, en multipel av den andra / Kräver förlängning |

`kategorier.json` är den enda platsen där namn och ordning finns. Uppgifter pekar på ett löv med en sökväg av id:n, t.ex. `taluppfattning/brak-addition-subtraktion/forlangning`. Det hindrar stavfel när flera lägger till uppgifter och gör att ett namn kan ändras på ett ställe. Uppsättningarna har en `ordning` (progression), så ett arbetsblad kan ta en uppgift ur varje uppsättning i tur och ordning.

Områden som går in i varandra hanteras med `ocksa`: en lista extra sökvägar där uppgiften även ska hittas. Huvudsökvägen (`kategori`) avgör var den ligger i filerna.

## Uppgift
| Fält | Betydelse |
|---|---|
| `id` | Unikt och stabilt. Återanvänds aldrig, även om uppgiften tas bort. |
| `typ` | `enkel` eller `grupp` |
| `kategori` | Sökväg till en uppsättning i `kategorier.json` |
| `ocksa` | Lista med fler sökvägar (valfri) |
| `arskurs`, `svarighet`, `taggar` | Filtrering och sökning. Svårighet 1–3. |
| `text` (enkel) | Uppgiftstext. Rader som börjar med `* ` blir punktlista, t.ex. fakta i en textuppgift.  `$…$` används för matematik (KaTeX), t.ex. `$\frac{1}{2}+\frac{1}{3}$`. |
| `instruktion` + `delar` (grupp) | Gemensam instruktion och delar a), b), c)… med egen text och facit. |
| `figur`, `figurPlats` | Sökväg till SVG. `figurPlats` är `under` (förval). |
| `facit` | Visas bara när arbetsbladet har `visaFacit: true`. |
| `kalla` | Valfri. Varifrån uppgiften kommer (bok eller prov och uppgiftsnummer). |
| `losning` | Valfri. Lösningsförslag som text, en beräkning per rad. Gruppuppgifter kan även ha `losning` på varje del. Visas på facitbladet. |
| `bild`, `bildAlt`, `bildPlats`, `bildJustera`, `bildKalla` | Valfria. Tematisk bild (PNG eller JPG) i mappen `bilder/`, med bildtext, placering (som för figur: `under`, `over`, `vanster`, `hoger`), justering och källa eller licens. Bredden anges i `layout.bildBreddMm` (förval 45). |
| `figurPlats`, `figurJustera` | Figurens placering: `under` (förval), `over`, `vanster` eller `hoger` (flyter bredvid texten). `figurJustera` (`vanster`, `mitten` eller `hoger`) anger justeringen när figuren ligger över eller under texten. Bredd i `layout.figurBreddMm`. |
| `figurKalla` | Valfri. Inställningarna i figurverktyget (verktyg, figurtyp, mått, stil) så att figuren kan redigeras igen. Skapas av *Rita figur…* i editorn. |
| `layout` | Utgångsvärden: `foredragenBredd` (1–12), `minBredd` (tröskel för radbryt), `skrivutrymmeMm`, `kolumner` för grupp och `figurBreddMm` (figurens största bredd, förval 55). |
| `forfattare`, `skapad`, `genereradAv` | Ursprung. `genereradAv` är ett generatornamn eller `null`. |

Uppgiften har bara *föredragna* mått. Den faktiska storleken bestäms av arbetsbladet.

## Samling
`{ "version": 1, "namn": "...", "uppgifter": ["id", "id", …] }`. En samling är ett brett urval i vald ordning. Den kan innehålla fler uppgifter än arbetsbladet använder. Verktyget arbetar med en samling åt gången.

## Arbetsblad
En lista block i ordning (`block`):
- `uppgift`: `ref` (id), `bredd` (3, 4, 6 eller 12 kolumner), `skrivutrymmeMm`, valfritt `kolumner` (deluppgifter per rad i en gruppuppgift; utelämnas för Auto) och `textOverride`
- `text`: fri text med `bredd` och `skrivutrymmeMm`

Övrigt: `titel` (en rad, krymper vid behov), `visaFacit`, `banner` och `installningar` (numrering, kanter, skiljelinjer, typsnitt, textstorlek i pt, minsta bredd per deluppgift i mm, `orientering` (`staende` eller `liggande`), `layout` (`flode` eller `falt`) samt `faltRader` och `faltKolumner` för fältlayout, t.ex. 2 × 2 för en fyrfältare). `facitblad` (`losningar`: om lösningsförslag tas med på facitbladet). `rubrik` styr rubrikraden: `visa` (av/på), `storlekPt` (rubrikens största storlek), `banner` (färgbannern), `hogerfalt` (`namn`, `egen` eller `ingen`) och `hogerText` (egen text i raden). I fältlayout får varje block ett fält och kan spänna över flera fält i bredd med `faltBredd`. Skrivutrymmet fyller då resten av fältet. Sidhuvudet har bara rubrik och "Namn:". Bannern är skiljelinjen under rubriken. Sidindelningen sparas inte, utan räknas ut från blockens höjd.

## Generatorer
En generator är en liten JSON-fil som beskriver hur en uppgiftstyp slumpas fram. Ingen programmering behövs. Resultatet är vanliga uppgifter (`genereradAv` anger mallens id) som kan redigeras fritt.

```json
{
  "id": "gen-brak-forlangning",
  "namn": "Bråk: addition/subtraktion, förlängning krävs",
  "kategori": "taluppfattning/brak-addition-subtraktion/forlangning",
  "typ": "grupp",
  "instruktion": "Beräkna och svara i enklaste form.",
  "arskurs": [7, 8], "svarighet": 3,
  "parametrar": {
    "b": {"valj": [2, 3, 4, 5, 6]},
    "d": {"valj": [3, 4, 5, 6, 7, 8]},
    "a": {"heltal": ["1", "b-1"]},
    "c": {"heltal": ["1", "d-1"]},
    "t": {"valj": [1, -1]},
    "s": {"uttryck": "a/b + t*c/d"}
  },
  "villkor": ["b!=d", "d%b!=0", "b%d!=0", "s>0", "s<=2"],
  "text": "{f(a,b)} {sym(t)} {f(c,d)}",
  "facit": "{r(s)}"
}
```

- **Parametrar** slumpas i ordning. `heltal` ger ett heltal i intervallet (gränserna får vara uttryck som använder tidigare parametrar), `valj` väljer ur en lista, `texter` väljer en text (t.ex. enhet) och `uttryck` räknar ut ett värde.
- **Uttryck** räknas med exakta bråk. Tillåtet: `+ - * / ^ %`, jämförelser, `&&` och `||`, parenteser, `pi` samt funktionerna `gcd`, `lcm`, `abs`, `min`, `max`, `floor`, `sign` och `if(villkor, ja, nej)`.
- **Villkor** är uttryck som alla måste vara sanna. Annars slumpas en ny kombination. Så undviker man orimliga tal.
- **Text och facit** är mallar med `{…}`. Formatering: `n(x)` heltal eller decimaltal (minus som −, decimalkomma), `p(x)` som `n` men med parentes om talet är negativt, `f(a,b)` bråk, `r(x)` förkortat bråk, `dec(x,k)` decimaltal med k decimaler och `sym(t)` som + eller −.
- För `typ: "grupp"` slumpas varje deluppgift för sig med samma mall, och dubbletter undviks. För `typ: "enkel"` blir mallens `text` hela uppgiftstexten.

## Regler
1. Ändra aldrig ett `id`. Sparade arbetsblad pekar på det.
2. Ändrad uppgiftstext slår igenom i arbetsblad som refererar till uppgiften, om inte blocket har `textOverride`.
3. En generator är knuten till en uppsättning och skapar vanliga uppgifter i just den. Enda spåret är `genereradAv`.
4. Kunskapsmål per årskurs kan läggas till senare som en egen lista (`kunskapsmal.json`) och en valfri koppling från uppgifter, utan att övrigt ändras.

## Import från PDF, Word eller foto
Importen sker via en AI-assistent som läser källfilen och svarar med JSON, och verktyget granskar resultatet innan något sparas. Fliken *Skapa › Importera uppgifter* ger dig instruktionen till assistenten (`docs/import-instruktion.md` är samma text) och tar emot svaret, som text eller fil. Formatet är ett paket `{ "version": 1, "kalla": "...", "uppgifter": [...] }` där varje uppgift har samma fält som en vanlig uppgift (`typ`, `kategori`, `ocksa`, `arskurs`, `svarighet`, `text` eller `instruktion` och `delar`, `facit`, `losning`, `kalla`), samt två extra: `figur` (`{"beskrivning","sida"}`, en beskrivning eftersom bilder inte kan skickas) och `anmarkningar` (sådant du bör kontrollera). Paketet blir utkast som du kan redigera, spara eller kasta. Okända kategorier markeras, och inget skrivs över.

## Facitblad
Facitbladet skapas av arbetsbladet: en post per uppgift i arbetsbladets ordning, med numrering som på bladet, svar och lösningsförslag. Det skrivs ut som ett vanligt dokument (flera sidor vid behov).

## Generatorer: lösningssteg
En generator kan ha en `losning`-mall (med `\n` för radbrytning) som fylls i på samma sätt som `text` och `facit`. För gruppuppgifter hamnar lösningen på varje deluppgift.

## Figurverktyg
`index.json` kan innehålla `figurverktyg`: en lista med `{ "id", "namn", "url" }`. Editorns knapp *Rita figur…* öppnar det valda verktyget i ett fönster med `?embed=1` efter adressen (se `docs/inbaddning.md`). Verktyget skickar SVG-koden och sina inställningar tillbaka med `postMessage`, och sidan godtar bara meddelanden från samma ursprung som adressen. En inklistrad SVG rensas från skript och liknande. Id i figurerna görs unika när de visas, så flera figurer på samma sida stör inte varandra.
