import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroWatch from "../../assets/images/hero-watch.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden pt-28">

      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#C8A25A]/20 blur-[140px]"
      />

      {/* MAIN CONTAINER (CENTER FIX APPLIED) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">

        <div className="grid lg:grid-cols-2 items-center min-h-[85vh] gap-12 w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.45em] text-[#C8A25A] text-sm mb-6"
            >
              Inspired by India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-serif text-[52px] sm:text-[60px] md:text-[72px] lg:text-[84px] leading-[0.92] max-w-full break-words"
            >
              TIME
              <br />
              REDEFINED
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-300 text-lg leading-8"
            >
              Inspired by India's timeless heritage and crafted with precision,
              our luxury timepieces blend traditional artistry with modern
              engineering for those who appreciate elegance and craftsmanship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <button className="bg-[#C8A25A] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition">
                Explore Collection
                <ArrowRight size={20} />
              </button>

              <button className="border border-[#C8A25A] px-8 py-4 rounded-full hover:bg-[#C8A25A] hover:text-black transition">
                Discover Heritage
              </button>

            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >

            <motion.img
              src={heroWatch}
              alt="Luxury Watch"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[520px] xl:w-[600px] object-contain drop-shadow-[0_30px_60px_rgba(200,162,90,0.5)]"
            />

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#C8A25A] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#C8A25A] rounded-full mt-2" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;