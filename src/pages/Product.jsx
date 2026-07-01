import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";

import { watches } from "../data/watches";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = useMemo(
    () => watches.find((item) => item.id === Number(id)),
    [id]
  );

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <section className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-white">
            Product Not Found
          </h1>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-[#C8A25A] px-8 py-4 font-semibold text-black"
          >
            Back To Shop
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = watches.filter(
    (item) =>
      item.collection === product.collection &&
      item.id !== product.id
  );

  return (
    <section className="min-h-screen bg-[#050505] pt-40 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Back */}

        <Link
          to="/shop"
          className="mb-10 inline-flex items-center gap-2 text-[#C8A25A] hover:opacity-80"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </Link>

        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-3xl border border-[#222] bg-[#111]"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </motion.div>

          {/* DETAILS */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <p className="uppercase tracking-[0.35em] text-[#C8A25A] text-sm">
              {product.collection}
            </p>

            <h1 className="mt-4 font-serif text-5xl lg:text-6xl leading-tight text-white">
              {product.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-8">

              <div className="flex items-center gap-2">

                <Star
                  size={20}
                  fill="#C8A25A"
                  color="#C8A25A"
                />

                <span className="text-lg text-white">
                  {product.rating}
                </span>

              </div>

              <span className="text-gray-400">
                {product.gender}
              </span>

              <span className="text-gray-400">
                {product.movement}
              </span>

            </div>

            <h2 className="mt-8 text-5xl font-light text-white">
              ₹{product.price.toLocaleString()}
            </h2>

            <div className="mt-8 flex items-center gap-5">

              <div className="rounded-full bg-[#111] px-5 py-3">

                <span className="text-2xl text-[#C8A25A]">
                  ★★★★★
                </span>

              </div>

              <div>

                <p className="font-semibold text-white">
                  4.9 / 5
                </p>

                <p className="text-gray-400">
                  Based on 1,284 Reviews
                </p>

              </div>

            </div>

            <p className="mt-10 leading-8 text-gray-400">
              {product.description}
            </p>

            {/* Quantity */}

            <div className="mt-10">

              <p className="mb-4 text-lg text-white">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-full border border-[#333] bg-[#111]">

                <button
                  onClick={() =>
                    setQty((prev) => Math.max(1, prev - 1))
                  }
                  className="px-6 py-3 text-2xl hover:text-[#C8A25A]"
                >
                  −
                </button>

                <span className="px-8 text-lg">
                  {qty}
                </span>

                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="px-6 py-3 text-2xl hover:text-[#C8A25A]"
                >
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                onClick={() => addToCart(product, qty)}
                className="flex items-center gap-3 rounded-full bg-[#C8A25A] px-10 py-4 text-lg font-semibold text-black transition hover:scale-105"
              >
                <ShoppingBag size={20} />
                Add To Cart
              </button>

              <button className="rounded-full border border-[#C8A25A] px-10 py-4 transition hover:bg-[#C8A25A] hover:text-black">
                Buy Now
              </button>

              <button className="rounded-full border border-[#333] p-4 hover:border-[#C8A25A]">
                <Heart size={20} />
              </button>

            </div>

            {/* Features */}

            <div className="mt-14 grid gap-5">

              <div className="flex items-center gap-4 rounded-2xl border border-[#222] bg-[#111] p-5">

                <Truck className="text-[#C8A25A]" />

                <div>

                  <h3 className="font-semibold">
                    Free Shipping
                  </h3>

                  <p className="text-sm text-gray-400">
                    Complimentary delivery across India.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#222] bg-[#111] p-5">

                <ShieldCheck className="text-[#C8A25A]" />

                <div>

                  <h3 className="font-semibold">
                    5 Year Warranty
                  </h3>

                  <p className="text-sm text-gray-400">
                    International warranty on every Zenith watch.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
                {/* Specifications */}

        <div className="mt-32">

          <h2 className="mb-10 text-center font-serif text-5xl text-white">
            Specifications
          </h2>

          <div className="overflow-hidden rounded-3xl border border-[#222] bg-[#111]">

            <div className="grid grid-cols-2 border-b border-[#222] p-6">
              <span className="text-gray-400">Collection</span>
              <span>{product.collection}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-[#222] p-6">
              <span className="text-gray-400">Movement</span>
              <span>{product.movement}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-[#222] p-6">
              <span className="text-gray-400">Gender</span>
              <span>{product.gender}</span>
            </div>

            <div className="grid grid-cols-2 border-b border-[#222] p-6">
              <span className="text-gray-400">Warranty</span>
              <span>5 Years International Warranty</span>
            </div>

            <div className="grid grid-cols-2 border-b border-[#222] p-6">
              <span className="text-gray-400">Water Resistance</span>
              <span>100 Meters</span>
            </div>

            <div className="grid grid-cols-2 p-6">
              <span className="text-gray-400">Case Material</span>
              <span>Stainless Steel</span>
            </div>

          </div>

        </div>

        {/* Customer Reviews */}

        <div className="mt-32">

          <h2 className="mb-12 text-center font-serif text-5xl text-white">
            Customer Reviews
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

            {[
              {
                name: "Rahul Sharma",
                rating: "★★★★★",
                review:
                  "Outstanding craftsmanship. The finishing, dial quality and comfort are exceptional.",
              },
              {
                name: "Emily Johnson",
                rating: "★★★★★",
                review:
                  "Absolutely beautiful. The premium packaging and luxurious design exceeded my expectations.",
              },
              {
                name: "Arjun Kapoor",
                rating: "★★★★☆",
                review:
                  "Excellent quality and smooth movement. Looks elegant with both formal and casual outfits.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-[#222] bg-[#111] p-8"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <span className="text-[#C8A25A] text-xl">
                    {item.rating}
                  </span>

                </div>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.review}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Leave Review */}

        <div className="mt-32">

          <h2 className="mb-10 text-center font-serif text-5xl text-white">
            Write a Review
          </h2>

          <div className="mx-auto max-w-3xl rounded-3xl border border-[#222] bg-[#111] p-10">

            <input
              type="text"
              placeholder="Your Name"
              className="mb-6 w-full rounded-xl border border-[#333] bg-[#050505] p-4 outline-none focus:border-[#C8A25A]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="mb-6 w-full rounded-xl border border-[#333] bg-[#050505] p-4 outline-none focus:border-[#C8A25A]"
            />

            <textarea
              rows={6}
              placeholder="Write your review..."
              className="w-full rounded-xl border border-[#333] bg-[#050505] p-4 outline-none focus:border-[#C8A25A]"
            />

            <button
              className="mt-8 rounded-full bg-[#C8A25A] px-10 py-4 font-semibold text-black transition hover:scale-105"
            >
              Submit Review
            </button>

          </div>

        </div>

        {/* Related Products */}

        {relatedProducts.length > 0 && (

          <div className="mt-36">

            <h2 className="mb-14 text-center font-serif text-5xl text-white">
              You May Also Like
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {relatedProducts.map((watch) => (

                <Link
                  key={watch.id}
                  to={`/product/${watch.id}`}
                  className="group overflow-hidden rounded-3xl border border-[#222] bg-[#111] transition-all duration-300 hover:border-[#C8A25A]"
                >

                  <div className="overflow-hidden">

                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#C8A25A]">
                      {watch.collection}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl text-white">
                      {watch.name}
                    </h3>

                    <p className="mt-4 text-2xl text-white">
                      ₹{watch.price.toLocaleString()}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Product;