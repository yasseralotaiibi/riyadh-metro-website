import { BrowserRouter, Routes, Route } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { JourneyPlanner } from './pages/JourneyPlanner';
import { Stations } from './pages/Stations';
import { StationDetail } from './pages/StationDetail';
import { FirstTime } from './pages/FirstTime';
import { Visitors } from './pages/Visitors';
import { FAQ } from './pages/FAQ';
import { Etiquette } from './pages/Etiquette';
import { ServiceStatus } from './pages/ServiceStatus';
import { Accessibility } from './pages/Accessibility';
import { NotFound } from './pages/NotFound';
import '../styles/stacking-cards.css';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="plan" element={<JourneyPlanner />} />
            <Route path="stations" element={<Stations />} />
            <Route path="stations/:stationId" element={<StationDetail />} />
            <Route path="first-time" element={<FirstTime />} />
            <Route path="visitors" element={<Visitors />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="etiquette" element={<Etiquette />} />
            <Route path="status" element={<ServiceStatus />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
