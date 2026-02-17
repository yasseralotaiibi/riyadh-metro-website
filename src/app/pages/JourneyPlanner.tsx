import { useState } from "react";
import { Search, SlidersHorizontal, ArrowRight, Clock, Footprints, Repeat, Accessibility, Car, TrendingDown, Sun } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function JourneyPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [leastWalking, setLeastWalking] = useState(false);
  const [stepFree, setStepFree] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handlePlanTrip = () => {
    if (from && to) {
      setHasResults(true);
    }
  };

  const routes = [
    {
      id: 1,
      duration: "28 min",
      transfers: 1,
      walking: "8 min",
      fare: "6 SAR",
      steps: [
        { type: "walk", detail: "Walk 3 min to KAFD Station", duration: "3 min" },
        { type: "metro", detail: "Blue Line toward Western Station", duration: "12 min", stops: 8 },
        { type: "transfer", detail: "Transfer at Olaya Station", duration: "5 min" },
        { type: "metro", detail: "Purple Line toward Kingdom Centre", duration: "8 min", stops: 5 },
        { type: "walk", detail: "Walk 5 min to destination", duration: "5 min" },
      ],
      recommended: true,
      tags: ["Fastest"],
    },
    {
      id: 2,
      duration: "35 min",
      transfers: 0,
      walking: "12 min",
      fare: "6 SAR",
      steps: [
        { type: "walk", detail: "Walk 6 min to Al Muruj Station", duration: "6 min" },
        { type: "metro", detail: "Yellow Line toward Kingdom Centre", duration: "23 min", stops: 15 },
        { type: "walk", detail: "Walk 6 min to destination", duration: "6 min" },
      ],
      tags: ["No transfers"],
    },
    {
      id: 3,
      duration: "32 min",
      transfers: 1,
      walking: "4 min",
      fare: "6 SAR",
      steps: [
        { type: "bod", detail: "Bus On-Demand to KAFD Station", duration: "8 min" },
        { type: "metro", detail: "Blue Line toward Western Station", duration: "12 min", stops: 8 },
        { type: "transfer", detail: "Transfer at Olaya Station", duration: "5 min" },
        { type: "metro", detail: "Purple Line toward Kingdom Centre", duration: "7 min", stops: 4 },
      ],
      tags: ["Least walking", "Recommended for heat"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Plan Your Journey</h1>
          <p className="text-lg text-white/90 mb-8">
            Find the best route with filters for speed, accessibility, and walking distance
          </p>

          {/* Search Card */}
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
                    <Input
                      id="from"
                      placeholder="Enter station, address, or landmark"
                      className="pl-10 h-12 text-base"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
                    <Input
                      id="to"
                      placeholder="Enter station, address, or landmark"
                      className="pl-10 h-12 text-base"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="gap-2"
                  >
                    <SlidersHorizontal className="size-4" />
                    Filters & Options
                  </Button>
                </div>

                {showFilters && (
                  <div className="pt-4 border-t space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="least-walking" className="cursor-pointer">
                          Least walking
                        </Label>
                        <Switch
                          id="least-walking"
                          checked={leastWalking}
                          onCheckedChange={setLeastWalking}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="step-free" className="cursor-pointer">
                          Step-free access
                        </Label>
                        <Switch
                          id="step-free"
                          checked={stepFree}
                          onCheckedChange={setStepFree}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Departure time</Label>
                      <Select defaultValue="now">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="now">Leave now</SelectItem>
                          <SelectItem value="custom">Choose time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <Button
                  size="lg"
                  className="w-full"
                  onClick={handlePlanTrip}
                  disabled={!from || !to}
                >
                  Plan My Trip
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {hasResults && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="routes" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="routes">Route Options</TabsTrigger>
                <TabsTrigger value="comparison">vs Car</TabsTrigger>
              </TabsList>

              <TabsContent value="routes" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Route Options</h2>
                  <div className="text-sm text-neutral-600">
                    Showing 3 routes • Updated 1 min ago
                  </div>
                </div>

                {routes.map((route) => (
                  <Card key={route.id} className={route.recommended ? "border-2 border-purple-600" : ""}>
                    {route.recommended && (
                      <div className="bg-purple-50 border-b border-purple-100 px-6 py-2">
                        <Badge className="bg-purple-600">Recommended</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{route.duration}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-1">
                              <Repeat className="size-4" />
                              {route.transfers} transfer{route.transfers !== 1 ? 's' : ''}
                            </div>
                            <div className="flex items-center gap-1">
                              <Footprints className="size-4" />
                              {route.walking} walking
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-semibold">{route.fare}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {route.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {route.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div
                                className={`size-8 rounded-full flex items-center justify-center ${
                                  step.type === "metro"
                                    ? "bg-purple-100 text-purple-600"
                                    : step.type === "walk"
                                    ? "bg-green-100 text-green-600"
                                    : step.type === "bod"
                                    ? "bg-orange-100 text-orange-600"
                                    : "bg-neutral-100 text-neutral-600"
                                }`}
                              >
                                {step.type === "walk" && <Footprints className="size-4" />}
                                {step.type === "metro" && <span className="text-sm font-bold">M</span>}
                                {step.type === "transfer" && <Repeat className="size-4" />}
                                {step.type === "bod" && <span className="text-sm font-bold">B</span>}
                              </div>
                              {idx < route.steps.length - 1 && (
                                <div className="w-0.5 h-12 bg-neutral-200"></div>
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <div className="font-medium">{step.detail}</div>
                              <div className="text-sm text-neutral-600 mt-1">
                                {step.duration}
                                {"stops" in step && ` • ${step.stops} stops`}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4">
                        Open in Darb App
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="comparison">
                <Card>
                  <CardHeader>
                    <CardTitle>Metro vs Car Comparison</CardTitle>
                    <CardDescription>
                      See why metro is the smarter choice for this journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Metro */}
                      <div className="p-6 rounded-lg bg-purple-50 border-2 border-purple-600">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="size-12 rounded-full bg-purple-600 text-white flex items-center justify-center">
                            <span className="text-xl font-bold">M</span>
                          </div>
                          <div>
                            <div className="font-bold text-lg">Riyadh Metro</div>
                            <Badge className="bg-purple-600 mt-1">Recommended</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <Clock className="size-4" />
                              <span>Travel time</span>
                            </div>
                            <span className="font-semibold">28 min</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <TrendingDown className="size-4" />
                              <span>Cost</span>
                            </div>
                            <span className="font-semibold">6 SAR</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <Sun className="size-4" />
                              <span>Comfort</span>
                            </div>
                            <span className="font-semibold text-green-600">Air-conditioned</span>
                          </div>
                          <div className="pt-4 border-t border-purple-200">
                            <div className="text-sm text-neutral-600">Benefits:</div>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-purple-600"></div>
                                No traffic delays
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-purple-600"></div>
                                Predictable arrival time
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-purple-600"></div>
                                Environmentally friendly
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Car */}
                      <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="size-12 rounded-full bg-neutral-600 text-white flex items-center justify-center">
                            <Car className="size-6" />
                          </div>
                          <div>
                            <div className="font-bold text-lg">Private Car</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <Clock className="size-4" />
                              <span>Travel time</span>
                            </div>
                            <span className="font-semibold text-orange-600">35-55 min</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <TrendingDown className="size-4" />
                              <span>Cost</span>
                            </div>
                            <span className="font-semibold text-orange-600">18-25 SAR</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-neutral-600">
                              <Sun className="size-4" />
                              <span>Comfort</span>
                            </div>
                            <span className="font-semibold">Variable</span>
                          </div>
                          <div className="pt-4 border-t border-neutral-200">
                            <div className="text-sm text-neutral-600">Considerations:</div>
                            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-neutral-400"></div>
                                Heavy traffic during peak hours
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-neutral-400"></div>
                                Parking fees and availability
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-neutral-400"></div>
                                Fuel costs
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Tips Section */}
      {!hasResults && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="size-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <Sun className="size-6" />
                  </div>
                  <CardTitle className="text-lg">Beat the Heat</CardTitle>
                  <CardDescription>
                    Use "Least walking" filter to minimize outdoor exposure. Consider Bus On-Demand for longer walks, especially in summer.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="size-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <Clock className="size-4" />
                  </div>
                  <CardTitle className="text-lg">Peak Hours</CardTitle>
                  <CardDescription>
                    Avoid 7-9 AM and 5-7 PM on Blue Line toward KAFD if you're a first-time rider. Trains are frequent but very crowded.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}