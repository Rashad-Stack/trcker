import { Routes, Route } from "react-router-dom";

import useAuthCheck from "./hooks/useAuthCheck";
import { PrivetRoutes, PublicRoutes } from "./routes";
import { Login, Register } from "./pages/auth";
import { Contact, Home, HowItWorks, PricingPlan } from "./pages";
import { Alternative, AlternativePhantombuster, BrandMonitoring, ChromePlugin, FacebookWebhook, MemberExtracting, PrivacyPolicy, SlackIntegration, TermsConditions } from "./pages/footerLinks";
import {
  Affiliate,
  Dashboard,
  Groups,
  Help,
  Keywords,
  Logout,
  Members,
  Payments,
  PostsAndComments,
  Settings
} from "./pages/dashboard";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <h1 className="text-3xl font-bold underline">...Loading</h1>
  ) : (
    <Routes>
      {/*Public routes this routes can not be visible after logged in */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/price" element={<PricingPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Products Link */}
        <Route path="/api-for-facebook-groups" element={<FacebookWebhook />} />
        <Route
          path="/slack-integration-for-facebook-groups"
          element={<SlackIntegration />}
        />
        <Route path="/how-to-monitor-brands-on-facebook-groups" element={<BrandMonitoring />} />
        <Route path="/how-to-extract-facebook-groups-members" element={<MemberExtracting />} />
        <Route path="/chrome-plugin-for-monitoring-facebook-groups" element={<ChromePlugin />} />
        
        {/* Important Links */}
        <Route path="/terms-of-service" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/groouply-alternative" element={<Alternative />} />
        <Route path="/phantombuster-alternative" element={<AlternativePhantombuster />} />
        


      </Route>

      {/* Privet Routes, This routes can not be visible before logged in */}
      <Route path="/" element={<PrivetRoutes />}>
        <Route path="/panel" element={<Dashboard />} />
        <Route path="/panel/groups" element={<Groups />} />
        <Route path="/panel/keywords" element={<Keywords />} />
        <Route path="/panel/hits" element={<PostsAndComments />} />
        <Route path="/panel/members" element={<Members />} />
        <Route path="/panel/payments" element={<Payments />} />
        <Route path="/panel/affiliate" element={<Affiliate />} />
        <Route path="/panel/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/plan/:id" element={<div>Plan</div>} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<div>404 Page not found!</div>} />
    </Routes>
  );
}

export default App;





