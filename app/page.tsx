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
    <div className="min-h-screen selection:bg-blue-500/30">
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-full max-w-7xl"
        >
        <nav className="glass flex w-full items-center justify-between sm:justify-center relative rounded-full px-4 sm:px-6 py-4 shadow-xl">
          <div className="flex space-x-4 sm:space-x-8 text-[10px] sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-widest overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap pr-24 sm:pr-0">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hidden sm:inline-block hover:text-accent transition-colors">Contact</a>
          </div>
          <a href="#contact" className="gradient-blue absolute right-2 sm:right-4 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
            Hire Me
          </a>
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
              <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Full-Stack Developer & <span className="gradient-text italic">3D Designer</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mb-10 text-xl leading-relaxed text-muted max-w-2xl">
                Full Stack Engineer dedicated to crafting high-performance 
                web experiences. Bridging the gap between complex backend systems 
                and pixel-perfect frontend interfaces.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#contact" className="gradient-blue rounded-full px-10 py-4 font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                  Let&apos;s Talk
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
              <div className="relative h-48 w-48 overflow-hidden rounded-3xl lg:h-72 lg:w-72 glass-blue p-2 hover-lift micro-shadow">
                <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full border border-accent/20 bg-accent/10 blur-xl"></div>
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full border border-blue-400/20 bg-blue-500/5 blur-2xl text-accent opacity-20"></div>
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
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">Why to hire me?</h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-accent to-transparent"></div>
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            {[
              {
                title: "Professional Highlights",
                highlights: [
                  "AI-Powered Workflows: Reducing time up to 40%",
                  "Full-Stack Developer",
                  "3D Designer & Creator",
                  "Brand Promoter"
                ]
              }
            ].map((item, i) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={i} 
                className="glass-blue micro-shadow relative rounded-3xl p-10 group overflow-hidden transition-all"
              >


                <ul className="space-y-4">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg font-medium text-muted/90 uppercase tracking-wide">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(20,184,166,0.5)] flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CV Summary Section */}
        <motion.section 
          id="summary" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16 text-accent">
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">CV Summary</h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-accent to-transparent"></div>
          </div>
          <div className="glass-blue hover-lift micro-shadow relative rounded-3xl p-10 lg:p-14 transition-all">

            <div className="relative z-10 space-y-6 text-lg leading-relaxed text-muted">
              <p>
                <strong className="text-foreground">Graduate of the University of the Peloponnese</strong> with a degree in Digital Systems Engineering. My academic background includes programming, object-oriented programming, computer architecture, digital systems design, embedded systems and IoT, control systems, and satellite communications.
              </p>
              <p>
                My thesis focused on the implementation of digital circuits using electromechanical switches and was awarded the highest grade. In addition to my academic studies, I have gained practical experience through part-time professional work and technical equipment repair.
              </p>
              <p>
                I also have hands-on experience with electronic systems, 3D design and 3D printing, which has strengthened my practical understanding of hardware, prototyping, and system functionality.
              </p>
            </div>
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
            <div className="h-[2px] w-full bg-gradient-to-l from-accent to-transparent"></div>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">Education</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                year: "2020 — 2024",
                school: "University of the Peloponnese",
                degree: "University Degree, Computer Hardware Technology/Technician"
              },
              {
                year: "2025",
                school: "Ethnikon kai Kapodistriakon Panepistimion Athinon",
                degree: "AI Developers: Developing Artificial Intelligence Applications with Python and OpenAI API"
              },
              {
                year: "2025",
                school: "Ethnikon kai Kapodistriakon Panepistimion Athinon",
                degree: "Entrepreneurship and Strategy Formulation for the Future in an Environment of Uncertainty"
              },
              {
                year: "2020",
                school: "PADI",
                degree: "Dive Master"
              }
            ].map((edu, i) => (
              <motion.div 
                whileHover={{ scale: 1.01 }}
                key={i} 
                className="glass-blue hover-lift micro-shadow relative rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 transition-all"
              >
                <div className="shrink-0 md:w-40 font-black text-accent tracking-widest">{edu.year}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                  <p className="mt-2 text-base text-muted max-w-2xl">{edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>



        {/* Projects Preview */}
        <motion.section 
          id="projects" 
          className="mb-40 text-accent"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-full bg-gradient-to-l from-accent to-transparent"></div>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">My Creations</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: 'Designer and Creator of Heat Cup', 
                href: "https://heatcup.gr/",
                img: "/heatcup.png",
                desc: "A gadget that keeps your car and your desk clean!",
                tags: ["Product Design", "3D Printing", "IoT"],
                contain: true
              },
              { 
                title: "Car, Motorcycle and Boat Custom parts", 
                desc: "Design and fabrication of specialized 3D-printed and custom-engineered parts for automotive and marine performance.",
                img: "/custom-parts.jpg",
                tags: ["3D Printing", "CAD Design", "Fabrication"] 
              },
              { 
                title: "FPV Drones", 
                desc: "Custom high-performance drone assembly, PID tuning, and specialized FPV cinematography.",
                img: "/fpv-drone.png",
                tags: ["Electronics", "Betaflight", "Fabrication"]
              }
            ].map((project, i) => (
              <a 
                href={project.href || "#"}
                target={project.href ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={i} 
                className="glass-blue hover-lift micro-shadow group h-full rounded-2xl transition-all block overflow-hidden outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-blue-600/20 to-indigo-900/40 p-1">
                  <div className="h-full w-full rounded-xl bg-background/50 flex items-center justify-center backdrop-blur-sm overflow-hidden border border-white/5 group-hover:bg-background/20 transition-all duration-300">
                    {project.img ? (
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.contain ? 'object-contain p-8' : 'object-cover'}`} 
                      />
                    ) : (
                      <div className="relative group-hover:scale-110 transition-transform duration-500 font-bold opacity-30 text-accent italic">
                        PREVIEW 0{i + 1}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title.includes("Heat Cup") ? (
                      <>
                        Designer and Creator of <span className="underline decoration-accent/30 decoration-2 underline-offset-4 group-hover:decoration-orange-500 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all text-accent font-black">Heat Cup</span>
                      </>
                    ) : project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{project.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-lg bg-accent/5 border border-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
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
            <h2 className="mb-6 text-5xl font-black tracking-tighter sm:text-7xl">Let&apos;s build the <br/> future together.</h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-blue-100/80 font-medium">
              I&apos;m open to interesting collaborations and senior opportunities. 
              My inbox is always open.
            </p>
            <a href="mailto:alex.kr02dev@gmail.com" className="inline-block rounded-full bg-white px-14 py-5 font-black text-blue-600 shadow-xl hover:scale-110 hover:shadow-white/20 active:scale-95 transition-all text-xl uppercase tracking-widest">
              Get In Touch
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border/50 py-16 flex flex-col items-center justify-center gap-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted">
        <a 
          href="https://www.linkedin.com/in/alexandros-kartelias-9aa332389/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-accent hover:text-accent-secondary transition-transform duration-300 hover:scale-125"
        >
          <span className="sr-only">LinkedIn</span>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
        <p>© {new Date().getFullYear()} • Maria • Crafted with Passion</p>
      </footer>
    </div>
  );
}
