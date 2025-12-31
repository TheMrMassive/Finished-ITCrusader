import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <section className="min-h-screen py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="bg-gray-900/50 border border-emerald-500/20 rounded-lg p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">Effective Date: December 26, 2025</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              IT Crusader ("we", "our", "us") values your privacy. This policy explains how we collect, use, and store your personal information.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-cyan-400">Contact Information:</strong> Name, email, phone number (from forms you submit)</li>
                <li><strong className="text-cyan-400">Service Details:</strong> Information you provide about your IT needs or projects</li>
                <li><strong className="text-cyan-400">Technical Data:</strong> IP address, browser type, and device information for website analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To respond to your inquiries and provide IT services</li>
                <li>To send updates regarding services if you opt-in</li>
                <li>To improve our website and service offerings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                3. How We Store Your Data
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Stored securely in our internal systems or email provider</li>
                <li>Access is restricted to authorized personnel only</li>
                <li>Data will not be shared with third parties without consent, except as required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                4. Your Rights
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request access, correction, or deletion of your data</li>
                <li>Opt-out of communications at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                5. Security
              </h2>
              <p>We implement reasonable technical and administrative measures to protect your information</p>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-500/20">
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:ITCrusader@outlook.com" className="text-cyan-400 hover:text-cyan-300">
                  ITCrusader@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
