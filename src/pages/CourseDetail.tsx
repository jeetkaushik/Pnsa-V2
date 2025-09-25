import { useParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import ContactSection from "@/components/Home/ContactSection";
import servicesBanner from "@/assets/services-banner.png";

const courseDetails = {
  1: {
    title: "Foundational Course",
    description: "Perfect for complete beginners who want to learn the fundamentals of shooting sports.",
    duration: "4 weeks",
    prerequisites: "No prior experience required",
    syllabus: [
      "Introduction to shooting sports and safety protocols",
      "Basic firearm handling and safety rules",
      "Fundamental shooting stance and grip techniques",
      "Breathing control and trigger discipline",
      "Target acquisition and sight alignment",
      "Basic maintenance and care of equipment"
    ],
    keyTakeaways: [
      "Master essential safety protocols",
      "Develop proper shooting fundamentals",
      "Build confidence with firearms",
      "Understand equipment basics"
    ]
  },
  2: {
    title: "Beginner's Course",
    description: "Build upon basic skills with structured training programs designed for those with some shooting experience.",
    duration: "6 weeks",
    prerequisites: "Foundational Course or equivalent basic training",
    syllabus: [
      "Advanced stance and positioning techniques",
      "Improved breathing and trigger control",
      "Introduction to different shooting disciplines",
      "Basic competition rules and scoring",
      "Equipment selection and customization",
      "Mental preparation and focus techniques"
    ],
    keyTakeaways: [
      "Refine shooting techniques",
      "Learn competition basics",
      "Develop consistent performance",
      "Build mental toughness"
    ]
  },
  3: {
    title: "Intermediate Course",
    description: "Advanced training for shooters ready to compete. Focus on technique refinement and competition preparation.",
    duration: "8 weeks",
    prerequisites: "Beginner's Course or demonstrated intermediate skills",
    syllabus: [
      "Advanced shooting techniques and positions",
      "Competition strategy and mental game",
      "Equipment optimization and tuning",
      "Performance analysis and improvement",
      "Advanced training methodologies",
      "Competition preparation and execution"
    ],
    keyTakeaways: [
      "Master advanced techniques",
      "Develop competitive mindset",
      "Optimize equipment performance",
      "Prepare for competitive shooting"
    ]
  }
};

export default function CourseDetail() {
  const { id } = useParams();
  const courseId = id ? parseInt(id) : 1;
  const course = courseDetails[courseId as keyof typeof courseDetails] || courseDetails[1];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-2">
            <img src={servicesBanner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
        <div className="mt-12 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-gray-600 mt-4">{course.description}</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">{course.duration}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Prerequisites</h3>
                <p className="text-gray-600">{course.prerequisites}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src={`https://picsum.photos/seed/course${courseId}/1000/700`} alt={course.title} className="w-full h-auto rounded-xl shadow" />
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Syllabus</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {course.syllabus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Takeaways</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {course.keyTakeaways.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}


