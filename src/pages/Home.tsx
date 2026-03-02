/*
 * LifeDesign株式会社 コーポレートサイト - Home Page
 * Design: Contemporary Professional × Japanese Precision
 * Sections: Header, Hero, About, Services, Message, Company, Footer
 * Notes: コンタクトフォーム削除、代表者顔写真削除、ページ説明文追加
 */

import { useEffect, useRef, useState } from "react";
import {
  User,
  Briefcase,
  Layers,
  Calendar,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/idd9faXjPMvo47ZZmhw6Bm/sandbox/SWlY5e6mwysZpRgnqZxvFD-img-1_1772153655000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaWRkOWZhWGpQTXZvNDdaWm1odzZCbS9zYW5kYm94L1NXbFk1ZTZtd3lzWnBSZ25xWnh2RkQtaW1nLTFfMTc3MjE1MzY1NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eIGPJm7aRBFvaKOI7sHmZ-sRd6zsxRQYX-SjjgDMHyIbA-Cz0frTIjbeK6eTLAcLxbwP3iVrGp7pwd-wE57EoBJAzTIpgBwUCWrby~tpnex7fZsZLNDXpa-53P6vhTSMGk1GJF4NQF87o4W9Wt1-ljeZk9yXDGceKdIxbg6CDkegbZttM6Bvj2FjJn3WiO1bqfy-1~spNP90N5BCbpQdSQS5coTn4HmMvwPjoXiyfIUGheaHUaURoAXKKdP-JcTz1-s1CBgn6Ua21p525DXXAP-DRkCSefPJnb~TxwhvcBg6lylg51Wd9r6URul0BBKmbGgWmFYLik8H-BNdzHpjEA__";

const ABOUT_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/idd9faXjPMvo47ZZmhw6Bm/sandbox/SWlY5e6mwysZpRgnqZxvFD-img-2_1772153659000_na1fn_YWJvdXQtb2ZmaWNl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaWRkOWZhWGpQTXZvNDdaWm1odzZCbS9zYW5kYm94L1NXbFk1ZTZtd3lzWnBSZ25xWnh2RkQtaW1nLTJfMTc3MjE1MzY1OTAwMF9uYTFmbl9ZV0p2ZFhRdGIyWm1hV05sLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n4AKxM66FVpj6LMJpGDadvRwUMn5IienQN0m1YEb388r9Ehm~d1mbp8yoWODI7VindKaVK5NYZF2oXIqGJwMUSbnYb16FPQFdTx5zqtifYp22wdeNrnnhrZyE21NBaa88t3gZ~RTmm3NQsIpdPkKkHFqBPkfu49x7gEVBW4~whzM1iNIJzwUbrhn5InXdnn13NLQ5UI6DPGNRQ5IXJS48TpV9ld8c8U427799ctFfUEbTg8sUPGAESAPCGHppXSOmfL8hD769~-O4XaiLOLmmdD0ErMWqjGYIF98-ZUrR3Gza76EeuzT~E9x4-CpIEkViMd1tG-CDJUjdd3y2RhETA__";

const services = [
  {
    icon: <User size={22} />,
    color: "bg-indigo-50 text-indigo-600",
    title: "個人向けコンサルティング",
    description:
      "キャリア形成や資産設計など、個人のライフステージに合わせた最適なプランを提案し、自己実現をサポートします。",
  },
  {
    icon: <Briefcase size={22} />,
    color: "bg-blue-50 text-blue-600",
    title: "法人向けコンサルティング",
    description:
      "経営戦略の立案から組織改革まで、企業の課題解決に向けた専門的な知見を提供し、企業価値の向上に寄与します。",
  },
  {
    icon: <Layers size={22} />,
    color: "bg-slate-100 text-slate-600",
    title: "プロジェクトマネジメント",
    description:
      "複雑なプロジェクトの工程管理、リスク分析、チームビルディングを統括し、目標達成まで確実に導きます。",
  },
  {
    icon: <Calendar size={22} />,
    color: "bg-amber-50 text-amber-600",
    title: "イベント企画・運営",
    description:
      "コンセプト立案から当日の運営まで、人の心を動かし記憶に残る体験をプロデュースします。",
  },
];

const companyInfo = [
  { label: "会社名", value: "LifeDesign株式会社" },
  { label: "設立", value: "2025年3月" },
  { label: "代表者", value: "代表取締役　小澤 智弥" },
  {
    label: "所在地",
    value: (
      <>
        〒106-0032
        <br />
        東京都港区六本木5-11-38-103
      </>
    ),
  },
  {
    label: "事業内容",
    value: "個人・法人向けコンサルティング / プロジェクトマネジメント / イベント企画・運営",
  },
];

// Hook: Intersection Observer for scroll animations
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Hook: Active nav section tracking
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export default function Home() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(["about", "services", "message", "company"]);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#message", label: "MESSAGE" },
    { href: "#company", label: "COMPANY" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ===== HEADER ===== */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-tight">LD</span>
              </div>
              <span
                className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                LifeDesign
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    className={`text-sm font-medium tracking-widest transition-colors relative pb-1 ${
                      isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block py-3 px-2 text-slate-600 hover:text-indigo-600 font-medium tracking-widest text-sm border-b border-slate-100 last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-indigo-950/80" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-slate-300 uppercase">
              Consulting &amp; Life Design
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            未来をデザインし、
            <br />
            <span className="text-indigo-300">価値を創造する。</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            LifeDesign株式会社は、個人と法人の可能性を最大化し、
            <br className="hidden md:block" />
            確かな戦略と情熱で理想の未来を形にします。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-indigo-900/40 hover:shadow-indigo-900/60 hover:-translate-y-0.5"
            >
              事業内容を見る
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              私たちについて
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown size={20} className="text-white/40" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text */}
            <div className="w-full lg:w-1/2 fade-in-up">
              <span className="inline-block text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 border-b-2 border-indigo-600 pb-1">
                About Us
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-slate-900 leading-snug"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                新しい時代に、
                <br />
                新しいライフデザインを。
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                2025年3月、私たちは多様化する社会の中で、一人ひとりの人生（Life）と企業の在り方を再設計（Design）するために誕生しました。
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                変化の激しい現代において、単なるアドバイスに留まらない「伴走型」の支援を提供し、プロジェクトの成功と持続可能な成長を実現します。
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
                {[
                  { num: "4", unit: "領域", label: "専門事業" },
                  { num: "100", unit: "%", label: "伴走型支援" },
                  { num: "2025", unit: "年", label: "設立" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">
                      {s.num}
                      <span className="text-sm ml-0.5">{s.unit}</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 fade-in-up">
              <div className="relative">
                <div className="absolute -inset-3 bg-indigo-100 rounded-2xl -rotate-2 opacity-60" />
                <img
                  src={ABOUT_IMG}
                  alt="モダンなオフィス空間"
                  className="relative rounded-xl shadow-2xl object-cover h-[420px] w-full"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-5 py-3 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">東京都港区六本木</p>
                  <p className="text-sm font-bold text-slate-800">六本木オフィス</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <span className="inline-block text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 border-b-2 border-indigo-600 pb-1">
              Services
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-4 text-slate-900"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              事業内容
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              個人から法人まで、多様なニーズに応える4つの専門領域でお客様の成長を支援します。
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="fade-in-up bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MESSAGE SECTION ===== */}
      <section id="message" className="py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-80" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="fade-in-up text-center mb-12">
            <span className="inline-block text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 border-b-2 border-indigo-600 pb-1">
              Message
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mt-4 text-slate-900"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              代表者メッセージ
            </h2>
          </div>

          <div className="fade-in-up bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            {/* Quote mark */}
            <div className="text-6xl text-indigo-200 font-serif leading-none mb-4 select-none">"</div>

            <h3
              className="text-xl md:text-2xl font-bold text-slate-800 mb-6"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              「想い」をカタチに、未来を切り拓く。
            </h3>

            <p className="text-slate-600 leading-loose text-base mb-8">
              「人生はデザインできる」という確信のもと、LifeDesign株式会社を設立いたしました。私たちは、お客様一人ひとりの、そして一社一社のパートナーとして、より良い未来を描くための羅針盤でありたいと考えています。
            </p>

            <div className="border-t border-slate-200 pt-6 flex items-center justify-end gap-4">
              <div className="text-right">
                <p className="text-slate-400 text-xs font-medium tracking-wide">代表取締役</p>
                <p
                  className="text-xl font-bold text-slate-800 mt-0.5"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  小澤 智弥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY SECTION ===== */}
      <section id="company" className="py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Company Info */}
            <div className="fade-in-up">
              <span className="inline-block text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 border-b-2 border-indigo-400 pb-1">
                Company
              </span>
              <h2
                className="text-3xl font-bold mb-10 mt-4"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                会社概要
              </h2>
              <dl className="space-y-0">
                {companyInfo.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex gap-6 py-5 border-b border-slate-800 last:border-0"
                  >
                    <dt className="w-28 flex-shrink-0 text-slate-400 text-sm font-medium pt-0.5">
                      {label}
                    </dt>
                    <dd className="flex-1 text-slate-100 text-sm leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Map Placeholder */}
            <div className="fade-in-up">
              <div className="rounded-2xl overflow-hidden h-[420px] border border-slate-700 bg-slate-800 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center">
                  <MapPin size={24} className="text-indigo-400" />
                </div>
                <div className="text-center">
                  <p className="text-slate-300 font-medium text-sm">東京都港区六本木</p>
                  <p className="text-slate-500 text-xs mt-1">六本木5-11-38-103</p>
                </div>
                <a
                  href="https://maps.google.com/?q=東京都港区六本木5-11-38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-600 text-slate-300 text-xs hover:border-indigo-400 hover:text-indigo-400 transition-colors"
                >
                  Google マップで見る
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo + copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">LD</span>
                </div>
                <span
                  className="text-white text-sm font-bold"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  LifeDesign株式会社
                </span>
              </div>
              <p className="text-slate-500 text-xs">© 2025 LifeDesign Inc. All rights reserved.</p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {[
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
