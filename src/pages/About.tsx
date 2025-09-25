import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderImage from "@/assets/prakash-nanjappa.jpg";
import studentSuccess from "@/assets/student-success.jpg";
import topright from "@/assets/top_right.png";
import bottomleft from "@/assets/bottom_left.png";
import { Target, Award, Trophy, Users, Zap, Heart } from "lucide-react";
import ServicesSection from "@/components/Home/ServicesSection";
import abouthero from "@/assets/about-us-hero.png"

export default function About() {
  return (
    <Layout>
      {/* Hero Section - Background image with centered overlay card */}
      {/* <section className="relative  w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${abouthero})` }}>
        <div className="relative bg-white shadow-xl max-w-4xl w-[90%] md:w-full mx-4">
          <div className="bg-orange-600 p-8 md:p-12 text-center text-white">
            <h1 className="text-2xl md:text-3xl font-bold">PNSA</h1>
            <div className="w-16 h-0.5 bg-white mx-auto my-4"></div>
            <p className="text-sm md:text-base leading-relaxed">
              Welcome to the Prakash Nanjappa Shooting Academy (PNSA), where passion meets precision and dreams take flight. Founded in 2018 by the esteemed Olympian and Arjuna Awardee, Prakash Nanjappa, PNSA stands as a beacon of relentless dedication towards the growth of shooting sports in our country.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              At PNSA, our mission is clear: to unearth and nurture young talents, molding them into future Olympic champions. Our state-of-the-art facility, equipped with cutting-edge weapons and technology, sets the stage for excellence. Located in Coffee Board Layout, our high-performance centre is a hub of talent and determination.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Over the years, PNSA has proudly produced several international and national-level players, showcasing the efficacy of our training programs and coaching staff. But our reach extends beyond our academy walls. We collaborate with schools to provide shooting facilities and coaching, helping set up shooting ranges and fostering budding talents at grassroots levels.
            </p>
            <p className="mt-6 font-semibold text-base md:text-lg">
              Join us at PNSA, where the pursuit of greatness is not just a goal but a way of life.
            </p>
          </div>
        </div>
      </section> */}

<section
  className="relative w-full h-[80vh] flex items-center justify-center px-4"
  style={{ background: "linear-gradient(135deg, #F58634, #07874D)" }}
>
  {/* Orange card with white border */}
  <div className="bg-orange-600 border-4 sm:border-8 border-white shadow-xl max-w-4xl w-full p-6 md:p-12 text-center text-white">
    <h1 className="text-2xl md:text-3xl font-bold">PNSA</h1>
    <div className="w-16 h-0.5 bg-white mx-auto my-4"></div>
    <p className="text-sm md:text-base leading-relaxed">
      Welcome to the Prakash Nanjappa Shooting Academy (PNSA), where passion
      meets precision and dreams take flight. Founded in 2018 by the esteemed
      Olympian and Arjuna Awardee, Prakash Nanjappa, PNSA stands as a beacon of
      relentless dedication towards the growth of shooting sports in our
      country.
    </p>
    <p className="mt-4 text-sm md:text-base leading-relaxed">
      At PNSA, our mission is clear: to unearth and nurture young talents,
      molding them into future Olympic champions. Our state-of-the-art facility,
      equipped with cutting-edge weapons and technology, sets the stage for
      excellence. Located in Coffee Board Layout, our high-performance centre is
      a hub of talent and determination.
    </p>
    <p className="mt-4 text-sm md:text-base leading-relaxed">
      Over the years, PNSA has proudly produced several international and
      national-level players, showcasing the efficacy of our training programs
      and coaching staff. But our reach extends beyond our academy walls. We
      collaborate with schools to provide shooting facilities and coaching,
      helping set up shooting ranges and fostering budding talents at grassroots
      levels.
    </p>
    <p className="mt-6 font-semibold text-base md:text-lg">
      Join us at PNSA, where the pursuit of greatness is not just a goal but a
      way of life.
    </p>
  </div>
</section>

      {/* About Grid Section (immediately below hero) */}
      <section className="bg-white text-black px-6 py-12 max-w-7xl lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top-left */}
          <div className="flex flex-col justify-center min-h-[250px]">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-black leading-relaxed">
              Our mission is to build young aspiration towards shooting sports by
              providing structured training, mentorship, and a culture that
              nurtures discipline, focus, and excellence.
            </p>
          </div>

          {/* Top-right */}
          <div className="min-h-[250px]">
            <img src={topright} alt="Rifle Shooters" className="w-full h-full object-cover" />
          </div>

          {/* Bottom-left */}
          <div className="border-4 border-orange-500 min-h-[250px] p-8">
            <img src={bottomleft} alt="Pistol Shooters" className="w-full h-full object-cover" />
          </div>

          {/* Bottom-right */}
          <div className="bg-green-600 p-6 flex items-center min-h-[250px]">
            <p className="text-white leading-relaxed">
              To create a successful shooter, the following are the key aspects that we aim to build: a
              sporting culture for the shooter, a strong technical foundation, consistent practice, and
              an environment that encourages resilience and high performance.To create a successful shooter, The following are the key aspects that we aim to build: A sporting culture for the shooter, to be supported by family, encouraged by the local community including educational institutions, enabling grass-root level coaching support with easy and affordable access to infrastructure, services and competitive platforms.
            </p>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="py-20 bg-black mt-40 mb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-white text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              Our Core Values
            </h2>
            <p className="text-white text-xl text-gray-600 max-w-3xl font-inter">
              The foundation of excellence that drives everything we do at PNSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-orange-500 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Trophy className="w-8 h-8 text-pnsa-orange" />
              </div>
              <h3 className="text-white text-2xl font-bold text-gray-900 mb-3 font-prosto">Excellence & Precision</h3>
              <p className="text-white text-gray-600 font-inter leading-relaxed">At PNSA, we strive for the highest standards of excellence in every aspect of our training. Precision and accuracy are not just goals but a way of life. We are committed to helping each athlete reach their full potential through rigorous practice, attention to detail, and a relentless pursuit of perfection.</p>
            </div>

            <div className="group bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-prosto">Integrity & Sportsmanship</h3>
              <p className="text-gray-600 font-inter leading-relaxed">Integrity and sportsmanship are the cornerstones of our academy. We foster an environment where honesty, respect, and fair play are paramount. Our athletes are taught to uphold the highest ethical standards both on and off the range, promoting a culture of respect for competitors, coaches, and the sport itself.</p>
            </div>

            <div className="group bg-green-500 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-green/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Zap className="w-8 h-8 text-pnsa-green" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-prosto">Innovation & Growth</h3>
              <p className="text-gray-900 font-inter leading-relaxed">We embrace innovation and continuous improvement in all our training methods and techniques. we ensure that our athletes receive the most up-to-date and effective training. We are dedicated to fostering a growth mindset, encouraging athletes to constantly seek new ways to enhance their skills and performance.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection/>

{/* <section className="py-20 bg-pnsa-dark mt-40">
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
      </section> */}

<section className="py-20 bg-black mt-40 mb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-white text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-prosto">
              Why Choose Us
            </h2>
            <p className="text-white text-xl text-gray-600 max-w-3xl font-inter">
              The foundation of excellence that drives everything we do at PNSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-orange-500 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Trophy className="w-8 h-8 text-pnsa-orange" />
              </div>
              <h3 className="text-white text-2xl font-bold text-gray-900 mb-3 font-prosto">Excellence & Precision</h3>
              <p className="text-white text-gray-600 font-inter leading-relaxed">At PNSA, we strive for the highest standards of excellence in every aspect of our training. Precision and accuracy are not just goals but a way of life. We are committed to helping each athlete reach their full potential through rigorous practice, attention to detail, and a relentless pursuit of perfection.</p>
            </div>

            <div className="group bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-prosto">Integrity & Sportsmanship</h3>
              <p className="text-gray-600 font-inter leading-relaxed">Integrity and sportsmanship are the cornerstones of our academy. We foster an environment where honesty, respect, and fair play are paramount. Our athletes are taught to uphold the highest ethical standards both on and off the range, promoting a culture of respect for competitors, coaches, and the sport itself.</p>
            </div>

            <div className="group bg-green-500 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-pnsa-green/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Zap className="w-8 h-8 text-pnsa-green" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-prosto">Innovation & Growth</h3>
              <p className="text-gray-900 font-inter leading-relaxed">We embrace innovation and continuous improvement in all our training methods and techniques. we ensure that our athletes receive the most up-to-date and effective training. We are dedicated to fostering a growth mindset, encouraging athletes to constantly seek new ways to enhance their skills and performance.</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}