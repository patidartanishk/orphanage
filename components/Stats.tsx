"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Users,
  HeartHandshake,
  BookOpen,
  Award,
  Heart,
} from "lucide-react";

export default function Stats() {
  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.35,
});
  const stats = [
    {
      icon: Users,
      number: "250+",
      label: "Children Supported",
    },
    {
      icon: HeartHandshake,
      number: "60+",
      label: "Dedicated Volunteers",
    },
    {
      icon: BookOpen,
      number: "20+",
      label: "Education Programs",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years of Service",
    },
  ];

  return (
    <section
    ref={ref}
      id="impact"
      className="relative overflow-hidden bg-[#FCF8F2] py-12"
    >
      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-amber-100/40 blur-[130px]" />

      <div className="absolute left-0 bottom-0 w-[420px] h-[420px] rounded-full bg-orange-100/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8">

        {/* Top Section */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[6px] text-amber-500 font-semibold mb-4">
              OUR IMPACT
            </p>

            <h2 className="text-[#2A170F] text-5xl lg:text-6xl font-bold leading-tight">
              Changing Lives
              <br />
              Every Day
            </h2>

            <p className="mt-8 text-[18px] leading-9 text-gray-600 max-w-xl">
              Every child deserves a safe home, quality education,
              nutritious meals, emotional support and a brighter future.
              Together we are creating lasting impact.
            </p>

            {/* Orange Line */}

            <div className="mt-10 w-16 h-1 rounded-full bg-amber-500"></div>

          </div>

          {/* Right Illustration */}

          <div className="relative flex justify-center items-center h-[420px]">

            {/* Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-100 via-orange-50 to-transparent blur-2xl"></div>

            {/* Background Circle */}

            <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#FFF5E8] to-[#FFE8C9]"></div>

            {/* Floating Hearts */}

            <Heart
              className="absolute top-10 left-20 text-amber-400 animate-bounce"
              fill="#FDBA3B"
              size={18}
            />

            <Heart
              className="absolute right-16 top-24 text-amber-400 animate-pulse"
              fill="#FDBA3B"
              size={16}
            />

            {/* Clouds */}

            <Image
              src="/images/cloud.png"
              alt=""
              width={90}
              height={50}
              className="absolute top-16 right-32 opacity-70 animate-pulse"
            />

            <Image
              src="/images/cloud.png"
              alt=""
              width={70}
              height={40}
              className="absolute left-24 bottom-24 opacity-60"
            />

            {/* Paper Plane */}

            <Image
              src="/images/paper-plane.png"
              alt=""
              width={60}
              height={60}
              className="absolute right-8 top-10 animate-[float_5s_ease-in-out_infinite]"
            />

            {/* Main Illustration */}

            <Image
              src="/images/reading-child.png"
              alt="Child Reading"
              width={420}
              height={420}
              priority
              className="relative z-20 object-contain animate-[float_6s_ease-in-out_infinite]"
            />

          </div>

        </div>

        {/* Statistics Row */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-8">
          {stats.map((item, index) => {
  const Icon = item.icon;

  return (
   <div
  key={index}
  style={{
    animationDelay: `${index * 150}ms`,
  }}
  className="
    group
    relative
    overflow-hidden

    opacity-0
    animate-[fadeUp_0.8s_ease_forwards]

    bg-white
    rounded-[28px]
    border
    border-[#F2E8DA]

    px-8
    py-8

    shadow-[0_12px_35px_rgba(0,0,0,0.08)]

    transition-all
    duration-500

    hover:-translate-y-2
    hover:scale-[1.03]

    hover:shadow-[0_25px_60px_rgba(245,158,11,0.18)]
    hover:border-amber-300
  "
>
      {/* Top Accent */}

      <div className="absolute left-0 top-0 h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />

      {/* Background Glow */}

      <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <div className="
        relative
        z-10
        w-18
        h-18
        rounded-2xl
        bg-gradient-to-br
        from-[#FFF5E7]
        to-[#FFF0D8]
        flex
        items-center
        justify-center
        shadow-sm
        mb-6
      ">
        <Icon
          size={28}
          className="text-amber-500 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Number */}

      <h3 className="relative z-10 text-[42px] font-bold text-amber-500 leading-none">
  {inView && (
    <>
      <CountUp
        start={0}
        end={parseInt(item.number)}
        duration={2.2}
        delay={index * 0.2}
      />
      +
    </>
  )}
</h3>

      {/* Label */}

      <p className="relative z-10 mt-4 text-[17px] font-medium text-gray-700 leading-7">
        {item.label}
      </p>

      {/* Bottom Line */}

      <div className="relative z-10 mt-8 w-12 h-1 rounded-full bg-amber-500 transition-all duration-500 group-hover:w-20" />
    </div>
  );
})}

</div>

</div>

</section>
    
  );
}