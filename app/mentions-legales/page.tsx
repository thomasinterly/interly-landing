import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Interly",
  description:
    "Mentions légales et informations sur le traitement des données personnelles pour la liste d'attente Interly.",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <main className="l-wrap l-legal">
        <h1 className="l-legal__h1">Mentions légales</h1>
        <p className="l-legal__meta">Dernière mise à jour : juin 2026</p>

        <section className="l-legal__sec">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>interly.io</strong> est édité par Thomas R., en
            phase de pré-lancement d&apos;un projet entrepreneurial.
          </p>
          <p>Contact : <a href="mailto:contact@interly.io">contact@interly.io</a></p>
        </section>

        <section className="l-legal__sec">
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca
            Ave #4133, Covina, CA 91723, États-Unis. Les noms de domaine sont
            enregistrés chez <strong>Hostinger International Ltd.</strong>
          </p>
        </section>

        <section className="l-legal__sec">
          <h2>Données personnelles collectées</h2>
          <p>
            Dans le cadre de la liste d&apos;attente, nous collectons
            uniquement votre <strong>adresse email</strong>. Aucune autre
            donnée n&apos;est demandée ni récupérée automatiquement à des fins
            de profilage.
          </p>
          <ul>
            <li>
              <strong>Finalité :</strong> vous informer du lancement de la
              beta Interly et des actualités du projet.
            </li>
            <li>
              <strong>Base légale :</strong> votre consentement explicite, donné
              en soumettant le formulaire (article 6.1.a du RGPD).
            </li>
            <li>
              <strong>Durée de conservation :</strong> jusqu&apos;à votre
              demande de suppression, ou au plus 24 mois après la dernière
              communication.
            </li>
            <li>
              <strong>Destinataires :</strong> aucune donnée n&apos;est cédée
              ni vendue à des tiers. Les emails sont stockés sur Supabase
              (sous-traitant) dans l&apos;Union européenne.
            </li>
          </ul>
        </section>

        <section className="l-legal__sec">
          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous
            disposez d&apos;un droit d&apos;accès, de rectification, de
            suppression, d&apos;opposition et de portabilité concernant vos
            données.
          </p>
          <p>
            Pour exercer ces droits, écrivez à{" "}
            <a href="mailto:contact@interly.io?subject=Exercice%20de%20mes%20droits%20RGPD">
              contact@interly.io
            </a>
            . Nous répondrons dans un délai maximum de 30 jours.
          </p>
          <p>
            Vous pouvez également déposer une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL
            </a>
            .
          </p>
        </section>

        <section className="l-legal__sec">
          <h2>Cookies</h2>
          <p>
            Le site n&apos;utilise pas de cookies de traçage ou publicitaires.
            Seuls des cookies techniques strictement nécessaires au
            fonctionnement de l&apos;hébergeur peuvent être déposés, sans
            consentement requis.
          </p>
        </section>

        <section className="l-legal__sec">
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, visuels, code) est
            la propriété exclusive de l&apos;éditeur, sauf mention contraire.
            Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <p className="l-legal__back">
          <a href="/">← Retour à l&apos;accueil</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
