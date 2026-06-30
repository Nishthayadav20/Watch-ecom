import logo from "../../assets/logo/zenith-logo.png";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { navLinks } from "../../data/navbarData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl h-24"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-[1450px] h-full mx-auto px-10 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
         <img
  src={logo}
  alt="Zenith Logo"
  className="h-16 lg:h-20 w-auto object-contain cursor-pointer"
/>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-14 uppercase text-sm tracking-[0.22em] font-medium">

          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="relative group transition duration-300 hover:text-amber-400"
              >
                {item.title}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>

              </a>
            </li>
          ))}

        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-8">

          <Search
            size={22}
            className="cursor-pointer hover:text-amber-400 transition"
          />

          <ShoppingBag
            size={22}
            className="cursor-pointer hover:text-amber-400 transition"
          />

        </div>

        {/* Mobile Menu */}

        <button className="lg:hidden">
          <Menu size={32} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;