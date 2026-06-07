export default function Universities() {
  return (
    <section className="l-wrap" id="universities" style={{ marginTop: 16 }}>
      <div className="l-uni">
        <div className="l-uni__txt">
          <span className="l-uni__eyebrow">Pour les universités</span>
          <h3 className="l-uni__h">
            Suis la mobilité de tes étudiant·es, en temps réel.
          </h3>
          <p className="l-uni__p">
            Un tableau de bord pour accompagner ton bureau des relations
            internationales : qui part où, quand, et comment leur intégration
            se passe sur place.
          </p>
        </div>
        <div className="l-uni__cta">
          <a href="mailto:contact@interly.io?subject=D%C3%A9mo%20Interly%20pour%20BRI">
            Parler à un·e responsable
            <svg
              width="16"
              height="16"
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
      </div>
    </section>
  );
}
