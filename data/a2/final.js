// Netzwerk neu A2 – Finaltest (Kapitel 1–12)
// Aufbau: A Wortschatz & Redemittel · B Grammatik · C Lesen (wie Goethe-Zertifikat A2) · D Schreiben (SMS + E-Mail)
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 'Final', label: 'Finaltest A2', titel: 'Abschlusstest Kapitel 1–12',
  titelAr: 'الامتحان النهائي لمستوى A2: مفردات وعبارات، وقواعد، وقراءة، وكتابة',
  hinweis: 'Dauer: ca. 75 Minuten · Teil A Wortschatz und Redemittel · Teil B Grammatik · Teil C Lesen · Teil D Schreiben\nArbeiten Sie allein und ohne Wörterbuch. Bestanden ab 60 %.',
  hinweisAr: 'المدة نحو 75 دقيقة. أجب بمفردك ودون قاموس. درجة النجاح 60٪.',
  teile: [
    // ---------------- A WORTSCHATZ UND REDEMITTEL ----------------
    { teil: 'A1', titel: 'Wortschatz: Was passt nicht?', anweisung: 'Welches Wort passt nicht in die Gruppe?', anweisungAr: 'أيّ كلمة لا تنتمي إلى المجموعة؟', typ: 'mcq', items: [
      { q: 'Schule', o: ['das Parkhaus', 'das Zeugnis', 'das Abitur', 'der Stundenplan'], a: 'das Parkhaus' },
      { q: 'Medien', o: ['die Ehe', 'die Tastatur', 'der Bildschirm', 'der Lautsprecher'], a: 'die Ehe' },
      { q: 'Gefühle', o: ['möbliert', 'stolz', 'nervös', 'genervt'], a: 'möbliert' },
      { q: 'Bahnreisen', o: ['der Klettergurt', 'der Schalter', 'die Durchsage', 'die Ermäßigung'], a: 'der Klettergurt' },
      { q: 'Sport', o: ['die Nebenkosten', 'die Mannschaft', 'das Tor', 'der Wettbewerb'], a: 'die Nebenkosten' },
      { q: 'Musik', o: ['der Antrag', 'das Festival', 'der Hit', 'die Stimmung'], a: 'der Antrag' }
    ] },
    { teil: 'A2', titel: 'Wortschatz: Verben', anweisung: 'Ergänzen Sie das passende Verb.', anweisungAr: 'أكمل بالفعل المناسب.', typ: 'select', o: ['herunterladen', 'bewerben', 'umsteigen', 'sparen', 'gießen', 'sperren'], items: [
      { q: 'Ich möchte mich um die Stelle als Verkäuferin ___.', a: 'bewerben' },
      { q: 'Der Zug fährt nicht direkt. Wir müssen in Köln ___.', a: 'umsteigen' },
      { q: 'Kannst du die App auf dein Handy ___?', a: 'herunterladen' },
      { q: 'Wir möchten ein Auto kaufen und müssen Geld ___.', a: 'sparen' },
      { q: 'Meine Bankkarte ist weg! Ich muss sie sofort ___ lassen.', a: 'sperren' },
      { q: 'Könnten Sie im Urlaub meine Blumen ___?', a: 'gießen' }
    ] },
    { teil: 'A3', titel: 'Redemittel: Was sagen Sie?', anweisung: 'Was passt in der Situation? Wählen Sie.', anweisungAr: 'ماذا تقول في هذا الموقف؟', typ: 'mcq', items: [
      { q: 'Ihre Freunde haben geheiratet.', o: ['Herzlichen Glückwunsch zur Hochzeit!', 'Gute Besserung!', 'So ein Mist!'], a: 'Herzlichen Glückwunsch zur Hochzeit!' },
      { q: 'Ihr Kollege hat Ihren Termin vergessen und entschuldigt sich.', o: ['Das macht doch nichts.', 'Das gibt\'s doch nicht!', 'Einfach, bitte.'], a: 'Das macht doch nichts.' },
      { q: 'Ihr Nachbar hört jede Nacht sehr laut Musik.', o: ['Es stört mich, wenn Sie nachts so laut sind.', 'Ich freue mich riesig.', 'Das kommt nicht mehr vor.'], a: 'Es stört mich, wenn Sie nachts so laut sind.' },
      { q: 'Sie sind am Fahrkartenschalter.', o: ['Eine Fahrkarte nach Köln, bitte. Hin und zurück.', 'Möchten Sie einen Platz reservieren?', 'Haben Sie eine BahnCard?'], a: 'Eine Fahrkarte nach Köln, bitte. Hin und zurück.' },
      { q: 'Ein Freund schlägt eine Radtour vor, aber Sie möchten lieber schwimmen.', o: ['Wollen wir nicht lieber schwimmen gehen?', 'Okay, das machen wir.', 'Wahnsinn! Das war großartig.'], a: 'Wollen wir nicht lieber schwimmen gehen?' },
      { q: 'Sie möchten den Nachbarn um Hilfe bitten.', o: ['Könnten Sie mir einen Gefallen tun?', 'Das sehe ich anders.', 'Kurz gesagt: …'], a: 'Könnten Sie mir einen Gefallen tun?' }
    ] },
    { teil: 'A4', titel: 'Redemittel: Meinung, Zustimmung, Ablehnung', anweisung: 'Was drückt die Person aus?', anweisungAr: 'ماذا يعبّر المتحدث: رأيًا، أم موافقة، أم رفضًا؟', typ: 'select', o: ['Meinung', 'zustimmen', 'ablehnen'], items: [
      { q: '„Ich bin der Meinung, dass man mehr Rad fahren sollte.“', a: 'Meinung' },
      { q: '„Das stimmt. Genau.“', a: 'zustimmen' },
      { q: '„So einfach ist das nicht.“', a: 'ablehnen' },
      { q: '„Ich finde es wichtig, dass Kinder Sport machen.“', a: 'Meinung' },
      { q: '„Das sehe ich anders.“', a: 'ablehnen' }
    ] },
    // ---------------- B GRAMMATIK ----------------
    { teil: 'B1', titel: 'Grammatik: Vergangenheit', anweisung: 'Schreiben Sie das Verb im Perfekt (Partizip) oder im Präteritum.', anweisungAr: 'اكتب الفعل بصيغة الماضي المطلوبة.', typ: 'gap', items: [
      { q: 'Wir sind letztes Jahr nach Hamburg ___. (umziehen, Partizip)', a: ['umgezogen'] },
      { q: 'Ich habe meinen Mann in Kairo ___. (kennenlernen, Partizip)', a: ['kennengelernt'] },
      { q: 'Sie hat Medizin ___. (studieren, Partizip)', a: ['studiert'] },
      { q: 'Früher ___ ich jeden Tag um sechs Uhr aufstehen. (müssen, Präteritum)', a: ['musste'] },
      { q: 'Als Kind ___ er nicht allein schwimmen gehen. (dürfen, Präteritum)', a: ['durfte'] },
      { q: 'Letztes Jahr ___ sie arbeitslos. (werden, Präteritum)', a: ['wurde'] }
    ] },
    { teil: 'B2', titel: 'Grammatik: Vergleiche', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة للمقارنة.', typ: 'select', items: [
      { q: 'Das Tablet ist ___ als der Laptop.', o: ['leichter', 'leicht', 'am leichtesten'], a: 'leichter' },
      { q: 'Der Laptop ist nicht so leicht ___ das Tablet.', o: ['wie', 'als', 'dann'], a: 'wie' },
      { q: 'Am ___ sehe ich Komödien.', o: ['liebsten', 'lieber', 'gernsten'], a: 'liebsten' },
      { q: 'Mein Bruder verdient ___ als ich.', o: ['mehr', 'viel', 'am meisten'], a: 'mehr' },
      { q: 'Das ist der ___ Film des Jahres.', o: ['beste', 'besser', 'gute'], a: 'beste' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Nebensätze', anweisung: 'Ergänzen Sie den passenden Konnektor.', anweisungAr: 'أكمل بأداة الربط المناسبة.', typ: 'select', o: ['weil', 'dass', 'wenn', 'als', 'ob'], items: [
      { q: 'Ich komme später, ___ ich noch arbeiten muss.', a: 'weil' },
      { q: 'Ich finde es gut, ___ es mehr Radwege gibt.', a: 'dass' },
      { q: 'Ich trinke immer einen Tee, ___ ich nervös bin.', a: 'wenn' },
      { q: 'Ich habe den Führerschein gemacht, ___ ich 18 Jahre alt war.', a: 'als' },
      { q: 'Können Sie mir sagen, ___ der Zug pünktlich ist?', a: 'ob' },
      { q: 'Er ist froh, ___ er die Prüfung bestanden hat.', a: 'dass' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Adjektivendungen', anweisung: 'Ergänzen Sie die Endung.', anweisungAr: 'أكمل نهاية الصفة.', typ: 'select', items: [
      { q: 'Ich nehme den schwarz___ Rock.', o: ['en', 'e', 'er'], a: 'en' },
      { q: 'Das ist ein interessant___ Beruf.', o: ['er', 'en', 'e'], a: 'er' },
      { q: 'Sie wohnt in einer groß___ Stadt.', o: ['en', 'e', 'er'], a: 'en' },
      { q: 'Das weiß___ T-Shirt gefällt mir.', o: ['e', 'en', 'es'], a: 'e' },
      { q: 'Wir haben ein neu___ Auto gekauft.', o: ['es', 'en', 'e'], a: 'es' },
      { q: 'Er spricht mit dem neu___ Kollegen.', o: ['en', 'e', 'em'], a: 'en' }
    ] },
    { teil: 'B5', titel: 'Grammatik: Reflexive Verben und Verben mit Präposition', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة.', typ: 'select', items: [
      { q: 'Ich freue ___ auf den Urlaub.', o: ['mich', 'mir', 'sich'], a: 'mich' },
      { q: 'Wir treffen ___ um acht am Kino.', o: ['uns', 'euch', 'sich'], a: 'uns' },
      { q: 'Sie interessiert sich ___ Musik.', o: ['für', 'auf', 'an'], a: 'für' },
      { q: 'Er erinnert sich ___ seine Schulzeit.', o: ['an', 'über', 'mit'], a: 'an' },
      { q: '___ wartest du? – Auf den Bus.', o: ['Worauf', 'Wofür', 'Auf wen'], a: 'Worauf' },
      { q: '___ hast du gesprochen? – Mit meiner Lehrerin.', o: ['Mit wem', 'Womit', 'Wem'], a: 'Mit wem' }
    ] },
    { teil: 'B6', titel: 'Grammatik: Konjunktiv II', anweisung: 'Schreiben Sie die richtige Form.', anweisungAr: 'اكتب صيغة Konjunktiv II المناسبة.', typ: 'gap', items: [
      { q: '___ Sie mir bitte helfen? (können)', a: ['Könnten', 'Koennten'] },
      { q: 'Du ___ mehr Pausen machen. (sollen, Ratschlag)', a: ['solltest'] },
      { q: 'Ich ___ gern mehr Zeit. (haben)', a: ['hätte', 'haette'] },
      { q: 'Wir ___ jetzt gern am Meer. (sein)', a: ['wären', 'waeren'] },
      { q: 'An deiner Stelle ___ ich mit dem Chef sprechen.', a: ['würde', 'wuerde'] },
      { q: '___ du mir bitte das Salz geben? (würde)', a: ['Würdest', 'Wuerdest'] }
    ] },
    { teil: 'B7', titel: 'Grammatik: Wo? und Wohin?', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة: مكان ثابت أم حركة؟', typ: 'select', items: [
      { q: 'Ich stelle das Fahrrad in ___ Keller.', o: ['den', 'dem', 'der'], a: 'den' },
      { q: 'Das Fahrrad steht im Keller. Die Lampe ___ auf dem Tisch.', o: ['steht', 'stellt', 'legt'], a: 'steht' },
      { q: 'Er ___ das Buch auf das Regal.', o: ['legt', 'liegt', 'steht'], a: 'legt' },
      { q: 'Das Poster hängt an ___ Wand.', o: ['der', 'die', 'den'], a: 'der' },
      { q: 'Wir gehen durch ___ Park.', o: ['den', 'dem', 'der'], a: 'den' },
      { q: 'Die Post ist gegenüber ___ Bahnhof.', o: ['vom', 'den', 'dem von'], a: 'vom' }
    ] },
    { teil: 'B8', titel: 'Grammatik: deshalb, trotzdem und Satzbau', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة.', typ: 'select', items: [
      { q: 'Es regnet, ___ bleiben wir zu Hause.', o: ['deshalb', 'trotzdem', 'weil'], a: 'deshalb' },
      { q: 'Er ist müde, ___ geht er joggen.', o: ['trotzdem', 'deshalb', 'obwohl'], a: 'trotzdem' },
      { q: 'Ich schenke ___ einen Schal. (meine Mutter)', o: ['meiner Mutter', 'meine Mutter', 'meinem Mutter'], a: 'meiner Mutter' },
      { q: 'Der Schal? Ich schenke ___ meiner Mutter.', o: ['ihn', 'ihm', 'er'], a: 'ihn' },
      { q: 'Was für ___ Auto hast du?', o: ['ein', 'einen', 'eine'], a: 'ein' }
    ] },
    { teil: 'B9', titel: 'Grammatik: Relativsätze und Pronomen', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة.', typ: 'select', items: [
      { q: 'Das ist der Sänger, ___ ich so gut finde.', o: ['den', 'der', 'dem'], a: 'den' },
      { q: 'Das ist die Frau, ___ neben mir wohnt.', o: ['die', 'der', 'den'], a: 'die' },
      { q: 'Wo ist das Buch, ___ du gekauft hast?', o: ['das', 'den', 'die'], a: 'das' },
      { q: 'Ich habe ___ gesehen. Niemand war da.', o: ['niemanden', 'jemanden', 'alles'], a: 'niemanden' },
      { q: 'Hast du ___ für das Picknick? – Ja, ich habe alles.', o: ['alles', 'nichts', 'niemand'], a: 'alles' },
      { q: 'Mein Sohn möchte Pilot ___.', o: ['werden', 'wird', 'geworden'], a: 'werden' }
    ] },
    { teil: 'B10', titel: 'Grammatik: Sätze bauen', anweisung: 'Klicken Sie die Wörter in der richtigen Reihenfolge.', anweisungAr: 'رتّب الكلمات لتكوّن جملة صحيحة.', typ: 'words', items: [
      { q: 'Indirekte Frage (?)', w: ['können Sie mir sagen,', 'wann', 'der Bus', 'kommt'], a: ['können Sie mir sagen, wann der Bus kommt'] },
      { q: 'Relativsatz (.)', w: ['das ist die Band,', 'die', 'heute', 'spielt'], a: ['das ist die Band, die heute spielt'] },
      { q: 'Nebensatz (.)', w: ['ich lerne Deutsch,', 'weil', 'ich', 'hier', 'arbeiten', 'möchte'], a: ['ich lerne Deutsch, weil ich hier arbeiten möchte'] },
      { q: 'trotzdem (.)', w: ['es war kalt,', 'trotzdem', 'sind', 'wir', 'geschwommen'], a: ['es war kalt, trotzdem sind wir geschwommen'] }
    ] },
    // ---------------- C LESEN ----------------
    { teil: 'C1', titel: 'Lesen: Ein Zeitungsartikel', anweisung: 'Lesen Sie den Text. Welche Antwort ist richtig?', anweisungAr: 'اقرأ المقال. ما الإجابة الصحيحة؟', typ: 'mcq',
      text: 'Reparieren statt wegwerfen\nJeden ersten Samstag im Monat ist im Stadtteilzentrum Linden das „Repair-Café“ geöffnet. Freiwillige helfen den Besuchern, kaputte Sachen zu reparieren: Lampen, Kaffeemaschinen, Fahrräder oder Kleidung. Die Hilfe ist kostenlos, aber man kann etwas für den Verein spenden. „Viele Leute werfen ihre Sachen zu schnell weg“, sagt Organisatorin Petra Lang. „Bei uns lernen sie, dass man vieles selbst reparieren kann.“ Werkzeug gibt es vor Ort. Wer Kaffee und Kuchen möchte, bezahlt nur zwei Euro. Eine Anmeldung ist nicht nötig.',
      items: [
        { q: 'Das Repair-Café ist …', o: ['einmal im Monat geöffnet.', 'jeden Samstag geöffnet.', 'jeden Tag geöffnet.'], a: 'einmal im Monat geöffnet.' },
        { q: 'Die Reparatur …', o: ['kostet nichts.', 'kostet zwei Euro.', 'muss man vorher bezahlen.'], a: 'kostet nichts.' },
        { q: 'Werkzeug …', o: ['bekommt man im Repair-Café.', 'muss man mitbringen.', 'kann man dort kaufen.'], a: 'bekommt man im Repair-Café.' },
        { q: 'Man muss sich …', o: ['nicht anmelden.', 'online anmelden.', 'telefonisch anmelden.'], a: 'nicht anmelden.' }
      ] },
    { teil: 'C2', titel: 'Lesen: Im Kaufhaus', anweisung: 'Lesen Sie die Informationstafel. In welches Stockwerk gehen Sie?', anweisungAr: 'اقرأ لوحة المعلومات. إلى أيّ طابق تذهب؟', typ: 'mcq',
      text: 'Kaufhaus Kröpcke – Wegweiser\nUntergeschoss: Lebensmittel · Getränke · Backwaren\nErdgeschoss: Kosmetik · Schmuck · Taschen · Information\n1. Stock: Damenmode · Schuhe\n2. Stock: Herrenmode · Sportbekleidung · Sportgeräte\n3. Stock: Elektronik · Handys · Computer · Spielwaren\n4. Stock: Haushalt · Geschirr · Restaurant mit Dachterrasse',
      items: [
        { q: 'Sie möchten einen neuen Laptop kaufen.', o: ['3. Stock', '2. Stock', 'Erdgeschoss'], a: '3. Stock' },
        { q: 'Sie brauchen einen Tennisschläger.', o: ['2. Stock', '1. Stock', '4. Stock'], a: '2. Stock' },
        { q: 'Sie möchten Brot und Saft kaufen.', o: ['Untergeschoss', 'Erdgeschoss', '4. Stock'], a: 'Untergeschoss' },
        { q: 'Sie möchten zu Mittag essen.', o: ['4. Stock', 'Untergeschoss', '1. Stock'], a: '4. Stock' }
      ] },
    { teil: 'C3', titel: 'Lesen: Eine E-Mail', anweisung: 'Lesen Sie die E-Mail. Richtig oder falsch?', anweisungAr: 'اقرأ الرسالة الإلكترونية. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Liebe Hoda,\nwie geht es dir? Stell dir vor: Ich habe die Stelle im Hotel bekommen! Als ich die E-Mail gelesen habe, war ich so glücklich. Ich fange am 1. September an. Leider muss ich auch am Wochenende arbeiten, trotzdem freue ich mich sehr. Das Hotel liegt direkt am Hafen, deshalb kann ich mit dem Fahrrad hinfahren. Am Samstag, den 23. August, mache ich eine kleine Party. Ich würde mich sehr freuen, wenn du kommst! Könntest du einen Salat mitbringen?\nLiebe Grüße\nNadia',
      items: [
        { q: 'Nadia hat eine neue Arbeitsstelle.', a: true },
        { q: 'Sie beginnt im August mit der Arbeit.', a: false },
        { q: 'Nadia muss nicht am Wochenende arbeiten.', a: false },
        { q: 'Nadia fährt mit dem Fahrrad zur Arbeit.', a: true },
        { q: 'Hoda soll etwas zum Essen mitbringen.', a: true }
      ] },
    // ---------------- D SCHREIBEN ----------------
    { teil: 'D1', titel: 'Schreiben: Eine SMS', anweisung: 'Sie sind mit Ihrem Freund Tarek um 18 Uhr im Kino verabredet. Sie kommen zu spät. Schreiben Sie Tarek eine SMS (20–30 Wörter): Entschuldigen Sie sich. Warum kommen Sie später? Wann sind Sie da?', anweisungAr: 'لديك موعد مع صديقك طارق في السينما الساعة السادسة، وستتأخر. اكتب له رسالة قصيرة (20–30 كلمة): اعتذر، واذكر سبب التأخير، ومتى ستصل. سيصحّح المحاضر هذا الجزء.', typ: 'write', items: [
      { q: 'Hallo Tarek, …', min: 18, muster: 'Hallo Tarek, es tut mir leid, ich komme etwa 20 Minuten später, weil mein Bus Verspätung hat. Ich bin um 18:20 Uhr da. Kannst du schon die Tickets kaufen? Bis gleich! Ali' }
    ] },
    { teil: 'D2', titel: 'Schreiben: Eine E-Mail', anweisung: 'Ihre Kursleiterin, Frau Wagner, hat Sie zu einem Grillfest des Kurses eingeladen. Schreiben Sie Frau Wagner eine E-Mail (30–40 Wörter): Bedanken Sie sich für die Einladung. Sagen Sie, dass Sie kommen. Fragen Sie, was Sie mitbringen sollen.', anweisungAr: 'دعتك محاضرتك السيدة Wagner إلى حفل شواء للدورة. اكتب لها رسالة إلكترونية (30–40 كلمة): اشكرها على الدعوة، وأخبرها أنك ستحضر، واسألها ماذا تُحضر معك. سيصحّح المحاضر هذا الجزء.', typ: 'write', items: [
      { q: 'Liebe Frau Wagner, …', min: 28, muster: 'Liebe Frau Wagner,\nvielen Dank für die Einladung zum Grillfest! Ich komme sehr gern, und meine Frau kommt auch mit. Was sollen wir mitbringen? Wir könnten einen Salat oder einen Kuchen machen.\nViele Grüße\nOmar Hassan' }
    ] }
  ]
};
