export default function Nav() {
  return (
    <nav className="l-nav">
      <div className="l-wrap l-nav__row">
        <a href="#" className="l-logo" aria-label="Interly — accueil">
          Interly
        </a>
        <div className="l-nav__links">
          <a href="#how">Comment ça marche</a>
          <a href="#cities">Notre vision</a>
          <a href="#universities">Universités</a>
        </div>
        <a href="#hero" className="l-nav__cta">
          Rejoindre la beta
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
