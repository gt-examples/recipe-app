import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { T } from "gt-next";
import { getGT } from "gt-next/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();

  const title = gt("Recipe Browser | General Translation");
  const description = gt(
    "Multilingual cooking recipe browser with locale-aware quantities, temperatures, and serving counts."
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: "https://recipe-app.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        ja: "/ja",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>
          <div className="bg-blue-600 text-white text-center text-xs py-2 px-4">
            <T>
              This is an example app built with{" "}
              <a href="https://generaltranslation.com" className="underline font-medium" target="_blank" rel="noopener noreferrer">
                General Translation
              </a>
              . View the{" "}
              <a href="https://github.com/gt-examples/recipe-app" className="underline font-medium" target="_blank" rel="noopener noreferrer">
                source code on GitHub
              </a>
              .
            </T>
          </div>
          {children}
        </GTProvider>
      </body>
    </html>
  );
}
