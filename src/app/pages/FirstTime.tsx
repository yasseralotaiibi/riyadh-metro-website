import { CheckCircle2, CreditCard, Smartphone, Ticket, ArrowRight, MapPin, Users as UsersIcon, AlertTriangle } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function FirstTime() {
  const steps = [
    {
      number: 1,
      title: "Get Your Ticket",
      icon: Ticket,
      description: "Three ways to pay - choose what works for you",
      details: [
        {
          method: "Contactless Bank Card (Easiest)",
          steps: [
            "Use any contactless bank card (Visa, Mastercard, mada)",
            "Tap at the gate to enter",
            "Tap the same card to exit",
            "Fare is automatically charged",
            "No need to buy a Darb card!",
          ],
          recommended: true,
        },
        {
          method: "Darb Card",
          steps: [
            "Buy card at station machine for 10 SAR (non-refundable)",
            "Load credit (minimum 5 SAR)",
            "Tap to enter and exit",
            "Recharge at machines or via Darb app",
          ],
        },
        {
          method: "Darb App",
          steps: [
            "Download Darb from App Store or Google Play",
            "Create account and add payment",
            "Generate QR code ticket",
            "Scan at gates to enter and exit",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Enter the Station",
      icon: MapPin,
      description: "Find your platform and board the train",
      guidance: [
        "Follow signs to your line (color-coded)",
        "Check digital screens for train direction",
        "Stand behind the yellow safety line",
        "Wait for passengers to exit before boarding",
        "Choose standard car or Family car (see below)",
      ],
    },
    {
      number: 3,
      title: "During Your Ride",
      icon: UsersIcon,
      description: "Stay safe and comfortable",
      guidance: [
        "Hold handrails or poles when standing",
        "Priority seats (blue) are for elderly, disabled, pregnant passengers",
        "Keep noise low - avoid loud phone calls",
        "No eating or drinking on trains",
        "Do not block doors",
      ],
    },
    {
      number: 4,
      title: "Transfers & Exit",
      icon: ArrowRight,
      description: "Change lines or leave the station",
      guidance: [
        "Follow 'Transfer' signs - usually 3-7 min walk",
        "Exit signs show which street/area",
        "Choose your exit carefully to save walking",
        "Tap your card/phone to exit through gates",
        "Ask staff if confused - they're very helpful",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is the Family car and who can use it?",
      answer: "Family cars are the front and rear cars of every train. They are intended for families with children, women traveling alone, and mixed-gender groups. Single men are expected to use the standard (middle) cars, though this is a social norm rather than a legal rule. If you're unsure, follow the signs and ask staff."
    },
    {
      question: "How much does it cost?",
      answer: "Fares are distance-based, starting at 4 SAR for short trips and up to 8 SAR for longest journeys. There is a daily cap of 15 SAR - once you reach that, additional trips that day are free. Transfers within 2 hours are included in your fare."
    },
    {
      question: "Can I bring luggage, bikes, or strollers?",
      answer: "Yes to luggage and strollers (no extra charge). Foldable bikes are allowed; regular bikes are not permitted on trains. Large luggage is fine but keep it out of walkways."
    },
    {
      question: "What if I get lost or confused?",
      answer: "Every station has staff members who speak English and Arabic. Look for help desks or staff in blue uniforms. There are also emergency help points on every platform. Don't hesitate to ask - they're there to help."
    },
    {
      question: "Are stations accessible for wheelchairs?",
      answer: "Most stations have step-free access via lifts from street to platform. Look for the accessibility symbol on station maps. Some older exits may have stairs only - check the Darb app or ask staff for the best accessible route."
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Start Here
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Your First Metro Ride</h1>
          <p className="text-xl text-white/90 mb-8">
            Everything you need to know for a smooth, confident first journey. 
            It's easier than you think!
          </p>
        </div>
      </section>

      {/* Important Alert */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-purple-200 bg-purple-50">
            <CheckCircle2 className="size-4 text-purple-600" />
            <AlertTitle className="text-purple-900">Good News for First-Timers</AlertTitle>
            <AlertDescription className="text-purple-800">
              You don't need to buy a Darb card! Just tap any contactless bank card at the gate. 
              This is the easiest way for your first few rides.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">4-Step First Ride Guide</h2>
          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          <Icon className="size-6" />
                          {step.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {"details" in step ? (
                      <div className="space-y-6">
                        {step.details.map((detail) => (
                          <div key={detail.method} className={`p-4 rounded-lg border-2 ${detail.recommended ? 'border-green-600 bg-green-50' : 'border-neutral-200'}`}>
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-lg">{detail.method}</h4>
                              {detail.recommended && (
                                <Badge className="bg-green-600">Recommended</Badge>
                              )}
                            </div>
                            <ul className="space-y-2">
                              {detail.steps.map((s, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {step.guidance?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="size-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Cultural & Social Norms</h2>
          <p className="text-neutral-600 mb-8">
            Understanding local customs helps everyone ride comfortably
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon className="size-5" />
                  Family Car Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <strong>Who uses it:</strong> Families with children, women traveling alone, mixed-gender groups
                </p>
                <p>
                  <strong>Social expectation:</strong> Single men typically use the middle cars to respect local norms around modesty and family privacy
                </p>
                <p>
                  <strong>Is it law?</strong> No, it's a strong social convention, not a legal requirement
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="size-5" />
                  Privacy & Filming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <strong>Photos/videos:</strong> Taking pictures inside stations or trains that include other passengers without permission can be offensive and may violate privacy laws
                </p>
                <p>
                  <strong>What to do:</strong> Only photograph empty spaces or ask permission first. Selfies are fine if others aren't in frame
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Common First-Timer Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Peak Hours Warning */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-orange-200 bg-white">
            <AlertTriangle className="size-4 text-orange-600" />
            <AlertTitle className="text-orange-900">Peak Hours Tip for First Rides</AlertTitle>
            <AlertDescription className="text-orange-800 space-y-2">
              <p>
                If this is your first ride, try to avoid <strong>7-9 AM</strong> and <strong>5-7 PM</strong> on the Blue Line toward KAFD. 
                Trains are very crowded during commute hours, which can be overwhelming.
              </p>
              <p className="text-sm">
                Recommended first-ride times: After 9:30 AM or between 2-4 PM on weekdays. Weekends are generally less crowded.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Ready for Your First Ride?</CardTitle>
              <CardDescription className="text-white/80 text-base">
                Plan your journey and get step-by-step navigation
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-600 hover:bg-neutral-100" size="lg" asChild>
                <Link to="/plan">
                  Plan My First Trip
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg" asChild>
                <Link to="/faq">
                  More Questions? See FAQ
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}