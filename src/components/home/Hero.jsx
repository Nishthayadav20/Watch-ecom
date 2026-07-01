import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroWatch from "../../assets/images/hero-watch.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-28 pb-24">

      {/* Left Glow */}
      <div className="absolute left-[-250px] top-20 h-[600px] w-[600px] rounded-full bg-[#C8A25A]/5 blur-[220px]" />

      {/* Right Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-[-180px] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-[#C8A25A]/20 blur-[200px]"
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#050505] to-[#111111]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1500px] items-center px-8 lg:px-16">

        <div className="grid w-full items-center gap-6 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >

            {/* Badge */}

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="mb-7 inline-flex items-center rounded-full border border-[#C8A25A]/40 bg-white/5 px-5 py-2 backdrop-blur-md"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-[#C8A25A]" />

              <p className="text-xs uppercase tracking-[0.45em] text-[#C8A25A]">
                Inspired by India
              </p>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="font-serif text-6xl sm:text-7xl lg:text-[100px] leading-[0.9] font-semibold text-white"
            >
              TIME
              <br />

              <span className="bg-gradient-to-r from-white via-[#E7D1A0] to-[#C8A25A] bg-clip-text text-transparent">
                REDEFINED
              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .45 }}
              className="mt-8 max-w-xl text-lg leading-9 text-gray-300"
            >
              Discover handcrafted luxury watches where timeless Indian
              artistry meets modern precision. Designed for those who
              appreciate elegance, heritage, and uncompromising craftsmanship.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .65 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <button className="group rounded-full bg-gradient-to-r from-[#B88A2A] via-[#D4AF37] to-[#F1D27A] px-9 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">

                <span className="flex items-center gap-2">

                  Shop Collection

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />

                </span>

              </button>

              <button className="rounded-full border border-[#C8A25A]/70 bg-white/5 px-9 py-4 font-medium backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#C8A25A] hover:text-black">

                Discover Heritage

              </button>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-center"
          >

            {/* Bigger Glow */}

            <div className="absolute h-[720px] w-[720px] rounded-full bg-[#D4AF37]/15 blur-[180px]" />

            {/* Watch */}

            <motion.img
              src={heroWatch}
              alt="Luxury Watch"
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              className="
                relative
                z-10
                object-contain
                w-[430px]
                sm:w-[520px]
                md:w-[650px]
                lg:w-[760px]
                xl:w-[850px]
                2xl:w-[920px]
                drop-shadow-[0_50px_120px_rgba(212,175,55,0.6)]
              "
            />

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="flex h-11 w-7 justify-center rounded-full border border-[#C8A25A]">

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-1 rounded-full bg-[#C8A25A]"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;