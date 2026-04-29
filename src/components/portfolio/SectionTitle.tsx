interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}
const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }: Props) => (
  <div className={`${align === "center" ? "text-center" : ""} mb-10`}>
    {eyebrow && (
      <p className="text-[11px] uppercase tracking-[0.28em] text-rain mb-3">{eyebrow}</p>
    )}
    <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl text-balance">{subtitle}</p>}
  </div>
);
export default SectionTitle;
