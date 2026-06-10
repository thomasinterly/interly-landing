/* =========================================================================
   INTERLY — Primitives UI
   Icon, Logo, Avatar, Button, Chip, LevelIndicator, ValidationStack, ValidationBadge
   ========================================================================= */
import { useState } from "react";
import { PEERS } from "../data";

/* — Icônes : trait fin, minimalistes (1.6 stroke) — */
const ICON_PATHS = {
  layout:   <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  sparkle:  <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z"/>,
  code:     <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>,
  grid:     <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  globe:    <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z"/></>,
  check:    <path d="M5 13l4 4L19 7"/>,
  arrow:    <path d="M5 12h14M13 6l6 6-6 6"/>,
  verified: <path d="M12 3l2.1 1.6 2.6-.3 1 2.4 2.4 1-.3 2.6L21 12l-1.6 2.1.3 2.6-2.4 1-1 2.4-2.6-.3L12 21l-2.1-1.6-2.6.3-1-2.4-2.4-1 .3-2.6L3 12l1.6-2.1-.3-2.6 2.4-1 1-2.4 2.6.3z"/>,
  mail:     <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  palette:  <><path d="M12 3a9 9 0 100 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.24-.27-.39-.62-.39-1 0-.83.67-1.5 1.5-1.5H16a5 5 0 005-5c0-4.42-4.03-8-9-8z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/></>,
  rocket:   <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>,
  megaphone:<><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/></>,
  cpu:      <><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>,
  camera:   <><path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>,
  chart:    <path d="M4 20V4M4 20h16M8 20v-6M13 20v-10M18 20v-4"/>,
};

export function Icon({ name, size = 20, stroke = 1.6, style, ...rest }) {
  const p = ICON_PATHS[name];
  if (!p) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
      strokeLinejoin="round" style={{ display: "block", flex: "none", ...style }} {...rest}>
      {p}
    </svg>
  );
}

/* — Logo Interly — monogramme + wordmark — */
export function Logo({ size = 22, showWord = true, onClick }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 9, cursor: onClick ? "pointer" : "default", userSelect: "none" }}>
      <img src="/logo-mark.png" alt="Interly" draggable={false} style={{
        width: size + 9, height: size + 9, flex: "none", display: "block",
        objectFit: "contain", marginLeft: -2,
      }} />
      {showWord && <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: size * 0.86, letterSpacing: "-0.02em" }}>Interly</span>}
    </div>
  );
}

/* — Avatar : initiales sur dégradé teinté (hue) ou photo placeholder — */
export function Avatar({ name, initials, hue = 20, size = 44, flag, ring = false, badge }) {
  const ini = initials || (name || "?").split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <div style={{ position: "relative", width: size, height: size, flex: "none" }}>
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: `linear-gradient(140deg, oklch(0.72 0.12 ${hue}), oklch(0.58 0.15 ${hue + 24}))`,
        color: "#fff", display: "grid", placeItems: "center",
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: size * 0.36, letterSpacing: "-0.01em",
        boxShadow: ring ? "0 0 0 3px var(--surface), 0 0 0 4.5px var(--accent-ring)" : "inset 0 0 0 1px rgba(255,255,255,0.18)",
      }}>{ini}</div>
      {flag && <span style={{ position: "absolute", right: -2, bottom: -2, fontSize: size * 0.34, lineHeight: 1, filter: "drop-shadow(0 1px 1px rgba(0,0,0,.25))" }}>{flag}</span>}
      {badge && <div style={{ position: "absolute", right: -3, bottom: -3, width: size * 0.42, height: size * 0.42, borderRadius: "50%", background: "var(--accent)", color: "var(--accent-fg)", display: "grid", placeItems: "center", boxShadow: "0 0 0 2.5px var(--surface)" }}>
        <Icon name="check" size={size * 0.26} stroke={2.4} />
      </div>}
    </div>
  );
}

