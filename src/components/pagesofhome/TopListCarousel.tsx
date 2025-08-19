// Drop this file in your Vite React + TypeScript project as src/components/TopListCarousel.tsx
// Usage: import TopListCarousel from "./components/TopListCarousel"; then render <TopListCarousel />
// If you're on JS only, you can keep it as .jsx and add `// @ts-nocheck` at the top to silence TS.

import { useRef } from "react";

type TopItem = {
  id: number;
  title: string;
  desc: string;
  baht: number;
  stars: number;
  img: string;
};

const TOP_LIST: TopItem[] = [
  {
    id: 1,
    title: "Green Salad",
    desc: "Avocado, pearl couscous, zesty dressing & seasonal greens.",
    baht : 195,
    stars: 4.7,
    img: "/f1402840-e16b-4b42-b061-6b1f8f666722-Photoroom.png",
  },
  {
    id: 2,
    title: "Pina Coucla Chicken Salad",
    desc: "Grilled breast with fruit, crunchy romaine & cinnamon crumbs.",
    baht: 185,
    stars: 4.8,
    img: "/f9178ea5-3b6a-4c61-9273-c7e1ad073fa2-Photoroom.png",
  },
  {
    id: 3,
    title: "Happy Salad Salmon Fruit",
    desc: "Seared salmon, strawberry mix & citrus vinaigrette.",
    baht: 145,
    stars: 4.6,
    img: "/011bdfe6-f3c5-4986-90f4-e70a7df0fd70-Photoroom.png",
  },
  {
    id: 4,
    title: "Quinoa Bowl Veggie",
    desc: "Roasted pumpkin, chickpeas, feta & lemon tahini.",
    baht: 310,
    stars: 4.9,
    img: "/f1402840-e16b-4b42-b061-6b1f8f666722-Photoroom.png",
  },
    {
    id: 5,
    title: "Quinoa Bowl Veggie",
    desc: "Roasted pumpkin, chickpeas, feta & lemon tahini.",
    baht: 310,
    stars: 4.9,
    img: "/f1402840-e16b-4b42-b061-6b1f8f666722-Photoroom.png",
  },
    {
    id: 6,
    title: "Pina Coucla Chicken Salad",
    desc: "Grilled breast with fruit, crunchy romaine & cinnamon crumbs.",
    baht: 185,
    stars: 4.8,
    img: "/f9178ea5-3b6a-4c61-9273-c7e1ad073fa2-Photoroom.png",
  },
];

export default function TopListCarousel() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: number = 1) => {
    const rail = railRef.current as HTMLDivElement | null;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.clientWidth + 24 : 320; // gap + card width
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient + vignette (เหมือนตัวอย่างแรก) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-100 via-emerald-50 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgba(16,185,129,0.14),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* header - ปรับสีให้ตรงกับตัวอย่างแรก */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Top List
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            All the best from our wholesome recipes
          </p>
        </div>

        {/* carousel */}
        <div className="relative">
          {/* arrows - ปรับให้ใช้สี Emerald ตามตัวอย่างแรก */}
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-emerald-600 p-2 text-white shadow-lg ring-1 ring-emerald-600/20 transition hover:bg-emerald-700 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 md:-left-6"
          >
            <span className="inline-block h-5 w-5 rotate-180">➜</span>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-emerald-600 p-2 text-white shadow-lg ring-1 ring-emerald-600/20 transition hover:bg-emerald-700 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 md:-right-6"
          >
            <span className="inline-block h-5 w-5">➜</span>
          </button>

          {/* carousel rail */}
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {TOP_LIST.map((item) => (
              <Card
                key={item.id}
                item={item}

              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            i < full
              ? "fill-current"
              : half && i === full
              ? "fill-current opacity-50"
              : "fill-none"
          }`}
        >
          <path
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
            className="stroke-amber-500"
            strokeWidth="1.2"
          />
        </svg>
      ))}
      <span className="ml-1 text-xs font-semibold text-gray-700">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

function Card({ item }: { item: TopItem }) {
  return (
    <article
      data-card
      className="relative w-[260px] shrink-0 snap-center rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl sm:w-[300px]"
    >
      {/* floating plate */}
      <div className="relative mb-5 flex w-full justify-center">
        <div className="absolute -top-8 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
        <div className="relative z-10 rounded-full bg-white p-2 shadow-xl ring-1 ring-black/5">
          <img
            src={item.img}
            alt={item.title}
            className="h-32 w-32 rounded-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop";
            }}
          />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <Stars value={item.stars} />
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-900">
          {item.baht} baht
        </div>
        <button className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-emerald-600/20 transition hover:bg-emerald-700">
          Order
          <span className="transition group-hover:translate-x-0.5">→</span>
        </button>
      </div>

      {/* small orange dot bottom-right to mimic screenshot */}
      <span className="absolute bottom-4 right-4 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
    </article>
  );
}
