import { Link } from "react-router";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useLanguage } from "../contexts/LanguageContext";
import { allStations, stationStats } from "../data/stations-data";
import { metroLines } from "../data/metro-data";

export function Stations() {
  const { language, isRtl } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLine, setSelectedLine] = useState("all");

  const filteredStations = allStations.filter((station) => {
    const matchesSearch = language === "ar"
      ? station.nameAr.includes(searchTerm) ||
        (station.nearbyPOIsAr?.some(poi => poi.includes(searchTerm)) ?? false)
      : station.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (station.nearbyPOIs?.some(poi => poi.toLowerCase().includes(searchTerm.toLowerCase())) ?? false);
    
    const matchesLine = selectedLine === "all" || station.line.includes(selectedLine);
    return matchesSearch && matchesLine;
  });

  const content = {
    title: isRtl ? "جميع المحطات" : "All Stations",
    subtitle: isRtl 
      ? `${stationStats.total} محطة عبر ${metroLines.length} خطوط، كل محطة بمعلومات تفصيلية`
      : `${stationStats.total} stations across ${metroLines.length} lines, each with detailed information`,
    searchPlaceholder: isRtl 
      ? "ابحث باسم المحطة أو المكان القريب..."
      : "Search by station name or nearby place...",
    allLines: isRtl ? "جميع الخطوط" : "All Lines",
    showing: isRtl ? "عرض" : "Showing",
    of: isRtl ? "من" : "of",
    stations: isRtl ? "محطة" : "stations",
    nearbyPlaces: isRtl ? "الأماكن القريبة" : "Nearby Places",
    facilities: isRtl ? "المرافق" : "Facilities",
    viewDetails: isRtl ? "عرض التفاصيل والمخارج" : "View Details & Exits",
    networkOverview: isRtl ? "نظرة عامة على الشبكة" : "Network Overview",
    stationsCount: isRtl ? "محطة" : "stations",
    totalLength: isRtl ? "الطول الكلي" : "total length",
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg text-white/90">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-5 text-neutral-400`} />
              <Input
                placeholder={content.searchPlaceholder}
                className={`${isRtl ? 'pr-10' : 'pl-10'} h-12`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedLine} onValueChange={setSelectedLine}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <Filter className={`size-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content.allLines}</SelectItem>
                {metroLines.map((line) => (
                  <SelectItem key={line.id} value={line.name}>
                    {language === "ar" ? line.nameAr : line.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 text-sm text-neutral-600">
            {content.showing} {filteredStations.length} {content.of} {allStations.length} {content.stations}
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
                    <div className={`size-4 rounded-full ${station.lineBgColor}`}></div>
                    {station.zone && (
                      <Badge variant="outline" className="text-xs">
                        {station.zone}
                      </Badge>
                    )}
                  </div>
                  <CardTitle>{language === "ar" ? station.nameAr : station.nameEn}</CardTitle>
                  <CardDescription className="text-sm">
                    {language === "ar" ? station.lineAr : station.line}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(station.nearbyPOIs || station.nearbyPOIsAr) && (
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-2">
                        {content.nearbyPlaces}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {(language === "ar" ? station.nearbyPOIsAr : station.nearbyPOIs)?.map((poi) => (
                          <Badge key={poi} variant="secondary" className="text-xs">
                            {poi}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-2">
                      {content.facilities}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(language === "ar" ? station.facilitiesAr : station.facilities).slice(0, 3).map((facility) => (
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
                    {language === "ar" ? station.stationTypeAr : station.stationType}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/stations/${station.id}`}>
                      {content.viewDetails}
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
          <h2 className="text-2xl font-bold mb-6">{content.networkOverview}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metroLines.map((line) => (
              <div key={line.id} className="p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`size-4 rounded-full ${line.bgColor}`}></div>
                  <div className="font-semibold">
                    {language === "ar" ? line.nameAr : line.name}
                  </div>
                </div>
                <div className="text-sm text-neutral-600 space-y-1">
                  <div>{line.stations} {content.stationsCount}</div>
                  <div>{line.length} {content.totalLength}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
