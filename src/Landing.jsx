/* =========================================================================
   INTERLY — Landing page
   ========================================================================= */
import { useState } from "react";
import { PROFILE, SKILLS, DISCOVER } from "./data";
import { Avatar, Button, Icon, Logo } from "./components/Primitives";
import { SkillBlock, DiscoverCard } from "./components/Cards";

export default function Landing({ onNav, onToast }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setJoined(true);
    onToast && onToast("Tu es sur la liste ✦");
  };

  const goProfile = () => onNav && onNav("profile");
  const goDiscover = () => onNav && onNav("discover");

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "82px 24px 40px", textAlign: "center" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "-40px -10% auto", height: 460, background: "var(--brand-glow)", opacity: 0.85, pointerEvents: "none", zIndex: 0 }} />
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
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="ton@email.com" type="email"
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "var(--t-16)", color: "var(--text)", fontFamily: "var(--font-body)" }} />
              </div>
            </div>
            <Button size="lg" type="submit" icon={joined ? "check" : null}>{joined ? "Inscrit" : "Rejoindre la waitlist"}</Button>
          </form>
          <div className="mono" style={{ fontSize: "var(--t-12)", color: "var(--text-3)", marginTop: 14 }}>+2 840 profils déjà créés · sans CV, sans diplôme requis</div>
        </div>
      </section>

      {/* APERÇU PROFIL (showcase) */}
      <section style={{ maxWidth: 1000, margin: "16px auto 0", padding: "0 24px" }}>
        <div onClick={goProfile} style={{
          position: "relative", borderRadius: "var(--r-xl)", border: "1px solid var(--border)",
          background: "var(--surface)", overflow: "hidden", cursor: "pointer",
          boxShadow: "var(--shadow-lg)",
        }}>
          {/* fausse barre de navigateur */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57", "#FEBC2E", "#28C840"].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
            </div>
            <div className="mono" style={{ margin: "0 auto", fontSize: "var(--t-12)", color: "var(--text-3)", background: "var(--bg)", padding: "4px 16px", borderRadius: "var(--r-full)", border: "1px solid var(--border)" }}>interly.com/@maya</div>
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

      {/* SHOWCASE PROFILS */}
      <section style={{ maxWidth: 1100, margin: "80px auto 0", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--t-32)", fontWeight: 600, letterSpacing: "-0.02em" }}>Des profils qui donnent envie</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {DISCOVER.slice(0, 3).map(p => <DiscoverCard key={p.handle} p={p} onOpen={goDiscover} />)}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: 760, margin: "90px auto 0", padding: "0 24px 90px", textAlign: "center" }}>
        <div style={{ position: "relative", overflow: "hidden", background: "var(--text)", color: "var(--bg)", borderRadius: "var(--r-xl)", padding: "56px 40px" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 120% at 15% 0%, color-mix(in oklch, var(--accent) 42%, transparent), transparent 60%), radial-gradient(70% 110% at 100% 100%, color-mix(in oklch, var(--brand-2) 36%, transparent), transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 className="serif" style={{ margin: 0, fontSize: "var(--t-48)", fontWeight: 400, lineHeight: 1.05 }}>Ton profil mérite mieux qu'un CV.</h2>
            <p style={{ margin: "16px auto 28px", maxWidth: 420, fontSize: "var(--t-16)", opacity: 0.78, lineHeight: 1.5 }}>Crée le tien en 3 minutes. Gratuit, et beau à partager.</p>
            <Button size="lg" variant="primary" onClick={goProfile} style={{ background: "var(--brand-grad)", boxShadow: "0 10px 30px -8px color-mix(in oklch, var(--accent) 60%, transparent)" }}>Créer mon profil</Button>
          </div>
        </div>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}><Logo size={20} /></div>
      </section>
    </div>
  );
}
