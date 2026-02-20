"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import logoImage from "@/public/logo.png";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--mosave-neutral-900) 0%, #0a0a1a 100%)",
        }}
      />

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <div className="mb-6">
                <Image
                  src={logoImage}
                  alt="MoSave by MoLoyal"
                  height={40}
                  className="invert"
                />
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                Empowering individuals, cooperatives, and savings groups across
                Africa with secure digital savings and transparent cooperative
                management.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 border border-white/10"
                    >
                      <Icon size={18} className="text-white/70" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Product
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About MoSave", id: "about" },
                  { label: "Features", id: "features" },
                  { label: "How It Works", id: "how-it-works" },
                  { label: "Security", id: "security" },
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Help Center", path: "/help" },
                  { label: "FAQs", path: "/faq" },
                  { label: "Privacy Policy", path: "/privacy" },
                  { label: "Terms of Service", path: "/terms" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Get in Touch
              </h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <Mail size={20} className="mt-1" />
                  <div>
                    <div className="text-sm text-white/50 mb-1">Email</div>
                    <a
                      href="mailto:support@mosave.ng"
                      className="hover:text-white"
                    >
                      support@mosave.ng
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-white/70">
                  <Phone size={20} className="mt-1" />
                  <div>
                    <div className="text-sm text-white/50 mb-1">Phone</div>
                    <span>+234 XXX XXX XXXX</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={20} className="mt-1" />
                  <div>
                    <div className="text-sm text-white/50 mb-1">Location</div>
                    <span>Lagos, Nigeria</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © 2026 MoSave. All rights reserved. A product of{" "}
                <span style={{ color: "var(--mosave-red)" }}>Mo</span>
                <span style={{ color: "var(--mosave-cyan)" }}>Loyal</span>.
              </p>

              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm">Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span className="text-white/60 text-sm">in Nigeria</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}













// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
// import Link from "next/link";
// import logoImage from 'figma:asset/4ad9898027b90a2380c1bede8bc4f9409c315733.png';

// export function Footer() {
//   const navigate = useNavigate();

//   const scrollToSection = (id: string) => {
//     navigate('/');
//     setTimeout(() => {
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   };

//   return (
//     <footer className="relative overflow-hidden">
//       {/* Background */}
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: `linear-gradient(135deg, var(--mosave-neutral-900) 0%, #0a0a1a 100%)`
//         }}
//       />

//       {/* Subtle pattern overlay */}
//       <div 
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
//         }}
//       />

//       <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Main Footer Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//             {/* Brand Column */}
//             <div className="lg:col-span-1">
//               <div className="mb-6">
//                 <img src={logoImage} alt="MoSave by MoLoyal" className="h-10 invert" />
//               </div>
//               <p className="text-white/70 mb-6 leading-relaxed">
//                 Empowering individuals, cooperatives, and savings groups across Africa with secure digital savings and transparent cooperative management.
//               </p>
              
//               {/* Social Media */}
//               <div className="flex gap-3">
//                 {[
//                   { icon: Facebook, href: '#' },
//                   { icon: Twitter, href: '#' },
//                   { icon: Linkedin, href: '#' },
//                   { icon: Instagram, href: '#' }
//                 ].map((social, index) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.href}
//                       className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 border border-white/10"
//                     >
//                       <Icon size={18} className="text-white/70" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Product Column */}
//             <div>
//               <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
//               <ul className="space-y-3">
//                 {[
//                   { label: 'About MoSave', id: 'about' },
//                   { label: 'Features', id: 'features' },
//                   { label: 'How It Works', id: 'how-it-works' },
//                   { label: 'Security', id: 'security' }
//                 ].map((link, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => scrollToSection(link.id)}
//                       className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
//                     >
//                       <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                       {link.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Column */}
//             <div>
//               <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
//               <ul className="space-y-3">
//                 {[
//                   { label: 'Help Center', path: '/help' },
//                   { label: 'FAQs', path: '/faq' },
//                   { label: 'Privacy Policy', path: '/privacy' },
//                   { label: 'Terms of Service', path: '/terms' }
//                 ].map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       to={link.path}
//                       className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
//                     >
//                       <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div>
//               <h4 className="text-white font-semibold mb-6 text-lg">Get in Touch</h4>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3 text-white/70">
//                   <Mail size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--mosave-cyan)' }} />
//                   <div>
//                     <div className="text-sm text-white/50 mb-1">Email</div>
//                     <a href="mailto:support@mosave.ng" className="hover:text-white transition-colors">
//                       support@mosave.ng
//                     </a>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3 text-white/70">
//                   <Phone size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--mosave-cyan)' }} />
//                   <div>
//                     <div className="text-sm text-white/50 mb-1">Phone</div>
//                     <span>+234 XXX XXX XXXX</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3 text-white/70">
//                   <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--mosave-cyan)' }} />
//                   <div>
//                     <div className="text-sm text-white/50 mb-1">Location</div>
//                     <span>Lagos, Nigeria</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Newsletter Section */}
//           <div 
//             className="p-8 rounded-2xl mb-12"
//             style={{
//               background: `linear-gradient(135deg, rgba(91, 33, 182, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)`,
//               border: '1px solid rgba(255, 255, 255, 0.1)'
//             }}
//           >
//             <div className="max-w-2xl mx-auto text-center">
//               <h3 className="text-white text-2xl font-semibold mb-3">
//                 Stay Updated
//               </h3>
//               <p className="text-white/70 mb-6">
//                 Subscribe to our newsletter for updates, tips, and exclusive offers.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
//                 />
//                 <button
//                   className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
//                   style={{
//                     background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
//                   }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="pt-8 border-t border-white/10">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-white/60 text-sm text-center md:text-left">
//                 © 2026 MoSave. All rights reserved. A product of{' '}
//                 <span style={{ color: 'var(--mosave-red)' }}>Mo</span>
//                 <span style={{ color: 'var(--mosave-cyan)' }}>Loyal</span> by Avante Consulting Solutions Ltd.
//               </p>
//               <div className="flex items-center gap-2">
//                 <span className="text-white/60 text-sm">Made with</span>
//                 <span className="text-red-500 animate-pulse">❤️</span>
//                 <span className="text-white/60 text-sm">in Nigeria</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }