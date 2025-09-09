import { useParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm";

export default function CourseDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">Course {id}</h1>
            <p className="text-gray-600 mt-4">Detailed information about Course {id}. Include syllabus, prerequisites, duration, and key takeaways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src={`https://picsum.photos/seed/course${id}/1000/700`} alt="Course" className="w-full h-auto rounded-xl shadow" />
            <div className="space-y-4 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900">What You'll Learn</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Core concepts and safety</li>
                <li>Technique refinement</li>
                <li>Assessment and certification</li>
                <li>Practice routines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ContactForm title="Contact Us About This Course" />
        </div>
      </section>
    </Layout>
  );
}


