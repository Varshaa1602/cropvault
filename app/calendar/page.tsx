'use client';

import cropCalendar from '../../data/cropCalendar.json';

export default function CropCalendarPage() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Tamil Nadu Crop Calendar</h1>
      <p className="text-gray-600 mb-6">
        A month-by-month guide to what&apos;s typically sown, growing, or harvested —
        useful for planning when residue is likely to be available.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cropCalendar.map((entry) => (
          <div
            key={entry.month}
            className={`border rounded-lg p-4 shadow-sm ${
              entry.month === currentMonth ? 'border-green-600 bg-green-50' : ''
            }`}
          >
            <h2 className="font-semibold text-lg mb-2">
              {entry.month}
              {entry.month === currentMonth && (
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {entry.crops.map((crop, i) => (
                <li key={i}>{crop}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}