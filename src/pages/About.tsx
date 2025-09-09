import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderImage from "@/assets/prakash-nanjappa.jpg";
import heroImage from "@/assets/about-us-hero.png";
import studentSuccess from "@/assets/student-success.jpg";
import { Target, Award, Trophy, Users, Zap, Heart } from "lucide-react";
import ServicesSection from "@/components/Home/ServicesSection";

export default function About() {
  return (
    <Layout>
      {/* Hero Section (full-width with gradient overlay) */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="PNSA Training Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-prosto">
              Prakash Nanjappa Shooting Academy (PNSA)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 font-inter">
              Where passion meets precision and dreams take flight
            </p>
            <ul className="grid sm:grid-cols-3 gap-4 mb-8">
              <li className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm md:text-base font-inter">Mission-driven training for every athlete</p>
              </li>
              <li className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm md:text-base font-inter">High-performance centre with expert coaching</p>
              </li>
              <li className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm md:text-base font-inter">School collaborations and grassroots programs</p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="orange" size="xl" className="px-8">
                <Link to="/contact">Join Us</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl" className="px-8">
                <Link to="/services">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-pnsa-orange flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-inter">Grass-root development through structured programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-inter">A clear vision towards Olympic podium finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-pnsa-green flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-inter">Holistic fitness and mental strength coaching</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={studentSuccess} 
                alt="PNSA Students Training" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              Our Core Values
            </h2>
            <p className="text-white text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              The foundation of excellence that drives everything we do at PNSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-orange-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Trophy className="w-8 h-8 text-pnsa-orange" />
              </div>
              <h3 className="text-white text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Excellence & Precision</h3>
              <p className="text-white text-gray-600 text-center font-inter leading-relaxed">We pursue precise technique and consistent performance in every session.</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Integrity & Sportsmanship</h3>
              <p className="text-gray-600 text-center font-inter leading-relaxed">We compete with honesty, respect, and commitment to fair play.</p>
            </div>

            <div className="group bg-green-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-green/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Zap className="w-8 h-8 text-pnsa-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Innovation & Growth</h3>
              <p className="text-gray-600 text-center font-inter leading-relaxed">We evolve through data-driven training and modern techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              At PNSA, we have a well-designed program routine that is customized and tailored for every shooter to attain excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-pnsa-orange/10 text-pnsa-orange flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-prosto">Technique & Breathing</h3>
              <p className="text-gray-600 font-inter">Master posture, grip, sight alignment, and breathing for accuracy.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-prosto">Fitness & Mindset</h3>
              <p className="text-gray-600 font-inter">Strength, endurance, and mental conditioning for competitive edge.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-pnsa-green/10 text-pnsa-green flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-prosto">Holistic Support</h3>
              <p className="text-gray-600 font-inter">Nutrition, profiling, and recovery support to sustain peak form.</p>
            </div>
          </div>
        </div>
      </section> */}
      <ServicesSection/>

      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Training at the Prakash Nanjappa Shooting Academy offers several compelling advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-pnsa-orange/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-pnsa-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-prosto">Expert Guidance</h3>
              <p className="text-gray-600 font-inter">Led by Olympian Prakash Nanjappa, with personalized coaching and mentorship.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-prosto">State-of-the-Art Facilities</h3>
              <p className="text-gray-600 font-inter">Advanced ranges, modern equipment, and a high-performance training environment.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-pnsa-green/10 flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-pnsa-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-prosto">Comprehensive Programs</h3>
              <p className="text-gray-600 font-inter">Technical, mental, and competitive training tailored from beginner to pro.</p>
            </div>
          </div>
        </div>
      </section> */}

<section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              Why choose Us
            </h2>
            <p className="text-white text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              The foundation of excellence that drives everything we do at PNSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-orange-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Trophy className="w-8 h-8 text-pnsa-orange" />
              </div>
              <h3 className="text-white text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Excellence & Precision</h3>
              <p className="text-white text-gray-600 text-center font-inter leading-relaxed">We pursue precise technique and consistent performance in every session.</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Integrity & Sportsmanship</h3>
              <p className="text-gray-600 text-center font-inter leading-relaxed">We compete with honesty, respect, and commitment to fair play.</p>
            </div>

            <div className="group bg-green-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-green/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Zap className="w-8 h-8 text-pnsa-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center font-prosto">Innovation & Growth</h3>
              <p className="text-gray-600 text-center font-inter leading-relaxed">We evolve through data-driven training and modern techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pnsa-dark via-gray-900 to-pnsa-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3ccef3e4-f4d0-4ec9-b59d-a787821ebd97.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-prosto">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Join PNSA today and take the first step towards Olympic excellence. Where the pursuit of greatness is not just a goal, but a way of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="orange" size="xl" className="text-lg px-10 py-4">
              <Link to="/contact">Join Our Academy</Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="text-lg px-10 py-4">
              <Link to="/services">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}