/* — Button — variant: primary | secondary | ghost — */
export function Button({ children, variant = "primary", size = "md", icon, iconRight, active, full, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = size === "sm" ? "7px 12px" : size === "lg" ? "13px 22px" : "10px 17px";
  const fs = size === "sm" ? "var(--t-14)" : size === "lg" ? "var(--t-16)" : "var(--t-14)";

  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    fontFamily: "var(--font-display)", fontWeight: 540, fontSize: fs,
    padding: pad,
    width: full ? "100%" : "auto",
    height: "auto",
    borderRadius: "var(--r-sm)",
    border: "1px solid transparent", cursor: "pointer", whiteSpace: "nowrap",
    letterSpacing: "-0.005em", lineHeight: 1.1,
    transition: "transform .12s var(--ease), background .2s, border-color .2s, color .2s, box-shadow .2s",
    transform: press ? "scale(0.97)" : hover ? "translateY(-1px)" : "none",
    ...style,
  };
  const variants = {
    primary: {
      background: active ? "var(--text)" : "var(--accent)",
      color: active ? "var(--bg)" : "var(--accent-fg)",
      boxShadow: hover ? "0 6px 18px -6px var(--accent-ring)" : "none",
    },
    secondary: {
      background: hover ? "var(--surface-hover)" : "var(--surface)",
      color: "var(--text)", borderColor: "var(--border-strong)",
    },
    ghost: {
      background: hover ? "var(--surface-2)" : "transparent",
      color: "var(--text-2)",
    },
  };
  return (
    <button {...rest}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant] }}>
      {icon && <Icon name={icon} size={size === "sm" ? 16 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 16 : 18} />}
    </button>
  );
}

/* — Chip / Tag — catégorie skill ou filtre — */
export function Chip({ children, color, active, onClick, dot = true, size = "md", style }) {
  const [hover, setHover] = useState(false);
  const c = color || "var(--text-2)";
  const sm = size === "sm";
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: sm ? "4px 10px" : "6px 13px",
        fontSize: sm ? "var(--t-12)" : "var(--t-14)", fontWeight: 500,
        fontFamily: "var(--font-body)",
        borderRadius: "var(--r-full)", cursor: onClick ? "pointer" : "default",
        border: "1px solid", whiteSpace: "nowrap",
        letterSpacing: "-0.005em",
        background: active ? "var(--text)" : hover && onClick ? "var(--surface-hover)" : "var(--surface)",
        color: active ? "var(--bg)" : "var(--text)",
        borderColor: active ? "var(--text)" : "var(--border)",
        transition: "all .18s var(--ease)", ...style,
      }}>
      {dot && color && <span style={{ width: 7, height: 7, borderRadius: "50%", background: active ? "var(--bg)" : c, flex: "none" }} />}
      {children}
    </button>
  );
}

/* — Indicateur de niveau — mode: bar | dots | label — */
export function LevelIndicator({ level, label, color, mode = "bar" }) {
  if (mode === "label") {
    return <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-12)", color, fontWeight: 500, letterSpacing: "-0.01em" }}>{label}</span>;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 6, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${level}%`, borderRadius: 999, background: color, transition: "width .9s var(--ease-out)" }} />
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-12)", color: "var(--text-3)", minWidth: 28, textAlign: "right" }}>{level}</span>
    </div>
  );
}

/* — Pile d'avatars de validations — */
export function ValidationStack({ peerIds, count, size = 26, showCount = true }) {
  const peers = (peerIds || []).map(id => PEERS.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <div style={{ display: "flex" }}>
        {peers.map((p, i) => (
          <div key={p.id} style={{ marginLeft: i === 0 ? 0 : -9, borderRadius: "50%", boxShadow: "0 0 0 2px var(--surface)" }}>
            <Avatar name={p.name} initials={p.initials} hue={p.hue} size={size} />
          </div>
        ))}
      </div>
      {showCount && <span style={{ fontSize: "var(--t-12)", color: "var(--text-2)", fontWeight: 500 }}>
        <span className="mono" style={{ color: "var(--text)" }}>{count}</span> validations
      </span>}
    </div>
  );
}

/* — Badge "peer-validated" — */
export function ValidationBadge({ count, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 9px 3px 7px", borderRadius: "var(--r-full)",
      background: "var(--accent-soft)", color: "var(--accent)",
      fontSize: "var(--t-12)", fontWeight: 600, fontFamily: "var(--font-display)",
      ...style,
    }}>
      <Icon name="verified" size={13} stroke={1.8} /> {count}
    </span>
  );
}
