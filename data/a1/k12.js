// Netzwerk neu A1 – Kapitel 12: Ab in den Urlaub!
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 12, titel: 'Ab in den Urlaub!',
  titelAr: 'العطلة والسفر والطقس والاتجاهات – man و denn و Wer/Wen/Wem/Was وحروف الجر الزمنية',
  teile: [
    { titel: 'Urlaub', anweisung: 'Was nehmen Sie mit? Wählen Sie.', anweisungAr: 'ماذا ستأخذ معك؟', typ: 'mcq', items: [
      { q: 'Badeurlaub am Strand:', o: ['den Badeanzug', 'den Schlafsack', 'die Regenjacke'], a: 'den Badeanzug' },
      { q: 'Campingurlaub:', o: ['das Zelt', 'das Doppelzimmer', 'die Krawatte'], a: 'das Zelt' },
      { q: 'Stadturlaub in einer fremden Stadt:', o: ['den Reiseführer', 'die Taucherbrille', 'das Geschirr'], a: 'den Reiseführer' },
      { q: 'Es ist sehr sonnig:', o: ['die Sonnenbrille', 'den Regenschirm', 'die Mütze'], a: 'die Sonnenbrille' },
      { q: 'Für die Reise ins Ausland braucht man:', o: ['den Pass', 'den Kühlschrank', 'die Seife'], a: 'den Pass' }
    ] },
    { titel: 'Im Hotel', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل بين أجزاء الجمل في الفندق.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich habe ein Zimmer', 'reserviert. Mein Name ist Saleh.'],
        ['Möchten Sie ein Einzelzimmer', 'oder ein Doppelzimmer?'],
        ['Kann ich', 'mit Karte zahlen?'],
        ['Ihren Ausweis,', 'bitte.']
      ] }
    ] },
    { titel: 'Unterwegs', anweisung: 'Ergänzen Sie das Verb.', anweisungAr: 'أكمل بالفعل المناسب.', typ: 'select', o: ['einsteigen', 'umsteigen', 'aussteigen', 'verpassen', 'abfahren'], items: [
      { q: 'Der Zug kommt. Wir müssen schnell ___.', a: 'einsteigen' },
      { q: 'Es gibt keinen direkten Zug. Wir müssen in Köln ___.', a: 'umsteigen' },
      { q: 'Am Marktplatz müssen Sie ___. Dann sind Sie da.', a: 'aussteigen' },
      { q: 'Schnell! Wir dürfen den Bus nicht ___!', a: 'verpassen' },
      { q: 'Der Zug soll um 8:15 Uhr ___.', a: 'abfahren' }
    ] },
    { titel: 'Das Wetter', anweisung: 'Wie ist das Wetter? Wählen Sie.', anweisungAr: 'كيف حال الطقس؟', typ: 'select', o: ['sonnig', 'bewölkt', 'windig', 'Es regnet.', 'Es schneit.'], items: [
      { q: 'Die Sonne scheint. Es ist ___.', a: 'sonnig' },
      { q: 'Es gibt viele Wolken. Es ist ___.', a: 'bewölkt' },
      { q: 'Wir brauchen einen Regenschirm. ___', a: 'Es regnet.' },
      { q: 'Es ist minus fünf Grad und alles ist weiß. ___', a: 'Es schneit.' },
      { q: 'Es gibt viel Wind. Es ist ___.', a: 'windig' }
    ] },
    { titel: 'Himmelsrichtungen', anweisung: 'Wo liegt die Stadt in Deutschland? Wählen Sie.', anweisungAr: 'أين تقع هذه المدينة في ألمانيا؟', typ: 'select', o: ['im Norden', 'im Süden', 'im Osten', 'im Westen'], items: [
      { q: 'Hamburg liegt ___.', a: 'im Norden' },
      { q: 'München liegt ___.', a: 'im Süden' },
      { q: 'Köln liegt ___.', a: 'im Westen' },
      { q: 'Dresden liegt ___.', a: 'im Osten' }
    ] },
    { titel: 'Das Pronomen man', anweisung: 'Was kann man hier machen? Ordnen Sie zu.', anweisungAr: 'man = المرء / الناس. صِل بين أجزاء الجمل.', typ: 'match', items: [
      { q: '', pairs: [
        ['Am Strand kann man', 'schwimmen.'],
        ['In den Bergen kann man', 'wandern.'],
        ['Im Museum kann man', 'Bilder sehen.'],
        ['Im Zoo kann man', 'Tiere sehen.']
      ] }
    ] },
    { titel: 'Sätze mit denn', anweisung: 'Was passt? Wählen Sie den Grund.', anweisungAr: 'denn = لأنّ (ويبقى الفعل بعدها في الموقع الثاني).', typ: 'mcq', items: [
      { q: 'Wir fahren ans Meer, denn …', o: ['wir möchten schwimmen.', 'wir möchten Ski fahren.', 'es schneit.'], a: 'wir möchten schwimmen.' },
      { q: 'Ich nehme einen Regenschirm mit, denn …', o: ['es regnet.', 'es ist sonnig.', 'ich habe Hunger.'], a: 'es regnet.' },
      { q: 'Wir übernachten in der Jugendherberge, denn …', o: ['sie ist billig.', 'sie ist sehr teuer.', 'sie ist kaputt.'], a: 'sie ist billig.' },
      { q: 'Zürich ist toll, denn …', o: ['man kann hier viel machen.', 'man kann hier nichts machen.', 'es liegt im Norden.'], a: 'man kann hier viel machen.' }
    ] },
    { titel: 'Wer, wen, wem oder was?', anweisung: 'Ergänzen Sie das Fragewort.', anweisungAr: 'Wer = مَن (فاعل)، Wen = مَن (مفعول به، Akkusativ)، Wem = لِمَن (Dativ)، Was = ماذا.', typ: 'select', o: ['Wer', 'Wen', 'Wem', 'Was'], items: [
      { q: '___ besuchst du in Berlin? – Meine Tante.', a: 'Wen' },
      { q: '___ fährt mit nach Wien? – Mein Bruder.', a: 'Wer' },
      { q: '___ gehört der Koffer? – Mir.', a: 'Wem' },
      { q: '___ machst du im Urlaub? – Ich wandere.', a: 'Was' },
      { q: '___ schreibst du eine Postkarte? – Meiner Oma.', a: 'Wem' },
      { q: '___ fragst du nach dem Weg? – Den Polizisten.', a: 'Wen' }
    ] },
    { titel: 'Zeitangaben mit Dativ', anweisung: 'Ergänzen Sie die Präposition.', anweisungAr: 'vor = قبل، nach = بعد، in = بعد (في المستقبل)، seit = منذ (والحدث مستمر).', typ: 'select', o: ['vor', 'nach', 'in', 'seit'], items: [
      { q: 'Wir gehen ___ dem Frühstück an den Strand. (zuerst Frühstück, dann Strand)', a: 'nach' },
      { q: 'Wir sind ___ zwei Tagen in Wien. (vor zwei Tagen angekommen, wir sind noch da)', a: 'seit' },
      { q: '___ einer Woche fahren wir nach Hause. (in der Zukunft)', a: 'in' },
      { q: 'Ich putze die Zähne ___ dem Schlafen. (zuerst Zähne, dann schlafen)', a: 'vor' }
    ] },
    { titel: 'Einen Weg beschreiben', anweisung: 'Lesen Sie die Wegbeschreibung. Richtig oder falsch?', anweisungAr: 'اقرأ وصف الطريق. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Hallo Lena! So kommst du vom Bahnhof zu unserem Hotel: Nimm die S-Bahn Nummer 3. Sie fährt alle zehn Minuten. Am Marktplatz steigst du aus. Dann gehst du geradeaus bis zur Ecke und dann links. Das Hotel liegt gegenüber vom Park. Es liegt etwas außerhalb, aber es ist sehr schön und ruhig. Bis bald! Jonas',
      items: [
        { q: 'Lena soll die S-Bahn Nummer 3 nehmen.', a: true },
        { q: 'Die S-Bahn fährt jede Stunde.', a: false },
        { q: 'Lena steigt am Marktplatz aus.', a: true },
        { q: 'An der Ecke geht sie rechts.', a: false },
        { q: 'Das Hotel liegt gegenüber vom Park.', a: true }
      ] },
    { titel: 'Lesen: Eine Postkarte', anweisung: 'Lesen Sie die Postkarte. Richtig oder falsch?', anweisungAr: 'اقرأ البطاقة البريدية. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Liebe Oma,\nviele Grüße aus Österreich! Wir sind seit einer Woche in den Bergen. Wir wohnen in einer Pension in einem kleinen Dorf. Das Wetter ist super: Die Sonne scheint jeden Tag, nur am Montag hat es geregnet. Wir wandern viel, und gestern sind wir mit der Seilbahn gefahren. Der Ausblick war wunderbar! Am Samstag fahren wir zurück.\nDeine Mia',
      items: [
        { q: 'Mia macht Urlaub am Meer.', a: false },
        { q: 'Sie wohnt in einer Pension.', a: true },
        { q: 'Es hat jeden Tag geregnet.', a: false },
        { q: 'Mia wandert viel.', a: true },
        { q: 'Mia fährt am Sonntag zurück.', a: false }
      ] },
    { titel: 'Schreiben: Eine Postkarte', anweisung: 'Sie sind im Urlaub. Schreiben Sie eine Postkarte: Wo sind Sie? Wo wohnen Sie? Wie ist das Wetter? Was machen Sie? (ca. 35 Wörter)', anweisungAr: 'أنت في عطلة. اكتب بطاقة بريدية: أين أنت؟ وأين تقيم؟ وكيف الطقس؟ وماذا تفعل؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Liebe … / Lieber …', min: 30, muster: 'Lieber Karim,\nviele Grüße aus Hurghada! Ich bin seit drei Tagen hier. Wir wohnen in einem Hotel direkt am Strand. Das Wetter ist super: Es ist sonnig und warm. Jeden Tag schwimmen wir im Meer. Am Freitag fahren wir zurück.\nBis bald!\nDein Ahmed' }
    ] }
  ]
};
