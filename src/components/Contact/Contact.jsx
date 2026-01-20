import React, { useRef, useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_email: '',
    user_name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   
    setTimeout(() => {
      setIsSent(true);
      setIsSubmitting(false);
      setFormData({
        user_email: '',
        user_name: '',
        subject: '',
        message: ''
      });
      
    
      showToast('Message sent successfully! ✅', 'success');
      
      
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const showToast = (message, type) => {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        ${type === 'success' ? '<svg class="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : ''}
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden bg-slate-900"
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/20 to-slate-900" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl w-full mx-auto">
      
        <div className="text-center mb-16 sm:mb-20 section-header">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I'd love to hear from you—reach out for any opportunities or questions!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        
          <div className="space-y-6 contact-info-enter">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
              <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </span>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:yc230310@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                        yc230310@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-purple-400 transition-colors">
                        +91 706 0573 776
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-pink-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Auraiya, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>

               
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group/social">
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover/social:text-blue-400 transition-colors" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group/social">
                      <Github className="w-5 h-5 text-gray-400 group-hover/social:text-purple-400 transition-colors" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group/social">
                      <Mail className="w-5 h-5 text-gray-400 group-hover/social:text-pink-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

     
          <div className="relative group contact-form-enter">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Send className="w-5 h-5 text-purple-400" />
                </span>
                Send Message
              </h3>

              <div className="space-y-5">
              
                <div className="input-group">
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/50 text-white border border-slate-700/50 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900/70 transition-all duration-300"
                    />
                  </div>
                </div>

              
                <div className="input-group">
                  <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/50 text-white border border-slate-700/50 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900/70 transition-all duration-300"
                    />
                  </div>
                </div>

             
                <div className="input-group">
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 text-white border border-slate-700/50 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900/70 transition-all duration-300"
                  />
                </div>

             
                <div className="input-group">
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 text-white border border-slate-700/50 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900/70 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  onClick={sendEmail}
                  disabled={isSubmitting || isSent}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSent
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} shadow-lg shadow-purple-500/30`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .section-header {
          animation: fadeInUp 0.6s ease-out;
        }

        .contact-info-enter {
          animation: slideIn 0.8s ease-out;
        }

        .contact-form-enter {
          animation: slideIn 0.8s ease-out 0.2s backwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .input-group {
          animation: fadeInUp 0.5s ease-out backwards;
        }

        .input-group:nth-child(1) { animation-delay: 0.1s; }
        .input-group:nth-child(2) { animation-delay: 0.2s; }
        .input-group:nth-child(3) { animation-delay: 0.3s; }
        .input-group:nth-child(4) { animation-delay: 0.4s; }

        .toast-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transform: translateX(400px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .toast-notification.show {
          transform: translateX(0);
          opacity: 1;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .toast-icon {
          width: 20px;
          height: 20px;
          color: #10b981;
        }

        .toast-notification.success {
          border-color: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Contact;