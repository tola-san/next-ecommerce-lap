import Link from "next/link";
import { getCategories } from "@/services/categoryApi";

/* FETCH CATEGORIES */
// async function getCategories() {

//   const res = await fetch(
//     "https://dummyjson.com/products/categories",
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   return res.json();
// }

export default async function CategoriesPage() {

  const categories = await getCategories();

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

          {categories.map((category, index) => (

            <Link
              key={index}
              href={`/categories/${category.slug}`} // Assuming category has a slug property
              className="group relative bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >

              {/* Background Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-100 rounded-full opacity-40 group-hover:scale-125 transition duration-500" />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-8 shadow-lg">

                  🛍️

                </div>

                {/* Category Name */}
                <h2 className="text-2xl font-semibold capitalize text-zinc-900 group-hover:text-violet-600 transition">

                  {category.name}

                </h2>

                {/* Description */}
                <p className="text-zinc-500 leading-7 mt-4">

                  Discover premium {category.name} products
                  with modern designs and high quality.

                </p>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-3 text-black font-medium group-hover:gap-5 transition-all">

                  Explore Category

                  <span>
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}