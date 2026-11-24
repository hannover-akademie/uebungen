// Netzwerk neu B1 – Kapitel 9: Kunststücke
// Grammatik: Stellung von nicht, Adjektive ohne Artikel · Redemittel: nachfragen, verstärken/relativieren, über Kunst sprechen
// Prüfungstraining: telc B1 Lesen Teil 3 (Anzeigen zuordnen) · telc B1 Schreiben (halbformelle E-Mail)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 9, titel: 'Kunststücke',
  titelAr: 'الفن والثقافة والإبداع – موضع nicht في الجملة، ونهايات الصفة بدون أداة تعريف',
  teile: [
    { titel: 'Wortschatz: Kunst und Kultur', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Ausstellung', 'Gemälde', 'Bühne', 'Publikum', 'Vorstellung', 'Künstlerin'], items: [
      { q: 'Im Museum gibt es eine neue ___ mit modernen Fotos.', a: 'Ausstellung' },
      { q: 'Die Mona Lisa ist das bekannteste ___ der Welt.', a: 'Gemälde' },
      { q: 'Die Schauspieler stehen auf der ___.', a: 'Bühne' },
      { q: 'Das ___ hat nach dem Konzert lange geklatscht.', a: 'Publikum' },
      { q: 'Die ___ im Theater beginnt um 20 Uhr.', a: 'Vorstellung' },
      { q: 'Die ___ malt seit 20 Jahren Bilder von der Natur.', a: 'Künstlerin' }
    ] },
    { titel: 'Wortschatz: Kunstformen', anweisung: 'Ordnen Sie zu.', anweisungAr: 'صِل كل شخص بالفن الذي يمارسه.', typ: 'match', items: [
      { q: '', pairs: [
        ['der Bildhauer', 'macht Skulpturen aus Stein oder Holz.'],
        ['die Fotografin', 'macht Bilder mit der Kamera.'],
        ['der Dirigent', 'leitet ein Orchester.'],
        ['die Schriftstellerin', 'schreibt Romane und Gedichte.'],
        ['der Straßenkünstler', 'zeigt seine Kunst in der Fußgängerzone.'],
        ['die Tänzerin', 'tritt im Ballett auf.']
      ] }
    ] },
    { titel: 'Grammatik: Stellung von nicht', anweisung: 'Wo steht nicht richtig? Wählen Sie den richtigen Satz.', anweisungAr: 'nicht تنفي الجملة كلها وتأتي في آخرها أو قبل الجزء الثاني من الفعل وقبل الظرف/حرف الجر؛ أو تنفي كلمة واحدة وتأتي قبلها مباشرة.', typ: 'mcq', items: [
      { q: 'Satznegation:', o: ['Ich gehe heute nicht ins Museum.', 'Ich gehe nicht heute ins Museum.', 'Ich nicht gehe heute ins Museum.'], a: 'Ich gehe heute nicht ins Museum.' },
      { q: 'Satznegation:', o: ['Er hat das Bild nicht gemalt.', 'Er hat nicht das Bild gemalt.', 'Er hat das Bild gemalt nicht.'], a: 'Er hat das Bild nicht gemalt.' },
      { q: 'Satznegation:', o: ['Die Ausstellung gefällt mir nicht.', 'Die Ausstellung nicht gefällt mir.', 'Die Ausstellung gefällt nicht mir.'], a: 'Die Ausstellung gefällt mir nicht.' },
      { q: 'Satznegation:', o: ['Das Konzert war nicht interessant.', 'Das Konzert nicht war interessant.', 'Das Konzert war interessant nicht.'], a: 'Das Konzert war nicht interessant.' },
      { q: 'Nur ein Wort wird negiert (nicht heute, sondern morgen):', o: ['Ich gehe nicht heute, sondern morgen ins Theater.', 'Ich gehe heute nicht, sondern morgen ins Theater.', 'Ich gehe heute ins Theater nicht, sondern morgen.'], a: 'Ich gehe nicht heute, sondern morgen ins Theater.' }
    ] },
    { titel: 'Grammatik: Negation im Satz', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة مع nicht في المكان الصحيح.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['ich', 'kann', 'dir', 'das Buch', 'leider', 'nicht', 'leihen'], a: ['ich kann dir das buch leider nicht leihen', 'leider kann ich dir das buch nicht leihen', 'ich kann dir leider das buch nicht leihen'] },
      { q: 'Satz (.)', w: ['wir', 'interessieren', 'uns', 'nicht', 'für', 'moderne Kunst'], a: ['wir interessieren uns nicht für moderne kunst'] }
    ] },
    { titel: 'Grammatik: Adjektive ohne Artikel', anweisung: 'Ergänzen Sie die richtige Endung.', anweisungAr: 'الصفة بدون أداة تأخذ نهاية أداة التعريف: guter Wein (der), frische Milch (die), kaltes Wasser (das)، وفي الجمع: alte Bilder، وفي Dativ الجمع: mit alten Bildern.', typ: 'select', items: [
      { q: 'Wir trinken nur frisch___ Kaffee. (der Kaffee, Akk.)', o: ['en', 'er', 'es'], a: 'en' },
      { q: 'Das Museum zeigt alt___ Gemälde. (Plural, Akk.)', o: ['e', 'en', 'er'], a: 'e' },
      { q: 'Im Café gibt es lecker___ Kuchen. (der Kuchen, Akk.)', o: ['en', 'er', 'e'], a: 'en' },
      { q: 'Sie malt mit bunt___ Farben. (Plural, Dat.)', o: ['en', 'e', 'er'], a: 'en' },
      { q: 'Modern___ Kunst ist nicht immer leicht zu verstehen. (die Kunst, Nom.)', o: ['e', 'er', 'es'], a: 'e' },
      { q: 'Bei schön___ Wetter findet das Konzert im Park statt. (das Wetter, Dat.)', o: ['em', 'en', 'es'], a: 'em' }
    ] },
    { titel: 'Grammatik: Anzeigen schreiben', anweisung: 'Schreiben Sie die Endung.', anweisungAr: 'اكتب نهاية الصفة.', typ: 'gap', items: [
      { q: 'Verkaufe groß___ Bild mit Holzrahmen. (das Bild, Akk.)', a: ['es'] },
      { q: 'Suche nett___ Musiker für unsere Band. (Plural, Akk.)', a: ['e'] },
      { q: 'Biete günstig___ Gitarrenunterricht. (der Unterricht, Akk.)', a: ['en'] },
      { q: 'Junge Malerin mit eigen___ Atelier gibt Malkurse. (das Atelier, Dat.)', a: ['em'] }
    ] },
    { titel: 'Redemittel: Nachfragen, verstärken, relativieren', anweisung: 'Was macht die Person?', anweisungAr: 'هل يستفسر الشخص، أم يقوّي كلامه، أم يخفّفه؟', typ: 'select', o: ['nachfragen', 'verstärken', 'relativieren'], items: [
      { q: '„Wie meinst du das genau?“', a: 'nachfragen' },
      { q: '„Das Bild ist absolut fantastisch!“', a: 'verstärken' },
      { q: '„Die Ausstellung war eigentlich ganz gut.“', a: 'relativieren' },
      { q: '„Habe ich das richtig verstanden, dass …?“', a: 'nachfragen' },
      { q: '„Der Film hat mir wirklich sehr gut gefallen.“', a: 'verstärken' },
      { q: '„Das Konzert war ziemlich langweilig, aber die Sängerin war gut.“', a: 'relativieren' }
    ] },
    { titel: 'Redemittel: Über Kunst sprechen', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل عبارات الحديث عن عمل فني.', typ: 'select', o: ['Auf dem Bild sieht man', 'erinnert mich an', 'Im Vordergrund', 'wirkt', 'Mir gefällt besonders'], items: [
      { q: '___ eine Frau mit einem roten Hut.', a: 'Auf dem Bild sieht man' },
      { q: '___ steht ein großer Baum.', a: 'Im Vordergrund' },
      { q: 'Das Bild ___ auf mich sehr fröhlich.', a: 'wirkt' },
      { q: 'Die Landschaft ___ meine Kindheit.', a: 'erinnert mich an' },
      { q: '___, dass die Farben so hell sind.', a: 'Mir gefällt besonders' }
    ] },
    { titel: 'Prüfungstraining – telc B1 Lesen Teil 3', anweisung: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige (X).', anweisungAr: 'تدريب على امتحان telc B1 (القراءة، الجزء 3): اختر الإعلان المناسب لكل موقف. هناك موقف واحد ليس له إعلان مناسب (X).', typ: 'select', o: ['A', 'B', 'C', 'D', 'E', 'X'],
      text: 'A  Malkurs für Anfänger: Jeden Dienstag, 18–20 Uhr, Volkshochschule. Material wird gestellt.\nB  Kindertheater „Die kleine Hexe“: Samstag und Sonntag um 15 Uhr. Für Kinder ab 4 Jahren, Eintritt 5 €.\nC  Kunstmuseum: Jeden ersten Sonntag im Monat freier Eintritt. Führungen auf Deutsch und Englisch.\nD  Suche gebrauchte Gitarre, gern auch mit Tasche. Zahle bar. Tel. 0176 / 43 21 98\nE  Chor „Stimmen der Welt“ sucht neue Sängerinnen und Sänger. Keine Notenkenntnisse nötig! Probe donnerstags.',
      items: [
        { q: 'Sie möchten am Wochenende etwas mit Ihrer fünfjährigen Tochter unternehmen.', a: 'B' },
        { q: 'Sie möchten gern in einer Gruppe singen, können aber keine Noten lesen.', a: 'E' },
        { q: 'Sie wollen ein Museum besuchen, haben aber wenig Geld.', a: 'C' },
        { q: 'Sie möchten Ihre alte Gitarre verkaufen.', a: 'D' },
        { q: 'Sie möchten Klavier spielen lernen.', a: 'X' },
        { q: 'Sie möchten nach der Arbeit malen lernen.', a: 'A' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Schreiben', anweisung: 'Sie haben eine Anzeige gelesen: Die Volkshochschule bietet einen Fotografiekurs an. Schreiben Sie eine E-Mail an Frau Sommer von der Volkshochschule (ca. 80 Wörter). Schreiben Sie: warum Sie sich für den Kurs interessieren, welche Erfahrung Sie haben, nach den Kosten und Kurszeiten, ob Sie eine eigene Kamera brauchen.', anweisungAr: 'تدريب على امتحان telc B1 (الكتابة): رسالة شبه رسمية (نحو 80 كلمة) عن دورة تصوير، تتناول النقاط الأربع كلها. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Frau …, / Liebe Frau …,\nich habe Ihre Anzeige gelesen und interessiere mich für …\nIch fotografiere schon seit … / Ich habe noch nicht viel Erfahrung, aber …\nKönnten Sie mir bitte mitteilen, …? / Ich würde gern wissen, ob …\nMit freundlichen Grüßen',
      items: [
        { q: 'Sehr geehrte Frau Sommer, …', min: 70, muster: 'Sehr geehrte Frau Sommer,\nich habe Ihre Anzeige gelesen und interessiere mich sehr für den Fotografiekurs. Ich fotografiere gern Landschaften und alte Gebäude, weil ich schöne Erinnerungen an meine Reisen haben möchte. Allerdings habe ich noch nicht viel Erfahrung, denn bis jetzt fotografiere ich nur mit dem Handy. Könnten Sie mir bitte mitteilen, wie viel der Kurs kostet und wann er stattfindet? Ich arbeite bis 17 Uhr. Außerdem würde ich gern wissen, ob ich eine eigene Kamera brauche.\nMit freundlichen Grüßen\nKarim Mansour' }
    ] }
  ]
};
