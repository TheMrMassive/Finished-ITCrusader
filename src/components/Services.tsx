import { Monitor, Shield, HardDrive, Network, Download, Wrench } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Computer Repair & Tune-Up',
    description: 'Fix slow computers, upgrade hardware, and optimize performance to make your devices run like new again.',
  },
  {
    icon: Shield,
    title: 'Virus & Malware Removal',
    description: 'Remove viruses, spyware, and malware. Install antivirus protection to keep your computer safe and secure.',
  },
  {
    icon: HardDrive,
    title: 'Data Backup & Recovery',
    description: 'Recover lost files, set up automatic backups, and protect your precious photos, documents, and memories.',
  },
  {
    icon: Network,
    title: 'WiFi & Network Setup',
    description: 'Install routers, fix connectivity issues, extend WiFi coverage, and secure your home network.',
  },
  {
    icon: Download,
    title: 'Software Installation',
    description: 'Install and configure programs, transfer data to new devices, and help you get the most from your software.',
  },
  {
    icon: Wrench,
    title: 'Tech Support & Troubleshooting',
    description: 'One-on-one help with any tech problem, patient guidance, and expert advice to keep your devices running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-4">
            How I Can Help
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Local tech help that is right around the corner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900/50 border border-emerald-500/20 rounded-lg backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg w-fit group-hover:bg-emerald-500/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
