import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ watch }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-[#232323] bg-[#0d0d0d] transition-all duration-500 hover:border-[#C8A25A] hover:shadow-[0_25px_70px_rgba(200,162,90,0.22)]"
    >
      {/* Badge */}
      <div className="absolute left-5 top-5 z-20 rounded-full bg-[#C8A25A] px-3 py-1 text-[11px] font-bold tracking-wider text-black">
        {watch.badge}
      </div>

      {/* Image */}
      <div className="relative h-[360px] overflow-hidden bg-[#161616]">
        <img
          src={watch.image}
          alt={watch.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A25A]">
            {watch.collection}
          </p>

          <span className="rounded-full border border-[#333] px-3 py-1 text-xs text-gray-300">
            {watch.gender}
          </span>
        </div>

        <h2 className="mt-4 font-serif text-2xl text-white transition duration-300 group-hover:text-[#C8A25A]">
          {watch.name}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <Star
            size={16}
            fill="#C8A25A"
            color="#C8A25A"
          />

          <span className="text-sm text-gray-300">
            {watch.rating}
          </span>

          <span className="text-gray-600">•</span>

          <span className="text-sm text-gray-400">
            {watch.movement}
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <h3 className="text-3xl font-light text-white">
            ₹{watch.price.toLocaleString()}
          </h3>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex gap-3">
          <Link
            to={`/product/${watch.id}`}
            className="flex-1 rounded-full border border-[#C8A25A] py-3 text-center font-medium transition-all duration-300 hover:bg-[#C8A25A] hover:text-black"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(watch)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A25A] text-black transition-all duration-300 hover:scale-110"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;