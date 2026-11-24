// Netzwerk neu A1 – Kapitel 3: In Hamburg
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 3, titel: 'In Hamburg',
  titelAr: 'أماكن المدينة والمواصلات والاتجاهات والشهور',
  teile: [
    { titel: 'Plätze und Gebäude', anweisung: 'Wo ist das? Wählen Sie.', anweisungAr: 'ما هذا المكان؟ اختر.', typ: 'mcq', items: [
      { q: 'Hier fahren die Züge ab und kommen an.', o: ['der Bahnhof', 'die Kirche', 'der Park'], a: 'der Bahnhof' },
      { q: 'Hier sieht man viele Schiffe.', o: ['der Hafen', 'das Rathaus', 'der Turm'], a: 'der Hafen' },
      { q: 'Hier kauft man Obst und Gemüse.', o: ['der Markt', 'die Brücke', 'das Museum'], a: 'der Markt' },
      { q: 'Hier schlafen Touristen.', o: ['das Hotel', 'der Bahnhof', 'der See'], a: 'das Hotel' },
      { q: 'Hier hört man Konzerte.', o: ['das Konzerthaus', 'der Hafen', 'der Fluss'], a: 'das Konzerthaus' }
    ] },
    { titel: 'ein oder eine?', anweisung: 'Ergänzen Sie den unbestimmten Artikel.', anweisungAr: 'أكمل بأداة النكرة ein أو eine.', typ: 'select', o: ['ein', 'eine'], items: [
      { q: 'Das ist ___ Kirche.', a: 'eine' }, { q: 'Das ist ___ Bahnhof.', a: 'ein' }, { q: 'Das ist ___ Hotel.', a: 'ein' },
      { q: 'Das ist ___ Brücke.', a: 'eine' }, { q: 'Das ist ___ Museum.', a: 'ein' }, { q: 'Hamburg ist ___ Stadt.', a: 'eine' }
    ] },
    { titel: 'kein, keine oder nicht?', anweisung: 'Ergänzen Sie.', anweisungAr: 'تأتي kein/keine قبل الاسم، وتأتي nicht قبل الصفة.', typ: 'select', o: ['kein', 'keine', 'nicht'], items: [
      { q: 'Das ist ___ Hotel, das ist ein Museum.', a: 'kein' },
      { q: 'Das ist ___ Brücke, das ist ein Turm.', a: 'keine' },
      { q: 'Das Konzert ist ___ teuer.', a: 'nicht' },
      { q: 'Das ist ___ Park, das ist ein Markt.', a: 'kein' },
      { q: 'Der Turm ist ___ hoch.', a: 'nicht' },
      { q: 'Das ist ___ Kirche, das ist das Rathaus.', a: 'keine' }
    ] },
    { titel: 'Verkehrsmittel', anweisung: 'Welches Verkehrsmittel ist das?', anweisungAr: 'ما وسيلة المواصلات هذه؟', typ: 'mcq', items: [
      { q: 'Es fährt auf dem Wasser.', o: ['das Schiff', 'der Zug', 'der Bus'], a: 'das Schiff' },
      { q: 'Es fliegt.', o: ['das Flugzeug', 'das Fahrrad', 'die S-Bahn'], a: 'das Flugzeug' },
      { q: 'Es hat zwei Räder und keinen Motor.', o: ['das Fahrrad', 'das Taxi', 'die Straßenbahn'], a: 'das Fahrrad' },
      { q: 'Sie fährt unter der Stadt.', o: ['die U-Bahn', 'das Schiff', 'das Flugzeug'], a: 'die U-Bahn' },
      { q: 'Man braucht kein Verkehrsmittel. Man geht …', o: ['zu Fuß.', 'mit dem Bus.', 'mit dem Zug.'], a: 'zu Fuß.' }
    ] },
    { titel: 'Imperativ mit Sie', anweisung: 'Schreiben Sie das Verb im Imperativ.', anweisungAr: 'اكتب صيغة الأمر مع Sie: يأتي الفعل في أول الجملة.', typ: 'gap', items: [
      { q: '___ Sie zuerst geradeaus! (gehen)', a: ['Gehen'] },
      { q: '___ Sie die U-Bahn! (nehmen)', a: ['Nehmen'] },
      { q: '___ Sie hier links! (fahren)', a: ['Fahren'] },
      { q: '___ Sie bitte langsam! (sprechen)', a: ['Sprechen'] },
      { q: '___ Sie bitte noch einmal! (fragen)', a: ['Fragen'] }
    ] },
    { titel: 'Lesen: Der Weg zum Hotel', anweisung: 'Lesen Sie die Wegbeschreibung. Richtig oder falsch?', anweisungAr: 'اقرأ وصف الطريق. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Entschuldigung, wo ist bitte das Hotel Alster?\n– Das ist ganz einfach. Gehen Sie zuerst geradeaus. Da ist eine Kirche. Gehen Sie dann rechts. Da sehen Sie schon den Park. Das Hotel ist links, neben dem Park. Es ist nicht weit, nur 300 Meter.',
      items: [
        { q: 'Man geht zuerst geradeaus.', a: true },
        { q: 'Bei der Kirche geht man links.', a: false },
        { q: 'Das Hotel ist neben dem Park.', a: true },
        { q: 'Das Hotel ist drei Kilometer weit.', a: false }
      ] },
    { titel: 'Monate', anweisung: 'Schreiben Sie den Monat.', anweisungAr: 'اكتب اسم الشهر.', typ: 'gap', items: [
      { q: 'Januar, Februar, ___', a: ['März', 'Maerz'] },
      { q: 'Der Monat nach Mai ist ___.', a: ['Juni'] },
      { q: 'Der Monat vor Dezember ist ___.', a: ['November'] },
      { q: 'Juli, ___, September', a: ['August'] }
    ] },
    { titel: 'Jahreszeiten', anweisung: 'Welche Jahreszeit ist das?', anweisungAr: 'أيّ فصل من فصول السنة؟', typ: 'select', o: ['Frühling', 'Sommer', 'Herbst', 'Winter'], items: [
      { q: 'Dezember, Januar, Februar: Das ist der ___.', a: 'Winter' },
      { q: 'März, April, Mai: Das ist der ___.', a: 'Frühling' },
      { q: 'Juni, Juli, August: Das ist der ___.', a: 'Sommer' },
      { q: 'September, Oktober, November: Das ist der ___.', a: 'Herbst' }
    ] },
    { titel: 'Maße', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للقياس.', typ: 'select', o: ['hoch', 'lang', 'breit', 'alt'], items: [
      { q: 'Der Turm ist 132 Meter ___.', a: 'hoch' },
      { q: 'Die Brücke ist 12 Kilometer ___.', a: 'lang' },
      { q: 'Das Rathaus ist 111 Meter ___.', a: 'breit' },
      { q: 'Die Kirche ist über 300 Jahre ___.', a: 'alt' }
    ] },
    { titel: 'Events in der Stadt', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل بين جزأي كل جملة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Im Konzert spielt', 'ein Orchester.'],
        ['Im Film spielt', 'ein Schauspieler.'],
        ['In der Ausstellung sieht man', 'Bilder.'],
        ['Der Chor', 'singt.'],
        ['Die Besucher kaufen', 'Tickets.']
      ] }
    ] },
    { titel: 'Sätze bauen', anweisung: 'Klicken Sie die Wörter in der richtigen Reihenfolge.', anweisungAr: 'رتّب الكلمات.', typ: 'words', items: [
      { q: 'W-Frage (?)', w: ['wo', 'ist', 'der Bahnhof'], a: ['wo ist der Bahnhof'] },
      { q: 'Ja/Nein-Frage (?)', w: ['ist', 'das', 'ein Hotel'], a: ['ist das ein Hotel'] },
      { q: 'Imperativ (!)', w: ['gehen', 'Sie', 'zuerst', 'rechts'], a: ['gehen Sie zuerst rechts'] },
      { q: 'Aussagesatz (.)', w: ['Hamburg', 'ist', 'sehr', 'schön'], a: ['Hamburg ist sehr schön'] }
    ] },
    { titel: 'Lesen: Das Hafenfest', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Das Hafenfest in Hamburg ist im Mai. Es ist drei Tage lang. Man sieht viele Schiffe, es gibt Musik und Konzerte. Viele Besucher kommen mit der U-Bahn oder mit dem Fahrrad. Das Fest ist kostenlos. Nur das große Konzert am Sonntag kostet 15 Euro. Tickets gibt es online.',
      items: [
        { q: 'Das Hafenfest ist im Sommer.', a: false },
        { q: 'Das Fest ist drei Tage lang.', a: true },
        { q: 'Man sieht viele Schiffe.', a: true },
        { q: 'Das Fest kostet 15 Euro.', a: false },
        { q: 'Tickets für das Konzert gibt es online.', a: true }
      ] },
    { titel: 'Schreiben: Meine Stadt', anweisung: 'Beschreiben Sie Ihre Stadt: Was gibt es da? Wie ist die Stadt? Wie fahren Sie? (ca. 30 Wörter)', anweisungAr: 'صِف مدينتك: ماذا يوجد فيها؟ وكيف هي؟ وبأيّ وسيلة تتنقّل؟ نحو 30 كلمة.', typ: 'write', items: [
      { q: 'Ich wohne in …', min: 25, muster: 'Ich wohne in Kairo. Kairo ist sehr groß und interessant. Da gibt es den Nil, viele Brücken, Museen und Parks. Ich fahre oft mit der U-Bahn oder mit dem Bus. Im Sommer ist Kairo sehr heiß.' }
    ] }
  ]
};
