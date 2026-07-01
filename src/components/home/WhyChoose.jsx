import { motion } from "framer-motion";
import {
  Clock3,
  Gem,
  ShieldCheck,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Swiss Precision",
    description:
      "Built with exceptional precision to deliver unmatched performance and timeless reliability.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description:
      "Crafted using sapphire crystal, premium leather, and stainless steel for lasting elegance.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description:
      "Every Zenith timepiece is backed by trusted craftsmanship and long-term confidence.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    description:
      "Luxury delivered safely to your doorstep with secure worldwide shipping.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative bg-[#050505] pt-24 pb-24 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C8A25A]/10 blur-[170px]" />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 xl:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.45em] text-[#C8A25A] text-sm"
        >
          Why Choose Zenith
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-center font-serif text-5xl md:text-6xl"
        >
          Crafted Beyond Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-gray-400"
        >
          Every Zenith watch is designed to combine timeless aesthetics,
          precision engineering and exceptional craftsmanship for generations.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                }}
               className="group w-full max-w-[340px] rounded-[30px] border border-[#2d2d2d] bg-gradient-to-b from-[#161616] to-[#0d0d0d] backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#C8A25A] hover:shadow-[0_20px_60px_rgba(200,162,90,0.18)]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A25A]/25 bg-[#C8A25A]/10 transition-all duration-500 group-hover:bg-[#C8A25A]">
                  <Icon
                    size={30}
                    className="text-[#C8A25A] group-hover:text-black transition"
                  />
                </div>

                <h3 className="mt-8 text-center text-3xl font-serif">
                  {feature.title}
                </h3>

                <p className="mt-6 text-center leading-8 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;