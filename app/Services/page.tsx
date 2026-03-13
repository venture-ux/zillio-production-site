import { promises as fs } from 'fs';
import path from 'path';
import Image from "next/image";

interface HeroContent {
  headline: string;
  subheadline: string;
  body: string;
  cta_primary: string;
  cta_secondary: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  metrics?: string[];
  image_url?: string;
}

interface PageContent {
  hero: HeroContent;
  sections: Section[];
  metadata?: {
    reading_time?: string;
    word_count?: number;
    key_terms?: string[];
  };
}

export default async function Educator() {
  const contentPath = path.join(process.cwd(), 'content', 'educator.json');
  const content: PageContent = JSON.parse(await fs.readFile(contentPath, 'utf8'));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-8" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-6" style={{ color: "var(--text-primary)" }}>
            {content.hero.headline}
          </h1>
          <p className="text-xl mb-4 max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            {content.hero.subheadline}
          </p>
          <p className="mb-8 max-w-4xl" style={{ color: "var(--text-secondary)" }}>
            {content.hero.body}
          </p>
          <div className="flex gap-4">
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--btn-primary)",
                color: "white",
              }}
            >
              {content.hero.cta_primary}
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                color: "var(--btn-primary)",
                border: "2px solid var(--border-default)",
              }}
            >
              {content.hero.cta_secondary}
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {content.sections.map((section, index) => (
        <section
          key={section.id}
          className="py-24 px-8"
          style={{
            backgroundColor: index % 2 === 0 ? "var(--bg-primary)" : "var(--bg-surface)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="mb-8" style={{ color: "var(--text-primary)" }}>
                  {section.title}
                </h2>
                <div
                  className="space-y-6 whitespace-pre-line"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {section.content}
                </div>
                {section.metrics && section.metrics.length > 0 && (
                  <div className="mt-12 space-y-4">
                    {section.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg"
                        style={{ backgroundColor: "var(--bg-data)" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "var(--brand-accent)" }}
                        />
                        <p className="data-medium" style={{ color: "var(--text-primary)" }}>
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {section.image_url && (
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={section.image_url}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
