"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <TrendingUp size={32} />,
      title: "Video Prodüksiyon & İçerik Üretimi",
      description:
        "Sosyal medya ve kurumsal projeler için profesyonel video çekimi, video kurgu ve post-prodüksiyon süreçleri",
      features: [
        "Sosyal medya ve kurumsal projeler için profesyonel video çekimi",
        "Video kurgu ve post-prodüksiyon",
        "Drone ile hava çekimleri",
        "Reels, TikTok ve YouTube Shorts formatında dikey video üretimi",
        "Renk düzenleme (color grading) ve görsel iyileştirme",
        "Platforma özel içerik optimizasyonu",
        "Hikaye anlatımı ve kurgu planlama (storytelling)",
      ],
      price: "Proje bazında",
      popular: false,
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: <Users size={32} />,
      title: "Sosyal Medya Yönetimi & İçerik Stratejisi",
      description:
        "Hedef kitle analizi, içerik planlanması ve sosyal medya hesap yönetimi süreçleri",
      features: [
        "Hedef kitle analizi ve konumlandırma",
        "İçerik planı ve aylık içerik takvimi oluşturma",
        "Video içerik üretimi ve paylaşımı (Reels, TikTok, YouTube)",
        "Kapak görseli ve kreatif tasarım süreçleri",
        "Sosyal medya hesap yönetimi ve topluluk etkileşimi",
        "Performans takibi ve detaylı raporlama",
      ],
      price: "Aylık paket",
      popular: true,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: <Target size={32} />,
      title: "Web Tasarım & Marka Kimliği",
      description:
        "Modern web tasarım çözümleri ve kapsamlı marka kimliği geliştirme hizmetleri",
      features: [
        "Kullanıcı deneyimi (UX) odaklı site kurgusu",
        "Modern ve dönüşüm odaklı arayüz tasarımı (UI)",
        "Mobil uyumlu (responsive) web sitesi tasarımı",
        "HTML, CSS ve JavaScript ile özelleştirme",
        "Dönüşüm artıran buton yerleşimi ve renk optimizasyonu",
        "WordPress, Webflow ve Shopify altyapılarıyla site kurulumu",
        "Tipografi ve görsel dil oluşturma",
        "Marka kimliği geliştirme (logo, renk paleti, tasarım dili)",
      ],
      price: "Proje bazında",
      popular: false,
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Zap size={32} />,
      title: "Performans Pazarlama",
      description:
        "Dijital reklam kampanyaları, hedef kitle belirleme ve performans optimizasyonu",
      features: [
        "Meta Ads (Instagram & Facebook) ve TikTok Ads yönetimi",
        "Google Ads kampanya kurulumu ve optimizasyonu",
        "Hedef kitle belirleme ve reklam stratejisi oluşturma",
        "Bütçe yönetimi ve performans optimizasyonu",
        "Dönüşüm (conversion) odaklı kampanya yönetimi",
        "Detaylı analiz, raporlama ve sürekli iyileştirme",
      ],
      price: "Aylık yönetim",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
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

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-20 w-96 h-96 bg-linear-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-80 h-80 bg-linear-to-bl from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
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
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hizmetler
            <span className="gradient-text block pb-1">Gerçek Sonuçlar</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Strateji geliştirmeden uygulama ve optimizasyona kadar, markanızın
            benzersiz ihtiyaçlarına uygun kapsamlı dijital pazarlama hizmetleri
            sunuyorum.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    En Popüler
                  </span>
                </div>
              )}

              <motion.div
                className={`h-full glass border rounded-2xl p-8 transition-all duration-300 ${
                  service.popular
                    ? "border-indigo-500/50 bg-linear-to-b from-indigo-500/5 to-purple-600/5"
                    : "border-white/10 hover:border-white/20"
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-r ${service.gradient} mb-6`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 shrink-0"
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {/* {service.price} */}
                    </span>
                    <motion.button
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium group/btn"
                      whileHover={{ x: 5 }}
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Başlayalım
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Özel Bir Çözüme İhtiyacınız Var mı?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Her markanın benzersiz olduğuna inanıyorum. Hedefleriniz, bütçeniz
            ve zaman çizelgenize mükemmel şekilde uyacak özel bir strateji nasıl
            oluşturabileceğimizi konuşalım.
          </p>
          <motion.button
            className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ücretsiz Danışmanlık Alın
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
