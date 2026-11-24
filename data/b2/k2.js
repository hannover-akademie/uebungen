// Aspekte neu B2 – Kapitel 2: Sprich mit mir! (M1 Gesten · M2 Sprachen kinderleicht · M3 Smalltalk · M4 Streiten)
// Grammatik: Vergleichssätze mit als, wie, je … desto/umso · das Wort es · Prüfung: Goethe B2 Lesen Teil 2, telc B2 Sprachbausteine, Schreiben Teil 2 (E-Mail)
window.UEBUNG = {
  kurs: 'Aspekte neu B2', kapitel: 2, titel: 'Sprich mit mir!',
  titelAr: 'التواصل: الإشارات، وتعلّم اللغات، والحديث العابر، والخلافات – جمل المقارنة وكلمة es',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe B2 Lesen Teil 2', anweisung: 'Lesen Sie den Zeitungsartikel. Welche Antwort (a, b oder c) passt am besten?', anweisungAr: 'اقرأ المقال واختر الإجابة الأنسب.', typ: 'mcq',
      text: 'Wie Kinder Sprachen lernen\nEltern, die ihre Kinder zweisprachig erziehen, hören oft die Warnung, zwei Sprachen würden ein Kind überfordern. Die Sprachforscherin Dr. Lena Brandt widerspricht: „Kinder können problemlos mit zwei oder sogar drei Sprachen aufwachsen. Entscheidend ist, dass sie beide Sprachen regelmäßig und in echten Situationen hören.“ Viele Familien wenden dabei das Prinzip „eine Person – eine Sprache“ an: Die Mutter spricht zum Beispiel Arabisch, der Vater Deutsch. Dass zweisprachige Kinder manchmal Wörter aus beiden Sprachen mischen, ist laut Brandt kein Zeichen von Verwirrung, sondern eine normale Phase. Je früher ein Kind mit einer Sprache in Kontakt kommt, desto leichter erwirbt es eine natürliche Aussprache. Wörter und Grammatik lernen Erwachsene dagegen oft schneller als Kinder, weil sie bewusster und mit System lernen. Brandt rät Eltern vor allem eines: „Sprechen Sie mit Ihrem Kind die Sprache, in der Sie Ihre Gefühle am besten ausdrücken können.“',
      items: [
        { q: 'Viele Eltern befürchten, dass …', o: ['zwei Sprachen für ein Kind zu viel sind.', 'Kinder keine Fremdsprache lernen wollen.', 'Zweisprachigkeit zu teuer ist.'], a: 'zwei Sprachen für ein Kind zu viel sind.' },
        { q: 'Nach Dr. Brandt ist besonders wichtig, dass Kinder …', o: ['beide Sprachen oft im Alltag hören.', 'früh Grammatik lernen.', 'nur eine Sprache pro Jahr lernen.'], a: 'beide Sprachen oft im Alltag hören.' },
        { q: 'Wenn zweisprachige Kinder Wörter mischen, …', o: ['ist das ganz normal.', 'sollten die Eltern zum Arzt gehen.', 'verstehen sie keine der beiden Sprachen.'], a: 'ist das ganz normal.' },
        { q: 'Erwachsene haben gegenüber Kindern den Vorteil, dass sie …', o: ['Wortschatz und Grammatik oft schneller lernen.', 'eine bessere Aussprache haben.', 'keine Fehler machen.'], a: 'Wortschatz und Grammatik oft schneller lernen.' },
        { q: 'Eltern sollten mit ihrem Kind die Sprache sprechen, …', o: ['die ihnen emotional am nächsten ist.', 'die in der Schule gesprochen wird.', 'die international am wichtigsten ist.'], a: 'die ihnen emotional am nächsten ist.' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Kommunikation', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Geste', 'Muttersprache', 'Smalltalk', 'Streit', 'Körpersprache', 'nachgeben'], items: [
      { q: 'Den Daumen nach oben zu zeigen, ist in vielen Ländern eine positive ___.', a: 'Geste' },
      { q: 'Ihre ___ ist Arabisch, aber sie spricht fließend Deutsch.', a: 'Muttersprache' },
      { q: 'Beim ___ redet man über leichte Themen wie das Wetter.', a: 'Smalltalk' },
      { q: 'Nach einem ___ sollte man sich bald wieder versöhnen.', a: 'Streit' },
      { q: 'Unsere ___ verrät oft mehr als unsere Worte.', a: 'Körpersprache' },
      { q: 'In einem Konflikt muss manchmal einer ___, damit man eine Lösung findet.', a: 'nachgeben' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Vergleichssätze', anweisung: 'Ergänzen Sie als, wie oder je … desto.', anweisungAr: 'wie للتساوي (so … wie)، و als بعد المقارنة (besser als)، و je + مقارنة … desto/umso + مقارنة.', typ: 'select', items: [
      { q: 'Die Prüfung war leichter, ___ ich gedacht hatte.', o: ['als', 'wie', 'desto'], a: 'als' },
      { q: 'Der Kurs war so interessant, ___ meine Freundin gesagt hatte.', o: ['wie', 'als', 'wenn'], a: 'wie' },
      { q: '___ mehr man übt, desto sicherer spricht man.', o: ['Je', 'Als', 'Wie'], a: 'Je' },
      { q: 'Je öfter wir streiten, ___ schwieriger wird es.', o: ['umso', 'als', 'so'], a: 'umso' },
      { q: 'Er spricht besser Deutsch, ___ man nach einem Jahr erwarten würde.', o: ['als', 'wie', 'je'], a: 'als' },
      { q: 'Das Gespräch dauerte länger ___ geplant.', o: ['als', 'wie', 'denn wie'], a: 'als' }
    ] },
    { teil: 'B3', titel: 'Grammatik: je … desto – Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة: الفعل في آخر جملة je، وبعد desto يأتي الفعل مباشرة.', typ: 'words', items: [
      { q: 'je … desto (.)', w: ['je', 'früher', 'Kinder', 'eine Sprache', 'lernen,', 'desto', 'natürlicher', 'klingt', 'ihre Aussprache'], a: ['je früher kinder eine sprache lernen, desto natürlicher klingt ihre aussprache'] },
      { q: 'je … umso (.)', w: ['je', 'länger', 'der Streit', 'dauert,', 'umso', 'schwerer', 'fällt', 'die Versöhnung'], a: ['je länger der streit dauert, umso schwerer fällt die versöhnung'] }
    ] },
    { teil: 'B4', titel: 'Grammatik: das Wort es', anweisung: 'Welche Funktion hat es? Oder: Muss es stehen?', anweisungAr: 'وظائف es: فاعل/مفعول حقيقي، أو فاعل شكلي (es regnet)، أو كلمة تمهيدية لجملة dass أو للمصدر (Es ist wichtig, dass …) وتختفي إذا جاءت الجملة الفرعية أولًا.', typ: 'select', items: [
      { q: 'Wie geht ___ dir? – Danke, gut.', o: ['es', '–'], a: 'es' },
      { q: 'Dass Smalltalk wichtig ist, weiß ___ jeder. (ohne Platzhalter)', o: ['–', 'es'], a: '–' },
      { q: '___ ist unhöflich, den Gesprächspartner nicht anzusehen.', o: ['Es', '–'], a: 'Es' },
      { q: 'Mir gefällt ___, wenn Menschen beim Sprechen lächeln.', o: ['es', '–'], a: 'es' },
      { q: 'Heute regnet ___ schon den ganzen Tag.', o: ['es', '–'], a: 'es' },
      { q: 'Gestern wurde ___ lange über das Problem diskutiert. (Passiv ohne Subjekt, es nicht auf Position 1)', o: ['–', 'es'], a: '–' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Smalltalk und Streit', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort passt am besten?', anweisungAr: 'اختر الرد الأنسب في كل موقف.', typ: 'mcq', items: [
      { q: 'Auf einer Party: „Und, woher kennst du die Gastgeberin?“', o: ['Wir haben zusammen studiert. Und du?', 'Das geht dich nichts an.', 'Ja, ich kenne sie.'], a: 'Wir haben zusammen studiert. Und du?' },
      { q: 'Im Aufzug: „Schreckliches Wetter heute, oder?“', o: ['Ja, wirklich. Hoffentlich wird es am Wochenende besser.', 'Nein.', 'Ich bin kein Meteorologe.'], a: 'Ja, wirklich. Hoffentlich wird es am Wochenende besser.' },
      { q: 'Mitbewohner: „Du hast schon wieder nicht abgewaschen!“ – Sie möchten den Streit entschärfen.', o: ['Du hast recht, das tut mir leid. Lass uns doch einen Putzplan machen.', 'Du wäschst doch auch nie ab!', 'Na und?'], a: 'Du hast recht, das tut mir leid. Lass uns doch einen Putzplan machen.' },
      { q: 'Kollege: „Ich finde, du hättest mich vorher fragen müssen.“', o: ['Ich verstehe, dass dich das ärgert. Beim nächsten Mal spreche ich das vorher mit dir ab.', 'Ich muss dich gar nichts fragen.', 'Das ist dein Problem.'], a: 'Ich verstehe, dass dich das ärgert. Beim nächsten Mal spreche ich das vorher mit dir ab.' },
      { q: 'Sie möchten ein Smalltalk-Gespräch höflich beenden.', o: ['Es war nett, mit Ihnen zu plaudern. Ich muss jetzt leider weiter.', 'Tschüss, ich habe keine Lust mehr.', 'Sie reden zu viel.'], a: 'Es war nett, mit Ihnen zu plaudern. Ich muss jetzt leider weiter.' },
      { q: 'Freundin: „Lass uns das Thema wechseln, wir kommen ja doch nicht auf einen Nenner.“', o: ['Einverstanden. Vielleicht sprechen wir später in Ruhe noch einmal darüber.', 'Nein, ich habe recht!', 'Welcher Nenner?'], a: 'Einverstanden. Vielleicht sprechen wir später in Ruhe noch einmal darüber.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Geeignete Smalltalk-Themen', anweisung: 'Ist das Thema beim ersten Treffen mit Kollegen in Deutschland geeignet?', anweisungAr: 'هل الموضوع مناسب للحديث العابر في أول لقاء مع زملاء في ألمانيا؟', typ: 'select', o: ['geeignet', 'eher ungeeignet'], items: [
      { q: 'das Wetter', a: 'geeignet' },
      { q: 'das Gehalt des Gesprächspartners', a: 'eher ungeeignet' },
      { q: 'Urlaubspläne', a: 'geeignet' },
      { q: 'Krankheiten', a: 'eher ungeeignet' },
      { q: 'Hobbys und Freizeit', a: 'geeignet' },
      { q: 'Religion und Politik', a: 'eher ungeeignet' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe B2 Schreiben Teil 2 (E-Mail)', anweisung: 'Sie haben an einem Kommunikationstraining Ihrer Firma teilgenommen. Leider waren Sie nicht zufrieden. Schreiben Sie eine E-Mail an die Personalabteilung, Frau Wolf (ca. 100 Wörter). Bedanken Sie sich für das Angebot, beschreiben Sie, was Ihnen nicht gefallen hat, und machen Sie einen Verbesserungsvorschlag.', anweisungAr: 'تدريب على امتحان Goethe B2 (الكتابة، الجزء 2): رسالة رسمية (نحو 100 كلمة) إلى قسم شؤون الموظفين بعد دورة تواصل غير مرضية: شكر، وما لم يعجبك، واقتراح للتحسين. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Frau …,\nzunächst möchte ich mich für … bedanken.\nLeider muss ich sagen, dass … / Was mir weniger gefallen hat, war …\nEs wäre wünschenswert, wenn … / Ich würde vorschlagen, …\nIch würde mich freuen, wenn … / Mit freundlichen Grüßen',
      items: [
        { q: 'Ihre E-Mail', min: 90, muster: 'Sehr geehrte Frau Wolf,\nzunächst möchte ich mich herzlich dafür bedanken, dass die Firma uns das Kommunikationstraining angeboten hat. Leider muss ich sagen, dass ich mit dem Seminar nicht ganz zufrieden war. Der Trainer hat fast nur Theorie präsentiert, sodass wir kaum Gelegenheit hatten, schwierige Gespräche selbst zu üben. Außerdem war die Gruppe mit 25 Personen viel zu groß. Je mehr Teilnehmer es gibt, desto weniger kann jeder Einzelne sprechen.\nIch würde deshalb vorschlagen, das Training in kleineren Gruppen und mit mehr Rollenspielen durchzuführen. Es wäre auch wünschenswert, wenn wir vorher eigene Situationen aus dem Arbeitsalltag einreichen könnten.\nMit freundlichen Grüßen\nKarim Hassan' }
    ] }
  ]
};
