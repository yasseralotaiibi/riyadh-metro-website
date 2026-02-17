import { Search, CreditCard, MapPin, Users, Bike, Clock, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: "tickets",
      name: "Tickets & Payment",
      icon: CreditCard,
      questions: [
        {
          q: "Do I need to buy a Darb card?",
          a: "No! You can tap any contactless bank card (Visa, Mastercard, mada) directly at the gates. The Darb card (10 SAR, non-refundable) is optional and useful if you prefer a dedicated metro card or want to use the app for top-ups."
        },
        {
          q: "How much does it cost to ride?",
          a: "Fares range from 4-8 SAR based on distance. There's a daily cap of 15 SAR - once reached, additional trips that day are free. Transfers within 2 hours are included in your fare, so changing lines doesn't cost extra."
        },
        {
          q: "Can I use international bank cards?",
          a: "Yes! International Visa and Mastercard contactless cards work at all gates. Just tap on entry and exit. Check with your bank about foreign transaction fees."
        },
        {
          q: "What if I tap the wrong card at exit?",
          a: "You must tap the same card/ticket you used at entry. If you tap a different card, the gate won't open. Ask station staff to help resolve - they can reset your entry and charge correctly."
        },
        {
          q: "Can I share one ticket for multiple people?",
          a: "No, each passenger needs their own ticket/card. Every person must tap their own card at entry and exit gates."
        },
      ]
    },
    {
      id: "journey",
      name: "Journey Planning",
      icon: MapPin,
      questions: [
        {
          q: "How do I plan my route?",
          a: "Use the Darb app for real-time routing, or plan on this website before you travel. You can also ask station staff or check the network map at any station. Google Maps integration is coming soon."
        },
        {
          q: "How often do trains run?",
          a: "Peak hours (7-9 AM, 5-7 PM): Every 3-4 minutes. Off-peak: Every 6-8 minutes. Late evening: Every 10-12 minutes. Check the Darb app for real-time arrivals."
        },
        {
          q: "What are operating hours?",
          a: "Metro operates daily from 5:30 AM to 12:00 AM (midnight). Extended hours during Ramadan, Eid, and major events like Riyadh Season."
        },
        {
          q: "Is it faster than driving?",
          a: "Usually yes, especially during peak traffic (7-9 AM, 5-7 PM). Metro has 99.78% punctuality and avoids road congestion. Use the journey planner's 'Metro vs Car' comparison for your specific route."
        },
        {
          q: "What if my destination is far from a station?",
          a: "Use Bus On-Demand (BoD) via the Darb app for the last mile. BoD pickup zones are marked at most stations. You can also use taxis or ride-hail from designated pickup points."
        },
      ]
    },
    {
      id: "social",
      name: "Family Car & Social Norms",
      icon: Users,
      questions: [
        {
          q: "What is the Family car and who should use it?",
          a: "Family cars are the front and rear cars of every train. They're intended for: families with children, women traveling alone or in groups, and mixed-gender groups. Single men are socially expected to use the middle (standard) cars. This is a strong social norm but not a legal requirement."
        },
        {
          q: "Can single men ride in the Family car?",
          a: "Technically yes - there's no law against it. But social norms strongly discourage it to respect family privacy and local customs around gender separation. If the train is extremely crowded and standard cars are full, staff may allow it, but in normal conditions please use the middle cars."
        },
        {
          q: "I'm a foreign visitor - do these rules apply to me?",
          a: "Yes, social norms apply to everyone regardless of nationality. Following them helps you travel comfortably and respectfully. If you're unsure, ask station staff - they're used to helping visitors understand."
        },
        {
          q: "Can I take photos on the metro?",
          a: "Photos of empty trains, architecture, or yourself (selfies without others in frame) are generally fine. Do NOT photograph other passengers, especially women, without permission - this can be offensive and may violate privacy laws. When in doubt, ask first or avoid."
        },
      ]
    },
    {
      id: "accessibility",
      name: "Accessibility & Facilities",
      icon: HelpCircle,
      questions: [
        {
          q: "Are stations wheelchair accessible?",
          a: "Most stations have step-free access from street to platform via lifts. Some exits have stairs only - use the Darb app to filter for 'step-free access' routes. Staff can guide you to the accessible paths."
        },
        {
          q: "Can I bring luggage, strollers, or wheelchairs?",
          a: "Yes to all - no extra charge. Large luggage is allowed but keep it out of walkways. Strollers and wheelchairs can use wide gates at all stations. Priority areas are marked near doors."
        },
        {
          q: "Are bikes allowed?",
          a: "Foldable bikes are allowed if fully folded and stored. Regular (non-folding) bikes are not permitted on trains. Bike racks are available at some Park & Ride stations."
        },
        {
          q: "Is there WiFi at stations?",
          a: "Yes, free WiFi is available at all stations. Connect to 'RiyadhMetro-WiFi' and accept terms. Speeds are suitable for browsing and using the Darb app."
        },
        {
          q: "Are there prayer rooms?",
          a: "Yes, most major stations have prayer rooms (musalla) for both men and women. Look for the prayer room symbol on station maps or ask staff."
        },
      ]
    },
    {
      id: "issues",
      name: "Common Issues",
      icon: AlertCircle,
      questions: [
        {
          q: "What if I get lost or confused?",
          a: "Every station has staff in blue uniforms who speak Arabic and English. There are also help points on every platform (red button). Don't hesitate to ask - staff are very helpful, especially to first-timers."
        },
        {
          q: "I missed my stop - what should I do?",
          a: "Get off at the next station, cross to the opposite platform, and take the train back. No extra charge for this within the 2-hour transfer window."
        },
        {
          q: "The train is too crowded - should I wait?",
          a: "During peak hours (especially Blue Line 7-9 AM toward KAFD), trains can be very full. The next train is usually only 3-4 minutes away. If you're uncomfortable with crowds or it's your first time, wait for the next train."
        },
        {
          q: "My card was declined at the gate - what happened?",
          a: "Common causes: insufficient balance on Darb card, contactless payment failed, or wrong card tapped at exit. Ask station staff to check your card and help resolve. They can process refunds or add credit if needed."
        },
        {
          q: "I left something on the train - how do I get it back?",
          a: "Report lost items immediately to station staff or call 19933 (24/7 helpline). Items are collected at end-of-line stations and held at the central lost & found. Provide trip details to help locate."
        },
      ]
    },
  ];

  const allQuestions = categories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.name, categoryId: cat.id }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90 mb-8">
            Quick answers to common questions about Riyadh Metro
          </p>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <Input
              placeholder="Search for answers..."
              className="pl-12 h-14 text-base bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchTerm && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-4">
              {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''} for "{searchTerm}"
            </h2>
            {filteredQuestions.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-3">
                {filteredQuestions.map((q, idx) => (
                  <AccordionItem key={idx} value={`search-${idx}`} className="border rounded-lg px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {q.q}
                      <span className="ml-2 text-xs text-neutral-500">({q.category})</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-700">
                      {q.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-neutral-600">No results found. Try different keywords or browse categories below.</p>
            )}
          </div>
        </section>
      )}

      {/* Categories */}
      {!searchTerm && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="tickets" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id}
                      className="flex-col h-auto py-3 gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      <Icon className="size-5" />
                      <span className="text-xs">{cat.name}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {categories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <cat.icon className="size-6" />
                        {cat.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-3">
                        {cat.questions.map((q, idx) => (
                          <AccordionItem key={idx} value={`${cat.id}-${idx}`} className="border rounded-lg px-6 bg-neutral-50">
                            <AccordionTrigger className="text-left font-semibold hover:no-underline">
                              {q.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-700 leading-relaxed">
                              {q.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}

      {/* Help CTA */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-white/90 mb-6">
            Our 24/7 support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:19933" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              <Phone className="size-5" />
              Call 19933
            </a>
            <a href="mailto:info@rpt.sa" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing import
import { Phone, AlertCircle } from "lucide-react";