# ASSET RESTORATION GUIDE

Während der "EXPORT PHOENIX" Phase wurden aus Datenschutz- und Urheberrechtsgründen externe Bild-Links (picsum.photos) durch Platzhalter (die `<ImagePlaceholder />` Komponente) ersetzt.

Dieser Guide erklärt, wie Sie die echten Produktions-Bildressourcen wieder in Next.js integrieren.

## 📁 1. Bilder lokal ablegen
Legen Sie alle finalen Bilder in den Ordner `public/images/`. Next.js serviert Dateien im `public` Ordner statisch von der Root-URL (`/`).

Beispiel: 
`public/images/hero-home.jpg`
`public/images/services-unterhaltsreinigung.jpg`
`public/images/team-cemal.jpg`

## 🔄 2. ImagePlaceholder durch next/image ersetzen

Gehen Sie in die Seiten (z.B. `app/page.tsx`, `app/about/page.tsx`) und importieren Sie die Standard-`Image` Komponente von Next.js:

```tsx
import Image from 'next/image';
```

Suchen Sie nach der `<ImagePlaceholder />` Komponente:

```tsx
<ImagePlaceholder 
  originalSrc="https://picsum.photos/..." 
  alt="Unterhaltsreinigung" 
  fill 
  className="object-cover" 
/>
```

Ersetzen Sie diese wieder durch das reguläre Next.js `<Image>` Tag und referenzieren Sie Ihr lokales Bild:

```tsx
<Image 
  src="/images/services-unterhaltsreinigung.jpg" 
  alt="Unterhaltsreinigung" 
  fill 
  className="object-cover" 
/>
```

## 💡 Tipp zu Image `fill` vs. `width/height`
- Wenn Ihre Bilder das Attribut `fill` nutzen, achten Sie darauf, dass der umschließende Container `relative` oder `absolute` positioniert ist und definierte Dimensionen hat (z.B. `aspect-[4/3]`).
- Dies verhindert Cumulative Layout Shifts (CLS) und sorgt für Bestnoten bei Google Lighthouse.
