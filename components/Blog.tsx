import Image from "next/image";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    label: "[ SEO & AI Strategy ]",
    catColor: "text-[var(--main-accent)]",
    category: "Search Engine Optimization",
    title: "How Generative AI Is Reshaping SEO in 2026",
    excerpt: "Practical strategies to optimize content for AI Overviews and rank #1 in the new search landscape.",
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-uj0gfqcewkfd?w=600&q=80",
    label: "[ Performance Marketing ]",
    catColor: "text-[var(--purple-accent)]",
    category: "Paid Ads & CRO",
    title: "Cut Your Google Ads CPA by 40% With These Proven Hacks",
    excerpt: "A complete technical guide to lowering cost-per-acquisition while scaling ad spend profitably.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    label: "[ Web Development ]",
    catColor: "text-[var(--green-accent)]",
    category: "Tech & Development",
    title: "Building Lightning-Fast Websites That Actually Convert",
    excerpt: "Core Web Vitals, progressive enhancement, and UX patterns that turn visitors into paying customers.",
  },
];

export default function Blog() {
  return (
    <section className="py-[100px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Insights
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Tech Insights &amp; <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Our latest perspectives on digital marketing, SEO, and growth engineering.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {blogs.map((b, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(var(--accent-rgb),0.1)]"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 px-3 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-2xl text-[0.75rem] font-semibold text-[var(--main-accent)]">
                  {b.label}
                </div>
              </div>
              <div className="p-6">
                <div className={`text-[0.7rem] uppercase tracking-[1.5px] font-bold mb-2 ${b.catColor} transition-all duration-300`}>
                  {b.category}
                </div>
                <h3 className="text-[1.15rem] font-bold mb-2.5 leading-[1.3] text-[var(--text-main)]">{b.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4">{b.excerpt}</p>
                <a href="#" className="text-[var(--main-accent)] font-bold text-[0.85rem] transition-all duration-300">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
