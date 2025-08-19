import { Smartphone, BellRing, UserRound, Ship } from "lucide-react";

type Service = {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
};

type Props = {
  title?: string;
  items?: Service[];
  garnishRight?: string; // optional image url (e.g., tomato/leaf)
};

export default function OurServices({
  title = "Our Services",
  garnishRight = "/decor-tomato.png",
  items = [
    {
      id: "online",
      label: "Online Booking",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: "dinein",
      label: "Dine-in Service",
      icon: <BellRing className="h-6 w-6" />,
    },
    {
      id: "membership",
      label: "VIP Membership",
      icon: <UserRound className="h-6 w-6" />,
    },
    {
      id: "delivery",
      label: "Delivery Service",
      icon: <Ship className="h-6 w-6" />,
    },
  ],
}: Props) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background gradient + vignette (เหมือนตัวอย่างแรก) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-100 via-emerald-50 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgba(16,185,129,0.14),transparent_60%)]" />
        <img
          src={garnishRight}
          alt=""
          className="pointer-events-none absolute -bottom-4 right-6 w-28 opacity-90"
          onError={(e) =>
            ((e.currentTarget as HTMLImageElement).style.display = "none")
          }
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
          {title}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {items.map((s) => (
            <ServiceCard
              key={s.id}
              label={s.label}
              icon={s.icon}
              href={s.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  label,
  icon,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const Wrapper = href ? "a" : ("div" as any);
  return (
    <Wrapper
      href={href}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/70 p-6 text-center shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/5 text-gray-900">
        {icon}
      </div>
      <div className="text-sm font-medium text-gray-800">{label}</div>
      {/* soft inner highlight to mimic card tint */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-0 transition group-hover:opacity-100" />
    </Wrapper>
  );
}
