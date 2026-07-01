import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
        <div className="text-center">

          <ShoppingBag
            size={70}
            className="mx-auto text-[#C8A25A]"
          />

          <h1 className="mt-8 text-5xl font-serif">
            Your Cart is Empty
          </h1>

          <p className="mt-5 text-gray-400">
            Discover timeless luxury and add your favourite watches.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-block rounded-full bg-[#C8A25A] px-10 py-4 font-semibold text-black transition hover:scale-105"
          >
            Continue Shopping
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] pt-36 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-14 text-center font-serif text-6xl">
          Shopping Cart
        </h1>

        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}

          <div className="space-y-8">

            {cart.map((item) => (

              <div
                key={item.id}
                className="rounded-3xl border border-[#222] bg-[#111] p-6"
              >

                <div className="flex flex-col gap-6 md:flex-row">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full rounded-2xl object-cover md:w-52"
                  />

                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
                        {item.collection}
                      </p>

                      <h2 className="mt-3 text-3xl font-serif">
                        {item.name}
                      </h2>

                      <p className="mt-4 text-gray-400">
                        {item.movement}
                      </p>

                      <p className="mt-5 text-3xl">
                        ₹{item.price.toLocaleString()}
                      </p>

                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-5">

                      <div className="flex items-center rounded-full border border-[#333]">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-5 py-3"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="px-6">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-5 py-3"
                        >
                          <Plus size={18} />
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 rounded-full border border-red-500 px-5 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 size={18} />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* SUMMARY */}

          <div className="h-fit rounded-3xl border border-[#222] bg-[#111] p-8 sticky top-32">

            <h2 className="text-3xl font-serif">
              Order Summary
            </h2>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-400">
                  FREE
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <hr className="border-[#333]" />

              <div className="flex justify-between text-2xl font-semibold">

                <span>Total</span>

                <span className="text-[#C8A25A]">
                  ₹{cartTotal.toLocaleString()}
                </span>

              </div>

            </div>

            <button className="mt-10 w-full rounded-full bg-[#C8A25A] py-4 text-lg font-semibold text-black transition hover:scale-105">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="mt-5 block text-center text-gray-400 hover:text-white"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Cart;