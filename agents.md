# AGENTS.md — Autodealer Website Template

## Projectdoel

Dit project is een professionele autodealer website-template voor kleine autoverkopers die nu vooral via TikTok auto’s verkopen en nog geen eigen website hebben.

De website moet geschikt zijn om meerdere autoverkopers te bedienen. Per klant moeten bedrijfsnaam, kleuren, logo, adres, contactgegevens, TikTok-link en autoaanbod makkelijk aanpasbaar zijn.

De eerste demo is voor:

- Bedrijfsnaam: Autoplaats
- TikTok: @autoplaats0
- Doel: een professionele voorbeeldwebsite maken met een paar auto’s uit zijn aanbod

## Belangrijkste doel van de website

De website moet bezoekers snel vertrouwen geven en ze makkelijk laten:

1. Auto’s bekijken
2. Auto’s filteren
3. Een auto openen op detailniveau
4. Contact opnemen via WhatsApp of telefoon
5. De locatie bekijken via Google Maps
6. Direct navigeren naar het bedrijf

## Tech stack

Gebruik bij voorkeur:

- Next.js
- TypeScript
- Tailwind CSS
- Supabase voor database, auth en image storage

Als het project al een bestaande stack heeft, sluit daar dan op aan en verander niet onnodig de basis.

## Designstijl

De website moet er professioneel, modern en betrouwbaar uitzien.

Designrichting:

- Premium occasiondealer uitstraling
- Geen generieke AI-look
- Veel witruimte
- Donkere professionele header
- Witte of lichtgrijze achtergrond
- Luxe autokaarten
- Afgeronde hoeken
- Subtiele schaduwen
- Duidelijke prijsweergave
- Grote foto’s
- Rustige typografie
- Sterke call-to-action knoppen
- Accentkleur: diepblauw, zwart, donkergroen of goud

Gebruik geen rommelige kleuren, drukke animaties of overdreven gradients.

## Belangrijke pagina’s

Maak minimaal deze pagina’s:

1. Home
2. Aanbod
3. Auto detailpagina
4. Over ons
5. Contact
6. Admin login
7. Admin dashboard
8. Auto toevoegen
9. Auto bewerken

## Frontend functies

De aanbodpagina moet hebben:

- Auto grid
- Zoekbalk
- Filterfunctie
- Sorteerfunctie
- Responsive layout
- Mobiele filter drawer
- Desktop filter sidebar

Filters:

- Merk
- Model
- Prijs min/max
- Bouwjaar min/max
- Kilometerstand max
- Vermogen min/max
- Brandstof
- Transmissie
- Carrosserie
- Opties

Sorteeropties:

- Prijs laag naar hoog
- Prijs hoog naar laag
- Bouwjaar nieuw naar oud
- Kilometerstand laag naar hoog

## Auto detailpagina

Elke auto moet een eigen detailpagina krijgen met:

- Grote fotogalerij
- Titel
- Prijs
- Bouwjaar
- Kilometerstand
- Brandstof
- Transmissie
- Vermogen
- Opties
- Beschrijving
- APK
- NAP
- WhatsApp-knop
- Belknop
- Knop “Plan bezichtiging”

De WhatsApp-knop moet automatisch een bericht maken zoals:

"Hallo, ik heb interesse in de [merk model uitvoering] die ik op jullie website zag."

## Contactpagina

De contactpagina moet bevatten:

- Bedrijfsnaam
- Adres
- Telefoonnummer
- E-mailadres
- Openingstijden
- TikTok-link
- Google Maps embed
- Knop “Navigeer via Google Maps”

Gebruik tijdelijke placeholders als echte gegevens nog ontbreken.

## Adminpaneel

Maak een gebruiksvriendelijk adminpaneel waarmee de autoverkoper zelf auto’s kan beheren.

Routes:

- /admin/login
- /admin/dashboard
- /admin/autos/nieuw
- /admin/autos/[id]/bewerken

Admin functies:

- Inloggen
- Auto toevoegen
- Auto bewerken
- Auto verwijderen
- Auto op verkocht zetten
- Auto als uitgelicht markeren
- Foto’s uploaden
- Eerste foto als hoofdfoto gebruiken
- Auto opslaan als concept
- Auto publiceren

Het adminpaneel moet simpel zijn voor iemand zonder technische kennis.

Gebruik duidelijke labels zoals:

- Auto toevoegen
- Concept opslaan
- Publiceren
- Op verkocht zetten
- Foto’s uploaden
- Eerste foto wordt hoofdfoto

Vermijd technische termen.

## Formulier voor auto toevoegen

Gebruik bij voorkeur stappen:

### Stap 1: Foto’s

- Foto’s uploaden
- Preview tonen
- Eerste foto als hoofdfoto gebruiken

### Stap 2: Basisgegevens

- Titel
- Merk
- Model
- Uitvoering
- Prijs
- Bouwjaar
- Kilometerstand

### Stap 3: Specificaties

- Brandstof
- Transmissie
- Vermogen
- Carrosserie
- Kleur
- APK
- NAP
- Opties

### Stap 4: Publiceren

- Beschrijving
- Status: concept, gepubliceerd of verkocht
- Uitgelicht ja/nee
- Preview
- Publiceren

## Database structuur

Gebruik minimaal deze tabellen:

### cars

Velden:

- id
- slug
- title
- brand
- model
- version
- price
- year
- mileage
- power_hp
- fuel
- transmission
- body_type
- color
- apk
- nap
- options
- description
- status
- featured
- created_at
- updated_at

Status kan zijn:

- draft
- published
- sold

### car_images

Velden:

- id
- car_id
- image_url
- sort_order
- is_main

## Componenten

Maak de code component-based.

Gebruik minimaal:

- Header
- Footer
- Hero
- HeroSearch
- FeaturedCars
- InventoryGrid
- FilterSidebar
- MobileFilterDrawer
- CarCard
- CarDetail
- TrustBar
- GoogleMapsSection
- ContactCTA
- AdminLayout
- CarForm
- ImageUploader
- StatusBadge

## Belangrijke UX-regels

- Mobiel moet uitstekend werken, omdat veel bezoekers vanaf TikTok komen.
- CTA-knoppen moeten direct zichtbaar zijn.
- WhatsApp moet overal makkelijk bereikbaar zijn.
- De aanbodpagina moet snel en overzichtelijk voelen.
- Filters moeten makkelijk te begrijpen zijn.
- Het adminpaneel moet voelen als een simpel advertentieformulier.

## Codekwaliteit

- Gebruik TypeScript correct.
- Maak herbruikbare componenten.
- Vermijd dubbele code.
- Gebruik duidelijke bestandsnamen.
- Houd styling consistent.
- Voeg geen onnodige libraries toe.
- Verander bestaande functionaliteit niet zonder reden.
- Controleer na elke grote wijziging of de site nog buildt.

## Testen/checks

Voer waar mogelijk deze checks uit:

- npm run lint
- npm run build

Controleer handmatig:

- Werkt de homepagina?
- Werkt de aanbodpagina?
- Werken filters?
- Werkt zoeken?
- Werkt sorteren?
- Werken detailpagina’s?
- Werkt mobiel?
- Werkt admin login?
- Kan een auto worden toegevoegd?
- Kan een auto worden bewerkt?
- Kan een auto op verkocht worden gezet?
- Worden foto’s goed getoond?

## Belangrijke regel

Als echte gegevens ontbreken, gebruik nette placeholders. Verzin geen echte prijzen, kilometerstanden, adressen of telefoonnummers alsof ze waar zijn.