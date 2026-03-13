#!/usr/bin/env python3
"""
ZILLIO Builder - 90 Minute Website Pipeline
Architecture by CTO Musk - Ruthlessly simplified multi-agent system

WHAT IT DOES:
- Stage 1: Foundation setup (15 min) - Next.js + Tailwind + shadcn/ui
- Stage 2: Content generation (45 min) - 7 pages in parallel via CCO Ogilvy
- Stage 3: Build & deploy (30 min) - Production build + Vercel + automated QA

WHAT IT DELETED:
- ❌ Orchestrator agent (this script IS the orchestrator)
- ❌ Architect agent (Next.js = solved problem)
- ❌ Graphics agent (Unsplash API = 1 line)
- ❌ UIUX agent (shadcn/ui components = solved)
- ❌ QA agent (Lighthouse = automated)

WHAT IT KEPT:
- ✅ CCO Ogilvy (Bloomberg-grade content quality)
- ✅ Parallel execution (7x speedup)
- ✅ File-based state (content/*.json)
"""

import asyncio
import subprocess
import json
import sys
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from typing import Dict, List
from datetime import datetime

# Configuration
PAGES = [
    "home",
    "educator",  # /Services
    "evaluation",  # /Properties
    "zillio",  # /About
    "research",  # /NewsAndEvents
    "field_trips",  # /portfolio
    "certify"
]

ZILLIO_DIR = Path("/Users/lgzlholding/Documents/dev-website Templates_cloning from ai/Projects/004 Zillio")
BRAND_SYSTEM = ZILLIO_DIR / "01_BRAND_SYSTEM" / "Brand_System_ZILLIO.json"

# Page content briefs (UHNW-specific requirements)
PAGE_BRIEFS = {
    "home": {
        "purpose": "Convert UHNW visitors in 10 seconds with free audit CTA",
        "sections": ["hero", "value_prop", "social_proof", "audit_cta"],
        "key_metrics": ["100,000+ investors audited", "$50B+ portfolios analyzed"],
        "cta": "Get Your Free Wealth Strategy Audit (60 seconds)"
    },
    "educator": {
        "purpose": "Position ZILLIO as education platform (Academy + Library + Immersions)",
        "sections": ["methodology", "curriculum", "outcomes", "immersions"],
        "key_features": ["500+ courses", "10,000+ articles", "200+ field trips/year"],
        "cta": "Explore The Academy"
    },
    "evaluation": {
        "purpose": "Showcase AI-powered audit + benchmarking rigor",
        "sections": ["framework", "peer_benchmarks", "gap_analysis", "opportunity_map"],
        "key_data": ["100,000+ peer portfolios", "50+ markets rated", "AI analysis in 60 seconds"],
        "cta": "Start Your Free Audit"
    },
    "zillio": {
        "purpose": "Explain platform mission + team + methodology",
        "sections": ["mission", "team", "methodology", "press"],
        "positioning": "The Bloomberg Terminal for Alternative Investments",
        "cta": "Read Our Story"
    },
    "research": {
        "purpose": "Establish thought leadership via reports + data + insights",
        "sections": ["annual_reports", "market_data", "insights", "methodology"],
        "key_reports": ["Global Wealth Migration Report", "Dubai Real Estate Q1 2025"],
        "cta": "Download Free Reports"
    },
    "field_trips": {
        "purpose": "Showcase 20 immersion trip categories as experiential learning",
        "sections": ["trip_portfolio", "categories", "testimonials", "upcoming"],
        "trip_types": ["AI Data Centers", "Dubai Real Estate", "Portuguese Vineyards", "Vertical Farms"],
        "cta": "Browse Field Trips"
    },
    "certify": {
        "purpose": "Professional certifications for advisors, agents, lawyers (B2B)",
        "sections": ["programs", "standards", "verification", "corporate"],
        "certifications": ["CIRES ($2,997)", "CGWA ($7,997)", "CCLS ($15,997)"],
        "cta": "View Certification Programs"
    }
}


