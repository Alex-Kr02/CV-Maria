"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#0a0a0c] text-zinc-100 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')", backgroundAttachment: 'fixed' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0a0c]/80 via-transparent to-[#0a0a0c] pointer-events-none" />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-full max-w-7xl"
        >
        <nav className="glass flex w-full items-center justify-between relative rounded-full px-4 sm:px-8 py-4 shadow-xl border border-white/5">
          <div className="flex items-center">
            <span className="inline-block font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold bg-linear-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent italic tracking-tighter py-2 pr-4">Maria.M</span>
          </div>
          <div className="flex space-x-4 sm:space-x-8 text-[10px] sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-widest overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap px-4 sm:px-0">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#contact" className="hidden sm:inline-block hover:text-accent transition-colors">Contact</a>
          </div>
          <div className="flex items-center">
            <a href="#contact" className="gradient-blue rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
              Hire Me
            </a>
          </div>
        </nav>
        </motion.div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          id="about" 
          className="relative mb-40 lg:mb-52 pt-10"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                <span className="inline-block font-[family-name:var(--font-playfair)] bg-linear-to-r from-orange-400 via-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent italic leading-tight py-4 pr-6">Marketing Manager</span> 
                <span className="inline-block font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl bg-linear-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 font-bold leading-relaxed py-4 pr-6">& Social Media Specialist</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mb-10 text-xl leading-relaxed text-muted max-w-2xl">
                Strategic marketing leader with a passion for building brands and 
                driving engagement across digital platforms. Specializing in 
                growth strategy, content creation, and team leadership.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#contact" className="gradient-blue rounded-full px-10 py-4 font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                  Get In Touch
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-blue rounded-full px-8 py-4 font-bold text-white hover:bg-white/10 transition-all flex items-center gap-3 border border-white/5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </motion.div>
            </div>

            {/* Profile Photo - Upper Right */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="relative shrink-0 self-end lg:self-center"
            >
              <div className="relative w-64 h-80 overflow-hidden rounded-[2.5rem] lg:w-[420px] lg:h-[560px] glass-blue p-2 hover-lift micro-shadow">
                <div className="h-full w-full overflow-hidden rounded-[2rem] bg-zinc-800">
                  <Image
                    src="/profile_maria.jpg"
                    alt="Maria - Marketing Manager"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full border border-accent/20 bg-accent/10 blur-xl"></div>
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border border-blue-400/20 bg-blue-500/5 blur-2xl opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="mb-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16 text-accent">
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">Work History</h2>
            <div className="h-[px] w-full bg-gradient-to-r from-accent to-transparent"></div>
          </div>
          <div className="space-y-12">
            {[
              {
                role: "Senior Marketing Manager",
                company: "Global Creative Agency",
                period: "2022 — Present",
                desc: "Leading multi-channel marketing campaigns and social media strategy for premium brands. Managing a team of 5 creatives and overseeing $500k+ annual budgets."
              },
              {
                role: "Social Media Strategist",
                company: "TechPulse Startups",
                period: "2020 — 2022",
                desc: "Developed and executed organic and paid social media growth strategies, resulting in a 150% increase in cross-platform engagement."
              },
              {
                role: "Marketing Specialist",
                company: "Pulse Media",
                period: "2018 — 2020",
                desc: "Coordinated content calendars and digital advertising for local businesses, focusing on lead generation and brand awareness."
              }
            ].map((job, i) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={i} 
                className="glass-blue micro-shadow relative rounded-3xl p-10 group overflow-hidden transition-all border border-white/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{job.role}</h3>
                    <p className="text-accent font-medium mt-1">{job.company}</p>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-muted">{job.period}</span>
                </div>
                <p className="mt-6 text-muted leading-relaxed max-w-3xl">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education" 
          className="mb-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16 text-accent">
            <div className="h-[1px] w-full bg-gradient-to-l from-accent to-transparent"></div>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase text-right">Academic History</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                year: "2016 — 2018",
                school: "London School of Marketing",
                degree: "Master of Arts in Strategic Marketing"
              },
              {
                year: "2012 — 2016",
                school: "Boston University",
                degree: "Bachelor of Science in Business Administration"
              },
              {
                year: "2019",
                school: "Meta Blueprint",
                degree: "Certified Digital Marketing Associate"
              },
              {
                year: "2020",
                school: "Google Digital Academy",
                degree: "Advanced Google Analytics Certification"
              }
            ].map((edu, i) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={i} 
                className="glass-blue hover-lift micro-shadow relative rounded-2xl p-8 transition-all border border-white/5"
              >
                <div className="text-accent font-black tracking-widest mb-4">{edu.year}</div>
                <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                <p className="mt-2 text-muted">{edu.degree}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Landing Card */}
        <motion.section 
          id="contact" 
          className="gradient-blue rounded-[3rem] p-16 text-center text-white shadow-2xl shadow-blue-500/40 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] transition-transform duration-1000 group-hover:scale-150"></div>
          <div className="relative z-10">
            <h2 className="mb-6 text-5xl font-black tracking-tighter sm:text-7xl">Let&apos;s build your <br/> brand together.</h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-blue-100/80 font-medium">
              Ready to take your marketing to the next level? I&apos;m currently open to new 
              projects and management opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <a href="mailto:maria@example.com" className="inline-block rounded-full bg-white px-14 py-5 font-black text-blue-600 shadow-xl hover:scale-110 hover:shadow-white/20 active:scale-95 transition-all text-xl uppercase tracking-widest">
                Get In Touch
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all group/link"
              >
                <svg className="w-10 h-10 fill-current text-white/80 group-hover/link:text-white group-hover/link:scale-110 transition-all" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 py-16 flex flex-col items-center justify-center gap-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted">
        <div className="flex gap-8 items-center mb-4">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors underline decoration-accent underline-offset-8">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()} • Maria Portfolio • Strategic Marketing Management</p>
      </footer>
    </div>
  );
}
