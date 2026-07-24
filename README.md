# Contractor Website Template

A reusable Git-ready Next.js contractor website template, currently branded for **High Quality Excavating INC**.

## Why this is a template

Business-specific content lives primarily in:

- `data/site.ts`
- `public/images/`
- CSS design tokens at the top of `app/globals.css`

That lets you reuse the project for excavators, landscapers, concrete contractors, paving companies, and similar businesses.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Initialize Git

```bash
git init
git add .
git commit -m "Initial contractor website template"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Customize the business

Edit `data/site.ts`:

- Business name
- Phone
- Email
- Base city
- Service area
- Instagram
- Services and descriptions

Replace the illustrated project cards with approved original project photos when the owner provides them.

## Google automation

The estimate form sends to `/api/leads`.

1. Create a Google Sheet with this header row:

   `Timestamp | Name | Phone | Email | Town | Service | Details | Status`

2. Open **Extensions → Apps Script** in the Sheet.
3. Paste `google-apps-script.gs`.
4. Replace the Sheet ID and business email.
5. Deploy as a Web App with access set to **Anyone**.
6. Copy `.env.example` to `.env.local`.
7. Add the deployed URL:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

Without that environment variable, the API route runs in demo mode and logs submissions to the development console.

## Deploy

Vercel is the simplest deployment target for this Next.js project:

```bash
npm run build
```

Then import the GitHub repository into Vercel and add `GOOGLE_APPS_SCRIPT_URL` as an environment variable.

## Before publication

Confirm:

- Exact service list
- Phone and email
- Base city and service radius
- Whether the company is licensed and insured before making that claim
- Owner-approved photos
- Domain name
- Privacy language for the contact form
