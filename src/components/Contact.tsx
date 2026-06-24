import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request (Replace this with EmailJS or your API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleMailto = () => {
    const subject = formData.subject ? encodeURIComponent(formData.subject) : "Portfolio Inquiry";
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-slate-900/50 border-t border-slate-800" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">

            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 bg-slate-900 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">

                  {/* Email */}
                  <div className="flex items-start gap-4 text-slate-300">
                    <Mail className="text-blue-500 mt-1 shrink-0" size={20} />
                    <div className='flex flex-col items-start'>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors break-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 text-slate-300">
                    <Phone className="text-blue-500 mt-1 shrink-0" size={20} />
                    <div className='flex flex-col items-start'>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 text-slate-300">
                    <MapPin className="text-blue-500 mt-1 shrink-0" size={20} />
                    <div className='flex flex-col items-start'>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Location</p>
                      <p>{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Native Email Button */}
              <div className="mt-10">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-800">
                  <p className="text-slate-400 text-sm mb-3">Prefer your native email app?</p>
                  <button
                    type="button"
                    onClick={handleMailto}
                    className="w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    Open Mail App <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* 👉 Map Section (Right Side) */}
            <div className="md:col-span-3 w-full h-[400px] md:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14428.828653367807!2d55.4582388!3d25.29724295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1782284448984!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;