import { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, Download,
  GraduationCap, Briefcase, BookOpen, Mountain, Users, Award, BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import rainyBg from "@/assets/rainy-stop.jpg";
import basviPhoto from "@/assets/basvi.jpg.asset.json";
import SideNav from "./SideNav";
import SectionTitle from "./SectionTitle";
import Rain from "./Rain";
import Fireflies from "./Fireflies";

const PROJECTS = [
  {
    title: "Retail Banking Dashboard",
    tag: "Power BI · DAX · Python",
    bullets: [
      "Situation / Task: A retail bank needed visibility into loan exposure, deposit behaviour and customer risk across income bands, nationalities and occupations.",
      "Action: Ran full EDA in Pandas/Seaborn, authored DAX measures (total loan, total deposit, credit card balance, business lending) and built a 4-page Power BI dashboard with action-button navigation.",
      "Result: Delivered a stakeholder-ready report exposing segmentation patterns and gave the team an end-to-end workflow from raw client data to actionable insight.",
    ],
    stack: ["Power BI", "DAX", "Python", "Pandas", "Seaborn"],
    href: "https://github.com/basvi-chunara/Retail-Banking-Analytics",
  },
  {
    title: "Airbnb Global Performance Dashboard",
    tag: "Power BI · DAX · MySQL",
    bullets: [
      "Situation / Task: Needed a single view of Airbnb market performance, guest ratings and host trends across global cities using a 33+ attribute dataset.",
      "Action: Monitored and validated MySQL data feeds, ran data-quality checks, then built a multi-page Power BI dashboard with DAX-driven KPI visuals.",
      "Result: Surfaced pricing inefficiencies, host-trust patterns and satisfaction trends, translated into recommendations on pricing, cleanliness and seasonal demand for non-technical stakeholders.",
    ],
    stack: ["Power BI", "DAX", "MySQL", "KPI Reporting"],
    href: "https://github.com/basvi-chunara/Airbnb_Global_Performance_Dashboard",
  },
  {
    title: "Business Insights with Tableau",
    tag: "Tableau · Data Cleaning",
    bullets: [
      "Four global factories, scattered telemetry, no clear answer to 'where are we losing the most?'",
      "Cleaned and joined production data, then built interactive dashboards comparing sites and pay equity.",
      "Identified Seiko as the highest-failure site and surfaced pay-gap patterns leadership could act on.",
    ],
    stack: ["Tableau", "JSON", "Data Cleaning"],
    href: "https://github.com/basvi-chunara",
  },
  {
    title: "SQL Layoffs Data Cleaning",
    tag: "MySQL · ETL",
    bullets: [
      "Messy public layoffs dataset, not usable for analysis as-is.",
      "Wrote MySQL pipelines to deduplicate, normalize formats and fix nulls across thousands of rows.",
      "Produced an analysis-ready dataset and reusable SQL patterns for future cleaning work.",
    ],
    stack: ["MySQL", "SQL", "ETL"],
    href: "https://github.com/basvi-chunara",
  },
  {
    title: "Full-Stack Web Application",
    tag: "JavaScript · PostgreSQL",
    bullets: [
      "Practiced end-to-end client–server thinking with real persistence.",
      "Built REST endpoints over PostgreSQL, validated with Postman, deployed on Heroku.",
      "Working HTTP/JSON app — solid base for future data-driven web tools.",
    ],
    stack: ["JavaScript", "PostgreSQL", "REST", "Heroku"],
    href: "https://github.com/basvi-chunara",
  },
  {
    title: "Android Event Management App",
    tag: "Java · Firestore",
    bullets: [
      "Event organizers needed a simple way to manage entrants, posters and waiting lists.",
      "Shipped poster updates, waiting-list flows and a Maps view plotting entrants in real time, backed by Firestore.",
      "Complete agile-built Android app delivered through review-driven sprints.",
    ],
    stack: ["Java", "Android", "Firestore", "Google Maps API"],
    href: "https://github.com/basvi-chunara",
  },
];

const EXPERIENCE = [
  {
    role: "Coding Instructor",
    org: "Code Ninjas",
    period: "Oct 2025 — Present",
    points: [
      "Teach JavaScript through projects and small games.",
      "Help young learners debug and think step by step.",
    ],
  },
  {
    role: "Data & Metrics Lead Volunteer",
    org: "Orfe EcoArt Program",
    period: "Aug 2025 — Present",
    points: [
      "Built KPI dashboards in MySQL, Power BI, Sheets and Python.",
      "Ran simple statistical checks on participation data to guide outreach.",
    ],
  },
  {
    role: "Digital Marketing Analyst Intern",
    org: "Vosyn",
    period: "May 2025 — Aug 2025",
    points: [
      "Analyzed engagement data in Google Analytics to inform campaigns.",
      "Presented competitor and market insights to stakeholders.",
    ],
  },
  {
    role: "Summer Tech Hub Leader",
    org: "Rewriting the Code (RTC)",
    period: "May 2025 — Aug 2025",
    points: [
      "Co-led bimonthly community events for Toronto interns.",
      "Planned inclusive, budget-conscious meetups for 10+ members.",
    ],
  },
  {
    role: "Quality Control Volunteer",
    org: "NAT — Network for Applied Technology",
    period: "Oct 2024 — Mar 2026",
    points: [
      "Resolved quality issues and supported continuous improvement workflows.",
      "Worked with hardware teams on troubleshooting and coordination.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "FastHire",
    period: "Jul 2024 — Aug 2024",
    points: [
      "Optimized multi-source SQL pipelines to speed up reporting.",
      "Performed validation and quality checks across business datasets.",
    ],
  },
];

const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "R", "SQL", "MySQL", "PostgreSQL", "SQLite", "Java", "JavaScript", "C"],
  },
  {
    group: "Data & Analytics",
    items: [
      "Power BI", "Tableau", "DAX", "Excel", "Dashboard Development", "KPI Reporting",
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "BigQuery",
    ],
  },
  {
    group: "Tools & Technologies",
    items: [
      "Git", "GitHub", "Linux", "Agile",
      "Microsoft Office 365", "PowerPoint Presentations", "Postman",
    ],
  },
];

