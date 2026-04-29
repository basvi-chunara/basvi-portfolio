interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}
const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center mb-12" : "mb-12"}>
    <p className="font-poetic text-2xl text-lotus-deep/80 mb-2">{eyebrow}</p>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground/90 text-balance">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-balance">{subtitle}</p>}
  </div>
);
export default SectionTitle;
