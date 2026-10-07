import { useState } from "react";
import { Home, User, GraduationCap, FolderGit2, Briefcase, Wrench, Heart, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props { active: string; }

const ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "skills", label: "Tools", Icon: Wrench },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "interests", label: "Interests", Icon: Heart },
  { id: "contact", label: "Contact", Icon: Mail },
];

const SideNav = ({ active }: Props) => {
  const [open, setOpen] = useState(false);
  return (
  <>
  <Button
    variant="ghost"
    size="icon"
    className="fixed left-3 top-5 z-50 md:hidden glass rounded-xl text-foreground hover:bg-foreground/10 hover:text-foreground"
    aria-label={open ? "Close navigation" : "Open navigation"}
    aria-expanded={open}
    aria-controls="section-navigation"
    onClick={() => setOpen((value) => !value)}
  >
    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
  </Button>
  <nav
    id="section-navigation"
    aria-label="Section navigation"
    className={`fixed left-3 md:left-5 top-1/2 -translate-y-1/2 z-40 ${open ? "block" : "hidden md:block"}`}
  >
    <ul className="glass rounded-2xl p-1.5 flex flex-col gap-1 shadow-card">
      {ITEMS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setOpen(false)}
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
  </>
  );
};

export default SideNav;
