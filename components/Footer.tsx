export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-wrap">
        <div className="l-foot-grid">
          <div className="l-foot-brand l-foot-col">
            <a href="#" className="l-logo l-logo--footer">Interly</a>
            <p>
              La communauté des étudiant·es en mobilité internationale. Pour
              que personne n&apos;arrive seul·e.
            </p>
            {/* Réseaux sociaux : visibles mais désactivés (comptes pas encore créés) */}
            <div className="l-foot-social" aria-label="Réseaux sociaux (bientôt)">
              <span className="l-disabled" aria-label="Instagram (bientôt)" title="Bientôt">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <span className="l-disabled" aria-label="TikTok (bientôt)" title="Bientôt">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 3v3.2a4.8 4.8 0 0 0 4.8 4.8V14a8 8 0 0 1-4.8-1.6V17a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z" />
                </svg>
              </span>
              <span className="l-disabled" aria-label="LinkedIn (bientôt)" title="Bientôt">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.4 2.2-2.4 4-2.4 3 0 4 2 4 5V20h-4v-4.5c0-1.4-.5-2.5-2-2.5s-2 1.1-2 2.5V20h-4z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="l-foot-col">
            <h4>Produit</h4>
            <ul>
              <li><a href="#how">Comment ça marche</a></li>
              <li><a href="#cities">Notre vision</a></li>
              <li><span className="l-disabled">L&apos;app <small>Bientôt</small></span></li>
            </ul>
          </div>

          <div className="l-foot-col">
            <h4>Communauté</h4>
            <ul>
              <li><span className="l-disabled">Blog</span></li>
              <li><span className="l-disabled">Témoignages</span></li>
              <li><span className="l-disabled">Guide mobilité</span></li>
              <li><span className="l-disabled">Devenir ambassadeur</span></li>
            </ul>
          </div>

          <div className="l-foot-col">
            <h4>Universités</h4>
            <ul>
              <li><a href="#universities">Pour les BRI</a></li>
              <li><a href="mailto:contact@interly.io?subject=Partenariat%20universit%C3%A9">Partenaires</a></li>
              <li><a href="mailto:contact@interly.io?subject=Demande%20de%20d%C3%A9mo">Demander une démo</a></li>
            </ul>
          </div>

          <div className="l-foot-col">
            <h4>Société</h4>
            <ul>
              <li><a href="mailto:contact@interly.io">Contact</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
            </ul>
          </div>
        </div>

        <div className="l-foot-bottom">
          <p>© {new Date().getFullYear()} Interly · Fait avec ♥ pour les étudiant·es en mobilité.</p>
          <div className="l-foot-bottom__right">
            <a href="/mentions-legales">Mentions légales</a>
            <span>🇫🇷 Français</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
