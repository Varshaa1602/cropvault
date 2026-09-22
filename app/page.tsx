import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07110d] text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute top-[350px] right-[-250px] w-[600px] h-[600px] rounded-full bg-lime-400/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[35%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />

      </div>


      {/* ================= NAVBAR ================= */}

      <nav className="relative z-20 border-b border-white/10 bg-[#07110d]/75 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-300 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-2xl">🌾</span>
            </div>

            <div>

              <h1 className="text-xl font-bold tracking-tight">
                Crop<span className="text-lime-300">Vault</span>
              </h1>

              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                AI • Agriculture • Energy
              </p>

            </div>

          </Link>


          {/* NAV LINKS */}

          <div className="hidden md:flex items-center gap-8 text-sm">

            <span className="text-lime-300">
              Dashboard
            </span>

            <Link
              href="/plan"
              className="text-gray-400 hover:text-white transition"
            >
              AI Planner
            </Link>

            <Link
              href="/calendar"
              className="text-gray-400 hover:text-lime-300 transition"
            >
              Crop Calendar
            </Link>

            <span className="px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 text-green-300 text-xs">
              ● AI Engine Online
            </span>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-14">

        <div className="grid lg:grid-cols-2 gap-14 items-center">


          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-300/20 bg-lime-300/5 text-lime-300 text-xs mb-7">

              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" />

              REIMAGINING AGRICULTURAL WASTE

            </div>


            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.92]">

              Don't burn it.

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-green-400 to-emerald-500">
                Vault it.
              </span>

            </h2>


            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">

              CropVault transforms agricultural residue from a
              waste problem into a clean-energy opportunity using
              <span className="text-white"> AI-powered location intelligence.</span>

            </p>


            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                href="/plan"
                className="group px-6 py-3.5 rounded-xl bg-lime-300 text-black font-bold hover:bg-lime-200 transition shadow-xl shadow-lime-300/10"
              >

                Explore AI Planner

                <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                  →
                </span>

              </Link>


              <Link
                href="/calendar"
                className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition"
              >

                📅 Crop Calendar

              </Link>

            </div>


            {/* TRUST LINE */}

            <div className="flex flex-wrap gap-6 mt-8 text-xs text-gray-600">

              <span>✓ Location intelligence</span>

              <span>✓ AI recommendations</span>

              <span>✓ Environmental impact</span>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 bg-green-400/10 blur-[90px]" />


            <div className="relative rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-2xl">


              {/* CARD HEADER */}

              <div className="flex justify-between items-center mb-6">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    CropVault Intelligence
                  </p>

                  <p className="font-semibold mt-1">
                    Biomass Opportunity
                  </p>

                </div>


                <div className="w-10 h-10 rounded-xl bg-lime-300/10 flex items-center justify-center">
                  🤖
                </div>

              </div>


              {/* CENTRAL VISUAL */}

              <div className="relative h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-950 via-[#0a1912] to-[#07110d] border border-white/10">


                {/* Decorative circles */}

                <div className="absolute w-[280px] h-[280px] rounded-full border border-lime-300/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

                <div className="absolute w-[210px] h-[210px] rounded-full border border-lime-300/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

                <div className="absolute w-[140px] h-[140px] rounded-full border border-lime-300/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />


                {/* Center */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lime-300 to-green-500 flex items-center justify-center shadow-2xl shadow-green-500/30">

                    <span className="text-5xl">
                      🌾
                    </span>

                  </div>

                </div>


                {/* Floating points */}

                <FloatingPoint
                  className="left-8 top-12"
                  icon="🌱"
                  label="Crop"
                />

                <FloatingPoint
                  className="right-8 top-20"
                  icon="📍"
                  label="Location"
                />

                <FloatingPoint
                  className="left-10 bottom-14"
                  icon="🔥"
                  label="Burning Risk"
                />

                <FloatingPoint
                  className="right-8 bottom-12"
                  icon="⚡"
                  label="Energy"
                />


                {/* Bottom status */}

                <div className="absolute bottom-4 left-4 right-4">

                  <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                          AI Analysis
                        </p>

                        <p className="text-sm font-semibold mt-1">
                          Converting waste → opportunity
                        </p>

                      </div>

                      <span className="text-lime-300 text-xs">
                        ● ACTIVE
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* MINI STATS */}

              <div className="grid grid-cols-3 gap-3 mt-4">

                <MiniStat
                  value="AI"
                  label="Planning"
                />

                <MiniStat
                  value="TN"
                  label="Coverage"
                />

                <MiniStat
                  value="24/7"
                  label="Insights"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= IMPACT STATS ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-14">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <StatCard
            icon="🌾"
            value="Crop"
            label="Residue Intelligence"
            description="Identify agricultural surplus"
          />

          <StatCard
            icon="⚡"
            value="Energy"
            label="Conversion Potential"
            description="Find clean-energy opportunities"
          />

          <StatCard
            icon="🌍"
            value="CO₂"
            label="Emission Reduction"
            description="Reduce open-field burning"
          />

          <StatCard
            icon="📍"
            value="District"
            label="Location Intelligence"
            description="Make decisions geographically"
          />

        </div>

      </section>


      {/* ================= PROBLEM → SOLUTION ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-xs text-lime-300 uppercase tracking-[0.2em]">
            The Problem
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-3">
            Waste today.
            <br />
            Opportunity tomorrow.
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Agricultural residue can become an environmental burden
            when it is simply burned or left unused. CropVault helps
            identify where that residue can create value instead.
          </p>

        </div>


        {/* FLOW */}

        <div className="grid md:grid-cols-3 gap-5 mt-12">

          <FlowCard
            number="01"
            icon="🌾"
            title="Crop Residue"
            text="Agricultural fields generate large amounts of leftover biomass after harvest."
          />

          <FlowCard
            number="02"
            icon="🤖"
            title="CropVault AI"
            text="Location, crop, distance and risk factors are combined to rank opportunities."
          />

          <FlowCard
            number="03"
            icon="⚡"
            title="Clean Energy"
            text="The most promising residue sources can be directed toward useful energy solutions."
          />

        </div>

      </section>


      {/* ================= FEATURE SECTION ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-6">


          {/* AI PLANNER */}

          <Link
            href="/plan"
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-8 hover:bg-white/[0.06] transition"
          >

            <div className="absolute right-[-30px] top-[-40px] text-[150px] opacity-[0.035] group-hover:opacity-[0.07] transition">
              🤖
            </div>

            <div className="relative">

              <div className="w-12 h-12 rounded-2xl bg-lime-300/10 flex items-center justify-center text-2xl">
                🤖
              </div>

              <p className="text-xs text-lime-300 uppercase tracking-widest mt-7">
                Feature 01
              </p>

              <h3 className="text-3xl font-bold mt-2">
                AI Opportunity Planner
              </h3>

              <p className="text-gray-500 mt-4 max-w-lg leading-relaxed">
                Adjust energy output, logistics and safety priorities.
                CropVault dynamically ranks locations according to your
                strategy.
              </p>

              <span className="inline-block mt-7 text-lime-300 text-sm font-semibold group-hover:translate-x-1 transition">
                Open Planner →
              </span>

            </div>

          </Link>


          {/* CALENDAR */}

          <Link
            href="/calendar"
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-8 hover:bg-white/[0.06] transition"
          >

            <div className="absolute right-[-30px] top-[-40px] text-[150px] opacity-[0.035] group-hover:opacity-[0.07] transition">
              📅
            </div>

            <div className="relative">

              <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center text-2xl">
                📅
              </div>

              <p className="text-xs text-green-300 uppercase tracking-widest mt-7">
                Feature 02
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Crop Intelligence Calendar
              </h3>

              <p className="text-gray-500 mt-4 max-w-lg leading-relaxed">
                Understand seasonal crop activity and identify when
                agricultural residue is most likely to become available.
              </p>

              <span className="inline-block mt-7 text-green-300 text-sm font-semibold group-hover:translate-x-1 transition">
                Explore Calendar →
              </span>

            </div>

          </Link>

        </div>

      </section>


      {/* ================= BIG CTA ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="relative overflow-hidden rounded-[35px] border border-lime-300/10 bg-gradient-to-br from-lime-300/[0.09] via-green-500/[0.04] to-transparent p-10 md:p-14">

          <div className="absolute right-[-80px] bottom-[-100px] text-[260px] opacity-[0.035]">
            🌾
          </div>

          <div className="relative max-w-3xl">

            <p className="text-xs text-lime-300 uppercase tracking-[0.2em]">
              Start Exploring
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              What if agricultural waste
              <span className="text-lime-300"> became an energy asset?</span>
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              Let CropVault find the locations where crop residue can
              create the greatest potential impact.
            </p>

            <Link
              href="/plan"
              className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-lime-300 text-black font-bold hover:bg-lime-200 transition"
            >
              Discover Opportunities →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-9 flex flex-col md:flex-row justify-between gap-4">

          <div>

            <p className="font-bold text-lg">
              Crop<span className="text-lime-300">Vault</span>
            </p>

            <p className="text-xs text-gray-600 mt-1">
              Turning agricultural residue into opportunity.
            </p>

          </div>

          <div className="flex gap-6 text-xs text-gray-600">

            <Link href="/plan" className="hover:text-lime-300 transition">
              AI Planner
            </Link>

            <Link href="/calendar" className="hover:text-lime-300 transition">
              Crop Calendar
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function FloatingPoint({
  icon,
  label,
  className,
}: {
  icon: string;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute ${className} flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl`}
    >

      <span>
        {icon}
      </span>

      <span className="text-[10px] text-gray-400">
        {label}
      </span>

    </div>
  );
}


function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-black/20 border border-white/5 p-3">

      <p className="font-bold text-lime-300">
        {value}
      </p>

      <p className="text-[9px] text-gray-600 uppercase tracking-wider mt-1">
        {label}
      </p>

    </div>
  );
}


function StatCard({
  icon,
  value,
  label,
  description,
}: {
  icon: string;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5 hover:bg-white/[0.06] transition">

      <div className="flex items-center justify-between">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-[9px] uppercase tracking-widest text-gray-600">
          CropVault
        </span>

      </div>

      <p className="text-2xl font-black mt-5">
        {value}
      </p>

      <p className="text-sm font-semibold mt-1">
        {label}
      </p>

      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>

    </div>
  );
}


function FlowCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-7 hover:bg-white/[0.06] transition">

      <div className="flex items-center justify-between">

        <span className="text-xs text-gray-600 font-mono">
          {number}
        </span>

        <span className="text-2xl">
          {icon}
        </span>

      </div>

      <h3 className="text-xl font-bold mt-8">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
        {text}
      </p>

    </div>
  );
}