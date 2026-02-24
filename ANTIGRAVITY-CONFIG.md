# ANTIGRAVITY CONFIG

Dieses Dokument definiert das projektübergreifende Verhalten beim Start oder Deployment im Kontext von Agentischen Code-Pipelines (Antigravity).

## AI Agent / Developer Context
Dieses Projekt ist für Antigravity export-ready getrimmt. 
Wenn Sie als nachfolgender Entwickler oder Agent dieses Projekt übernehmen, beachten Sie folgende Prinzipien:

1. **Keep it simple:** Keine Redux-Stores. Kein Overengineering. Das Projekt ist flach und nutzt standardmäßige React-Hooks und serverseitiges Routing.
2. **Styling Paradigm:** Nutze immer Tailwind CSS (`app/globals.css`). Schreiben Sie so wenig Custom CSS wie möglich. Nutzen Sie den neuen "Rot/Weiß" Premium Style via den `--color-primary` Variablen in `globals.css` und bauen Sie Komponenten primär mit der `bg-primary` oder `text-primary` Klasse.
3. **Komponenten:** Vermeiden Sie Code-Duplikation. Für CTAs oder Links nutzen Sie die zentrierte `<Button>` Komponente aus `components/Button.tsx`.

## Environment Variables
Aktuell benötigt die App keine `.env` Dateien.
Falls zukünftig ein Kontaktformular mit z.B. Resend oder Nodemailer aufgesetzt wird, müssen Sie diese Keys in die Environment Variablen (`Vercel` / `Netlify` bzw. `.env.local`) integrieren.
- `RESEND_API_KEY=` (Beispielhaft)
