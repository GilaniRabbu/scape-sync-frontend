import ContainerWrapper from "@/components/common/ContainerWrapper";
import { CalendarCheck, ChartLine, LocateFixed, Shield } from "lucide-react";

const services = [
  {
    icon: <CalendarCheck size={18} className="text-[#3BA334]" />,
    title: "Easy Service Booking",
    desc: "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    icon: <LocateFixed size={20} className="text-[#3BA334]" />,
    title: "Real-Time Tracking",
    desc: "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    icon: <ChartLine size={20} className="text-[#3BA334]" />,
    title: "Performance Analysis",
    desc: "Comprehensive reporting and insights to improve business operations and efficiency.",
  },
  {
    icon: <Shield size={20} className="text-[#3BA334]" />,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];

export default function Services() {
  return (
    <div className="bg-white pt-5 lg:pt-0 pb-10">
      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="text-left">
              <div className="inline-flex p-4 rounded-2xl bg-[#ECFCEB] mb-2">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
}
