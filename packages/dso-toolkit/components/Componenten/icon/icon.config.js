const getIcons = require('../../../utils/get-icons');

const icons = getIcons();

module.exports = {
  label: 'Icon (Web Component) 🚀', // Fake the web component rocket indicator, Stencil's Hydrate function removes <style> elements which contain icon table styling.
  notes: `
  Iconen moeten betekenis geven aan een grafische gebruikersinterface. Iconen zijn een visuele  presentatie van een object, idee of actie. Als dat object, idee of die actie niet direct duidelijk is voor de gebruiker heeft het icoon ook weinig toegevoegde waarde en kan zelfs leiden tot verwarring en frustratie wat de gebruiker hindert bij het uitvoeren van een taak. Het herkennen en begrijpen van een icoon is afhankelijk van een eerdere ervaring van de gebruiker. Iconen kunnen gebruikers helpen taken te herkennen en onthouden. Doordat een standaard gebruik van iconen ontbreekt zijn labels nodig om de betekenis van een icoon te verduidelijken.

  ## Technische Opmerkingen
  * Een namespace attribuut is niet nodig als het icoon in een HTML5 applicatie wordt gebruikt (https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).
  * In het \`use\` element mag direct \`href\` ipv \`xlink:href\` worden gebruikt. In SVG2 is \`xlink:href\` deprecated (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href).
  * In bovenstaand voorbeeld verwijs ik naar \`dso-icons.svg\`:
    * Als de toolkit scss files worden gecompileerd, moet de implementatie zorg dragen dat uiteindelijk \`node_modules/dso-toolkit/dist/library/dso-icons.svg\` wordt gebundled;
    * Als de toolkit via de CDN wordt gebruikt werken SVG iconen direct;
    * Als de toolkit de CSS uit de NPM package gebruikt moeten de bundlers/loaders rekening houden dat de SVG files worden meegenomen in de build;


  ## De voordelen van goed ontworpen iconen
  * **Een icoon is een goed 'mikpunt':** ze zijn groot genoeg om makkelijk aan te tikken in een gebruikersinterface waarbij je je vinger nodig hebt om te navigeren, maar ze werken ook goed met een muis cursor;
  * **Ze besparen ruimte:** omdat ze compact zijn kunnen meerdere iconen in een relatief smalle ruimte;
  * **Snelle herkenning:** een bekend of makkelijk te herkennen icoon zal sneller een betekenis verduidelijken, soms sneller dan een tekstlink;
  * **Vindbaarheid:** als men leert welke actie geassocieerd is met een bepaald icoon zal de aanwezigheid van het icoon voor sommige gebruikers de mogelijkheid bieden om sneller en efficienter te werken bij herhalende taken;
  * **Iconen zijn visueel aantrekkelijk:** ze kunnen meerwaarde toevoegen aan een design en het beeld esthetisch aantrekkelijker maken.


  ## Hoe te gebruiken: formaten en afmetingen
  Iconen verdelen we onder in illustratieve iconen en gebruikersinterface iconen. Iconen worden aangeleverd in SVG formaat zodat het moeiteloos kan schalen op diverse schermbreedtes en altijd haarscherp blijft.

  **Gebruikersinterface iconen**
  * Pixelformaat: 24x24
  * Format: Scalable Vector Graphics (SVG) 1.1 (Second Edition)
  * Kleurgebruik: wordt aangeleverd in zwart, kleur kan bepaald worden via CSS


  ## Aanvragen nieuwe iconen
  Zijn de iconen in de dso-toolkit niet toereikend? Is er een specifieke icoon nodig die essentieel is voor de user-interface? Een icoon kun je op de volgende manier aanvragen. Ga naar de [github repository van de dso-toolkit](https://github.com/dso-toolkit/dso-toolkit/issues). Maak hier een nieuw issue aan en geef de volgende informatie mee:
  * Welke icoon of iconen je nodig hebt
  * Binnen welke tijdsspanne je de iconen nodig hebt
  * Email-adres indien een designer contact wil opnemen


  Er is een icoon beschikbaar die als tijdelijke vervanging kan dienen. Deze heet \`wip-wip\` (work in progress) dit icoon is terug te vinden in de iconenlijst.

  ## Bronvermelding
  * [Nielsen Norman Group](https://www.nngroup.com/)
  * [Dienst digitale overheid](https://www.digitoegankelijk.nl)
`,
  default: icons[0],
  collated: true,
  collator: function (markup, item) {
    return `<li><div>${markup}</div><code>${item.context.icon}</code></li>`;
  },
  variants: icons.map(icon => ({ name: icon, context: { icon } }))
};
