"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  Camera,
  Heart,
  ArrowUp,
  Calendar,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    navigation: [
      { label: "Hakkımda", href: "#about" },
      { label: "Hizmetler", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "İletişim", href: "#contact" },
    ],
    services: [
      { label: "Sosyal Medya Stratejisi", href: "#services" },
      { label: "Topluluk Yönetimi", href: "#services" },
      { label: "Reklam Yönetimi", href: "#services" },
      { label: "İçerik Üretimi", href: "#services" },
      { label: "Analitik & Raporlama", href: "#services" },
      { label: "Danışmanlık", href: "#services" },
    ],
    resources: [
      { label: "Çalışmalar", href: "#portfolio" },
      { label: "LinkedIn İpuçları", href: "#" },
      { label: "Büyüme Kaynakları", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: <Link size={20} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/oguzhancaldiran",
      color: "hover:bg-blue-600",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2C.03 8.05 0 12 0 12s.03 3.95.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13C23.97 15.95 24 12 24 12s-.03-3.95-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
        </svg>
      ),
      name: "YouTube",
      url: "https://www.youtube.com/@yolbizim",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-indigo-500/5 to-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Oğuzhan Çaldıran
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dijital İçerik & Sosyal Medya Uzmanı olarak markalara otantik
                bağlantılar kurma ve veri odaklı içerik stratejileriyle üssel
                büyüme sağlama konusunda yardımcı oluyorum.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a
                  href="mailto:oguzhancaldirann@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  oguzhancaldirann@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div> */}
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Türkiye</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 border border-white/20 rounded-lg text-gray-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Menü</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Kaynaklar</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="mt-6 w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={18} />
              Ücretsiz Danış
            </motion.button>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Sosyal Medya Trendlerinden Haberdar Olun
            </h4>
            <p className="text-gray-400 mb-6">
              Haftalık içgörüler, strateji ipuçları ve platform güncellemelerini
              e-posta adresinize alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresinizi girin"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300"
              />
              <motion.button
                className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Abone Ol
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>© 2026 Oğuzhan Çaldıran</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Hizmet Koşulları
            </a>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-white/5 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
