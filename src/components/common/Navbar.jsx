import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import logo from "../../assets/logo/zenith-logo.png";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-black/90 backdrop-blur-xl border-b border-[#222] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}

        <Link to="/">
          <img
            src={logo}
            alt="Zenith"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-[0.25em]">

          <Link
            to="/"
            className="transition hover:text-[#C8A25A]"
          >
            HOME
          </Link>

          <Link
            to="/shop"
            className="transition hover:text-[#C8A25A]"
          >
            SHOP
          </Link>

          {isHome && (
            <>
              <a
                href="#collections"
                className="transition hover:text-[#C8A25A]"
              >
                COLLECTIONS
              </a>

              <a
                href="#featured"
                className="transition hover:text-[#C8A25A]"
              >
                FEATURED
              </a>

              <a
                href="#about"
                className="transition hover:text-[#C8A25A]"
              >
                ABOUT
              </a>
            </>
          )}

          <Link
            to="/cart"
            className="transition hover:text-[#C8A25A]"
          >
            CART
          </Link>

        </div>

        {/* Icons */}

        <div className="flex items-center gap-5">

          <Search
            size={20}
            className="cursor-pointer transition hover:text-[#C8A25A]"
          />

          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingBag
              size={20}
              className="cursor-pointer transition hover:text-[#C8A25A]"
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A25A] text-[10px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>

          <Menu
            size={22}
            className="cursor-pointer md:hidden"
          />

        </div>

      </div>
    </nav>
  );
};

export default Navbar;