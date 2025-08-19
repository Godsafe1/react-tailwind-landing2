

export default function HomeHero({
  title = "Your Food Is\nWaiting For You",
  subtitle =
    "Serving irresistible flavors to your home or friendly doorstep. Custom-made to perfection on the COOK – get your food, enjoy now, and don’t worry about the time.",
  ctaPrimary = { label: "Food Menu", href: "#menu" },
  ctaSecondary = { label: "Book a Table", href: "#booking" },
  plateSrc = "/food-plate.png",
  leaves = [
    { src: "https://inwfile.com/s-fv/dqf83f.jpg", className: "top-6 left-8 w-10 rotate-[-10deg]" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVDMdpILIocN7XmwNsiJXcTns-u_RsEJH9Q&s", className: "bottom-10 left-20 w-12 rotate-[15deg]" },
    { src: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5B23N99JGMVMY0yEvbvL5dsOAo0idO3A3WNyx009aGWeZMQpopB.jpg", className: "top-12 right-24 w-9 rotate-[25deg]" },
    { src: "https://primo.co.th/wp-content/uploads/2024/07/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87.jpg", className: "bottom-16 right-12 w-10 -rotate-12" },
  ],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + vignette */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-100 via-emerald-50 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgba(16,185,129,0.14),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        {/* Left copy */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "block" : undefined}>
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex items-center justify-center">
          {/* soft glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-white/60 blur-3xl sm:h-[520px] sm:w-[520px]" />

          {/* image card */}
          <div className="relative z-10 rounded-full bg-white p-4 shadow-2xl ring-1 ring-black/5">
            <img
              src={plateSrc}
              alt="Delicious food"
              className="block h-[240px] w-[240px] rounded-full object-cover sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]"
              onError={(e) => {
                // Fallback image if asset missing
                e.currentTarget.src =
                  "https://static.wixstatic.com/media/78aa83_df7e3131d580419fa215008d4f24aacc~mv2.jpg/v1/fill/w_296,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/78aa83_df7e3131d580419fa215008d4f24aacc~mv2.jpg";
              }}
            />
          </div>

          {/* floating leaves */}
          {leaves.map((leaf, idx) => (
            <img
              key={idx}
              src={leaf.src}
              alt="leaf"
              className={`pointer-events-none absolute ${leaf.className} drop-shadow-md`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://pngimg.com/uploads/basil/basil_PNG45.png"; // simple fallback
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
