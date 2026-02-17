import { Link, useOutletContext } from "react-router";
import { ArrowRight, MapPin, Users, Globe, Shield, UserCheck, AlertCircle, Download, Clock, Train, Bus, Smartphone, CreditCard, Radio } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  const { language } = useOutletContext<{ language: "en" | "ar" }>();
  const isRtl = language === "ar";

  const quickActions = [
    {
      icon: MapPin,
      title: isRtl ? "خطط رحلتك" : "Plan Your Journey",
      description: isRtl ? "ابحث عن أسرع طريق إلى وجهتك مع التحديثات المباشرة" : "Find the fastest route to your destination with real-time updates",
      path: "/plan",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: CreditCard,
      title: isRtl ? "التذاكر والتعرفة" : "Tickets & Fares",
      description: isRtl ? "أسعار بسيطة وخيارات دفع متعددة وبطاقات سفر" : "Simple pricing, multiple payment options, and travel passes",
      path: "/first-time",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock,
      title: isRtl ? "التحديثات المباشرة" : "Live Updates",
      description: isRtl ? "تحقق من المواعيد المباشرة وحالة الخدمة عبر الشبكة" : "Check real-time arrivals and service status across the network",
      path: "/status",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const content = {
    hero: {
      title: isRtl ? "وجهتك على بعد خطوة!" : "Your destination is one step away!",
      subtitle: isRtl ? "احجز بسرعة وتنقل بسهولة وتوفير!" : "Book quickly, travel easily and save!",
      cta: isRtl ? "خطط رحلتك" : "Plan Your Journey",
      learnMore: isRtl ? "تعرف على شبكة النقل العام" : "Learn about the public transport network",
    },
    app: {
      badge: isRtl ? "حمّل تطبيق درب" : "Download Darb App",
      title: isRtl ? "رحلتك في تطبيق واحد. احجز. تابع. وتنقل بسهولة مع تطبيق درب" : "Your journey in one app. Book. Track. Travel easily with Darb app",
      subtitle: isRtl ? "لمعرفة المزيد بشأن مساراتنا، وأسعار التذاكر، والمحطات، وغير ذلك الكثير! حمِّل التطبيق" : "To learn more about our routes, ticket prices, stations, and much more! Download the app",
      download: isRtl ? "حمِّل التطبيق" : "Download the App",
    },
    stats: [
      { value: "6", label: isRtl ? "مسارات للقطار" : "Metro Lines" },
      { value: "85", label: isRtl ? "محطة قطار" : "Metro Stations" },
      { value: "840+", label: isRtl ? "حافلة" : "Buses" },
      { value: "80+", label: isRtl ? "مسار للحافلات" : "Bus Routes" },
      { value: "3000", label: isRtl ? "محطة للحافلات" : "Bus Stops" },
    ],
    cards: {
      card1: {
        header: isRtl ? "خطط رحلتك" : "Plan Your Journey",
        title: isRtl ? "السبت- الخميس: 5:30 صباحا - 12:00 منتصف الليل" : "Sat-Thu: 5:30 AM - 12:00 Midnight",
        subtitle: isRtl ? "الجمعة: 10:00 صباحا - 12:00 منتصف الليل" : "Friday: 10:00 AM - 12:00 Midnight",
        description: isRtl ? "باقة متنوعة من خدمات النقل العام لمدينة الرياض:" : "A diverse range of Riyadh public transport services:",
        cta: isRtl ? "اكتشفها!" : "Discover them!",
      },
      card2: {
        header: isRtl ? "المسارات وجدول الحافلات" : "Routes and Bus Schedule",
        title: isRtl ? "هل تبحث عن رحلة بالحافلة؟" : "Looking for a bus trip?",
        description: isRtl ? "اطلع على خدمات التتبع المباشر للحافلات والمسارات وجداول الرحلات" : "View live bus tracking, routes, and trip schedules",
        cta: isRtl ? "والمزيد!" : "And more!",
      },
      card3: {
        header: isRtl ? "طرق الدفع" : "Payment Methods",
        title: isRtl ? "مرر وانطلق!" : "Tap and go!",
        description: isRtl ? "التنقل في الرياض أسهل من أي وقت مضى" : "Getting around Riyadh is easier than ever",
        cta: isRtl ? "حمل تطبيق درب" : "Download Darb App",
      },
    },
    safety: {
      title: isRtl ? "سلامتك أولويتنا" : "Your safety is our priority",
      items: [
        {
          icon: Shield,
          title: isRtl ? "تقييم السائقين" : "Driver Screening",
          description: isRtl ? "نعتمد سياسات دقيقة لتقييم السائقين، واختيار الأكفاء الملتزمين بمعايير السلامة، بما يضمن للركاب رحلات آمنة وخدمة متميزة." : "We implement rigorous driver screening policies, selecting qualified professionals committed to safety standards, ensuring safe trips and excellent service for passengers.",
        },
        {
          icon: AlertCircle,
          title: isRtl ? "إرشادات السلامة" : "Safety Guidelines",
          description: isRtl ? "نسعى إلى تقديم نقل آمن، ونشجع الركاب على الالتزام بلوائح التعليمات، وإرشادات السلامة، مما يوفر رحلة مريحة للجميع." : "We strive to provide safe transport, encouraging passengers to follow regulations and safety guidelines, ensuring a comfortable journey for everyone.",
        },
        {
          icon: UserCheck,
          title: isRtl ? "خدمة العملاء" : "Customer Service",
          description: isRtl ? "فريق العمل جاهز لخدمتك على مدار الساعة طوال أيام الأسبوع، اتصل بمركز خدمة العملاء على الرقم 19933 أو تواصل معنا عبر منصة." : "Our team is ready to serve you 24/7. Contact customer service at 19933 or reach us through our platform.",
        },
      ],
    },
    discover: {
      title: isRtl ? "اكتشف الرياض" : "Discover Riyadh",
      subtitle: isRtl ? "المزيد من الوجهات والمعالم المميزة كل يوم اختر وسيلة النقل الأنسب لرحلتك عبر شبكة نقل واسعة ومترابطة" : "More destinations and landmarks every day. Choose the most suitable transport for your journey through a vast, interconnected network.",
    },
  };

  return (
    <div className="bg-neutral-50">
      {/* Hero Banner - RPT.sa Style */}
      <section className="banner-wrapper relative">
        <div className="banner-image" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1738495888878-58190d59a6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBzYXVkaSUyMGFyYWJpYSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzEyNTc3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="max-w-4xl mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-[rpt]">{content.hero.title}</h2>
                <p className="text-xl md:text-2xl text-white/90">{content.hero.subtitle}</p>
              </div>
              
              {/* Quick Action Cards - Centered and Wider */}
              <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {quickActions.map((action, idx) => {
                    const Icon = action.icon;
                    return (
                      <Link
                        key={idx}
                        to={action.path}
                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
                      >
                        <div className={`w-14 h-14 ${action.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                          <Icon className={`w-7 h-7 ${action.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">
                          {action.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {action.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="learn-more-link mt-4">
                <Link to="/stations" className="text-white hover:text-[#5DD329] transition-colors">
                  {content.hero.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section - RPT.sa Style */}
      <section className="video-bannar">
        <div className="container mx-auto px-4">
          <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-12 flex-wrap`}>
            <div className="flex-1 min-w-[300px]">
              <h4 className="text-3xl font-bold mb-6">{content.app.title}</h4>
            </div>
            <div className="centered-video">
              <img 
                src="https://images.unsplash.com/photo-1758598304169-505a9c278dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlJTIwbW9ja3VwfGVufDF8fHx8MTc3MTI1NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Darb App"
                className="bg-img-mob"
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <div className="content-align">
                <img src="/o/rcrc-theme/images/rcrc/App-Icon.svg" alt="App Icon" className="logo-icon mx-auto" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} />
                <h3 className="text-2xl font-bold mb-6">{content.app.subtitle}</h3>
                <div className="app-icon-wrap">
                  <a href="https://play.google.com/store/apps/details?id=com.rcrc.riyadhjourneyplanner" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="app-icon" />
                  </a>
                  <a href="https://apps.apple.com/sa/app/riyadh-bus/id1549817739" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="app-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-numbers">
            <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} gap-8`}>
              <div className="flex-1"></div>
              <div className="flex-1">
                <div className="no-content">
                  {content.stats.map((stat, idx) => (
                    <div key={idx} className="box1">
                      <h4>{stat.value}</h4>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking Cards - RPT.sa Style */}
      <section className="stack-cards__wrapper">
        <div className="container mx-auto px-4">
          <ul className="stack-cards max-w-5xl mx-auto">
            <li className="stack-cards__item card-1">
              <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 flex-wrap`}>
                <div className="flex-1 min-w-[300px]">
                  <p className="stack-card__header">{content.cards.card1.header}</p>
                  <h4 className="text-2xl font-bold mb-4" style={{color: '#7DFB50'}}>
                    {content.cards.card1.title}
                  </h4>
                  <h4 className="text-xl mb-6">{content.cards.card1.subtitle}</h4>
                  <h4 className="text-lg mb-6">{content.cards.card1.description}</h4>
                  <Link to="/plan" className="riya-white-button">
                    {content.cards.card1.cta}
                  </Link>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1765034511020-fbf315b3134c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc3BvcnQlMjBidXMlMjBtb2Rlcm58ZW58MXx8fHwxNzcxMjY2ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bus on Demand"
                  className="stack-card__item-wrapper"
                />
              </div>
            </li>

            <li className="stack-cards__item card-2">
              <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 flex-wrap`}>
                <div className="flex-1 min-w-[300px]">
                  <p className="stack-card__header">{content.cards.card2.header}</p>
                  <h2 className="text-3xl font-bold mb-4">{content.cards.card2.title}</h2>
                  <h4 className="text-lg mb-6">{content.cards.card2.description}</h4>
                  <Link to="/stations" className="riya-white-button">
                    {content.cards.card2.cta}
                  </Link>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1569542610074-215d539d57c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHRyYWluJTIwc3RhdGlvbiUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MTI2Njg1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Route Schedule"
                  className="stack-card__item-wrapper"
                />
              </div>
            </li>

            <li className="stack-cards__item card-3">
              <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 flex-wrap`}>
                <div className="flex-1 min-w-[300px]">
                  <p className="stack-card__header">{content.cards.card3.header}</p>
                  <h2 className="text-3xl font-bold mb-4">{content.cards.card3.title}</h2>
                  <h4 className="text-lg mb-6">{content.cards.card3.description}</h4>
                  <Link to="/first-time" className="riya-green-button">
                    {content.cards.card3.cta}
                  </Link>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1673895090621-6d4edd461d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1hcCUyMG5hdmlnYXRpb24lMjBzdHJlZXR8ZW58MXx8fHwxNzcxMjY1MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Payment Methods"
                  className="stack-card__item-wrapper"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Safety Matters - RPT.sa Style */}
      <section className="safety-matters">
        <div className="container mx-auto px-4">
          <h2>{content.safety.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {content.safety.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <span className="safety-matters-icon inline-flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#00AA00]" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Details - RPT.sa Style */}
      <section className="app-details-wrapper">
        <div className="container mx-auto px-4">
          <div className="app-details max-w-6xl mx-auto">
            <div className="app-content-left">
              <img src="/o/rcrc-theme/images/rcrc/App-Icon.svg" alt="App Icon" className="logo-icon" onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
              <h3>{content.discover.title}</h3>
              <h4 style={{color: '#F2FDF7'}}>{content.discover.subtitle}</h4>
            </div>
            <div className="app-content-right">
              {/* Background graphic area */}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                path: "/plan", 
                icon: MapPin, 
                title: isRtl ? "خطط الرحلة" : "Plan Journey", 
                description: isRtl ? "اعثر على أسرع مسار" : "Find the fastest route" 
              },
              { 
                path: "/first-time", 
                icon: Users, 
                title: isRtl ? "راكب لأول مرة" : "First Time Rider", 
                description: isRtl ? "دليل المبتدئين الكامل" : "Complete beginner's guide" 
              },
              { 
                path: "/visitors", 
                icon: Globe, 
                title: isRtl ? "دليل الزائر" : "Visitor Guide", 
                description: isRtl ? "معلومات السياح" : "Tourist information" 
              },
              { 
                path: "/status", 
                icon: Clock, 
                title: isRtl ? "حالة الخدمة" : "Service Status", 
                description: isRtl ? "التحديثات المباشرة" : "Live updates" 
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-neutral-200 hover:border-[#00FF00] h-full">
                    <div className="size-16 rounded-xl bg-[#00FF00]/10 text-[#00AA00] flex items-center justify-center mb-6 group-hover:bg-[#00FF00] group-hover:text-black transition-all group-hover:scale-110">
                      <Icon className="size-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
