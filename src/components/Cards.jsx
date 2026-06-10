/* =========================================================================
   INTERLY — Cartes
   SkillBlock, DiscoverCard
   ========================================================================= */
import { useState } from "react";
import { CATEGORIES, EXPERIENCES } from "../data";
import { Avatar, Chip, Icon, LevelIndicator, ValidationBadge, ValidationStack } from "./Primitives";

/* — SKILL BLOCK ———————————————————————————————————————————— */
export function SkillBlock({ skill, levelMode = "bar", onValidate, onOpen, compact = false }) {
  const cat = CATEGORIES[skill.cat];
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(skill.validations);
  const [validated, setValidated] = useState(false);
  const [pulse, setPulse] = useState(false);

  const linkedExp = (skill.linked || []).map(id => EXPERIENCES.find(e => e.id === id)).filter(Boolean);

  const validate = (e) => {
    e.stopPropagation();
    if (validated) return;
    setValidated(true);
    setCount(c => c + 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
    onValidate && onValidate(skill);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={() => onOpen && onOpen(skill)}
      style={{
        position: "relative", display: "flex", flexDirection: "column",
        background: "var(--surface)", borderRadius: "var(--r-lg)",
        border: "1px solid", borderColor: hover ? "var(--border-strong)" : "var(--border)",
        padding: compact ? 16 : 20, cursor: "pointer", overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "transform .34s var(--ease), box-shadow .34s var(--ease), border-color .2s",
      }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 3, background: cat.color, opacity: hover ? 1 : 0, transition: "opacity .25s" }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flex: "none",
          background: `color-mix(in oklch, ${cat.color} 14%, transparent)`,
          color: cat.color, display: "grid", placeItems: "center",
          transition: "transform .3s var(--ease)",
          transform: hover ? "scale(1.06) rotate(-3deg)" : "none",
        }}>
          <Icon name={skill.icon} size={22} stroke={1.7} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--t-16)", fontWeight: 600, letterSpacing: "-0.01em" }}>{skill.name}</h3>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4, fontSize: "var(--t-12)", color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color }} /> {cat.label}
          </span>
        </div>
      </div>

      {!compact && <p style={{ margin: "13px 0 0", fontSize: "var(--t-14)", color: "var(--text-2)", lineHeight: 1.5, textWrap: "pretty" }}>{skill.blurb}</p>}

      <div style={{ marginTop: 15 }}>
        <LevelIndicator level={skill.level} label={skill.levelLabel} color={cat.color} mode={levelMode} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        <ValidationStack peerIds={skill.peers} count={count} size={24} />
        <button onClick={validate}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 11px", borderRadius: "var(--r-full)",
            border: "1px solid", fontFamily: "var(--font-display)", fontWeight: 540,
            fontSize: "var(--t-12)", cursor: validated ? "default" : "pointer",
            background: validated ? "var(--accent)" : "transparent",
            color: validated ? "var(--accent-fg)" : "var(--text-2)",
            borderColor: validated ? "var(--accent)" : "var(--border-strong)",
            transform: pulse ? "scale(1.12)" : "scale(1)",
            transition: "all .3s var(--ease)", whiteSpace: "nowrap",
          }}>
          <Icon name={validated ? "check" : "arrow"} size={14} stroke={2} />
          {validated ? "Validé" : "Valider"}
        </button>
      </div>

      <div style={{
        maxHeight: hover && linkedExp.length ? 88 : 0, opacity: hover ? 1 : 0,
        overflow: "hidden", transition: "max-height .38s var(--ease), opacity .3s, margin .3s",
        marginTop: hover && linkedExp.length ? 14 : 0,
      }}>
        <div style={{ fontSize: "var(--t-12)", color: "var(--text-3)", fontFamily: "var(--font-mono)", marginBottom: 8, letterSpacing: "0.02em" }}>DÉVELOPPÉE CHEZ</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {linkedExp.map(e => (
            <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--t-12)", color: "var(--text-2)" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flex: "none" }} />
              <span style={{ color: "var(--text)", fontWeight: 500 }}>{e.org}</span>
              <span style={{ color: "var(--text-3)" }}>· {e.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* — DISCOVER CARD (profil dans le feed) ————————————————————— */
export function DiscoverCard({ p, onOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={() => onOpen && onOpen(p)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface)", border: "1px solid",
        borderColor: hover ? "var(--border-strong)" : "var(--border)",
        borderRadius: "var(--r-lg)", padding: 22, cursor: "pointer",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "transform .34s var(--ease), box-shadow .34s, border-color .2s",
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <Avatar name={p.name} hue={p.hue} size={52} flag={p.flag} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--t-16)", letterSpacing: "-0.01em" }}>{p.name}</div>
          <div className="mono" style={{ fontSize: "var(--t-12)", color: "var(--text-3)" }}>@{p.handle}</div>
        </div>
        <ValidationBadge count={p.validations} />
      </div>
      <div style={{ marginTop: 13, fontSize: "var(--t-14)", color: "var(--text-2)" }}>{p.role} · {p.loc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 13 }}>
        {p.skills.map(s => <Chip key={s} size="sm" color={CATEGORIES[p.cat].color}>{s}</Chip>)}
      </div>
    </div>
  );
}
