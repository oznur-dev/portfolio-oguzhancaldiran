"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const words = ["İçerik", "Etkileşim", "Strateji"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-indigo-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-bl from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Mouse Follower */}
        <motion.div
          className="absolute w-6 h-6 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8"
        >
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-sm text-gray-300">
            Award-Winning Social Media Expert
          </span>
        </motion.div> */}

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight pt-5">
            Markanızı Dijital Dünyada Büyüten
            <br />
            <span className="relative">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-text"
              >
                {words[currentWordIndex]}
              </motion.span>
            </span>
            <br />
            Çözümleri
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-8"
        >
          Video prodüksiyon, sosyal medya yönetimi, web tasarım ve performans
          pazarlama alanlarında uçtan uca hizmet sunarak markaların
          sürdürülebilir büyümesine katkı sağlıyorum.
          {/* Hırslı markalara otantik bağlantılar kurma ve takipçileri sadık
          müşterilere dönüştüren veri odaklı içerik stratejileriyle üssel büyüme
          sağlama konusunda yardımcı oluyorum. */}
        </motion.p>

        {/* Metrics
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 px-2"
        >
          {[
            { value: "500M+", label: "Total Reach Generated" },
            { value: "250%", label: "Avg. Engagement Increase" },
            { value: "100+", label: "Brands Transformed" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            İletişim
          </motion.button>

          <motion.button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 glass border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} />
            Deneyimlerimi Gör
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col pb-2 items-center gap-2 text-gray-400 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Discover More</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-950/50 via-transparent to-gray-950/80 pointer-events-none" />
    </section>
  );
}
