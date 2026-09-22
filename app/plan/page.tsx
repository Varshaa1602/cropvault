'use client';

import { useState } from 'react';
import locations from '../../data/locations.json';
import {
  rankLocations,
  calculateImpact,
  getDistricts,
} from '../../lib/rank';

export default function Plan() {
  const [output, setOutput] = useState(1);
  const [logistics, setLogistics] = useState(1);
  const [safety, setSafety] = useState(1);

  const [chatOpenId, setChatOpenId] = useState<string | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const districts = getDistricts(locations);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  const filteredLocations = locations.filter(
    (loc) => loc.district === selectedDistrict
  );

  const ranked = rankLocations(filteredLocations, {
    output,
    logistics,
    safety,
  });

  async function askAboutLocation(loc: any) {
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: loc,
          question: question || 'Why is this a good option?',
        }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setAnswer('Unable to get AI recommendation right now.');
    }

    setLoading(false);
  }

  const totalSurplus = ranked.reduce(
    (sum, loc) => sum + Number(loc.surplusTons),
    0
  );

  const totalImpact = ranked.reduce(
    (sum, loc) => sum + Number(calculateImpact(loc.surplusTons).co2SavedTons),
    0
  );

  return (
    <main className="min-h-screen bg-[#07110d] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[300px] right-[-200px] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px]" />

      {/* NAVBAR */}
      <nav className="relative z-10 border-b border-white/10 bg-[#07110d]/70 backdrop-blur-xl sticky top-0">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-300 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-2xl">🌾</span>
            </div>

            <div>
              <h1 className="font-bold text-xl tracking-tight">
                Crop<span className="text-lime-300">Vault</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                AI • Agriculture • Energy
              </p>
            </div>

          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition">
              Dashboard
            </a>

            <a
              href="/calendar"
              className="hover:text-lime-300 transition"
            >
              Crop Calendar
            </a>

            <span className="px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 text-green-300 text-xs">
              ● AI Engine Online
            </span>
          </div>

        </div>

      </nav>


      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-300/20 bg-lime-300/5 text-lime-300 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" />
              SMART BIOMASS PLANNING PLATFORM
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Turn crop
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-green-400 to-emerald-500">
                waste
              </span>

              <br />

              into energy.
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
              CropVault uses location intelligence and AI-powered scoring
              to discover where agricultural residue can create the
              greatest environmental and economic impact.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="/calendar"
                className="px-6 py-3 rounded-xl bg-lime-300 text-black font-semibold hover:bg-lime-200 transition shadow-lg shadow-lime-300/10"
              >
                Explore Crop Calendar →
              </a>

              <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300">
                🇮🇳 Tamil Nadu
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="relative">

            <div className="absolute inset-0 bg-green-400/10 blur-[80px]" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-2xl">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Live Opportunity Map
                  </p>

                  <p className="text-lg font-semibold mt-1">
                    {selectedDistrict}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center">
                  🗺️
                </div>

              </div>

              <div className="h-[300px] rounded-2xl overflow-hidden border border-white/10 relative">

                {ranked[0] ? (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: 'saturate(0.7)',
                    }}
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${ranked[0].lat},${ranked[0].lng}&z=10&output=embed`}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No locations available
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4">

                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3">

                    <div className="flex justify-between items-center">

                      <div>
                        <p className="text-xs text-gray-400">
                          Top opportunity
                        </p>

                        <p className="font-semibold">
                          {ranked[0]?.name || 'Analyzing...'}
                        </p>
                      </div>

                      <span className="text-lime-300 font-bold">
                        {ranked[0]?.finalScore?.toFixed(1) || '--'}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* METRICS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Metric
            icon="🌾"
            label="Residue Available"
            value={`${totalSurplus.toLocaleString()} t`}
          />

          <Metric
            icon="🌍"
            label="CO₂ Potential"
            value={`${totalImpact.toLocaleString()} t`}
          />

          <Metric
            icon="📍"
            label="Locations"
            value={ranked.length.toString()}
          />

          <Metric
            icon="🤖"
            label="AI Ranking"
            value="ACTIVE"
          />

        </div>

      </section>


      {/* MAIN DASHBOARD */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-[330px_1fr] gap-6">


          {/* CONTROL PANEL */}
          <aside className="h-fit lg:sticky lg:top-24">

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    AI Planner
                  </p>

                  <h3 className="text-xl font-bold mt-1">
                    Build your strategy
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-xl bg-lime-300/10 flex items-center justify-center">
                  ⚙️
                </div>

              </div>


              {/* DISTRICT */}
              <label className="text-xs text-gray-400 uppercase tracking-wider">
                Target District
              </label>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="mt-2 w-full bg-[#0b1914] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-lime-300/50 transition"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>


              <div className="border-t border-white/10 my-7" />


              <PrioritySlider
                label="Energy Output"
                value={output}
                setValue={setOutput}
                icon="⚡"
                description="Maximize energy generation"
              />

              <PrioritySlider
                label="Logistics"
                value={logistics}
                setValue={setLogistics}
                icon="🚚"
                description="Reduce transportation cost"
              />

              <PrioritySlider
                label="Safety"
                value={safety}
                setValue={setSafety}
                icon="🔥"
                description="Reduce open-field burning"
              />


              <div className="mt-7 rounded-2xl bg-gradient-to-br from-lime-300/10 to-green-500/5 border border-lime-300/10 p-4">

                <div className="flex gap-3">

                  <span className="text-xl">
                    💡
                  </span>

                  <div>
                    <p className="font-semibold text-sm">
                      Smart weighting
                    </p>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Adjust the priorities to see how the AI changes
                      the recommended locations.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </aside>


          {/* RESULTS */}
          <div>

            <div className="flex items-end justify-between mb-5">

              <div>
                <p className="text-xs text-lime-300 uppercase tracking-[0.2em]">
                  AI Recommendations
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  Best opportunities
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Ranked using your selected priorities.
                </p>
              </div>

              <span className="hidden md:block text-xs text-gray-500">
                {ranked.length} opportunities found
              </span>

            </div>


            <div className="space-y-5">

              {ranked.map((loc, index) => {

                const impact = calculateImpact(loc.surplusTons);

                return (

                  <div
                    key={loc.id}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.035] hover:bg-white/[0.055] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-lime-300/20"
                  >

                    {/* TOP ACCENT */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] ${
                        index === 0
                          ? 'bg-gradient-to-r from-lime-300 via-green-400 to-transparent'
                          : 'bg-white/5'
                      }`}
                    />


                    <div className="p-6">

                      {/* HEADER */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                        <div className="flex gap-4 items-start">

                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                              index === 0
                                ? 'bg-lime-300 text-black'
                                : 'bg-white/5 text-gray-400'
                            }`}
                          >
                            #{index + 1}
                          </div>

                          <div>

                            <div className="flex items-center gap-2 flex-wrap">

                              <h3 className="text-xl font-bold">
                                {loc.name}
                              </h3>

                              {index === 0 && (
                                <span className="text-[10px] px-2 py-1 rounded-full bg-lime-300/10 text-lime-300 border border-lime-300/20">
                                  TOP MATCH
                                </span>
                              )}

                            </div>

                            <p className="text-sm text-gray-500 mt-1">
                              {loc.cropType} residue • {loc.distanceKm} km logistics
                            </p>

                          </div>

                        </div>


                        <div className="text-left md:text-right">

                          <p className="text-xs text-gray-500">
                            AI SCORE
                          </p>

                          <p className="text-3xl font-black text-lime-300">
                            {loc.finalScore.toFixed(1)}
                          </p>

                        </div>

                      </div>


                      {/* DATA GRID */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">

                        <DataBox
                          icon="🌾"
                          label="Surplus"
                          value={`${loc.surplusTons} t`}
                        />

                        <DataBox
                          icon="🚚"
                          label="Distance"
                          value={`${loc.distanceKm} km`}
                        />

                        <DataBox
                          icon="🔥"
                          label="Risk"
                          value={`${loc.riskScore}`}
                        />

                        <DataBox
                          icon="⚡"
                          label="Potential"
                          value={`${impact.co2SavedTons}t CO₂`}
                        />

                      </div>


                      {/* IMPACT */}
                      <div className="mt-5 rounded-2xl bg-gradient-to-r from-green-400/[0.08] to-transparent border border-green-400/10 p-5">

                        <div className="flex items-center gap-2 mb-4">

                          <span>🌍</span>

                          <p className="font-semibold">
                            Environmental Impact
                          </p>

                        </div>


                        <div className="grid grid-cols-3 gap-4">

                          <Impact
                            value={`${impact.co2SavedTons}t`}
                            label="CO₂ avoided"
                          />

                          <Impact
                            value={`${impact.coSavedKg}kg`}
                            label="CO avoided"
                          />

                          <Impact
                            value={`${impact.pmSavedKg}kg`}
                            label="PM avoided"
                          />

                        </div>

                      </div>


                      {/* ACTIONS */}
                      <div className="flex flex-wrap gap-3 mt-5">

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm transition"
                        >
                          📍 Open in Maps
                        </a>


                        <button
                          onClick={() => {
                            setChatOpenId(
                              chatOpenId === loc.id ? null : loc.id
                            );
                            setAnswer('');
                            setQuestion('');
                          }}
                          className="px-4 py-2.5 rounded-xl bg-lime-300/10 border border-lime-300/20 text-lime-300 hover:bg-lime-300/15 text-sm transition"
                        >
                          🤖 Ask CropVault AI
                        </button>

                      </div>


                      {/* MAP */}
                      <div className="mt-5 rounded-2xl overflow-hidden border border-white/10">

                        <iframe
                          width="100%"
                          height="230"
                          style={{
                            border: 0,
                            filter: 'saturate(0.65)',
                          }}
                          loading="lazy"
                          src={`https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=12&output=embed`}
                        />

                      </div>


                      {/* AI CHAT */}
                      {chatOpenId === loc.id && (

                        <div className="mt-5 rounded-2xl border border-lime-300/10 bg-lime-300/[0.03] p-5">

                          <div className="flex gap-3 mb-4">

                            <div className="w-10 h-10 rounded-xl bg-lime-300/10 flex items-center justify-center">
                              🤖
                            </div>

                            <div>
                              <p className="font-semibold">
                                CropVault AI
                              </p>

                              <p className="text-xs text-gray-500">
                                Ask why this location was recommended.
                              </p>
                            </div>

                          </div>


                          <div className="flex gap-2">

                            <input
                              type="text"
                              placeholder="Why is this location a good option?"
                              value={question}
                              onChange={(e) =>
                                setQuestion(e.target.value)
                              }
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  askAboutLocation(loc);
                                }
                              }}
                              className="flex-1 bg-[#091510] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-lime-300/40"
                            />

                            <button
                              onClick={() => askAboutLocation(loc)}
                              disabled={loading}
                              className="px-5 rounded-xl bg-lime-300 text-black font-semibold text-sm hover:bg-lime-200 transition disabled:opacity-50"
                            >
                              {loading ? '...' : 'Ask'}
                            </button>

                          </div>


                          {answer && (

                            <div className="mt-4 rounded-xl bg-black/20 border border-white/5 p-4">

                              <p className="text-xs text-lime-300 mb-2">
                                AI INSIGHT
                              </p>

                              <p className="text-sm text-gray-300 leading-relaxed">
                                {answer}
                              </p>

                            </div>

                          )}

                        </div>

                      )}

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 relative z-10">

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
   COMPONENTS
========================= */

function Metric({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5 hover:bg-white/[0.06] transition">

      <div className="flex items-center justify-between">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-[10px] text-gray-600 uppercase tracking-widest">
          Live
        </span>

      </div>

      <p className="text-2xl font-bold mt-4">
        {value}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}


function DataBox({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-black/20 border border-white/5 p-4">

      <span className="text-sm">
        {icon}
      </span>

      <p className="text-[10px] uppercase tracking-wider text-gray-600 mt-3">
        {label}
      </p>

      <p className="font-semibold mt-1">
        {value}
      </p>

    </div>
  );
}


function Impact({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>

      <p className="text-lg font-bold text-green-300">
        {value}
      </p>

      <p className="text-[10px] text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}


function PrioritySlider({
  label,
  value,
  setValue,
  icon,
  description,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  icon: string;
  description: string;
}) {
  return (
    <div className="mb-7">

      <div className="flex justify-between items-start mb-3">

        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
            {icon}
          </div>

          <div>

            <p className="text-sm font-semibold">
              {label}
            </p>

            <p className="text-[10px] text-gray-600 mt-1">
              {description}
            </p>

          </div>

        </div>

        <span className="text-lime-300 font-bold text-sm">
          {value}
        </span>

      </div>


      <input
        type="range"
        min="0"
        max="5"
        step="0.5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-lime-300 cursor-pointer"
      />

      <div className="flex justify-between text-[9px] text-gray-600 mt-1">
        <span>LOW</span>
        <span>HIGH</span>
      </div>

    </div>
  );
}