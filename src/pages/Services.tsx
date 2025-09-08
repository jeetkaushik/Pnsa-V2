import Layout from "@/components/Layout/Layout";
import service_banner from "@/assets/services-banner.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Dumbbell, 
  Brain, 
  Calendar, 
  Users, 
  Apple, 
  Heart,
  Award,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Apt Posture And Breathing",
    description: "Master the fundamentals of shooting with proper stance, grip, and breathing techniques. Our certified coaches work one-on-one to ensure perfect form.",
    features: ["Individual posture analysis", "Breathing control techniques", "Stability training", "Form correction"],
    color: "bg-pnsa-orange"
  },
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description: "Specialized fitness programs designed specifically for shooting sports, focusing on core strength, stability, and endurance.",
    features: ["Core strengthening", "Cardiovascular conditioning", "Flexibility training", "Sport-specific exercises"],
    color: "bg-blue-600"
  },
  {
    icon: Brain,
    title: "Mental Training",
    description: "Develop mental toughness, concentration, and competitive mindset through proven psychological training methods.",
    features: ["Concentration techniques", "Stress management", "Visualization training", "Competition psychology"],
    color: "bg-pnsa-green"
  },
  {
    icon: Users,
    title: "Interpersonal Training",
    description: "Build confidence and communication skills essential for competitive environments and team dynamics.",
    features: ["Team building", "Leadership skills", "Communication training", "Peer interaction"],
    color: "bg-purple-600"
  },
  {
    icon: Apple,
    title: "Nutritional Planning",
    description: "Customized nutrition plans to optimize performance, energy levels, and recovery for competitive shooters.",
    features: ["Performance nutrition", "Meal planning", "Supplement guidance", "Hydration strategies"],
    color: "bg-green-600"
  },
  {
    icon: Heart,
    title: "Sports Massage & Physiotherapy",
    description: "Professional therapy services for injury prevention, recovery, and maintaining peak physical condition.",
    features: ["Injury prevention", "Recovery therapy", "Pain management", "Mobility improvement"],
    color: "bg-red-600"
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
          <div className="text-center text-white">
            <img src={service_banner} alt="" className="w-full h-full object-cover h-1/2" />
            {/* <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive training programs designed to develop Olympic-level shooters */}
            {/* </p> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Training Process */}
      <section className="py-16 bg-gray-50">
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
      </section>

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