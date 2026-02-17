import { useParams, Link } from "react-router";
import { ArrowLeft, Navigation, Bus, Car, Footprints, MapPin, Accessibility, Wifi, Zap, Phone, Sun, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function StationDetail() {
  const { stationId } = useParams();

  // Mock station data - in real app would fetch based on stationId
  const station = {
    name: "KAFD Station",
    line: "Blue Line",
    lineColor: "bg-blue-600",
    zone: "Central Business",
    description: "Major business district hub serving the King Abdullah Financial District",
    
    exits: [
      {
        name: "Exit A",
        direction: "North",
        leads: "KAFD Mall entrance, Business towers",
        walkTime: "2 min",
        shade: "Covered walkway",
        photo: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop",
      },
      {
        name: "Exit B",
        direction: "South",
        leads: "Hotels, Conference center",
        walkTime: "4 min",
        shade: "Partially shaded",
        photo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      },
      {
        name: "Exit C",
        direction: "East",
        leads: "Park & Ride facility",
        walkTime: "3 min",
        shade: "Covered walkway",
        photo: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop",
      },
    ],
    
    facilities: [
      { icon: Accessibility, name: "Step-free access", detail: "Lifts to all platforms" },
      { icon: Wifi, name: "Free WiFi", detail: "Throughout station" },
      { icon: Zap, name: "Ticket machines", detail: "Cash and card accepted" },
      { icon: Phone, name: "Help points", detail: "24/7 assistance" },
    ],
    
    nearbyPOIs: [
      { name: "KAFD Mall", distance: "2 min walk", exit: "Exit A" },
      { name: "KAFD Business Towers", distance: "3 min walk", exit: "Exit A" },
      { name: "Luxury Hotels", distance: "4 min walk", exit: "Exit B" },
      { name: "Conference Center", distance: "5 min walk", exit: "Exit B" },
    ],
    
    lastMile: [
      {
        mode: "Walking",
        icon: Footprints,
        detail: "5-10 minute radius covers most destinations",
        recommendation: "Best for short trips. Use Exit A for mall.",
        heatWarning: "Partially shaded routes. Consider BoD in summer.",
      },
      {
        mode: "Bus On-Demand",
        icon: Bus,
        detail: "Pickup zones at Exit B and Exit C",
        recommendation: "Recommended for destinations >10 min walk or in hot weather",
        heatWarning: "Book via Darb app - usually 3-5 min wait",
      },
      {
        mode: "Ride-hail / Taxi",
        icon: Car,
        detail: "Designated pickup at Exit C, east side",
        recommendation: "Clear signage and staff assistance available",
        heatWarning: "Average wait 5-8 min during peak hours",
      },
      {
        mode: "Park & Ride",
        icon: MapPin,
        detail: "450 spaces, 24/7 access via Exit C",
        recommendation: "Free parking for metro users. Often full 8am-6pm weekdays.",
        heatWarning: null,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="text-white hover:bg-white/10 mb-4" asChild>
            <Link to="/stations">
              <ArrowLeft className="mr-2 size-4" />
              Back to All Stations
            </Link>
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3 bg-white/20 text-white border-white/30">
                {station.zone}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{station.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className={`size-3 rounded-full ${station.lineColor}`}></div>
                <span className="text-lg">{station.line}</span>
              </div>
              <p className="text-white/90 max-w-2xl">{station.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="exits" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="exits">Exits</TabsTrigger>
              <TabsTrigger value="lastmile">Last Mile</TabsTrigger>
              <TabsTrigger value="nearby">Nearby</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>

            {/* Exits Tab */}
            <TabsContent value="exits" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Station Exits & Directions</h2>
                <p className="text-neutral-600 mb-6">
                  Choose the right exit to save time and stay comfortable
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {station.exits.map((exit) => (
                  <Card key={exit.name} className="overflow-hidden">
                    <div className="aspect-video bg-neutral-200">
                      <img
                        src={exit.photo}
                        alt={exit.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>{exit.name}</CardTitle>
                        <Badge variant="outline">{exit.direction}</Badge>
                      </div>
                      <CardDescription className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Navigation className="size-4 mt-0.5 flex-shrink-0" />
                          <span>{exit.leads}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Footprints className="size-4" />
                          <span>{exit.walkTime}</span>
                          <span className="text-neutral-400">•</span>
                          <span>{exit.shade}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Last Mile Tab */}
            <TabsContent value="lastmile" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">How to Leave This Station</h2>
                <p className="text-neutral-600 mb-6">
                  Top 4 ways passengers actually get to their final destination
                </p>
              </div>

              <Alert className="border-orange-200 bg-orange-50">
                <Sun className="size-4 text-orange-600" />
                <AlertTitle className="text-orange-900">Summer Heat Advisory</AlertTitle>
                <AlertDescription className="text-orange-800">
                  Outdoor temperatures can exceed 45°C May-September. For walks longer than 10 minutes, 
                  we strongly recommend using Bus On-Demand or ride-hail, especially 11am-4pm.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {station.lastMile.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Card key={option.mode}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="mb-2">{option.mode}</CardTitle>
                            <CardDescription className="space-y-3">
                              <div>
                                <span className="font-medium text-neutral-700">Details: </span>
                                {option.detail}
                              </div>
                              <div>
                                <span className="font-medium text-neutral-700">Tip: </span>
                                {option.recommendation}
                              </div>
                              {option.heatWarning && (
                                <div className="flex items-start gap-2 text-orange-700 bg-orange-50 p-2 rounded">
                                  <Sun className="size-4 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{option.heatWarning}</span>
                                </div>
                              )}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Nearby Tab */}
            <TabsContent value="nearby" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">What's Near This Station</h2>
                <p className="text-neutral-600 mb-6">
                  Popular destinations within walking distance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {station.nearbyPOIs.map((poi) => (
                  <Card key={poi.name}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">{poi.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Footprints className="size-4" />
                            {poi.distance}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{poi.exit}</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Station Facilities</h2>
                <p className="text-neutral-600 mb-6">
                  Services and amenities available at this station
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {station.facilities.map((facility) => {
                  const Icon = facility.icon;
                  return (
                    <Card key={facility.name}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="size-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg mb-1">{facility.name}</CardTitle>
                            <CardDescription>{facility.detail}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle>Plan Your Journey to {station.name}</CardTitle>
              <CardDescription className="text-white/80">
                Get step-by-step directions and real-time updates
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-600 hover:bg-neutral-100" asChild>
                <Link to="/plan">
                  Plan My Trip
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Open in Darb App
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}