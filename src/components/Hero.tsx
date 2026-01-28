import { Terminal, Code2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="mb-8 flex justify-center gap-4">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg backdrop-blur-sm animate-pulse">
            <Terminal className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm animate-pulse delay-100">
            <Code2 className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg backdrop-blur-sm animate-pulse delay-200">
            <Zap className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <h1 className="mb-6 flex justify-center">
          <img
            src="/output-onlinepngtools.png"
            alt="IT Crusader"
            className="w-full max-w-2xl h-auto"
          />
        </h1>

        <div className="text-emerald-400 font-mono text-xl md:text-2xl mb-8 flex items-center justify-center gap-2">
          <span className="animate-pulse">{'>'}</span>
          <span>I'll Get Your Tech Problem Sorted Quickly</span>
          <span className="animate-pulse">_</span>
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          If you don't have time in your day to deal with tech problems such as WiFi troubles, virus removal, or data recovery, you're in the right place. I'll get it fixed for you.
        </p>

        <div className="mb-12 flex justify-center">
          <div className="px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400 rounded-lg backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-emerald-400">
              If It Doesn't Get Fixed You Don't Pay
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            View Services
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
