"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Award,
  TrendingUp,
  Users,
  Zap,
  Brain,
  Target,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const certificates = [
  { src: "/assets/sertificates/stf.png" },
  { src: "/assets/sertificates/stf-1.jpg" },
  { src: "/assets/sertificates/stf-2.png" },
  { src: "/assets/sertificates/stf-4.png" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => ((i ?? 0) + 1) % certificates.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (i) => ((i ?? 0) - 1 + certificates.length) % certificates.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  const skills = [
    {
      icon: <TrendingUp size={24} />,
      title: "Video Prodüksiyon & Kurgu",
      description:
        "Profesyonel video çekimi, kurgu ve post-prodüksiyon süreçleri",
      percentage: 95,
    },
    {
      icon: <Users size={24} />,
      title: "Sosyal Medya Stratejisi",
      description:
        "İçerik planlaması, topluluk yönetimi ve organik büyüme stratejileri",
      percentage: 92,
    },
    {
      icon: <Brain size={24} />,
      title: "İçerik Üretimi & Storytelling",
      description: "Viral içerik yaratma ve etkili hikaye anlatımı teknikleri",
      percentage: 90,
    },
    {
      icon: <Zap size={24} />,
      title: "Dijital Reklam Yönetimi",
      description: "Meta Ads, TikTok Ads ve Google Ads kampanya optimizasyonu",
      percentage: 88,
    },
    {
      icon: <Target size={24} />,
      title: "Web Tasarım & UX",
      description:
        "Modern web tasarım, kullanıcı deneyimi ve dönüşüm optimizasyonu",
      percentage: 85,
    },
    {
      icon: <Award size={24} />,
      title: "Marka Kimliği & Pozisyonlama",
      description:
        "Logo tasarımı, görsel kimlik oluşturma ve marka stratejisi geliştirme",
      percentage: 87,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-linear-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column - About Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Oğuzhan Çaldıran
            </motion.h1>
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
            >
              <span className="gradient-text block">
                Dijital İçerik & Sosyal Medya Uzmanı
              </span>
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-4"
            >
              <p>
                Radyo ve Televizyon Programcılığı mezunuyum ve 11 yıllık
                profesyonel deneyimimle dijital içerik üretimi ve sosyal medya
                yönetimi alanlarında aktif olarak çalışıyorum.
              </p>
              <p>
                Video prodüksiyon altyapım sayesinde içerik üretim sürecini
                uçtan uca yönetirken, dijital pazarlama, SEO ve marka yönetimi
                konularındaki bilgi ve sertifikalarım ile markaların dijitalde
                sürdürülebilir büyüme sağlamasına katkıda bulunuyorum.
              </p>
              <p>
                Sosyal medya reklam yönetimi, içerik stratejisi, marka kimliği
                oluşturma ve web tasarım süreçlerinde; yeni başlayan veya
                büyümek isteyen markalara sonuç odaklı çözümler sunuyorum.
              </p>
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Çalışmalarımı Gör
            </motion.button>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Temel Uzmanlık Alanlarım
              </h3>
              <p className="text-gray-300">
                Yüzlerce markaya olağanüstü sonuçlar sağladığım temel beceriler:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-indigo-400 mt-1 shrink-0">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-4">
                        {skill.description}
                      </p>
                      <div className="relative">
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            className="bg-linear-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.percentage}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.5,
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block text-right">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/10"
        >
          {[
            { number: "11+", label: "Yıl Deneyim" },
            { number: "500M+", label: "İçerik Erişimi" },
            { number: "100+", label: "Marka Deneyimi" },
            { number: "250%", label: "Ortalama Büyüme" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 pt-16 border-t border-white/10"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Sertifikalar</span>
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {certificates.map((cert, index) => (
              <motion.button
                key={cert.src}
                variants={itemVariants}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-4/3 rounded-xl overflow-hidden glass border border-white/10 hover:border-indigo-500/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Image
                  src={cert.src}
                  alt={`Sertifika ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-0 p-2 rounded-full glass border border-white/20 hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <div className="relative w-full max-h-[80vh] min-h-[200px] aspect-video">
              <Image
                src={certificates[lightboxIndex].src}
                alt={`Sertifika ${lightboxIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="rounded-xl object-contain"
                priority
              />
            </div>

            {/* Prev */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + certificates.length) %
                    certificates.length,
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 glass border border-white/20 rounded-xl hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
              aria-label="Önceki"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % certificates.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 glass border border-white/20 rounded-xl hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
              aria-label="Sonraki"
            >
              <ChevronRight size={22} />
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              {lightboxIndex + 1} / {certificates.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
