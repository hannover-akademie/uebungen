// Netzwerk neu B1 – Kapitel 6: Blick nach vorn
// Grammatik: Futur I, n-Deklination, Relativsätze im Dativ und mit Präposition · Redemittel: Vermutungen, Wünsche, Veränderungen beschreiben, etwas bewerten
// Prüfungstraining: telc B1 Lesen Teil 2 (längerer Text) · Goethe B1 Schreiben Aufgabe 1 (E-Mail)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 6, titel: 'Blick nach vorn',
  titelAr: 'المستقبل والخطط والعزائم – المستقبل (Futur I)، والأسماء الضعيفة (n-Deklination)، وجمل الصلة في Dativ ومع حروف الجر',
  teile: [
    { titel: 'Wortschatz: Zukunft und Vorsätze', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Vorsätze', 'Prognose', 'voraussichtlich', 'gelingt', 'Ausrede', 'irgendwann'], items: [
      { q: 'An Silvester fassen viele Menschen gute ___ für das neue Jahr.', a: 'Vorsätze' },
      { q: 'Die ___ der Experten lautet: Bis 2050 leben mehr Menschen in Städten.', a: 'Prognose' },
      { q: 'Der Zug kommt ___ um 18 Uhr an.', a: 'voraussichtlich' },
      { q: 'Es ___ mir nicht immer, früh aufzustehen.', a: 'gelingt' },
      { q: '„Ich habe keine Zeit“ ist oft nur eine ___.', a: 'Ausrede' },
      { q: '___ möchte ich ein eigenes Haus haben.', a: 'irgendwann' }
    ] },
    { titel: 'Wortschatz: Orte in der Stadt', anweisung: 'Wo ist das? Ordnen Sie zu.', anweisungAr: 'صِل كل وصف بالمكان المناسب في المدينة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Hier lernen Erwachsene Sprachen oder Kochen.', 'die Volkshochschule'],
        ['Hier spielen die Kinder, während die Eltern arbeiten.', 'die Kindertagesstätte'],
        ['Hier kann man verlorene Sachen abholen.', 'das Fundbüro'],
        ['Hier wohnen alte Menschen und werden gepflegt.', 'das Altenheim'],
        ['Hier kann man auch im Winter schwimmen.', 'das Hallenbad'],
        ['Hier gibt es keine Autos, nur Geschäfte und Fußgänger.', 'die Fußgängerzone']
      ] }
    ] },
    { titel: 'Grammatik: Futur I', anweisung: 'Schreiben Sie werden in der richtigen Form.', anweisungAr: 'المستقبل: werden + مصدر في آخر الجملة.', typ: 'gap', items: [
      { q: 'Ich ___ oft in der Bibliothek sein.', a: ['werde'] },
      { q: 'Angelo ___ jeden Tag einen Spaziergang machen.', a: ['wird'] },
      { q: '___ du im nächsten Jahr eine Fortbildung machen?', a: ['Wirst'] },
      { q: 'In Zukunft ___ wir mehr im Homeoffice arbeiten.', a: ['werden'] },
      { q: '___ ihr nach dem Studium in Deutschland bleiben?', a: ['Werdet'] }
    ] },
    { titel: 'Grammatik: Zukunft ausdrücken', anweisung: 'Bauen Sie den Satz im Futur I.', anweisungAr: 'رتّب الجملة في المستقبل: werden في الموقع الثاني والمصدر في آخر الجملة.', typ: 'words', items: [
      { q: 'Futur I (.)', w: ['im Jahr 2050', 'werden', 'viele Menschen', 'in Städten', 'leben'], a: ['im Jahr 2050 werden viele Menschen in Städten leben', 'viele Menschen werden im Jahr 2050 in Städten leben'] },
      { q: 'Futur I (.)', w: ['ich', 'werde', 'nicht mehr', 'alles', 'im letzten Moment', 'machen'], a: ['ich werde nicht mehr alles im letzten Moment machen'] }
    ] },
    { titel: 'Grammatik: n-Deklination', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'بعض الأسماء المذكّرة تأخذ -(e)n في كل الحالات ما عدا الرفع المفرد: der Kollege ← den Kollegen.', typ: 'select', items: [
      { q: 'Siehst du den ___ im Zoo? (der Elefant)', o: ['Elefanten', 'Elefant', 'Elefante'], a: 'Elefanten' },
      { q: 'Das ist das Auto vom ___. (der Nachbar)', o: ['Nachbarn', 'Nachbar', 'Nachbars'], a: 'Nachbarn' },
      { q: 'Ich habe mit dem ___ gesprochen. (der Kunde)', o: ['Kunden', 'Kunde', 'Kundes'], a: 'Kunden' },
      { q: 'Wir suchen einen neuen ___. (der Praktikant)', o: ['Praktikanten', 'Praktikant', 'Praktikante'], a: 'Praktikanten' },
      { q: 'Der ___ hat einen Vortrag gehalten. (der Experte)', o: ['Experte', 'Experten', 'Expertes'], a: 'Experte' },
      { q: 'Kennst du den Namen des ___? (der Journalist)', o: ['Journalisten', 'Journalists', 'Journalist'], a: 'Journalisten' }
    ] },
    { titel: 'Grammatik: Relativsätze im Dativ und mit Präposition', anweisung: 'Ergänzen Sie das Relativpronomen.', anweisungAr: 'ضمير الصلة في Dativ: dem, dem, der، وفي الجمع denen. وحرف الجر يأتي قبل الضمير ويحدّد حالته.', typ: 'select', items: [
      { q: 'Zu Menschen, ___ man oft begegnet, hat man eine engere Beziehung.', o: ['denen', 'die', 'den'], a: 'denen' },
      { q: 'Das ist der Kollege, ___ ich bei der Arbeit helfe.', o: ['dem', 'den', 'der'], a: 'dem' },
      { q: 'Die Frau, ___ ich das Buch geschenkt habe, ist meine Nachbarin.', o: ['der', 'die', 'dem'], a: 'der' },
      { q: 'Alle Dinge, auf ___ man nicht verzichten kann, findet man in der Nähe.', o: ['die', 'denen', 'der'], a: 'die' },
      { q: 'Man trifft Bewohner, mit ___ man sich unterhalten kann.', o: ['denen', 'die', 'den'], a: 'denen' },
      { q: 'Das ist die Stadt, in ___ ich geboren bin.', o: ['der', 'die', 'dem'], a: 'der' }
    ] },
    { titel: 'Redemittel: Vermutungen und Wünsche', anweisung: 'Vermutung oder Wunsch?', anweisungAr: 'هل الجملة توقّع (تخمين) أم أمنية؟', typ: 'select', o: ['Vermutung', 'Wunsch'], items: [
      { q: '„Es wird wahrscheinlich mehr Elektroautos geben.“', a: 'Vermutung' },
      { q: '„Es wäre toll, wenn es mehr Parks gäbe.“', a: 'Wunsch' },
      { q: '„Ich kann mir vorstellen, dass wir weniger arbeiten.“', a: 'Vermutung' },
      { q: '„Ich würde mir wünschen, dass die Luft sauberer wird.“', a: 'Wunsch' },
      { q: '„Möglicherweise wohnen wir dann auf dem Mars.“', a: 'Vermutung' }
    ] },
    { titel: 'Redemittel: Ein Lied bewerten', anweisung: 'Positiv, neutral oder negativ?', anweisungAr: 'هل التقييم إيجابي أم محايد أم سلبي؟', typ: 'select', o: ['positiv', 'neutral', 'negativ'], items: [
      { q: '„Mir gefällt das Lied insgesamt sehr gut.“', a: 'positiv' },
      { q: '„Ich finde, das Lied geht so.“', a: 'neutral' },
      { q: '„Der Text ist total unverständlich.“', a: 'negativ' },
      { q: '„Der Text ist in Ordnung.“', a: 'neutral' },
      { q: '„Ich finde das Lied kitschig und nervig.“', a: 'negativ' },
      { q: '„Der Text ist leicht verständlich und romantisch.“', a: 'positiv' }
    ] },
    { titel: 'Prüfungstraining – telc B1 Lesen Teil 2', anweisung: 'Lesen Sie den Text. Welche Lösung (a, b oder c) ist richtig?', anweisungAr: 'تدريب على امتحان telc B1 (القراءة، الجزء 2): اقرأ النص واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Wohnen im Jahr 2050\nWie werden wir in 30 Jahren wohnen? Experten gehen davon aus, dass dann etwa 70 Prozent der Menschen in Städten leben werden. Wohnraum wird deshalb knapp und teuer sein. Eine Lösung könnten große Wohnanlagen sein, in denen Jung und Alt zusammenleben. In solchen Häusern gibt es Gemeinschaftsräume, in denen sich die Bewohner treffen, und Solarzellen auf dem Dach, mit denen sie ihren eigenen Strom produzieren. Auch die Arbeit wird sich verändern: Viele Menschen werden von zu Hause aus arbeiten, sodass weniger Verkehr entsteht. Kritiker befürchten allerdings, dass das Leben in der Stadt anonymer wird. „Je weniger man das Haus verlässt, desto weniger Menschen begegnet man“, sagt die Soziologin Maria Kern. Sie wünscht sich deshalb mehr Plätze und Parks, in denen sich die Bewohner eines Stadtviertels begegnen können.',
      items: [
        { q: 'Im Jahr 2050 …', o: ['wird es weniger freie Wohnungen in den Städten geben.', 'werden die meisten Menschen auf dem Land wohnen.', 'werden Wohnungen billiger sein.'], a: 'wird es weniger freie Wohnungen in den Städten geben.' },
        { q: 'In den neuen Wohnanlagen …', o: ['leben verschiedene Generationen zusammen.', 'wohnen nur junge Familien.', 'gibt es keinen Strom.'], a: 'leben verschiedene Generationen zusammen.' },
        { q: 'Weil viele Menschen zu Hause arbeiten, …', o: ['wird es weniger Verkehr geben.', 'werden die Büros größer.', 'braucht man mehr Autos.'], a: 'wird es weniger Verkehr geben.' },
        { q: 'Maria Kern findet, dass …', o: ['es mehr Orte für Begegnungen geben sollte.', 'Homeoffice keine Nachteile hat.', 'Städte zu viele Parks haben.'], a: 'es mehr Orte für Begegnungen geben sollte.' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 1', anweisung: 'Ein Freund hat Ihnen zum neuen Jahr geschrieben und nach Ihren Plänen gefragt. Antworten Sie ihm (ca. 80 Wörter): Beschreiben Sie: Was haben Sie sich für das neue Jahr vorgenommen? Begründen Sie: Warum ist Ihnen das wichtig? Machen Sie einen Vorschlag für etwas, was Sie gemeinsam machen könnten.', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 1): ردّ على رسالة صديقك عن خططك للعام الجديد (نحو 80 كلمة) مع النقاط الثلاث: ماذا قررت؟ ولماذا هو مهم لك؟ واقترح نشاطًا مشتركًا. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLieber … / Liebe …, vielen Dank für deine E-Mail!\nIch habe mir vorgenommen, … zu … / Im neuen Jahr werde ich …\nDas ist mir wichtig, weil … / Ich möchte …, damit …\nEs wäre toll, wenn wir … / Hast du Lust, …?\nViele Grüße / Bis bald',
      items: [
        { q: 'Lieber …', min: 70, muster: 'Lieber Jonas,\nvielen Dank für deine E-Mail und frohes neues Jahr! Ich habe mir für dieses Jahr viel vorgenommen. Ich werde jeden Tag eine Stunde Deutsch lernen, weil ich im Sommer die B1-Prüfung machen möchte. Das ist mir sehr wichtig, denn mit dem Zertifikat kann ich mich um eine bessere Stelle bewerben. Außerdem möchte ich mehr Sport machen, damit ich fit bleibe. Es wäre toll, wenn wir zusammen joggen gehen könnten. Hast du am Samstagmorgen Zeit?\nViele Grüße\nYasmin' }
    ] }
  ]
};
