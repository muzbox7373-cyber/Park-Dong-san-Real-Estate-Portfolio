import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './src/components/layout/Layout';
import Home from './src/pages/Home';
import HistoryPage from './src/pages/HistoryPage';
import CasesPage from './src/pages/CasesPage';
import PhilosophyPage from './src/pages/PhilosophyPage';
import ContactPage from './src/pages/ContactPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;