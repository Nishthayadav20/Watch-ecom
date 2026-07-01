import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      
      <h1 className="text-3xl font-bold text-center mb-12">
        Our Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                {product.description}
              </p>

              <p className="mt-2 font-bold">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-white text-black py-2 rounded hover:bg-gray-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Shop;