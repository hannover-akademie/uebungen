// Netzwerk neu A2 – Kapitel 6: Arbeitswelten
// Grammatik: Adjektive nach dem unbestimmten Artikel (auch kein-/mein-), werden (Präsens, Präteritum, Perfekt) · Redemittel: am Fahrkartenschalter, telefonieren
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 6, titel: 'Arbeitswelten',
  titelAr: 'عالم العمل والقطار والهاتف – الصفة بعد أداة النكرة، والفعل werden',
  teile: [
    { titel: 'Wortschatz: Am Bahnhof', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة في محطة القطار.', typ: 'select', o: ['Schalter', 'Durchsage', 'Hinfahrt', 'Ermäßigung', 'Gang', 'Zugverbindung'], items: [
      { q: 'Fahrkarten kauft man am Automaten oder am ___.', a: 'Schalter' },
      { q: 'Hören Sie! Eine ___: Der Zug hat 20 Minuten Verspätung.', a: 'Durchsage' },
      { q: 'Die ___ ist am Montag, die Rückfahrt am Freitag.', a: 'Hinfahrt' },
      { q: 'Studenten bekommen eine ___. Die Fahrkarte ist billiger.', a: 'Ermäßigung' },
      { q: 'Möchten Sie am Fenster oder am ___ sitzen?', a: 'Gang' },
      { q: 'Gibt es eine direkte ___ nach München?', a: 'Zugverbindung' }
    ] },
    { titel: 'Wortschatz: Arbeit und Beruf', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Sie hat keinen Chef mehr. Sie hat sich …', o: ['selbstständig gemacht.', 'beeilt.', 'gestört.'], a: 'selbstständig gemacht.' },
      { q: 'Er war Bankkaufmann, jetzt ist er Koch. Er hat …', o: ['den Beruf gewechselt.', 'die Durchsage gehört.', 'einen Termin eingehalten.'], a: 'den Beruf gewechselt.' },
      { q: 'Am Ende des Monats bekommt man sein …', o: ['Gehalt.', 'Risiko.', 'Telefonat.'], a: 'Gehalt.' },
      { q: 'Die Arbeit mit Computern und Robotern nennt man …', o: ['Digitalisierung.', 'Ermäßigung.', 'Freiheit.'], a: 'Digitalisierung.' },
      { q: 'Er fährt große Lastwagen. Er ist …', o: ['Lkw-Fahrer.', 'Chirurg.', 'Übersetzer.'], a: 'Lkw-Fahrer.' }
    ] },
    { titel: 'Wortschatz: Am Telefon', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل بين جزأي كل جملة هاتفية.', typ: 'match', items: [
      { q: '', pairs: [
        ['Frau Klein ist gerade', 'nicht am Platz.'],
        ['Möchten Sie eine Nachricht', 'hinterlassen?'],
        ['Kann Herr Weber', 'Sie zurückrufen?'],
        ['Können Sie mir bitte', 'die Durchwahl geben?'],
        ['Können Sie mich bitte', 'mit Herrn Bauer verbinden?']
      ] }
    ] },
    { titel: 'Grammatik: Adjektive nach dem unbestimmten Artikel', anweisung: 'Ergänzen Sie die Endung.', anweisungAr: 'بعد ein/kein/mein تأخذ الصفة: -er (مذكر Nominativ)، -es (محايد Nominativ/Akkusativ)، -e (مؤنث)، و -en في Dativ وفي Akkusativ المذكر وفي الجمع.', typ: 'select', items: [
      { q: 'Das ist ein schön___ Abend. (der Abend)', o: ['er', 'en', 'es'], a: 'er' },
      { q: 'Ich wünsche dir einen schön___ Abend.', o: ['en', 'er', 'e'], a: 'en' },
      { q: 'Wir sprechen über ein aktuell___ Thema. (das Thema)', o: ['es', 'en', 'er'], a: 'es' },
      { q: 'Sie ist eine groß___ Sängerin.', o: ['e', 'en', 'er'], a: 'e' },
      { q: 'Er arbeitet bei einer groß___ Firma.', o: ['en', 'e', 'er'], a: 'en' },
      { q: 'Das sind unsere günstig___ Preise.', o: ['en', 'e', 'es'], a: 'en' },
      { q: 'Das ist kein gut___ Plan. (der Plan)', o: ['er', 'en', 'es'], a: 'er' },
      { q: 'Sie kommt mit einem neu___ Kollegen.', o: ['en', 'er', 'em'], a: 'en' }
    ] },
    { titel: 'Grammatik: Adjektive – ganze Form', anweisung: 'Schreiben Sie das Adjektiv mit der richtigen Endung.', anweisungAr: 'اكتب الصفة مع النهاية الصحيحة.', typ: 'gap', items: [
      { q: 'Er hat einen ___ Beruf. (interessant)', a: ['interessanten'] },
      { q: 'Sie sucht eine ___ Stelle. (neu)', a: ['neue'] },
      { q: 'Das ist ein ___ Restaurant. (schön)', a: ['schönes', 'schoenes'] },
      { q: 'Ich habe keine ___ Zugverbindung gefunden. (direkt)', a: ['direkte'] },
      { q: 'Er arbeitet mit einem ___ Roboter. (modern)', a: ['modernen'] }
    ] },
    { titel: 'Grammatik: werden', anweisung: 'Schreiben Sie die richtige Form von werden.', anweisungAr: 'werden + اسم (يصبح مهنةً)، werden + صفة (يصير)، werden + عمر. الماضي: wurde، والـ Perfekt: ist geworden.', typ: 'gap', items: [
      { q: 'Mein Bruder ___ Fernfahrer. (Präsens)', a: ['wird'] },
      { q: 'Ich ___ nächste Woche 30 Jahre alt. (Präsens)', a: ['werde'] },
      { q: 'Was ___ du später von Beruf? (Präsens)', a: ['wirst'] },
      { q: 'Letztes Jahr ___ sie arbeitslos. (Präteritum)', a: ['wurde'] },
      { q: 'Wir ___ sehr nervös, weil der Zug nicht kam. (Präteritum)', a: ['wurden'] },
      { q: 'Er ist Chef der Firma ___. (Perfekt)', a: ['geworden'] }
    ] },
    { titel: 'Grammatik: werden im Satz', anweisung: 'Welche Bedeutung hat werden?', anweisungAr: 'ما الذي يأتي مع werden: اسم، أم صفة، أم عمر؟', typ: 'select', o: ['werden + Nomen', 'werden + Adjektiv', 'werden + Alter'], items: [
      { q: 'Sie wird Ärztin.', a: 'werden + Nomen' },
      { q: 'Es wird schon dunkel.', a: 'werden + Adjektiv' },
      { q: 'Mein Opa wird 80.', a: 'werden + Alter' },
      { q: 'Er ist Lehrer geworden.', a: 'werden + Nomen' },
      { q: 'Der Chef wurde sehr sauer.', a: 'werden + Adjektiv' }
    ] },
    { titel: 'Redemittel: Am Fahrkartenschalter', anweisung: 'Wer sagt das: der Fahrgast oder die Bahn-Mitarbeiterin?', anweisungAr: 'من يقول هذه الجملة: المسافر أم موظفة القطار؟', typ: 'select', o: ['Fahrgast', 'Bahn-Mitarbeiterin'], items: [
      { q: '„Wann fährt der nächste Zug nach Bremen?“', a: 'Fahrgast' },
      { q: '„Einfach oder hin und zurück?“', a: 'Bahn-Mitarbeiterin' },
      { q: '„Muss ich umsteigen?“', a: 'Fahrgast' },
      { q: '„Möchten Sie einen Platz reservieren?“', a: 'Bahn-Mitarbeiterin' },
      { q: '„Bitte zwei Plätze nebeneinander.“', a: 'Fahrgast' },
      { q: '„Haben Sie eine BahnCard?“', a: 'Bahn-Mitarbeiterin' }
    ] },
    { titel: 'Redemittel: Ein Telefongespräch', anweisung: 'Bringen Sie das Gespräch in die richtige Reihenfolge.', anweisungAr: 'رتّب المكالمة الهاتفية.', typ: 'order', items: [
      { q: 'Anruf bei der Firma Lorenz', lines: [
        'Firma Lorenz, Schmidt am Apparat. Guten Tag!',
        'Guten Tag, hier ist Karim Saleh. Kann ich bitte mit Frau Becker sprechen?',
        'Tut mir leid, Frau Becker ist gerade außer Haus. Möchten Sie eine Nachricht hinterlassen?',
        'Ja, gern. Könnte sie mich bitte heute Nachmittag zurückrufen?',
        'Natürlich. Ich richte es ihr aus. Auf Wiederhören!',
        'Vielen Dank. Auf Wiederhören!'
      ] }
    ] },
    { titel: 'Lesen: Ein neuer Anfang', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Mit 45 Jahren noch einmal neu anfangen? Für Thomas Krüger war das keine leichte Entscheidung. Er war 20 Jahre Bankkaufmann bei einer großen Bank. Dann kam die Digitalisierung, und er wurde arbeitslos. „Ich wollte schon immer mit Menschen arbeiten“, sagt er. Heute ist er Altenpfleger. Das Gehalt ist nicht so hoch wie früher, aber er bereut seine Entscheidung nicht. „Ich habe einen sinnvollen Beruf und nette Kollegen. Ich bin viel zufriedener als früher.“',
      items: [
        { q: 'Thomas hat 20 Jahre in einer Bank gearbeitet.', a: true },
        { q: 'Er hat selbst gekündigt, weil er mehr Geld wollte.', a: false },
        { q: 'Er arbeitet heute als Altenpfleger.', a: true },
        { q: 'Er verdient heute mehr als früher.', a: false },
        { q: 'Thomas ist heute zufriedener.', a: true }
      ] },
    { titel: 'Schreiben: Mein Traumberuf', anweisung: 'Schreiben Sie einen Text über Ihren Traumberuf (60–80 Wörter): Was möchten Sie werden? Warum (weil …)? Was macht man in diesem Beruf? Wo arbeitet man? Was ist gut, was ist nicht so gut? Benutzen Sie Adjektive.', anweisungAr: 'اكتب نصًا عن مهنة أحلامك (60–80 كلمة): ماذا تريد أن تصبح ولماذا؟ وماذا يفعل صاحب هذه المهنة، وأين يعمل؟ وما الإيجابيات والسلبيات؟ استخدم الصفات. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch möchte … werden, weil …\nIn diesem Beruf arbeitet man in einem/einer … / mit …\nMan braucht eine Ausbildung / ein Studium.\nDas ist ein interessanter / sinnvoller / gut bezahlter Beruf.\nEin Nachteil ist, dass …',
      items: [
        { q: 'Ich möchte … werden, …', min: 55, muster: 'Mein Traumberuf ist Krankenpflegerin. Ich möchte Krankenpflegerin werden, weil ich gern Menschen helfe. In diesem Beruf arbeitet man in einem großen Krankenhaus oder in einer kleinen Praxis. Man kümmert sich um kranke Menschen und hilft den Ärzten. Für diesen Beruf braucht man eine Ausbildung von drei Jahren. Das ist ein sinnvoller und interessanter Beruf. Ein Nachteil ist, dass man oft am Wochenende und in der Nacht arbeiten muss. Trotzdem ist das mein Traum.' }
    ] }
  ]
};
