export default function HowItWorks() {
  return (
    <section className="l-section" id="how">
      <div className="l-wrap">
        <div className="l-sec-head">
          <span className="l-sec-eyebrow">En 3 étapes</span>
          <h2 className="l-h2">Tu n&apos;arriveras plus jamais seul·e.</h2>
          <p className="l-sec-sub">
            Pas d&apos;algorithme opaque, pas de swipe. Une approche simple,
            humaine et taillée pour ta mobilité.
          </p>
        </div>

        <div className="l-steps">
          {/* Step 1 */}
          <div className="l-step l-step--1">
            <div className="l-step__num" />
            <div className="l-step__icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="l-step__h">Déclare ta mobilité</h3>
            <p className="l-step__p">
              Ta ville, tes dates, ce que tu cherches — coloc, ami·es, tandem,
              voyages. 60 secondes, pas plus.
            </p>
            <div className="l-step__art">
              <div className="l-art-pin">
                <div className="l-art-pin__dot">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>
                  Barcelone, Espagne<small>8 sept → 20 janv</small>
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="l-step l-step--2">
            <div className="l-step__num" />
            <div className="l-step__icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20a6 6 0 0 1 12 0" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M14.5 20a4.5 4.5 0 0 1 7-3.75" />
              </svg>
            </div>
            <h3 className="l-step__h">Découvre ta communauté</h3>
            <p className="l-step__p">
              Un feed humain : photo, fac, intentions. Pas d&apos;inconnu·es
              sans contexte — seulement des profils vérifiés par leur école.
            </p>
            <div className="l-step__art">
              <div className="l-art-faces">
                <div
                  style={{ background: "linear-gradient(135deg,#FF8A6B,#FF5C8A)" }}
                />
                <div
                  style={{ background: "linear-gradient(135deg,#2F6BF6,#5C8DFF)" }}
                />
                <div
                  style={{ background: "linear-gradient(135deg,#18C08A,#67D5B5)" }}
                />
                <div
                  style={{ background: "linear-gradient(135deg,#F6B73C,#FFC773)" }}
                />
                <span>+ 127</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="l-step l-step--3">
            <div className="l-step__num" />
            <div className="l-step__icon">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12a8 8 0 1 1-3.6-6.7L21 4v5h-5" />
              </svg>
            </div>
            <h3 className="l-step__h">Crée tes premiers liens</h3>
            <p className="l-step__p">
              Discute, organise un café, rejoins le groupe ville. Tu seras déjà
              entouré·e le jour où tu poses ta valise.
            </p>
            <div className="l-step__art">
              <div className="l-art-chat">
                <div className="l-art-bubble l-art-bubble--in">
                  Salut ! Tu pars aussi à Barcelone ?
                </div>
                <div className="l-art-bubble l-art-bubble--out">
                  Oui ! On se voit pour un café ?
                </div>
                <div className="l-art-bubble l-art-bubble--in">
                  Avec plaisir 🙌
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
