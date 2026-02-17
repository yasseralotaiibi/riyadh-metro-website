import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function ServiceStatus() {
  const lines = [
    {
      name: "Blue Line",
      color: "bg-blue-600",
      status: "normal",
      message: "All services operating normally",
      lastUpdate: "2 mins ago",
      stations: 22,
      nextTrain: "3 min",
    },
    {
      name: "Yellow Line",
      color: "bg-yellow-500",
      status: "normal",
      message: "All services operating normally",
      lastUpdate: "1 min ago",
      stations: 20,
      nextTrain: "4 min",
    },
    {
      name: "Purple Line",
      color: "bg-purple-600",
      status: "normal",
      message: "All services operating normally",
      lastUpdate: "3 mins ago",
      stations: 12,
      nextTrain: "5 min",
    },
    {
      name: "Red Line",
      color: "bg-red-600",
      status: "minor",
      message: "Minor delays at Al Olaya station due to increased crowding",
      lastUpdate: "5 mins ago",
      stations: 17,
      nextTrain: "6 min",
    },
    {
      name: "Green Line",
      color: "bg-green-600",
      status: "normal",
      message: "All services operating normally",
      lastUpdate: "2 mins ago",
      stations: 11,
      nextTrain: "4 min",
    },
    {
      name: "Orange Line",
      color: "bg-orange-500",
      status: "normal",
      message: "All services operating normally",
      lastUpdate: "1 min ago",
      stations: 6,
      nextTrain: "8 min",
    },
  ];

  const facilitiesStatus = [
    { facility: "Lifts at KAFD Station", status: "All operational", type: "normal" },
    { facility: "WiFi network", status: "All stations connected", type: "normal" },
    { facility: "Ticket machines", status: "2 machines under maintenance at Olaya", type: "minor" },
    { facility: "Park & Ride facilities", status: "All operational, 78% capacity", type: "normal" },
    { facility: "Bus On-Demand service", status: "Operating normally", type: "normal" },
  ];

  const upcomingMaintenance = [
    {
      line: "Yellow Line",
      date: "Feb 20-21, 2026",
      time: "12:00 AM - 5:30 AM",
      impact: "No service between Kingdom Centre and Riyadh Park",
      alternative: "Use Purple Line + Bus On-Demand",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle2 className="size-5 text-green-600" />;
      case "minor":
        return <AlertTriangle className="size-5 text-orange-600" />;
      case "disrupted":
        return <XCircle className="size-5 text-red-600" />;
      default:
        return <CheckCircle2 className="size-5 text-green-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge className="bg-[#00FF00] text-black border-none font-bold">Good Service</Badge>;
      case "minor":
        return <Badge className="bg-orange-500 text-white border-none font-bold">Minor Delays</Badge>;
      case "disrupted":
        return <Badge className="bg-red-600 text-white border-none font-bold">Disrupted</Badge>;
      default:
        return <Badge className="bg-[#00FF00] text-black border-none font-bold">Good Service</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4 px-4 py-2 bg-[#00FF00] text-black font-bold rounded-full text-sm">
            Live Updates
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Live Service Status</h1>
          <p className="text-xl text-neutral-300 mb-6">
            Real-time updates on all lines, facilities, and planned maintenance
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Clock className="size-4" />
            <span>Last updated: Just now • Auto-refresh every 60 seconds</span>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-[#00FF00] bg-[#00FF00]/10 rounded-2xl">
            <CheckCircle2 className="size-4 text-[#00AA00]" />
            <AlertTitle className="text-black font-bold">Network Status: Good Service</AlertTitle>
            <AlertDescription className="text-neutral-700">
              5 of 6 lines operating normally. One line experiencing minor delays. 
              Average punctuality today: 99.8%
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Line Status */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Line-by-Line Status</h2>
          <div className="space-y-4">
            {lines.map((line) => (
              <Card key={line.name} className={line.status !== "normal" ? "border-2 border-orange-400 hover:shadow-lg" : "hover:shadow-lg"}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`size-5 rounded-full ${line.color} shadow-md`}></div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{line.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          {getStatusIcon(line.status)}
                          <span>{line.message}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {getStatusBadge(line.status)}
                      <span className="text-xs text-neutral-400">{line.lastUpdate}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-black">{line.stations}</span> stations
                    </div>
                    <div>
                      Next train: <span className="font-bold text-black">{line.nextTrain}</span>
                    </div>
                    <div>
                      Frequency: <span className="font-bold text-black">3-8 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Status */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Station Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilitiesStatus.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getStatusIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.facility}</CardTitle>
                      <div className="text-sm text-neutral-600">
                        {item.status}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Maintenance */}
      {upcomingMaintenance.length > 0 && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Planned Maintenance</h2>
            <div className="space-y-4">
              {upcomingMaintenance.map((maintenance, idx) => (
                <Card key={idx} className="border-2 border-purple-300 bg-purple-50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-purple-600">{maintenance.line}</Badge>
                      <span className="text-sm text-neutral-600">{maintenance.date}</span>
                    </div>
                    <CardTitle className="text-lg">{maintenance.time}</CardTitle>
                    <div className="text-base text-neutral-700">
                      <div className="space-y-2 mt-3">
                        <div>
                          <span className="font-semibold">Impact:</span> {maintenance.impact}
                        </div>
                        <div>
                          <span className="font-semibold">Alternative:</span> {maintenance.alternative}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Hours */}
      <section className="py-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Operating Hours</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Regular Service</h4>
                  <p className="text-sm text-neutral-600">
                    Sunday - Saturday<br />
                    5:30 AM - 12:00 AM (Midnight)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Peak Hours</h4>
                  <p className="text-sm text-neutral-600">
                    7:00 AM - 9:00 AM<br />
                    5:00 PM - 7:00 PM<br />
                    <span className="text-xs">(Trains every 3-4 minutes)</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special Events</h4>
                  <p className="text-sm text-neutral-600">
                    Extended hours during:<br />
                    • Ramadan<br />
                    • Eid holidays<br />
                    • Riyadh Season events
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-neutral-900 text-white border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl">Get Real-Time Updates</CardTitle>
              <div className="text-neutral-300 text-base">
                Download Darb app for live train arrivals, service alerts, and route updates
              </div>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#00FF00] text-black rounded-lg font-bold hover:bg-[#00DD00] transition-colors">
                Download Darb App
              </button>
              <button className="px-6 py-3 border-2 border-[#00FF00] text-[#00FF00] rounded-lg font-semibold hover:bg-[#00FF00]/10 transition-colors">
                Enable Push Notifications
              </button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}