// Netzwerk neu A1 – Kapitel 7: Arbeitsalltag
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 7, titel: 'Arbeitsalltag',
  titelAr: 'العمل والمكتب والمصرف والرسائل – und/oder/aber والـ Dativ وحروف الجر المكانية',
  teile: [
    { titel: 'Im Büro', anweisung: 'Was macht man am Computer? Wählen Sie.', anweisungAr: 'ماذا نفعل على الحاسوب؟', typ: 'select', o: ['speichern', 'drucken', 'eingeben', 'öffnen', 'hochfahren'], items: [
      { q: 'Am Morgen den Computer ___', a: 'hochfahren' },
      { q: 'das Passwort ___', a: 'eingeben' },
      { q: 'eine Datei mit Doppelklick ___', a: 'öffnen' },
      { q: 'den Brief auf Papier ___', a: 'drucken' },
      { q: 'Vor dem Schließen die Datei ___, sonst ist alles weg.', a: 'speichern' }
    ] },
    { titel: 'und, oder, aber', anweisung: 'Ergänzen Sie.', anweisungAr: 'und = و، oder = أو، aber = لكنّ.', typ: 'select', o: ['und', 'oder', 'aber'], items: [
      { q: 'Ich arbeite im Büro ___ mein Mann arbeitet auch im Büro.', a: 'und' },
      { q: 'Möchtest du Kaffee ___ Tee?', a: 'oder' },
      { q: 'Der Job ist interessant, ___ ich habe viel Stress.', a: 'aber' },
      { q: 'Wir können heute ___ morgen telefonieren. Du kannst wählen.', a: 'oder' },
      { q: 'Ich möchte kommen, ___ ich habe keine Zeit.', a: 'aber' }
    ] },
    { titel: 'Artikel im Dativ', anweisung: 'dem, der oder den? Ergänzen Sie.', anweisungAr: 'حالة الـ Dativ: der ← dem، das ← dem، die ← der، والجمع ← den.', typ: 'select', o: ['dem', 'der', 'den'], items: [
      { q: 'Ich fahre mit ___ Bus. (der Bus)', a: 'dem' },
      { q: 'Er fährt mit ___ U-Bahn. (die U-Bahn)', a: 'der' },
      { q: 'Wir fahren mit ___ Auto. (das Auto)', a: 'dem' },
      { q: 'Sie spricht mit ___ Kollegen. (die Kollegen, Plural)', a: 'den' },
      { q: 'Ich schreibe mit ___ Kuli. (der Kuli)', a: 'dem' }
    ] },
    { titel: 'Wo ist das?', anweisung: 'Ergänzen Sie die Präposition mit Dativ.', anweisungAr: 'السؤال عن المكان (Wo?) يأخذ Dativ: auf dem, im, neben der…', typ: 'select', items: [
      { q: 'Das Handy liegt ___ Tisch.', o: ['auf dem', 'auf der', 'auf den'], a: 'auf dem' },
      { q: 'Der Drucker steht ___ Computer.', o: ['neben dem', 'neben der', 'neben die'], a: 'neben dem' },
      { q: 'Die Kollegin sitzt ___ Büro.', o: ['im', 'in der', 'in den'], a: 'im' },
      { q: 'Die Tasche ist ___ Stuhl.', o: ['unter dem', 'unter der', 'unter den'], a: 'unter dem' },
      { q: 'Das Bild hängt ___ Wand.', o: ['an der', 'an dem', 'an die'], a: 'an der' },
      { q: 'Der Papierkorb steht ___ Tür.', o: ['hinter der', 'hinter dem', 'hinter die'], a: 'hinter der' }
    ] },
    { titel: 'In der Bank', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل بين أجزاء الجمل في المصرف.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich muss noch Geld', 'am Automaten holen.'],
        ['Zahlen Sie bar', 'oder mit Karte?'],
        ['Ich überweise das Geld', 'auf dein Konto.'],
        ['Für die Überweisung brauche ich', 'die Kontonummer.']
      ] }
    ] },
    { titel: 'Medien', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الرد المناسب.', typ: 'mcq', items: [
      { q: 'Kannst du mich anrufen?', o: ['Leider nicht, mein Akku ist leer.', 'Ja, ich drucke die Datei.', 'Mit freundlichen Grüßen.'], a: 'Leider nicht, mein Akku ist leer.' },
      { q: 'Hast du WLAN?', o: ['Nein, hier habe ich kein Netz.', 'Ja, ich habe Urlaub.', 'Nein, das Passwort ist lang.'], a: 'Nein, hier habe ich kein Netz.' },
      { q: 'Kannst du das bitte drucken?', o: ['Klar, der Drucker ist hier.', 'Nein, ich bin Hausmeister.', 'Ja, ich habe Pause.'], a: 'Klar, der Drucker ist hier.' }
    ] },
    { titel: 'Einen Brief schreiben', anweisung: 'Formeller Brief: Was steht wo? Wählen Sie.', anweisungAr: 'الرسالة الرسمية: أيّ عبارة تأتي في البداية، وأيّها في النهاية؟', typ: 'mcq', items: [
      { q: 'Die Anrede (Anfang) im formellen Brief:', o: ['Sehr geehrte Damen und Herren,', 'Hallo Leute!', 'Tschüs,'], a: 'Sehr geehrte Damen und Herren,' },
      { q: 'Der Gruß (Ende) im formellen Brief:', o: ['Mit freundlichen Grüßen', 'Liebe Grüße und Kuss', 'Bis dann!'], a: 'Mit freundlichen Grüßen' },
      { q: 'Wer schreibt den Brief?', o: ['der Absender', 'der Empfänger', 'die Post'], a: 'der Absender' },
      { q: 'Wer bekommt den Brief?', o: ['der Empfänger', 'der Absender', 'die Unterschrift'], a: 'der Empfänger' }
    ] },
    { titel: 'Small Talk', anweisung: 'Was ist eine gute Antwort im Small Talk?', anweisungAr: 'اختر الرد المناسب في الحديث القصير (Small Talk).', typ: 'mcq', items: [
      { q: 'Heute ist es so heiß, oder?', o: ['Ja, schrecklich! 35 Grad!', 'Ich bin Hausmeister.', 'Mein Passwort ist geheim.'], a: 'Ja, schrecklich! 35 Grad!' },
      { q: 'Wohnen Sie auch in der Gartenstraße? – Ja, Nummer 5.', o: ['So ein Zufall! Ich wohne in Nummer 7.', 'Mit freundlichen Grüßen.', 'Das ist eine Datei.'], a: 'So ein Zufall! Ich wohne in Nummer 7.' },
      { q: 'Kommst du heute nicht zum Club? – …', o: ['Doch, ich komme um acht.', 'Ja, ich komme nicht.', 'Nein, doch.'], a: 'Doch, ich komme um acht.' }
    ] },
    { titel: 'Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['ich', 'fahre', 'mit dem Fahrrad', 'zur Arbeit'], a: ['ich fahre mit dem Fahrrad zur Arbeit', 'mit dem Fahrrad fahre ich zur Arbeit', 'zur Arbeit fahre ich mit dem Fahrrad', 'ich fahre zur Arbeit mit dem Fahrrad'] },
      { q: 'Aussagesatz (.)', w: ['der Drucker', 'steht', 'neben dem Fenster'], a: ['der Drucker steht neben dem Fenster', 'neben dem Fenster steht der Drucker'] },
      { q: 'Aussagesatz (.)', w: ['ich', 'habe', 'Zeit,', 'aber', 'kein Geld'], a: ['ich habe Zeit, aber kein Geld'] }
    ] },
    { titel: 'Lesen: Ein Blog', anweisung: 'Lesen Sie den Blogbeitrag. Richtig oder falsch?', anweisungAr: 'اقرأ التدوينة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Mein Arbeitsalltag – von Tarek\nIch mache ein Praktikum in einer Firma in Frankfurt. Ich fahre jeden Tag mit der S-Bahn zur Arbeit. Um 8 Uhr fahre ich den Computer hoch und lese meine Mails. Mein Büro ist klein, aber hell. Mein Schreibtisch steht neben dem Fenster. Um 12 Uhr mache ich Pause mit meiner Kollegin Anna. Wir essen in der Kantine oder im Park. Am Nachmittag schreibe ich Berichte. Das ist manchmal langweilig, aber ich lerne viel.',
      items: [
        { q: 'Tarek macht ein Praktikum.', a: true },
        { q: 'Er fährt mit dem Bus zur Arbeit.', a: false },
        { q: 'Sein Büro ist groß.', a: false },
        { q: 'Der Schreibtisch steht neben dem Fenster.', a: true },
        { q: 'Tarek macht allein Pause.', a: false },
        { q: 'Am Nachmittag schreibt er Berichte.', a: true }
      ] },
    { titel: 'Schreiben: Mein Arbeitstag', anweisung: 'Beschreiben Sie Ihren Arbeitstag oder Kurstag: Wie fahren Sie dahin? Was machen Sie? Wo sitzen Sie? Was gefällt Ihnen? (ca. 35 Wörter)', anweisungAr: 'صِف يوم عملك أو يومك في الدورة: كيف تذهب؟ وماذا تفعل؟ وأين تجلس؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Ich fahre mit …', min: 30, muster: 'Ich fahre jeden Morgen mit dem Bus zum Kurs. Der Kurs beginnt um neun Uhr. Ich sitze neben meiner Freundin Hoda. Wir lernen Deutsch, und wir sprechen viel. Die Lehrerin ist sehr nett, aber wir haben viele Hausaufgaben.' }
    ] }
  ]
};
