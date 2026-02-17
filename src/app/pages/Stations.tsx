import { Link } from "react-router";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function Stations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLine, setSelectedLine] = useState("all");

  const stations = [
    {
      id: "kafd",
      name: "KAFD Station",
      line: "Blue Line",
      lineColor: "bg-blue-600",
      zone: "Central",
      facilities: ["Park & Ride", "Family Car", "Lifts", "WiFi"],
      nearbyPOIs: ["KAFD Mall", "Business District", "Hotels"],
      walkTime: "2-5 min to main destinations",
    },
    {
      id: "national-museum",
      name: "National Museum",
      line: "Red Line",
      lineColor: "bg-red-600",
      zone: "Heritage",
      facilities: ["Family Car", "Lifts", "WiFi", "Prayer Room"],
      nearbyPOIs: ["National Museum", "Murabba Palace", "Cultural Sites"],
      walkTime: "5 min to museum entrance",
    },
    {
      id: "kingdom-centre",
      name: "Kingdom Centre",
      line: "Purple Line",
      lineColor: "bg-purple-600",
      zone: "Commercial",
      facilities: ["Park & Ride", "Family Car", "Lifts", "WiFi", "Retail"],
      nearbyPOIs: ["Kingdom Centre Mall", "Al Faisaliah Tower", "Restaurants"],
      walkTime: "3 min to mall entrance",
    },
    {
      id: "olaya",
      name: "Olaya Station",
      line: "Multiple Lines",
      lineColor: "bg-gradient-to-r from-blue-600 to-purple-600",
      zone: "Transfer Hub",
      facilities: ["Transfer Hub", "Family Car", "Lifts", "WiFi", "Shops"],
      nearbyPOIs: ["Olaya District", "Business Towers", "Shopping"],
      walkTime: "Major interchange station",
    },
    {
      id: "riyadh-park",
      name: "Riyadh Park",
      line: "Yellow Line",
      lineColor: "bg-yellow-500",
      zone: "Shopping",
      facilities: ["Park & Ride", "Family Car", "Lifts", "WiFi"],
      nearbyPOIs: ["Riyadh Park Mall", "Entertainment", "Dining"],
      walkTime: "4 min to mall entrance",
    },
    {
      id: "qasr-al-hokm",
      name: "Qasr Al-Hokm",
      line: "Green Line",
      lineColor: "bg-green-600",
      zone: "Historic",
      facilities: ["Family Car", "Lifts", "WiFi", "Tourist Info"],
      nearbyPOIs: ["Qasr Al-Hokm", "Souq", "Historic District"],
      walkTime: "6 min to historic center",
    },
    {
      id: "airport",
      name: "King Khalid Airport",
      line: "Orange Line",
      lineColor: "bg-orange-500",
      zone: "Airport",
      facilities: ["Luggage Help", "Family Car", "Lifts", "WiFi", "Info Desk"],
      nearbyPOIs: ["All Terminals", "Hotels", "Airport Services"],
      walkTime: "Direct connection to terminals",
    },
    {
      id: "western",
      name: "Western Station",
      line: "Blue Line",
      lineColor: "bg-blue-600",
      zone: "Residential",
      facilities: ["Park & Ride", "Family Car", "Lifts", "Bus Hub"],
      nearbyPOIs: ["Residential Areas", "Schools", "Local Services"],
      walkTime: "Bus connections available",
    },
  ];

  const filteredStations = stations.filter((station) => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.nearbyPOIs.some(poi => poi.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLine = selectedLine === "all" || station.line.includes(selectedLine);
    return matchesSearch && matchesLine;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">All Stations</h1>
          <p className="text-lg text-white/90">
            85 stations across 6 lines, each with detailed last-mile information
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <Input
                placeholder="Search by station name or nearby place..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedLine} onValueChange={setSelectedLine}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <Filter className="size-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Lines</SelectItem>
                <SelectItem value="Blue">Blue Line</SelectItem>
                <SelectItem value="Yellow">Yellow Line</SelectItem>
                <SelectItem value="Purple">Purple Line</SelectItem>
                <SelectItem value="Red">Red Line</SelectItem>
                <SelectItem value="Green">Green Line</SelectItem>
                <SelectItem value="Orange">Orange Line</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 text-sm text-neutral-600">
            Showing {filteredStations.length} of {stations.length} stations
          </div>
        </div>
      </section>

      {/* Stations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <Card key={station.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`size-4 rounded-full ${station.lineColor}`}></div>
                    <Badge variant="outline" className="text-xs">
                      {station.zone}
                    </Badge>
                  </div>
                  <CardTitle>{station.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {station.line}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-2">
                      Nearby Places
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {station.nearbyPOIs.map((poi) => (
                        <Badge key={poi} variant="secondary" className="text-xs">
                          {poi}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-2">
                      Facilities
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {station.facilities.slice(0, 3).map((facility) => (
                        <Badge key={facility} variant="outline" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                      {station.facilities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{station.facilities.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-neutral-600 pt-2 border-t">
                    {station.walkTime}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/stations/${station.id}`}>
                      View Details & Exits
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Line Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Network Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Blue Line", color: "bg-blue-600", stations: 22, length: "38 km" },
              { name: "Yellow Line", color: "bg-yellow-500", stations: 20, length: "30 km" },
              { name: "Purple Line", color: "bg-purple-600", stations: 12, length: "29 km" },
              { name: "Red Line", color: "bg-red-600", stations: 17, length: "41 km" },
              { name: "Green Line", color: "bg-green-600", stations: 11, length: "13 km" },
              { name: "Orange Line", color: "bg-orange-500", stations: 6, length: "25 km" },
            ].map((line) => (
              <div key={line.name} className="p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`size-4 rounded-full ${line.color}`}></div>
                  <div className="font-semibold">{line.name}</div>
                </div>
                <div className="text-sm text-neutral-600 space-y-1">
                  <div>{line.stations} stations</div>
                  <div>{line.length} total length</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
