'use client';

import { useState } from 'react';
import locations from '../../data/locations.json';
import { rankLocations, calculateImpact, getDistricts } from '../../lib/rank';

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

  const filteredLocations = locations.filter((loc) => loc.district === selectedDistrict);
  const ranked = rankLocations(filteredLocations, { output, logistics, safety });

  async function askAboutLocation(loc: any) {
    setLoading(true);
    setAnswer('');
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: loc,
        question: question || 'Why is this a good option?',
      }),
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CropVault</h1>
      <p className="text-gray-600 mb-6">
        Turning TamilNadu&apos;s surplus crop residue into clean energy plans, district by district.
      </p>
      <div className="mb-6">
      <label className="block font-medium mb-1">Select District</label>
      <select
      value={selectedDistrict}
      onChange={(e) => setSelectedDistrict(e.target.value)}
      className="w-full border rounded px-3 py-2"
  >
    {districts.map((d) => (
      <option key={d} value={d}>
        {d}
      </option>
    ))}
  </select>
</div>

      <div className="mb-8 space-y-4 border rounded-lg p-4">
        <div>
          <label className="block font-medium mb-1">
            Prioritize Output: {output}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={output}
            onChange={(e) => setOutput(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Prioritize Low Logistics Cost: {logistics}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={logistics}
            onChange={(e) => setLogistics(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Prioritize Low Risk (avoid burning): {safety}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={safety}
            onChange={(e) => setSafety(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {ranked.map((loc) => {
          const impact = calculateImpact(loc.surplusTons);
          return (
            <div key={loc.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="font-semibold text-lg">{loc.name}</h2>
              <p>Crop: {loc.cropType}</p>
              <p>Surplus: {loc.surplusTons} tons</p>
              <p>Distance: {loc.distanceKm} km</p>
              <p>Risk Score: {loc.riskScore}</p>
              <p className="text-sm text-green-700 font-medium mt-1 mb-3">
                Score: {loc.finalScore.toFixed(1)}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-md p-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-gray-500">CO₂ Avoided</p>
                  <p className="font-semibold text-green-800">{impact.co2SavedTons}t</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">CO Avoided</p>
                  <p className="font-semibold text-green-800">{impact.coSavedKg}kg</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">PM Avoided</p>
                  <p className="font-semibold text-green-800">{impact.pmSavedKg}kg</p>
                </div>
              </div>

              <div className="mt-3">
                {chatOpenId === loc.id ? (
                  <div className="border-t pt-3 mt-3">
                    <input
                      type="text"
                      placeholder="Ask why this location was recommended..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full border rounded px-3 py-2 text-sm mb-2"
                    />
                    <button
                      onClick={() => askAboutLocation(loc)}
                      disabled={loading}
                      className="bg-green-700 text-white px-4 py-1.5 rounded text-sm hover:bg-green-800 disabled:opacity-50"
                    >
                      {loading ? 'Thinking...' : 'Ask'}
                    </button>
                    {answer && (
                     <p className="text-sm bg-gray-50 border rounded p-3 mt-2 text-gray-900">
                        {answer}
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setChatOpenId(loc.id);
                      setAnswer('');
                      setQuestion('');
                    }}
                    className="text-sm text-green-700 underline mt-2"
                  >
                    Ask about this recommendation
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}