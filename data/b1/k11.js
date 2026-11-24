// Netzwerk neu B1 – Kapitel 11: Stadt, Land, Fluss
// Grammatik: Artikelwörter als Pronomen, irgendein-/irgendwo…, Adjektive als Nomen, Relativsätze mit was und wo · Redemittel: zwischen Personen vermitteln, Briefe und E-Mails
// Prüfungstraining: telc B1 Lesen Teil 1 (Überschriften) · telc B1 Schreiben (halbformelle E-Mail)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 11, titel: 'Stadt, Land, Fluss',
  titelAr: 'المدينة والريف والسفر – أدوات التعريف كضمائر، و irgendein، والصفات كأسماء، وجمل الصلة مع was و wo',
  teile: [
    { titel: 'Wortschatz: Landschaften', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Ufer', 'Gipfel', 'Insel', 'Wald', 'Küste', 'Tal'], items: [
      { q: 'Wir haben am ___ des Flusses gepicknickt.', a: 'Ufer' },
      { q: 'Nach vier Stunden Wandern standen wir endlich auf dem ___.', a: 'Gipfel' },
      { q: 'Rügen ist eine ___ in der Ostsee.', a: 'Insel' },
      { q: 'Im ___ kann man Pilze sammeln.', a: 'Wald' },
      { q: 'An der ___ gibt es viele schöne Strände.', a: 'Küste' },
      { q: 'Das Dorf liegt unten im ___ zwischen zwei Bergen.', a: 'Tal' }
    ] },
    { titel: 'Wortschatz: Stadt und Land', anweisung: 'Stadt oder Land? Was passt eher?', anweisungAr: 'هل الجملة تصف الحياة في المدينة أم في الريف غالبًا؟', typ: 'select', o: ['Stadt', 'Land'], items: [
      { q: 'Es gibt viel Verkehr und hohe Mieten.', a: 'Stadt' },
      { q: 'Man hat viel Natur, aber der Bus fährt nur zweimal am Tag.', a: 'Land' },
      { q: 'Das kulturelle Angebot ist groß: Theater, Kinos, Museen.', a: 'Stadt' },
      { q: 'Jeder kennt jeden im Dorf.', a: 'Land' },
      { q: 'Viele Menschen leben anonym nebeneinander.', a: 'Stadt' }
    ] },
    { titel: 'Grammatik: Artikelwörter als Pronomen', anweisung: 'Ergänzen Sie das Pronomen.', anweisungAr: 'einer/eins/eine و keiner/keins/keine و meiner/meins/meine تُستخدم بدل الاسم.', typ: 'select', items: [
      { q: 'Hast du einen Stadtplan? – Ja, ich habe ___.', o: ['einen', 'einer', 'eins'], a: 'einen' },
      { q: 'Brauchst du ein Fahrrad? – Nein, ich habe schon ___.', o: ['eins', 'einen', 'eine'], a: 'eins' },
      { q: 'Gibt es hier eine Apotheke? – Nein, hier gibt es ___.', o: ['keine', 'keinen', 'keins'], a: 'keine' },
      { q: 'Ist das dein Koffer? – Ja, das ist ___.', o: ['meiner', 'meinen', 'meins'], a: 'meiner' },
      { q: 'Wem gehört das Handy? Ist das ___? (du)', o: ['deins', 'deiner', 'deine'], a: 'deins' },
      { q: 'Ich suche einen Parkplatz, aber ich finde ___.', o: ['keinen', 'keiner', 'keins'], a: 'keinen' }
    ] },
    { titel: 'Grammatik: irgendein, irgendwo, irgendwann …', anweisung: 'Ergänzen Sie.', anweisungAr: 'irgend- = أيّ/ما غير محدّد: irgendwo (في مكانٍ ما)، irgendwann (في وقتٍ ما)، irgendwer (شخصٌ ما)، irgendetwas (شيءٌ ما).', typ: 'select', o: ['irgendwo', 'irgendwann', 'irgendwer', 'irgendetwas', 'irgendeinen'], items: [
      { q: 'Ich habe meinen Schlüssel ___ verloren, aber ich weiß nicht, wo.', a: 'irgendwo' },
      { q: '___ möchte ich auf dem Land leben.', a: 'irgendwann' },
      { q: 'Hat ___ meine Jacke gesehen?', a: 'irgendwer' },
      { q: 'Ich habe Hunger. Gibt es noch ___ zu essen?', a: 'irgendetwas' },
      { q: 'Kannst du mir ___ Film empfehlen? Egal welchen.', a: 'irgendeinen' }
    ] },
    { titel: 'Grammatik: Adjektive als Nomen', anweisung: 'Ergänzen Sie die Endung.', anweisungAr: 'الصفة التي تُستخدم كاسم تأخذ نهايات الصفة: der Deutsche, ein Deutscher, die Bekannten.', typ: 'gap', items: [
      { q: 'Mein Bekannt___ (m) wohnt in einem kleinen Dorf.', a: ['er'] },
      { q: 'Die Jugendlich___ (Plural) treffen sich abends am Fluss.', a: ['en'] },
      { q: 'Eine Verwandt___ (f) von mir lebt in Hamburg.', a: ['e'] },
      { q: 'In der Stadt sieht man viele Fremd___. (Plural, ohne Artikel)', a: ['e'] },
      { q: 'Ich habe mit dem Angestellt___ (m) in der Touristeninformation gesprochen.', a: ['en'] }
    ] },
    { titel: 'Grammatik: Relativsätze mit was und wo', anweisung: 'Ergänzen Sie was oder wo.', anweisungAr: 'was بعد alles, nichts, etwas, das (Superlativ) أو بعد جملة كاملة، و wo بعد الأماكن.', typ: 'select', o: ['was', 'wo'], items: [
      { q: 'Das ist das Dorf, ___ meine Großeltern wohnen.', a: 'wo' },
      { q: 'Es gibt nichts, ___ mir hier nicht gefällt.', a: 'was' },
      { q: 'Das Schönste, ___ ich auf der Reise gesehen habe, war der See.', a: 'was' },
      { q: 'In der Stadt, ___ ich studiert habe, gibt es viele Kneipen.', a: 'wo' },
      { q: 'Er zieht aufs Land, ___ ich gut verstehen kann.', a: 'was' },
      { q: 'Alles, ___ du brauchst, findest du im Supermarkt.', a: 'was' }
    ] },
    { titel: 'Redemittel: Zwischen Personen vermitteln', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل عبارات الوساطة بين شخصين مختلفين في الرأي.', typ: 'select', o: ['Ich verstehe beide Seiten', 'Wie wäre es, wenn', 'Vielleicht könnte man', 'Einerseits', 'Das ist ein guter Kompromiss'], items: [
      { q: '___. Ihr habt beide gute Argumente.', a: 'Ich verstehe beide Seiten' },
      { q: '___ ihr euch abwechselt?', a: 'Wie wäre es, wenn' },
      { q: '___ das Problem gemeinsam lösen.', a: 'Vielleicht könnte man' },
      { q: '___ ist die Stadt praktisch, andererseits ist das Land ruhiger.', a: 'Einerseits' },
      { q: 'Ein Jahr Stadt, ein Jahr Land? ___!', a: 'Das ist ein guter Kompromiss' }
    ] },
    { titel: 'Redemittel: Formell oder informell?', anweisung: 'Passt der Ausdruck in einen formellen Brief oder in eine E-Mail an einen Freund?', anweisungAr: 'هل التعبير مناسب لرسالة رسمية أم لرسالة إلى صديق؟', typ: 'select', o: ['formell', 'informell'], items: [
      { q: 'Sehr geehrte Damen und Herren,', a: 'formell' },
      { q: 'Hallo Max,', a: 'informell' },
      { q: 'Ich bitte Sie um eine schnelle Antwort.', a: 'formell' },
      { q: 'Melde dich mal!', a: 'informell' },
      { q: 'Mit freundlichen Grüßen', a: 'formell' },
      { q: 'Liebe Grüße', a: 'informell' }
    ] },
    { titel: 'Prüfungstraining – telc B1 Lesen Teil 1', anweisung: 'Lesen Sie die Texte 1–4 und die Überschriften a–f. Welche Überschrift passt zu welchem Text? Zwei Überschriften passen nicht.', anweisungAr: 'تدريب على امتحان telc B1 (القراءة، الجزء 1): اختر العنوان المناسب لكل نص. عنوانان لا يُستخدمان.', typ: 'select', o: ['a) Immer mehr junge Familien ziehen aufs Land', 'b) Neue Busverbindung für Dörfer', 'c) Fluss wird wieder sauber', 'd) Stadt baut neue Wohnungen', 'e) Mehr Touristen an der Küste', 'f) Rathaus wird renoviert'],
      text: '1 Noch vor 30 Jahren konnte man im Rhein nicht schwimmen. Heute leben dort wieder Lachse, und an vielen Stellen ist das Baden erlaubt. Das Wasser wurde durch moderne Kläranlagen deutlich besser.\n2 Ab Montag fährt der Bus 412 stündlich von Neustadt nach Bergheim und hält in fünf kleinen Orten. Bisher gab es dort nur eine Verbindung am Morgen und eine am Abend.\n3 Hohe Mieten in den Großstädten, ruhige Dörfer und schnelles Internet: Immer mehr Eltern mit kleinen Kindern verlassen die Stadt. Viele Dörfer, die früher leer wurden, wachsen wieder.\n4 Die Hotels an der Nordsee sind in diesem Sommer fast ausgebucht. Im Vergleich zum Vorjahr kamen 15 Prozent mehr Gäste, viele davon aus dem Ausland.',
      items: [
        { q: 'Text 1', a: 'c) Fluss wird wieder sauber' },
        { q: 'Text 2', a: 'b) Neue Busverbindung für Dörfer' },
        { q: 'Text 3', a: 'a) Immer mehr junge Familien ziehen aufs Land' },
        { q: 'Text 4', a: 'e) Mehr Touristen an der Küste' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Schreiben', anweisung: 'Sie haben ein Wochenende in einer Pension auf dem Land gebucht, müssen aber den Termin ändern. Schreiben Sie eine E-Mail an Frau Huber, die Besitzerin der Pension (ca. 80 Wörter). Schreiben Sie: warum Sie nicht kommen können, einen neuen Termin, Frage nach einem Zimmer mit Balkon, Frage nach Ausflugsmöglichkeiten in der Umgebung.', anweisungAr: 'تدريب على امتحان telc B1 (الكتابة): رسالة شبه رسمية (نحو 80 كلمة) لتغيير موعد الحجز، تتناول النقاط الأربع كلها. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe Frau …, / Sehr geehrte Frau …,\nleider muss ich … absagen / verschieben, weil …\nWäre es möglich, dass wir … ? / Hätten Sie vielleicht am … ein Zimmer frei?\nAußerdem würde ich gern wissen, ob … / Können Sie mir etwas empfehlen, was …?\nViele Grüße / Mit freundlichen Grüßen',
      items: [
        { q: 'Liebe Frau Huber, …', min: 70, muster: 'Liebe Frau Huber,\nich habe bei Ihnen ein Zimmer vom 12. bis 14. Juni gebucht. Leider muss ich den Termin verschieben, weil meine Schwester an diesem Wochenende heiratet. Hätten Sie vielleicht vom 26. bis 28. Juni ein Zimmer frei? Wir würden uns sehr über ein Zimmer mit Balkon freuen, wo wir abends draußen sitzen können. Außerdem würde ich gern wissen, was man in der Umgebung unternehmen kann. Gibt es irgendwo einen See, wo man baden kann?\nVielen Dank im Voraus und viele Grüße\nOmar Saleh' }
    ] }
  ]
};
