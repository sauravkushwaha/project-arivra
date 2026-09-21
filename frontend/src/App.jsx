import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Services from "./pages/services";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import CustomSoftware from "./pages/services/CustomSoftware";
import AISolutions from "./pages/services/AISolutions";
import Automation from "./pages/services/Automation";
import PerformanceSEO from "./pages/services/PerformanceSEO";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";

import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        {/* Services */}
        <Route path="services" element={<Services />} />
        <Route
          path="services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="services/custom-software"
          element={<CustomSoftware />}
        />
        <Route
          path="services/ai-solutions"
          element={<AISolutions />}
        />
        <Route
          path="services/automation"
          element={<Automation />}
        />
        <Route
          path="services/performance-seo"
          element={<PerformanceSEO />}
        />
        <Route
          path="services/maintenance-support"
          element={<MaintenanceSupport />}
        />

        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="blog" element={<Blog />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;