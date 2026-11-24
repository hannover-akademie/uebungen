// Netzwerk neu A2 – Kapitel 11: Wie die Zeit vergeht!
// Grammatik: Konjunktiv II (hätte, wäre, würde + Infinitiv), Verben mit Präposition, W-Fragen mit Präposition · Redemittel: Wünsche, Ratschläge, gemeinsam planen, bitten, ablehnen, Gegenvorschlag
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 11, titel: 'Wie die Zeit vergeht!',
  titelAr: 'الوقت والأمنيات والخطط – صيغة التمنّي (Konjunktiv II)، والأفعال مع حروف الجر، وأسئلة wo(r)+حرف جر',
  teile: [
    { titel: 'Wortschatz: Zeit und Lebensphasen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['vergeht', 'verbringe', 'sparen', 'verreisen', 'ausschalten', 'Hektik'], items: [
      { q: 'Die Zeit ___ so schnell! Schon wieder ist ein Jahr vorbei.', a: 'vergeht' },
      { q: 'Am Wochenende ___ ich viel Zeit mit meiner Familie.', a: 'verbringe' },
      { q: 'Wir möchten ein Haus kaufen. Deshalb müssen wir Geld ___.', a: 'sparen' },
      { q: 'Im Sommer wollen wir ans Meer ___.', a: 'verreisen' },
      { q: 'Am Abend sollte man das Handy ___.', a: 'ausschalten' },
      { q: 'Ich wünsche mir ein Leben ohne Stress und ___.', a: 'Hektik' }
    ] },
    { titel: 'Wortschatz: Arbeit', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Die Firma hat keine Aufträge mehr. Sie muss zehn Mitarbeiter …', o: ['entlassen.', 'behalten.', 'heizen.'], a: 'entlassen.' },
      { q: 'Er möchte seine Stelle nicht verlieren. Er möchte sie …', o: ['behalten.', 'entlassen.', 'verreisen.'], a: 'behalten.' },
      { q: 'Montag bis Freitag sind …', o: ['Werktage.', 'Fristen.', 'Notfälle.'], a: 'Werktage.' },
      { q: 'Den Antrag müssen Sie bis 30. Juni abgeben. Das ist die …', o: ['Frist.', 'Heizung.', 'Unterkunft.'], a: 'Frist.' }
    ] },
    { titel: 'Grammatik: Konjunktiv II – Formen', anweisung: 'Schreiben Sie die richtige Form (hätte, wäre, würde).', anweisungAr: 'صيغة التمنّي: hätte (haben)، wäre (sein)، وسائر الأفعال: würde + مصدر.', typ: 'gap', items: [
      { q: 'Ich ___ gern mehr Zeit. (haben)', a: ['hätte', 'haette'] },
      { q: 'Wir ___ gern öfter zu Hause. (sein)', a: ['wären', 'waeren'] },
      { q: 'Er ___ gern mehr lesen. (würde + Infinitiv)', a: ['würde', 'wuerde'] },
      { q: '___ du gern einen Hund? (haben)', a: ['Hättest', 'Haettest'] },
      { q: 'Ihr ___ jetzt bestimmt gern am Strand. (sein)', a: ['wärt', 'waert', 'wäret'] },
      { q: 'Sie ___ gern eine Weltreise machen. (sie, Plural)', a: ['würden', 'wuerden'] }
    ] },
    { titel: 'Grammatik: Wunsch, Ratschlag oder Bitte?', anweisung: 'Wozu verwendet man hier den Konjunktiv II?', anweisungAr: 'لأيّ غرض استُعملت صيغة Konjunktiv II هنا: أمنية، أم نصيحة، أم طلب مهذّب؟', typ: 'select', o: ['Wunsch', 'Ratschlag', 'höfliche Bitte'], items: [
      { q: '„Ich wäre gern öfter mit Freunden zusammen.“', a: 'Wunsch' },
      { q: '„An deiner Stelle würde ich mit dem Chef sprechen.“', a: 'Ratschlag' },
      { q: '„Würdest du mir bitte das Buch geben?“', a: 'höfliche Bitte' },
      { q: '„Wir hätten gern einen Garten.“', a: 'Wunsch' },
      { q: '„Du solltest am Abend das Handy ausschalten.“', a: 'Ratschlag' },
      { q: '„Könntest du mir bitte helfen?“', a: 'höfliche Bitte' }
    ] },
    { titel: 'Grammatik: Verben mit Präposition', anweisung: 'Ergänzen Sie die Präposition.', anweisungAr: 'أكمل بحرف الجر الذي يلازم الفعل.', typ: 'select', o: ['auf', 'an', 'mit', 'über', 'für', 'um', 'von'], items: [
      { q: 'Wir freuen uns ___ den Ausflug am Sonntag.', a: 'auf' },
      { q: 'Er erinnert sich gern ___ seine Kindheit.', a: 'an' },
      { q: 'Sie spricht oft ___ ihrer Mutter.', a: 'mit' },
      { q: 'Ich ärgere mich ___ den Stau.', a: 'über' },
      { q: 'Interessierst du dich ___ Sprichwörter?', a: 'für' },
      { q: 'Wer kümmert sich ___ die Kinder?', a: 'um' },
      { q: 'Ich träume ___ einem Haus am Meer.', a: 'von' },
      { q: 'Sie bereitet sich ___ die Prüfung vor.', a: 'auf' }
    ] },
    { titel: 'Grammatik: W-Fragen mit Präposition', anweisung: 'Ergänzen Sie das Fragewort.', anweisungAr: 'للسؤال عن الأشياء: wo(r) + حرف الجر (worauf, worüber)، وعن الأشخاص: حرف الجر + أداة الاستفهام (mit wem, über wen).', typ: 'select', o: ['Worauf', 'Worüber', 'Woran', 'Mit wem', 'Über wen', 'Wofür'], items: [
      { q: '___ freut sich Milan? – Auf den Ausflug.', a: 'Worauf' },
      { q: '___ ärgert sich Milan? – Über die Prüfung.', a: 'Worüber' },
      { q: '___ ärgert sich Milan? – Über den Lehrer.', a: 'Über wen' },
      { q: '___ hat Mereth gesprochen? – Mit Ben.', a: 'Mit wem' },
      { q: '___ erinnerst du dich? – An den letzten Urlaub.', a: 'Woran' },
      { q: '___ interessierst du dich? – Für Geschichte.', a: 'Wofür' }
    ] },
    { titel: 'Redemittel: Gemeinsam etwas planen', anweisung: 'Was macht die Person?', anweisungAr: 'ماذا يفعل المتحدث: يقترح، أم يوافق، أم يرفض، أم يقدّم اقتراحًا آخر؟', typ: 'select', o: ['Vorschlag', 'zustimmen', 'ablehnen', 'Gegenvorschlag'], items: [
      { q: '„Wir könnten am Samstag einen Ausflug machen.“', a: 'Vorschlag' },
      { q: '„Ja, das wäre super!“', a: 'zustimmen' },
      { q: '„Nee, lieber nicht.“', a: 'ablehnen' },
      { q: '„Wollen wir nicht lieber ins Museum gehen?“', a: 'Gegenvorschlag' },
      { q: '„Ich habe eine Idee: Wir grillen im Park.“', a: 'Vorschlag' },
      { q: '„Das geht bei mir leider nicht.“', a: 'ablehnen' },
      { q: '„Klar, gern. Ja, das passt!“', a: 'zustimmen' },
      { q: '„Wir könnten doch auch eine Radtour machen.“', a: 'Gegenvorschlag' }
    ] },
    { titel: 'Redemittel: Ein Ausflug wird geplant', anweisung: 'Bringen Sie den Dialog in die richtige Reihenfolge.', anweisungAr: 'رتّب الحوار.', typ: 'order', items: [
      { q: 'Ausflug mit dem Kurs', lines: [
        'Wollen wir am Sonntag mit dem Kurs einen Ausflug machen?',
        'Ja, das wäre super! Wohin möchtest du fahren?',
        'Wir könnten in den Zoo gehen.',
        'Ich habe eine andere Idee: Wir könnten an den See fahren und picknicken.',
        'Gute Idee! Kümmerst du dich um die Getränke?',
        'Klar, gern. Und denkst du an die Decken?',
        'Ja, mache ich. Passt dir 10 Uhr am Bahnhof?',
        'Ja, das passt!'
      ] }
    ] },
    { titel: 'Lesen: Leben wie früher', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Familie Berger lebt zwei Wochen wie im Jahr 1900 – ohne Strom, ohne Heizung und ohne Handy. Für das Fernsehen machen sie ein Experiment auf einem alten Bauernhof. „Am Anfang hat es mich sehr geärgert, dass ich keine Nachrichten schreiben konnte“, erzählt die Tochter Lisa (15). „Aber dann habe ich gemerkt, dass ich viel mehr Zeit mit meiner Familie verbringe.“ Die Mutter heizt den Ofen mit Feuer und backt jeden Tag Brot. Der Vater sagt: „Ich würde gern ein bisschen von diesem Leben behalten. Wir sollten zu Hause öfter auf das Handy verzichten.“',
      items: [
        { q: 'Familie Berger lebt zwei Wochen ohne Strom.', a: true },
        { q: 'Lisa konnte auf dem Bauernhof Nachrichten schreiben.', a: false },
        { q: 'Lisa verbringt jetzt mehr Zeit mit ihrer Familie.', a: true },
        { q: 'Die Mutter kauft jeden Tag Brot im Supermarkt.', a: false },
        { q: 'Der Vater möchte öfter auf das Handy verzichten.', a: true }
      ] },
    { titel: 'Schreiben: Wünsche und Pläne', anweisung: 'Schreiben Sie einen Beitrag zum Thema „Mehr Zeit für mich“ (60–80 Wörter): Wofür haben Sie zu wenig Zeit? Was würden Sie gern öfter machen (Konjunktiv II)? Geben Sie anderen einen Ratschlag. Planen Sie etwas für das nächste Wochenende.', anweisungAr: 'اكتب منشورًا بعنوان «وقت أكثر لنفسي» (60–80 كلمة): لِمَ لا يكفيك الوقت؟ وماذا تتمنى أن تفعل أكثر (Konjunktiv II)؟ وقدّم نصيحة للآخرين، وخطّط لشيء في عطلة نهاية الأسبوع القادمة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch habe zu wenig Zeit für …\nIch hätte gern … / Ich wäre gern … / Ich würde gern …\nAn deiner Stelle würde ich … / Man sollte …\nIch freue mich auf … / Ich träume von …\nAm Wochenende wollen wir …',
      items: [
        { q: 'Ich habe zu wenig Zeit für …', min: 55, muster: 'Ich arbeite viel und lerne am Abend Deutsch. Deshalb habe ich zu wenig Zeit für meine Familie und für meine Hobbys. Ich würde gern öfter mit meinen Kindern spielen und ich hätte gern mehr Zeit zum Lesen. Ich wäre auch gern öfter in der Natur. Mein Ratschlag: Man sollte am Abend das Handy ausschalten. Dann hat man viel mehr Zeit! Am Wochenende machen wir einen Ausflug an den See. Ich freue mich schon sehr darauf.' }
    ] }
  ]
};
