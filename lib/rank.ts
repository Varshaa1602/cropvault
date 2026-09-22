type Location = {
  id: string;
  name: string;
  cropType: string;
  district: string
  surplusTons: number;
  distanceKm: number;
  riskScore: number;
  lat: number;
  lng: number;
};

type Priorities = {
  output: number;
  logistics: number;
  safety: number;
};

export function rankLocations(locations: Location[], priorities: Priorities) {
  return locations
    .map((loc) => ({
      ...loc,
      finalScore:
        priorities.output * loc.surplusTons -
        priorities.logistics * loc.distanceKm -
        priorities.safety * (loc.riskScore * 100),
    }))
    .sort((a, b) => b.finalScore - a.finalScore);
}
export function calculateImpact(surplusTons: number) {
  const co2SavedKg = surplusTons * 1400;
  const coSavedKg = surplusTons * 58;
  const pmSavedKg = surplusTons * 11;

  return {
    co2SavedTons: (co2SavedKg / 1000).toFixed(1),
    coSavedKg: coSavedKg.toFixed(0),
    pmSavedKg: pmSavedKg.toFixed(0),
  };
}
export function getDistricts(locations: { district: string }[]) {
  const unique = Array.from(new Set(locations.map((loc) => loc.district)));
  return unique.sort();
}