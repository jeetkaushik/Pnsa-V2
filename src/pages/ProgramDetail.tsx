import { useParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm";

export default function ProgramDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">Program {id}</h1>
            <p className="text-gray-600 mt-4">Detailed information about Program {id}. This section can include objectives, curriculum, schedules, and outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src={`https://picsum.photos/seed/program${id}/1000/700`} alt="Program" className="w-full h-auto rounded-xl shadow" />
            <div className="space-y-4 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
              <p>Our program {id} is designed to provide a comprehensive pathway from fundamentals to advanced skills with individualized coaching.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Structured modules and milestones</li>
                <li>Hands-on training with expert coaches</li>
                <li>Performance tracking and feedback</li>
                <li>Access to facilities and equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ContactForm title="Contact Us About This Program" />
        </div>
      </section>
    </Layout>
  );
}


