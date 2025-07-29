// app/layout.tsx
import "@/styles/globals.css";
import "@fontsource/inter";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADmyBRAND Insights Dashboard",
  description: "AI-powered marketing analytics platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen px-4 sm:px-6 md:px-8 py-6 max-w-screen-2xl mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
