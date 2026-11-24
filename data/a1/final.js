// Netzwerk neu A1 – Finaltest (Kapitel 1–12)
// Aufbau: A Wortschatz · B Grammatik · C Lesen (wie Goethe Start Deutsch 1) · D Schreiben
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 'Final', label: 'Finaltest A1', titel: 'Abschlusstest Kapitel 1–12',
  titelAr: 'الامتحان النهائي لمستوى A1: مفردات وقواعد وقراءة وكتابة',
  hinweis: 'Dauer: ca. 60 Minuten · Teil A Wortschatz · Teil B Grammatik · Teil C Lesen · Teil D Schreiben\nArbeiten Sie allein und ohne Wörterbuch. Bestanden ab 60 %.',
  hinweisAr: 'المدة نحو 60 دقيقة. أجب بمفردك ودون قاموس. درجة النجاح 60٪.',
  teile: [
    // ---------------- A WORTSCHATZ ----------------
    { teil: 'A1', titel: 'Wortschatz: Was passt nicht?', anweisung: 'Welches Wort passt nicht in die Gruppe?', anweisungAr: 'أيّ كلمة لا تنتمي إلى المجموعة؟', typ: 'mcq', items: [
      { q: 'Familie', o: ['der Schrank', 'die Tante', 'der Bruder', 'die Großmutter'], a: 'der Schrank' },
      { q: 'Körper', o: ['der Herd', 'der Kopf', 'der Bauch', 'das Bein'], a: 'der Herd' },
      { q: 'Kleidung', o: ['die Gurke', 'der Mantel', 'die Bluse', 'der Rock'], a: 'die Gurke' },
      { q: 'Wetter', o: ['pünktlich', 'sonnig', 'bewölkt', 'windig'], a: 'pünktlich' },
      { q: 'Verkehrsmittel', o: ['die Brücke', 'die U-Bahn', 'das Schiff', 'der Zug'], a: 'die Brücke' },
      { q: 'Möbel', o: ['die Apotheke', 'das Sofa', 'das Regal', 'der Sessel'], a: 'die Apotheke' }
    ] },
    { teil: 'A2', titel: 'Wortschatz: Wo macht man das?', anweisung: 'Ordnen Sie zu.', anweisungAr: 'أين نفعل ذلك؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Brot und Brötchen kaufen', 'in der Bäckerei'],
        ['Geld holen', 'am Automaten'],
        ['einen Zug nehmen', 'am Bahnhof'],
        ['ein Rezept bekommen', 'beim Arzt'],
        ['im Urlaub übernachten', 'im Hotel'],
        ['eine Hose anprobieren', 'im Kaufhaus']
      ] }
    ] },
    { teil: 'A3', titel: 'Wortschatz: Gegenteile', anweisung: 'Was ist das Gegenteil? Ordnen Sie zu.', anweisungAr: 'صِل كل كلمة بضدّها.', typ: 'match', items: [
      { q: '', pairs: [
        ['groß', 'klein'],
        ['teuer', 'billig'],
        ['hell', 'dunkel'],
        ['früh', 'spät'],
        ['links', 'rechts'],
        ['kalt', 'warm']
      ] }
    ] },
    { teil: 'A4', titel: 'Wortschatz: Zahlen und Zeit', anweisung: 'Was ist richtig?', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: '14:45 Uhr', o: ['Viertel vor drei', 'Viertel nach zwei', 'halb drei'], a: 'Viertel vor drei' },
      { q: '47', o: ['siebenundvierzig', 'vierundsiebzig', 'siebzehn'], a: 'siebenundvierzig' },
      { q: '3. März', o: ['der dritte März', 'der drei März', 'der dreite März'], a: 'der dritte März' },
      { q: '13:30 Uhr', o: ['halb zwei', 'halb eins', 'drei nach halb'], a: 'halb zwei' },
      { q: 'Juni, Juli, August', o: ['der Sommer', 'der Winter', 'der Herbst'], a: 'der Sommer' }
    ] },
    { teil: 'A5', titel: 'Wortschatz: Situationen', anweisung: 'Was sagen Sie? Wählen Sie.', anweisungAr: 'ماذا تقول في هذا الموقف؟', typ: 'mcq', items: [
      { q: 'Ihre Freundin hat Geburtstag.', o: ['Herzlichen Glückwunsch!', 'Gute Besserung!', 'Guten Appetit!'], a: 'Herzlichen Glückwunsch!' },
      { q: 'Ihr Kollege ist krank.', o: ['Gute Besserung!', 'Viel Spaß!', 'Gleichfalls!'], a: 'Gute Besserung!' },
      { q: 'Sie möchten im Restaurant bezahlen.', o: ['Die Rechnung, bitte.', 'Die Speisekarte, bitte.', 'Guten Appetit!'], a: 'Die Rechnung, bitte.' },
      { q: 'Sie verstehen den Mann nicht.', o: ['Wie bitte? Können Sie das wiederholen?', 'Danke, gut.', 'Bis bald!'], a: 'Wie bitte? Können Sie das wiederholen?' },
      { q: 'Sie beenden ein Telefongespräch.', o: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Gute Nacht!'], a: 'Auf Wiederhören!' }
    ] },
    // ---------------- B GRAMMATIK ----------------
    { teil: 'B1', titel: 'Grammatik: Verben', anweisung: 'Schreiben Sie das Verb in der richtigen Form.', anweisungAr: 'اكتب الفعل في صيغته الصحيحة.', typ: 'gap', items: [
      { q: 'Woher ___ du? (kommen)', a: ['kommst'] },
      { q: 'Lisa ___ gern Bücher. (lesen)', a: ['liest'] },
      { q: 'Wir ___ Kollegen. (sein)', a: ['sind'] },
      { q: 'Er ___ einen Salat. (nehmen)', a: ['nimmt'] },
      { q: 'Ich ___ heute lange arbeiten. (müssen)', a: ['muss'] },
      { q: '___ du mir bitte helfen? (können)', a: ['Kannst'] },
      { q: 'Der Film fängt um acht Uhr ___. (anfangen)', a: ['an'] },
      { q: 'Gestern ___ ich krank. (sein)', a: ['war'] }
    ] },
    { teil: 'B2', titel: 'Grammatik: Artikel und Possessivartikel', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الأداة الصحيحة.', typ: 'select', items: [
      { q: 'Ich habe ___ Bruder und zwei Schwestern.', o: ['einen', 'ein', 'eine'], a: 'einen' },
      { q: 'Das ist ___ Kirche, das ist ein Museum.', o: ['keine', 'kein', 'nicht'], a: 'keine' },
      { q: 'Er trinkt ___ Kaffee, er trinkt Tee.', o: ['keinen', 'kein', 'nicht'], a: 'keinen' },
      { q: 'Am Sonntag besuche ich ___ Eltern.', o: ['meine', 'meinen', 'mein'], a: 'meine' },
      { q: 'Frau Weber, ist das ___ Handy?', o: ['Ihr', 'Ihre', 'ihren'], a: 'Ihr' },
      { q: 'Der Kaffee ist lecker. Ich nehme ___ Kaffee.', o: ['den', 'der', 'dem'], a: 'den' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Präpositionen', anweisung: 'Ergänzen Sie die Präposition.', anweisungAr: 'أكمل بحرف الجر المناسب.', typ: 'select', items: [
      { q: 'Ich fahre ___ dem Bus zur Arbeit.', o: ['mit', 'für', 'um'], a: 'mit' },
      { q: 'Der Kurs beginnt ___ 9 Uhr.', o: ['um', 'am', 'im'], a: 'um' },
      { q: 'Ich habe ___ 5. Mai Geburtstag.', o: ['am', 'um', 'im'], a: 'am' },
      { q: 'Das Bild hängt ___ der Wand.', o: ['an', 'für', 'mit'], a: 'an' },
      { q: 'Das Geschenk ist ___ dich.', o: ['für', 'mit', 'von'], a: 'für' },
      { q: 'Wir gehen ___ dem Essen spazieren.', o: ['nach', 'um', 'für'], a: 'nach' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Pronomen', anweisung: 'Wählen Sie das richtige Pronomen.', anweisungAr: 'اختر الضمير الصحيح.', typ: 'select', items: [
      { q: 'Kennst du Tom? – Ja, ich kenne ___ gut.', o: ['ihn', 'er', 'ihm'], a: 'ihn' },
      { q: 'Die Jacke gefällt ___ sehr. (ich)', o: ['mir', 'mich', 'ich'], a: 'mir' },
      { q: 'Ich rufe ___ morgen an. (du)', o: ['dich', 'dir', 'du'], a: 'dich' },
      { q: 'Wie geht es ___, Herr Klein?', o: ['Ihnen', 'Sie', 'Ihr'], a: 'Ihnen' },
      { q: 'Das ist Anna. ___ kommt aus Polen.', o: ['Sie', 'Er', 'Es'], a: 'Sie' },
      { q: 'Der Pulli steht ___ super, Lisa! (du)', o: ['dir', 'dich', 'du'], a: 'dir' }
    ] },
    { teil: 'B5', titel: 'Grammatik: Imperativ und Modalverben', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة.', typ: 'mcq', items: [
      { q: 'Lisa, … bitte das Fenster zu!', o: ['mach', 'machst', 'machen'], a: 'mach' },
      { q: 'Herr Weber, … Sie bitte Platz!', o: ['nehmen', 'nimm', 'nehmt'], a: 'nehmen' },
      { q: 'Kinder, … bitte leise!', o: ['seid', 'sei', 'sind'], a: 'seid' },
      { q: 'Hier … man nicht rauchen.', o: ['darf', 'dürfen', 'darfst'], a: 'darf' },
      { q: 'Der Arzt sagt, ich … im Bett bleiben.', o: ['soll', 'sollst', 'sollen'], a: 'soll' }
    ] },
    { teil: 'B6', titel: 'Grammatik: Perfekt', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة في الماضي (Perfekt).', typ: 'select', items: [
      { q: 'Ich ___ gestern nach Berlin gefahren.', o: ['bin', 'habe'], a: 'bin' },
      { q: 'Wir ___ zusammen Pizza gegessen.', o: ['haben', 'sind'], a: 'haben' },
      { q: 'Er ist heute um 7 Uhr ___. (aufstehen)', o: ['aufgestanden', 'aufgesteht', 'geaufstanden'], a: 'aufgestanden' },
      { q: 'Sie hat in Kairo Medizin ___. (studieren)', o: ['studiert', 'gestudiert', 'studieren'], a: 'studiert' },
      { q: 'Hast du die Jacke ___? (anprobieren)', o: ['anprobiert', 'angeprobiert', 'geanprobiert'], a: 'anprobiert' },
      { q: 'Wir haben das Buch im Internet ___. (bestellen)', o: ['bestellt', 'gebestellt', 'bestellen'], a: 'bestellt' }
    ] },
    { teil: 'B7', titel: 'Grammatik: Wo oder wohin?', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'الحركة (Wohin) ← Akkusativ، والثبات في المكان (Wo) ← Dativ.', typ: 'select', items: [
      { q: 'Ich stelle die Lampe ___ Wohnzimmer.', o: ['ins', 'im'], a: 'ins' },
      { q: 'Die Lampe steht ___ Wohnzimmer.', o: ['im', 'ins'], a: 'im' },
      { q: 'Wir fahren morgen ___ Stadt.', o: ['in die', 'in der'], a: 'in die' },
      { q: 'Wir wohnen ___ Stadt.', o: ['in der', 'in die'], a: 'in der' }
    ] },
    { teil: 'B8', titel: 'Grammatik: Fragewörter', anweisung: 'Ergänzen Sie das Fragewort.', anweisungAr: 'أكمل بأداة الاستفهام المناسبة.', typ: 'select', o: ['Wer', 'Wo', 'Woher', 'Wann', 'Was', 'Wem'], items: [
      { q: '___ wohnst du? – In Köln.', a: 'Wo' },
      { q: '___ kommt der Zug? – Um 10 Uhr.', a: 'Wann' },
      { q: '___ gehört das Buch? – Mir.', a: 'Wem' },
      { q: '___ machst du am Wochenende? – Ich wandere.', a: 'Was' },
      { q: '___ kommen Sie? – Aus Syrien.', a: 'Woher' },
      { q: '___ ist das? – Das ist meine Lehrerin.', a: 'Wer' }
    ] },
    { teil: 'B9', titel: 'Grammatik: Sätze bauen', anweisung: 'Klicken Sie die Wörter in der richtigen Reihenfolge.', anweisungAr: 'رتّب الكلمات لتكوّن جملة صحيحة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['am Wochenende', 'fahre', 'ich', 'nach Hamburg'], a: ['am Wochenende fahre ich nach Hamburg', 'ich fahre am Wochenende nach Hamburg'] },
      { q: 'Ja/Nein-Frage (?)', w: ['kannst', 'du', 'mir', 'helfen'], a: ['kannst du mir helfen'] },
      { q: 'Perfekt (.)', w: ['ich', 'habe', 'gestern', 'viel', 'gelernt'], a: ['ich habe gestern viel gelernt', 'gestern habe ich viel gelernt'] },
      { q: 'Trennbares Verb (.)', w: ['der Zug', 'fährt', 'um 8 Uhr', 'ab'], a: ['der Zug fährt um 8 Uhr ab', 'um 8 Uhr fährt der Zug ab'] }
    ] },
    // ---------------- C LESEN ----------------
    { teil: 'C1', titel: 'Lesen: Eine E-Mail', anweisung: 'Lesen Sie die E-Mail. Richtig oder falsch?', anweisungAr: 'اقرأ البريد الإلكتروني. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Hallo Sara,\ndanke für deine Einladung! Leider kann ich am Samstag nicht zu deiner Party kommen, denn meine Eltern besuchen mich. Sie kommen am Freitagabend aus Kairo und bleiben bis Dienstag. Hast du am Sonntag Zeit? Wir können zusammen frühstücken. Ich kenne ein schönes Café am Marktplatz. Es ist von 9 bis 18 Uhr geöffnet. Ruf mich bitte an!\nViele Grüße\nMona',
      items: [
        { q: 'Mona kommt am Samstag zur Party.', a: false },
        { q: 'Monas Eltern kommen aus Kairo.', a: true },
        { q: 'Die Eltern bleiben bis Sonntag.', a: false },
        { q: 'Mona möchte am Sonntag mit Sara frühstücken.', a: true },
        { q: 'Das Café ist ab 9 Uhr geöffnet.', a: true }
      ] },
    { teil: 'C2', titel: 'Lesen: Anzeigen', anweisung: 'Lesen Sie die Situationen und die zwei Anzeigen. Welche Anzeige passt?', anweisungAr: 'اقرأ الموقف والإعلانين. أيّ إعلان يناسب الموقف؟', typ: 'mcq', items: [
      { q: 'Sie möchten am Wochenende Deutsch lernen.', o: ['Sprachschule Hansa: Deutschkurse am Samstag und Sonntag, 9–13 Uhr.', 'Sprachschule Lingua: Deutschkurse von Montag bis Freitag, 18–20 Uhr.'], a: 'Sprachschule Hansa: Deutschkurse am Samstag und Sonntag, 9–13 Uhr.' },
      { q: 'Sie suchen eine billige Wohnung mit Balkon.', o: ['2-Zimmer-Wohnung, 2. Stock, mit Balkon, 550 Euro warm.', 'Schöne Altbauwohnung, 3 Zimmer, ohne Balkon, 1.200 Euro.'], a: '2-Zimmer-Wohnung, 2. Stock, mit Balkon, 550 Euro warm.' },
      { q: 'Ihr Fahrrad ist kaputt.', o: ['Fahrrad-Werkstatt Müller: Reparaturen schnell und billig. Mo–Sa 8–18 Uhr.', 'Fahrrad-Verleih am Bahnhof: Räder für 10 Euro pro Tag.'], a: 'Fahrrad-Werkstatt Müller: Reparaturen schnell und billig. Mo–Sa 8–18 Uhr.' },
      { q: 'Sie möchten am Sonntagabend essen gehen.', o: ['Restaurant Bella Italia: täglich von 12 bis 23 Uhr geöffnet.', 'Restaurant Zur Post: Montag bis Samstag 11–22 Uhr, Sonntag geschlossen.'], a: 'Restaurant Bella Italia: täglich von 12 bis 23 Uhr geöffnet.' }
    ] },
    { teil: 'C3', titel: 'Lesen: Schilder', anweisung: 'Lesen Sie die Schilder. Richtig oder falsch?', anweisungAr: 'اقرأ اللافتات. هل العبارة صحيحة أم خاطئة؟', typ: 'tf', items: [
      { q: 'In der Arztpraxis: „Sprechstunde Mo–Fr 8–12 Uhr, Do auch 15–18 Uhr“ → Am Donnerstagnachmittag kann man zum Arzt gehen.', a: true },
      { q: 'Am Kaufhaus: „Wir haben für Sie geöffnet: Mo–Sa 10–20 Uhr“ → Am Sonntag kann man hier einkaufen.', a: false },
      { q: 'Im Zug: „Bistro im Wagen 5“ → Im Wagen 5 kann man etwas essen und trinken.', a: true },
      { q: 'Im Museum: „Fotografieren verboten!“ → Im Museum darf man Fotos machen.', a: false },
      { q: 'Am Kino: „Heute alle Filme nur 5 Euro!“ → Heute kostet jeder Film 5 Euro.', a: true }
    ] },
    // ---------------- D SCHREIBEN ----------------
    { teil: 'D1', titel: 'Schreiben: Ein Formular', anweisung: 'Ihr Freund möchte einen Deutschkurs machen. Lesen Sie den Text und füllen Sie das Formular aus.', anweisungAr: 'يريد صديقك التسجيل في دورة لغة ألمانية. اقرأ النص واملأ الاستمارة.', typ: 'gap',
      text: 'Mein Freund heißt Karim Mansour. Er ist am 12. März 1995 in Alexandria geboren. Er wohnt jetzt in der Lindenstraße 8, 30159 Hannover. Karim ist verheiratet und arbeitet als Koch in einem Restaurant. Er arbeitet am Abend, deshalb möchte er den Kurs am Vormittag machen.',
      items: [
        { q: 'Familienname: ___', a: ['Mansour'] },
        { q: 'Geburtsort: ___', a: ['Alexandria'] },
        { q: 'Wohnort: 30159 ___', a: ['Hannover'] },
        { q: 'Familienstand (ledig / verheiratet): ___', a: ['verheiratet'] },
        { q: 'Kurszeit (Vormittag / Abend): ___', a: ['Vormittag'] }
      ] },
    { teil: 'D2', titel: 'Schreiben: Eine E-Mail', anweisung: 'Sie können am Samstag nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Lehrerin, Frau Schulz. Entschuldigen Sie sich. Warum kommen Sie nicht? Fragen Sie nach den Hausaufgaben. Schreiben Sie ca. 30 Wörter.', anweisungAr: 'لن تستطيع حضور الدورة يوم السبت. اكتب رسالة إلكترونية إلى محاضرتك: اعتذر، واذكر السبب، واسأل عن الواجب المنزلي. نحو 30 كلمة. سيصحّح المحاضر هذا الجزء.', typ: 'write', items: [
      { q: 'Liebe Frau Schulz, …', min: 25, muster: 'Liebe Frau Schulz,\nleider kann ich am Samstag nicht zum Deutschkurs kommen, denn ich bin krank. Ich habe Fieber und muss im Bett bleiben. Können Sie mir bitte die Hausaufgaben schicken?\nVielen Dank und viele Grüße\nOmar Hassan' }
    ] }
  ]
};
