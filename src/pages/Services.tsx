import Layout from "@/components/Layout/Layout";
import service_banner from "@/assets/services-banner.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const programs = [
  {
    id: 1,
    title: "Shooting Coaching Programs",
    description:
      "At PNSA, our coaching programs are crafted to reflect the standards of elite international training environments. From foundational development to advanced competitive preparation, every athlete is guided through a structured and progressive journey in both pistol and rifle disciplines. Our methodology emphasizes precision, discipline, and technical mastery, ensuring a strong base for long-term success. Athletes benefit from personalized attention, world-class coaching insights, and a performance-driven culture. Each session is designed to instill confidence, consistency, and competitive excellence. We do not just train shooters-we shape athletes with the mindset of champions.",
    image: "https://picsum.photos/seed/shooting-coaching/800/500"
  },
  {
    id: 2,
    title: "High-Performance Training",
    description:
      "Our high-performance program is built for athletes who aspire to compete and succeed at the highest levels of the sport. Training is designed around international benchmarks, incorporating match simulations, pressure handling, and advanced technical refinement. Every athlete undergoes detailed performance analysis supported by structured profiling and benchmarking systems. This allows for precise identification of improvement areas and continuous evolution. Our environment replicates the demands of elite competition, ensuring athletes are prepared for global stages. At PNSA, performance is not incidental, it is engineered.",
    image: "https://picsum.photos/seed/high-performance/800/500"
  },
  {
    id: 3,
    title: "Grassroots Development",
    description:
      "PNSA is deeply invested in shaping the future of shooting sports through a strong grassroots ecosystem. We collaborate with leading schools and institutions to introduce shooting at an early stage, creating a pathway for young talent to flourish. Our programs focus on identifying potential, nurturing discipline, and building a long-term athlete development model. With structured training and expert mentorship, we transform beginners into confident competitors. This vision ensures a steady pipeline of talent ready to excel at national and international levels. We are not just developing athletes, we are building the future of the sport.",
    image: "https://picsum.photos/seed/grassroots-development/800/500"
  },
  {
    id: 4,
    title: "Sports Science & Athlete Support",
    description:
      "At PNSA, performance is supported by a comprehensive integration of sports science and athlete care. Our programs include specialized fitness and conditioning designed to enhance stability, endurance, and control, critical for shooting excellence. Mental conditioning and sports psychology are embedded into training to build focus, resilience, and composure under pressure. Personalized nutrition planning ensures optimal performance and recovery. Physiotherapy and recovery protocols are seamlessly integrated to maintain peak physical condition. This holistic ecosystem ensures that every athlete is prepared to perform at their absolute best.",
    image: "https://picsum.photos/seed/sports-science-support/800/500"
  },
  {
    id: 5,
    title: "PNSA Sports Tech Platform (App)",
    description:
      "Our proprietary PNSA Sports Tech Platform represents the intersection of sport and innovation. Designed to bring precision and transparency into athlete development, the platform enables comprehensive performance tracking, assessment, and reporting. It empowers coaches with actionable insights while offering athletes and parents complete visibility into progress. The system allows for data-driven decision-making, enhancing training efficiency and outcomes. Scalable and adaptable, the platform is built to support multi-sport ecosystems. At PNSA, technology is not an add-on, it is a core pillar of performance excellence.",
    image: "https://picsum.photos/seed/sports-tech-platform/800/500"
  },
  {
    id: 6,
    title: "Turnkey Shooting Range Solutions",
    description:
      "PNSA offers end-to-end turnkey solutions for the creation of world-class shooting infrastructure. From conceptual design to final execution, every aspect is delivered with precision and adherence to international standards. We ensure optimal layout, equipment selection, and installation to create high-performance environments. Our expertise extends to operational setup and integration of training systems, ensuring seamless functionality. Each range is designed not just as a facility, but as a platform for excellence. We enable institutions to build infrastructure that inspires performance at the highest level.",
    image: "https://picsum.photos/seed/turnkey-range-solutions/800/500"
  },
  {
    id: 7,
    title: "Institutional Collaborations",
    description:
      "We partner with premier schools, colleges, universities, and organizations to integrate shooting sports into their ecosystem with a structured and professional approach. Our collaborations go beyond training, encompassing program design, infrastructure advisory, and long-term athlete development strategies. We work closely with institutions to create sustainable and high-impact sports programs. These partnerships provide students with access to world-class training opportunities within their academic environment. Our vision is to embed excellence in sport within institutional frameworks. Together, we are shaping a new standard for sports education and development.",
    image: "https://picsum.photos/seed/institutional-collaborations/800/500"
  },
  {
    id: 8,
    title: "Corporate & Community Engagement",
    description:
      "PNSA extends its expertise into the corporate and community space by curating premium experiential shooting programs. Our corporate engagements are designed to foster leadership, focus, and team cohesion through unique, high-precision sporting experiences. Recreational shooting sessions introduce individuals to Olympic sport in a safe, guided, and aspirational environment. We also lead initiatives that promote awareness and appreciation of shooting sports across diverse audiences. These experiences are crafted to inspire participation and elevate perception. At PNSA, we bring the spirit of elite sport closer to the community.",
    image: "https://picsum.photos/seed/corporate-community-engagement/800/500"
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section><img src={service_banner} alt="" className="w-full h-full object-cover h-1/2" /></section> */}
      {/* <section className="bg-gradient-hero py-16"> */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img src={service_banner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
      </section>
      
      {/* Services Grid */}
      {/* <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training programs are designed to develop every aspect of shooting excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`${service.color} p-6`}>
                  <div className="flex items-center text-white mb-4">
                    <service.icon className="h-8 w-8 mr-4" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-pnsa-orange mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Programs & Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Programs and Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our flagship programs and academy initiatives.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.id}. {program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      {/* <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Training Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to shooting excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pnsa-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Initial evaluation of skills, fitness level, and shooting technique
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pnsa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-600 text-sm">
                Personalized training plan based on individual needs and goals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600 text-sm">
                Intensive practice sessions with expert coaching and guidance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
              <p className="text-gray-600 text-sm">
                Regular progress tracking and performance optimization
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-pnsa-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Training?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join PNSA and begin your journey towards shooting excellence with Olympic-level coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="orange" size="xl">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}