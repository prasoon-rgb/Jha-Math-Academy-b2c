import { LeadForm } from "@/components/LeadForm";
import { BookOpen, MapPin, Award, Users, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "@assets/PKJ_profile_pic_1771634929977.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-display font-bold text-slate-900">Jha Tutorials</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about-teacher" className="hover:text-primary transition-colors">The Teacher</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#features" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="#register" className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Admissions Open for Grade 9
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Master Math with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Confidence</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Jha Tutorials offers premier mathematics coaching for Grade 9 students in Bokaro Steel City. 
                Focusing on CBSE curriculum with personalized attention to build a strong foundation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#register" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Register Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Image Grid with Overlay Card */}
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-primary rounded-[2rem] opacity-10 rotate-3 transform scale-95" />
                
                {/* Main Hero Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* classroom math studying */}
                  <img 
                    src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Students studying mathematics" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Sector 4, Bokaro Steel City</p>
                    <p className="text-white/80 text-sm">Premier Learning Center</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Top Results</p>
                    <p className="text-xs text-slate-500">Consistent Performance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why Choose Jha Tutorials?</h2>
            <p className="text-slate-600">
              We don't just teach mathematics; we build a mathematical mindset that helps students excel in their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Focused Curriculum</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialized coaching for Grade 9 Mathematics, primarily focusing on CBSE board syllabus while covering key concepts for competitive exams.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Attention</h3>
              <p className="text-slate-600 leading-relaxed">
                Small batch sizes ensure every student gets the attention they need. We identify weak areas and work on them individually.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Prime Location</h3>
              <p className="text-slate-600 leading-relaxed">
                Conveniently located in Sector 4, Bokaro Steel City. Safe and accessible learning environment for all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Teacher Section */}
      <section id="about-teacher" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={profilePic} 
                  alt="Prasoon Jha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">10+ Years</p>
                <p className="text-sm opacity-90">Teaching Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Meet Your Mentor: <span className="text-primary">Prasoon Jha</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over a decade of experience in teaching Mathematics, Prasoon Jha has helped hundreds of students in Bokaro Steel City overcome their fear of numbers and excel in their board exams.
                </p>
                <p>
                  A distinguished academician, he was the <strong>IIT JEE topper from Bokaro Steel City in 1993</strong>, bringing top-tier problem-solving expertise to his students.
                </p>
                <p>
                  His teaching philosophy centers on "Conceptual Mastery" rather than just solving problems. He believes that once a student understands the 'Why' behind a mathematical concept, the 'How' becomes second nature.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900">Expertise</p>
                    <p className="text-sm">Grade 9 Mathematics</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900">Focus</p>
                    <p className="text-sm">CBSE Specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Details / About */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* student writing math */}
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Student solving math problems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Building Strong Foundations
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Mathematics in Grade 9 forms the basis for higher secondary education. Our methodology focuses on conceptual clarity rather than rote learning.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Comprehensive coverage of NCERT",
                  "Regular practice sheets and assessments",
                  "Doubt clearing sessions",
                  "English medium instruction",
                  "Board exam preparation strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Excel in Mathematics?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-lg">
                Secure your spot today. Fill out the form to register your interest, and we will get back to you with batch timings and fee details.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-sm text-slate-400">Sector 4, Bokaro Steel City, Jharkhand</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/90">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Courses</p>
                    <p className="text-sm text-slate-400">Grade 9 Mathematics (CBSE/ICSE)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-display font-bold text-white">Jha Tutorials</span>
            <p className="text-sm mt-2">Empowering students through mathematics.</p>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Jha Tutorials. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
