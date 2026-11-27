// Hannover Sprachakademie – Einstellungen
// apiUrl: Adresse der Google-Apps-Script-Web-App (siehe ANLEITUNG.md). Leer = Ergebnisse werden nur angezeigt, nicht gesendet.
window.HA_CONFIG = {
  akademie: 'Hannover Sprachakademie',
  apiUrl: 'https://script.google.com/macros/s/AKfycbxHLXh0ZC-odt3pExGLlj1qxJBTYPAlWupx0b5GbgJsHgsiD5hbH2jaLdyCrnB8shrH/exec',
  // Einstufungstest: WhatsApp-Nummer für die Anmeldung (international, ohne + und ohne 00) und optional ein Anmeldeformular
  whatsapp: '201118833314',
  anmeldeUrl: '',
  kurse: [
    {
      id: 'a1',
      name: 'Netzwerk neu A1',
      final: { titel: 'Finaltest A1', text: 'Abschlusstest für das ganze Niveau A1: Wortschatz, Grammatik, Lesen und Schreiben', fertig: true },
      kapitel: [
        { nr: 1, titel: 'Guten Tag!', fertig: true },
        { nr: 2, titel: 'Freunde, Kollegen und ich', fertig: true },
        { nr: 3, titel: 'In Hamburg', fertig: true },
        { nr: 4, titel: 'Guten Appetit!', fertig: true },
        { nr: 5, titel: 'Alltag und Familie', fertig: true },
        { nr: 6, titel: 'Zeit mit Freunden', fertig: true },
        { nr: 7, titel: 'Arbeitsalltag', fertig: true },
        { nr: 8, titel: 'Fit und gesund', fertig: true },
        { nr: 9, titel: 'Meine Wohnung', fertig: true },
        { nr: 10, titel: 'Studium und Beruf', fertig: true },
        { nr: 11, titel: 'Die Jacke gefällt mir!', fertig: true },
        { nr: 12, titel: 'Ab in den Urlaub!', fertig: true }
      ]
    },
    {
      id: 'a2',
      name: 'Netzwerk neu A2',
      final: { titel: 'Finaltest A2', text: 'Abschlusstest für das ganze Niveau A2: Wortschatz, Redemittel, Grammatik, Lesen und Schreiben', fertig: true },
      kapitel: [
        { nr: 1, titel: 'Und was machst du?', fertig: true },
        { nr: 2, titel: 'Nach der Schulzeit', fertig: true },
        { nr: 3, titel: 'Immer online?', fertig: true },
        { nr: 4, titel: 'Große und kleine Gefühle', fertig: true },
        { nr: 5, titel: 'Leben in der Stadt', fertig: true },
        { nr: 6, titel: 'Arbeitswelten', fertig: true },
        { nr: 7, titel: 'Ganz schön mobil', fertig: true },
        { nr: 8, titel: 'Gelernt ist gelernt!', fertig: true },
        { nr: 9, titel: 'Sportlich, sportlich', fertig: true },
        { nr: 10, titel: 'Zusammen leben', fertig: true },
        { nr: 11, titel: 'Wie die Zeit vergeht!', fertig: true },
        { nr: 12, titel: 'Gute Unterhaltung!', fertig: true }
      ]
    },
    {
      id: 'b1',
      name: 'Netzwerk neu B1',
      final: { titel: 'Finaltest B1', text: 'Modellprüfung für das ganze Niveau B1 wie Goethe und telc: Lesen, Sprachbausteine, Grammatik, Wortschatz und Schreiben', fertig: true },
      kapitel: [
        { nr: 1, titel: 'Gute Reise!', fertig: true },
        { nr: 2, titel: 'Das ist ja praktisch!', fertig: true },
        { nr: 3, titel: 'Veränderungen', fertig: true },
        { nr: 4, titel: 'Arbeitswelt', fertig: true },
        { nr: 5, titel: 'Umweltfreundlich?', fertig: true },
        { nr: 6, titel: 'Blick nach vorn', fertig: true },
        { nr: 7, titel: 'Zwischenmenschliches', fertig: true },
        { nr: 8, titel: 'Rund um Körper und Geist', fertig: true },
        { nr: 9, titel: 'Kunststücke', fertig: true },
        { nr: 10, titel: 'Miteinander', fertig: true },
        { nr: 11, titel: 'Stadt, Land, Fluss', fertig: true },
        { nr: 12, titel: 'Geld regiert die Welt?', fertig: true }
      ]
    },
    {
      id: 'b2',
      name: 'Aspekte neu B2',
      kapitel: [
        { nr: 1, titel: 'Heimat ist …', fertig: true },
        { nr: 2, titel: 'Sprich mit mir!', fertig: true },
        { nr: 3, titel: 'Arbeit ist das halbe Leben?', fertig: true },
        { nr: 4, titel: 'Zusammen leben', fertig: true },
        { nr: 5, titel: 'Wer Wissen schafft, macht Wissenschaft', fertig: true },
        { nr: 6, titel: 'Fit für …', fertig: true },
        { nr: 7, titel: 'Kulturwelten', fertig: true },
        { nr: 8, titel: 'Das macht(e) Geschichte', fertig: true },
        { nr: 9, titel: 'Mit viel Gefühl …', fertig: true },
        { nr: 10, titel: 'Ein Blick in die Zukunft', fertig: true }
      ]
    },
    {
      id: 'c1',
      name: 'Aspekte neu C1',
      kapitel: [
        { nr: 1, titel: 'Alltägliches', fertig: true },
        { nr: 2, titel: 'Hast du Worte?', fertig: true },
        { nr: 3, titel: 'An die Arbeit!', fertig: true },
        { nr: 4, titel: 'Wirtschaftsgipfel', fertig: true },
        { nr: 5, titel: 'Ziele', fertig: true },
        { nr: 6, titel: 'Gesund und munter', fertig: true },
        { nr: 7, titel: 'Recht so!', fertig: true },
        { nr: 8, titel: 'Du bist, was du bist', fertig: true },
        { nr: 9, titel: 'Die schöne Welt der Künste', fertig: true },
        { nr: 10, titel: 'Erinnerungen', fertig: true }
      ]
    }
  ]
};
