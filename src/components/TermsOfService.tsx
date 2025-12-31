import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">Effective Date: December 26, 2025</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                1. Services
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IT Crusader provides IT support, troubleshooting, maintenance, and consulting services.</li>
                <li>Services are provided based on information you provide and current industry standards.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                2. Limitations
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not guarantee uninterrupted service or complete resolution in all cases.</li>
                <li>We are not responsible for hardware, software, or data issues caused by third-party products or actions outside our control.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                3. Limitation of Liability / Disclaimer
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IT Crusader is not liable for any loss, damage, or issues that occur before, during, or after the provision of services, including but not limited to hardware failure, software issues, data loss, or business interruption.</li>
                <li>Clients are responsible for backing up critical data and taking necessary precautions.</li>
                <li>Our liability is limited to the amount paid for services rendered.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                4. Payment & Scheduling
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service fees are agreed upon prior to engagement.</li>
                <li>Late cancellations or missed appointments may be subject to fees.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these terms at any time. Updated terms will be posted on the website.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-500/20">
              <p className="text-gray-400">
                Questions about our Terms of Service? Contact us at{' '}
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
