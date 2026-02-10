import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-[1320px] flex-col gap-16 px-5 pb-16 pt-8 sm:px-8 lg:px-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
