// Netzwerk neu B1 – Kapitel 7: Zwischenmenschliches
// Grammatik: Plusquamperfekt, temporale Nebensätze (bevor, bis, nachdem, seit/seitdem, während) · Redemittel: etwas hervorheben, Konfliktgespräche (diplomatisch/undiplomatisch)
// Prüfungstraining: Goethe B1 Lesen Teil 1 · telc Sprachbausteine · Goethe B1 Schreiben Aufgabe 3
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 7, titel: 'Zwischenmenschliches',
  titelAr: 'الصداقة والعلاقات والخلافات – الماضي الأسبق (Plusquamperfekt)، وجمل الزمن: bevor, bis, nachdem, seitdem, während',
  teile: [
    { titel: 'Wortschatz: Freundschaft', anweisung: 'Ergänzen Sie die passende Wendung.', anweisungAr: 'أكمل بالعبارة المناسبة.', typ: 'select', o: ['aus den Augen verloren', 'über den Weg gelaufen', 'ins Gespräch gekommen', 'eingespannt', 'schätze', 'Clique'], items: [
      { q: 'Nach der Schule haben wir uns leider ___.', a: 'aus den Augen verloren' },
      { q: 'Gestern ist mir zufällig mein alter Schulfreund ___.', a: 'über den Weg gelaufen' },
      { q: 'Im Zug sind wir ___ und haben uns drei Stunden unterhalten.', a: 'ins Gespräch gekommen' },
      { q: 'Ich bin beruflich stark ___ und habe wenig Zeit für Freunde.', a: 'eingespannt' },
      { q: 'An meiner Freundin ___ ich vor allem ihre Ehrlichkeit.', a: 'schätze' },
      { q: 'Als Jugendlicher war ich jeden Tag mit meiner ___ unterwegs.', a: 'Clique' }
    ] },
    { titel: 'Wortschatz: Konflikte', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Er sagt nicht die Wahrheit. Er …', o: ['lügt.', 'lobt.', 'schweigt.'], a: 'lügt.' },
      { q: 'Sie sagt kein Wort. Sie …', o: ['schweigt.', 'übertreibt.', 'behauptet.'], a: 'schweigt.' },
      { q: 'Nach langer Diskussion haben wir uns auf eine Lösung …', o: ['geeinigt.', 'gestohlen.', 'verspätet.'], a: 'geeinigt.' },
      { q: 'Das stimmt doch gar nicht! Du …', o: ['übertreibst.', 'beweist.', 'schätzt.'], a: 'übertreibst.' },
      { q: 'Sie regt sich jeden Tag … den Lärm auf.', o: ['über', 'auf', 'an'], a: 'über' }
    ] },
    { titel: 'Grammatik: Plusquamperfekt', anweisung: 'Ergänzen Sie hatte/hatten oder war/waren.', anweisungAr: 'الماضي الأسبق: hatte/war (Präteritum) + Partizip II، لحدث وقع قبل حدث آخر في الماضي.', typ: 'select', items: [
      { q: 'Wir ___ uns fast jeden Tag getroffen.', o: ['hatten', 'waren', 'wurden'], a: 'hatten' },
      { q: 'Früher ___ wir viel zusammen gereist.', o: ['waren', 'hatten', 'wurden'], a: 'waren' },
      { q: 'Er ___ den Zug schon verpasst, als ich ankam.', o: ['hatte', 'war', 'hat'], a: 'hatte' },
      { q: 'Sie ___ gerade eingeschlafen, als das Telefon klingelte.', o: ['war', 'hatte', 'ist'], a: 'war' },
      { q: 'Nachdem ich das Abitur gemacht ___, zog ich nach Berlin.', o: ['hatte', 'war', 'habe'], a: 'hatte' }
    ] },
    { titel: 'Grammatik: Zeitstufen', anweisung: 'Bringen Sie die Ereignisse in die richtige zeitliche Reihenfolge (zuerst ganz früh).', anweisungAr: 'رتّب الأحداث زمنيًا من الأقدم إلى الحاضر.', typ: 'order', items: [
      { q: 'Lisa und Paula', lines: [
        'Wir hatten uns in der Schulzeit fast jeden Tag getroffen.',
        'Nach dem Abitur verloren wir uns aus den Augen.',
        'Letztes Jahr haben wir beschlossen, etwas zu ändern.',
        'Heute fahren wir gemeinsam an die Ostsee.'
      ] }
    ] },
    { titel: 'Grammatik: Temporale Nebensätze', anweisung: 'Ergänzen Sie den passenden Konnektor.', anweisungAr: 'bevor = قبل أن، bis = إلى أن، nachdem = بعد أن، seit/seitdem = منذ أن، während = بينما.', typ: 'select', o: ['bevor', 'bis', 'nachdem', 'seitdem', 'während'], items: [
      { q: 'Sie trinken Kaffee, ___ Julia telefoniert. (zuerst Kaffee, dann Telefon)', a: 'bevor' },
      { q: 'Wir warten, ___ du zurückkommst.', a: 'bis' },
      { q: '___ Matilda den Brief gelesen hatte, rief sie sofort ihre Freundin an.', a: 'nachdem' },
      { q: '___ du den Job gewechselt hast, bist du ständig erschöpft.', a: 'seitdem' },
      { q: '___ ich aufräume, kochst du für uns. (gleichzeitig)', a: 'während' },
      { q: 'Er ruft immer an, ___ er zu Besuch kommt. (zuerst Anruf, dann Besuch)', a: 'bevor' }
    ] },
    { titel: 'Grammatik: nachdem – die Zeiten', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'مع nachdem: Präsens في الرئيسية مع Perfekt في الفرعية، أو Präteritum في الرئيسية مع Plusquamperfekt في الفرعية.', typ: 'mcq', items: [
      { q: 'Nachdem sie neue Freunde gefunden hat, …', o: ['gefällt es ihr in Freiburg gut.', 'gefiel es ihr in Freiburg gut.', 'hatte es ihr gefallen.'], a: 'gefällt es ihr in Freiburg gut.' },
      { q: 'Nachdem wir gegessen hatten, …', o: ['gingen wir spazieren.', 'gehen wir spazieren.', 'werden wir spazieren gehen.'], a: 'gingen wir spazieren.' },
      { q: 'Er fand eine Wohnung, nachdem er lange …', o: ['gesucht hatte.', 'sucht.', 'suchen wird.'], a: 'gesucht hatte.' }
    ] },
    { titel: 'Redemittel: Konfliktgespräche', anweisung: 'Diplomatisch oder undiplomatisch?', anweisungAr: 'هل العبارة دبلوماسية (تهدّئ الخلاف) أم غير دبلوماسية (تزيده)؟', typ: 'select', o: ['diplomatisch', 'undiplomatisch'], items: [
      { q: '„Wir finden bestimmt einen Kompromiss.“', a: 'diplomatisch' },
      { q: '„Immer das Gleiche mit dir!“', a: 'undiplomatisch' },
      { q: '„Ich kann dich ja gut verstehen.“', a: 'diplomatisch' },
      { q: '„Jetzt übertreibst du aber etwas!“', a: 'undiplomatisch' },
      { q: '„Sei mir nicht böse, bitte.“', a: 'diplomatisch' },
      { q: '„Das nervt mich wirklich.“', a: 'undiplomatisch' }
    ] },
    { titel: 'Redemittel: Etwas hervorheben', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل عبارات إبراز الأهمية.', typ: 'select', o: ['schätze', 'spielt', 'Im Gegensatz zu', 'am wichtigsten', 'Besonders wichtig'], items: [
      { q: 'An meinem besten Freund ___ ich vor allem seine Ehrlichkeit.', a: 'schätze' },
      { q: 'Für mich ___ Vertrauen eine große Rolle.', a: 'spielt' },
      { q: '___ meinen Kollegen finde ich Pünktlichkeit nicht so wichtig.', a: 'Im Gegensatz zu' },
      { q: '___ ist für mich, dass man über alles sprechen kann.', o: ['Besonders wichtig', 'Im Gegensatz zu', 'spielt'], a: 'Besonders wichtig' },
      { q: 'Humor finde ich ___, denn man muss zusammen lachen können.', o: ['am wichtigsten', 'schätze', 'spielt'], a: 'am wichtigsten' }
    ] },
    { titel: 'Prüfungstraining – Goethe B1 Lesen Teil 1', anweisung: 'Lesen Sie den Blogeintrag. Richtig oder falsch?', anweisungAr: 'تدريب على امتحان Goethe B1 (القراءة، الجزء 1): اقرأ التدوينة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Eine Freundschaft, die alles überstanden hat\nKarin und ich kennen uns seit der ersten Klasse. Damals hatten wir uns im Bus kennengelernt, weil wir beide Angst vor dem ersten Schultag hatten. Nachdem wir die Schule beendet hatten, zog Karin für ihr Studium nach Hamburg, und ich blieb in München. Wir telefonierten zwar oft, aber mit der Zeit verloren wir uns aus den Augen. Zehn Jahre später lief sie mir zufällig auf einem Bahnhof über den Weg. Es war, als ob wir uns erst gestern gesehen hätten! Seitdem treffen wir uns jedes Jahr für ein Wochenende. Natürlich streiten wir uns manchmal, denn Karin ist immer zu spät, und ich bin sehr pünktlich. Aber wir haben gelernt, Kompromisse zu finden.',
      items: [
        { q: 'Die beiden Frauen haben sich erst nach der Schulzeit kennengelernt.', a: false },
        { q: 'Nach der Schule haben sie in verschiedenen Städten gewohnt.', a: true },
        { q: 'Sie haben sich zufällig wiedergetroffen.', a: true },
        { q: 'Heute sehen sie sich jedes Wochenende.', a: false },
        { q: 'Die Autorin ärgert sich manchmal über Karins Unpünktlichkeit.', a: true }
      ] },
    { titel: 'Prüfungstraining – telc B1 Sprachbausteine', anweisung: 'Welches Wort (a, b oder c) passt in die Lücken 1–5?', anweisungAr: 'تدريب على Sprachbausteine في telc B1: اختر الكلمة المناسبة لكل فراغ.', typ: 'select',
      text: 'Lieber Tom,\nentschuldige bitte, dass ich mich so lange nicht gemeldet habe. __(1)__ ich die neue Stelle angefangen habe, habe ich kaum noch Freizeit. Letzte Woche war ich so müde, __(2)__ ich dein Geburtstagsfest völlig vergessen habe. Das tut mir __(3)__ leid! Ich hatte das Geschenk schon gekauft, __(4)__ du mich eingeladen hast. Darf ich dich am Samstag zum Essen einladen? Ich warte, __(5)__ du mir antwortest.\nDein Ali',
      items: [
        { q: 'Lücke 1: ___', o: ['Seitdem', 'Bevor', 'Bis'], a: 'Seitdem' },
        { q: 'Lücke 2: ___', o: ['dass', 'sodass', 'damit'], a: 'dass' },
        { q: 'Lücke 3: ___', o: ['schrecklich', 'schrecklicher', 'Schreck'], a: 'schrecklich' },
        { q: 'Lücke 4: ___', o: ['bevor', 'nachdem', 'während'], a: 'bevor' },
        { q: 'Lücke 5: ___', o: ['bis', 'seit', 'nachdem'], a: 'bis' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 3', anweisung: 'Sie haben einen Termin mit Ihrer Vermieterin, Frau Krause, verpasst. Schreiben Sie Frau Krause eine E-Mail (ca. 40 Wörter). Entschuldigen Sie sich höflich, erklären Sie, warum Sie nicht da waren, und bitten Sie um einen neuen Termin.', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 3): رسالة رسمية قصيرة نحو 40 كلمة إلى صاحبة الشقة: اعتذر، واشرح السبب، واطلب موعدًا جديدًا. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Frau …,\nbitte entschuldigen Sie, dass … / Es ist mir sehr unangenehm, dass …\nDas war keine Absicht: … / Nachdem …, …\nKönnten wir einen neuen Termin vereinbaren? / Wäre … möglich?\nMit freundlichen Grüßen',
      items: [
        { q: 'Sehr geehrte Frau Krause, …', min: 35, muster: 'Sehr geehrte Frau Krause,\nbitte entschuldigen Sie, dass ich gestern nicht zu unserem Termin gekommen bin. Das war keine Absicht: Nachdem ich die Arbeit beendet hatte, hatte mein Bus eine Stunde Verspätung. Wäre ein neuer Termin am Freitag um 17 Uhr möglich?\nMit freundlichen Grüßen\nAli Hassan' }
    ] }
  ]
};
