import React from "react";
import styled , { keyframes }from "styled-components";

const Impressum = () => {
  return (
    <Container>
      <div className="first-div">
        <div className="title-data">
          <h1>Impressum</h1>
        </div>

        <div className="second-part">
          <div className="h2-titles">
            <h2>Kontaktadresse</h2>
            <h3>PRI Facility Services GmbH</h3>
            <h3>Werkstrasse 12</h3>
            <h3>5080 Laufenburg</h3>
            <h3>Schweiz</h3>
            <h3>info@pri-fs.ch</h3>
            <h3>+41628741000</h3>

            <div className="h2-title">
              <h2>Vertretungsberechtigte Personen</h2>
              <h3>Behar Jetullahu, Gesellschafter/Geschäftsführer</h3>
            </div>

            <div className="h2-title">
              <h2>Handelsregistereintrag</h2>
              <h3>Eingetragener Firmenname: PRI Facility Services GmbH</h3>
              <h3>Nummer: CHE-353.458.853</h3>
            </div>

            <div className="h2-title">
              <h2>Haftungsausschluss</h2>
              <h4>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der
                inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit der Informationen.
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder
                immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch
                Missbrauch der Verbindung oder durch technische Störungen
                entstanden sind, werden ausgeschlossen. Alle Angebote sind
                unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile
                der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung
                zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung
                zeitweise oder endgültig einzustellen.
              </h4>
            </div>

            <div className="h2-title">
              <h2>Haftung für Links</h2>
              <h4>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb
                unseres Verantwortungsbereichs Es wird jegliche Verantwortung
                für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
                solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder
                der Nutzerin.
              </h4>
            </div>

            <div className="h2-title">
              <h2>Urheberrechte</h2>
              <h4>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf der Website gehören ausschliesslich der
                Firma PRI Facility Services GmbH oder den speziell genannten
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
                schriftliche Zustimmung der Urheberrechtsträger im Voraus
                einzuholen.
              </h4>
            </div>

            


          </div>
        </div>
      </div>
    </Container>
  );
};

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    left: -100px;
  }

  to {
    opacity: 1;
    left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 4%;
  margin-top: 50px;
  .first-div {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 25px;
    width: 75%;
  }
  .title-data {
    align-items: center;
    text-align: center;
    font-weight: 600;
    background: var(--gradientBackground2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative; 
    animation: ${slideInFromLeft} 1.5s ease-out forwards;
  }
  .second-part {
    display: flex;
    justify-content: space-between;
  }
  .h2-titles {
    text-align: center;
    margin-top: 70px;
    margin-bottom: 70px;
    position: relative;
    animation: ${slideInFromLeft} 1.1s ease-out forwards;
    
  }
  .h2-title {
    margin-top: 50px;
    position: relative;
    animation: ${slideInFromLeft} 1.5s ease-out forwards;
  }
`;

export default Impressum;
