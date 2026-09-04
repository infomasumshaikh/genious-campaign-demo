# geniousCampaign Documentation

Welcome to the technical and user documentation for **geniousCampaign**, an all-in-one campaign management, marketing automation, and audience intelligence platform created by [Xgenious LLC](https://github.com/XgeniousLLC). 

- **Live Demo / SPA:** [https://xgeniousllc.github.io/geniousCampaign/#/](https://xgeniousllc.github.io/geniousCampaign/#/)
- **Repository:** [XgeniousLLC/geniousCampaign](https://github.com/XgeniousLLC/geniousCampaign)
- **License:** MIT

---

## 1. Project Overview

`geniousCampaign` is designed to streamline multi-channel marketing operations, lead engagement, message delivery, and audience segmentation into a modern, responsive Single Page Application (SPA). 

Whether managing email sequences, SMS alerts, or social media campaigns, `geniousCampaign` delivers tools for campaign creation, granular targeting, visual template authoring, and real-time performance analytics.

### Key Highlights
- **Single Page Application (SPA):** Built with hash routing (`/#/`) for reliable client-side navigation and fast asset delivery.
- **Audience Segmentation Engine:** Dynamic filtering by engagement score, demographic data, and custom attributes.
- **Visual Template Builder:** Reusable blocks for email, SMS, and promotional content.
- **Automated Workflows:** Event-driven trigger nodes, scheduled follow-ups, and drip logic.
- **Analytics & Conversion Tracking:** Real-time visibility into open rates, click-through rates (CTR), bounce statistics, and ROI metrics.

---

## 2. System Architecture

`geniousCampaign` follows a modular frontend architecture paired with RESTful and webhook-driven backend service integrations.

```
+--------------------------------------------------------------------------+
|                            Client Browser                                |
|   +------------------------------------------------------------------+   |
|   |                  SPA Layer (React / TypeScript)                  |   |
|   |  - Hash Router (`/#/campaigns`, `/#/audience`, `/#/templates`)   |   |
|   |  - State Management (Zustand / Redux Toolkit / React Query)      |   |
|   |  - UI Component Library (Tailwind CSS / Headless UI / Lucide)    |   |
|   +---------------------------------+--------------------------------+   |
+-------------------------------------|------------------------------------+
                                      | HTTPS / REST / WebSockets
                                      v
+-------------------------------------+------------------------------------+
|                         Backend API Layer                                |
|   +------------------------------------------------------------------+   |
|   |  REST Endpoints & Controllers                                     |   |
|   |  - Auth & RBAC (Bearer JWT / OAuth2)                             |   |
|   |  - Campaign Scheduler & Orchestrator                             |   |
|   |  - Audience & Contact Data Store                                 |   |
|   +---------------------------------+--------------------------------+   |
|                                     |                                    |
|             +-----------------------+-----------------------+            |
|             v                                               v            |
|   +-------------------+                           +------------------+   |
|   | Message Queues    |                           | Storage / DB     |   |
|   | (Redis, BullMQ)   |                           | (PostgreSQL,     |   |
|   +---------+---------+                           |  MySQL, MongoDB) |   |
|             |                                     +------------------+   |
+-------------|------------------------------------------------------------+
              v
+-------------+------------------------------------------------------------+
|                          External Gateways                               |
|   - Email: SendGrid / Mailgun / AWS SES / Custom SMTP                    |
|   - SMS: Twilio / Vonage / Infobip                                       |
|   - Webhooks: CRM synchronizations, custom HTTP dispatch                 |
+--------------------------------------------------------------------------+
```

---

## 3. Core Feature Modules

### 3.1 Campaign Creation & Scheduling
- **Multi-Channel Support:** Create campaigns across Email, SMS, Web Push, and Messaging channels.
- **Scheduling Strategies:** Immediate dispatch, date/time scheduling with localized time-zone awareness, or rolling interval triggers.
- **A/B Testing (Split Testing):** Test variant subject lines, body layouts, and call-to-action (CTA) buttons with automatic winner selection based on open/click performance.

### 3.2 Audience Management & Targeting
- **Contact Segmentation:** Create dynamic segments (e.g., *Active subscribers who opened in the last 14 days*) or static subscriber lists.
- **Custom Attributes:** Define arbitrary fields (`industry`, `ltv`, `signup_source`) for fine-grained filtering.
- **Suppression Lists & Unsubscribes:** Automatic handling of opt-outs, hard bounces, and spam complaints to safeguard sender reputation.

### 3.3 Visual Template Management
- **Drag-and-Drop Editor:** Reusable rows, buttons, dynamic product cards, and responsive grids.
- **Dynamic Variable Interpolation:** Personalize copies with Liquid/Handlebars style syntax:
  ```html
  Hello {{ contact.first_name | default: "there" }},
  Check out our latest offer tailored for {{ contact.company }}:
  ```
- **Preview & Test:** Send test dispatches to staging addresses and test mobile/desktop viewports directly in-browser.

### 3.4 Automated Workflows & Drips
- **Trigger Nodes:** Initiated by events such as user signup, form submission, abandoned checkout, or segment enrollment.
- **Logic & Control Nodes:** Conditional branching (e.g., *Did contact click the link?*), time delay nodes (e.g., *Wait 48 hours*), and user attribute updates.
- **Action Nodes:** Send message, add tag, notify team member, or trigger external webhook.

### 3.5 Analytics & Reporting
- **Core KPI Dashboards:** Open Rate ($OR$), Click-Through Rate ($CTR$), Click-to-Open Rate ($CTOR$), Conversion Rate ($CR$), and Bounce/Unsubscribe rates.
- **Mathematical Formulations:**
  $$\text{Open Rate} = \left( \frac{\text{Unique Opens}}{\text{Delivered Messages}} \right) \times 100\%$$
  $$\text{CTR} = \left( \frac{\text{Unique Clicks}}{\text{Delivered Messages}} \right) \times 100\%$$
  $$\text{CTOR} = \left( \frac{\text{Unique Clicks}}{\text{Unique Opens}} \right) \times 100\%$$
- **Exporting:** Download CSV/PDF executive summaries and audit logs.

---

## 4. Technology Stack

- **Language:** TypeScript
- **Framework:** React / Vite
- **Routing:** React Router (Hash routing strategy: `createHashRouter`)
- **Styling:** Tailwind CSS / PostCSS
- **Icons:** Lucide Icons / Heroicons
- **Build Tool:** Vite / Rollup

---

## 5. Getting Started & Local Development

### Prerequisites
- **Node.js:** `>= 18.x`
- **Package Manager:** `npm` (`>= 9.x`), `pnpm`, or `yarn`
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/XgeniousLLC/geniousCampaign.git
   cd geniousCampaign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the project root:
   ```env
   VITE_APP_TITLE=geniousCampaign
   VITE_API_BASE_URL=https://api.yourdomain.com/v1
   VITE_ENABLE_ANALYTICS=true
   ```

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/#/`.

5. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static assets will be emitted to the `dist/` directory.

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 6. Deployment Guide

### Deploying to GitHub Pages

Because the app uses hash-based routing (`/#/`), it is well-suited for static hosts like GitHub Pages without server-side rewrite rules.

1. **Set Base URL:**
   In `vite.config.ts`, verify the base configuration:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/geniousCampaign/', // Required for github.io subdirectory hosting
   });
   ```

2. **Automated GitHub Actions Deployment (`.github/workflows/deploy.yml`):**
   ```yaml
   name: Deploy SPA to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout Code
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install Dependencies
           run: npm ci

         - name: Build Application
           run: npm run build

         - name: Upload Pages Artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: dist/

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

---

## 7. API Integration Reference

The frontend interacts with backend endpoints via authenticated JSON requests.

### Base URL
```
https://api.yourdomain.com/v1
```

### Authentication Header
```http
Authorization: Bearer <JWT_ACCESS_TOKEN>
Content-Type: application/json
```

### Key Endpoints

#### 1. Campaigns
- `GET /campaigns`: List campaigns with pagination and status filters (`draft`, `scheduled`, `running`, `completed`).
- `POST /campaigns`: Create a new campaign.
  ```json
  {
    "title": "Fall Season Early Bird Special",
    "channel": "email",
    "subject": "Exclusive 25% Off Inside",
    "template_id": "tpl_9831a4df",
    "segment_ids": ["seg_newsletter_active"],
    "send_at": "2026-09-10T14:00:00Z"
  }
  ```
- `POST /campaigns/:id/dispatch`: Trigger an immediate dispatch.

#### 2. Audiences & Subscribers
- `GET /audiences/contacts`: Query contacts with filter predicates.
- `POST /audiences/contacts/batch`: Bulk import or synchronize contact profiles.
  ```json
  {
    "contacts": [
      {
        "email": "alex@example.com",
        "first_name": "Alex",
        "attributes": { "tier": "gold", "country": "US" }
      }
    ]
  }
  ```

#### 3. Templates
- `GET /templates`: Fetch saved email and SMS templates.
- `POST /templates`: Save or update template JSON structures and compiled HTML.

#### 4. Workflow Triggers
- `POST /workflows/events/trigger`: Ingest behavioral event payloads from external apps or checkout systems.

---

## 8. Directory Structure

```
geniousCampaign/
├── public/
│   ├── assets/
│   └── favicon.svg
├── src/
│   ├── assets/             # Brand logos, icons, static graphics
│   ├── components/         # Reusable UI components (Buttons, Modals, Forms)
│   │   ├── common/
│   │   ├── layout/         # Navigation, Sidebar, Shell
│   │   └── ui/
│   ├── features/           # Domain-driven modules
│   │   ├── analytics/      # Metric charts, reporting tables
│   │   ├── audience/       # Contacts, tags, segment builder
│   │   ├── campaigns/      # Wizards, scheduling, variant splitters
│   │   ├── templates/      # Template preview, block library
│   │   └── workflows/      # Automation canvas, node editors
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Axios/Fetch HTTP client & endpoints
│   ├── store/              # Global state slices
│   ├── types/              # TypeScript declarations & interfaces
│   ├── utils/              # Date formatters, math validators
│   ├── App.tsx             # Root component & route declarations
│   └── main.tsx            # Application entry point
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 9. Contributing & Quality Standards

1. **Format & Lint:**
   ```bash
   npm run lint
   npm run format
   ```
2. **Commit Hygiene:** Follow the [Conventional Commits](https://www.conventionalcommits.org/) format (`feat:`, `fix:`, `refactor:`, `docs:`).
3. **Pull Requests:** Ensure all CI checks pass and new views include corresponding TypeScript typings.

---

## 10. Authors & Acknowledgments

- **Author / Organization:** [Xgenious LLC](https://github.com/XgeniousLLC)
- **Website:** [https://xgenious.com](https://xgenious.com)