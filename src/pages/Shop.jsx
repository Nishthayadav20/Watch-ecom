import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { watches } from "../data/watches";
import ProductGrid from "../components/shop/ProductGrid";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [collection, setCollection] = useState("All");
  const [sort, setSort] = useState("Newest");

  const collections = [
    "All",
    "Heritage",
    "Luxury",
    "Premium",
    "Signature",
  ];

  const filteredProducts = useMemo(() => {
    let data = [...watches];

    // Gender
    if (gender !== "All") {
      data = data.filter((item) => item.gender === gender);
    }

    // Collection
    if (collection !== "All") {
      data = data.filter((item) => item.collection === collection);
    }

    // Search
    if (search.trim()) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    switch (sort) {
      case "Low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "High":
        data.sort((a, b) => b.price - a.price);
        break;

      case "Rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return data;
  }, [search, gender, collection, sort]);

  return (
    <section className="min-h-screen bg-[#050505] pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Search */}

        <div className="mx-auto max-w-3xl">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search luxury watches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#2d2d2d] bg-[#111] py-4 pl-14 pr-6 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C8A25A]"
            />

          </div>

        </div>

        {/* Filters */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">

          <div className="flex flex-wrap items-center gap-3">

            {/* All */}

            <button
              onClick={() => {
                setGender("All");
                setCollection("All");
              }}
              className={`rounded-full px-5 py-2 text-sm transition ${
                gender === "All" && collection === "All"
                  ? "bg-[#C8A25A] text-black"
                  : "border border-[#333] hover:border-[#C8A25A]"
              }`}
            >
              All
            </button>

            {/* Men */}

            <button
              onClick={() => {
                setGender("Men");
                setCollection("All");
              }}
              className={`rounded-full px-5 py-2 text-sm transition ${
                gender === "Men"
                  ? "bg-[#C8A25A] text-black"
                  : "border border-[#333] hover:border-[#C8A25A]"
              }`}
            >
              Men
            </button>

            {/* Women */}

            <button
              onClick={() => {
                setGender("Women");
                setCollection("All");
              }}
              className={`rounded-full px-5 py-2 text-sm transition ${
                gender === "Women"
                  ? "bg-[#C8A25A] text-black"
                  : "border border-[#333] hover:border-[#C8A25A]"
              }`}
            >
              Women
            </button>

            {/* Collections */}

            {collections
              .filter((item) => item !== "All")
              .map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCollection(item);
                    setGender("All");
                  }}
                  className={`rounded-full px-5 py-2 text-sm transition ${
                    collection === item
                      ? "bg-[#C8A25A] text-black"
                      : "border border-[#333] hover:border-[#C8A25A]"
                  }`}
                >
                  {item}
                </button>
              ))}

          </div>

          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-[#333] bg-[#111] px-5 py-2 text-white outline-none transition hover:border-[#C8A25A]"
          >
            <option value="Newest">Newest</option>
            <option value="Low">Price: Low to High</option>
            <option value="High">Price: High to Low</option>
            <option value="Rating">Highest Rated</option>
          </select>

        </div>

        {/* Product Count */}

        <div className="mt-8 flex justify-end">

          <p className="text-gray-400">
            {filteredProducts.length} Products
          </p>

        </div>

        {/* Products */}

        <ProductGrid products={filteredProducts} />

      </div>
    </section>
  );
};

export default Shop;