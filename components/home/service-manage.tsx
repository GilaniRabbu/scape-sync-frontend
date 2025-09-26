import Image from "next/image";
import ContainerWrapper from "@/components/common/ContainerWrapper";

const sections = [
  {
    id: 1,
    title: "Users",
    heading: "Book services, track progress and stay updated",
    description:
      "Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.",
    points: [
      "Book services in seconds",
      "Track real-time job updates",
      "Schedule appointments at your convenience",
    ],
    image: "/service1.png",
    reverse: false,
  },
  {
    id: 2,
    title: "Business Owners",
    heading: "Assign jobs, monitor performance, and streamline operations.",
    description:
      "Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.",
    points: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Manage clients and services seamlessly",
    ],
    image: "/service1.png",
    reverse: true,
    bg: "bg-gray-50",
  },
  {
    id: 3,
    title: "Employees",
    heading: "See tasks, track time, and navigate routes with ease.",
    description:
      "Everything you need to manage your workday from job assignments to optimized routes and time logging.",
    points: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Manage clients and services seamlessly",
    ],
    image: "/service1.png",
    reverse: false,
  },
];

export default function ServiceManage() {
  return (
    <div className="bg-white">
      <ContainerWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Build for Everyone
          </h2>
          <p className="text-sm max-w-lg mx-auto text-gray-600">
            Whether you&rsquo;re booking services, managing tasks, or running
            operations, we&rsquo;ve designed the perfect experience for you.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="py-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div
                className={`space-y-6 ${
                  section.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium border-[#3BA334] text-[#3BA334]">
                    {section.title}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-gray-600">{section.description}</p>
                </div>

                <div className="space-y-2">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-6 w-1 bg-[#3BA334]" />
                      <p className="text-lg text-gray-900">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`flex justify-center ${
                  section.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={section.image}
                  alt={`${section.title} Image`}
                  width={400}
                  height={600}
                />
              </div>
            </div>
          </div>
        ))}
      </ContainerWrapper>
    </div>
  );
}
