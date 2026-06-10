/* =========================================================================
   INTERLY — Header & Footer
   ========================================================================= */
import { Icon, Logo } from "./Primitives";

const CONTACT = "contact@interly.io";

/* — HEADER ————————————————————————————————————————————————— */
export function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16, padding: "14px 24px",
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--bg) 78%, transparent)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
    }}>
      <Logo size={22} />
      <a href={`mailto:${CONTACT}`}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "9px 16px", borderRadius: "var(--r-sm)",
          border: "1px solid var(--border-strong)", background: "var(--surface)",
          color: "var(--text)", textDecoration: "none",
          fontFamily: "var(--font-display)", fontWeight: 540, fontSize: "var(--t-14)",
          letterSpacing: "-0.005em",
        }}>
        <Icon name="mail" size={16} stroke={1.7} />
        Contact
      </a>
    </header>
  );
}

/* — FOOTER + Mentions légales ——————————————————————————————— */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 56px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <Logo size={20} />
          <a href={`mailto:${CONTACT}`} className="mono" style={{ fontSize: "var(--t-12)", color: "var(--text-2)", textDecoration: "none" }}>{CONTACT}</a>
        </div>

        <details style={{ marginTop: 28, borderTop: "1px solid var(--border)", paddingTop: 18 }}>
          <summary style={{
            cursor: "pointer", listStyle: "none",
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--t-14)",
            color: "var(--text)", userSelect: "none",
          }}>
            Mentions légales
          </summary>
          <div style={{ marginTop: 16, fontSize: "var(--t-14)", color: "var(--text-2)", lineHeight: 1.6, textAlign: "left" }}>
            <LegalBlock title="Éditeur du site">
              Le site <strong>interly.io</strong> est édité par Thomas R., en phase de pré-lancement d'un projet entrepreneurial.<br />
              Contact : <a href={`mailto:${CONTACT}`} style={{ color: "var(--accent)" }}>{CONTACT}</a>
            </LegalBlock>

            <LegalBlock title="Hébergement">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Les noms de domaine sont enregistrés chez Hostinger International Ltd.
            </LegalBlock>

            <LegalBlock title="Données personnelles collectées">
              Dans le cadre de la liste d'attente, nous collectons uniquement votre adresse email. Aucune autre donnée n'est demandée ni récupérée automatiquement à des fins de profilage.
              <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                <li><strong>Finalité :</strong> vous informer du lancement de la beta Interly et des actualités du projet.</li>
                <li><strong>Base légale :</strong> votre consentement explicite, donné en soumettant le formulaire (article 6.1.a du RGPD).</li>
                <li><strong>Durée de conservation :</strong> jusqu'à votre demande de suppression, ou au plus 24 mois après la dernière communication.</li>
                <li><strong>Destinataires :</strong> aucune donnée n'est cédée ni vendue à des tiers. Les emails sont stockés sur Supabase (sous-traitant) dans l'Union européenne.</li>
              </ul>
            </LegalBlock>

            <LegalBlock title="Vos droits">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression, d'opposition et de portabilité concernant vos données.<br />
              Pour exercer ces droits, écrivez à <a href={`mailto:${CONTACT}`} style={{ color: "var(--accent)" }}>{CONTACT}</a>. Nous répondrons dans un délai maximum de 30 jours.<br />
              Vous pouvez également déposer une réclamation auprès de la CNIL.
            </LegalBlock>

            <LegalBlock title="Cookies">
              Le site n'utilise pas de cookies de traçage ou publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement de l'hébergeur peuvent être déposés, sans consentement requis.
            </LegalBlock>

            <LegalBlock title="Propriété intellectuelle">
              L'ensemble du contenu de ce site (textes, visuels, code) est la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </LegalBlock>
          </div>
        </details>

        <div style={{ marginTop: 28, fontSize: "var(--t-12)", color: "var(--text-3)" }}>
          © {year} Interly · Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

function LegalBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h4 style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: "var(--t-16)", fontWeight: 600, color: "var(--text)" }}>{title}</h4>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
