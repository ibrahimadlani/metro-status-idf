# metro-status-idf

Minimal Web & Mobile application to visualize **Île-de-France metro line status and disruptions** in real time on a custom interactive map.

---

## 🎯 Purpose
Provide an **instant overview of metro disruptions** with a fast, readable map-first interface, optimized for mobile usage.

---

## ✨ Features (MVP)
- Custom metro line traces (GeoJSON)
- Real-time disruptions visualization
- Line status coloring (normal / disrupted / interrupted)
- Incident list with map focus
- Responsive UI (mobile & desktop)
- Smart polling with tab visibility handling

---

## 🚫 Out of Scope (MVP)
- Route planning or ETA
- Notifications or user accounts
- Geolocation
- Historical or predictive features
- Multimodal transport (Metro only)

---

## 🧱 Tech Stack
- Next.js + TypeScript
- shadcn/ui + Tailwind CSS
- MapLibre GL JS
- TanStack Query + Zustand

---

## 🗺️ Data Sources
- Île-de-France Mobilités Open Data
  - Line traces dataset
  - `disruptions_bulk` API

---

## 🚀 Getting Started
```bash
pnpm install
pnpm dev
