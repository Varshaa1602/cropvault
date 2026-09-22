import locations from '../../data/location.json';
import { rankLocations } from '../../lib/rank';

export default function Plan() {
  const ranked = rankLocations(locations, { output: 1, logistics: 1, safety: 1 });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CropVault</h1>
      <p className="text-gray-600 mb-6">
        Turning Coimbatore's surplus crop residue into clean energy plans.
      </p>
      <div className="grid gap-4">
        {ranked.map((loc) => (
          <div key={loc.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg">{loc.name}</h2>
            <p>Crop: {loc.cropType}</p>
            <p>Surplus: {loc.surplusTons} tons</p>
            <p>Distance: {loc.distanceKm} km</p>
            <p>Risk Score: {loc.riskScore}</p>
            <p className="text-sm text-green-700 font-medium mt-1">
              Score: {loc.finalScore.toFixed(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}