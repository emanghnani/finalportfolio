import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MdArrowForward, MdArrowBack, MdZoomIn, MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

import stroop from "/public/stroop.png";
import vault from "/public/vault.png";
import wordpress from "/public/wordpress1.png";
import wordpress2 from "/public/wordpress2.png";
import wordpress3 from "/public/wordpress3.png";
import shopify1 from "/public/shopify1.png";
import shopify2 from "/public/shopify2.png";
import shopify3 from "/public/shopify3.png";
import trendvaultmain from "/public/trendvaultmain.jpg";
import trendvault1 from "/public/trendvault1.png";
import trendvault2 from "/public/trendvault2.png";
import trendvault3 from "/public/trendvault3.png";
import shopee1 from "/public/shopee1.png";
import hairlesswhisper2 from "/public/hairlesswhisper2.png";

const projects = [
  {
    id: "wp-ecom",
    title: "WordPress E‑Commerce Websites",
    images: [wordpress, wordpress2, wordpress3],
    url: "https://kalosawear.com",
    description:
      "Multiple WordPress stores focused on conversion: mobile-first layouts, speed optimizations, and clean product taxonomy. Example: kalosawear.com for women’s clothing (silk & plus-size). I also delivered the logo and social content guidelines.",
    tags: ["WordPress", "WooCommerce", "SEO", "Branding"],
  },
  {
    id: "stroop",
    title: "Stroop! (Mobile Game)",
    images: [stroop],
    url: "https://appadvice.com/app/stroop-concentration-test/1453941217",
    description:
      "Unity (C#) game that trains cognitive control using the Stroop effect. Implemented FB login, PlayFab leaderboard, and difficulty scaling.",
    tags: ["Unity", "C#", "PlayFab"],
  },
  {
    id: "vault",
    title: "Vault (Hillarys App Store)",
    images: [vault],
    url: "https://play.google.com/store/apps/details?id=com.hillarys.vault&hl=en_GB&gl=US",
    description:
      "Android app feature work during my internship: efficient Firebase download pipeline + client-side command cache to reduce API calls and cost.",
    tags: ["Android", "Kotlin", "Firebase"],
  },
  {
    id: "shopify",
    title: "Shopify Websites",
    images: [shopify1, shopify2, shopify3],
    url: "",
    description:
      "Configured Shopify for a PH streetwear reseller (Iconic Streetwear): theme setup, product collections, GCash + COD integration, and basic CRM flows.",
    tags: ["Shopify", "Payments", "Collections"],
  },
  // --- Shopee management case studies
  {
    id: "shopee-mgmt-1",
    title: "Shopee Management — Hairless Whisper (Men’s Grooming)",
    images: [shopee1, hairlesswhisper2],
    url: "https://shopee.ph/", 
    description:
      "End-to-end store ops: keyword-driven titles, thumbnail A/B tests, voucher ladder, and weekly ROAS pruning. Coordinated CN suppliers and optimized air/sea shipping with insurance. Also grew store followers to 600+ organically.",
    tags: ["Shopee", "Ads ROAS", "Listing SEO", "Supplier Ops"],
    kpis: [
      { label: "Orders / 30d", value: "120" },
      { label: "Ad ROAS", value: "4.5x" },
      { label: "Repeat Rate", value: "28%" },
      { label: "Followers", value: "600+" },
    ],
  },
  {
    id: "shopee-mgmt-2",
    title: "Shopee Management — TrendVault",
    images: [trendvaultmain, trendvault1, trendvault2, trendvault3],
    url: "https://shopee.ph/", 
    description:
      "Fast SKU iteration, seasonal drops, price anchoring, and UGC review loops to win search and convert. Also grew store followers to 600+.",
    tags: ["Shopee", "Pricing", "UGC", "A/B Testing"],
    kpis: [
      { label: "CTR Uplift", value: "+38%" },
      { label: "Conversion", value: "+22%" },
      { label: "Avg. Rating", value: "4.9★" },
      { label: "Followers", value: "600+" },
    ],
  },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300">
    {children}
  </span>
);

