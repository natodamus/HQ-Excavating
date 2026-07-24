import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Phone,
} from "lucide-react";

import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { ProjectCard } from "@/components/ProjectCard";
import FloatingActions from "@/components/FloatingActions";
import {  getServiceBySlug } from "@/data/services";
import { services } from "@/data/services";
import { site } from "@/data/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${site.company}`,
    };
  }

  return {
    title: `${service.title} | ${site.company}`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main id="top">
        <section
          className="serviceHero"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        >
          <div className="serviceHeroOverlay" />

          <div className="serviceHeroContent">
            <Link className="serviceBackLink" href="/#services">
              <ArrowLeft size={17} />
              All services
            </Link>

            <p className="eyebrow">{site.company}</p>

            <h1>{service.title}</h1>

            <p>{service.heroDescription}</p>

            <div className="heroActions">
              <Link className="primaryButton" href="/#estimate">
                Request a Free Estimate
                <ArrowRight size={18} />
              </Link>

              <a
                className="secondaryButton"
                href={`tel:${site.phoneHref}`}
              >
                <Phone size={18} />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="serviceIntro section">
          <div className="serviceIntroHeading">
            <p className="eyebrow">Professional Site Work</p>
            <h2>{service.title} done with care and precision.</h2>
          </div>

          <div className="serviceOverview">
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="serviceCapabilities section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>Work tailored to the property and project.</h2>
            </div>

            <p>
              Every jobsite is different. We review the conditions,
              requirements, and intended result before recommending the right
              approach.
            </p>
          </div>

          <div className="capabilityGrid">
            {service.capabilities.map((capability) => (
              <div className="capabilityItem" key={capability}>
                <Check size={19} />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="serviceProcess section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Our Process</p>
              <h2>A straightforward approach from start to finish.</h2>
            </div>

            <p>
              Clear planning and coordination help the excavation work move
              efficiently while keeping the next phase of the project in mind.
            </p>
          </div>

          <div className="processGrid">
            {service.process.map((step, index) => (
              <article className="processCard" key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="serviceWork section">
          <div className="sectionHeader projectHeader">
            <div>
              <p className="eyebrow">Related Work</p>
              <h2>Professional equipment. Proven capability.</h2>
            </div>

            <Link href="/#projects">
              View featured projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="projectStrip">
            {service.relatedImages.map((project) => (
              <ProjectCard
                key={`${project.category}-${project.title}`}
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </section>

        <section className="serviceCta section">
          <div>
            <p className="eyebrow">Start Your Project</p>
            <h2>Need help with {service.title.toLowerCase()}?</h2>
            <p>
              Tell us about the property, the work needed, and the project
              location. We will review the details and contact you to discuss
              the next steps.
            </p>
          </div>

          <div className="serviceCtaActions">
            <Link className="primaryButton" href="/#estimate">
              Request a Free Estimate
              <ArrowRight size={18} />
            </Link>

            <a href={`tel:${site.phoneHref}`}>
              <Phone size={18} />
              {site.phoneDisplay}
            </a>

            <a href={`mailto:${site.email}`}>
              <Mail size={18} />
              {site.email}
            </a>
          </div>
        </section>
      </main>

      <FloatingActions
        phoneDisplay={site.phoneDisplay}
        phoneHref={site.phoneHref}
      />

      <footer>
        <Logo />
        <p>
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </p>
      </footer>
    </>
  );
}