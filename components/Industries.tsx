import Link from "next/link";

const industries = [
  { icon: "🏗️", name: "Real Estate & Property", slug: "real-estate-and-property" },
  { icon: "🏥", name: "Healthcare & Wellness", slug: "healthcare-and-wellness" },
  { icon: "🛍️", name: "eCommerce & D2C Brands", slug: "ecommerce-and-d2c" },
  { icon: "🎓", name: "Education & EdTech", slug: "education-and-edtech" },
  { icon: "🏨", name: "Hospitality & Travel", slug: "hospitality-and-travel" },
  { icon: "💼", name: "Professional & B2B Services", slug: "professional-and-b2b-services" },
  { icon: "🛒", name: "Retail & Local Businesses", slug: "retail-and-local-businesses" },
  { icon: "💻", name: "Technology & SaaS", slug: "technology-and-saas" },
  { icon: "🏭", name: "Manufacturing & B2B Trade", slug: "manufacturing-and-b2b-trade" },
  { icon: "💳", name: "Finance & Fintech", slug: "finance-and-fintech" },
];

export default function Industries() {
  return (
    <section className="py-[100px] bg-black border-y border-white/10">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Industries We Serve
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-white max-[768px]:text-[2rem]">
            Strategy Shaped by the Business, <span className="gradient-text">Not a Generic Template</span>
          </h2>
          <p className="text-white/60 text-[1.1rem] max-w-[680px] mx-auto mb-10">
            Every industry has its own buying journey. We align marketing, technology and conversion around the way each sector actually searches and buys.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 max-[1024px]:grid-cols-3 max-[600px]:grid-cols-2">
          {industries.map((ind, i) => (
            <Link
              key={i}
              href={`/industries/${ind.slug}`}
              className="group py-7 px-4 rounded-xl bg-white/5 border border-white/10 text-center transition-all duration-300 hover:bg-white/10 hover:border-[var(--main-accent)] hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(var(--accent-rgb),0.15)]"
            >
              <span className="text-[2rem] mb-2.5 block group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </span>
              <span className="text-[0.9rem] font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                {ind.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
