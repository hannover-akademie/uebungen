// Netzwerk neu A2 – Kapitel 4: Große und kleine Gefühle
// Grammatik: Nebensatz mit wenn, reflexive Verben · Redemittel: Gefühle, Glückwünsche, Dank, Freude/Bedauern, beruhigen, Veranstaltung beschreiben
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 4, titel: 'Große und kleine Gefühle',
  titelAr: 'المشاعر والمناسبات والتهاني والشكر – جمل wenn والأفعال الانعكاسية',
  teile: [
    { titel: 'Wortschatz: Gefühle', anweisung: 'Wie fühlt sich die Person? Wählen Sie.', anweisungAr: 'بماذا يشعر هذا الشخص؟', typ: 'select', o: ['stolz', 'nervös', 'traurig', 'genervt', 'glücklich', 'gestresst'], items: [
      { q: 'Morgen habe ich meine Führerscheinprüfung. Ich habe ein bisschen Angst und bin sehr ___.', a: 'nervös' },
      { q: 'Mein Sohn hat das Abitur bestanden. Ich bin so ___ auf ihn!', a: 'stolz' },
      { q: 'Mein Hund ist gestorben. Ich bin sehr ___.', a: 'traurig' },
      { q: 'Der Nachbar macht schon wieder laute Musik. Ich bin total ___.', a: 'genervt' },
      { q: 'Ich arbeite jeden Tag zwölf Stunden und habe nie Pause. Ich bin total ___.', a: 'gestresst' },
      { q: 'Wir haben im Lotto gewonnen! Wir sind so ___.', a: 'glücklich' }
    ] },
    { titel: 'Wortschatz: Feste und Ereignisse', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل بين المناسبة وما يناسبها.', typ: 'match', items: [
      { q: '', pairs: [
        ['das Brautpaar', 'die Hochzeit'],
        ['die Medaille', 'der Sieg'],
        ['das Baby', 'die Geburt'],
        ['der Führerschein', 'die Prüfung bestehen'],
        ['das Feuerwerk', 'Silvester'],
        ['die Schultüte', 'der erste Schultag']
      ] }
    ] },
    { titel: 'Grammatik: Nebensatz mit wenn', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'بعد wenn يأتي الفعل في آخر الجملة. وإذا بدأت الجملة بـ wenn يأتي فعل الجملة الرئيسية بعد الفاصلة مباشرة.', typ: 'mcq', items: [
      { q: 'Ich bin nervös, wenn …', o: ['ich eine Prüfung habe.', 'ich habe eine Prüfung.', 'habe ich eine Prüfung.'], a: 'ich eine Prüfung habe.' },
      { q: 'Wenn ich mit Freunden feiern kann, …', o: ['bin ich glücklich.', 'ich bin glücklich.', 'ich glücklich bin.'], a: 'bin ich glücklich.' },
      { q: 'Wenn ich einen Horrorfilm sehe, …', o: ['habe ich Angst.', 'ich habe Angst.', 'ich Angst habe.'], a: 'habe ich Angst.' },
      { q: 'Ich freue mich, wenn …', o: ['meine Eltern mich besuchen.', 'meine Eltern besuchen mich.', 'besuchen meine Eltern mich.'], a: 'meine Eltern mich besuchen.' }
    ] },
    { titel: 'Grammatik: Sätze mit wenn bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة مع wenn.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['wenn', 'ich', 'traurig', 'bin,', 'rufe', 'ich', 'meine Schwester', 'an'], a: ['wenn ich traurig bin, rufe ich meine Schwester an'] },
      { q: 'Satz (.)', w: ['ich', 'bin', 'sauer,', 'wenn', 'der Bus', 'zu spät', 'kommt'], a: ['ich bin sauer, wenn der Bus zu spät kommt'] },
      { q: 'Satz (.)', w: ['wenn', 'es', 'regnet,', 'bleiben', 'wir', 'zu Hause'], a: ['wenn es regnet, bleiben wir zu Hause'] }
    ] },
    { titel: 'Grammatik: Reflexivpronomen', anweisung: 'Ergänzen Sie das Reflexivpronomen.', anweisungAr: 'أكمل بالضمير الانعكاسي: mich, dich, sich, uns, euch, sich.', typ: 'select', o: ['mich', 'dich', 'sich', 'uns', 'euch'], items: [
      { q: 'Ich freue ___ auf die Party.', a: 'mich' },
      { q: 'Ärgerst du ___ über deinen Bruder?', a: 'dich' },
      { q: 'Er langweilt ___ im Unterricht.', a: 'sich' },
      { q: 'Wir treffen ___ um acht vor dem Kino.', a: 'uns' },
      { q: 'Erinnert ihr ___ an unseren Urlaub?', a: 'euch' },
      { q: 'Die Kinder streiten ___ oft.', a: 'sich' },
      { q: 'Sie möchte ___ für die Geschenke bedanken.', a: 'sich' }
    ] },
    { titel: 'Grammatik: Reflexive Verben', anweisung: 'Welches Verb passt? Wählen Sie.', anweisungAr: 'اختر الفعل الانعكاسي المناسب.', typ: 'select', o: ['ausruhen', 'entschuldigen', 'unterhalten', 'entscheiden', 'wohlfühlen', 'verabschieden'], items: [
      { q: 'Nach der Arbeit möchte ich mich ein bisschen ___.', o: ['ausruhen', 'entschuldigen', 'entscheiden'], a: 'ausruhen' },
      { q: 'Ich komme zu spät. Ich möchte mich ___.', o: ['entschuldigen', 'wohlfühlen', 'unterhalten'], a: 'entschuldigen' },
      { q: 'Auf der Party habe ich mich lange mit Tim ___.', o: ['unterhalten', 'entschieden', 'ausgeruht'], a: 'unterhalten' },
      { q: 'Rot oder Blau? Ich kann mich nicht ___.', o: ['entscheiden', 'verabschieden', 'unterhalten'], a: 'entscheiden' },
      { q: 'Die Nachbarn sind nett und die Wohnung ist schön. Hier kann ich mich ___.', o: ['wohlfühlen', 'entschuldigen', 'entscheiden'], a: 'wohlfühlen' },
      { q: 'Es ist spät und unsere Gäste gehen nach Hause. Wir müssen uns jetzt ___.', o: ['verabschieden', 'entscheiden', 'wohlfühlen'], a: 'verabschieden' }
    ] },
    { titel: 'Redemittel: Glückwünsche und Dank', anweisung: 'Was sagen oder schreiben Sie? Wählen Sie.', anweisungAr: 'ماذا تقول أو تكتب في هذا الموقف؟', typ: 'mcq', items: [
      { q: 'Ihre Freunde heiraten.', o: ['Herzlichen Glückwunsch zur Hochzeit!', 'Gute Besserung!', 'So ein Pech!'], a: 'Herzlichen Glückwunsch zur Hochzeit!' },
      { q: 'Ihr Kollege hat morgen eine Prüfung.', o: ['Viel Glück!', 'Das tut mir leid.', 'Danke schön!'], a: 'Viel Glück!' },
      { q: 'Sie haben zur Geburt Ihres Babys Geschenke bekommen.', o: ['Herzlichen Dank für die Glückwünsche und Geschenke!', 'Alles Gute zum Geburtstag!', 'Keine Sorge!'], a: 'Herzlichen Dank für die Glückwünsche und Geschenke!' },
      { q: 'Ihre Freundin hat Sie zu ihrem Geburtstag eingeladen.', o: ['Tausend Dank für die Einladung!', 'Hauptsache, wir feiern jetzt.', 'Echt blöd!'], a: 'Tausend Dank für die Einladung!' }
    ] },
    { titel: 'Redemittel: Freude, Bedauern oder beruhigen?', anweisung: 'Was drückt die Person aus?', anweisungAr: 'هل يعبّر المتحدث عن فرح، أم عن أسف، أم يطمئن غيره؟', typ: 'select', o: ['Freude', 'Bedauern', 'beruhigen'], items: [
      { q: '„So ein Glück!“', a: 'Freude' },
      { q: '„Das tut mir wirklich leid.“', a: 'Bedauern' },
      { q: '„Das macht doch nichts.“', a: 'beruhigen' },
      { q: '„Ich freue mich riesig!“', a: 'Freude' },
      { q: '„So ein Pech!“', a: 'Bedauern' },
      { q: '„Keine Sorge. Es ist alles okay.“', a: 'beruhigen' },
      { q: '„Das gibt\'s doch nicht! Das ist ja toll!“', a: 'Freude' }
    ] },
    { titel: 'Redemittel: Reaktionen', anweisung: 'Welche Reaktion passt? Ordnen Sie zu.', anweisungAr: 'صِل كل خبر بردّ الفعل المناسب.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich habe die Prüfung bestanden!', 'Das ist ja toll! Herzlichen Glückwunsch!'],
        ['Ich habe deinen Geburtstag vergessen. Entschuldige!', 'Das macht doch nichts.'],
        ['Mein Laptop ist kaputt.', 'So ein Pech!'],
        ['Wir bekommen ein Baby!', 'Ich freue mich riesig für euch!']
      ] }
    ] },
    { titel: 'Lesen: Ein Fest im Norden', anweisung: 'Lesen Sie den Blog. Richtig oder falsch?', anweisungAr: 'اقرأ التدوينة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Das Hafenfest in Hamburg ist bekannt für seine Schiffe und das große Feuerwerk. Es findet immer im Mai statt und dauert drei Tage. Jedes Jahr besuchen über eine Million Menschen die Veranstaltung. Man kann dort Schiffe besichtigen, Fisch essen und Konzerte hören. Das Fest ist kostenlos, nur für einige Schiffe muss man ein Ticket kaufen. Am Samstagabend gibt es ein großes Feuerwerk über dem Hafen. Wenn das Wetter schön ist, macht das Fest besonders viel Spaß. Ich war letztes Jahr da und habe mich sehr wohlgefühlt!',
      items: [
        { q: 'Das Hafenfest findet im Mai statt.', a: true },
        { q: 'Das Fest dauert eine Woche.', a: false },
        { q: 'Man muss für das Fest Eintritt bezahlen.', a: false },
        { q: 'Am Samstagabend gibt es ein Feuerwerk.', a: true },
        { q: 'Die Autorin hat sich auf dem Fest wohlgefühlt.', a: true }
      ] },
    { titel: 'Schreiben: Glückwünsche und Dank', anweisung: 'Ihre Freunde Sara und Ali haben geheiratet. Sie konnten nicht zur Hochzeit kommen. Schreiben Sie eine Karte (60–80 Wörter): Gratulieren Sie. Entschuldigen Sie sich und nennen Sie den Grund (weil …). Erzählen Sie, wie Sie sich gefühlt haben. Machen Sie einen Vorschlag für ein Treffen.', anweisungAr: 'تزوّج صديقاك سارة وعلي ولم تستطع حضور الحفل. اكتب بطاقة (60–80 كلمة): هنّئهما، واعتذر واذكر السبب، وصِف شعورك، واقترح موعدًا للقاء. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe Sara, lieber Ali,\nHerzlichen Glückwunsch zur Hochzeit! / Wir gratulieren euch sehr herzlich zu …\nEs tut mir (wirklich) leid, dass … / Leider konnte ich nicht kommen, weil …\nIch war traurig, weil … / Ich freue mich so für euch!\nHabt ihr Lust, …? / Wenn ihr Zeit habt, …\nAlles Liebe / Liebe Grüße',
      items: [
        { q: 'Liebe Sara, lieber Ali, …', min: 55, muster: 'Liebe Sara, lieber Ali,\nherzlichen Glückwunsch zur Hochzeit! Ich freue mich so für euch! Es tut mir wirklich leid, dass ich nicht kommen konnte. Ich hatte am Samstag eine wichtige Prüfung in Berlin. Ich war sehr traurig, weil ich euren großen Tag verpasst habe. Mona hat mir aber schon viele Fotos gezeigt. Die Feier war wunderschön! Wenn ihr wieder aus dem Urlaub zurück seid, lade ich euch zum Essen ein. Habt ihr am 20. Juni Zeit?\nAlles Liebe\neure Nadia' }
    ] }
  ]
};
