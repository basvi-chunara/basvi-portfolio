import lotus from "@/assets/lotus.png";

const LotusDivider = () => (
  <div className="flex items-center justify-center gap-4 my-16" aria-hidden>
    <span className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-border" />
    <img src={lotus} alt="" width={32} height={32} className="w-8 h-8 opacity-70" loading="lazy" />
    <span className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-border" />
  </div>
);

export default LotusDivider;
