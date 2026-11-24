// Netzwerk neu A2 – Kapitel 2: Nach der Schulzeit
// Grammatik: Modalverben im Präteritum, Artikel (Nom/Akk/Dat), Possessivartikel im Dativ · Redemittel: Schulzeit, Kommentare, Meinung, zustimmen/ablehnen, präsentieren
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 2, titel: 'Nach der Schulzeit',
  titelAr: 'المدرسة والتعليم والتدريب المهني – الأفعال المساعدة في الماضي، والأدوات، وأدوات الملكية في حالة الـ Dativ',
  teile: [
    { titel: 'Wortschatz: Schule', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة من مفردات المدرسة.', typ: 'select', o: ['Zeugnis', 'Abitur', 'Stundenplan', 'Klassenfahrt', 'Vokabeltest', 'Fremdsprache'], items: [
      { q: 'Am Ende des Schuljahres bekommt man ein ___ mit den Noten.', a: 'Zeugnis' },
      { q: 'Mit dem ___ kann man an der Universität studieren.', a: 'Abitur' },
      { q: 'Auf dem ___ steht: Montag 8 Uhr Mathe, 9 Uhr Englisch.', a: 'Stundenplan' },
      { q: 'Die ganze Klasse fährt fünf Tage nach Berlin. Das ist eine ___.', a: 'Klassenfahrt' },
      { q: 'Wir mussten jede Woche 30 Wörter lernen und einen ___ schreiben.', a: 'Vokabeltest' },
      { q: 'Englisch war meine erste ___.', a: 'Fremdsprache' }
    ] },
    { titel: 'Wortschatz: Schulfächer', anweisung: 'Welches Fach ist das? Ordnen Sie zu.', anweisungAr: 'ما هذه المادة الدراسية؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Länder, Flüsse und Berge', 'Geografie'],
        ['Computer und Programme', 'Informatik'],
        ['Malen und Zeichnen', 'Kunst'],
        ['Zahlen und Rechnen', 'Mathematik'],
        ['die Zeit der Römer und Pharaonen', 'Geschichte'],
        ['Firmen, Geld und Markt', 'Wirtschaft']
      ] }
    ] },
    { titel: 'Wortschatz: Schultypen und Ausbildung', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة عن أنواع المدارس والتدريب المهني.', typ: 'mcq', items: [
      { q: 'Hier gehen Kinder von der 1. bis zur 4. Klasse zur Schule.', o: ['die Grundschule', 'das Gymnasium', 'die Berufsschule'], a: 'die Grundschule' },
      { q: 'Hier macht man nach 12 oder 13 Jahren das Abitur.', o: ['das Gymnasium', 'die Grundschule', 'die Hauptschule'], a: 'das Gymnasium' },
      { q: 'Azubis lernen im Betrieb und gehen auch zur …', o: ['Berufsschule', 'Universität', 'Grundschule'], a: 'Berufsschule' },
      { q: 'Ein Azubi ist ein …', o: ['Auszubildender.', 'Lehrer.', 'Direktor.'], a: 'Auszubildender.' },
      { q: 'Sie hat drei Jahre in einem Hotel gearbeitet. Sie hat viel …', o: ['Berufserfahrung.', 'Vorlesung.', 'Klassenzimmer.'], a: 'Berufserfahrung.' }
    ] },
    { titel: 'Grammatik: Modalverben im Präteritum', anweisung: 'Schreiben Sie das Modalverb im Präteritum.', anweisungAr: 'الأفعال المساعدة في الماضي: musste, konnte, wollte, durfte, sollte (بلا Umlaut).', typ: 'gap', items: [
      { q: 'Ich ___ jeden Tag um sechs Uhr aufstehen. (müssen)', a: ['musste'] },
      { q: 'In der Schule ___ wir keine Handys benutzen. (dürfen)', a: ['durften'] },
      { q: '___ du am Wochenende Sport machen? (können)', a: ['Konntest'] },
      { q: 'Mein Bruder ___ immer Pilot werden. (wollen)', a: ['wollte'] },
      { q: 'Wir ___ jeden Tag 30 Wörter lernen. (sollen)', a: ['sollten'] },
      { q: '___ ihr eine Schuluniform tragen? (müssen)', a: ['Musstet'] },
      { q: 'Am Abend ___ ich meine Freunde treffen. (dürfen)', a: ['durfte'] },
      { q: 'Die Kinder ___ nicht schwimmen. (können)', a: ['konnten'] }
    ] },
    { titel: 'Grammatik: Modalverben – was passt?', anweisung: 'Wählen Sie das passende Modalverb.', anweisungAr: 'اختر الفعل المساعد المناسب للمعنى.', typ: 'select', items: [
      { q: 'Ich hatte viel Freizeit und ___ immer ins Schwimmbad fahren.', o: ['konnte', 'musste', 'sollte'], a: 'konnte' },
      { q: 'Die Lehrerin war streng. Wir ___ keine Fehler machen.', o: ['durften', 'wollten', 'konnten'], a: 'durften' },
      { q: 'Ich habe auf dem Land gewohnt und ___ mit dem Bus zur Schule fahren.', o: ['musste', 'durfte', 'wollte'], a: 'musste' },
      { q: 'Als Kind ___ ich immer erwachsen sein.', o: ['wollte', 'durfte', 'sollte'], a: 'wollte' }
    ] },
    { titel: 'Grammatik: Artikel im Dativ', anweisung: 'Ergänzen Sie den Artikel.', anweisungAr: 'Dativ: dem/einem/keinem/meinem (مذكر ومحايد)، der/einer/meiner (مؤنث)، den/meinen + n (جمع).', typ: 'select', items: [
      { q: 'Ich spreche mit ___ Direktor. (der)', o: ['dem', 'den', 'der'], a: 'dem' },
      { q: 'Sie arbeitet in ___ Werbeagentur. (eine)', o: ['einer', 'einem', 'eine'], a: 'einer' },
      { q: 'Er hat ein Praktikum in ___ Hotel gemacht. (ein)', o: ['einem', 'einer', 'ein'], a: 'einem' },
      { q: 'Wir fahren mit ___ Freunden nach Berlin. (die, Plural)', o: ['den', 'die', 'dem'], a: 'den' },
      { q: 'In ___ Klasse waren 30 Schüler. (meine)', o: ['meiner', 'meinem', 'meine'], a: 'meiner' }
    ] },
    { titel: 'Grammatik: Possessivartikel im Dativ', anweisung: 'Ergänzen Sie den Possessivartikel im Dativ.', anweisungAr: 'أداة الملكية في حالة الـ Dativ: mit ihrem Job, nach seinem Praktikum, in deiner Schule, mit euren Freunden.', typ: 'select', items: [
      { q: 'Sie ist mit ___ Job sehr zufrieden. (ihr Job)', o: ['ihrem', 'ihren', 'ihrer'], a: 'ihrem' },
      { q: 'Er ist nach ___ Praktikum nach Indien gereist. (sein Praktikum)', o: ['seinem', 'seiner', 'seinen'], a: 'seinem' },
      { q: 'Kann man in ___ Schule Abitur machen? (deine Schule)', o: ['deiner', 'deinem', 'deine'], a: 'deiner' },
      { q: 'Im Sommer fahrt ihr mit ___ Freunden nach Berlin. (eure Freunde)', o: ['euren', 'eurem', 'eurer'], a: 'euren' },
      { q: 'Ich wohne noch bei ___ Eltern. (meine Eltern)', o: ['meinen', 'meinem', 'meiner'], a: 'meinen' },
      { q: 'Wir sprechen oft mit ___ Lehrerin. (unsere Lehrerin)', o: ['unserer', 'unserem', 'unseren'], a: 'unserer' }
    ] },
    { titel: 'Redemittel: Über die Schulzeit sprechen', anweisung: 'Welche Antwort passt? Ordnen Sie zu.', anweisungAr: 'صِل كل سؤال عن أيام المدرسة بالإجابة المناسبة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Wie lange musstest du Hausaufgaben machen?', 'Zwei Stunden am Tag.'],
        ['Konntest du am Wochenende Sport machen?', 'Ja, da hatte ich Zeit.'],
        ['Durftest du am Abend Freunde treffen?', 'Nein, nur am Wochenende.'],
        ['Musstest du eine Schuluniform tragen?', 'Nein, ich konnte meine Kleidung selbst wählen.']
      ] }
    ] },
    { titel: 'Redemittel: Zustimmen oder ablehnen?', anweisung: 'Stimmt die Person zu oder lehnt sie ab?', anweisungAr: 'هل يوافق المتحدث أم يرفض؟', typ: 'select', o: ['zustimmen', 'ablehnen'], items: [
      { q: '„Das stimmt.“', a: 'zustimmen' },
      { q: '„Das sehe ich anders.“', a: 'ablehnen' },
      { q: '„Genau.“', a: 'zustimmen' },
      { q: '„So einfach ist das nicht.“', a: 'ablehnen' },
      { q: '„Das ist eine super Idee.“', a: 'zustimmen' },
      { q: '„Ich denke, das geht nicht.“', a: 'ablehnen' }
    ] },
    { titel: 'Redemittel: Kommentare schreiben', anweisung: 'Was passt? Wählen Sie den passenden Kommentar.', anweisungAr: 'اختر التعليق المناسب على المنشور.', typ: 'mcq', items: [
      { q: 'Post: „In meiner Schule mussten wir jeden Tag eine Schuluniform tragen.“', o: ['Das war bei mir auch so. Ich fand das praktisch.', 'Herzlichen Glückwunsch!', 'Ich habe einen Vokabeltest.'], a: 'Das war bei mir auch so. Ich fand das praktisch.' },
      { q: 'Post: „Ich habe erst mit 30 Jahren eine Ausbildung gemacht.“', o: ['Das überrascht mich, weil das sehr spät ist.', 'Das stimmt, das Abitur.', 'Ja, gerne, um acht.'], a: 'Das überrascht mich, weil das sehr spät ist.' },
      { q: 'Post: „Unsere Lehrerin war sehr streng.“', o: ['Das kann ich gut verstehen. Ich hatte auch so eine Lehrerin.', 'Das ist eine super Idee.', 'Einverstanden, bis morgen!'], a: 'Das kann ich gut verstehen. Ich hatte auch so eine Lehrerin.' }
    ] },
    { titel: 'Redemittel: Eine Ausbildung präsentieren', anweisung: 'Ergänzen Sie die Präsentation.', anweisungAr: 'أكمل العرض التقديمي عن تدريب مهني.', typ: 'select', o: ['dauert', 'lernt', 'macht', 'gibt es seit', 'ist bekannt für'], items: [
      { q: 'Die Ausbildung zur Hotelkauffrau ___ drei Jahre.', a: 'dauert' },
      { q: 'Man ___ die Ausbildung in einem Hotel und in der Berufsschule.', a: 'macht' },
      { q: 'In der Ausbildung ___ man, wie man Gäste empfängt.', a: 'lernt' },
      { q: 'Die Universität in Heidelberg ___ 1386.', a: 'gibt es seit' },
      { q: 'Sie ___ Medizin und Jura.', a: 'ist bekannt für' }
    ] },
    { titel: 'Lesen: Erinnerungen an die Schule', anweisung: 'Lesen Sie die Einträge. Richtig oder falsch?', anweisungAr: 'اقرأ المنشورات. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Ole: Ich wollte immer erwachsen sein. Das verstehe ich heute nicht mehr. In der Schule hatte ich so viel Freizeit und sechs Wochen Sommerferien!\nSorin: Ich bin erst mit 14 Jahren nach Deutschland gekommen. Am Anfang war es schwer, weil ich die Sprache nicht sprechen konnte. Aber nach ein paar Monaten hatte ich viele Freunde.\nKati: Wer kennt noch Frau Lindner? Wir sollten jeden Tag 30 Wörter lernen und mussten dreimal pro Woche einen Vokabeltest schreiben. Sie war sehr streng.\nNaef: Ich musste jeden Tag um sechs Uhr aufstehen, weil ich auf dem Land gewohnt habe. Der Bus ist schon um sieben Uhr gefahren.',
      items: [
        { q: 'Ole hatte in der Schulzeit wenig Freizeit.', a: false },
        { q: 'Sorin konnte am Anfang kein Deutsch.', a: true },
        { q: 'Bei Frau Lindner musste man dreimal pro Woche einen Test schreiben.', a: true },
        { q: 'Naef hat in der Stadt gewohnt.', a: false },
        { q: 'Naef ist mit dem Bus zur Schule gefahren.', a: true }
      ] },
    { titel: 'Schreiben: Meine Schulzeit', anweisung: 'Schreiben Sie einen Beitrag für die Plattform „Schulzeit“ (60–80 Wörter): Wo und wie lange sind Sie zur Schule gegangen? Was mussten, durften oder konnten Sie (nicht)? Was war Ihr Lieblingsfach und warum? Was finden Sie heute gut oder nicht gut an Ihrer Schulzeit?', anweisungAr: 'اكتب منشورًا عن أيام مدرستك (60–80 كلمة): أين درست وكم سنة؟ ماذا كان يجب عليك، أو يُسمح لك، أو كنت تستطيع أن تفعل؟ ما مادتك المفضلة ولماذا؟ وما رأيك اليوم في تلك الأيام؟ سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch bin … Jahre in … zur Schule gegangen.\nWir mussten / durften (nicht) / konnten …\nMein Lieblingsfach war …, weil …\nDas war bei mir auch so / nicht so.\nIch finde (nicht) gut, dass … / Das ist meine Meinung.',
      items: [
        { q: 'Meine Schulzeit …', min: 55, muster: 'Ich bin zwölf Jahre in Mansura zur Schule gegangen. Wir mussten jeden Tag eine Schuluniform tragen und durften in der Schule kein Handy benutzen. Die Lehrer waren oft streng, und wir mussten sehr viele Hausaufgaben machen. Mein Lieblingsfach war Geografie, weil ich mich für andere Länder interessiere. Am Nachmittag konnte ich mit meinen Freunden Fußball spielen. Heute finde ich gut, dass wir so viel gelernt haben. Aber ich finde nicht gut, dass wir so wenig Freizeit hatten.' }
    ] }
  ]
};
