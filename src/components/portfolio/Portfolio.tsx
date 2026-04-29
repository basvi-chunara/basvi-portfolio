import { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, ExternalLink, Download, MapPin,
  GraduationCap, Briefcase, BookOpen, Mountain, Users, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import sunsetBg from "@/assets/sunset-meadow.jpg";
import SideNav from "./SideNav";
import SectionTitle from "./SectionTitle";
import Rain from "./Rain";

const PROJECTS = [
  {
    title: "Business Insights with Tableau",
    problem: "Four global factories, scattered telemetry, no clear answer to 'where are we losing the most?'",
    work: "Cleaned and joined production data, then built interactive dashboards comparing sites and pay equity.",
    impact: "Identified Seiko as the highest-failure site and surfaced pay-gap patterns leadership could act on.",
    stack: ["Tableau", "JSON", "Data Cleaning"],
  },
  {
    title: "SQL Layoffs Data Cleaning",
    problem: "A messy public layoffs dataset that wasn't usable for analysis as-is.",
    work: "Wrote MySQL pipelines to deduplicate, normalize formats and fix nulls across thousands of rows.",
    impact: "Produced an analysis-ready dataset and reusable SQL patterns for future cleaning work.",
    stack: ["MySQL", "SQL", "ETL"],
  },
  {
    title: "Full-Stack Web Application",
    problem: "Needed to practice end-to-end client–server thinking with real persistence.",
    work: "Built REST endpoints over PostgreSQL, validated with Postman, deployed on Heroku.",
    impact: "Working HTTP/JSON app — solid base for future data-driven web tools.",
    stack: ["JavaScript", "PostgreSQL", "REST", "Heroku"],
  },
  {
    title: "Android Event Management App",
    problem: "Event organizers needed a simple way to manage entrants, posters and waiting lists.",
    work: "Shipped poster updates, waiting-list flows and a Maps view plotting entrants in real time, backed by Firestore.",
    impact: "A complete agile-built Android app used through review-driven sprints.",
    stack: ["Java", "Android", "Firestore", "Google Maps API"],
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
  { group: "Programming", items: ["Python", "Java", "C", "R"] },
  { group: "Data Tools", items: ["MySQL", "PostgreSQL", "SQL", "MongoDB", "Power BI", "Tableau", "Excel", "Google Analytics", "Jupyter", "SQLite"] },
  { group: "Technologies", items: ["Git", "GitHub", "HTML", "HTTP", "APIs", "JSON", "Figma"] },
];

const COURSES = [
  "Machine Learning", "Applied Statistics", "Database Management",
  "Digital Image Processing", "Reinforcement Learning",
];

const SECTIONS = ["home", "about", "education", "projects", "experience", "skills", "interests", "contact"];

const Portfolio = () => {
  const [active, setActive] = useState("home");
  const [secret, setSecret] = useState(false);
  const [scroll, setScroll] = useState(0);

  // Track scroll for warm tint progression
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
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

  // Rain fades out as we scroll past 60%
  const rainOpacity = Math.max(0, 1 - scroll * 1.6);
  // Warm wash fades in toward end
  const warm = Math.min(1, Math.max(0, (scroll - 0.55) / 0.35));

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SideNav active={active} />

      {/* Global ambient layers */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-soft"
        style={{
          background: `linear-gradient(180deg, hsl(var(--sunset-soft) / ${warm * 0.55}), hsl(var(--sunset) / ${warm * 0.35}))`,
          opacity: warm,
        }}
        aria-hidden
      />
      {rainOpacity > 0.05 && <Rain count={70} intensity={rainOpacity * 0.55} />}

      {/* HOME */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Cool rain gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_25%_88%)] via-[hsl(200_20%_92%)] to-[hsl(38_30%_94%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,hsl(205_40%_70%/0.4),transparent_60%)]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pl-20 md:pl-24">
          <p className="text-[11px] uppercase tracking-[0.32em] text-rain mb-5 animate-fade-up">
            Hello, I'm
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-foreground leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Basvi Chunara
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-foreground/75 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Data Enthusiast <span className="text-rain/60 mx-2">·</span> CS Student
          </p>
          <p
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            I work with data to find patterns that help people make better decisions —
            quietly, carefully, and end to end.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="#projects">
              <Button className="rounded-full bg-rain-deep hover:bg-rain text-primary-foreground">
                See projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="rounded-full border-rain/40 hover:bg-muted">
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
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Edmonton, AB</span>
                <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> BSc Computing Science · 2027</span>
              </div>
            </div>
            <div className="glass rounded-2xl p-7 shadow-card">
              <p className="text-[11px] uppercase tracking-[0.28em] text-rain mb-3">What I focus on</p>
              <ul className="space-y-2.5 text-sm text-foreground/85">
                <li className="flex gap-2"><span className="text-rain mt-1.5">▸</span> Data analysis & cleaning</li>
                <li className="flex gap-2"><span className="text-rain mt-1.5">▸</span> Dashboards & reporting</li>
                <li className="flex gap-2"><span className="text-rain mt-1.5">▸</span> SQL & data pipelines</li>
                <li className="flex gap-2"><span className="text-rain mt-1.5">▸</span> Real-world problem solving</li>
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
                <h3 className="font-display text-xl text-foreground">University of Alberta</h3>
                <p className="text-rain text-sm mt-0.5">BSc, Computing Science · Edmonton, AB</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-muted text-foreground/70 whitespace-nowrap">
                Sep 2023 — Jun 2027
              </span>
            </div>
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-rain mb-3">Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground/80 border border-border">{c}</span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-border/70 text-sm text-muted-foreground">
              <span className="text-foreground/80">Awards:</span> UAlberta Regional Excellence & International Admission Scholarship
              <span className="mx-3 text-border">·</span>
              <span className="text-foreground/80">Certifications:</span> Deloitte Data Analytics, Tata Data Visualization, RL with Function Approximation
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Projects" title="Things I've built." subtitle="Each one started with a real question and ended with something usable." />
          <div className="grid md:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <article key={p.title} className="glass rounded-2xl p-6 shadow-card hover:-translate-y-0.5 hover:shadow-soft transition-soft">
                <h3 className="font-display text-lg text-foreground mb-3">{p.title}</h3>
                <dl className="space-y-2.5 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-rain mb-0.5">Problem</dt>
                    <dd className="text-foreground/80">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-rain mb-0.5">What I did</dt>
                    <dd className="text-foreground/80">{p.work}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-rain mb-0.5">Impact</dt>
                    <dd className="text-foreground/80">{p.impact}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/70">{s}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href="https://github.com/basvi-chunara" target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="rounded-full border-border hover:bg-muted">
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />
            <ol className="space-y-10">
              {EXPERIENCE.map((e, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={e.role + e.org} className="relative md:grid md:grid-cols-2 md:gap-10">
                    <span
                      className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 w-3 h-3 rounded-full bg-rain border-2 border-background shadow-soft"
                      aria-hidden
                    />
                    <div className={`pl-12 md:pl-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                      <div className={`glass rounded-2xl p-5 shadow-card text-left inline-block max-w-md ${right ? "" : "md:ml-auto"}`}>
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-rain mb-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> <span>{e.period}</span>
                        </div>
                        <h3 className="font-display text-lg text-foreground">{e.role}</h3>
                        <p className="text-sm text-foreground/70 mb-3">{e.org}</p>
                        <ul className="space-y-1.5 text-sm text-foreground/80">
                          {e.points.map((pt) => (
                            <li key={pt} className="flex gap-2"><span className="text-rain mt-1.5">·</span><span>{pt}</span></li>
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
                    <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground/80 border border-border/70">{it}</span>
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
              <div key={label} className="glass rounded-2xl p-7 shadow-card flex flex-col items-center text-center hover:-translate-y-0.5 transition-soft">
                <Icon className="w-7 h-7 text-rain mb-3" />
                <p className="font-display text-base text-foreground">{label}</p>
              </div>
            ))}
          </div>

          {/* Hidden lamp easter egg */}
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <button
              onClick={() => setSecret((s) => !s)}
              aria-label="A small secret"
              className="group relative w-10 h-10 rounded-full glass shadow-card flex items-center justify-center hover:scale-105 transition-soft"
            >
              <Sparkles className={`w-4 h-4 transition-soft ${secret ? "text-lamp" : "text-rain/70 group-hover:text-lamp"}`} />
              {!secret && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lamp animate-lamp" />
              )}
            </button>
            <span
              className={`transition-soft ${secret ? "opacity-100 translate-x-0 text-foreground/85" : "opacity-0 -translate-x-1 pointer-events-none"}`}
            >
              And quietly — a trained Bharatanatyam dancer.
            </span>
          </div>
        </section>

        {/* SUNSET TRANSITION */}
        <section className="py-20">
          <div className="relative rounded-3xl overflow-hidden shadow-card h-[260px] md:h-[340px]">
            <img
              src={sunsetBg}
              alt="A calm Ghibli-style sunset over rolling hills"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <p className="font-display text-2xl md:text-3xl text-rain-deep max-w-md leading-snug">
                The rain quiets. The sky clears. Something useful gets made.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 scroll-mt-20">
          <SectionTitle eyebrow="Contact" title="Let's talk." subtitle="Open to data analyst / data science internships, research collaborations, and good problems." />
          <div className="glass rounded-2xl p-7 md:p-9 shadow-card">
            <a
              href="mailto:basviyog@ualberta.ca"
              className="font-display text-2xl md:text-3xl text-rain-deep hover:text-accent transition-soft break-all"
            >
              basviyog@ualberta.ca
            </a>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a href="mailto:basviyog@ualberta.ca">
                <Button className="rounded-full bg-rain-deep hover:bg-rain text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/basvichunara/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full border-border hover:bg-muted">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href="https://github.com/basvi-chunara" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full border-border hover:bg-muted">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="rounded-full border-border hover:bg-muted">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </Button>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Basvi Chunara · Made with care.
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
