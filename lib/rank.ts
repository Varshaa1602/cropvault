type Location = {
  id: string;
  name: string;
  cropType: string;
  surplusTons: number;
  distanceKm: number;
  riskScore: number;
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