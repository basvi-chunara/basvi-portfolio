import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Sparkles, GraduationCap, Briefcase, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import skyBg from "@/assets/ghibli-sky.jpg";
import meadowBg from "@/assets/ghibli-meadow.jpg";
import avatarImg from "@/assets/avatar.png";
import lotusImg from "@/assets/lotus.png";
import LotusDivider from "./LotusDivider";
import SectionTitle from "./SectionTitle";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "Business Insights with Tableau",
    blurb: "Turned raw telemetry from 4 global factories into a story — surfacing Seiko as the highest-failure site and mapping pay-equality patterns through interactive dashboards.",
    stack: ["Tableau", "JSON", "Data Cleaning", "Storytelling"],
    tags: ["Data Analysis"],
    github: "https://github.com/basvi-chunara",
    demo: null,
  },
  {
    title: "SQL Layoffs Data Cleaning",
    blurb: "Rebuilt a messy tech-layoffs dataset in MySQL — handling nulls, duplicates and inconsistent formats — to make it analysis-ready for downstream modeling.",
    stack: ["MySQL", "SQL", "ETL"],
    tags: ["Data Engineering"],
    github: "https://github.com/basvi-chunara",
    demo: null,
  },
  {
    title: "Full-Stack Web Application",
    blurb: "Built a HTTP/JSON web app with PostgreSQL persistence, REST endpoints validated through Postman, and a Heroku deployment — a small studio for client–server thinking.",
    stack: ["JavaScript", "PostgreSQL", "REST", "Heroku"],
    tags: ["Full Stack"],
    github: "https://github.com/basvi-chunara",
    demo: null,
  },
  {
    title: "Android Event Management App",
    blurb: "Shipped poster-update, waiting-list and a Maps view that plots entrants in real time — backed by Firestore and shaped through agile, review-driven development.",
    stack: ["Java", "Android", "Firestore", "Google Maps API"],
    tags: ["Mobile", "Full Stack"],
    github: "https://github.com/basvi-chunara",
    demo: null,
  },
];

