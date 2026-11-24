// Netzwerk neu A1 – Kapitel 10: Studium und Beruf
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 10, titel: 'Studium und Beruf',
  titelAr: 'العمل والدراسة والهاتف – الماضي التام (Perfekt) مع haben و sein',
  teile: [
    { titel: 'Arbeitsorte', anweisung: 'Wer arbeitet wo? Ordnen Sie zu.', anweisungAr: 'من يعمل أين؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Die Verkäuferin arbeitet', 'im Kaufhaus.'],
        ['Der Mechaniker arbeitet', 'in der Werkstatt.'],
        ['Der Handwerker arbeitet', 'auf der Baustelle.'],
        ['Die Professorin arbeitet', 'an der Universität.'],
        ['Der Programmierer arbeitet', 'in einer Computerfirma.']
      ] }
    ] },
    { titel: 'Wörter rund um die Arbeit', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة.', typ: 'select', o: ['Bewerbung', 'verdient', 'Feierabend', 'arbeitslos', 'Semester', 'Prüfung'], items: [
      { q: 'Er hat keine Arbeit. Er ist ___.', a: 'arbeitslos' },
      { q: 'Für die Stelle schreibe ich eine ___.', a: 'Bewerbung' },
      { q: 'In diesem Job ___ man viel Geld.', a: 'verdient' },
      { q: 'Um 17 Uhr habe ich ___ und gehe nach Hause.', a: 'Feierabend' },
      { q: 'Ich studiere Medizin im dritten ___.', a: 'Semester' },
      { q: 'Morgen schreibe ich eine ___. Ich muss viel lernen.', a: 'Prüfung' }
    ] },
    { titel: 'Partizip II: regelmäßige Verben', anweisung: 'Schreiben Sie das Partizip II.', anweisungAr: 'الأفعال المنتظمة: ge + جذر الفعل + t، مثل: machen ← gemacht.', typ: 'gap', items: [
      { q: 'machen → hat ___', a: ['gemacht'] },
      { q: 'arbeiten → hat ___', a: ['gearbeitet'] },
      { q: 'kaufen → hat ___', a: ['gekauft'] },
      { q: 'spielen → hat ___', a: ['gespielt'] },
      { q: 'lernen → hat ___', a: ['gelernt'] },
      { q: 'kochen → hat ___', a: ['gekocht'] }
    ] },
    { titel: 'Partizip II: unregelmäßige Verben', anweisung: 'Wählen Sie das richtige Partizip.', anweisungAr: 'الأفعال الشاذة: ge + … + en، وقد يتغيّر حرف العلّة أحيانًا.', typ: 'mcq', items: [
      { q: 'schreiben → hat …', o: ['geschrieben', 'geschreibt', 'geschrieben hat'], a: 'geschrieben' },
      { q: 'trinken → hat …', o: ['getrunken', 'getrinkt', 'getranken'], a: 'getrunken' },
      { q: 'lesen → hat …', o: ['gelesen', 'gelest', 'gelasen'], a: 'gelesen' },
      { q: 'fahren → ist …', o: ['gefahren', 'gefahrt', 'gefuhren'], a: 'gefahren' },
      { q: 'schlafen → hat …', o: ['geschlafen', 'geschlaft', 'geschliefen'], a: 'geschlafen' },
      { q: 'gehen → ist …', o: ['gegangen', 'gegeht', 'gegehen'], a: 'gegangen' }
    ] },
    { titel: 'Verben auf -ieren', anweisung: 'Schreiben Sie das Partizip II (ohne ge-).', anweisungAr: 'الأفعال المنتهية بـ -ieren لا تأخذ ge-، مثل: studieren ← studiert.', typ: 'gap', items: [
      { q: 'Sie hat in Berlin Medizin ___. (studieren)', a: ['studiert'] },
      { q: 'Ich habe gestern mit meiner Mutter ___. (telefonieren)', a: ['telefoniert'] },
      { q: 'Wir haben die Party ___. (organisieren)', a: ['organisiert'] },
      { q: 'Er hat im Urlaub den Hafen ___. (fotografieren)', a: ['fotografiert'] }
    ] },
    { titel: 'haben oder sein?', anweisung: 'Perfekt mit haben oder sein? Wählen Sie.', anweisungAr: 'تُستعمل sein مع أفعال الحركة وتغيّر الحال (fahren, gehen, kommen, aufstehen)، وتُستعمل haben مع سائر الأفعال.', typ: 'select', items: [
      { q: 'Ich ___ gestern nach Hamburg gefahren.', o: ['bin', 'habe'], a: 'bin' },
      { q: 'Wir ___ lange gearbeitet.', o: ['haben', 'sind'], a: 'haben' },
      { q: 'Er ___ um sechs Uhr aufgestanden.', o: ['ist', 'hat'], a: 'ist' },
      { q: '___ du schon gegessen?', o: ['Hast', 'Bist'], a: 'Hast' },
      { q: 'Sie ___ spät nach Hause gekommen.', o: ['ist', 'hat'], a: 'ist' },
      { q: 'Ihr ___ viele Fotos gemacht.', o: ['habt', 'seid'], a: 'habt' }
    ] },
    { titel: 'Die Satzklammer im Perfekt', anweisung: 'Bauen Sie den Satz. Das Partizip steht am Ende.', anweisungAr: 'يأتي haben/sein في الموقع الثاني، ويأتي الـ Partizip في آخر الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['ich', 'habe', 'gestern', 'viel', 'gearbeitet'], a: ['ich habe gestern viel gearbeitet', 'gestern habe ich viel gearbeitet'] },
      { q: 'W-Frage (?)', w: ['was', 'hast', 'du', 'am Wochenende', 'gemacht'], a: ['was hast du am Wochenende gemacht'] },
      { q: 'Aussagesatz (.)', w: ['wir', 'sind', 'mit dem Zug', 'gefahren'], a: ['wir sind mit dem Zug gefahren', 'mit dem Zug sind wir gefahren'] },
      { q: 'Aussagesatz (.)', w: ['sie', 'hat', 'eine Bewerbung', 'geschrieben'], a: ['sie hat eine Bewerbung geschrieben', 'eine Bewerbung hat sie geschrieben'] }
    ] },
    { titel: 'Am Telefon', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الرد المناسب في المكالمة الهاتفية.', typ: 'mcq', items: [
      { q: 'Firma Schulz, Becker am Apparat. Guten Tag!', o: ['Guten Tag, hier ist Omar Saleh.', 'Auf Wiederhören!', 'Ich habe Feierabend.'], a: 'Guten Tag, hier ist Omar Saleh.' },
      { q: 'Können Sie mich bitte mit Frau Selmić verbinden?', o: ['Einen Moment, bitte.', 'Ja, sie ist arbeitslos.', 'Das ist eine Baustelle.'], a: 'Einen Moment, bitte.' },
      { q: 'Tut mir leid, der Anschluss ist besetzt.', o: ['Können Sie mir bitte die Durchwahl geben?', 'Herzlichen Glückwunsch!', 'Ich habe studiert.'], a: 'Können Sie mir bitte die Durchwahl geben?' },
      { q: 'Die Durchwahl ist 2 3 7.', o: ['Wie bitte? Können Sie das noch einmal sagen?', 'Gute Besserung!', 'Ja, ich bin fleißig.'], a: 'Wie bitte? Können Sie das noch einmal sagen?' }
    ] },
    { titel: 'Lesen: Mein Tag gestern', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Gestern war ein langer Tag. Ich bin um 6 Uhr aufgestanden und habe schnell gefrühstückt. Dann bin ich mit dem Fahrrad zur Universität gefahren. Von 8 bis 12 Uhr habe ich eine Prüfung in Statistik geschrieben. Am Nachmittag habe ich im Café gearbeitet. Das ist mein Job. Am Abend habe ich mit meiner Familie in Kairo telefoniert. Um 23 Uhr bin ich müde ins Bett gegangen. – Yasmin',
      items: [
        { q: 'Yasmin ist um 6 Uhr aufgestanden.', a: true },
        { q: 'Sie ist mit dem Bus zur Universität gefahren.', a: false },
        { q: 'Sie hat eine Prüfung geschrieben.', a: true },
        { q: 'Am Nachmittag hat sie im Supermarkt gearbeitet.', a: false },
        { q: 'Am Abend hat sie mit ihrer Familie telefoniert.', a: true }
      ] },
    { titel: 'Schreiben: Mein Wochenende', anweisung: 'Was haben Sie am Wochenende gemacht? Schreiben Sie im Perfekt. (ca. 35 Wörter)', anweisungAr: 'ماذا فعلت في عطلة نهاية الأسبوع؟ اكتب بصيغة الـ Perfekt. نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Am Samstag habe ich …', min: 30, muster: 'Am Samstag habe ich lange geschlafen. Dann habe ich mit meiner Schwester gefrühstückt. Am Nachmittag sind wir in die Stadt gefahren und haben eingekauft. Am Sonntag habe ich Deutsch gelernt und meine Hausaufgaben gemacht. Am Abend habe ich einen Film gesehen.' }
    ] }
  ]
};
