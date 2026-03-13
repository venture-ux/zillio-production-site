import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZILLIO - The Global Authority on Alternative Investment Education",
  description: "The Bloomberg Terminal for Alternative Investments. Benchmark your portfolio against 100,000+ UHNW peers. Data-driven education for $10M+ investors.",
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "EDUCATOR", href: "/Services" },
  { label: "EVALUATION", href: "/Properties" },
  { label: "ZILLIO", href: "/About" },
  { label: "Research & Media", href: "/NewsAndEvents" },
  { label: "FIELD TRIPS", href: "/portfolio" },
  { label: "CERTIFY", href: "/certify" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Navigation */}
        <nav className="border-b" style={{ borderColor: "var(--border-default)" }}>
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold" style={{ color: "var(--brand-primary)" }}>
                ZILLIO
              </Link>
              <div className="flex gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t mt-32 py-16" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              ZILLIO provides educational content and analysis. We do not provide investment advice, execute transactions, or manage capital.
              All investments carry risk. Past performance does not guarantee future results. Consult with licensed professionals before making investment decisions.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
