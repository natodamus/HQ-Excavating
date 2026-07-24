import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Tractor,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { EstimateForm } from "@/components/EstimateForm";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/data/site";
import FloatingActions from "@/components/FloatingActions";
import Link from "next/link";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero heroPhoto">
          <div className="heroOverlay" />
          <div className="heroCopy">
            <p className="eyebrow">Licensed &amp; Insured • Residential &amp; Commercial Site Work • Serving Massachusetts</p>
            <h1>High-quality site work<span>from the ground up.</span></h1>
            <p className="heroDescription">{site.description}</p>
            <div className="heroActions">
              <a className="primaryButton" href="#estimate">Request a Free Estimate <ArrowRight size={18} /></a>
              <a className="secondaryButton" href={`tel:${site.phoneHref}`}><Phone size={18} /> Call {site.phoneDisplay}</a>
            </div>
            <div className="trustStrip">
              <span><Check size={16} /> Free estimates</span>
              <span><Check size={16} /> Dependable service</span>
              <span><Check size={16} /> Quality workmanship</span>
            </div>
          </div>
        </section>

        <section className="proofBar">
          <div><Tractor /><span><strong>Professional equipment</strong>Prepared for demanding projects</span></div>
          <div><Ruler /><span><strong>Precision site work</strong>Careful excavation and preparation</span></div>
          <div><ShieldCheck /><span><strong>Reliable service</strong>Clear communication from start to finish</span></div>
        </section>

        <section className="intro section">
          <div className="introHeading"><p className="eyebrow">{site.company}</p><h2>Site work done right the first time.</h2></div>
          <div className="introCopy">
            <p>From initial clearing and excavation through underground utilities, drainage, and final grading, we provide the equipment, planning, and attention to detail needed to prepare your property correctly.</p>
            <a href="#about">Learn about our approach <ArrowRight size={16} /></a>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="sectionHeader">
            <div><p className="eyebrow">What We Do</p><h2>Site-development services built around the job.</h2></div>
            <p>From residential improvements to larger commercial projects, we provide practical solutions tailored to the property and the work ahead.</p>
          </div>

          <div className="serviceGrid">
            {services.map((service, index) => (
              <Link 
                className="serviceCard" 
                key={service.slug} 
                href={`/services/${service.slug}`}
              >
                <div className="serviceTop">
                  <span>0{index + 1}</span>
                  <ArrowRight size={20} />
                </div>
              
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="sectionHeader projectHeader">
            <div><p className="eyebrow">Featured Work</p><h2>Real projects. Proven capability.</h2></div>
            <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> View Instagram</a>
          </div>
          <div className="projectGrid">
            <ProjectCard large image="/images/projects/foundation-drainage.webp" category="Foundation Drainage" title="Prepared for the next phase" description="Excavation, drainage piping, waterproofing support, and careful backfill around a new foundation." />
            <ProjectCard image="/images/projects/detention-system.webp" category="Stormwater Management" title="Underground systems installed correctly" description="Subsurface drainage chambers, stone placement, and utility coordination." />
            <ProjectCard image="/images/projects/hydraulic-hammer.webp" category="Demolition" title="Heavy work with the right equipment" description="Concrete breaking and site preparation using professional hydraulic equipment." />
          </div>
          <div className="projectStrip">
            <ProjectCard image="/images/projects/utility-trench.webp" category="Underground Utilities" title="Precision utility trenching" description="Careful trench excavation and pipe installation through an active worksite." />
            <ProjectCard image="/images/projects/stormwater-install.webp" category="Drainage" title="Stone and drainage installation" description="Drainage bedding and aggregate placement using full-size excavation equipment." />
            <ProjectCard image="/images/projects/asphalt-restoration.webp" category="Site Restoration" title="Finished beyond the excavation" description="Compaction and surface restoration that leaves the site ready for use." />
          </div>
        </section>

        <section id="about" className="about">
          <div className="aboutCopy section">
            <p className="eyebrow">Why High Quality</p><h2>Experienced site work. Straightforward service.</h2>
            <p>Successful excavation requires more than placing a machine on the property. It requires understanding the project, working carefully, communicating clearly, and leaving the site ready for the next phase.</p>
            <div className="featureList">
              <span><BadgeCheck /> Clear estimates and project expectations</span>
              <span><BadgeCheck /> Careful treatment of the property</span>
              <span><BadgeCheck /> Dependable scheduling and communication</span>
              <span><BadgeCheck /> Solutions tailored to the jobsite</span>
            </div>
          </div>
          <aside className="areaCard"><MapPin size={32} /><p className="eyebrow">Service Area</p><h3>{site.baseCity}</h3><p>{site.serviceArea}</p><a href="#estimate">Ask about your town <ArrowRight size={17} /></a></aside>
        </section>

        <section id="estimate" className="estimate section">
          <div className="estimateCopy">
            <p className="eyebrow">Start Your Project</p><h2>Tell us what needs to be done.</h2>
            <p>Share a few details about your project, including the location and type of work needed. We will review your request and contact you to discuss the next steps.</p>
            <div className="directContact">
              <a href={`tel:${site.phoneHref}`}><Phone /><span><small>Call</small>{site.phoneDisplay}</span></a>
              <a href={`mailto:${site.email}`}><Mail /><span><small>Email</small>{site.email}</span></a>
              <div><Building2 /><span><small>Based in</small>{site.baseCity}</span></div>
            </div>
          </div>
          <EstimateForm />
        </section>
      </main>
      <FloatingActions phoneDisplay={site.phoneDisplay} phoneHref={site.phoneHref} />
      <footer><Logo /><p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p><a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a></footer>
    </>
  );
}
