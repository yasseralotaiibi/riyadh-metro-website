// Metro Lines Data
export const metroLines = [
  {
    id: "blue",
    name: "Blue Line",
    color: "#2563EB",
    bgColor: "bg-blue-600",
    textColor: "text-blue-600",
    stations: 22,
    length: "38 km",
    direction: "Western Station ↔ Eastern Station",
  },
  {
    id: "yellow",
    name: "Yellow Line",
    color: "#EAB308",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-600",
    stations: 20,
    length: "30 km",
    direction: "Northern Ring Road ↔ Southern Ring Road",
  },
  {
    id: "purple",
    name: "Purple Line",
    color: "#9333EA",
    bgColor: "bg-purple-600",
    textColor: "text-purple-600",
    stations: 12,
    length: "29 km",
    direction: "Abdulrahman Bin Auf ↔ Kingdom Centre",
  },
  {
    id: "red",
    name: "Red Line",
    color: "#DC2626",
    bgColor: "bg-red-600",
    textColor: "text-red-600",
    stations: 17,
    length: "41 km",
    direction: "North ↔ South",
  },
  {
    id: "green",
    name: "Green Line",
    color: "#16A34A",
    bgColor: "bg-green-600",
    textColor: "text-green-600",
    stations: 11,
    length: "13 km",
    direction: "Western Ring Road ↔ Qasr Al-Hokm",
  },
  {
    id: "orange",
    name: "Orange Line",
    color: "#F97316",
    bgColor: "bg-orange-500",
    textColor: "text-orange-600",
    stations: 6,
    length: "25 km",
    direction: "Airport ↔ Sports Boulevard",
  },
];

// Fare Information
export const fareInfo = {
  minimum: 4,
  maximum: 8,
  dailyCap: 15,
  currency: "SAR",
  transferWindow: 120, // minutes
};

// Operating Hours
export const operatingHours = {
  start: "5:30 AM",
  end: "12:00 AM",
  peakMorning: { start: "7:00 AM", end: "9:00 AM" },
  peakEvening: { start: "5:00 PM", end: "7:00 PM" },
  frequency: {
    peak: "3-4 minutes",
    offPeak: "6-8 minutes",
    lateEvening: "10-12 minutes",
  },
};

// Contact Information
export const contactInfo = {
  helpline: "19933",
  email: "info@rpt.sa",
  website: "https://rpt.sa",
};

// Helper Functions
export function getLineByName(name: string) {
  return metroLines.find(line => 
    line.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function getLineColor(lineName: string): string {
  const line = getLineByName(lineName);
  return line?.color || "#6B7280";
}

export function formatFare(amount: number): string {
  return `${amount} ${fareInfo.currency}`;
}
