// Netzwerk neu A1 – Kapitel 6: Zeit mit Freunden
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 6, titel: 'Zeit mit Freunden',
  titelAr: 'التاريخ والدعوات والطلب في المطعم – الأفعال المنفصلة و mich/dich و für و war/hatte',
  teile: [
    { titel: 'Das Datum', anweisung: 'Wie sagt man das Datum? Wählen Sie.', anweisungAr: 'كيف يُقال التاريخ؟', typ: 'mcq', items: [
      { q: '3. Mai → Heute ist der … Mai.', o: ['dritte', 'drei', 'dreite'], a: 'dritte' },
      { q: '1. Juni → Ich habe am … Juni Geburtstag.', o: ['ersten', 'einsten', 'erste'], a: 'ersten' },
      { q: '7. Juli → Die Party ist am … Juli.', o: ['siebten', 'sieben', 'siebte'], a: 'siebten' },
      { q: '20. Februar → Heute ist der … Februar.', o: ['zwanzigste', 'zwanzigte', 'zwanzig'], a: 'zwanzigste' }
    ] },
    { titel: 'Wann hast du Geburtstag?', anweisung: 'Schreiben Sie die Ordinalzahl (am …ten).', anweisungAr: 'اكتب العدد الترتيبي: am ersten, am zweiten…', typ: 'gap', items: [
      { q: 'Am ___ März. (2.)', a: ['zweiten'] },
      { q: 'Am ___ Oktober. (12.)', a: ['zwölften', 'zwoelften'] },
      { q: 'Am ___ Januar. (1.)', a: ['ersten'] },
      { q: 'Am ___ August. (25.)', a: ['fünfundzwanzigsten', 'fuenfundzwanzigsten'] }
    ] },
    { titel: 'Trennbare Verben', anweisung: 'Ergänzen Sie den zweiten Teil des Verbs.', anweisungAr: 'في الفعل المنفصل تنتقل البادئة إلى آخر الجملة.', typ: 'select', o: ['an', 'ein', 'mit', 'auf', 'ab'], items: [
      { q: 'Ich rufe dich morgen ___. (anrufen)', a: 'an' },
      { q: 'Wir laden unsere Freunde ___. (einladen)', a: 'ein' },
      { q: 'Kommst du heute Abend ___? (mitkommen)', a: 'mit' },
      { q: 'Der Kurs hört um 12 Uhr ___. (aufhören)', a: 'auf' },
      { q: 'Ich hole dich um acht Uhr ___. (abholen)', a: 'ab' },
      { q: 'Bringst du bitte einen Salat ___? (mitbringen)', a: 'mit' }
    ] },
    { titel: 'Trennbare Verben im Satz', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة: الفعل في الموقع الثاني، والبادئة في آخر الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['der Film', 'fängt', 'um 20 Uhr', 'an'], a: ['der Film fängt um 20 Uhr an', 'um 20 Uhr fängt der Film an'] },
      { q: 'Aussagesatz (.)', w: ['ich', 'lade', 'dich', 'ein'], a: ['ich lade dich ein'] },
      { q: 'Ja/Nein-Frage (?)', w: ['kommst', 'du', 'mit'], a: ['kommst du mit'] },
      { q: 'Aussagesatz (.)', w: ['wir', 'bringen', 'Kuchen', 'mit'], a: ['wir bringen Kuchen mit'] }
    ] },
    { titel: 'Personalpronomen im Akkusativ', anweisung: 'mich, dich, ihn, sie, es, uns, euch? Ergänzen Sie.', anweisungAr: 'ضمائر المفعول به (Akkusativ): mich, dich, ihn, sie, es, uns, euch.', typ: 'select', items: [
      { q: 'Ich habe Geburtstag. Kommst du? Ich lade ___ ein. (du)', o: ['dich', 'dir', 'du'], a: 'dich' },
      { q: 'Kennst du Tom? – Ja, ich kenne ___ gut.', o: ['ihn', 'er', 'ihm'], a: 'ihn' },
      { q: 'Wo ist Lisa? Ich sehe ___ nicht.', o: ['sie', 'ihr', 'ihn'], a: 'sie' },
      { q: 'Das Geschenk ist toll! Ich finde ___ super.', o: ['es', 'ihn', 'sie'], a: 'es' },
      { q: 'Holst du ___ ab? Wir sind am Bahnhof.', o: ['uns', 'wir', 'euch'], a: 'uns' },
      { q: 'Ruf ___ bitte an! (ich)', o: ['mich', 'mir', 'ich'], a: 'mich' }
    ] },
    { titel: 'für + Akkusativ', anweisung: 'Für wen ist das? Wählen Sie.', anweisungAr: 'يأتي بعد für حالة النصب: für mich, für dich, für ihn…', typ: 'select', items: [
      { q: 'Der Kuchen ist für ___. (du)', o: ['dich', 'dir', 'du'], a: 'dich' },
      { q: 'Das Geschenk ist für ___ Mutter.', o: ['meine', 'meiner', 'mein'], a: 'meine' },
      { q: 'Die Blumen sind für ___ Lehrer.', o: ['den', 'der', 'dem'], a: 'den' },
      { q: 'Ist der Tee für ___? – Ja, danke! (ich)', o: ['mich', 'mir', 'ich'], a: 'mich' }
    ] },
    { titel: 'war und hatte', anweisung: 'Präteritum von sein und haben. Ergänzen Sie.', anweisungAr: 'ماضي sein هو war، وماضي haben هو hatte.', typ: 'gap', items: [
      { q: 'Gestern ___ ich auf einer Party. (sein)', a: ['war'] },
      { q: 'Wir ___ viel Spaß. (haben)', a: ['hatten'] },
      { q: '___ du am Samstag zu Hause? (sein)', a: ['Warst'] },
      { q: 'Lisa ___ Geburtstag. (haben)', a: ['hatte'] },
      { q: 'Das Essen ___ sehr lecker. (sein)', a: ['war'] },
      { q: 'Ihr ___ keine Zeit. (haben)', a: ['hattet'] }
    ] },
    { titel: 'Im Restaurant', anweisung: 'Was sagt der Gast? Wählen Sie.', anweisungAr: 'ماذا يقول الزبون؟', typ: 'mcq', items: [
      { q: 'Kellner: Was möchten Sie trinken?', o: ['Eine Apfelschorle, bitte.', 'Die Rechnung, bitte.', 'Stimmt so.'], a: 'Eine Apfelschorle, bitte.' },
      { q: 'Kellner: Und was möchten Sie essen?', o: ['Ich nehme das Schnitzel.', 'Ich habe Durst.', 'Zusammen, bitte.'], a: 'Ich nehme das Schnitzel.' },
      { q: 'Sie möchten bezahlen. Sie sagen:', o: ['Zahlen, bitte!', 'Guten Appetit!', 'Das schmeckt gut.'], a: 'Zahlen, bitte!' },
      { q: 'Kellner: Zusammen oder getrennt?', o: ['Getrennt, bitte.', 'Ja, gern.', 'Mit Messer.'], a: 'Getrennt, bitte.' },
      { q: 'Das macht 18,50 Euro. – Sie geben 20 Euro und sagen:', o: ['Stimmt so.', 'Zusammen.', 'Gleichfalls.'], a: 'Stimmt so.' }
    ] },
    { titel: 'Auf dem Tisch', anweisung: 'Was braucht man? Ordnen Sie zu.', anweisungAr: 'ماذا نستعمل؟ صِل بين أجزاء الجمل.', typ: 'match', items: [
      { q: '', pairs: [
        ['Suppe isst man mit', 'einem Löffel.'],
        ['Fleisch schneidet man mit', 'einem Messer.'],
        ['Kaffee trinkt man aus', 'einer Tasse.'],
        ['Wasser trinkt man aus', 'einem Glas.']
      ] }
    ] },
    { titel: 'Lesen: Die Einladung', anweisung: 'Lesen Sie die Einladung. Richtig oder falsch?', anweisungAr: 'اقرأ الدعوة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Liebe Freunde,\nam Samstag, den 14. Juni, werde ich 30 Jahre alt! Ich mache eine Party und lade euch herzlich ein. Die Party fängt um 19 Uhr an. Wir feiern im Garten. Bitte bringt etwas zum Essen mit, Getränke habe ich. Achtung: Mein Bruder weiß nichts, die Party ist eine Überraschung für ihn! Er kommt um 20 Uhr.\nBitte ruft mich bis Mittwoch an.\nHerzliche Grüße\nSophie',
      items: [
        { q: 'Sophie hat am 14. Juni Geburtstag.', a: true },
        { q: 'Die Party beginnt um 20 Uhr.', a: false },
        { q: 'Die Gäste bringen Getränke mit.', a: false },
        { q: 'Die Überraschung ist für Sophies Bruder.', a: true },
        { q: 'Die Gäste sollen bis Mittwoch anrufen.', a: true }
      ] },
    { titel: 'Schreiben: Eine Einladung', anweisung: 'Sie haben Geburtstag. Schreiben Sie eine Einladung an Ihre Freunde: Wann? Wo? Was sollen sie mitbringen? (ca. 35 Wörter)', anweisungAr: 'اكتب دعوة لأصدقائك إلى حفلة عيد ميلادك: متى؟ وأين؟ وماذا يحضرون معهم؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Liebe Freunde, …', min: 30, muster: 'Liebe Freunde,\nam Freitag, den 5. Juli, habe ich Geburtstag. Ich lade euch herzlich zu meiner Party ein! Sie fängt um 19 Uhr an. Wir feiern bei mir zu Hause. Bitte bringt Musik mit. Essen und Getränke habe ich.\nViele Grüße\nAmira' }
    ] }
  ]
};
