import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project, index) => ({ slug: String(index + 1) }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[Number(slug) - 1];
  return { title: project ? `${project.client} — Advolt` : "Work — Advolt" };
}

export default async function WorkDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[Number(slug) - 1];
  if (!project) notFound();

  return (
    <main className="work-detail">
      <nav className="nav shell" aria-label="Project navigation">
        <Link className="wordmark" href="/">
          <span className="mark">A</span>ADVOLT
        </Link>
        <Link className="text-link" href="/#work">
          Back to work <span className="arrow">↗</span>
        </Link>
      </nav>
      <section className="shell detail-hero">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          {project.category} / {project.number}
        </p>
        <h1>{project.title}</h1>
        <p className="detail-intro">
          A placeholder apparel case study for {project.client}. Replace this
          narrative with the collection brief, campaign point of view and
          verified outcome once the project assets are supplied.
        </p>
      </section>
      <div className={`shell detail-art ${project.accent}`}>
        <span>{project.result}</span>
        <i />
      </div>
      <section className="shell detail-grid">
        <div>
          <p className="eyebrow">THE BRIEF</p>
          <h2>
            Find the tension.
            <br />
            <em>Make the drop matter.</em>
          </h2>
        </div>
        <div className="detail-copy">
          <p>
            This is where the collection context belongs: what was true before
            launch, what needed to change and why now was the right time to
            move.
          </p>
          <p>
            This placeholder keeps the content honest while leaving a considered
            home for the eventual launch strategy, creative direction and
            measured sell-through result.
          </p>
          <div className="detail-metrics">
            <div>
              <strong>+42%</strong>
              <span>SAMPLE LIFT</span>
            </div>
            <div>
              <strong>3.8x</strong>
              <span>SAMPLE ROAS</span>
            </div>
            <div>
              <strong>+31%</strong>
              <span>SAMPLE GROWTH</span>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="shell cta-inner">
          <p className="eyebrow">NEXT PROJECT</p>
          <h2>
            Make the next
            <br />
            <em>move count.</em>
          </h2>
          <Link className="button button-light" href="/#quote-form">
            Request a Quote <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
