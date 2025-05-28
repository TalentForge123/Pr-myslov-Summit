# Průmyslový Summit 2025 - Webová stránka

Moderní, responzivní webová stránka pro průmyslový summit, vytvořená pomocí Next.js a Tailwind CSS.

## Funkce

- Responzivní design pro všechna zařízení
- Odpočítávání do začátku summitu
- Sekce pro program, řečníky a partnery
- Napojení na články z WordPress API
- Formulář pro prodej vstupenek

## Technologie

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Typový systém pro JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript knihovna pro tvorbu uživatelských rozhraní

## Struktura projektu

```
prumyslovy-summit/
├── public/              # Statické soubory (obrázky, ikony)
├── src/                 # Zdrojový kód
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Hlavní layout
│   │   ├── page.tsx     # Hlavní stránka
│   │   └── ...          # Další stránky
│   └── components/      # React komponenty
│       ├── Navbar.tsx   # Navigační lišta
│       ├── Footer.tsx   # Patička
│       └── ...          # Další komponenty
├── package.json         # Závislosti a skripty
└── README.md            # Dokumentace
```

## Nasazení

### Lokální vývoj

1. Naklonujte repozitář
2. Nainstalujte závislosti:
   ```bash
   npm install
   ```
3. Spusťte vývojový server:
   ```bash
   npm run dev
   ```
4. Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči

### Nasazení na GitHub a Vercel

#### GitHub

1. Vytvořte nový repozitář na GitHub
2. Inicializujte Git v projektu (pokud ještě není):
   ```bash
   git init
   ```
3. Přidejte všechny soubory do Gitu:
   ```bash
   git add .
   ```
4. Vytvořte první commit:
   ```bash
   git commit -m "Initial commit"
   ```
5. Přidejte vzdálený repozitář:
   ```bash
   git remote add origin https://github.com/vase-uzivatelske-jmeno/prumyslovy-summit.git
   ```
6. Nahrajte kód na GitHub:
   ```bash
   git push -u origin main
   ```

#### Vercel

1. Zaregistrujte se na [Vercel](https://vercel.com/)
2. Klikněte na "New Project"
3. Importujte váš GitHub repozitář
4. Vercel automaticky detekuje Next.js projekt a nastaví správné parametry
5. Klikněte na "Deploy"
6. Po dokončení nasazení získáte URL adresu vašeho webu

## Úpravy obsahu

### Změna data summitu

Datum summitu je nastaveno v souboru `src/components/HeroSection.tsx`. Upravte řádek:

```typescript
const summitDate = new Date(2025, 9, 1); // 1. říjen 2025
```

### Úprava programu

Program summitu můžete upravit v souboru `src/components/ProgramSection.tsx`.

### Úprava řečníků

Seznam řečníků můžete upravit v souboru `src/components/SpeakersSection.tsx`.

### Napojení na WordPress API

Pro načítání skutečných článků z vašeho WordPress webu upravte soubor `src/components/ArticlesSection.tsx`. Nahraďte simulovaná data skutečným API voláním:

```typescript
// Nahraďte toto:
setTimeout(() => {
  const mockArticles: Article[] = [
    // ...
  ];
  setArticles(mockArticles);
  setLoading(false);
}, 1000);

// Za toto:
fetch('https://svetprumyslu.cz/wp-json/wp/v2/posts?categories=prumyslovy-summit&_embed')
  .then(response => response.json())
  .then(data => {
    const articles = data.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      date: post.date,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      slug: post.slug
    }));
    setArticles(articles);
    setLoading(false);
  })
  .catch(err => {
    setError('Nepodařilo se načíst články');
    setLoading(false);
  });
```

## Kontakt

Pro jakékoliv dotazy nebo pomoc s implementací mě neváhejte kontaktovat.
