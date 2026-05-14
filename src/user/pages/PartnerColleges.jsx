import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiArrowRight, FiAward, FiStar, FiTrendingUp, FiShield } from "react-icons/fi";
import collegesData from "../data/collegesData";
import partnerclg from "../../assets/partnerclg.png";

const PartnerColleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const partnerColleges = Object.entries(collegesData).filter(([_, data]) => 
    data.title.includes("Bhaskar Pharmacy") || 
    data.title.includes("Joginpally") || 
    data.title.includes("Siddhartha Institute")
  ).map(([id, data]) => ({ id, ...data }));

  const filteredColleges = searchTerm.length > 0 
    ? partnerColleges.filter((college) =>
        college.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.short.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : partnerColleges;

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-rose-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
        {/* Background Image */}
        <div className="absolute inset-0 bg-right bg-no-repeat opacity-15" style={{ backgroundImage: `url(${partnerclg})`, backgroundSize: "contain" }} />

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-rose-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
                PREMIUM PARTNERED COLLEGES
              </span>
              <FiStar className="w-4 h-4 text-yellow-500" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Our Partnered
              </span>
              <span className="block bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
                Colleges Network
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 leading-relaxed mb-12"
            >
              We've established exclusive partnerships with leading colleges to deliver 
              <span className="font-bold text-slate-800"> seamless, secure, and lightning-fast</span> transcript and document services.
            </motion.p>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { value: partnerColleges.length, label: "Colleges", icon: <FiAward />, color: "from-amber-500 to-orange-600" },
                { value: "24/7", label: "Support", icon: <FiStar />, color: "from-rose-500 to-pink-600" },
                { value: "98%", label: "Success Rate", icon: <FiTrendingUp />, color: "from-orange-500 to-amber-600" },
                { value: "100%", label: "Secure", icon: <FiShield />, color: "from-green-500 to-emerald-600" }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl group-hover:shadow-2xl transition-all duration-300" />
                  <div className="relative p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-black text-slate-800 mb-1">
                      {stat.value}
                      {typeof stat.value === "number" && "+"}
                    </p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Search Section */}
      <section className="relative py-12">
        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-2 shadow-2xl border border-white/70">
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <FiSearch className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search for your college by name or short code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 text-lg font-medium text-slate-800 placeholder:text-slate-400 bg-transparent border-none focus:ring-0 outline-none"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSearchTerm("")}
                    className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    Clear
                  </motion.button>
                )}
              </div>
            </div>

            {/* Search Dropdown */}
            <AnimatePresence>
              {searchTerm.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute z-50 mt-4 w-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden max-h-[500px] overflow-y-auto"
                >
                  {filteredColleges.length > 0 ? (
                    filteredColleges.map((college, _idx) => (
                      <Link
                        key={college.id}
                        to={`/partnered-colleges/${college.id}`}
                        className="flex items-center gap-4 px-8 py-5 hover:bg-gradient-to-r from-amber-50 to-rose-50 transition-all duration-300 border-b border-slate-100 last:border-none group"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 shadow-md border border-amber-100 p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <FiAward className="w-8 h-8 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                            {college.title.replace("Exclusive Transcript Services for ", "").replace("Exclusive Document Services for ", "").replace(" Students", "")}
                          </h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                            {college.short}
                          </p>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <FiArrowRight className="w-5 h-5" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <p className="text-slate-500 font-medium text-lg">No colleges found matching your search.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Premium Colleges Grid */}
      <section className="py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredColleges.map((college, idx) => (
              <Link key={college.id} to={`/partnered-colleges/${college.id}`} className="block">
                <motion.div
                  key={college.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.05, 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/70 shadow-xl group-hover:shadow-2xl overflow-hidden transition-all duration-500">
                    {/* Premium Header */}
                    <div className="relative p-8 pb-6 flex flex-col items-center text-center">
                      {/* Logo Placeholder (Icon) */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-rose-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-white to-amber-50 shadow-2xl border border-amber-100 p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <FiAward className="w-12 h-12 text-amber-600" />
                        </div>
                      </div>

                      {/* Short Name Badge */}
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 text-amber-700 text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
                        {college.short}
                      </span>

                      {/* College Name */}
                      <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-rose-700 transition-all duration-300">
                        {college.title.replace("Exclusive Transcript Services for ", "").replace("Exclusive Document Services for ", "").replace(" Students", "")}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="px-8 pb-8">
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {college.description}
                      </p>

                      {/* CTA Button */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 text-amber-700 font-black text-sm group-hover:text-white transition-all duration-300 border border-amber-100 group-hover:border-transparent">
                          View Details
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-rose-600 to-orange-500" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] border-2 border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-60 -left-60 w-[800px] h-[800px] border border-white/5 rounded-full"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-white/90">EXPANDING NETWORK</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Can't Find Your College?
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              We're continuously partnering with more institutions. 
              Contact us today and let us help you with your transcript needs.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-white text-amber-700 px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-white/30 hover:shadow-3xl hover:shadow-white/40 transition-all duration-500 hover:scale-105 group"
            >
              Contact Us Now
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerColleges;
