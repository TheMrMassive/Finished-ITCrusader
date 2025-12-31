const skills = [
  { name: 'Windows & Mac Repair', level: 95 },
  { name: 'Virus & Malware Removal', level: 92 },
  { name: 'Hardware Upgrades', level: 90 },
  { name: 'WiFi & Network Setup', level: 88 },
  { name: 'Data Recovery & Backup', level: 85 },
  { name: 'Software Installation', level: 93 },
  { name: 'Printer & Device Setup', level: 87 },
];

export default function Skills() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text mb-4">
            My Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            I'm a tech professional so you don't have to be.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-emerald-400 font-semibold">{skill.name}</span>
                <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-emerald-500/20">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['Windows 11', 'macOS', 'Microsoft 365', 'Zoom', 'iPhone/iPad', 'Android', 'Printers', 'Routers'].map((tech, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <span className="text-cyan-400 font-mono">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
