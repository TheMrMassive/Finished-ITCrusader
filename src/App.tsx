import { useState } from 'react';
import CircuitBackground from './components/CircuitBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Skills />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CircuitBackground />

      <div className="relative z-10">
        {renderPage()}

        <footer className="py-8 text-center border-t border-emerald-500/20">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setCurrentPage('terms')}
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
            >
              Terms of Service
            </button>
          </div>
          <p className="text-gray-500 font-mono text-sm">
            © 2024 IT Crusader. All systems operational.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