const COURSES = [
  "Software Engineering",
  "Web Development",
  "Machine Learning",
  "Applied Statistics",
  "Database Management",
  "Digital Image Processing",
  "Reinforcement Learning",
];

const AWARDS = [
  "UAlberta Regional Excellence Scholarship",
  "International Admission Scholarship",
];

const CERTIFICATIONS = [
  "Deloitte Data Analytics",
  "Tata Data Visualization: Empowering Business with Effective Insights",
  "Prediction & Control with Function Approximation (Reinforcement Learning)",
];

const SECTIONS = ["home", "about", "education", "projects", "experience", "skills", "interests", "contact"];

const Portfolio = () => {
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Subtle rain that softens slightly as the page is scrolled, but
  // always remains visible throughout the journey.
  const rainOpacity = Math.max(0.35, 1 - scroll * 0.6);
  // Background blur ramps from 0 (landing, crisp) to ~24px deeper down.
  const bgBlur = scroll * 24;
  // Background dims subtly so text stays readable over the blur.
  const bgDim = 0.95 - scroll * 0.35;
  // Dark veil fades in with scroll so the landing stays bright/airy.
  const veilAlpha = 0.15 + scroll * 0.65;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Fixed blurred rainy background — consistent throughout */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${rainyBg})`,
          filter: `blur(${bgBlur}px) brightness(${bgDim}) saturate(1.05)`,
          transform: "scale(1.08)",
          transition: "filter 0.2s linear",
        }}
        aria-hidden
      />
      {/* Veil — light over the landing, deepens with scroll */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, hsl(220 35% 8% / ${Math.max(
            0.05,
            veilAlpha - 0.1
          )}) 0%, hsl(220 35% 6% / ${veilAlpha}) 60%, hsl(220 35% 4% / ${Math.min(
            0.92,
            veilAlpha + 0.08
          )}) 100%)`,
          transition: "background 0.2s linear",
        }}
        aria-hidden
      />

      {/* Ambient rain — subtle, persistent */}
      <Rain count={70} intensity={rainOpacity * 0.5} />

      {/* Edge fireflies — guide the eye along the margins, never behind text */}
      <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
        <Fireflies count={18} layout="edges" />
      </div>

      <SideNav active={active} />

      {/* HOME */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full max-w-5xl mx-auto px-6 md:px-10 pl-20 md:pl-24">
          <p className="text-[11px] uppercase tracking-[0.32em] text-firefly mb-5 animate-fade-up">
            Hello, I'm
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-foreground leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Basvi Chunara
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-foreground/80 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Data Enthusiast <span className="text-foreground/40 mx-2">·</span> CS Student
          </p>
          <p
            className="mt-6 max-w-xl text-foreground/70 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            I work with data to find patterns that help people make better decisions ✨
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="#projects">
              <Button className="rounded-full bg-firefly text-rain-deep hover:bg-firefly-soft">
                See projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="rounded-full bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10 hover:text-foreground">
                Get in touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Page body */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pl-20 md:pl-24">
        {/* ABOUT */}
        <section id="about" className="py-24 scroll-mt-20">
          <SectionTitle eyebrow="About" title="A short introduction." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass rounded-2xl p-7 shadow-card">
              <p className="text-foreground/85 leading-relaxed">
                I'm a fourth-year Computing Science student at the University of Alberta who
                likes working with data — cleaning it, asking questions of it, and turning the
                answers into something a person can actually use.
              </p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                Most of what I do is practical: SQL pipelines, dashboards, small analyses, and
                the occasional full-stack tool to put a result in front of someone. I learn by
                building, and I like problems where the data isn't tidy yet.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 shadow-card">
              <p className="text-[11px] uppercase tracking-[0.28em] text-firefly mb-3">What I focus on</p>
              <ul className="space-y-2.5 text-sm text-foreground/85">
                <li className="flex gap-2"><span className="text-firefly mt-1.5">▸</span> Data analysis & cleaning</li>
                <li className="flex gap-2"><span className="text-firefly mt-1.5">▸</span> Dashboards & reporting</li>
                <li className="flex gap-2"><span className="text-firefly mt-1.5">▸</span> SQL & data pipelines</li>
                <li className="flex gap-2"><span className="text-firefly mt-1.5">▸</span> Real-world problem solving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Education" title="Where I'm learning." />
          <div className="glass rounded-2xl p-7 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-foreground inline-flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-firefly" /> University of Alberta
                </h3>
                <p className="text-foreground/65 text-sm mt-1">BSc, Computing Science · Edmonton, AB</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/80 whitespace-nowrap">
                Sep 2023 — Jun 2027
              </span>
            </div>

            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.28em] text-firefly mb-3">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-foreground/10 text-foreground/85 border border-foreground/15">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-foreground/10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-firefly mb-3 inline-flex items-center gap-2">
                <Award className="w-3.5 h-3.5" /> Awards
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                {AWARDS.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-firefly mt-1.5">·</span><span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-foreground/10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-firefly mb-3 inline-flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5" /> Certifications
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-firefly mt-1.5">·</span><span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 scroll-mt-20">
          <SectionTitle
            eyebrow="Projects"
            title="Things I've built."
            subtitle="Each one started with a real question and ended with something usable."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="glass rounded-2xl p-6 shadow-card hover:-translate-y-0.5 transition-soft flex flex-col"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-firefly mb-2">{p.tag}</p>
                <h3 className="font-display text-lg text-foreground mb-3">{p.title}</h3>
                <ul className="space-y-2 text-sm text-foreground/80 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-firefly mt-1.5 shrink-0">·</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-foreground/10 text-foreground/75 border border-foreground/15">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="rounded-full bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10 hover:text-foreground">
                      <Github className="w-3.5 h-3.5 mr-1.5" /> View on GitHub
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE — alternating timeline */}
        <section id="experience" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Experience" title="The path so far." />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/15 md:-translate-x-1/2" aria-hidden />
            <ol className="space-y-10">
              {EXPERIENCE.map((e, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={e.role + e.org} className="relative md:grid md:grid-cols-2 md:gap-10">
                    <span
                      className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 w-3 h-3 rounded-full bg-firefly border-2 border-background shadow-soft"
                      aria-hidden
                    />
                    <div className={`pl-12 md:pl-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                      <div className={`glass rounded-2xl p-5 shadow-card text-left inline-block max-w-md ${right ? "" : "md:ml-auto"}`}>
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-firefly mb-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> <span>{e.period}</span>
                        </div>
                        <h3 className="font-display text-lg text-foreground">{e.role}</h3>
                        <p className="text-sm text-foreground/65 mb-3">{e.org}</p>
                        <ul className="space-y-1.5 text-sm text-foreground/85">
                          {e.points.map((pt) => (
                            <li key={pt} className="flex gap-2"><span className="text-firefly mt-1.5">·</span><span>{pt}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Skills" title="Tools I work with." />
          <div className="grid md:grid-cols-3 gap-5">
            {SKILLS.map((s) => (
              <div key={s.group} className="glass rounded-2xl p-6 shadow-card">
                <h3 className="font-display text-base text-foreground mb-4">{s.group}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-foreground/10 text-foreground/85 border border-foreground/15">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERESTS */}
        <section id="interests" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Interests" title="Off the clock." />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { Icon: BookOpen, label: "Reading" },
              { Icon: Mountain, label: "Mountains" },
              { Icon: Users, label: "Teaching" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="glass rounded-2xl p-7 shadow-card flex flex-col items-center text-center hover:-translate-y-0.5 transition-soft"
              >
                <Icon className="w-7 h-7 text-firefly mb-3" />
                <p className="font-display text-base text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 scroll-mt-20">
          <SectionTitle
            eyebrow="Contact"
            title="Let's talk."
            subtitle="Open to data internships, research collaborations, and solving problems in the data and AI space."
          />
          <div className="glass rounded-2xl p-7 md:p-9 shadow-card">
            <a
              href="mailto:basviyog@ualberta.ca"
              className="font-display text-2xl md:text-3xl text-foreground hover:text-firefly transition-soft break-all"
            >
              basviyog@ualberta.ca
            </a>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a href="mailto:basviyog@ualberta.ca">
                <Button className="rounded-full bg-firefly text-rain-deep hover:bg-firefly-soft">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/basvichunara/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10 hover:text-foreground">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href="https://github.com/basvi-chunara" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10 hover:text-foreground">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="rounded-full bg-transparent border-foreground/25 text-foreground hover:bg-foreground/10 hover:text-foreground">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </Button>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-foreground/55">
          © {new Date().getFullYear()} Basvi Chunara
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
