export default function NewDish() {
  return (
    <div>
      <section className="relative overflow-hidden">
        {/* Background gradient + vignette (เหมือนตัวอย่างแรก) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-100 via-emerald-50 to-white" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgba(16,185,129,0.14),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            {/* Left content */}
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>

                {/* เพิ่มปุ่ม CTA ให้เหมือนตัวอย่างแรก (ถ้าต้องการ) */}
                <div className="mt-8 flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              {/* soft glow effect เหมือนตัวอย่างแรก */}
              <div className="absolute -right-8 -top-8 h-[300px] w-[300px] rounded-full bg-white/60 blur-3xl md:h-[400px] md:w-[400px]" />

              {/* image card with shadow เหมือนตัวอย่างแรก */}
              <div className="relative z-10 rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
                <img
                  src="https://pangpond.com/wp-content/uploads/%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89.jpg"
                  className="rounded-lg"
                  alt="Featured content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
