import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const features = [
  {
    Icon: FileTextIcon,
    name: "Jobshunt",
    description: "Your on the go job searching website.",
    href: "/jobshunt",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex h-full items-center justify-center absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <div className=" flex items-center md:text-lg ">
          <img src={"./jobshunt.png"} alt="logo" />
        </div>
      </div>
    ),
  },
  {
    Icon: InputIcon,
    name: "Frames: by half engineers",
    description: "An online e-commerce store to purchase frames.",
    href: "/fbe",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex h-full items-center justify-center absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <div className=" flex items-center md:text-lg ">
          <img src={"./frames.png"} alt="logo" />
        </div>
      </div>
    ),
  },
];

export function Projects() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
