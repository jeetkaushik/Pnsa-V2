import { Diamond } from "lucide-react";

const serviceCategories = [
  {
    title: "Apt Posture And Breathing",
    color: "bg-pnsa-orange",
    services: [
      "Apt Posture And Breathing",
      "Mind & Body Connection", 
      "Strength & Endurance"
    ]
  },
  {
    title: "Fitness",
    color: "bg-blue-600",
    services: [
      "Fitness",
      "Mental Training",
      "Periodical Profiling"
    ]
  },
  {
    title: "Interpersonal Training", 
    color: "bg-pnsa-green",
    services: [
      "Interpersonal Training",
      "Nutritional Planning",
      "Sports Massage & Physiotherapy"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What we do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            At PNSA, We Have A Well-Designed Program Routine That Is Customized And Tailored 
            For Every Shooter To Attain:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`${category.color} p-8 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl`}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <Diamond className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-white/90 font-inter text-sm leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}