"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  Mail, Github, Linkedin, Calendar, MapPin, 
  ExternalLink, GraduationCap, Award, BookOpen, 
  Code2, Smartphone, Database, Layers, CheckCircle2,
  Trophy, Download
} from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Select all elements with the class 'reveal-up' and animate them on scroll
    const elements = gsap.utils.toArray('.reveal-up') as HTMLElement[];
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // trigger when the top of the element hits 85% of the viewport height
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Staggered reveal for grid items
    const grids = gsap.utils.toArray('.stagger-grid') as HTMLElement[];
    grids.forEach((grid) => {
      const items = grid.querySelectorAll('.stagger-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen text-gray-200 selection:bg-cyan-500/30 font-sans">
      
      {/* Navigation (Sticky) */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b-0 border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all bg-black/20 backdrop-blur-md">
        <div className="text-xl font-bold tracking-tighter text-white">S<span className="text-cyan-400">FAV</span></div>
        <div className="flex gap-4">
          <a href="https://github.com/SalmanFarisAV" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/salman-faris-av/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>

      <main className="relative w-full max-w-6xl mx-auto px-6 py-24 lg:px-12 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center mt-10">
          <div className="max-w-4xl border-l-4 border-cyan-500 pl-6 md:pl-10 py-4 reveal-up">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-lg">
              Salman <br/> Faris A V.
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-300 max-w-2xl leading-relaxed mb-10">
              I build <span className="text-white font-semibold">robust backend systems</span> and craft 
              <span className="text-white font-semibold"> elegant modern frontends</span> utilizing Flutter & React.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:salmanktd3@gmail.com" className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <Mail className="w-5 h-5" />
                Let's Talk
              </a>
              <a 
                href="/MyPortfolio/salman_faris_resume.pdf" 
                download="Salman_Faris_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 border border-white/10"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                Resume
              </a>
              <a href="#projects" className="flex items-center gap-3 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 border border-white/10 hidden md:flex">
                View My Work
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT & SKILLS BENTO GRID */}
        <section className="flex flex-col gap-10 reveal-up">
          <div className="flex items-center gap-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">About & Expertise</h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-grid">
            {/* Intro Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-white/10 stagger-item hover:bg-white/[0.03] transition-colors">
              <h4 className="text-2xl font-bold text-white mb-4">Professional Summary</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am an enthusiastic Computer Science Engineering student skilled in <span className="text-cyan-400">Python, C, and Java</span>. 
                Proficient in front-end technologies like React, Flutter, HTML, and CSS, with a strong design sense. 
                Experienced in web and mobile app development, including back-end technologies such as Firebase and Strapi. 
                Eager to apply my skills in both front-end and back-end development to deliver quality solutions driven by Clean Architecture.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="glass rounded-3xl p-8 border border-white/10 stagger-item flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-6">Core Focus</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300"><Smartphone className="w-5 h-5 text-cyan-400" /> Flutter Development</li>
                <li className="flex items-center gap-3 text-gray-300"><Code2 className="w-5 h-5 text-cyan-400" /> Web Development</li>
                <li className="flex items-center gap-3 text-gray-300"><Database className="w-5 h-5 text-cyan-400" /> Database Management</li>
                <li className="flex items-center gap-3 text-gray-300"><Layers className="w-5 h-5 text-cyan-400" /> REST APIs & Arch.</li>
              </ul>
            </div>

            {/* Soft Skills & Tools */}
            <div className="md:col-span-3 glass rounded-3xl p-8 border border-white/10 stagger-item">
              <h4 className="text-xl font-bold text-white mb-6">Toolkit & Interpersonal</h4>
              <div className="flex flex-wrap gap-3">
                {['Git', 'Graphic Designing', 'Leadership', 'Test Driven Development', 'Creativity', 'Flexibility', 'Teamwork'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="flex flex-col gap-10 reveal-up">
          <div className="flex items-center gap-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Experience</h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12 stagger-grid">
            
            <div className="relative pl-8 md:pl-12 stagger-item group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Software Development Engineer</h4>
                <span className="text-cyan-400 font-mono text-sm bg-cyan-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 table">May 2025 - Present</span>
              </div>
              <p className="text-lg text-gray-400 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Servespace · Bangalore, Karnataka</p>
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▹</span> Engineers scalable, cross-platform mobile applications using Flutter/Dart with Clean Architecture.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▹</span> Orchestrates server integration and designs robust middleware logic to manage secure data synchronization.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▹</span> Manages full app lifecycle, rigourous widget testing, and CI/CD releases to Apple and Google Play Stores.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▹</span> Drives app stability resolving critical bugs and leveraging analytics tracking.</li>
              </ul>
            </div>

            <div className="relative pl-8 md:pl-12 stagger-item group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Flutter Intern</h4>
                <span className="text-blue-400 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 table">Dec 2024 - Mar 2025</span>
              </div>
              <p className="text-lg text-gray-400 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Karippal Innovations · Trissur, Kerala</p>
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">▹</span> Collaborated on building UI/UX designs and feature implementations for mobile applications.</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">▹</span> Managed client requests and backend server integrations for seamless app performance.</li>
              </ul>
            </div>

            <div className="relative pl-8 md:pl-12 stagger-item group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500 group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">Web Development Intern</h4>
                <span className="text-gray-400 font-mono text-sm bg-white/10 px-3 py-1 rounded-full mt-2 md:mt-0 table">Jan 2022 - Feb 2022</span>
              </div>
              <p className="text-lg text-gray-400 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> StartKey Solutions · Trissur, Kerala</p>
              <ul className="space-y-2 text-gray-300 list-none">
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-1">▹</span> Maintained core web services and wrote efficient code using best practices.</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-1">▹</span> Collaborated with developers to create an educational website.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="flex flex-col gap-10 reveal-up scroll-mt-24">
          <div className="flex items-center gap-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Selected Projects</h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 stagger-grid">
            
            {/* Project 1 */}
            <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col group stagger-item hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-500">Aug '24 - Apr '25</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Automated Exam Paper Evaluation</h4>
              <p className="text-gray-400 flex-grow leading-relaxed">
                [Main Project] AI-powered system automating handwritten exam evaluation. Utilizes DTrOCR for handwriting recognition and GPT-based NLP models for semantic context-aware grading and feedback mapping.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">AI/ML</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">OCR & NLP</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col group stagger-item hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-rose-500/20 rounded-2xl text-rose-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-500">Jan '24 - May '24</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Emergency Response Network</h4>
              <p className="text-gray-400 flex-grow leading-relaxed">
                Flutter app utilizing motion sensor data for automated accident detection and real-time signal transmission to the nearest responders. Demonstrated advanced real-time database management.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Flutter</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Sensors</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col group stagger-item hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-500">Dec '24 - Jan '25</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Restaurant Menu App</h4>
              <p className="text-gray-400 flex-grow leading-relaxed">
                Flutter-based app with an intuitive UI/UX and a Strapi backend. Features health-conscious recommendations tailored to user dietary preferences and active engagement.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Flutter</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Strapi CMS</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col group stagger-item hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-500">Aug '23 - Dec '23</span>
              </div>
              <a href="https://dbms-hms.web.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-2xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors">
                HMS (Hotel Management) <ExternalLink className="w-5 h-5" />
              </a>
              <p className="text-gray-400 flex-grow leading-relaxed">
                Comprehensive hotel management system built utilizing React and Firebase. Meticulously designed relational database architecture with a functional live deployment.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Firebase</span>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal-up mb-20">
          
          {/* Education */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl flex items-center gap-3 font-bold text-white"><GraduationCap className="w-8 h-8 text-cyan-400" /> Education</h3>
            <div className="glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
              <h4 className="text-xl font-bold text-white">B.Tech in Computer Science & Engineering</h4>
              <p className="text-cyan-400 text-sm mb-2 mt-1">Sreepathy Institute of Management and Technology (SIMAT) · Dec 2021 - Mar 2025</p>
              <p className="text-gray-300 font-medium">CGPA: 7.62/10</p>
              <p className="text-gray-500 text-sm mt-1">Vavanoor, Palakkad</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <h4 className="text-xl font-bold text-white">Pre-University Education</h4>
              <p className="text-blue-400 text-sm mb-2 mt-1">Govt. Higher Secondary School Chathanur · Jun 2019 - Apr 2021</p>
              <p className="text-gray-300 font-medium">Grade: 83%</p>
              <p className="text-gray-500 text-sm mt-1">Chathanur, Palakkad</p>
            </div>
          </div>

          {/* Accolades */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl flex items-center gap-3 font-bold text-white"><Trophy className="w-7 h-7 text-amber-400" /> Honors & Publications</h3>
            
            <div className="glass p-6 rounded-3xl border border-white/10">
              <h4 className="text-lg font-bold text-white flex items-center gap-2"><Award className="w-5 h-5 text-amber-400" /> Hackathon Victories</h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-200">1st Place - InApp Innovate Hackathon '25</span>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">Jan 2025</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Developed Early Epilepsy Prediction & Alerting System using EEG monitoring in 30 hours.</p>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-200">Winner - Tech Pulse Hackathon '25</span>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">Feb 2025</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">"Beyond Experience" Category for KisanX, an AI-driven smart farming application.</p>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/10">
              <h4 className="text-lg font-bold text-white flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-400" /> Key Publication</h4>
              <div className="mt-4">
                <p className="font-medium text-gray-200 text-sm leading-relaxed">
                  Emergency Response Network Using Motion Sensors & Adaptive Location-Based Power Management
                </p>
                <p className="text-xs text-purple-400 mt-2">Published in CEMC2024 proceedings (IDES and Grenze Scientific Society)</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-3xl border border-white/10">
              <h4 className="text-lg font-bold text-white">Certifications</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">IEEE XTREME 16.0 (Global Rank ~2000)</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">NPTEL: Problem Solving in C</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">NPTEL: Joy of Computing using Python</span>
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative mt-auto border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8 px-6 text-center reveal-up">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Let's build something phenomenal.</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:salmanktd3@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" /> salmanktd3@gmail.com
            </a>
            <span className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" /> Pattambi, Kerala, India
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            © {new Date().getFullYear()} Salman Faris A V. All rights reserved. <br/>
            Designed with Next.js, Tailwind CSS, GSAP, and 🖤.
          </p>
        </div>
      </footer>
    </div>
  );
}
