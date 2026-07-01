import { motion } from "framer-motion";
import { watches } from "../../data/watches";

const Featured = () => {
  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-[#050505] pt-24 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C8A25A]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-8 lg:px-16">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.45em] text-[#C8A25A]"
        >
          Luxury Collection
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5 text-center font-serif text-5xl md:text-6xl text-white"
        >
          Featured Watches
        </motion.h2>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-6 h-[2px] bg-[#C8A25A]"
        />

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-5xl px-4 text-center text-lg md:text-xl leading-9 text-gray-400"
        >
          Discover our handpicked collection of premium timepieces crafted for
          those who appreciate timeless elegance, precision engineering and
          luxurious craftsmanship.
        </motion.p>

        {/* Cards */}

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 justify-items-center">

          {watches.map((watch, index) => (

            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              whileHover={{
                y: -12,
              }}
              className="group w-full max-w-[320px] overflow-hidden rounded-3xl border border-[#222] bg-[#111] transition-all duration-500 hover:border-[#C8A25A] hover:shadow-[0_20px_60px_rgba(200,162,90,0.18)]"
            >

              {/* Badge */}

              <div className="absolute z-20 ml-5 mt-5 rounded-full bg-[#C8A25A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                {watch.badge}
              </div>

              {/* Image */}

              <div className="relative h-[360px] overflow-hidden">

                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="text-xs uppercase tracking-[0.35em] text-[#C8A25A]">
                  {watch.collection}
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white transition duration-300 group-hover:text-[#C8A25A]">
                  {watch.name}
                </h3>

                <p className="mt-5 text-3xl font-light text-white">
                  {watch.price}
                </p>

                <button className="mt-7 rounded-full border border-[#C8A25A] px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#C8A25A] hover:text-black">
                  View Details
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Featured;