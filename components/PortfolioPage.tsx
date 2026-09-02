"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Code2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DatabaseZap,
  FileText,
  Mail,
  MapPin,
  Menu,
  Moon,
  Presentation,
  ShieldCheck,
  Sun,
  Terminal,
  TestTube2,
  X,
} from "lucide-react";
import {
  siBootstrap,
  siAnthropic,
  siCoursera,
  siCss,
  siCypress,
  siExpress,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siUdemy,
  siNodedotjs,
  siReact,
  siTypescript,
  siNextdotjs,
  siDevexpress,
} from "simple-icons/icons";
import {
  certifications,
  profile,
  recommendations,
  roles,
  services,
  skillGroups,
  softSkills,
  translations,
  type Language,
} from "@/lib/content";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BrandIcon({
  icon,
  size = 17,
}: {
  icon: { path: string; title: string };
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      focusable="false"
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

// This client component owns the small interactive behaviors layered over the static portfolio content.
export function PortfolioPage() {
  // Resetting the recommendation index when language changes prevents a missing item if arrays diverge.
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [activeRecommendation, setActiveRecommendation] = useState(0);

  // Derived values keep rendering logic concise and ensure every section uses the active language.
  const copy = translations[language];
  const roleCopy = roles[language];
  const recommendationList = recommendations[language];
  const currentRecommendation = recommendationList[activeRecommendation];
  const navigation = [
    ["services", copy.nav.services],
    ["expertise", copy.nav.expertise],
    ["soft-skills", copy.nav.softSkills],
    ["about", copy.nav.about],
    ["recommendations", copy.nav.recommendations],
    ["contact", copy.nav.contact],
  ] as const;
  const visibleCertifications = showAllCertifications
    ? certifications[language]
    : certifications[language].slice(0, 3);

  // The document language matters for screen readers and browser language tooling.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function navigate() {
    setMenuOpen(false);
  }

  // A language switch also returns the carousel to its first translated recommendation.
  function switchLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setActiveRecommendation(0);
  }

  function changeRecommendation(direction: number) {
    const total = recommendationList.length;
    setActiveRecommendation((current) => (current + direction + total) % total);
  }

  // Issuers without a brand mark fall back to a neutral verification icon.
  function getCertificationIssuerIcon(issuer: string) {
    const normalizedIssuer = issuer.toLowerCase();

    if (normalizedIssuer.includes("anthropic")) {
      return <BrandIcon icon={siAnthropic} size={14} />;
    }

    if (normalizedIssuer.includes("udemy")) {
      return <BrandIcon icon={siUdemy} size={14} />;
    }

    if (normalizedIssuer.includes("coursera")) {
      return <BrandIcon icon={siCoursera} size={14} />;
    }

    if (normalizedIssuer.includes("linkedin")) {
      return <LinkedInIcon size={14} />;
    }

    return <ShieldCheck size={14} aria-hidden="true" />;
  }

  // Skill labels are the source of truth; this mapping only selects their visual icon.
  function getSkillIcon(skill: string) {
    if (skill.includes("JavaScript")) {
      return <BrandIcon icon={siJavascript} />;
    }

    if (skill.includes("TypeScript")) {
      return <BrandIcon icon={siTypescript} />;
    }

    if (skill.includes("Node.js")) {
      return <BrandIcon icon={siNodedotjs} />;
    }

    if (skill.includes("Express.js")) {
      return <BrandIcon icon={siExpress} />;
    }

    if (skill.includes("React")) {
      return <BrandIcon icon={siReact} />;
    }

    if (skill.includes("Next.js")) {
      return <BrandIcon icon={siNextdotjs} />;
    }

    if (skill.includes("HTML")) {
      return <BrandIcon icon={siHtml5} />;
    }

    if (skill.includes("CSS")) {
      return <BrandIcon icon={siCss} />;
    }

    if (skill.includes("Bootstrap")) {
      return <BrandIcon icon={siBootstrap} />;
    }

    if (skill.includes("Cypress")) {
      return <BrandIcon icon={siCypress} />;
    }

    if (skill.includes("Katalon")) {
      return <TestTube2 size={17} aria-hidden="true" />;
    }

    if (skill.includes("Azure DevOps")) {
      return <BrandIcon icon={siGithubactions} />;
    }

    if (skill.includes("GitHub Actions")) {
      return <BrandIcon icon={siGithub} />;
    }

    if (
      skill.includes("Microsoft SQL Server") ||
      skill.includes("Oracle SQL Developer")
    ) {
      return <DatabaseZap size={17} aria-hidden="true" />;
    }

    if (skill.includes("Technical demos")) {
      return <Presentation size={17} aria-hidden="true" />;
    }

    if (skill.includes("AI")) {
      return <Bot size={17} aria-hidden="true" />;
    }

    if (skill.includes("CLI") || skill.includes("Bash")) {
      return <Terminal size={17} aria-hidden="true" />;
    }

    if (skill.includes("Git")) {
      return <BrandIcon icon={siGit} />;
    }

    if (skill.includes("Documentation")) {
      return <FileText size={17} aria-hidden="true" />;
    }

    if (skill.includes("DevExpress")) {
      return <BrandIcon icon={siDevexpress} />;
    }

    return <Code2 size={17} aria-hidden="true" />;
  }

  // Sections remain declarative below; content and interaction state are assembled above.
  return (
    <div
      className={darkMode ? "site-shell is-dark" : "site-shell"}
      lang={language}
    >
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${profile.name} home`}>
          <span className="wordmark-letters">FCL</span>
          <span className="wordmark-mark">;</span>
        </a>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={navigate}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div
            className={`language-switch ${language === "es" ? "is-es" : "is-en"}`}
            role="group"
            aria-label="Language selector"
          >
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => switchLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              className={language === "es" ? "active" : ""}
              onClick={() => switchLanguage("es")}
              aria-pressed={language === "es"}
            >
              ES
            </button>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDarkMode((dark) => !dark)}
            aria-label={
              darkMode ? copy.switchToLightMode : copy.switchToDarkMode
            }
            title={darkMode ? copy.switchToLightMode : copy.switchToDarkMode}
            aria-pressed={darkMode}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? copy.closeMenu : copy.menu}
            aria-expanded={menuOpen}
          >
            <span
              className="menu-toggle-icon menu-toggle-open"
              aria-hidden="true"
            >
              <X size={20} />
            </span>
            <span
              className="menu-toggle-icon menu-toggle-closed"
              aria-hidden="true"
            >
              <Menu size={20} />
            </span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {copy.availability}
            </p>
            <h1 id="hero-title" className="hero-title">
              <span>{roleCopy.engineering}</span>
              <span className="hero-title-connector">{copy.roleConnector}</span>
              <span>{roleCopy.quality}</span>
              <span className="hero-title-support">{roleCopy.client}</span>
            </h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                {copy.contact}
                <ArrowUpRight size={17} />
              </a>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="portrait-frame">
            <Image
              src="/federico-cuelho.png"
              alt="Federico Cuelho, software engineer and QA automation specialist"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div className="portrait-caption">
              <MapPin size={15} /> {copy.location}
            </div>
          </div>
        </section>

        <section
          className="section-wrap services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / {copy.nav.services}</p>
            <h2 id="services-title">{copy.services}</h2>
          </div>
          <p className="section-lead">{copy.servicesLead}</p>
          <div className="services-list">
            {services[language].map((service) => (
              <article className="service" key={service.number}>
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap expertise-section"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / {copy.nav.expertise}</p>
            <h2 id="expertise-title">{copy.skills}</h2>
          </div>
          <p className="section-lead">{copy.skillsLead}</p>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      {skill.split(" | ").map((skillPart, index) => (
                        <span className="skill-part" key={skillPart}>
                          <span className="skill-icon">
                            {getSkillIcon(skillPart)}
                          </span>
                          <span>{skillPart}</span>
                          {index < skill.split(" | ").length - 1 && (
                            <span className="skill-separator">|</span>
                          )}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap soft-skills-section"
          id="soft-skills"
          aria-labelledby="soft-skills-title"
        >
          <div className="section-heading">
            <p className="eyebrow">03 / {copy.nav.softSkills}</p>
            <h2 id="soft-skills-title">{copy.softSkills}</h2>
          </div>
          <p className="section-lead">{copy.softSkillsLead}</p>
          <div className="soft-skills-grid">
            {softSkills[language].map((skill) => (
              <article
                className={skill.primary ? "soft-skill primary" : "soft-skill"}
                key={skill.title}
              >
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-wrap about-layout">
            <p className="eyebrow">04 / {copy.nav.about}</p>
            <div>
              <h2 id="about-title">{copy.about}</h2>
              <p>{copy.aboutCopy}</p>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {profile.email} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section-wrap recommendations-section"
          id="recommendations"
          aria-labelledby="recommendations-title"
        >
          <div className="section-heading">
            <p className="eyebrow">05 / {copy.nav.recommendations}</p>
            <h2 id="recommendations-title">{copy.recommendations}</h2>
          </div>
          <p className="section-lead">{copy.recommendationsLead}</p>
          <div className="recommendations-carousel" aria-live="polite">
            <figure className="recommendation">
              <blockquote>“{currentRecommendation.quote}”</blockquote>
              <figcaption>
                <strong>{currentRecommendation.name}</strong>
                <span>{currentRecommendation.role}</span>
                <small>
                  {currentRecommendation.date} ·{" "}
                  {currentRecommendation.relationship}
                </small>
              </figcaption>
            </figure>
            <div className="carousel-controls">
              <button
                className="carousel-button"
                type="button"
                onClick={() => changeRecommendation(-1)}
                aria-label={copy.previousRecommendation}
              >
                <ChevronLeft size={18} />
              </button>
              <p className="carousel-status">
                {activeRecommendation + 1} / {recommendationList.length}
              </p>
              <button
                className="carousel-button"
                type="button"
                onClick={() => changeRecommendation(1)}
                aria-label={copy.nextRecommendation}
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div
              className="carousel-dots"
              role="tablist"
              aria-label={copy.recommendations}
            >
              {recommendationList.map((item, index) => (
                <button
                  key={`${item.name}-${item.date}-${index}`}
                  type="button"
                  className={
                    index === activeRecommendation ? "dot active" : "dot"
                  }
                  aria-label={`${item.name} (${index + 1})`}
                  aria-selected={index === activeRecommendation}
                  role="tab"
                  onClick={() => setActiveRecommendation(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-wrap certifications-section"
          aria-labelledby="certifications-title"
        >
          <div className="section-heading">
            <p className="eyebrow">06 / {copy.certifications}</p>
            <h2 id="certifications-title">{copy.certifications}</h2>
          </div>
          <p className="section-lead">{copy.certificationsLead}</p>
          <div className="certifications-list">
            {visibleCertifications.map((certification) => (
              <article className="certification" key={certification.name}>
                <h3>{certification.name}</h3>
                <p>
                  <span className="issuer-icon">
                    {getCertificationIssuerIcon(certification.issuer)}
                  </span>
                  {certification.issuer}
                  <span className="issuer-separator">·</span>
                  {certification.date}
                </p>
              </article>
            ))}
          </div>
          <button
            className="disclosure"
            onClick={() => setShowAllCertifications((show) => !show)}
            aria-expanded={showAllCertifications}
          >
            {showAllCertifications
              ? copy.lessCertifications
              : copy.allCertifications}
            <ChevronDown
              size={17}
              className={showAllCertifications ? "chevron-up" : ""}
            />
          </button>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="section-wrap footer-content">
          <p className="eyebrow">07 / {copy.nav.contact}</p>
          <h2>{copy.footer}</h2>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} />
          </a>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {profile.name}. {copy.rights}
            </span>
            <div>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <BrandIcon icon={siGithub} size={16} />
                GitHub <ArrowUpRight size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon size={16} />
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
