import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Globe, Train, Map, HelpCircle, Users, Calendar, AlertCircle, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import rptLogo from "figma:asset/d04f219f33b01dcb3ee5317e461ade9798098632.png";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const location = useLocation();

  const navItems = [
    { 
      path: "/plan", 
      labelEn: "Plan Trip", 
      labelAr: "خطط رحلتك", 
      icon: Map 
    },
    { 
      path: "/stations", 
      labelEn: "Stations", 
      labelAr: "المحطات", 
      icon: Train 
    },
    { 
      path: "/first-time", 
      labelEn: "First Time", 
      labelAr: "المرة الأولى", 
      icon: Users, 
      badge: "New" 
    },
    { 
      path: "/visitors", 
      labelEn: "Visitors", 
      labelAr: "الزوار", 
      icon: Globe 
    },
    { 
      path: "/status", 
      labelEn: "Service Status", 
      labelAr: "حالة الخدمة", 
      icon: AlertCircle 
    },
    { 
      path: "/faq", 
      labelEn: "FAQ", 
      labelAr: "الأسئلة الشائعة", 
      icon: HelpCircle 
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-neutral-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Service Status Bar */}
      <div className="bg-[#00FF00] text-black px-4 py-2 text-sm text-center font-medium">
        <div className="flex items-center justify-center gap-2">
          <div className="size-2 rounded-full bg-black animate-pulse"></div>
          <span>
            {language === "en" 
              ? "All lines operating normally • Last updated: 2 mins ago"
              : "جميع الخطوط تعمل بشكل طبيعي • آخر تحديث: منذ دقيقتين"}
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={rptLogo} 
                alt="Riyadh Public Transport" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative ${
                      isActive
                        ? "bg-[#00FF00]/10 text-black font-semibold"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    <Icon className="size-4" />
                    <span>{language === "en" ? item.labelEn : item.labelAr}</span>
                    {item.badge && (
                      <Badge className="ml-1 text-xs px-1.5 py-0 h-5 bg-[#00FF00] text-black border-none">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="hidden sm:flex items-center gap-2 border-neutral-300 hover:border-[#00FF00] hover:bg-[#00FF00]/10"
              >
                <Globe className="size-4" />
                <span>{language === "en" ? "العربية" : "English"}</span>
              </Button>
              <Button 
                size="sm" 
                className="hidden sm:inline-flex bg-[#00FF00] text-black hover:bg-[#00DD00] font-semibold"
              >
                {language === "en" ? "Open Darb App" : "افتح تطبيق درب"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#00FF00]/10 text-black font-semibold"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    <Icon className="size-5" />
                    <span>{language === "en" ? item.labelEn : item.labelAr}</span>
                    {item.badge && (
                      <Badge className="ml-auto text-xs bg-[#00FF00] text-black border-none">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                >
                  <Globe className="size-4" />
                  {language === "en" ? "العربية" : "English"}
                </Button>
                <Button className="w-full bg-[#00FF00] text-black hover:bg-[#00DD00] font-semibold">
                  {language === "en" ? "Open Darb App" : "افتح تطبيق درب"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet context={{ language }} />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src={rptLogo} 
                  alt="Riyadh Public Transport" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm text-neutral-400">
                {language === "en" 
                  ? "World-class public transport for Riyadh. Part of Vision 2030."
                  : "نقل عام عالمي المستوى للرياض. جزء من رؤية 2030."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                {language === "en" ? "Quick Links" : "روابط سريعة"}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link to="/plan" className="hover:text-[#00FF00]">
                    {language === "en" ? "Plan a Trip" : "خطط رحلة"}
                  </Link>
                </li>
                <li>
                  <Link to="/stations" className="hover:text-[#00FF00]">
                    {language === "en" ? "All Stations" : "جميع المحطات"}
                  </Link>
                </li>
                <li>
                  <Link to="/first-time" className="hover:text-[#00FF00]">
                    {language === "en" ? "First Time Rider" : "راكب لأول مرة"}
                  </Link>
                </li>
                <li>
                  <Link to="/visitors" className="hover:text-[#00FF00]">
                    {language === "en" ? "Tourists & Visitors" : "السياح والزوار"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                {language === "en" ? "Information" : "معلومات"}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link to="/etiquette" className="hover:text-[#00FF00]">
                    {language === "en" ? "Etiquette Guide" : "دليل الآداب"}
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="hover:text-[#00FF00]">
                    {language === "en" ? "Accessibility" : "إمكانية الوصول"}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#00FF00]">
                    {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="hover:text-[#00FF00]">
                    {language === "en" ? "Service Status" : "حالة الخدمة"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                {language === "en" ? "Contact" : "اتصل بنا"}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>{language === "en" ? "24/7 Helpline:" : "خط المساعدة:"} 19933</li>
                <li>info@rpt.sa</li>
                <li>
                  {language === "en" ? "Download Darb App" : "حمّل تطبيق درب"}
                </li>
                <li>
                  {language === "en" ? "Follow us on social media" : "تابعنا على وسائل التواصل"}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
            <p>
              {language === "en" 
                ? "© 2025 Royal Commission for Riyadh City • Part of Vision 2030"
                : "© 2025 الهيئة الملكية لمدينة الرياض • جزء من رؤية 2030"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