const EXPERIENCE = [
  {
    role: "Coding Instructor",
    org: "Code Ninjas",
    period: "Oct 2025 — Present",
    points: [
      "Teach JavaScript through games and project-based challenges.",
      "Mentor young learners in algorithmic thinking and debugging.",
    ],
  },
  {
    role: "Data & Metrics Lead Volunteer",
    org: "Orfe EcoArt Program",
    period: "Aug 2025 — Present",
    points: [
      "Automated KPI dashboards in MySQL, Power BI, Sheets and Python.",
      "Ran hypothesis tests and regressions on participation data to guide outreach.",
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
    org: "NAT (Network for Applied Technology)",
    period: "Oct 2024 — Mar 2026",
    points: [
      "Resolved quality issues and supported continuous improvement workflows.",
      "Worked alongside hardware teams on troubleshooting and coordination.",
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
  { group: "Programming", items: ["Python", "SQL", "Java", "C", "Data Cleaning", "Regression"] },
  { group: "ML & Modeling", items: ["Supervised Learning", "Reinforcement Learning", "Feature Engineering", "Model Evaluation", "Hypothesis Testing"] },
  { group: "Data & Tools", items: ["Pandas", "NumPy", "MySQL", "PostgreSQL", "SQLite", "Firebase", "Tableau", "Power BI", "Jupyter"] },
  { group: "Concepts", items: ["Spatiotemporal Data", "Data Pipelines", "High-Dimensional Data", "Statistical Analysis"] },
];

const COURSES = ["Machine Learning", "Reinforcement Learning", "Applied Statistics", "Digital Image Processing", "Database Management"];

const Portfolio = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
          if (e.isIntersecting) e.target.classList.add("animate-fade-up");
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
        <nav className="glass-card mx-auto max-w-5xl rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between shadow-soft">
          <a href="#home" className="flex items-center gap-2">
            <img src={lotusImg} alt="" width={28} height={28} className="w-7 h-7" />
            <span className="font-display text-lg text-sage-deep">Basvi</span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`px-3 py-1.5 rounded-full transition-soft ${
                    active === n.id
                      ? "bg-lotus/40 text-lotus-deep"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:basviyog@ualberta.ca"
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full bg-sage-deep text-primary-foreground hover:bg-sage transition-soft"
          >
            <Mail className="w-4 h-4" /> Say hello
          </a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${skyBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-veil" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-poetic text-3xl text-lotus-deep mb-4 animate-fade-up">hello, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground/90 mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Basvi <span className="text-sage-deep italic">Chunara</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Data Science Student · Building quiet insights from noisy data.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a href="#projects">
              <Button size="lg" className="rounded-full bg-sage-deep hover:bg-sage text-primary-foreground shadow-soft">
                See my work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full border-lotus/60 hover:bg-lotus/20 text-foreground">
                Get in touch
              </Button>
            </a>
          </div>
          <div className="mt-16 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Currently exploring · Reinforcement Learning & AI for real-world impact</span>
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ABOUT */}
        <section id="about" className="py-20 scroll-mt-24">
          <SectionTitle eyebrow="my little story" title="About me" />
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-lotus rounded-full blur-2xl opacity-50 scale-95" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-sage shadow-float animate-drift">
                <img src={avatarImg} alt="Illustrated portrait of Basvi" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="glass-card rounded-3xl p-7 md:p-9 shadow-soft">
              <p className="text-foreground/85 leading-relaxed">
                I'm a fourth-year <span className="font-medium text-sage-deep">Computing Science</span> student at the University of Alberta, drawn to the moment data starts to <em>say something</em>. My world sits at the intersection of <span className="font-medium text-lotus-deep">machine learning</span>, statistics and the small human stories hiding inside large datasets.
              </p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                I love spatiotemporal patterns, reinforcement learning, and building tools that make complex data feel calm. When I'm not in a notebook, I'm dancing Bharatanatyam or teaching kids to fall in love with their first line of code.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {["ML for Scientific Modeling", "Spatiotemporal Data", "RL", "Data Storytelling"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-sky/40 text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Edmonton, AB</span>
                <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> BSc Computing Science · 2027</span>
              </div>
            </div>
          </div>
        </section>

        <LotusDivider />

        {/* EDUCATION */}
        <section id="education" className="py-12 scroll-mt-24">
          <SectionTitle eyebrow="where I learn" title="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-7 shadow-soft hover:shadow-float hover:-translate-y-1 transition-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-display text-foreground">University of Alberta</h3>
                  <p className="text-sage-deep">BSc, Computing Science</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-lotus/30 text-lotus-deep whitespace-nowrap">Sep 2023 — Jun 2027</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Edmonton, AB · 4th year</p>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Relevant coursework</p>
                <div className="flex flex-wrap gap-2">
                  {COURSES.map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/80 border border-border">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-7 shadow-soft hover:shadow-float hover:-translate-y-1 transition-soft">
              <h3 className="text-xl font-display text-foreground">Awards & Interests</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex gap-3"><span className="text-gold mt-0.5">✦</span><span><span className="font-medium">UAlberta Regional Excellence & International Admission Scholarship</span></span></li>
                <li className="flex gap-3"><span className="text-lotus-deep mt-0.5">✿</span><span>Research interests: Spatiotemporal Data Analysis, ML for Scientific Modeling, Reinforcement Learning</span></li>
                <li className="flex gap-3"><span className="text-sage mt-0.5">❀</span><span>Certifications: Deloitte Data Analytics · RL Function Approximation · Tata Data Visualization</span></li>
              </ul>
            </div>
          </div>
        </section>

        <LotusDivider />

        {/* PROJECTS */}
        <section id="projects" className="py-12 scroll-mt-24">
          <SectionTitle eyebrow="things I've made" title="Selected Projects" subtitle="Small studios where I practiced turning data into decisions." />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group relative glass-card rounded-3xl p-7 shadow-soft hover:shadow-float hover:-translate-y-1.5 transition-soft overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-lotus opacity-20 blur-2xl group-hover:opacity-40 transition-soft" />
                <div className="relative">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-sage/30 text-sage-deep border border-sage/30">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{s}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="rounded-full border-border hover:bg-muted">
                        <Github className="w-3.5 h-3.5 mr-1.5" /> GitHub
                      </Button>
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <Button size="sm" className="rounded-full bg-lotus-deep hover:bg-lotus text-primary-foreground">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <LotusDivider />

        {/* EXPERIENCE */}
        <section id="experience" className="py-12 scroll-mt-24">
          <SectionTitle eyebrow="the path so far" title="Experience" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="space-y-8">
              {EXPERIENCE.map((e, i) => (
                <div key={e.role + e.org} className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-lotus border-2 border-background shadow-petal`} />
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass-card inline-block rounded-2xl p-5 shadow-soft text-left max-w-md hover:shadow-float transition-soft">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> <span>{e.period}</span>
                      </div>
                      <h3 className="font-display text-lg text-foreground">{e.role}</h3>
                      <p className="text-sage-deep text-sm mb-3">{e.org}</p>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        {e.points.map((pt) => (
                          <li key={pt} className="flex gap-2"><span className="text-lotus mt-1.5">·</span><span>{pt}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <LotusDivider />

        {/* SKILLS */}
        <section id="skills" className="py-12 scroll-mt-24">
          <SectionTitle eyebrow="my toolkit" title="Skills" />
          <div className="grid md:grid-cols-2 gap-5">
            {SKILLS.map((s) => (
              <div key={s.group} className="glass-card rounded-3xl p-6 shadow-soft hover:shadow-float transition-soft">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-sage-deep" />
                  <h3 className="font-display text-lg text-foreground">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="px-3 py-1.5 text-sm rounded-full bg-gradient-sage text-foreground/85 border border-border/60 hover:scale-105 transition-soft">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <LotusDivider />

        {/* PERSONAL */}
        <section id="personal" className="py-12 scroll-mt-24">
          <SectionTitle eyebrow="beyond the keyboard" title="Quiet things I love" />
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${meadowBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/85" />
            <div className="relative grid md:grid-cols-3 gap-5 p-8">
              {[
                { icon: "💃", title: "Bharatanatyam", text: "A lifelong rhythm — classical Indian dance keeps me rooted and patient." },
                { icon: "✏️", title: "Teaching & Mentoring", text: "I love watching kids realise they can build things with code." },
                { icon: "🌿", title: "Quiet Creation", text: "Sketching ideas, reading research, and small Ghibli-soft details." },
              ].map((c) => (
                <div key={c.title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-soft">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-display text-lg text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LotusDivider />

        {/* CONTACT */}
        <section id="contact" className="py-16 scroll-mt-24">
          <SectionTitle eyebrow="say hello" title="Let's build something gentle" subtitle="Open to data science / ML internships, research collaborations, and good conversations." />
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-soft text-center max-w-2xl mx-auto">
            <a href="mailto:basviyog@ualberta.ca" className="inline-block text-2xl md:text-3xl font-display text-sage-deep hover:text-lotus-deep transition-soft">
              basviyog@ualberta.ca
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:basviyog@ualberta.ca">
                <Button className="rounded-full bg-sage-deep hover:bg-sage text-primary-foreground"><Mail className="w-4 h-4 mr-2" /> Email</Button>
              </a>
              <a href="https://www.linkedin.com/in/basvichunara/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full border-border hover:bg-muted"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</Button>
              </a>
              <a href="https://github.com/basvi-chunara" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full border-border hover:bg-muted"><Github className="w-4 h-4 mr-2" /> GitHub</Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="rounded-full border-lotus/60 hover:bg-lotus/20"><Download className="w-4 h-4 mr-2" /> Resume</Button>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
          <Heart className="w-3 h-3 text-lotus" /> Painted softly by Basvi · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
