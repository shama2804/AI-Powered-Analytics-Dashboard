
A modern, responsive analytics dashboard built with **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **shadcn/ui**. This project was developed as part of the **ADmyBRAND Internship Challenge**, designed to showcase interactive campaign insights with clean UI, real-time updates, and smart data visualizations.

---

## ✨ Features

- 📊 **Metric Cards** – Summary tiles for key campaign KPIs
- 📈 **Interactive Charts** – Line, Bar, and Pie charts using Recharts
- 🌗 **Light/Dark Mode** – Toggle theme with `next-themes`
- 🗃️ **Data Table** – Sortable, filterable, paginated table view
- 📅 **Date Range Picker** – Filter analytics by custom date range
- 🔁 **Real-Time Updates** – Simulated data refresh with `setInterval`
- 📤 **CSV Export** – Export campaign data to CSV
- 🎨 **Responsive UI** – Mobile-first design using Tailwind
- 🧩 **Componentized Design** – Clean modular React components

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Charts:** Recharts
- **State & Effects:** React Hooks
- **Animations:** Framer Motion
- **Export Utility:** papaparse
- **Theme Management:** next-themes

---

## 📂 Project Structure

```bash
temp-next/
├── app/                  # Next.js pages and layout
├── components/           # Reusable UI components
├── data/                 # Mock data files (JSON)
├── public/               # Static assets
├── styles/               # Global styles (Tailwind)
├── lib/                  # Utility functions
├── tailwind.config.ts    # Tailwind config
└── tsconfig.json         # TypeScript config
```

## Getting Started
# Clone the repo
git clone https://github.com/shama2804/AI-Powered-Analytics-Dashboard.git

# Navigate to the project
cd AI-Powered-Analytics-Dashboard/temp-next

# Install dependencies
npm install

# Run the development server
npm run dev
