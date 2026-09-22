import locations from '../../data/location.json';
import { rankLocations , calculateImpact } from '../../lib/rank';

export default function Plan() {
  const ranked = rankLocations(locations, { output: 1, logistics: 1, safety: 1 });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CropVault</h1>
      <p className="text-gray-600 mb-6">
        Turning Coimbatore's surplus crop residue into clean energy plans.
      </p>
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
    </div>
  );
})}
      </div>
    </div>
  );
}