// 🔍 Lightbox modal to view images full-size
function Lightbox({ open, src, alt, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/90 hover:text-white flex items-center gap-1"
        >
          <MdClose size={22} /> Close
        </button>
        <Image src={src} alt={alt} fill className="object-contain select-none" sizes="100vw" priority />
      </div>
    </div>
  );
}

// 🔥 Restyled KPI to pop: gradient, accent, bold value
const Kpi = ({ label, value }) => (
  <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 px-4 py-3 text-center shadow-sm">
    <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_40%,#0000,black)]">
      <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-blue-200/50 dark:bg-blue-700/40" />
    </div>
    <div className="text-[11px] uppercase tracking-wider text-blue-700 dark:text-blue-200 font-semibold">
      {label}
    </div>
    <div className="mt-1 text-xl font-extrabold text-zinc-900 dark:text-white">
      {value}
    </div>
  </div>
);

function useSwipe(onLeft, onRight) {
  const startX = useRef(0);
  const endX = useRef(0);

  const onTouchStart = useCallback((e) => {
    startX.current = e.changedTouches[0].screenX;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      endX.current = e.changedTouches[0].screenX;
      const dx = endX.current - startX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) onLeft?.();
        else onRight?.();
      }
    },
    [onLeft, onRight]
  );

  return { onTouchStart, onTouchEnd };
}

const ProjectCard = ({ project, priorityImage = false }) => {
  const { id, title, images, url, description, tags = [], kpis = [] } = project;
  const [idx, setIdx] = useState(0);
  const imgCount = images.length;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = useCallback(() => setIdx((v) => (v - 1 + imgCount) % imgCount), [imgCount]);
  const goNext = useCallback(() => setIdx((v) => (v + 1) % imgCount), [imgCount]);

  const { onTouchStart, onTouchEnd } = useSwipe(goNext, goPrev);

  const sizes = useMemo(
    () => "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px",
    []
  );

  return (
    <div className="group rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-white/80 dark:bg-zinc-900/80">
      <div
        className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 cursor-zoom-in"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => setLightboxOpen(true)}
        role="button"
        aria-label={`Open ${title} image`}
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setLightboxOpen(true)}
      >
        <Image
          src={images[idx]}
          alt={title}
          fill
          sizes={sizes}
          className="object-contain"
          priority={priorityImage}
          placeholder="blur"
        />
        {/* Magnify button */}
        <button
          type="button"
          aria-label="Open full-screen image"
          className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-black/60 text-white px-3 py-1.5 text-xs font-medium hover:bg-black/75"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(true);
          }}
        >
          <MdZoomIn size={16} /> View
        </button>

        {imgCount > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <MdArrowBack size={22} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <MdArrowForward size={22} />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIdx(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-blue-600" : "bg-zinc-400/80"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white text-center">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base text-center md:text-left">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            {tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        )}

        {kpis.length > 0 && (
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {kpis.map((k) => (
              <Kpi key={k.label} label={k.label} value={k.value} />
            ))}
          </div>
        )}

        <div className="mt-5 text-center md:text-left">
          {url ? (
            <Link href={url} target="_blank" className="text-blue-600 hover:underline font-medium">
              Visit Project →
            </Link>
          ) : (
            <span className="text-zinc-500 text-sm">Private demo on request</span>
          )}
        </div>
      </div>

      {/* Lightbox for this project's current image */}
      <Lightbox open={lightboxOpen} src={images[idx]} alt={title} onClose={() => setLightboxOpen(false)} />
    </div>
  );
};

export default function ProjectsOptimized() {
  return (
    <section id="portfolio" className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold text-center md:text-left">
          Projects I have worked on
        </h2>
        <p className="mt-6 text-zinc-700 dark:text-zinc-300 max-w-2xl">
          A selection of client work, experiments, and e‑commerce builds. Mobile‑first, performance‑minded, and conversion‑focused.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} priorityImage={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
