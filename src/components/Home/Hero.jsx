import React, { useEffect, useMemo, useRef, useState } from "react";
import { heroData } from "../../../data/hero";
import Button2 from "../Button2";

export default function Hero() {
  const cards = heroData;
  const [current, setCurrent] = useState(cards[0]);
  const currentIndex = useMemo(
    () => cards.findIndex((c) => c.id === current.id),
    [cards, current.id]
  );

  // Mobile scroller ref
  const mobileRef = useRef(null);
  const intervalMs = 4000;

  // Auto-slide (mobile)
  useEffect(() => {
    const scroller = mobileRef.current;
    if (!scroller) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let paused = false;
    let timer;

    const slideTo = (idx) => {
      const w = scroller.clientWidth;
      scroller.scrollTo({ left: idx * w, behavior: "smooth" });
      if (cards[idx]) setCurrent(cards[idx]);
    };

    const tick = () => {
      if (paused || document.hidden) return;
      const w = scroller.clientWidth;
      const idx = Math.round(scroller.scrollLeft / w);
      const next = (idx + 1) % cards.length;
      slideTo(next);
    };

    const start = () => {
      clearInterval(timer);
      timer = setInterval(tick, intervalMs);
    };
    const stop = () => clearInterval(timer);

    const onDown = () => (paused = true);
    const onUp = () => (paused = false);
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    scroller.addEventListener("pointerdown", onDown);
    scroller.addEventListener("pointerup", onUp);
    scroller.addEventListener("mouseenter", onEnter);
    scroller.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", tick);
    window.addEventListener("resize", tick);

    start();
    return () => {
      stop();
      scroller.removeEventListener("pointerdown", onDown);
      scroller.removeEventListener("pointerup", onUp);
      scroller.removeEventListener("mouseenter", onEnter);
      scroller.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", tick);
      window.removeEventListener("resize", tick);
    };
  }, [cards, intervalMs]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ======== MOBILE: full-bleed carousel (auto) ======== */}
      <section className="md:hidden h-[95vh]">
        <div
          ref={mobileRef}
          className="h-full flex snap-x snap-mandatory overflow-x-auto scroll-smooth
                     [scrollbar-width:none] [-ms-overflow-style:none]"
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / el.clientWidth);
            if (cards[idx] && cards[idx].id !== current.id) setCurrent(cards[idx]);
          }}
        >
          {/* Hide WebKit scrollbar */}
          <style>{`.snap-mandatory::-webkit-scrollbar{display:none}`}</style>

          {cards.map((card) => (
            <article
              key={card.id}
              className="relative snap-start shrink-0 w-full h-full"
            >
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                <h1 className="text-white text-4xl font-bold font-playfair">
                  Food<br />Zone
                </h1>
                <p className="text-white/90 text-sm">
                  ---- Norem ipsum dolor sit amet, consectetur.
                </p>
                <div className="flex gap-2">
                  <Button2 text="30 minutes" status="clock" className="bg-white/90" />
                  <Button2 text="chicken" status="kitchen" className="bg-white/90" />
                </div>
                <div className="mt-3">
                  <h3 className="text-white text-lg font-semibold">{card.name}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {cards.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                const el = mobileRef.current;
                if (!el) return;
                el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                setCurrent(cards[i]);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ======== TABLET: image left + card grid right ======== */}
      <section className="hidden md:grid lg:hidden grid-cols-2 gap-6 min-h-[80vh] px-6 py-10">
        <div className="relative">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full max-h-[70vh] object-cover rounded-3xl"
          />
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Food Zone
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          <div className="col-span-2 mb-2">
            <h2 className="text-5xl font-playfair font-bold leading-tight">
              Food<br />Zone
            </h2>
            <p className="text-gray-700 mt-2">
              ---- Norem ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex gap-2 py-3">
              <Button2 text="30 minutes" status="clock" className="bg-[#E7FAFE]" />
              <Button2 text="chicken" status="kitchen" className="bg-[#E7FAFE]" />
            </div>
          </div>

          {cards.map((card) => {
            const active = current.id === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setCurrent(card)}
                className={`flex items-center gap-3 p-3 rounded-2xl text-left transition
                  border ${
                    active
                      ? "bg-[#FE7F26] text-white border-transparent"
                      : "bg-white text-black border-gray-200"
                  }`}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <div className="font-semibold">{card.name}</div>
                  <div
                    className={`text-sm ${
                      active ? "text-white/90" : "text-gray-600"
                    } line-clamp-2`}
                  >
                    {card.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======== DESKTOP: original layout + right rail ======== */}
      <section className="hidden lg:block">
        <div className="w-full h-screen px-[129px] relative py-10">
          <div className="relative grid grid-cols-4 items-center">
            <div>
              <h1 className="text-[120px] xl:text-[150px] font-bold font-playfair leading-[1.05]">
                Food<br />Zone
              </h1>
              <p className="font-inter text-[18px] ml-5">
                ---- Norem ipsum dolor sit amet, consectetur.
              </p>
              <div className="flex gap-3 py-5">
                <Button2 text="30 minutes" status="clock" className="bg-[#E7FAFE]" />
                <Button2 text="chicken" status="kitchen" className="bg-[#E7FAFE]" />
              </div>
            </div>

            <div className="col-span-3">
              <img
                src={current.image}
                alt={current.name}
                className="w-full max-w-[1151px] h-[70vh] xl:h-[850px] object-fill rounded-3xl"
              />
            </div>

            <div className="absolute top-0 left-0">
              <img src="/Badge.svg" alt="badge" className="slow-spin" />
            </div>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-5">
            {cards.map((card) => {
              const active = current.id === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => setCurrent(card)}
                  className={`flex items-center gap-5 rounded-l-full transition-all ml-auto ${
                    active
                      ? "bg-[#FE7F26] w-[607px] ring-4 ring-yellow-400 text-white"
                      : "bg-white w-[487px] text-black"
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-[120px] h-[120px] rounded-full p-2 object-cover"
                  />
                  <div className="flex flex-col pr-4">
                    <h4 className="text-[20px]">{card.name}</h4>
                    <p className="text-[14px]">{card.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
