/* =========================================================================
   INTERLY — Landing page
   ========================================================================= */
import { useRef, useState } from "react";
import { PROFILE, SKILLS, SKILL_DOMAINS } from "./data";
import { Avatar, Button, Chip, Icon, Logo } from "./components/Primitives";
import { SkillBlock } from "./components/Cards";
import { Header, Footer } from "./components/Layout";
import { joinWaitlist } from "./supabase";

export default function Landing({ onNav, onToast }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes("@") || loading || joined) return;
    setLoading(true);
    const res = await joinWaitlist(email);
    setLoading(false);
    if (res.ok) {
      setJoined(true);
      onToast && onToast(res.duplicate ? "Tu es déjà sur la liste ✦" : "Tu es sur la liste ✦");
    } else {
      onToast && onToast(res.error || "Une erreur est survenue, réessaie.");
    }
  };

  const goWaitlist = () => {
    emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => emailRef.current?.focus(), 500);
  };

  return (
    <div>
      <Header />

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", maxWidth: 1100, margin: "0 auto", padding: "82px 24px 40px", textAlign: "center" }}>
        {/* blobs flous (couleurs de marque) */}
        <div aria-hidden="true" style={{ position: "absolute", top: -40, left: "10%", width: 360, height: 360, borderRadius: "50%", background: "var(--accent)", filter: "blur(100px)", opacity: 0.28, pointerEvents: "none", zIndex: 0 }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 10, right: "8%", width: 320, height: 320, borderRadius: "50%", background: "var(--brand-2)", filter: "blur(100px)", opacity: 0.26, pointerEvents: "none", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: "var(--r-full)", border: "1px solid var(--border)", background: "color-mix(in srgb, var(--surface) 70%, transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", fontSize: "var(--t-14)", color: "var(--text-2)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-grad)" }} />
            Le réseau professionnel skill-first
          </div>
          <h1 className="serif" style={{ margin: "0 auto", maxWidth: 880, fontSize: "clamp(2.6rem, 6vw, 4.6rem)", fontWeight: 400, lineHeight: 1.04, letterSpacing: "-0.015em" }}>
            Montre ce que tu sais <span style={{ fontStyle: "italic", background: "var(--brand-grad)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>faire</span>,<br />pas seulement ce que tu as étudié.
          </h1>
          <p style={{ margin: "24px auto 0", maxWidth: 560, fontSize: "var(--t-20)", color: "var(--text-2)", lineHeight: 1.5, textWrap: "pretty" }}>
            Un profil vivant et partageable qui met en avant tes compétences réelles, validées par tes pairs — et ton parcours international.
          </p>

          {/* waitlist */}
          <form onSubmit={submit} style={{ display: "flex", gap: 9, maxWidth: 440, margin: "32px auto 0", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: "flex", alignItems: "center", padding: "11px 16px", borderRadius: "var(--r-sm)", background: "var(--surface)", border: "1px solid var(--border-strong)" }}>
                <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} placeholder="ton@email.com" type="email" disabled={joined}
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "var(--t-16)", color: "var(--text)", fontFamily: "var(--font-body)" }} />
              </div>
            </div>
            <Button size="lg" type="submit" icon={joined ? "check" : null} disabled={loading || joined}>
              {joined ? "Inscrit" : loading ? "…" : "Rejoindre la waitlist"}
            </Button>
          </form>
          <div className="mono" style={{ fontSize: "var(--t-12)", color: "var(--text-3)", marginTop: 14 }}>+2 840 profils déjà créés · sans CV, sans diplôme requis</div>
        </div>
      </section>

      {/* APERÇU PROFIL (showcase) */}
      <section style={{ maxWidth: 1000, margin: "16px auto 0", padding: "0 24px" }}>
        <div onClick={goWaitlist} style={{
          position: "relative", borderRadius: "var(--r-xl)", border: "1px solid var(--border)",
          background: "var(--surface)", overflow: "hidden", cursor: "pointer",
          boxShadow: "var(--shadow-lg)",
        }}>
          {/* fausse barre de navigateur */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57", "#FEBC2E", "#28C840"].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
            </div>
            <div className="mono" style={{ margin: "0 auto", fontSize: "var(--t-12)", color: "var(--text-3)", background: "var(--bg)", padding: "4px 16px", borderRadius: "var(--r-full)", border: "1px solid var(--border)" }}>interly.io/@maya</div>
          </div>
          {/* mini-profil */}
          <div style={{ padding: "30px 32px" }}>
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <Avatar name={PROFILE.name} hue={20} size={68} flag={PROFILE.flag} ring />
              <div>
                <div className="serif" style={{ fontSize: "var(--t-32)", lineHeight: 1 }}>{PROFILE.name}</div>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 6 }}>
                  <span className="mono" style={{ fontSize: "var(--t-14)", color: "var(--accent)" }}>@{PROFILE.handle}</span>
                  <span style={{ fontSize: "var(--t-14)", color: "var(--text-2)" }}>{PROFILE.role}</span>
                </div>
              </div>
            </div>
            <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 24 }}>
              {SKILLS.slice(0, 3).map(s => <SkillBlock key={s.id} skill={s} levelMode="bar" compact />)}
            </div>
            <div style={{ textAlign: "center", marginTop: 22 }}>
              <Button variant="secondary" iconRight="arrow">Voir le profil complet</Button>
            </div>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section style={{ maxWidth: 1000, margin: "80px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { icon: "grid", title: "Skill grid visuelle", text: "Tes compétences en blocs, avec niveau et preuves concrètes.", bg: "var(--accent-soft)", fg: "var(--accent)" },
            { icon: "verified", title: "Validé par les pairs", text: "Pas d'auto-déclaration : ce sont les autres qui valident.", bg: "transparent", fg: "#fff", grad: true },
            { icon: "globe", title: "Pensé international", text: "Langues, flags, parcours multi-pays — au cœur du profil.", bg: "var(--brand-2-soft)", fg: "var(--brand-2)" },
          ].map(f => (
            <div key={f.title} style={{ padding: 4 }}>
              <div style={{ width: 44, height: 44, borderRadius: 13, background: f.grad ? "var(--brand-grad)" : f.bg, color: f.fg, display: "grid", placeItems: "center", marginBottom: 16 }}>
                <Icon name={f.icon} size={22} stroke={1.7} />
              </div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--t-20)", fontWeight: 600, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: "var(--t-16)", color: "var(--text-2)", lineHeight: 1.5, textWrap: "pretty" }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOUTES LES COMPÉTENCES */}
      <section style={{ maxWidth: 1100, margin: "80px auto 0", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="mono" style={{ fontSize: "var(--t-12)", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Compétences</div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--t-32)", fontWeight: 600, letterSpacing: "-0.02em" }}>Quel que soit ton talent, mets-le en avant</h2>
          <p style={{ margin: "10px auto 0", maxWidth: 520, fontSize: "var(--t-16)", color: "var(--text-2)", lineHeight: 1.5 }}>
            Du graphisme au développement, de l'entrepreneuriat au marketing — toutes les compétences ont leur place sur Interly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {SKILL_DOMAINS.map(d => <DomainCard key={d.id} domain={d} />)}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: 760, margin: "90px auto 0", padding: "0 24px 90px", textAlign: "center" }}>
        <div style={{ position: "relative", overflow: "hidden", background: "var(--text)", color: "var(--bg)", borderRadius: "var(--r-xl)", padding: "56px 40px" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 120% at 15% 0%, color-mix(in oklch, var(--accent) 42%, transparent), transparent 60%), radial-gradient(70% 110% at 100% 100%, color-mix(in oklch, var(--brand-2) 36%, transparent), transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 className="serif" style={{ margin: 0, fontSize: "var(--t-48)", fontWeight: 400, lineHeight: 1.05 }}>Ton profil mérite mieux qu'un CV.</h2>
            <p style={{ margin: "16px auto 28px", maxWidth: 420, fontSize: "var(--t-16)", opacity: 0.78, lineHeight: 1.5 }}>Crée le tien en 3 minutes. Gratuit, et beau à partager.</p>
            <Button size="lg" variant="primary" onClick={goWaitlist} style={{ background: "var(--brand-grad)", boxShadow: "0 10px 30px -8px color-mix(in oklch, var(--accent) 60%, transparent)" }}>Créer mon profil</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* — Carte d'un domaine de compétences — */
function DomainCard({ domain }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", overflow: "hidden",
        background: "var(--surface)", border: "1px solid",
        borderColor: hover ? "var(--border-strong)" : "var(--border)",
        borderRadius: "var(--r-lg)", padding: 22,
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "transform .34s var(--ease), box-shadow .34s, border-color .2s",
      }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 3, background: domain.color, opacity: hover ? 1 : 0, transition: "opacity .25s" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <div style={{
          width: 46, height: 46, borderRadius: 13, flex: "none",
          background: `color-mix(in oklch, ${domain.color} 14%, transparent)`,
          color: domain.color, display: "grid", placeItems: "center",
          transition: "transform .3s var(--ease)",
          transform: hover ? "scale(1.06) rotate(-3deg)" : "none",
        }}>
          <Icon name={domain.icon} size={24} stroke={1.7} />
        </div>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--t-20)", fontWeight: 600, letterSpacing: "-0.015em" }}>{domain.name}</h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
        {domain.items.map(it => <Chip key={it} size="sm" color={domain.color}>{it}</Chip>)}
      </div>
    </div>
  );
}
