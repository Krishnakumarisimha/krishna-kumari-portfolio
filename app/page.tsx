"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white relative scroll-smooth">

      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[160px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-[#D4AF37]">
            Krishna Kumari
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

            <a href="#home" className="hover:text-[#D4AF37] transition">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
            <a href="#journey" className="hover:text-[#D4AF37] transition">Journey</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition">Skills</a>
            <a href="#career" className="hover:text-[#D4AF37] transition">Career Journey</a>
            <a href="#featured" className="hover:text-[#D4AF37] transition">Featured Work</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition">Testimonials</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center pt-32 px-6">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
              Krishna Kumari
            </h1>

            <p className="text-[#D4AF37] text-2xl mb-8">
              Professional Resume & Portfolio Strategist
            </p>

            <p className="text-gray-400 leading-9 text-lg max-w-3xl mb-10">
              Helping professionals build impactful careers with strategic resumes, LinkedIn branding, and ATS-optimized career solutions.
              <br /><br />
              I help professionals articulate their achievements with clarity and structure, transforming profiles into powerful tools that attract interview opportunities.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
            
             <a
  href="#featured"
  className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
>
  View My Service
</a>
              <a
                href="#contact"
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Contact Me
              </a>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
                <h2 className="text-5xl font-bold text-[#D4AF37]">335+</h2>
                <p className="text-gray-400 mt-3">Projects Handled</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
                <h2 className="text-5xl font-bold text-[#D4AF37]">9+</h2>
                <p className="text-gray-400 mt-3">Years</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
                <h2 className="text-5xl font-bold text-[#D4AF37]">6k+</h2>
                <p className="text-gray-400 mt-3">Followers</p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">About You</p>
            <h2 className="text-5xl font-bold leading-tight">Building Powerful Career Identities</h2>
          </div>

          <p className="text-gray-400 leading-9 mb-8">
            I am a Resume Writing & Personal Branding Strategist with 9+ years of experience helping professionals build strong, impactful career identities in competitive global job markets.
          </p>

          <p className="text-gray-400 leading-9 mb-8">
            I specialize in crafting ATS-optimized resumes, transforming LinkedIn profiles, designing professional portfolios, and developing strategic personal branding narratives that clearly communicate value, achievements, and career growth.
          </p>

          <p className="text-gray-400 leading-9 mb-8">
            Over the years, I have worked with 335+ clients across India, UAE, USA, Canada, Australia, Europe, and the Gulf region, supporting successful job transitions, interview shortlisting, career upgrades, and international opportunities.
          </p>

          <p className="text-gray-400 leading-9 mb-8">
            My approach combines strategy, storytelling, and design to create career documents that not only look professional but also deliver measurable results.
          </p>

        </div>

      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">
            <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">My Journey</p>
            <h2 className="text-5xl font-bold leading-tight">
              From Curiosity To Career Branding Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">

            <div className="sticky top-32">
              <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src="/profile.jpeg"
                  alt="Krishna Kumari"
className="w-full h-[500px] object-cover object-top rounded-[40px] border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(212,175,55,0.15)]"                />
              </div>
            </div>

            <div>

              <p className="text-gray-400 leading-9 mb-8">
                My journey in career branding started with a strong interest in understanding how professionals can better communicate their value. While helping colleagues and friends improve their resumes and portfolios, I noticed how small changes in structure, wording, and presentation could significantly improve their confidence and career outcomes. This curiosity gradually turned into a dedicated path in resume writing and personal branding.
              </p>

              <p className="text-gray-400 leading-9">
                Over time, I gained deeper expertise in ATS optimization, industry expectations, and strategic presentation of professional experience. Today, I combine ATS strategy, design thinking, research, and storytelling to create resumes and portfolios that not only present qualifications but also position professionals for stronger career growth and global opportunities. I strongly believe every career has a unique story, and when shaped effectively, it can open entirely new paths.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-24">

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl">
              <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
                Core Mission
              </p>

              <h3 className="text-3xl font-bold mb-6">
                Purpose Driven Professional Branding
              </h3>

              <p className="text-gray-400 leading-9">
                I work with brands and individuals to transform ideas into high-impact digital products through thoughtful design, clean development, and human-centered problem solving. Every experience is built with precision, clarity, and purpose.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl">
              <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
                Future Vision
              </p>

              <h3 className="text-3xl font-bold mb-6">
                Designing Meaningful Digital Experiences
              </h3>

              <p className="text-gray-400 leading-9">
                A world where technology aligns seamlessly with human intent, creating intuitive and meaningful digital experiences. I design with the belief that simplicity, purpose, and empathy are the foundation of truly impactful digital products.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">Skills</p>

            <h2 className="text-5xl font-bold leading-tight">
              Expertise & Professional Strengths
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "ATS Resume Writing",
                desc: "Crafting optimized resumes tailored to Applicant Tracking Systems to improve visibility and increase interview opportunities.",
              },
              {
                title: "LinkedIn Optimization",
                desc: "Enhancing LinkedIn profiles with strategic keywords, impactful content, and professional positioning to attract recruiters and opportunities.",
              },
              {
                title: "Portfolio Design",
                desc: "Designing clean, structured, and visually compelling digital portfolios that effectively showcase skills, achievements, and career identity.",
              },
              {
                title: "Personal Branding",
                desc: "Building strong professional identities through strategic storytelling, positioning, and presentation across career platforms.",
              },
              {
                title: "Career Strategy",
                desc: "Guiding professionals with structured career planning, transition strategies, and growth-focused positioning for better opportunities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-[#D4AF37]/40 transition"
              >
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CAREER JOURNEY */}
      <section id="career" className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-24">
            <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
              Career Journey
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Professional Growth & Career Evolution
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 space-y-20">

            {/* EDUCATION */}
            <div className="ml-10 relative">

              <div className="absolute -left-[52px] top-2 w-6 h-6 rounded-full bg-[#D4AF37]"></div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">

                <p className="text-[#D4AF37] mb-4">2022 - 2024</p>

                <h3 className="text-3xl font-bold mb-4">
                  Master Of Computer Application
                </h3>

                <p className="text-gray-400 leading-8 mb-4">
                  Vikram Simhapuri University
                </p>

                <p className="text-gray-400 leading-8">
                  Graduated with consistent high performance throughout the program.
                </p>

              </div>

            </div>

            {/* EXPERIENCE */}
            <div className="ml-10 relative">

              <div className="absolute -left-[52px] top-2 w-6 h-6 rounded-full bg-[#D4AF37]"></div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">

                <p className="text-[#D4AF37] mb-4">2017 - Present</p>

                <h3 className="text-3xl font-bold mb-4">
                  Professional Resume Strategist
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  HRA Solutions
                </p>

                <p className="text-gray-400 leading-9 mb-6">
                  I specialize in delivering high-impact, strategically crafted career branding solutions for professionals across diverse industries and career levels. My work focuses on elevating personal branding through precision, clarity, and ATS-aligned storytelling.
                </p>

                <div className="mb-8">

                  <h4 className="text-[#D4AF37] font-semibold mb-4">
                    Core Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Resume Architecture
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Cover Letter Strategy
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      LinkedIn Brand Optimization
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Portfolio Design
                    </span>

                  </div>

                </div>

                <div>

                  <h4 className="text-[#D4AF37] font-semibold mb-4">
                    Impact & Contributions
                  </h4>

                  <ul className="space-y-4 text-gray-400 leading-8 list-disc pl-5">

                    <li>
                      Crafted ATS-optimized, industry-specific resumes designed to enhance recruiter visibility and interview conversions
                    </li>

                    <li>
                      Developed compelling, role-aligned cover letters that effectively communicate professional value and intent
                    </li>

                    <li>
                      Transformed LinkedIn profiles into powerful personal branding assets to increase engagement and opportunity reach
                    </li>

                    <li>
                      Delivered end-to-end career branding solutions within accelerated timelines, maintaining quality and precision
                    </li>

                  </ul>

                </div>

              </div>

            </div>

            {/* PROJECTS */}
            <div className="ml-10 relative">

              <div className="absolute -left-[52px] top-2 w-6 h-6 rounded-full bg-[#D4AF37]"></div>

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-10">

                <p className="text-[#D4AF37] mb-4">2017 – Present</p>

                <h3 className="text-3xl font-bold mb-4">
                  Global Career Branding Services for Professionals
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  Client Projects
                </p>

                <p className="text-gray-400 leading-9 mb-6">
                  I provide high-impact, personalized career branding solutions designed to elevate professional identity and improve global career opportunities. My work focuses on strategic resume writing, persuasive cover letters, LinkedIn optimization, and portfolio development tailored to industry standards and recruiter expectations.
                </p>

                <div className="mb-8">

                  <h4 className="text-[#D4AF37] font-semibold mb-4">
                    Core Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Resume Writing
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Cover Letters
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      LinkedIn Optimization
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
                      Portfolio Design
                    </span>

                  </div>

                </div>

                <div>

                  <h4 className="text-[#D4AF37] font-semibold mb-4">
                    Impact & Achievements
                  </h4>

                  <ul className="space-y-4 text-gray-400 leading-8 list-disc pl-5">

                    <li>
                      Successfully delivered tailored career branding solutions to 335+ clients worldwide
                    </li>

                    <li>
                      Enhanced client career prospects through ATS-optimized resumes and strategic positioning
                    </li>

                    <li>
                      Built strong professional LinkedIn profiles to improve visibility and recruiter engagement
                    </li>

                    <li>
                      Designed visually compelling portfolios aligned with personal branding goals
                    </li>

                    <li>
                      Maintained a consistent 5/5 client satisfaction rating across all services
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
       {/* FEATURED WORK */}
<section
  id="featured"
  className="py-32 px-6 scroll-mt-40"
>
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
        Featured Work
      </p>

      <h2 className="text-5xl font-bold mb-8">
        Curated Career Branding Projects
      </h2>

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Strategic Resume Writing Services",
          img: "/resume.png",
          desc:
            "ATS-optimized, role-specific resumes designed to highlight achievements, improve recruiter visibility, and increase interview chances.",
          tags: [
            "ATS Optimization",
            "Role Customization",
            "Achievement Focus",
            "Professional Formatting",
          ],
        },

        {
          title: "Professional Portfolio Design",
          img: "/portfolio.png",
          desc:
            "Clean, structured, and visually compelling portfolios that present skills, experience, and achievements with clarity.",
          tags: [
            "Portfolio Design",
            "Case Study Layout",
            "Visual Storytelling",
            "UI Structure",
          ],
        },

        {
          title: "LinkedIn Branding & Optimization",
          img: "/linkedin.png",
          desc:
            "LinkedIn profile transformation using keyword strategy, branding, and recruiter-focused positioning.",
          tags: [
            "Profile Branding",
            "Keyword Strategy",
            "Headline Optimization",
            "Visibility Growth",
          ],
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-xl hover:border-[#D4AF37]/40 hover:-translate-y-2 transition duration-300"
        >

          {/* IMAGE */}
          <div className="h-64 w-full overflow-hidden relative group">

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

          </div>

          {/* CONTENT */}
          <div className="p-10">

            {/* TITLE */}
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-8 mb-6">
              {item.desc}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">

              {item.tags.map((tag, i) => (

                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs text-[#D4AF37]"
                >
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* TESTIMONIALS */}
<section id="testimonials" className="py-32 px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
        Testimonials
      </p>

      <h2 className="text-5xl font-bold leading-tight mb-10">
        Client Recommendations
      </h2>

      <p className="text-gray-400 leading-9 text-lg max-w-3xl mx-auto">
        Genuine recommendations and feedback shared by professionals
        across resume writing, LinkedIn optimization, and portfolio services.
      </p>

    </div>

    {/* AUTO SCROLL */}
    <div className="relative overflow-hidden">

      <motion.div
  className="flex gap-8 animate-scroll"
  animate={{ x: [0, -2200] }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
>
        {[
          "/rec1.png",
          "/rec2.png",
          "/rec3.png",
          "/rec4.png",
          "/rec1.png",
          "/rec2.png",
          "/rec3.png",
          "/rec4.png",
        ].map((img, index) => (

          <div
  key={index}
  className="min-w-[850px] bg-white rounded-[30px] overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] flex items-center justify-center p-4"
>

  <img
  src={img}
  alt="Client Recommendation"
  className="w-full h-auto rounded-[30px] object-contain border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition duration-500"
/>
</div>

        ))}

      </motion.div>

    </div>

  </div>

</section>
     {/* CONTACT */}
<section id="contact" className="py-32 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

    {/* LEFT SIDE */}
    <div>

      <p className="text-[#D4AF37] uppercase tracking-[5px] mb-5">
        Let’s Work Together
      </p>

      <h2 className="text-5xl font-bold leading-tight mb-10">
        Build Your Professional Brand
      </h2>

      <p className="text-gray-400 leading-9 mb-10">
        I work with professionals to craft strategic resumes, impactful
        LinkedIn profiles, and refined portfolios that strengthen visibility
        and unlock better career opportunities.
      </p>

      <div className="space-y-8">

        {/* BOX 1 */}
        <div>

          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">
            Strategic ATS Resume Writing
          </h3>

          <p className="text-gray-400 leading-8">
            Crafting optimized, role-specific resumes that highlight
            achievements, improve recruiter visibility, and pass ATS systems
            effectively.
          </p>

        </div>

        {/* BOX 2 */}
        <div>

          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">
            Professional Cover Letter Development
          </h3>

          <p className="text-gray-400 leading-8">
            Designing personalized and persuasive cover letters tailored to
            job roles and career goals.
          </p>

        </div>

        {/* BOX 3 */}
        <div>

          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">
            LinkedIn Profile Optimization & Branding
          </h3>

          <p className="text-gray-400 leading-8 mb-10">
            Enhancing LinkedIn profiles with strong positioning, keyword
            strategy, and impactful content.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-6 relative z-50">

            {/* LOCATION */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xl">
                📍
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">
                  Location
                </h3>

                <p className="text-gray-400 leading-7">
                  Bengaluru, India (Open to Remote Opportunities Worldwide)
                </p>
              </div>

            </div>

           {/* EMAIL */}
<div className="flex items-start gap-4">

  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xl shrink-0">
    ✉️
  </div>

  <div>
    <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">
      Email
    </h3>

    <a
      href="mailto:krishnakumarisimha29@gmail.com"
      className="text-gray-400 hover:text-[#D4AF37] hover:underline transition cursor-pointer"
    >
      krishnakumarisimha29@gmail.com
    </a>
  </div>

</div>

{/* LINKEDIN */}
<div className="flex items-start gap-4">

  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xl shrink-0">
    💼
  </div>

  <div>
    <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">
      LinkedIn
    </h3>

    <a
      href="https://www.linkedin.com/in/krishna-kumari-simha/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#D4AF37] hover:underline transition cursor-pointer"
    >
      linkedin.com/in/krishna-kumari-simha
    </a>
  </div>

</div>
          </div>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

      <h2 className="text-4xl font-bold mb-8">
        Build Your Professional Brand
      </h2>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

        <input
          type="text"
          placeholder="Service Type"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

       <textarea
  rows={7}
  placeholder="Project Details"
  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-[#D4AF37] resize-none"
></textarea>

<button
  type="submit"
  className="bg-[#D4AF37] text-black px-12 py-4 rounded-full font-semibold hover:scale-105 transition mt-4"
>
  Submit
</button>

      </form>

    </div>

  </div>

</section>
 {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Krishna Kumari Simha. All Rights Reserved.
      </footer>

    </main>
  );
}
