import Image from "next/image";
import ContainerWrapper from "@/components/common/ContainerWrapper";

const testimonials = [
  {
    name: "Farzana H.",
    role: "Owner, CleanPro Services",
    image: "/avatar1.png",
    text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
  },
  {
    name: "Ahmed R.",
    role: "Technician",
    image: "/avatar2.png",
    text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
  },
  {
    name: "Rafiq M.",
    role: "Homeowner",
    image: "/avatar3.png",
    text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-15">
      <ContainerWrapper>
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-sm text-gray-600">
            Real stories from clients, employees, and business owners who use
            our app every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white shadow-xs p-4 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <p className="leading-relaxed tracking-tighter text-gray-600">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
}
