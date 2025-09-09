import Layout from "@/components/Layout/Layout";
import { MapPin, Phone, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-shooting-range.jpg";
import centersBanner from "@/assets/centers_banner.png";

const centres = [
  {
    name: "PNSA Main Centre",
    address: "Rohine Residency, ABC, Bangalore Colony",
    phone: "+91 7362528236",
    email: "pnsa10.9@gmail.com",
    timing: "Mon-Fri: 8AM-9PM, Sat: 9AM-6PM, Sun: 9AM-2PM",
    facilities: ["10m Air Rifle Range", "10m Air Pistol Range", "50m Rifle Range", "Professional Equipment", "Video Analysis", "Fitness Area"],
    image: heroImage
  },
  {
    name: "PNSA Training Annex",
    address: "Sports Complex, Bangalore",
    phone: "+91 7362528236",
    email: "training@pnsa.com",
    timing: "Mon-Sat: 6AM-8PM, Sun: Closed",
    facilities: ["Outdoor Range", "Competition Prep Area", "Mental Training Room", "Equipment Storage"],
    image: heroImage
  }
];

export default function Centres() {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Centres</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              State-of-the-art facilities designed for Olympic-level training
            </p>
          </div>
        </div>
      </section> */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img src={centersBanner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
      </section>

      {/* Centres List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {centres.map((centre, index) => (
              <div key={centre.name} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img 
                    src={centre.image} 
                    alt={centre.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-elegant"
                  />
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {centre.name}
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-pnsa-orange mr-3 mt-0.5" />
                      <span className="text-gray-700">{centre.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-pnsa-green mr-3" />
                      <span className="text-gray-700">{centre.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{centre.timing}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 text-pnsa-orange mr-2" />
                      Facilities Available
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {centre.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-pnsa-orange rounded-full mr-2"></span>
                          <span className="text-gray-600 text-sm">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Equipment and infrastructure that meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pnsa-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Ranges
              </h3>
              <p className="text-gray-600">
                Multiple shooting ranges designed to international competition standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-pnsa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚙️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advanced Equipment
              </h3>
              <p className="text-gray-600">
                Latest shooting equipment and technology for optimal training experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📹
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analysis Systems
              </h3>
              <p className="text-gray-600">
                Video analysis and performance tracking systems for technique improvement
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}