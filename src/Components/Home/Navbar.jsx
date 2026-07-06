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

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-teal-300 hover:bg-teal-50">
            Log in
          </button>
          <button onClick={() =>
    window.open(
      "https://www.google.com/search?sca_esv=3926efc4ae7c8dc3&sxsrf=APpeQnv6lxE3Nuc5w-6f--gcR87hlbqh3Q:1783326023099&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xiUktYNqhFFAEToXbnQTEpkbwZ8eHTUSzXMOydKjhVpQfhyJlY6XuCsY_MOCABU_7nHrp0yYmU32UsPCMv47NQoHQcL&q=FitMom+Club+Reviews&sa=X&ved=2ahUKEwjokYCRz72VAxVKbmwGHYncEIAQ0bkNegQILhAF&biw=1280&bih=551&dpr=1.5#lrd=0x3ba8f7ae88f23111:0x590c0b3b8586d660,1,,,,",
      "_blank",
      "noopener,noreferrer")} className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800">
           Share Your Story
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 sm:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          menuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 border-t border-slate-100 bg-white px-4 py-5 sm:px-8">
          <button className="w-full rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-teal-300 hover:bg-teal-50">
            Join Now
          </button>
          <button
           onClick={() =>
    window.open(
      "https://www.google.com/search?sca_esv=3926efc4ae7c8dc3&sxsrf=APpeQnv6lxE3Nuc5w-6f--gcR87hlbqh3Q:1783326023099&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xiUktYNqhFFAEToXbnQTEpkbwZ8eHTUSzXMOydKjhVpQfhyJlY6XuCsY_MOCABU_7nHrp0yYmU32UsPCMv47NQoHQcL&q=FitMom+Club+Reviews&sa=X&ved=2ahUKEwjokYCRz72VAxVKbmwGHYncEIAQ0bkNegQILhAF&biw=1280&bih=551&dpr=1.5#lrd=0x3ba8f7ae88f23111:0x590c0b3b8586d660,1,,,,",
      "_blank",
      "noopener,noreferrer")}
       className="w-full rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800">
            Share Your Story
          </button>
        </div>
      </div>
    </header>
  );
}