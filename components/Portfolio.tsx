"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";

type StudyItem = { type: "video"; src: string } | { type: "image"; src: string };

const studyItems: StudyItem[] = [
  { type: "video", src: "/assets/studies/showreel.mp4" },
  { type: "video", src: "/assets/studies/vid-1.mp4" },
  { type: "video", src: "/assets/studies/vid-2.mp4" },
  { type: "video", src: "/assets/studies/vid-3.mp4" },
  { type: "video", src: "/assets/studies/vid-4.mp4" },
  { type: "video", src: "/assets/studies/vid-5.mp4" },
  { type: "video", src: "/assets/studies/vid-6.mp4" },
  { type: "video", src: "/assets/studies/Yol.mp4" },
  { type: "image", src: "/assets/studies/beauty.jpeg" },
  { type: "image", src: "/assets/studies/beauty-2.jpeg" },
];

export function Portfolio() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [selectedCase, setSelectedCase] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<StudyItem | null>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Pembe Kare / Creativeus",
      category: "Düğün & Etkinlik Video Prodüksiyonu",
      description:
        "Gelin ve damat için sinematik video prodüksiyonları, mekan ve konsepte uygun renk düzenleme, özel müzik ve ses tasarımı ile kurumsal tanıtım filmi üretimi süreçleri.",
      details: [
        "Gelin & damat için sinematik video prodüksiyonları",
        "Mekan ve konsepte uygun renk düzenleme ve kurgu",
        "Projeye özel müzik ve ses tasarımı",
        "Markalar için kurumsal tanıtım filmi üretimi",
      ],
      color: "from-pink-500 to-rose-600",
      images: {
        thumbnail: "/assets/pembe-kare/thumbnail.jpg",
        hero: "/assets/pembe-kare/hero.jpg",
        gallery: [
          "/assets/pembe-kare/image1.jpg",
          "/assets/pembe-kare/image2.jpg",
          "/assets/pembe-kare/image3.jpg",
        ],
      },
    },
    {
      id: 2,
      title: "İstanbul Havalimanı (İGA)",
      category: "Kurumsal Video & Dijital İçerik",
      description:
        "Showreel çekimleri, profesyonel video içerik üretimi, sosyal medya içerikleri ve dijital operasyon süreçlerinin yönetimi.",
      details: [
        "Showreel çekimleri ve profesyonel video içerik üretimi",
        "Sosyal medya platformlarına özel içerik geliştirme",
        "Website tasarımı ve dijital varlıkların yapılandırılması",
        "Erişim ve performans verilerine dayalı düzenli raporlama",
        "Çekim süreçlerinde operasyon ve ekip koordinasyonu",
        "Reklam panoları içerik yönetimi ve raporlama",
      ],
      color: "from-blue-500 to-cyan-500",
      images: {
        thumbnail: "/assets/istanbul-havalimani/thumbnail.jpg",
        hero: "/assets/istanbul-havalimani/hero.jpg",
        gallery: [
          "/assets/istanbul-havalimani/image1.jpg",
          "/assets/istanbul-havalimani/image2.jpg",
          "/assets/istanbul-havalimani/image3.jpg",
        ],
      },
    },
    {
      id: 3,
      title: "Lumora Beauty Center",
      category: "Kapsamlı Marka Geliştirme & Dijital Pazarlama",
      description:
        "Sıfırdan marka oluşturma, sosyal medya yönetimi, dijital pazarlama kampanyaları ve influencer marketing süreçlerinin tamamı.",
      details: [
        "Sıfırdan marka kimliği oluşturma (isim, logo, renk paleti, tabela)",
        "Instagram, TikTok ve Facebook hesaplarının kurulumu ve yapılandırılması",
        "Meta Business ve reklam altyapısının hazırlanması",
        "Meta Ads, TikTok Ads ve Google Ads kampanya yönetimi",
        "Hedef kitle analizi ve pazarlama stratejisi oluşturma",
        "Website tasarımı ve dijital vitrin oluşturma",
        "Influencer marketing süreçlerinin planlanması ve yönetimi",
      ],
      color: "from-purple-500 to-pink-600",
      images: {
        thumbnail: "/assets/lumora-beauty/thumbnail.jpg",
        hero: "/assets/lumora-beauty/hero.jpg",
        gallery: [
          "/assets/lumora-beauty/image1.jpg",
          "/assets/lumora-beauty/image2.jpg",
          "/assets/lumora-beauty/image3.jpg",
        ],
      },
    },
    {
      id: 4,
      title: "Yol Bizim (YouTube Kanalı)",
      category: "YouTube Kanal Yönetimi & Video İçerik",
      description:
        "YouTube platformu için video içerik üretimi, kanal stratejisi, optimizasyon ve monetizasyon süreçlerinin yönetimi.",
      details: [
        "YouTube platformuna uygun video içerik üretimi ve yayın planlama",
        "Hedef kitle analizi ve içerik stratejisi",
        "Video içeriklerine uygun kurgu ve hikaye akışı tasarımı",
        "İzlenme artırmaya yönelik reklam kampanyaları yönetimi",
        "Thumbnail ve başlık optimizasyonu",
      ],
      color: "from-red-500 to-orange-500",
      images: {
        thumbnail: "/assets/yol-bizim/thumbnail.jpg",
        hero: "/assets/yol-bizim/hero.jpg",
        gallery: [
          "/assets/yol-bizim/image1.jpg",
          "/assets/yol-bizim/image2.jpg",
          "/assets/yol-bizim/image3.jpg",
        ],
      },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const currentProject = projects[selectedCase];

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-10 w-96 h-96 bg-linear-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        ></motion.div>

        {/* Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">
              Referans Projeler ve Katkılarım
            </span>
          </motion.h3>

          {/* Project Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedCase(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCase === index
                    ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white"
                    : "glass border border-white/20 text-gray-300 hover:border-white/40"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.title}
              </motion.button>
            ))}
          </div>

          {/* Selected Project Details */}
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`inline-flex p-3 rounded-lg bg-linear-to-r ${currentProject.color}`}
              >
                <Play className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">
                  {currentProject.title}
                </h4>
                <p className="text-gray-400">{currentProject.category}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {currentProject.description}
            </p>

            <div className="space-y-4">
              {currentProject.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-linear-to-r from-indigo-400 to-purple-400 mt-2 shrink-0" />
                  <span className="text-gray-300">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center gap-4 mt-12"
        >
          <motion.button
            onClick={() =>
              setSelectedCase(
                selectedCase > 0 ? selectedCase - 1 : projects.length - 1,
              )
            }
            className="p-3 glass border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={20} className="text-gray-300" />
          </motion.button>

          <span className="text-gray-400 text-sm">
            {selectedCase + 1} / {projects.length}
          </span>

          <motion.button
            onClick={() =>
              setSelectedCase(
                selectedCase < projects.length - 1 ? selectedCase + 1 : 0,
              )
            }
            className="p-3 glass border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={20} className="text-gray-300" />
          </motion.button>
        </motion.div>

        {/* Studies / Media Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Çalışmalar</span>
          </motion.h3>

          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Left arrow */}
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 glass border border-white/20 rounded-xl hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
                aria-label="Geri"
              >
                <ArrowLeft size={20} />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-5 overflow-x-auto hide-scrollbar px-6"
              >
                {studyItems.map((item) => (
                  <button
                    key={item.src}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative flex-none w-72 aspect-video rounded-xl overflow-hidden bg-[#0d0d1a] border border-white/10 hover:border-indigo-500/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    {item.type === "video" ? (
                      <video
                        src={item.src + "#t=5"}
                        preload="metadata"
                        className="w-full h-full object-contain"
                        muted
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="288px"
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      {item.type === "video" && (
                        <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-indigo-500/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <Play size={20} className="text-white ml-0.5" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 glass border border-white/20 rounded-xl hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
                aria-label="İleri"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-10 right-0 p-2 rounded-full glass border border-white/20 hover:border-white/50 text-gray-300 hover:text-white transition-all duration-200"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full rounded-xl max-h-[80vh]"
              />
            ) : (
              <div className="relative w-full rounded-xl overflow-hidden max-h-[80vh] flex items-center justify-center">
                <Image
                  src={selectedMedia.src}
                  alt=""
                  width={1200}
                  height={900}
                  className="object-contain rounded-xl max-h-[80vh] w-auto h-auto"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
