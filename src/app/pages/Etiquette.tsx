import { Users, Volume2, Camera, Heart, Smartphone, Footprints, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function Etiquette() {
  const etiquetteRules = [
    {
      icon: Footprints,
      title: "Boarding & Alighting",
      subtitle: "Let passengers off first",
      dos: [
        "Stand to the side of doors and let passengers exit before boarding",
        "Move into the car, don't block the doorway",
        "Queue in an orderly line on the platform",
        "Hold doors only briefly if someone is rushing - don't force them",
      ],
      donts: [
        "Don't push or rush onto the train while others are exiting",
        "Don't stand directly in front of doors",
        "Don't hold doors open for long periods",
        "Don't cut the queue",
      ],
    },
    {
      icon: Heart,
      title: "Priority Seating",
      subtitle: "Blue seats are for those who need them most",
      dos: [
        "Offer priority seats (blue) to elderly, pregnant, disabled, or those with young children",
        "Stand if the train is crowded and you're occupying a priority seat",
        "Be aware of people who may need a seat even if their need isn't obvious",
        "Politely ask someone to give up a priority seat if needed",
      ],
      donts: [
        "Don't occupy priority seats when you don't need them and train is busy",
        "Don't pretend to sleep to avoid giving up your seat",
        "Don't assume young people don't need priority seats (hidden disabilities exist)",
      ],
    },
    {
      icon: Users,
      title: "Family Car Etiquette",
      subtitle: "Respecting social norms",
      dos: [
        "Families with children: Use the front or rear Family cars",
        "Women traveling alone/together: Family car is available and comfortable",
        "Mixed groups: Use Family cars to stay together",
        "Single men: Use the middle (standard) cars",
      ],
      donts: [
        "Single men: Don't use Family cars unless train is extremely overcrowded and staff direct you",
        "Don't stare or make others uncomfortable regardless of which car you're in",
        "Don't argue about these norms - they're social expectations that help everyone",
      ],
    },
    {
      icon: Volume2,
      title: "Noise & Phone Use",
      subtitle: "Keep it quiet and considerate",
      dos: [
        "Use headphones for music, videos, or games",
        "Keep phone conversations brief and at low volume",
        "Set phone to vibrate or silent mode",
        "Be mindful that others may be resting, working, or reading",
      ],
      donts: [
        "Don't play audio/video without headphones",
        "Don't have long, loud phone conversations",
        "Don't use speakerphone",
        "Don't let your device volume leak from headphones",
      ],
    },
    {
      icon: Camera,
      title: "Photography & Privacy",
      subtitle: "Respect others' privacy and local laws",
      dos: [
        "Take photos of empty trains, architecture, or views if desired",
        "Take selfies where others aren't in the frame",
        "Ask permission before photographing anyone",
        "Be aware that filming strangers may violate privacy and decency laws",
      ],
      donts: [
        "Never photograph or film other passengers without explicit permission",
        "Never photograph women or children without permission",
        "Don't post photos/videos of others online without consent",
        "Don't film government/security personnel or sensitive areas",
      ],
    },
    {
      icon: Smartphone,
      title: "Space & Belongings",
      subtitle: "Share the space fairly",
      dos: [
        "Keep bags on your lap or between your feet, not on seats",
        "Move fully into the car to make room for others",
        "Stand on one leg when holding poles (alternate feet for balance)",
        "Be aware of your bag/backpack when turning - it can hit people",
      ],
      donts: [
        "Don't place bags on seats when the train is busy",
        "Don't spread out across multiple seats",
        "Don't lean against poles - others need to hold them",
        "Don't block aisles with luggage",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Metro Manners
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Etiquette Guide</h1>
          <p className="text-xl text-white/90">
            Riyadh Metro Manners: How to ride respectfully and make everyone's journey better
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-purple-200 bg-purple-50">
            <AlertCircle className="size-4 text-purple-600" />
            <AlertTitle className="text-purple-900">Why These Guidelines Matter</AlertTitle>
            <AlertDescription className="text-purple-800">
              Riyadh Metro serves millions of passengers from diverse backgrounds. Following these simple guidelines 
              helps everyone travel safely, comfortably, and respectfully. These are a mix of official rules and 
              social norms that reflect local culture and global best practices.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Etiquette Rules */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {etiquetteRules.map((rule) => {
              const Icon = rule.icon;
              return (
                <Card key={rule.title} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{rule.title}</CardTitle>
                        <CardDescription className="text-base">{rule.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <div className="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</div>
                          Do
                        </h4>
                        <ul className="space-y-2">
                          {rule.dos.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="size-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <div className="size-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">✗</div>
                          Don't
                        </h4>
                        <ul className="space-y-2">
                          {rule.donts.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="size-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Quick Reference Card</h2>
          <Card className="border-2 border-indigo-600">
            <CardHeader className="bg-indigo-50">
              <CardTitle>The Golden Rules of Riyadh Metro</CardTitle>
              <CardDescription>Print or save this as a reminder</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Let passengers off before boarding",
                  "Give up priority seats when needed",
                  "Keep noise low - use headphones",
                  "Respect Family car norms",
                  "No photos of other passengers",
                  "Keep bags off seats when busy",
                  "Don't block doors or aisles",
                  "Queue in an orderly line",
                  "Be kind and patient with everyone",
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-neutral-50">
                    <div className="size-6 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-sm">{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enforcement */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Enforcement & Consequences</CardTitle>
              <CardDescription>What happens if rules are broken?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-neutral-700">
              <p>
                <strong>Official rules</strong> (no eating/drinking, no smoking, priority seating, etc.) are enforced by 
                metro security and staff. Violations may result in warnings, fines, or removal from the system.
              </p>
              <p>
                <strong>Social norms</strong> (Family car usage, queuing, noise levels) are not legally enforced but 
                are strongly encouraged. Staff and other passengers may politely remind you of these expectations.
              </p>
              <p>
                <strong>Photography violations</strong> that involve filming strangers (especially women and children) 
                without consent may violate Saudi privacy and decency laws and can lead to serious consequences including 
                legal action.
              </p>
              <p>
                Most importantly: <strong>these guidelines exist to help everyone travel with dignity and comfort.</strong> When 
                we all follow them, the metro becomes a better experience for the millions who use it every day.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Help spread the word</h2>
          <p className="text-lg text-white/90 mb-6">
            Share these guidelines with friends and family to build a respectful metro culture together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              Download Etiquette Poster (PDF)
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Share on Social Media
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}