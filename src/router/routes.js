import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TermsCondition from '../pages/TermsAndConditions';
import Privacy from '../pages/PrivacyPolicy';
import CancellationPolicy from "../pages/CancellationPolicy";
import Support from "../pages/Support";
import ContactUs from "../pages/ContactUs";
import Become_a_Partner from "../pages/Become-a-Partner";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Membership from "../pages/Membership";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPageAboutus from "../pages/LandingPageAboutus";
import LandingPageMembership from "../pages/LandingPageMembership";

const AppRouter = () => {
    const basePath = process.env.REACT_APP_BASE_PATH;

    return (
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/become-a-partner" element={<Become_a_Partner />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/member-ship" element={<LandingPageMembership />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about-us" element={<LandingPageAboutus />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
