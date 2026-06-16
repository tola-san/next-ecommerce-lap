export default function Categories() {
  const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories",
    "Streetwear",
    "Luxury",
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}