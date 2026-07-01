import { motion } from "framer-motion";

import watch1 from "../../assets/images/watch1.jpg";
import watch2 from "../../assets/images/watch2.jpg";
import watch3 from "../../assets/images/watch3.jpg";

const collections = [
  {
    title: "Heritage",
    subtitle: "Classic elegance inspired by timeless craftsmanship.",
    image: watch1,
  },
  {
    title: "Luxury",
    subtitle: "Designed for those who appreciate premium excellence.",
    image: watch2,
  },
  {
    title: "Sport",
    subtitle: "Performance meets sophisticated style.",
    image: watch3,
  },
];

const Collections = () => {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#050505] pt-24 pb-24"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C8A25A]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-10 lg:px-16">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.45em] text-[#C8A25A]"
        >
          Curated Collections
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5 text-center font-serif text-5xl md:text-6xl text-white"
        >
          Crafted For Every Lifestyle
        </motion.h2>

        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="mx-auto mt-8 max-w-5xl px-4 text-center text-lg md:text-xl leading-9 text-gray-400"
>
  Explore luxury collections designed for every personality, from timeless classics to bold modern statements.
</motion.p>
        {/* Cards */}

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center">

          {collections.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative w-full max-w-[350px] overflow-hidden rounded-3xl border border-[#222] bg-[#111] transition-all duration-500 hover:border-[#C8A25A] hover:shadow-[0_20px_60px_rgba(200,162,90,0.18)]"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              </div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 w-full p-10">

                <p className="text-xs uppercase tracking-[0.35em] text-[#C8A25A]">
                  Collection
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-300">
                  {item.subtitle}
                </p>

                <button className="mt-6 rounded-full border border-[#C8A25A] px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#C8A25A] hover:text-black">
                  Explore Collection
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Collections;