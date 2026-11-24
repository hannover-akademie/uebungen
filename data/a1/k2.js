// Netzwerk neu A1 – Kapitel 2: Freunde, Kollegen und ich
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 2, titel: 'Freunde, Kollegen und ich',
  titelAr: 'الهوايات وأيام الأسبوع والأعداد والمهن',
  teile: [
    { titel: 'Hobbys', anweisung: 'Was macht die Person gern? Wählen Sie.', anweisungAr: 'ماذا يحب هذا الشخص أن يفعل؟ اختر.', typ: 'mcq', items: [
      { q: 'Lisa geht oft ins Schwimmbad. Sie …', o: ['schwimmt gern.', 'kocht gern.', 'tanzt gern.'], a: 'schwimmt gern.' },
      { q: 'Tom hat eine Kamera. Er …', o: ['fotografiert gern.', 'singt gern.', 'joggt gern.'], a: 'fotografiert gern.' },
      { q: 'Maria hat viele Bücher. Sie …', o: ['liest gern.', 'fährt gern.', 'schwimmt gern.'], a: 'liest gern.' },
      { q: 'Paul und Ben sind im Park. Sie spielen …', o: ['Fußball.', 'Kino.', 'Museum.'], a: 'Fußball.' },
      { q: 'Sara ist oft in der Küche. Sie …', o: ['kocht gern.', 'reist gern.', 'tanzt gern.'], a: 'kocht gern.' }
    ] },
    { titel: 'Die Wochentage', anweisung: 'Schreiben Sie den Wochentag.', anweisungAr: 'اكتب يوم الأسبوع.', typ: 'gap', items: [
      { q: 'Montag, Dienstag, ___, Donnerstag', a: ['Mittwoch'] },
      { q: 'Freitag, ___, Sonntag', a: ['Samstag'] },
      { q: 'Der Tag nach Montag ist ___.', a: ['Dienstag'] },
      { q: 'Der Tag vor Freitag ist ___.', a: ['Donnerstag'] },
      { q: 'Das Wochenende: Samstag und ___', a: ['Sonntag'] }
    ] },
    { titel: 'Zahlen ab 20', anweisung: 'Wie heißt die Zahl? Wählen Sie.', anweisungAr: 'كيف يُنطق هذا العدد؟', typ: 'mcq', items: [
      { q: '35', o: ['fünfunddreißig', 'dreiundfünfzig', 'fünfzehn'], a: 'fünfunddreißig' },
      { q: '47', o: ['siebenundvierzig', 'vierundsiebzig', 'siebzehn'], a: 'siebenundvierzig' },
      { q: '62', o: ['zweiundsechzig', 'sechsundzwanzig', 'zwölf'], a: 'zweiundsechzig' },
      { q: '99', o: ['neunundneunzig', 'neunzig', 'neunzehn'], a: 'neunundneunzig' },
      { q: '21', o: ['einundzwanzig', 'zwölf', 'zwanzigeins'], a: 'einundzwanzig' }
    ] },
    { titel: 'Zahlen schreiben', anweisung: 'Schreiben Sie die Zahl mit Ziffern (z. B. 25).', anweisungAr: 'اكتب العدد بالأرقام (مثلًا 25).', typ: 'gap', items: [
      { q: 'achtundzwanzig = ___', a: ['28'] },
      { q: 'einundvierzig = ___', a: ['41'] },
      { q: 'dreiundachtzig = ___', a: ['83'] },
      { q: 'sechsundfünfzig = ___', a: ['56'] },
      { q: 'hundert = ___', a: ['100'] }
    ] },
    { titel: 'Berufe', anweisung: 'Wer arbeitet wo? Ordnen Sie zu.', anweisungAr: 'من يعمل أين؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['der Arzt', 'arbeitet im Krankenhaus.'],
        ['die Lehrerin', 'arbeitet in der Schule.'],
        ['die Kellnerin', 'arbeitet im Restaurant.'],
        ['der Taxifahrer', 'fährt Taxi.'],
        ['die Studentin', 'studiert an der Universität.']
      ] }
    ] },
    { titel: 'Er und sie', anweisung: 'Schreiben Sie die weibliche Form.', anweisungAr: 'اكتب اسم المهنة بصيغة المؤنث.', typ: 'gap', items: [
      { q: 'der Lehrer – die ___', a: ['Lehrerin'] },
      { q: 'der Arzt – die ___', a: ['Ärztin', 'Aerztin'] },
      { q: 'der Koch – die ___', a: ['Köchin', 'Koechin'] },
      { q: 'der Verkäufer – die ___', a: ['Verkäuferin', 'Verkaeuferin'] },
      { q: 'der Kollege – die ___', a: ['Kollegin'] }
    ] },
    { titel: 'Verben', anweisung: 'Schreiben Sie das Verb in der richtigen Form.', anweisungAr: 'اكتب الفعل في صيغته الصحيحة. انتبه إلى الأفعال الشاذة: fahren ← fährt, lesen ← liest.', typ: 'gap', items: [
      { q: 'Herr Weber ___ Taxi. (fahren)', a: ['fährt', 'faehrt'] },
      { q: 'Lisa ___ gern Bücher. (lesen)', a: ['liest'] },
      { q: 'Du ___ sehr gut Deutsch. (sprechen)', a: ['sprichst'] },
      { q: 'Was ___ du am Wochenende? (machen)', a: ['machst'] },
      { q: 'Wir ___ am Samstag Fußball. (spielen)', a: ['spielen'] },
      { q: 'Ihr ___ in Hamburg. (arbeiten)', a: ['arbeitet'] },
      { q: 'Er ___ am Montag frei. (haben)', a: ['hat'] },
      { q: '___ du heute Zeit? (haben)', a: ['Hast'] }
    ] },
    { titel: 'haben oder sein?', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة من haben أو sein.', typ: 'select', items: [
      { q: 'Ich ___ 25 Jahre alt.', o: ['bin', 'habe', 'ist'], a: 'bin' },
      { q: 'Frau Meier ___ zwei Kinder.', o: ['hat', 'ist', 'habt'], a: 'hat' },
      { q: 'Wir ___ Kollegen.', o: ['sind', 'haben', 'seid'], a: 'sind' },
      { q: 'Ihr ___ aus Polen.', o: ['seid', 'habt', 'sind'], a: 'seid' },
      { q: 'Am Sonntag ___ wir frei.', o: ['haben', 'sind', 'habt'], a: 'haben' },
      { q: '___ du Student?', o: ['Bist', 'Hast', 'Ist'], a: 'Bist' }
    ] },
    { titel: 'Der, das oder die?', anweisung: 'Wählen Sie den Artikel.', anweisungAr: 'اختر أداة التعريف.', typ: 'select', o: ['der', 'das', 'die'], items: [
      { q: '___ Buch', a: 'das' }, { q: '___ Kino', a: 'das' }, { q: '___ Freund', a: 'der' }, { q: '___ Universität', a: 'die' },
      { q: '___ Computer', a: 'der' }, { q: '___ Firma', a: 'die' }, { q: '___ Hobby', a: 'das' }, { q: '___ Schule', a: 'die' }
    ] },
    { titel: 'Singular und Plural', anweisung: 'Wie heißt der Plural?', anweisungAr: 'ما صيغة الجمع؟', typ: 'mcq', items: [
      { q: 'das Buch – die …', o: ['Bücher', 'Buchs', 'Buche'], a: 'Bücher' },
      { q: 'das Foto – die …', o: ['Fotos', 'Fotoe', 'Foten'], a: 'Fotos' },
      { q: 'der Freund – die …', o: ['Freunde', 'Freunds', 'Freünde'], a: 'Freunde' },
      { q: 'die Kollegin – die …', o: ['Kolleginnen', 'Kollegine', 'Kollegins'], a: 'Kolleginnen' },
      { q: 'der Kurs – die …', o: ['Kurse', 'Kurser', 'Kürse'], a: 'Kurse' },
      { q: 'die Firma – die …', o: ['Firmen', 'Firmas', 'Firme'], a: 'Firmen' }
    ] },
    { titel: 'Ja/Nein-Fragen', anweisung: 'Bilden Sie Fragen. Das Verb steht am Anfang.', anweisungAr: 'كوّن سؤالًا جوابه نعم أو لا. يأتي الفعل في أول الجملة.', typ: 'words', items: [
      { q: 'Frage (?)', w: ['spielst', 'du', 'gern', 'Fußball'], a: ['spielst du gern Fußball'] },
      { q: 'Frage (?)', w: ['arbeiten', 'Sie', 'am Samstag'], a: ['arbeiten Sie am Samstag'] },
      { q: 'Frage (?)', w: ['hast', 'du', 'heute', 'Zeit'], a: ['hast du heute Zeit'] },
      { q: 'Frage (?)', w: ['ist', 'er', 'Arzt'], a: ['ist er Arzt'] }
    ] },
    { titel: 'Fragen und Antworten', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الرد المناسب.', typ: 'mcq', items: [
      { q: 'Kommst du mit ins Kino?', o: ['Ja, gern.', 'Im Kino.', 'Um acht.'], a: 'Ja, gern.' },
      { q: 'Wann gehen wir ins Café?', o: ['Am Freitag.', 'Ja, gern.', 'Nein, danke.'], a: 'Am Freitag.' },
      { q: 'Was sind Sie von Beruf?', o: ['Ich bin Koch.', 'Ja, ich bin Koch.', 'Am Montag.'], a: 'Ich bin Koch.' },
      { q: 'Sind Sie Lehrerin?', o: ['Nein, ich bin Ärztin.', 'Ich heiße Lehrerin.', 'In der Schule.'], a: 'Nein, ich bin Ärztin.' },
      { q: 'Wie viele Stunden arbeitest du pro Woche?', o: ['Zwanzig Stunden.', 'Am Wochenende.', 'Ja, viel.'], a: 'Zwanzig Stunden.' }
    ] },
    { titel: 'Lesen: Das ist Karim', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Mein Name ist Karim Saleh. Ich bin 34 Jahre alt und wohne in Hannover, in der Bahnhofstraße 12. Ich bin Taxifahrer von Beruf. Ich arbeite 40 Stunden pro Woche. Am Wochenende habe ich frei. Meine Hobbys sind Fußball und Kochen. Am Samstag spiele ich mit Freunden Fußball, und am Sonntag koche ich für meine Familie.',
      items: [
        { q: 'Karim ist 43 Jahre alt.', a: false },
        { q: 'Er wohnt in Hannover.', a: true },
        { q: 'Karim ist Koch von Beruf.', a: false },
        { q: 'Er arbeitet 40 Stunden pro Woche.', a: true },
        { q: 'Am Samstag arbeitet Karim.', a: false },
        { q: 'Am Sonntag kocht Karim.', a: true }
      ] },
    { titel: 'Schreiben: Arbeit und Freizeit', anweisung: 'Schreiben Sie über sich: Was sind Sie von Beruf? Wann arbeiten Sie? Was machen Sie gern in der Freizeit? (ca. 30 Wörter)', anweisungAr: 'اكتب عن نفسك: ما مهنتك؟ ومتى تعمل؟ وماذا تحب أن تفعل في وقت فراغك؟ نحو 30 كلمة.', typ: 'write', items: [
      { q: 'Ich bin …', min: 25, muster: 'Ich bin Krankenpfleger von Beruf. Ich arbeite im Krankenhaus, 38 Stunden pro Woche. Am Mittwoch und am Sonntag habe ich frei. In der Freizeit lese ich gern. Ich spiele auch gern Fußball und koche gern mit Freunden.' }
    ] }
  ]
};
