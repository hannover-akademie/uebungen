// Netzwerk neu A2 – Kapitel 9: Sportlich, sportlich
// Grammatik: deshalb und trotzdem, Verben mit Dativ und Akkusativ · Redemittel: Begeisterung, Hoffnung, Enttäuschung, Vorschläge machen, zustimmen, ablehnen
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 9, titel: 'Sportlich, sportlich',
  titelAr: 'الرياضة والمشجعون والمواعيد – deshalb و trotzdem، والأفعال ذات المفعولين (Dativ و Akkusativ)',
  teile: [
    { titel: 'Wortschatz: Sportarten und Sportgeräte', anweisung: 'Was braucht man für diesen Sport? Ordnen Sie zu.', anweisungAr: 'ماذا نحتاج لهذه الرياضة؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Klettern', 'der Klettergurt'],
        ['Tauchen', 'die Taucherbrille'],
        ['Kajak fahren', 'das Paddel'],
        ['Surfen', 'das Surfbrett'],
        ['Tennis', 'der Schläger'],
        ['Yoga', 'die Matte']
      ] }
    ] },
    { titel: 'Wortschatz: Sport machen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Tor', 'Mannschaft', 'Kondition', 'Wettbewerb', 'verloren', 'Strecke'], items: [
      { q: 'Er hat ein ___ geschossen! Jetzt steht es 1:0.', a: 'Tor' },
      { q: 'Unsere ___ hat elf Spieler.', a: 'Mannschaft' },
      { q: 'Nach zehn Minuten Joggen bin ich müde. Ich habe keine gute ___.', a: 'Kondition' },
      { q: 'Am Samstag gibt es einen ___. Wer ist am schnellsten?', a: 'Wettbewerb' },
      { q: 'Wir haben das Spiel leider 0:3 ___.', a: 'verloren' },
      { q: 'Die ___ ist 10 Kilometer lang.', a: 'Strecke' }
    ] },
    { titel: 'Wortschatz: Fans und Vereine', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Er geht jedes Wochenende zum Spiel, auch bei Regen. Er ist ein …', o: ['treuer Fan.', 'Fanartikel.', 'Schläger.'], a: 'treuer Fan.' },
      { q: 'Viele Kinder möchten wie ihr Lieblingsspieler sein. Er ist ihr …', o: ['Vorbild.', 'Helm.', 'Tal.'], a: 'Vorbild.' },
      { q: 'Schals und T-Shirts von einem Verein sind …', o: ['Fanartikel.', 'Sportgeräte.', 'Strecken.'], a: 'Fanartikel.' },
      { q: 'Ich spiele im …', o: ['Sportverein.', 'Surfbrett.', 'Nationalpark.'], a: 'Sportverein.' }
    ] },
    { titel: 'Grammatik: deshalb oder trotzdem?', anweisung: 'Ergänzen Sie deshalb (Folge) oder trotzdem (Widerspruch).', anweisungAr: 'deshalb للنتيجة، و trotzdem للتناقض. ويأتي الفعل بعدهما مباشرة.', typ: 'select', o: ['deshalb', 'trotzdem'], items: [
      { q: 'Alle haben schlecht gespielt, ___ haben sie verloren.', a: 'deshalb' },
      { q: 'Alle haben schlecht gespielt, ___ haben sie gewonnen.', a: 'trotzdem' },
      { q: 'Es regnet stark, ___ bleiben wir zu Hause.', a: 'deshalb' },
      { q: 'Es regnet stark, ___ gehen wir joggen.', a: 'trotzdem' },
      { q: 'Ich habe keine Kondition, ___ trainiere ich jetzt dreimal pro Woche.', a: 'deshalb' },
      { q: 'Er war krank, ___ hat er am Wettbewerb teilgenommen.', a: 'trotzdem' }
    ] },
    { titel: 'Grammatik: Satzstellung nach deshalb und trotzdem', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'بعد deshalb و trotzdem يأتي الفعل في الموقع الثاني، ثم الفاعل.', typ: 'mcq', items: [
      { q: 'Das Spiel war spannend, deshalb …', o: ['waren die Fans begeistert.', 'die Fans waren begeistert.', 'die Fans begeistert waren.'], a: 'waren die Fans begeistert.' },
      { q: 'Das Wetter war schlecht, trotzdem …', o: ['sind wir geklettert.', 'wir sind geklettert.', 'wir geklettert sind.'], a: 'sind wir geklettert.' },
      { q: 'Ich muss arbeiten, deshalb …', o: ['kann ich nicht mitkommen.', 'ich kann nicht mitkommen.', 'ich nicht mitkommen kann.'], a: 'kann ich nicht mitkommen.' }
    ] },
    { titel: 'Grammatik: Verben mit Dativ und Akkusativ', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'Dativ للشخص (wem?) و Akkusativ للشيء (was?). وإذا كان الـ Akkusativ ضميرًا جاء قبل الـ Dativ.', typ: 'select', items: [
      { q: 'Wir erklären ___ die Regeln. (die Gäste)', o: ['den Gästen', 'die Gäste', 'der Gäste'], a: 'den Gästen' },
      { q: 'Kannst du ___ deinen Schläger leihen? (ich)', o: ['mir', 'mich', 'ich'], a: 'mir' },
      { q: 'Ich schenke ___ einen Fußball. (mein Sohn)', o: ['meinem Sohn', 'meinen Sohn', 'mein Sohn'], a: 'meinem Sohn' },
      { q: 'Die Regeln? Wir erklären ___ den Gästen.', o: ['sie', 'ihnen', 'ihr'], a: 'sie' },
      { q: 'Die Helme? Wir leihen sie ___. (ihr)', o: ['euch', 'ihr', 'eure'], a: 'euch' },
      { q: 'Ich stelle ___ meine Freunde vor. (du)', o: ['dir', 'dich', 'du'], a: 'dir' }
    ] },
    { titel: 'Grammatik: Dativ vor Akkusativ', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة: الشخص (Dativ) قبل الشيء (Akkusativ)، أما إذا كان الشيء ضميرًا فيأتي أولًا.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['der Trainer', 'zeigt', 'den Kindern', 'die Übung'], a: ['der Trainer zeigt den Kindern die Übung', 'den Kindern zeigt der Trainer die Übung', 'die Übung zeigt der Trainer den Kindern'] },
      { q: 'Satz (.)', w: ['ich', 'empfehle', 'dir', 'diesen Kurs'], a: ['ich empfehle dir diesen Kurs', 'dir empfehle ich diesen Kurs', 'diesen Kurs empfehle ich dir'] },
      { q: 'Satz mit Pronomen (.)', w: ['ich', 'schicke', 'es', 'dir', 'morgen'], a: ['ich schicke es dir morgen', 'morgen schicke ich es dir'] }
    ] },
    { titel: 'Redemittel: Gefühle beim Sport', anweisung: 'Begeisterung, Hoffnung oder Enttäuschung?', anweisungAr: 'هل يعبّر المتحدث عن حماس، أم أمل، أم خيبة أمل؟', typ: 'select', o: ['Begeisterung', 'Hoffnung', 'Enttäuschung'], items: [
      { q: '„Wahnsinn! Das war großartig!“', a: 'Begeisterung' },
      { q: '„Das nächste Mal klappt es bestimmt.“', a: 'Hoffnung' },
      { q: '„Das kann doch nicht wahr sein!“', a: 'Enttäuschung' },
      { q: '„Unglaublich – einfach genial!“', a: 'Begeisterung' },
      { q: '„Hoffentlich schaffen sie es!“', a: 'Hoffnung' },
      { q: '„So ein Mist! Das ist echt schade.“', a: 'Enttäuschung' }
    ] },
    { titel: 'Redemittel: Sich verabreden', anweisung: 'Bringen Sie den Dialog in die richtige Reihenfolge.', anweisungAr: 'رتّب الحوار.', typ: 'order', items: [
      { q: 'Am Wochenende', lines: [
        'Ich habe da eine Idee: Wir könnten am Samstag eine Radtour machen.',
        'Am Samstag kann ich leider nicht. Wollen wir nicht lieber am Sonntag fahren?',
        'Okay, das machen wir. Was denkst du, sollen wir um zehn Uhr losfahren?',
        'Ja, das passt mir gut. Ich bringe das Picknick mit.',
        'Super, das ist eine sehr gute Idee!'
      ] }
    ] },
    { titel: 'Redemittel: Zustimmen oder ablehnen?', anweisung: 'Stimmt die Person zu oder lehnt sie ab?', anweisungAr: 'هل يوافق المتحدث على الاقتراح أم يرفضه؟', typ: 'select', o: ['zustimmen', 'ablehnen'], items: [
      { q: '„Einverstanden.“', a: 'zustimmen' },
      { q: '„Tut mir leid, ich habe keine Lust.“', a: 'ablehnen' },
      { q: '„Ja, da kann ich.“', a: 'zustimmen' },
      { q: '„Leider geht es am Freitag nicht.“', a: 'ablehnen' },
      { q: '„Okay, das machen wir.“', a: 'zustimmen' }
    ] },
    { titel: 'Lesen: Ein Ort für Sport', anweisung: 'Lesen Sie die Anzeige. Richtig oder falsch?', anweisungAr: 'اقرأ الإعلان. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Sportwochenende im Nationalpark Berchtesgaden\nSie möchten sich bewegen und die Natur erleben? Bei uns können Sie klettern, wandern und Kajak fahren. Unsere Führerinnen und Führer zeigen Ihnen die schönsten Strecken. Wir leihen Ihnen alle Sportgeräte: Helme, Klettergurte und Paddel. Sie müssen also nichts mitbringen. Anfänger sind herzlich willkommen, Sie brauchen keine besondere Kondition. Übernachtung im Gasthaus, nicht weit von Salzburg. Preis: 189 Euro mit Essen.',
      items: [
        { q: 'Im Nationalpark kann man auch Kajak fahren.', a: true },
        { q: 'Man muss einen eigenen Helm mitbringen.', a: false },
        { q: 'Nur gute Sportler können teilnehmen.', a: false },
        { q: 'Man übernachtet in einem Gasthaus.', a: true },
        { q: 'Das Essen kostet extra.', a: false }
      ] },
    { titel: 'Schreiben: Ein Kommentar zum Sport', anweisung: 'Schreiben Sie einen Kommentar zum Thema „Sport im Alltag“ (60–80 Wörter): Welchen Sport machen Sie oder möchten Sie machen? Warum (deshalb …)? Was ist schwierig, aber Sie machen es trotzdem? Schlagen Sie den Lesern eine gemeinsame Aktivität vor.', anweisungAr: 'اكتب تعليقًا عن الرياضة في الحياة اليومية (60–80 كلمة): أيّ رياضة تمارس أو تريد أن تمارس ولماذا (deshalb)؟ وما الصعب فيها، لكنك تمارسها مع ذلك (trotzdem)؟ واقترح نشاطًا مشتركًا. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch spiele/mache seit … / Ich möchte gern …\n…, deshalb … / …, trotzdem …\nSport ist für mich wichtig, weil …\nDarf ich etwas vorschlagen? Wir könnten …\nWas denkt ihr, sollen wir …?',
      items: [
        { q: 'Ich mache seit …', min: 55, muster: 'Ich spiele seit zwei Jahren Fußball in einem Verein. Ich arbeite den ganzen Tag im Büro, deshalb brauche ich am Abend Bewegung. Fußball ist für mich wichtig, weil ich dort meine Freunde treffe. Im Winter ist es oft kalt und dunkel, trotzdem gehe ich zweimal pro Woche zum Training. Am Wochenende sehe ich gern die Spiele von meiner Lieblingsmannschaft. Darf ich etwas vorschlagen? Wir könnten am Sonntag zusammen im Park spielen. Was denkt ihr?' }
    ] }
  ]
};
