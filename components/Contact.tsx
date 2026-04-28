"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Calendar,
  MapPin,
  Phone,
  Link,
  Camera,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        budget: "",
        timeline: "",
      });
    }, 3000);
  };

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

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "E-posta Gönder",
      description: "Her zaman mesaj atabilirsiniz",
      value: "oguzhancaldirann@gmail.com",
      action: "mailto:oguzhancaldirann@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   icon: <Calendar size={24} />,
    //   title: "Book a Call",
    //   description: "30-min strategy session",
    //   value: "Schedule a meeting",
    //   action: "#",
    //   color: "from-green-500 to-teal-500",
    // },
    // {
    //   icon: <Phone size={24} />,
    //   title: "Call/WhatsApp",
    //   description: "Quick questions welcome",
    //   value: "+1 (555) 123-4567",
    //   action: "tel:+15551234567",
    //   color: "from-purple-500 to-pink-500",
    // },
  ];

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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-20 w-96 h-96 bg-linear-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-80 h-80 bg-linear-to-bl from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 270, 360],
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
            Birlikte Harika
            <span className="gradient-text block pb-1">
              Hedeflerinizi Gerçekleştirelim
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Dijital dünyadaki varlığınızı güçlendirmeye hazır mısınız?
            Hedefleriniz, zorluklariniz ve markanızın nasıl gerçek büyüme
            sağlayabileceği hakkında konuşalım.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <motion.div
              variants={itemVariants}
              className="glass border border-white/10 rounded-2xl p-8"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                        placeholder="Adınız"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                        placeholder="mail@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Başlık
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                      placeholder="Başlık"
                    />
                  </motion.div>

                  {/* <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Bütçe Aralığı
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 [&>option]:bg-gray-900 [&>option]:text-white"
                      >
                        <option value="">Bütçe aralığı seçin</option>
                        <option value="under-1k">5.000₺ altı/ay</option>
                        <option value="1k-3k">5.000₺ - 15.000₺/ay</option>
                        <option value="3k-5k">15.000₺ - 25.000₺/ay</option>
                        <option value="5k-10k">25.000₺ - 50.000₺/ay</option>
                        <option value="10k-plus">50.000₺+/ay</option>
                      </select>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Zaman Çizelgesi
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 [&>option]:bg-gray-900 [&>option]:text-white"
                      >
                        <option value="">Zaman çizelgesi seçin</option>
                        <option value="asap">Mümkün olan en kısa süre</option>
                        <option value="1-month">1 ay içinde</option>
                        <option value="2-3-months">2-3 ay</option>
                        <option value="future">Gelecek proje</option>
                      </select>
                    </motion.div>
                  </div> */}

                  <motion.div variants={itemVariants}>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none"
                      placeholder="Hedeflerinizi, zorluklarinizi ve dijital dünyada nasıl başarı elde etmek istediğinizi açıklayın..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Mesaj Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Mesaj Gönder
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mesaj Gönderildi!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Mesajınız için teşekkürler! Size 24 saat içinde geri
                    döneçeğim.
                  </p>
                  <p className="text-sm text-gray-400">
                    Forma yönlendiriliyor...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  variants={itemVariants}
                  className="block glass border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg bg-linear-to-r ${method.color}`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">
                        {method.description}
                      </p>
                      <p className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Office Info */}
            <motion.div
              variants={itemVariants}
              className="glass border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-indigo-400" size={24} />
                <h4 className="text-lg font-semibold text-white">Lokasyon</h4>
              </div>
              <p className="text-gray-300 mb-2">İstanbul, Türkiye</p>
              <p className="text-sm text-gray-400">
                Dünya genelinde tüm zaman dilimlerinde müşterilerle çalışıyorum
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="glass border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-green-400" size={24} />
                <h4 className="text-lg font-semibold text-white">
                  Yanıt Süresi
                </h4>
              </div>
              <p className="text-gray-300 mb-2">Genellikle 2-4 saat içinde</p>
              <p className="text-sm text-gray-400">
                Her gün, 09:00 - 21:00 (GMT+3)
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="glass border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Sosyal Medyada Bağlantı Kurun
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 border border-white/20 rounded-lg text-gray-300 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
