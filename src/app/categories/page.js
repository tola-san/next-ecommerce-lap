import Link from "next/link";
import { getCategories } from "@/services/categoryApi";
import { categoryConfig } from "@/lib/categoryConfig";
import { getCategoryTheme } from "@/lib/categoryTheme";
export default async function CategoriesPage() {

  const categories = await getCategories();

  

  const colors = [
  {
    bg: "bg-pink-100",
    text: "text-pink-600",
  },
  {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
];



  return (
    <section className="bg-zinc-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-violet-500 font-semibold text-sm mb-4">
            Shop Categories
          </p>

          <h1 className="text-5xl font-semibold text-zinc-900">
            Browse Categories
          </h1>

          <p className="text-zinc-500 text-lg mt-5 max-w-2xl leading-8">
            Explore our premium collections and discover
            products tailored to your lifestyle.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

         {categories.map((category, index) => {
          const theme = getCategoryTheme(category.slug); //  use first category theme as default

  const config =
    categoryConfig[category.slug] ||
    categoryConfig.default;

   const color = colors[index % colors.length];

  const Icon = config.icon;

  return (
<Link
  key={category.slug}
  href={`/categories/${category.slug}`}
  className={`
    group
    relative
    flex
    flex-col
    h-full
    rounded-xl
    bodder
    border-zinc-300
    bg-white
    p-8
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
    ${theme.glow}
  `}
>
  {/* Gradient Blur */}
  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-3xl transition-all duration-500 group-hover:scale-150" />

  <div className="relative z-10">
    {/* Top */}
    <div className="flex items-start justify-between">
      <div
        className={`
          h-16 w-16 rounded-xl
          ${color.bg}
          ${color.text}
          flex items-center justify-center
          text-3xl shadow-lg
          transition-transform duration-500
          group-hover:rotate-2 group-hover:scale-110
        `}
      >
        <Icon />
      </div>

      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
        Category
      </span>
    </div>

    <div className="flex-1">
  <h2 className="mt-8 text-2xl font-bold">
    {category.name}
  </h2>

  <p className="mt-4 text-zinc-500 leading-8">
    Explore premium {category.name} products curated for
    quality, style, and performance.
  </p>
</div>

    {/* Footer */}
    <div className="mt-8 flex items-center justify-between">
      <span className="text-sm font-medium text-zinc-500">
        Browse Collection
      </span>

     <div
  className={`
    flex h-10 w-10 items-center justify-center
    rounded-full bg-zinc-100
    transition-all duration-300
    text-zinc-600
    hover:bg-blue-500/20 hover:text-blue-600
  `}
>
  →
</div>
    </div>
  </div>
</Link>
  );
})}

        </div>

      </div>

    </section>
  );
}