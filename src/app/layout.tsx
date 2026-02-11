import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteSidebar } from "@/components/site-sidebar";
import { ThemeInitializer } from "@/components/theme-initializer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BTGOD | Be The Greatest Or Die",
    template: "%s | BTGOD",
  },
  description:
    "BTGOD is a luxury minimal-street ecommerce concept for Be The Greatest Or Die.",
};

const themeBootstrapScript = `
(() => {
  try {
    const saved = localStorage.getItem("btgod-theme");
    const theme = saved === "day" || saved === "night" ? saved : "night";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", "night");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <ThemeInitializer />
        <SiteHeader />
        <div className="mx-auto w-full max-w-[1460px] px-5 pb-14 pt-8 sm:px-8 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
            <SiteSidebar />
            <main className="flex min-w-0 flex-col gap-16">{children}</main>
          </div>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
