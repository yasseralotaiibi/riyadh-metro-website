import { Home, Search, MapPin } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function NotFound() {
  const quickLinks = [
    { title: "Plan a Trip", path: "/plan", icon: MapPin, description: "Find the best route to your destination" },
    { title: "First Time Rider", path: "/first-time", icon: Search, description: "Learn how to use the metro" },
    { title: "All Stations", path: "/stations", icon: MapPin, description: "Browse all 85 stations" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-neutral-300 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 size-5" />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/plan">
              <MapPin className="mr-2 size-5" />
              Plan a Trip
            </Link>
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Popular Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path} className="block">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="size-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3 mx-auto">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-base">{link.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}