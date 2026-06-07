# Interly — Landing page

Landing page en **Next.js 15 + TypeScript + Supabase**, prête à déployer sur Vercel
avec les domaines Hostinger (`interly.io`, `.org`, `.online`).

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **React 19**
- **Supabase** (waitlist) — appelé via Server Action sécurisée
- CSS custom (pas de framework) — le design est conservé tel quel
- `next/font` pour Plus Jakarta Sans, OG image dynamique via `next/og`
- Sitemap + robots + favicon SVG

## Structure

```
interly/
├── app/
│   ├── layout.tsx              # metadata, font, OG par défaut
│   ├── page.tsx                # assemble les sections
│   ├── globals.css             # tous les styles (extraits du HTML original)
│   ├── actions.ts              # Server Action joinWaitlist
│   ├── opengraph-image.tsx     # OG dynamique (1200×630)
│   ├── icon.svg                # favicon
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── WaitlistForm.tsx        # SEUL Client Component (formulaire)
│   ├── HowItWorks.tsx
│   ├── Cities.tsx
│   ├── Universities.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts             # client serveur (service_role)
├── next.config.ts              # redirects .org/.online → .io
├── supabase-schema.sql         # à exécuter dans Supabase
└── .env.local.example
```

## 1. Setup local

```bash
npm install
cp .env.local.example .env.local
# Édite .env.local avec tes vraies clés Supabase
npm run dev
```

Ouvre http://localhost:3000

## 2. Setup Supabase

1. Crée un projet sur https://supabase.com (gratuit)
2. **SQL Editor** → colle le contenu de `supabase-schema.sql` → Run
3. **Settings → API** : récupère
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` (secret) → `SUPABASE_SERVICE_ROLE_KEY`
4. Mets-les dans `.env.local`

⚠️ La clé `service_role` est **secrète**. Elle n'est jamais exposée côté
client : seule la Server Action `joinWaitlist` y a accès.

## 3. Déploiement Vercel

1. Push ce repo sur GitHub (`git init`, `git add .`, etc.)
2. Va sur https://vercel.com → **Add New → Project** → importe le repo
3. **Environment Variables** : ajoute `NEXT_PUBLIC_SUPABASE_URL` et
   `SUPABASE_SERVICE_ROLE_KEY` (les deux pour Production + Preview)
4. **Deploy** — tu obtiens une URL `interly-xxx.vercel.app`

## 4. DNS Hostinger → Vercel

### Pour `interly.io` (domaine principal)

Dans Vercel, projet → **Settings → Domains** → ajoute `interly.io` ET `www.interly.io`.
Vercel te donne 2 enregistrements à créer chez Hostinger :

Dans **hPanel Hostinger** → ton domaine → **DNS / Zone Editor** :

| Type   | Nom  | Valeur                  | TTL  |
| ------ | ---- | ----------------------- | ---- |
| A      | @    | `76.76.21.21`           | 3600 |
| CNAME  | www  | `cname.vercel-dns.com.` | 3600 |

⚠️ **Supprime** les enregistrements A et CNAME existants pour `@` et `www`
(Hostinger en met par défaut pour son parking).

La propagation prend de 10 min à quelques heures. Vercel émet automatiquement
le certificat SSL Let's Encrypt.

### Pour `interly.org` et `interly.online` (redirections)

Tu as **deux options** :

**Option A — Redirection au niveau Next.js (déjà configurée dans `next.config.ts`)**

Pointe les DNS de `.org` et `.online` vers Vercel aussi (même configuration A/CNAME
que ci-dessus), et ajoute-les comme domaines secondaires dans Vercel.
Next.js les détectera et redirigera vers `interly.io` via le bloc `redirects()`.

**Option B — Redirection au niveau Hostinger (plus simple)**

Dans hPanel → ton domaine `.org` → **Redirection de domaine** → cible :
`https://interly.io`. Pareil pour `.online`.

→ **L'option B est recommandée** si tu veux éviter d'ajouter ces domaines à Vercel.

## 5. Bugs et améliorations vs. version HTML

Ce qui a été corrigé / ajouté par rapport au HTML d'origine :

- ✅ Formulaire waitlist **fonctionnel** (avant : juste un message factice en JS)
- ✅ Validation email côté serveur + gestion de la duplication
- ✅ État de chargement / succès / erreur visibles
- ✅ Favicon, meta OG (Open Graph + Twitter Card)
- ✅ Sitemap + robots.txt pour le SEO
- ✅ Liens sociaux pointent vers de vraies URL (à ajuster selon tes comptes)
- ✅ Liens "Contact / Démo BRI" → vrais `mailto:`
- ✅ Footer : année dynamique
- ✅ Accessibilité : `aria-label`, `aria-hidden` sur décoratif, `role="status"`
  sur les messages du formulaire
- ✅ HTML entities corrigées (apostrophes courbes échappées en JSX)
- ✅ Redirections de domaines en place

## 6. À FAIRE après déploiement

- [ ] Remplacer les liens sociaux Instagram/TikTok/LinkedIn dans `Footer.tsx`
      par tes vrais comptes
- [ ] Créer les pages `/privacy`, `/terms`, `/cookies` (CNIL — important si
      tu collectes des emails)
- [ ] Ajouter un cookie banner si analytics
- [ ] (Optionnel) Plausible Analytics — RGPD-friendly, pas de banner nécessaire :
      ajouter `<script defer data-domain="interly.io" src="https://plausible.io/js/script.js" />`
      dans `app/layout.tsx`
- [ ] Vérifier la table `waitlist` dans Supabase après quelques inscriptions
- [ ] Configurer un email transactionnel de bienvenue (Supabase Edge Function
      + Resend par exemple) — pas inclus ici

## Stack alternative envisagée (et écartée)

J'ai gardé le **CSS custom** du fichier d'origine tel quel plutôt que de tout
convertir en Tailwind. Raisons :
- Le design existant est très soigné, le convertir = risque de bugs visuels
- Le CSS est isolé dans `globals.css`, lisible et maintenable
- Pas de surcoût de tooling

Si tu veux passer en Tailwind plus tard pour aligner avec le reste de ton stack
React Native + NativeWind, c'est faisable progressivement composant par composant.
