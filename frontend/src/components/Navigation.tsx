"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import logoImage from "@/public/logo.png"; // <-- Put your logo inside /public

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleLogoClick}>
              <Image
                src={logoImage}
                alt="MoSave by MoLoyal"
                height={40}
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="hover:opacity-70 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("features")} className="hover:opacity-70 font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="hover:opacity-70 font-medium">
              How It Works
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-lg hover:bg-purple-50 font-medium"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-6 py-2.5 rounded-lg text-white font-medium shadow-md"
              style={{
                backgroundColor: "var(--mosave-purple)",
              }}
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("about")} className="text-left px-4 py-2 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("features")} className="text-left px-4 py-2 font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-left px-4 py-2 font-medium">
                How It Works
              </button>

              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg text-center font-medium border"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg text-white text-center font-medium"
                  style={{ backgroundColor: "var(--mosave-purple)" }}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}






// "use client";

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from "next/link";
// import logoImage from 'figma:asset/4ad9898027b90a2380c1bede8bc4f9409c315733.png';

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     // If not on home page, navigate to home first
//     if (location.pathname !== '/') {
//       navigate('/');
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleLogoClick = () => {
//     navigate('/');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <button onClick={handleLogoClick} className="focus:outline-none">
//               <img src={logoImage} alt="MoSave by MoLoyal" className="h-8 md:h-10" />
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <button
//               onClick={() => scrollToSection('about')}
//               className="transition-colors hover:opacity-70 font-medium"
//               style={{ color: 'var(--mosave-neutral-700)' }}
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection('features')}
//               className="transition-colors hover:opacity-70 font-medium"
//               style={{ color: 'var(--mosave-neutral-700)' }}
//             >
//               Features
//             </button>
//             <button
//               onClick={() => scrollToSection('how-it-works')}
//               className="transition-colors hover:opacity-70 font-medium"
//               style={{ color: 'var(--mosave-neutral-700)' }}
//             >
//               How It Works
//             </button>
//           </div>

//           {/* Desktop CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="/login"
//               className="px-5 py-2.5 rounded-lg transition-all hover:bg-purple-50 font-medium"
//               style={{ color: 'var(--mosave-purple)' }}
//             >
//               Login
//             </a>
//             <a
//               href="/register"
//               className="px-6 py-2.5 rounded-lg text-white transition-all hover:scale-105 shadow-md font-medium"
//               style={{ 
//                 backgroundColor: 'var(--mosave-purple)',
//                 boxShadow: '0 4px 14px 0 rgba(91, 33, 182, 0.4)'
//               }}
//             >
//               Register
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X size={24} style={{ color: 'var(--mosave-purple)' }} />
//             ) : (
//               <Menu size={24} style={{ color: 'var(--mosave-purple)' }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--mosave-neutral-200)' }}>
//             <div className="flex flex-col space-y-4">
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-left px-4 py-2 font-medium"
//                 style={{ color: 'var(--mosave-neutral-700)' }}
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection('features')}
//                 className="text-left px-4 py-2 font-medium"
//                 style={{ color: 'var(--mosave-neutral-700)' }}
//               >
//                 Features
//               </button>
//               <button
//                 onClick={() => scrollToSection('how-it-works')}
//                 className="text-left px-4 py-2 font-medium"
//                 style={{ color: 'var(--mosave-neutral-700)' }}
//               >
//                 How It Works
//               </button>
//               <div className="flex flex-col space-y-2 px-4 pt-4 border-t" style={{ borderColor: 'var(--mosave-neutral-200)' }}>
//                 <a
//                   href="/login"
//                   className="px-4 py-2 rounded-lg text-center transition-colors font-medium"
//                   style={{ color: 'var(--mosave-purple)', border: '2px solid var(--mosave-purple)' }}
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="/register"
//                   className="px-4 py-2 rounded-lg text-white text-center transition-all hover:opacity-90 font-medium"
//                   style={{ backgroundColor: 'var(--mosave-purple)' }}
//                 >
//                   Register
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }