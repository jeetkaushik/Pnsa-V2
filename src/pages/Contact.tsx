import Layout from "@/components/Layout/Layout";
import ContactSection from "@/components/Home/ContactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with PNSA for any inquiries about our programs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MapPin className="h-8 w-8 text-pnsa-orange mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Rohine Residency, ABC<br />
                Banglore Colony
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Phone className="h-8 w-8 text-pnsa-green mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 7362528236
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                pnsa10.9@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-8 w-8 text-pnsa-orange mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 8AM-9PM<br />
                Sat: 9AM-6PM<br />
                Sun: 9AM-2PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our world-class training facility in Bangalore
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Interactive Map Coming Soon</p>
              <p className="text-sm">Rohine Residency, ABC, Bangalore Colony</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}