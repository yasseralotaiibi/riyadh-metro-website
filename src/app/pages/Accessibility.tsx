import { Accessibility as AccessibilityIcon, User, Eye, Ear, Heart, Navigation, Phone } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function Accessibility() {
  const features = [
    {
      icon: AccessibilityIcon,
      title: "Step-Free Access",
      description: "Most stations have lifts from street to platform level",
      details: [
        "Wide gates at all stations for wheelchairs and strollers",
        "Level boarding between platform and train",
        "Tactile paving and clear signage",
        "Priority areas marked near doors",
      ],
    },
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Clear signage and visual aids throughout the network",
      details: [
        "Large, high-contrast text on all signs",
        "Color-coded lines with clear symbols",
        "Digital displays show next train and destinations",
        "Platform screens announce arrivals visually",
      ],
    },
    {
      icon: Ear,
      title: "Audio Assistance",
      description: "Audio announcements and support for hearing-impaired passengers",
      details: [
        "Multi-language audio announcements (Arabic, English)",
        "Clear station and stop announcements on trains",
        "Help points with visual and audio communication",
        "Staff trained in basic sign language",
      ],
    },
    {
      icon: User,
      title: "Mobility Support",
      description: "Assistance for passengers with reduced mobility",
      details: [
        "Wheelchair spaces in every train car",
        "Priority seating (blue seats) near doors",
        "Staff assistance available at all stations 24/7",
        "Companion travel allowed at no extra charge",
      ],
    },
    {
      icon: Heart,
      title: "Hidden Disabilities",
      description: "Support for passengers with non-visible conditions",
      details: [
        "Priority seating available for all who need it",
        "Quiet zones in some cars (pilot program)",
        "Sunflower lanyard recognition for hidden disabilities",
        "Flexible assistance - just ask staff",
      ],
    },
    {
      icon: Navigation,
      title: "Wayfinding Support",
      description: "Clear navigation for all passengers",
      details: [
        "Step-by-step journey planning in Darb app",
        "Accessible route filter shows lift-equipped stations",
        "Station maps show accessible paths",
        "Staff can provide guided assistance on request",
      ],
    },
  ];

  const stepFreeStations = [
    "KAFD Station - All exits",
    "Kingdom Centre - Exits A, C",
    "National Museum - All exits",
    "Olaya Station - All exits (major hub)",
    "Riyadh Park - Exits A, B",
    "Qasr Al-Hokm - Exit A",
    "Airport Station - All exits",
    "Most other stations - Check Darb app for details",
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <AccessibilityIcon className="size-3 mr-1" />
            For Everyone
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Accessibility</h1>
          <p className="text-xl text-white/90">
            Riyadh Metro is designed to be accessible and welcoming to all passengers, 
            regardless of mobility, sensory, or cognitive needs
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="size-12 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="size-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Planning with Accessibility */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Planning an Accessible Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-sky-600">
              <CardHeader className="bg-sky-50">
                <CardTitle className="flex items-center gap-2">
                  <AccessibilityIcon className="size-5" />
                  In the Darb App
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  {[
                    'Open journey planner and enter your origin and destination',
                    'Tap "Filters & Options"',
                    'Enable "Step-free access" toggle',
                    'Routes will only show stations with lifts and accessible paths',
                    'Each station page shows which exits are step-free',
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="size-6 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="size-5" />
                  Request Assistance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-sm">
                <p>
                  <strong>Before you travel:</strong> Call 19933 (24/7) to arrange assistance at 
                  specific stations. Staff can meet you at entry, guide you through transfers, and 
                  help with boarding.
                </p>
                <p>
                  <strong>At the station:</strong> Look for staff in blue uniforms or use the help 
                  points (red buttons) on every platform. Staff are trained to provide mobility assistance, 
                  wayfinding, and communication support.
                </p>
                <p>
                  <strong>Companion travel:</strong> If you require a companion for assistance, they can 
                  travel with you at no extra cost. Inform staff at entry or call ahead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-Free Stations */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Step-Free Station Access</h2>
          <Card>
            <CardHeader>
              <CardTitle>Confirmed Step-Free Stations</CardTitle>
              <CardDescription>
                The following stations have full or partial step-free access from street to platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {stepFreeStations.map((station, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
                    <AccessibilityIcon className="size-5 text-sky-600 flex-shrink-0" />
                    <span className="text-sm">{station}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-6">
                Note: Some stations may have step-free access at certain exits only. Always check the 
                Darb app or call 19933 before traveling to confirm the best accessible route for your journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-12 bg-sky-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Additional Support & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Animals</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Registered service animals are welcome on all trains and at all stations. No documentation 
                required for entry, but staff may ask about the animal's role.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Medical Equipment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Wheelchairs, walkers, oxygen tanks, and other medical equipment are permitted. Wide gates 
                available at all stations. Staff can assist with boarding if needed.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Feedback & Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                We continually improve accessibility based on passenger feedback. Report issues or suggest 
                improvements via the Darb app, 19933 helpline, or info@rpt.sa
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-sky-600 to-blue-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Need Personalized Assistance?</CardTitle>
              <CardDescription className="text-white/80 text-base">
                Our accessibility team is available 24/7 to help plan your journey
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:19933" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                <Phone className="size-5" />
                Call 19933
              </a>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/plan">
                  Plan Accessible Journey
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
