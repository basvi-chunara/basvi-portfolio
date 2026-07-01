import { Home, User, GraduationCap, FolderGit2, Briefcase, Wrench, Heart, Mail } from "lucide-react";

interface Props { active: string; }

const ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Tools", Icon: Wrench },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "interests", label: "Interests", Icon: Heart },
  { id: "contact", label: "Contact", Icon: Mail },
];

const SideNav = ({ active }: Props) => (
  <nav
    aria-label="Section navigation"
    className="fixed left-3 md:left-5 top-1/2 -translate-y-1/2 z-40"
  >
    <ul className="glass rounded-2xl p-1.5 flex flex-col gap-1 shadow-card">
      {ITEMS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-soft ${
                isActive
                  ? "bg-firefly text-rain-deep shadow-soft"
                  : "text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
              }`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon className="w-4 h-4" />
              <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-md text-xs whitespace-nowrap bg-rain-deep text-foreground border border-foreground/15 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-soft">
                {label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default SideNav;
