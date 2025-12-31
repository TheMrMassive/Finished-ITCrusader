import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
           Reach out for whatever tech problem is slowing you down.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-emerald-500/20 rounded-lg backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Email</h3>
                <p className="text-gray-400">ITCrusader@outlook.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 (520) 788-5050</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-emerald-500/20 rounded-lg backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Tucson, AZ</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585684779106&sk=directory_contact_info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-cyan-500/20 rounded-lg backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <Facebook className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-1 text-sm">Facebook</h3>
                  <p className="text-gray-400 text-sm">It Crusader</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/itcrusader/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-emerald-500/20 rounded-lg backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <Instagram className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-1 text-sm">Instagram</h3>
                  <p className="text-gray-400 text-sm">@itcrusader</p>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-emerald-500/20 rounded-lg text-gray-300 focus:border-emerald-500 focus:outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-emerald-500/20 rounded-lg text-gray-300 focus:border-emerald-500 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg">
                <p className="text-emerald-400 text-center font-semibold">Message sent successfully!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-center font-semibold">Failed to send message. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-900/50 border-l-4 border-yellow-500/50 rounded-lg backdrop-blur-sm">
            <h3 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              Disclaimer
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              IT Crusader is an unlicensed IT professional. All services are provided "as is." IT Crusader is not liable for any damages, data loss, or technical issues that may occur before, during, or after the service. Clients are responsible for backups and data security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