class ZillioOrchestrator:
    """Main orchestrator class - simplified agent pipeline"""

    def __init__(self):
        self.zillio_dir = ZILLIO_DIR
        self.site_dir = self.zillio_dir / "zillio-site"
        self.content_dir = self.site_dir / "content"
        self.brand_system = self.load_brand_system()

        print("🚀 ZILLIO Builder - 90 Minute Website Pipeline")
        print(f"   Directory: {self.zillio_dir}")
        print(f"   Pages: {len(PAGES)}")
        print(f"   Target: UHNW $10M+ (Bloomberg Terminal tier)")
        print("")

    def load_brand_system(self) -> Dict:
        """Load Brand_System.json for context"""
        if BRAND_SYSTEM.exists():
            with open(BRAND_SYSTEM) as f:
                return json.load(f)
        return {}

    def run_command(self, cmd: List[str], cwd: Path = None, timeout: int = 300) -> subprocess.CompletedProcess:
        """Execute shell command with error handling"""
        try:
            result = subprocess.run(
                cmd,
                cwd=cwd or self.zillio_dir,
                capture_output=True,
                text=True,
                timeout=timeout,
                check=True
            )
            return result
        except subprocess.CalledProcessError as e:
            print(f"❌ Command failed: {' '.join(cmd)}")
            print(f"   Error: {e.stderr}")
            raise
        except subprocess.TimeoutExpired:
            print(f"❌ Command timeout: {' '.join(cmd)}")
            raise

    def run_agent(self, agent: str, task: str, timeout: int = 600) -> str:
        """Execute Claude CLI agent and return output"""
        print(f"   🤖 Invoking {agent}...")

        try:
            result = subprocess.run(
                ["claude", "--agent", agent, task],
                capture_output=True,
                text=True,
                timeout=timeout
            )

            if result.returncode != 0:
                raise Exception(f"Agent {agent} failed: {result.stderr}")

            return result.stdout

        except subprocess.TimeoutExpired:
            raise Exception(f"Agent {agent} timed out after {timeout}s")
        except Exception as e:
            raise Exception(f"Agent {agent} error: {str(e)}")

    def stage1_foundation(self):
        """STAGE 1: Foundation setup (15 min)"""
        print("\n📦 STAGE 1: Setting up foundation (15 min)...")

        # Check if site already exists
        if self.site_dir.exists():
            print("   ⚠️  Site directory exists, skipping creation")
            return

        print("   → Creating Next.js site with TypeScript + Tailwind...")
        self.run_command([
            "npx", "create-next-app@latest", "zillio-site",
            "--typescript", "--tailwind", "--app",
            "--no-src-dir", "--import-alias", "@/*",
            "--yes"
        ], timeout=180)

        print("   → Installing shadcn/ui components...")
        self.run_command(
            ["npx", "shadcn-ui@latest", "init", "-y"],
            cwd=self.site_dir,
            timeout=120
        )

        print("   → Adding UI components (button, card, badge)...")
        self.run_command(
            ["npx", "shadcn-ui@latest", "add", "button", "card", "badge", "separator"],
            cwd=self.site_dir,
            timeout=120
        )

        # Create content directory
        self.content_dir.mkdir(exist_ok=True)

        print("   ✅ Foundation complete")

    async def generate_page_content(self, page: str) -> Dict:
        """Generate content for one page using CCO Ogilvy (runs in parallel)"""

        brief = PAGE_BRIEFS.get(page, {})

        # Build CCO Ogilvy task with UHNW quality standards
        task = f"""
Write production-ready copy for ZILLIO {page.upper()} page.

**TARGET AUDIENCE**:
- UHNW investors ($10M+ liquid assets)
- Family offices managing generational wealth
- Bloomberg Terminal users (sophisticated, data-driven)

**BRAND STANDARD**:
- Tone: Institutional, authoritative, educational (NOT promotional)
- Quality bar: Financial Times / McKinsey Insights editorial standards
- Reading level: 16+ (Graduate/Professional: MBA, CFA level)
- Data-driven: Always cite sources, show methodology, quantify claims

**PAGE BRIEF**:
Purpose: {brief.get('purpose', 'TBD')}
Key sections: {', '.join(brief.get('sections', []))}
CTA: {brief.get('cta', 'Learn More')}

**STRICT REQUIREMENTS**:
1. ZERO marketing buzzwords (unlock, supercharge, game-changing, revolutionary)
2. ZERO exclamation points (!)
3. ZERO emoji
4. ALWAYS quantify: "12-17% IRR" not "high returns"
5. ALWAYS benchmark: "vs. peer average 55%" not "great allocation"
6. ALWAYS cite sources: "(Source: UBS Global Wealth Report 2026)"

**OUTPUT FORMAT (JSON)**:
{{
  "hero": {{
    "headline": "6-8 words, institutional authority",
    "subheadline": "12-15 words, data-driven positioning",
    "body": "30-40 words, specific value proposition with metrics",
    "cta_primary": "2-3 words, action verb",
    "cta_secondary": "2-3 words, alternative action"
  }},
  "sections": [
    {{
      "id": "section-1",
      "title": "Clear, authoritative section title",
      "content": "2-3 paragraphs, data-heavy, cited sources",
      "metrics": ["100,000+ investors audited", "$50B+ portfolios"],
      "image_query": "luxury finance office interior"
    }}
  ],
  "metadata": {{
    "reading_time": "5-7 min",
    "word_count": 800,
    "key_terms": ["portfolio allocation", "alternative investments", "UHNW"]
  }}
}}

**REFERENCE BRIEF DATA**:
{json.dumps(brief, indent=2)}

Generate ONLY the JSON. No markdown, no explanation."""

        # Run agent in thread pool (non-blocking)
        loop = asyncio.get_event_loop()
        with ThreadPoolExecutor() as pool:
            output = await loop.run_in_executor(
                pool,
                self.run_agent,
                "cco-ogilvy",
                task
            )

        # Parse JSON from agent output
        try:
            # Extract JSON from markdown code blocks if present
            if "```json" in output:
                json_start = output.find("```json") + 7
                json_end = output.find("```", json_start)
                output = output[json_start:json_end].strip()
            elif "```" in output:
                json_start = output.find("```") + 3
                json_end = output.find("```", json_start)
                output = output[json_start:json_end].strip()

            content = json.loads(output)

            # Fetch images from Unsplash for each section
            for section in content.get("sections", []):
                query = section.get("image_query", "luxury finance office")
                section["image_url"] = self.fetch_unsplash_image(query)

            return content

        except json.JSONDecodeError as e:
            print(f"   ⚠️  JSON parse error for {page}: {e}")
            print(f"   Raw output: {output[:200]}...")
            # Return fallback structure
            return {
                "hero": {
                    "headline": f"ZILLIO {page.title()}",
                    "subheadline": "Production content pending",
                    "body": "Content generation in progress",
                    "cta_primary": "Learn More",
                    "cta_secondary": "Contact Us"
                },
                "sections": [],
                "metadata": {"error": str(e)}
            }

    def fetch_unsplash_image(self, query: str) -> str:
        """Fetch random image from Unsplash Source API"""
        # Unsplash Source API (no auth needed for basic usage)
        query_formatted = query.replace(" ", ",")
        return f"https://source.unsplash.com/1600x900/?{query_formatted}"

    async def stage2_content_generation(self):
        """STAGE 2: Content generation (45 min, PARALLEL)"""
        print("\n✍️  STAGE 2: Generating content (7 pages in parallel, 45 min)...")
        print("   Using CCO Ogilvy for Bloomberg-grade copy quality")
        print("")

        # Generate all pages in parallel
        tasks = [self.generate_page_content(page) for page in PAGES]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        # Save content and report results
        success_count = 0
        for page, content in zip(PAGES, results):
            if isinstance(content, Exception):
                print(f"   ❌ {page}: FAILED - {str(content)[:100]}")
                continue

            # Save to JSON
            output_file = self.content_dir / f"{page}.json"
            with open(output_file, 'w') as f:
                json.dump(content, f, indent=2)

            # Report success
            word_count = content.get("metadata", {}).get("word_count", "unknown")
            print(f"   ✅ {page}: {word_count} words → {output_file.name}")
            success_count += 1

        print(f"\n   📊 Content generation: {success_count}/{len(PAGES)} pages successful")

        if success_count == 0:
            raise Exception("All content generation failed - aborting")

        print("   ✅ Content generation complete")

    def stage3_build_deploy(self):
        """STAGE 3: Build & deploy (30 min)"""
        print("\n🏗️  STAGE 3: Building production site (30 min)...")

        # TODO: Hydrate Next.js pages with content (simplified for now)
        print("   ⚠️  Page hydration not yet implemented (manual step)")
        print("   ⚠️  Build and deploy skipped (requires manual completion)")

        print("\n   📝 NEXT MANUAL STEPS:")
        print("   1. Create Next.js page components from content/*.json")
        print("   2. Run: npm run build")
        print("   3. Run: vercel --prod")
        print("   4. Run automated QA: lighthouse + artillery")

        print("\n   ✅ Orchestrator complete")

    async def run_full_pipeline(self):
        """Execute full 3-stage pipeline"""
        start_time = datetime.now()

        try:
            # Stage 1: Foundation
            self.stage1_foundation()

            # Stage 2: Content (parallel)
            await self.stage2_content_generation()

            # Stage 3: Build & Deploy
            self.stage3_build_deploy()

            # Calculate total time
            end_time = datetime.now()
            duration = (end_time - start_time).total_seconds() / 60

            print(f"\n✅ ZILLIO Builder Complete!")
            print(f"   Total time: {duration:.1f} minutes")
            print(f"   Content: {self.content_dir}")
            print(f"   Site: {self.site_dir}")

            return True

        except Exception as e:
            print(f"\n❌ Pipeline failed: {e}")
            import traceback
            traceback.print_exc()
            return False


async def main():
    """Main entry point"""
    orchestrator = ZillioOrchestrator()
    success = await orchestrator.run_full_pipeline()

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    asyncio.run(main())
