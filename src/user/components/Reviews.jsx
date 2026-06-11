import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Send, User, MessageSquare, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    rating: 5,
    review:
      "Excellent service! The team handled my transcript process very smoothly and delivered on time.",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review:
      "Very professional and responsive. They kept me updated throughout the process.",
  },
  {
    name: "Arjun Patel",
    rating: 5,
    review:
      "Fast processing and great support. Everything was completed perfectly.",
  },
  {
    name: "Meena Sharma",
    rating: 5,
    review:
      "Trustworthy service. The team guided me step by step.",
  },
  {
    name: "Karthik Reddy",
    rating: 5,
    review:
      "Amazing experience! Very smooth and hassle-free.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ── Modal overlay + card animations ── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 40,
    transition: { duration: 0.25 },
  },
};

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const Reviews = () => {
  const scrollReviews = [...reviews, ...reviews];

  /* ── Modal state ── */
  const [showModal, setShowModal] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [formData, setFormData] = useState({ name: "", review: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after 2.5s
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setSelectedRating(0);
      setHoverRating(0);
      setFormData({ name: "", email: "", review: "" });
    }, 2500);
  };

  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <section className="w-full overflow-hidden bg-white py-20">
      <div className="mx-auto mb-10 sm:mb-14 max-w-7xl px-4 sm:px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] sm:h-[3px] w-8 sm:w-12 bg-blue-600"></span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              Reviews
            </p>
            <span className="h-[2px] sm:h-[3px] w-8 sm:w-12 bg-blue-600"></span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#2f4a6d] md:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500 text-xs sm:text-sm">
            Trusted by thousands of students and professionals across India for
            fast, reliable, and stress-free transcript support.
          </p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
            >
              <Star size={18} className="fill-white" />
              <span>Give Review</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scrolling review cards ── */}
      <div className="relative flex">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex whitespace-nowrap py-4 animate-marquee"
        >
          {scrollReviews.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group mx-4 flex min-h-[220px] min-w-[290px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl md:min-w-[360px]"
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>

                <p className="whitespace-normal text-sm leading-7 text-gray-600 md:text-[15px]">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#2f4a6d]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          ✨  GIVE REVIEW MODAL
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => {
                if (!submitted) {
                  setShowModal(false);
                  setSelectedRating(0);
                  setHoverRating(0);
                  setFormData({ name: "", review: "" });
                }
              }}
            />

            {/* Modal Card */}
            <motion.div
              className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Gradient header strip */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

              {/* Close button */}
              {!submitted && (
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setShowModal(false);
                    setSelectedRating(0);
                    setHoverRating(0);
                    setFormData({ name: "", review: "" });
                  }}
                  className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              )}

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-8">
                        <motion.div
                          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/25"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
                        >
                          <MessageSquare size={28} className="text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-[#2f4a6d]">
                          Share Your Experience
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                          Your feedback helps us serve you better
                        </p>
                      </div>

                      {/* Star Rating */}
                      <motion.div
                        className="mb-8 text-center"
                        custom={0}
                        variants={formFieldVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <p className="mb-3 text-sm font-semibold text-gray-600">
                          How would you rate us?
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.button
                              key={star}
                              type="button"
                              whileHover={{ scale: 1.3, y: -4 }}
                              whileTap={{ scale: 0.8 }}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              onClick={() => setSelectedRating(star)}
                              className="relative focus:outline-none"
                            >
                              <Star
                                size={32}
                                className={`transition-all duration-200 ${
                                  star <= (hoverRating || selectedRating)
                                    ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            </motion.button>
                          ))}
                        </div>
                        <AnimatePresence>
                          {(hoverRating || selectedRating) > 0 && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="mt-2 text-sm font-medium text-blue-500"
                            >
                              {ratingLabels[hoverRating || selectedRating]}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <motion.div
                          custom={1}
                          variants={formFieldVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative"
                        >
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                          />
                        </motion.div>


                        {/* Review text */}
                        <motion.div
                          custom={2}
                          variants={formFieldVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative"
                        >
                          <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your experience..."
                            value={formData.review}
                            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                          />
                        </motion.div>

                        {/* Submit */}
                        <motion.div
                          custom={3}
                          variants={formFieldVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={selectedRating === 0}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                          >
                            <Send size={16} />
                            Submit Review
                          </motion.button>
                        </motion.div>
                      </form>
                    </motion.div>
                  ) : (
                    /* ── Success state ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 200 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.15 }}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30"
                      >
                        <CheckCircle size={40} className="text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#2f4a6d]">
                        Thank You! 🎉
                      </h3>
                      <p className="mt-3 max-w-xs text-sm text-gray-400">
                        Your review has been submitted successfully. We truly appreciate your feedback!
                      </p>
                      <motion.div
                        className="mt-4 flex items-center gap-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={20}
                            className={
                              star <= selectedRating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
