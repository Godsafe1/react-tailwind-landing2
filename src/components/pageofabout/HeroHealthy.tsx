import { useState } from "react";

const perks = [
  { icon: "💐", text: "ดอกไม้สดใหม่ทุกวัน ส่งตรงจากสวน" },
  { icon: "🌸", text: "ดีไซน์หลากหลาย เหมาะกับทุกโอกาส" },
  { icon: "🚚", text: "จัดส่งตรงเวลา รักษาความสด" },
  { icon: "🎁", text: "บริการเพิ่มการ์ดอวยพร/ของขวัญพิเศษ" },
];

const plans = [
  { id: "3d", label: "3 ขุด", desc: "เริ่มลอง", price: 899 },
  { id: "5d", label: "5 ชุด", desc: "ยอดนิยม", price: 1390 },
  { id: "7d", label: "7 ชุด", desc: "คุ้มสุด", price: 1790 },
];

export default function HeroHealthy() {
  const [active, setActive] = useState("5d");

  const activePlan = plans.find((p) => p.id === active)!;

  return (
    <section className="relative overflow-hidden">
      {/* พื้นหลังโทนเขียวอ่อน */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-emerald-50" />

      {/* เอฟเฟกต์แสง radial gradient (เพิ่มจากตัวอย่างแรก) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_40%,rgba(16,185,129,0.08),transparent_60%)]" />

      {/* ข้อความ Healthy food จางๆ */}
      <h1 className="pointer-events-none select-none absolute -left-10 top-10 text-[12rem] leading-none font-serif text-emerald-100 hidden lg:block">
       Beautiful 
        <br />
       flowers
      </h1>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: รูปสลัด */}
        <div className="relative flex justify-center">
          {/* วงกลมแสงเบลอ (เปลี่ยนสี) */}
          <div className="absolute -z-0 size-[420px] md:size-[500px] rounded-full bg-white/70 blur-xl" />
          <img
            src="https://basketeer.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/02/20151939/FLB25-007.1-1.jpg"
            alt="Healthy salad bowl"
            className="relative z-10 w-[78%] max-w-[420px] drop-shadow-xl"
          />
        </div>

        {/* RIGHT: เนื้อหา */}
        <div>
          <p className="text-sm tracking-wide text-emerald-600 mb-2">
            คุณสามารถสั่งช่อดอกไม้จัดส่งถึงบ้าน
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
             ดอกไม้สดคัดพิเศษจากสวน ปรุงแต่งอย่างประณีตโดยช่างจัดดอกไม้มืออาชีพ
          </h2>
          <p className="mt-3 text-gray-600">
          
เลือกดีไซน์และโทนสีได้ตามใจ พร้อมบริการจัดส่งรวดเร็ว เพื่อให้ทุกโอกาสพิเศษของคุณสมบูรณ์แบบ
          </p>

          {/* รายการข้อดี */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200"
              >
                <span className="text-xl text-emerald-600">{p.icon}</span>
                <span className="text-sm text-gray-700">{p.text}</span>
              </li>
            ))}
          </ul>

          {/* เลือกแพ็กเกจ */}
          <div className="mt-8">
            <p className="text-gray-700 font-medium mb-3">เลือกแพ็กเกจ:</p>
            <div className="flex flex-wrap gap-3">
              {plans.map((p) => {
                const isActive = p.id === active;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={[
                      "rounded-full px-5 py-2.5 text-sm font-semibold transition shadow-sm ring-1 ring-gray-200",
                      isActive
                        ? "bg-emerald-600 text-white ring-emerald-600"
                        : "bg-white text-gray-800 hover:bg-gray-50",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* กล่องสรุปแพ็กเกจที่เลือก */}
            <div className="mt-5 rounded-2xl bg-white p-4 shadow-md ring-1 ring-gray-200 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">แพ็กเกจที่เลือก</p>
                <p className="text-base font-medium text-gray-900">
                  {activePlan.label} · {activePlan.desc}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">ราคา</p>
                <p className="text-lg font-semibold text-emerald-600">
                  ฿{activePlan.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* ปุ่ม CTA (เปลี่ยนเป็นสีเขียว) */}
            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500">
                สั่งเลย
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition shadow-sm">
                ดูเมนูทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
