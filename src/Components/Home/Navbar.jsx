import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/home/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Background toggle + hide-on-scroll-down / show-on-scroll-up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY > lastScrollY.current && currentY > 60) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={menuRef}
      className={`sticky top-0 z-250 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "border-b border-transparent bg-transparent"
          : "border-b border-slate-100 bg-white/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-semibold tracking-tight text-slate-900"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          <img src={logo} alt="FitMom Club Logo" className="h-14 w-auto" />
        </a>
      </div>

    </header>
  );
}