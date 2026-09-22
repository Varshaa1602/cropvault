'use client';

import cropCalendar from '../../data/cropCalendar.json';

export default function CropCalendarPage() {
  const currentMonth = new Date().toLocaleString('default', {
    month: 'long',
  });

  const monthIcons: Record<string, string> = {
    January: '🌱',
    February: '🌿',
    March: '☀️',
    April: '🌾',
    May: '🌦️',
    June: '🌧️',
    July: '🌱',
    August: '🌿',
    September: '🌾',
    October: '🌧️',
    November: '🌾',
    December: '🌱',
  };

  const monthColors: Record<string, string> = {
    January: 'from-emerald-400/20 to-green-500/5',
    February: 'from-green-400/20 to-lime-500/5',
    March: 'from-yellow-400/20 to-orange-500/5',
    April: 'from-lime-400/20 to-green-500/5',
    May: 'from-cyan-400/20 to-green-500/5',
    June: 'from-blue-400/20 to-emerald-500/5',
    July: 'from-green-400/20 to-emerald-500/5',
    August: 'from-lime-400/20 to-green-500/5',
    September: 'from-yellow-400/20 to-green-500/5',
    October: 'from-cyan-400/20 to-green-500/5',
    November: 'from-green-400/20 to-lime-500/5',
    December: 'from-emerald-400/20 to-green-500/5',
  };

  const currentIndex = cropCalendar.findIndex(
    (entry) => entry.month === currentMonth
  );

  const currentEntry =
    currentIndex >= 0 ? cropCalendar[currentIndex] : cropCalendar[0];

  return (
    <main className="min-h-screen bg-[#07110d] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[130px]" />
      <div className="absolute top-[400px] right-[-200px] w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[130px]" />

      {/* NAVBAR */}
      <nav className="relative z-20 sticky top-0 border-b border-white/10 bg-[#07110d]/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-300 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-2xl">🌾</span>
            </div>

            <div>
              <h1 className="font-bold text-xl tracking-tight">
                Crop<span className="text-lime-300">Vault</span>
              </h1>

              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                AI • Agriculture • Energy
              </p>
            </div>

          </a>


          <div className="hidden md:flex items-center gap-7 text-sm">

            <a
              href="/"
              className="text-gray-400 hover:text-white transition"
            >
              Dashboard
            </a>

            <a
              href="/plan"
              className="text-gray-400 hover:text-lime-300 transition"
            >
              AI Planner
            </a>

            <span className="text-lime-300">
              Crop Calendar
            </span>

            <span className="px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 text-green-300 text-xs">
              ● AI Engine Online
            </span>

          </div>

        </div>

      </nav>


      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-10">

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-300/20 bg-lime-300/5 text-lime-300 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" />
              TAMIL NADU AGRICULTURE INTELLIGENCE
            </div>


            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95]">

              Know the
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-green-400 to-emerald-500">
                harvest.
              </span>

              <br />

              Predict the opportunity.

            </h2>


            <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Track crop cycles across Tamil Nadu and identify when
              agricultural residue is most likely to become available
              for clean-energy conversion.
            </p>


            <div className="flex flex-wrap gap-3 mt-7">

              <a
                href="/plan"
                className="px-6 py-3 rounded-xl bg-lime-300 text-black font-semibold hover:bg-lime-200 transition"
              >
                Open AI Planner →
              </a>

              <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400">
                📅 12-Month View
              </div>

            </div>

          </div>


          {/* CURRENT MONTH CARD */}
          <div className="relative">

            <div className="absolute inset-0 bg-lime-300/10 blur-[70px]" />

            <div className="relative rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Currently
                  </p>

                  <h3 className="text-3xl font-black mt-1">
                    {currentMonth}
                  </h3>

                </div>

                <div className="w-16 h-16 rounded-2xl bg-lime-300/10 flex items-center justify-center text-4xl">
                  {monthIcons[currentMonth] || '🌾'}
                </div>

              </div>


              <div className="border-t border-white/10 my-6" />


              <p className="text-xs text-lime-300 uppercase tracking-widest">
                Crop Activity
              </p>

              <p className="text-gray-400 text-sm mt-2">
                {currentEntry?.crops.length || 0} crop activities
                recorded for this month.
              </p>


              <div className="flex flex-wrap gap-2 mt-5">

                {currentEntry?.crops.slice(0, 4).map((crop, index) => (

                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    🌾 {crop}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INSIGHT STRIP */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <InfoCard
            icon="🌱"
            value="12"
            label="Months tracked"
          />

          <InfoCard
            icon="🌾"
            value={String(
              cropCalendar.reduce(
                (total, entry) => total + entry.crops.length,
                0
              )
            )}
            label="Crop activities"
          />

          <InfoCard
            icon="🔥"
            value="↓"
            label="Residue burning"
          />

          <InfoCard
            icon="⚡"
            value="AI"
            label="Energy planning"
          />

        </div>

      </section>


      {/* CALENDAR */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">

          <div>

            <p className="text-xs text-lime-300 uppercase tracking-[0.2em]">
              Crop Intelligence
            </p>

            <h2 className="text-3xl font-bold mt-1">
              Tamil Nadu Crop Cycle
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Explore what is typically happening across the agricultural
              cycle each month.
            </p>

          </div>


          <div className="flex items-center gap-2 text-xs text-gray-500">

            <span className="w-2 h-2 rounded-full bg-lime-300" />
            Current month

          </div>

        </div>


        {/* MONTH GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {cropCalendar.map((entry, index) => {

            const isCurrent = entry.month === currentMonth;

            return (

              <div
                key={entry.month}
                className={`
                  group relative overflow-hidden rounded-3xl
                  border
                  ${
                    isCurrent
                      ? 'border-lime-300/50 shadow-xl shadow-lime-300/5'
                      : 'border-white/10'
                  }
                  bg-white/[0.035]
                  backdrop-blur-xl
                  hover:bg-white/[0.06]
                  transition-all duration-300
                  hover:-translate-y-1
                `}
              >

                {/* Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    monthColors[entry.month] || 'from-green-400/10 to-transparent'
                  } opacity-50`}
                />


                {/* Current month glow */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-300 to-green-400" />
                )}


                <div className="relative p-6">

                  {/* MONTH HEADER */}
                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-gray-500">
                        Month {String(index + 1).padStart(2, '0')}
                      </p>

                      <h3 className="text-2xl font-bold mt-1">
                        {entry.month}
                      </h3>

                    </div>


                    <div className="w-11 h-11 rounded-xl bg-black/20 border border-white/5 flex items-center justify-center text-xl">
                      {monthIcons[entry.month] || '🌾'}
                    </div>

                  </div>


                  {/* CURRENT BADGE */}
                  {isCurrent && (

                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-300/10 border border-lime-300/20 text-lime-300 text-[10px] font-semibold">

                      <span className="w-1.5 h-1.5 rounded-full bg-lime-300 animate-pulse" />

                      CURRENT MONTH

                    </div>

                  )}


                  {/* CROPS */}
                  <div className="mt-5 space-y-2">

                    {entry.crops.map((crop, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl bg-black/20 border border-white/5 px-3 py-2.5 group-hover:border-white/10 transition"
                      >

                        <span className="text-sm">
                          🌾
                        </span>

                        <span className="text-sm text-gray-300">
                          {crop}
                        </span>

                      </div>

                    ))}

                  </div>


                  {/* BIOMASS SIGNAL */}
                  <div className="mt-5 pt-4 border-t border-white/10">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] uppercase tracking-widest text-gray-600">
                        Biomass signal
                      </span>

                      <span className="text-xs text-lime-300">
                        {entry.crops.length >= 3
                          ? 'HIGH'
                          : entry.crops.length === 2
                          ? 'MEDIUM'
                          : 'LOW'}
                      </span>

                    </div>


                    <div className="flex gap-1 mt-2">

                      {[1, 2, 3, 4, 5].map((bar) => (

                        <div
                          key={bar}
                          className={`h-1.5 flex-1 rounded-full ${
                            bar <=
                            Math.min(5, entry.crops.length + 1)
                              ? 'bg-lime-300/70'
                              : 'bg-white/10'
                          }`}
                        />

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="relative overflow-hidden rounded-[32px] border border-lime-300/10 bg-gradient-to-br from-lime-300/[0.08] to-green-500/[0.03] p-8 md:p-12">

          <div className="absolute right-[-80px] top-[-100px] text-[180px] opacity-[0.04]">
            🌾
          </div>

          <div className="relative max-w-2xl">

            <p className="text-xs text-lime-300 uppercase tracking-[0.2em]">
              Next Step
            </p>

            <h2 className="text-3xl md:text-4xl font-black mt-3">
              Ready to find the best biomass opportunity?
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Use CropVault&apos;s AI planner to combine crop residue,
              distance, logistics and burning risk to identify promising
              locations.
            </p>

            <a
              href="/plan"
              className="inline-flex mt-7 px-6 py-3 rounded-xl bg-lime-300 text-black font-semibold hover:bg-lime-200 transition"
            >
              Launch AI Planner →
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">

          <div>

            <p className="font-bold">
              Crop<span className="text-lime-300">Vault</span>
            </p>

            <p className="text-xs text-gray-600 mt-1">
              Turning agricultural residue into opportunity.
            </p>

          </div>

          <p className="text-xs text-gray-600">
            AI-powered biomass intelligence • Tamil Nadu
          </p>

        </div>

      </footer>

    </main>
  );
}


/* =========================
   SMALL COMPONENT
========================= */

function InfoCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

      <div className="flex items-center justify-between">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-[9px] uppercase tracking-widest text-gray-600">
          CropVault
        </span>

      </div>

      <p className="text-2xl font-black mt-4">
        {value}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}