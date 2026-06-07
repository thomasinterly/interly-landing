import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="l-hero" id="hero">
      <div className="l-wrap l-hero__grid">
        <div className="l-hero__txt">
          <span className="l-eyebrow">
            <span className="l-eyebrow__dot" />
            Beta — Rentrée 2026 · places limitées
          </span>
          <h1 className="l-h1">
            Trouve ta communauté <em>avant même</em> d&apos;arriver.
          </h1>
          <p className="l-sub">
            Partir en mobilité, c&apos;est excitant — et un peu vertigineux.
            Interly te connecte aux étudiant·es qui vivent la même aventure que
            toi, dans la même ville, aux mêmes dates. Pour que personne
            n&apos;arrive seul·e.
          </p>

          <WaitlistForm source="hero" />

          <p className="l-hero__tagline">
            Inscris-toi à la liste d&apos;attente — on lance la beta à la
            rentrée 2026.
          </p>
        </div>

        {/* Visual : mockup iPhone */}
        <div className="l-visual" aria-hidden="true">
          <div className="l-visual__halo" />
          <div className="l-orbit" />
          <div className="l-orbit l-orbit--inner" />

          <div className="l-phone">
            <div className="l-phone__notch" />
            <div className="l-phone__screen">
              <Image
                src="/hero-mockup.jpg"
                alt="Aperçu de l'application Interly"
                width={600}
                height={1300}
                priority
                className="l-phone__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
