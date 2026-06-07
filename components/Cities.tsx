export default function Cities() {
  // Villes cibles (sans compteurs : pas encore de communauté)
  const cities: string[] = [
    "Paris",
    "Barcelone",
    "Lisbonne",
    "Berlin",
    "Bologne",
    "Amsterdam",
    "Stockholm",
    "Dublin",
    "Montréal",
    "Madrid",
    "Rio",
    "Buenos Aires",
  ];

  type Pin = {
    left: string;
    top: string;
    label?: string;
    variant?: "" | "green" | "coral";
    pulse?: boolean;
  };
  // Pins sur la carte avec labels pour donner vie à notre ambition
  const pins: Pin[] = [
    { left: "46%", top: "28%", label: "Paris", variant: "coral", pulse: true },
    { left: "48%", top: "32%", label: "Barcelone", pulse: true },
    { left: "45%", top: "34%" },
    { left: "52%", top: "32%", variant: "green" },
    { left: "50%", top: "24%", label: "Berlin", variant: "green", pulse: true },
    { left: "54%", top: "28%" },
    { left: "53%", top: "36%", variant: "coral" },
    { left: "21%", top: "34%", label: "Montréal", variant: "coral", pulse: true },
    { left: "32%", top: "72%", label: "Rio", variant: "green", pulse: true },
    { left: "54%", top: "62%", variant: "green" },
    { left: "78%", top: "38%" },
    { left: "84%", top: "78%", variant: "coral" },
    { left: "82%", top: "32%", label: "Tokyo", pulse: true },
  ];

  return (
    <section className="l-section l-cities" id="cities">
      <div className="l-wrap l-cities__grid">
        <div>
          <span className="l-sec-eyebrow">Notre ambition</span>
          <div className="l-bignum">184</div>
          <p>
            villes ciblées sur 4 continents. On commence par l&apos;Europe à la
            rentrée 2026 — puis le reste du monde.
          </p>

          <div className="l-citylist">
            {cities.map((c) => (
              <span key={c}>{c}</span>
            ))}
            <span className="more">+ 172 autres</span>
          </div>
        </div>

        <div className="l-map" aria-hidden="true">
          <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dot-pat"
                x="0"
                y="0"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.3" fill="#D5DCE7" />
              </pattern>
              <mask id="continents">
                <rect width="800" height="500" fill="#000" />
                <path d="M50 130 C 30 90, 60 60, 120 70 C 180 60, 230 110, 220 170 C 230 220, 180 250, 130 240 C 80 250, 40 200, 50 130 Z" fill="#fff" />
                <path d="M210 270 C 260 250, 290 300, 280 360 C 290 420, 240 460, 210 430 C 180 410, 180 320, 210 270 Z" fill="#fff" />
                <path d="M360 110 C 340 80, 400 60, 450 80 C 490 70, 520 100, 510 140 C 530 180, 460 200, 420 180 C 380 190, 350 160, 360 110 Z" fill="#fff" />
                <path d="M400 200 C 460 200, 500 250, 490 320 C 500 380, 450 420, 410 410 C 370 400, 360 320, 380 260 C 370 230, 380 210, 400 200 Z" fill="#fff" />
                <path d="M520 120 C 580 90, 700 90, 720 150 C 760 180, 730 250, 670 250 C 620 280, 560 250, 540 210 C 510 180, 510 140, 520 120 Z" fill="#fff" />
                <path d="M650 320 C 700 310, 730 360, 700 400 C 660 430, 610 410, 620 370 C 610 340, 630 320, 650 320 Z" fill="#fff" />
              </mask>
            </defs>
            <rect
              width="800"
              height="500"
              fill="url(#dot-pat)"
              mask="url(#continents)"
            />
          </svg>

          {pins.map((p, i) => {
            const cls = [
              "l-map__pin",
              p.pulse ? "l-map__pin--pulse" : "",
              p.variant === "green" ? "l-map__pin--green" : "",
              p.variant === "coral" ? "l-map__pin--coral" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={i} className={cls} style={{ left: p.left, top: p.top }}>
                {p.label && <label>{p.label}</label>}
                <span />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
