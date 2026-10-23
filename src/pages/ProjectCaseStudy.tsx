import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {ArrowLeft,ExternalLink,Github,CheckCircle2,Layers,Cpu,ShieldCheck,MapPin,Calendar,Briefcase,AlertCircle,HelpCircle,TrendingUp,FolderGit2} from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import SEOHead from "@/components/portfolio/SEOHead";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? caseStudies[slug] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project case study you requested could not be located.
          </p>
          <Link to="/#projects">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Return to Projects
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Schema.org Structured Data for this specific Case Study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://harikrishnang.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://harikrishnang.vercel.app/#projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": project.canonicalUrl
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": project.title,
        "applicationCategory": project.category,
        "operatingSystem": "Web",
        "description": project.summary,
        "author": {
          "@type": "Person",
          "name": "Harikrishnan G",
          "url": "https://harikrishnang.vercel.app/"
        },
        "url": project.liveUrl || project.canonicalUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-primary/20">
      <SEOHead
        title={project.metaTitle}
        description={project.metaDescription}
        canonicalUrl={project.canonicalUrl}
        ogImage={`https://harikrishnang.vercel.app${project.heroImage}`}
        ogType="article"
        jsonLd={caseStudySchema}
      />

      <Navbar />

      <main className="pt-28 pb-20 flex-grow">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>
          </div>

          <article>
            {/* Header section */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
                {project.clientBadge && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                    {project.clientBadge}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                  <MapPin className="w-3 h-3 text-primary" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
                {project.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-card border border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Engineering Role</span>
                    <span className="text-sm font-semibold text-foreground">{project.targetRole}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-xs md:text-sm font-medium hover:bg-muted transition-colors shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </header>

            {/* Hero Image Showcase */}
            <div className="mb-14 rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border text-xs text-muted-foreground font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                </div>
                <span>{project.slug}.web.app</span>
                <span className="w-6" />
              </div>
              <div className="relative aspect-[16/9] w-full bg-muted/20">
                <img
                  src={project.heroImage}
                  alt={`${project.title} - ${project.subtitle}`}
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Overview & Problem Statement Grid */}
            <section className="grid md:grid-cols-2 gap-8 mb-14" aria-labelledby="project-overview-heading">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                  <Layers className="w-4 h-4" />
                  <h2 id="project-overview-heading" className="text-base text-foreground font-bold">
                    Project Overview
                  </h2>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <h2 className="text-base text-foreground font-bold">The Problem & Requirement</h2>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </section>

            {/* Responsibilities & Contributions */}
            <section className="mb-14 p-6 md:p-8 rounded-2xl bg-muted/30 border border-border" aria-labelledby="contributions-heading">
              <h2 id="contributions-heading" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
               
                <span>My Responsibilities & Technical Contributions</span>
              </h2>
              <ul className="space-y-3.5">
                {project.myRoleAndContributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Verified Tech Stack Breakdown */}
            <section className="mb-14" aria-labelledby="tech-stack-heading">
              <h2 id="tech-stack-heading" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
               
                <span>Verified Technical Stack</span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.frontend.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-muted text-foreground/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.backend.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-muted text-foreground/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">Database</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.database.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-muted text-foreground/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.devopsAndTools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-muted text-foreground/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features Implemented */}
            <section className="mb-14" aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
               
                <span>Key Features & Functional Highlights</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 transition-colors">
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{feat.title}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architectural Decisions */}
            <section className="mb-14 p-6 md:p-8 rounded-2xl bg-muted/20 border border-border" aria-labelledby="architecture-heading">
              <h2 id="architecture-heading" className="text-2xl font-bold text-foreground mb-6">
                Architectural & Technical Decisions
              </h2>
              <div className="space-y-4">
                {project.architectureDecisions.map((decision, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="text-base font-bold text-foreground mb-1">{decision.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{decision.reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering Challenges & Solutions */}
            <section className="mb-14" aria-labelledby="challenges-heading">
              <h2 id="challenges-heading" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
               
                <span>Technical Challenges & Engineering Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-base font-semibold text-red-500/90 mb-2">
                      Challenge: {item.challenge}
                    </h3>
                    <p className="text-sm text-foreground/90 pl-4 border-l-2 border-primary leading-relaxed">
                      <strong className="text-primary font-medium">Solution: </strong>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results and Impact */}
            <section className="mb-14 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20" aria-labelledby="impact-heading">
              <h2 id="impact-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Results & Business Impact</span>
              </h2>
              <ul className="space-y-3">
                {project.resultsAndImpact.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Other Projects Navigation */}
            <section className="pt-8 border-t border-border" aria-labelledby="other-projects-heading">
              <h2 id="other-projects-heading" className="text-xl font-bold text-foreground mb-6">
                Explore More Case Studies
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.values(caseStudies)
                  .filter((p) => p.slug !== project.slug)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      to={`/projects/${other.slug}`}
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group block"
                    >
                      <span className="text-xs font-semibold text-primary block mb-1">{other.category}</span>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {other.summary}
                      </p>
                    </Link>
                  ))}
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectCaseStudy;
