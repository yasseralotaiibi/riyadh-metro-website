import { Plane, MapPin, CreditCard, Globe, Camera, Sun, Clock } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Visitors() {
  const itineraries = [
    {
      title: "Heritage Day (1 Day)",
      destinations: [
        { name: "National Museum", line: "Red", duration: "2 hours" },
        { name: "Qasr Al-Hokm", line: "Green", duration: "1.5 hours" },
        { name: "Souq & Traditional District", line: "Green", duration: "2 hours" },
      ],
    },
    {
      title: "Modern Riyadh (1 Day)",
      destinations: [
        { name: "KAFD", line: "Blue", duration: "2 hours" },
        { name: "Kingdom Centre", line: "Purple", duration: "2 hours" },
        { name: "Al Faisaliah Tower", line: "Purple", duration: "1 hour" },
      ],
    },
    {
      title: "Shopping Weekend (2-3 Days)",
      destinations: [
        { name: "Riyadh Park Mall", line: "Yellow", duration: "3-4 hours" },
        { name: "Kingdom Mall", line: "Purple", duration: "2-3 hours" },
        { name: "KAFD Mall", line: "Blue", duration: "2-3 hours" },
      ],
    },
  ];

  const culturalTips = [
    {
      title: "Dress Code",
      description: "Modest dress is expected in public. For women, abaya is not legally required but covering shoulders and knees is respectful. Men should avoid shorts in many areas.",
    },
    {
      title: "Prayer Times",
      description: "Shops and some stations may pause service during the 5 daily prayer times (especially Maghrib and Isha). Metro continues running but expect some services to pause briefly.",
    },
    {
      title: "Photography",
      description: "Do not photograph people (especially women) without permission. Taking photos of government buildings or security areas may not be allowed. Landmarks and empty metro cars are fine.",
    },
    {
      title: "Family Car",
      description: "Front and rear cars are for families and women. Solo male travelers should use middle cars. This is a social norm, not law, but please respect it.",
    },
    {
      title: "Weekend",
      description: "Saudi weekend is Friday-Saturday. Many attractions are busiest Thursday-Friday evenings. Sunday is the first working day of the week.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Globe className="size-3 mr-1" />
            Tourists & Visitors
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Riyadh</h1>
          <p className="text-xl text-white/90">
            Your complete guide to exploring Riyadh by metro - from airport to top attractions
          </p>
        </div>
      </section>

      {/* Airport Connection */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <Plane className="size-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">From Airport to City</h2>
              <p className="text-neutral-600">King Khalid International Airport</p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardTitle>Orange Line Connection</CardTitle>
              <CardDescription>Direct metro access from all terminals</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Step-by-Step from Airport:</h4>
                  <ol className="space-y-3">
                    {[
                      "Follow purple/orange 'Metro' signs from arrivals hall",
                      "Take escalator/lift down to metro level (clearly marked)",
                      "Buy ticket at machines or tap contactless bank card at gates",
                      "Board Orange Line train (direction: City Center)",
                      "Choose your destination - popular stops below",
                    ].map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="size-6 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Popular Destinations from Airport:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { destination: "KAFD / Business District", line: "Orange → Blue", time: "38 min", transfers: 1 },
                      { destination: "Kingdom Centre / Hotels", line: "Orange → Purple", time: "42 min", transfers: 1 },
                      { destination: "Downtown / Old Riyadh", line: "Orange → Red", time: "35 min", transfers: 1 },
                      { destination: "Riyadh Park Mall", line: "Orange → Yellow", time: "45 min", transfers: 1 },
                    ].map((route) => (
                      <div key={route.destination} className="p-4 rounded-lg border border-neutral-200 hover:border-orange-300 transition-colors">
                        <div className="font-medium mb-2">{route.destination}</div>
                        <div className="text-sm text-neutral-600 space-y-1">
                          <div>{route.line}</div>
                          <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            {route.time} • {route.transfers} transfer
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <CreditCard className="size-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">How to Pay</h2>
              <p className="text-neutral-600">Easy options for international visitors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-600">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-600">Easiest for Tourists</Badge>
                <CardTitle>Contactless Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ Use your international Visa/Mastercard</p>
                <p>✓ Just tap at entry and exit gates</p>
                <p>✓ Charged automatically in SAR</p>
                <p>✓ No need to buy anything</p>
                <p className="pt-3 border-t text-xs text-neutral-600">
                  Check with your bank about foreign transaction fees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Darb Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ Buy at station machines (10 SAR)</p>
                <p>✓ Load credit as needed</p>
                <p>✓ Reusable for multiple trips</p>
                <p>✗ Non-refundable card fee</p>
                <p className="pt-3 border-t text-xs text-neutral-600">
                  Better if you're staying longer or want a souvenir
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Darb App</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ Download and register</p>
                <p>✓ Add payment method</p>
                <p>✓ Generate QR tickets</p>
                <p>✗ Requires internet and setup time</p>
                <p className="pt-3 border-t text-xs text-neutral-600">
                  Best for tech-savvy visitors planning multiple days
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Suggested Itineraries by Metro</h2>
          <Tabs defaultValue="heritage" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="heritage">Heritage</TabsTrigger>
              <TabsTrigger value="modern">Modern</TabsTrigger>
              <TabsTrigger value="shopping">Shopping</TabsTrigger>
            </TabsList>

            {itineraries.map((itinerary, idx) => (
              <TabsContent key={idx} value={itinerary.title.toLowerCase().split(' ')[0]}>
                <Card>
                  <CardHeader>
                    <CardTitle>{itinerary.title}</CardTitle>
                    <CardDescription>Explore Riyadh's best by metro</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {itinerary.destinations.map((dest, destIdx) => (
                        <div key={destIdx} className="flex gap-4 items-start p-4 rounded-lg border border-neutral-200">
                          <div className="size-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 font-bold">
                            {destIdx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg mb-1">{dest.name}</div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                              <Badge variant="outline">{dest.line} Line</Badge>
                              <span>Suggested: {dest.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" asChild>
                      <Link to="/plan">Plan This Journey</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Top 10 Tourist Destinations by Metro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "National Museum", station: "National Museum", line: "Red", exit: "Exit A", walk: "5 min" },
              { name: "Kingdom Centre & Sky Bridge", station: "Kingdom Centre", line: "Purple", exit: "Exit C", walk: "3 min" },
              { name: "Qasr Al-Hokm & Historic District", station: "Qasr Al-Hokm", line: "Green", exit: "Exit A", walk: "6 min" },
              { name: "KAFD & Modern Architecture", station: "KAFD", line: "Blue", exit: "Exit B", walk: "2 min" },
              { name: "Riyadh Park Mall", station: "Riyadh Park", line: "Yellow", exit: "Exit A", walk: "4 min" },
              { name: "Al Faisaliah Tower", station: "Olaya", line: "Purple", exit: "Exit D", walk: "8 min" },
              { name: "Diriyah Gate (UNESCO Site)", station: "Irqah", line: "Red", exit: "Exit B", walk: "15 min + taxi recommended" },
              { name: "Boulevard Riyadh City", station: "Eastern Ring Road", line: "Blue", exit: "Exit C", walk: "10 min" },
              { name: "Masmak Fort", station: "Qasr Al-Hokm", line: "Green", exit: "Exit B", walk: "12 min" },
              { name: "Via Riyadh", station: "Northern Ring Road", line: "Yellow", exit: "Exit A", walk: "8 min" },
            ].map((dest, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{dest.name}</CardTitle>
                    <Badge variant="outline" className="flex-shrink-0">{dest.line}</Badge>
                  </div>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      {dest.station} Station
                    </div>
                    <div className="text-xs text-neutral-500">
                      {dest.exit} • {dest.walk}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <Camera className="size-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cultural Tips for Visitors</h2>
              <p className="text-neutral-600">Respectful travel in Saudi Arabia</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalTips.map((tip) => (
              <Card key={tip.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription className="text-base">
                    {tip.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl text-white/90 mb-8">
            Download helpful guides or chat with 24/7 tourist support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-neutral-100">
              Download Visitor Guide (PDF)
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link to="/faq">
                Browse FAQ
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}