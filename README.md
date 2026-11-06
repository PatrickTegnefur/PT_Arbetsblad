# Uppgiftsbanken

En utskriftsvänlig uppgiftsbank i matematik. Du väljer uppgifter ur banken, samlar ett urval och bygger arbetsblad på A4 som du skriver ut eller sparar som PDF. Allt är vanliga textfiler (JSON och SVG), så materialet ligger hos dig och kan versionshanteras på GitHub.

## Kom igång

**Publicera på GitHub Pages**
1. Skapa ett nytt repo på GitHub och ladda upp innehållet i den här mappen (så att `index.html` ligger i repots rot).
2. Gå till *Settings → Pages*, välj *Deploy from a branch*, grenen `main` och mappen `/ (root)`.
3. Efter någon minut finns verktyget på `https://<användare>.github.io/<repo>/`.

**Köra lokalt (Windows)**
Dubbelklicka på `starta-lokalt.bat`. Den startar en liten lokal server (kräver Python) och öppnar `http://localhost:8000`. Verktyget fungerar inte om `index.html` öppnas direkt från mappen, eftersom webbläsaren då blockerar inläsningen av filerna.

Använd Chrome eller Edge på dator. Då kan verktyget spara filer rakt in i din mapp.

## Så arbetar du

1. **Bank:** du börjar på en översikt med arbetsområdena som kort, genvägar till arbetsblad, samling och ny uppgift, och de senast tillagda uppgifterna. Välj ett område för att bläddra. Till vänster kan du välja ett helt område, ett delområde eller enskilda varianter (uppsättningar), flera i taget, och filtrera på årskurs och nivå (1–3). Årskurserna har sina färger från ditt tema (Åk 7 teal `#66C7C2`, Åk 8 orange `#F4A261`, Åk 9 rosa `#EC6095`) och nivåerna en egen skala i blått, från ljust (nivå 1) till mörkt (nivå 3). Färgerna används i filter, på korten och i editorn. Resultatet grupperas per uppsättning, och du kan lägga en hel grupp i samlingen. Klicka på ett färgat chip för att se uppgifter som testar liknande saker. Lägg de du gillar i samlingen. Välj gärna fler än du behöver och gallra senare.
2. **Samling:** sortera om, ta bort uppgifter som är för lika varandra och lägg dem i arbetsbladet.
3. **Arbetsblad:** dra uppgifterna på plats, ändra bredd och skrivutrymme, välj numrering, typsnitt och storlek. Sidorna visas som riktiga A4-sidor, stående eller liggande, och du kan välja fritt flöde eller fältlayout (fyrfält 2 × 2, sexfält 2 × 3 eller 3 × 2, niofält 3 × 3). *Skriv ut* ger papper eller PDF ("Spara som PDF").
4. **Skapa:** skriv egna uppgifter eller generera rutinuppgifter från mallar. Det går att redigera allt efteråt.
5. **Facitblad:** Knappen *Visar: Arbetsblad* ovanför sidorna växlar till facitbladet med svar och lösningsförslag i samma ordning som på bladet. Skriv ut det på samma sätt. Lösningsförslag skriver du i editorn (en beräkning per rad), och vissa generatorer skapar dem åt dig.
6. **Spara:** *Spara arbetsblad* och *Spara samling* skriver en JSON-fil. Nya och ändrade uppgifter listas under *Filer att spara i repot* i fliken Skapa. Spara varje fil i sin mapp i din lokala kopia av repot och gör sedan commit och push (GitHub Desktop räcker).

Tills du har sparat filerna ligger ändringarna bara i webbläsaren.

## Bilder
*Lägg till bild…* i editorn läser in en PNG-, JPG-, WebP- eller GIF-fil från datorn. Bilden förminskas automatiskt (längsta sidan högst 1000 px) så att repot inte växer i onödan, och sparas som `bilder/<id>.jpg` eller `.png`. Du väljer placering (under texten eller till höger), bredd, bildtext och källa. En SVG-fil som läses in den vägen hamnar i SVG-fältet som figur.

Använd bara bilder du har rätt att dela, särskilt om repot är publikt. Skriv gärna källa eller licens i fältet *Källa eller licens*.

## Figurer
I fliken *Skapa* öppnar *Rita figur…* ditt verktyg Matematikfigurer i ett fönster. Rita figuren, tryck *Använd i uppgiftsbanken* och den läggs in i uppgiften. Med *Redigera figur…* öppnas verktyget med samma mått igen. Figuren sparas som `figurer/<id>.svg`.

Alla tre verktygen finns med: Matematikfigurer, Sammansatta figurer (2D) och Sammansatta kroppar (3D). Du väljer verktyg i editorn. Mappen `figurverktyg/` innehåller versioner med den lilla tillsats som behövs (en knapp och ett block längst ned i huvudskriptet). Den är bara aktiv när verktyget öppnas från uppgiftsbanken, och verktygen fungerar som förut annars. Om du redan har byggt vidare på verktygen, läs `docs/inbaddning.md` och lägg in tillsatsen i din senaste version i stället för att ersätta den. Adresserna står i `index.json` under `figurverktyg`.

## Mappar
```
index.html        verktyget
index.json        register över filerna
kategorier.json   arbetsområde › delområde › uppsättning
uppgifter/        uppgifterna, en fil per delområde
figurer/          SVG-figurer (filnamn = uppgiftens id)
bilder/           tematiska bilder (PNG/JPG) som ger uppgiften sammanhang
generatorer/      mallar som slumpar fram rutinuppgifter
samlingar/        sparade urval
arbetsblad/       sparade arbetsblad
docs/dataformat.md  beskrivning av alla filformat
docs/kategoriforslag.md  läsbar översikt av kategoriträdet (utkast)
```

## Bidra
Kollegor kan använda verktyget direkt via länken. För att lägga till uppgifter eller generatorer skapas filerna enligt `docs/dataformat.md` och skickas som pull request, så att du kan granska innan de blir en del av banken.

## Att tänka på
- Facit ligger i samma filer som uppgifterna. Om repot är publikt kan alla som hittar det läsa facit.
- Kopiera inte uppgifter ur läromedel till ett publikt repo. Egna uppgifter är fria att dela.
