// Netzwerk neu B1 – Kapitel 10: Miteinander
// Grammatik: Passiv Präsens, Präteritum, Perfekt, Passiv mit Modalverben · Redemittel: eine Auswahl treffen, eine Präsentation halten
// Prüfungstraining: Goethe B1 Lesen Teil 4 · telc Sprachbausteine · telc B1 Schreiben (formeller Brief)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 10, titel: 'Miteinander',
  titelAr: 'العمل التطوعي والمجتمع والسياسة – المبني للمجهول (Passiv) في المضارع والماضي ومع أفعال الكيفية',
  teile: [
    { titel: 'Wortschatz: Ehrenamt und Gesellschaft', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['ehrenamtlich', 'Verein', 'Spenden', 'Bürgerinitiative', 'Wahl', 'Rechte'], items: [
      { q: 'Meine Mutter arbeitet ___ in einem Altenheim, sie bekommt kein Geld dafür.', a: 'ehrenamtlich' },
      { q: 'Er ist Mitglied in einem ___ für Heimatgeschichte.', a: 'Verein' },
      { q: 'Die Tafel lebt von ___ der Supermärkte.', a: 'Spenden' },
      { q: 'Eine ___ kämpft gegen den Bau der neuen Straße.', a: 'Bürgerinitiative' },
      { q: 'Bei der ___ im September dürfen alle Bürger ab 18 Jahren abstimmen.', a: 'Wahl' },
      { q: 'Jeder Mensch hat ___ und Pflichten.', a: 'Rechte' }
    ] },
    { titel: 'Wortschatz: Politik', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Das deutsche Parlament heißt …', o: ['Bundestag.', 'Bundesland.', 'Rathaus.'], a: 'Bundestag.' },
      { q: 'Deutschland besteht aus 16 …', o: ['Bundesländern.', 'Parteien.', 'Gemeinden.'], a: 'Bundesländern.' },
      { q: 'Wer gewählt werden will, muss Mitglied einer … sein oder als Einzelkandidat antreten.', o: ['Partei', 'Firma', 'Behörde'], a: 'Partei' },
      { q: 'Viele Menschen … gegen die hohen Mieten.', o: ['demonstrieren', 'regieren', 'spenden'], a: 'demonstrieren' },
      { q: 'Die Bürgermeisterin wird von den Bürgern …', o: ['gewählt.', 'gegründet.', 'gesammelt.'], a: 'gewählt.' }
    ] },
    { titel: 'Grammatik: Passiv Präsens', anweisung: 'Ergänzen Sie werden in der richtigen Form.', anweisungAr: 'المبني للمجهول في المضارع: werden + Partizip II.', typ: 'select', items: [
      { q: 'Das Essen ___ jeden Tag an Bedürftige verteilt.', o: ['wird', 'werden', 'wurde'], a: 'wird' },
      { q: 'Die Lebensmittel ___ von Supermärkten gespendet.', o: ['werden', 'wird', 'worden'], a: 'werden' },
      { q: 'Im Verein ___ viel gelacht.', o: ['wird', 'werden', 'ist'], a: 'wird' },
      { q: 'Die Kinder ___ von Freiwilligen betreut.', o: ['werden', 'wird', 'sind worden'], a: 'werden' },
      { q: 'In Deutschland ___ alle vier Jahre ein neuer Bundestag gewählt.', o: ['wird', 'werden', 'wurden'], a: 'wird' }
    ] },
    { titel: 'Grammatik: Passiv Präteritum und Perfekt', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'الماضي: wurde + Partizip II، والتام: ist + Partizip II + worden (وليس geworden).', typ: 'select', items: [
      { q: 'Der Verein ___ 1995 gegründet.', o: ['wurde', 'wird', 'worden'], a: 'wurde' },
      { q: 'Die Tafel ist 1993 in Berlin gegründet ___.', o: ['worden', 'geworden', 'wurde'], a: 'worden' },
      { q: 'Früher ___ die Briefe mit der Hand geschrieben.', o: ['wurden', 'wurde', 'werden worden'], a: 'wurden' },
      { q: 'Das Rathaus ___ letztes Jahr renoviert worden.', o: ['ist', 'hat', 'wird'], a: 'ist' },
      { q: 'Wann ___ die Mauer in Berlin geöffnet? – 1989.', o: ['wurde', 'wird', 'ist'], a: 'wurde' }
    ] },
    { titel: 'Grammatik: Passiv mit Modalverben', anweisung: 'Bauen Sie den Satz im Passiv.', anweisungAr: 'المبني للمجهول مع فعل الكيفية: Modalverb + Partizip II + werden في آخر الجملة.', typ: 'words', items: [
      { q: 'Passiv mit Modalverb (.)', w: ['der Müll', 'muss', 'getrennt', 'werden'], a: ['der müll muss getrennt werden'] },
      { q: 'Passiv mit Modalverb (.)', w: ['im Park', 'dürfen', 'keine Hunde', 'mitgenommen', 'werden'], a: ['im park dürfen keine hunde mitgenommen werden', 'keine hunde dürfen im park mitgenommen werden'] },
      { q: 'Passiv mit Modalverb (.)', w: ['das Formular', 'kann', 'auch', 'online', 'ausgefüllt', 'werden'], a: ['das formular kann auch online ausgefüllt werden', 'das formular kann online auch ausgefüllt werden'] }
    ] },
    { titel: 'Grammatik: Aktiv oder Passiv?', anweisung: 'Formen Sie den Satz ins Passiv um. Ergänzen Sie das Partizip.', anweisungAr: 'حوّل الجملة إلى المبني للمجهول: اكتب التصريف الثالث (Partizip II).', typ: 'gap', items: [
      { q: 'Man repariert die Fahrräder kostenlos. → Die Fahrräder werden kostenlos ___.', a: ['repariert'] },
      { q: 'Man hat das Fest abgesagt. → Das Fest ist ___ worden.', a: ['abgesagt'] },
      { q: 'Man lud alle Nachbarn ein. → Alle Nachbarn wurden ___.', a: ['eingeladen'] },
      { q: 'Man muss die Miete pünktlich bezahlen. → Die Miete muss pünktlich ___ werden.', a: ['bezahlt'] }
    ] },
    { titel: 'Redemittel: Eine Auswahl treffen', anweisung: 'Ergänzen Sie das Gespräch.', anweisungAr: 'أكمل الحوار: الاتفاق على اختيار.', typ: 'select', o: ['Was hältst du von', 'Ich bin dafür, dass', 'Das finde ich keine gute Idee', 'Einverstanden', 'Wofür entscheiden wir uns'], items: [
      { q: 'A: ___ dem Projekt „Lesepaten“?', a: 'Was hältst du von' },
      { q: 'B: ___, denn wir haben zu wenig Zeit.', a: 'Das finde ich keine gute Idee' },
      { q: 'A: ___ wir das Sommerfest organisieren.', a: 'Ich bin dafür, dass' },
      { q: 'B: ___! Das machen wir.', a: 'Einverstanden' },
      { q: 'A: Also, ___ am Ende?', a: 'Wofür entscheiden wir uns' }
    ] },
    { titel: 'Redemittel: Eine Präsentation halten', anweisung: 'Bringen Sie die Teile der Präsentation in die richtige Reihenfolge.', anweisungAr: 'رتّب أجزاء العرض التقديمي.', typ: 'order', items: [
      { q: 'Präsentation „Die Tafel“', lines: [
        'In meiner Präsentation geht es um die Tafel.',
        'Zuerst erkläre ich, was die Tafel ist.',
        'Danach berichte ich über meine eigenen Erfahrungen.',
        'Zum Schluss sage ich meine Meinung zu diesem Projekt.',
        'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?'
      ] }
    ] },
    { titel: 'Prüfungstraining – Goethe B1 Lesen Teil 4', anweisung: 'Lesen Sie die Leserbriefe zum Thema „Sollte ein soziales Jahr für alle Jugendlichen Pflicht sein?“. Ist die Person für eine Pflicht?', anweisungAr: 'تدريب على امتحان Goethe B1 (القراءة، الجزء 4): هل الشخص مؤيّد لأن تكون سنة الخدمة الاجتماعية إلزامية (Ja) أم لا (Nein)؟', typ: 'select', o: ['Ja', 'Nein'],
      text: '1 Jana (18): Nach der Schule möchte ich sofort studieren. Niemand sollte mich zwingen, ein Jahr zu verlieren.\n2 Herr Özdemir (52): Im Krankenhaus fehlen überall Leute. Wenn jeder junge Mensch ein Jahr helfen müsste, würde allen geholfen.\n3 Frau Lange (40): Mein Sohn hat freiwillig in einem Kindergarten gearbeitet und dabei viel gelernt. Aber freiwillig ist das Wort, das wichtig ist.\n4 Paul (23): Ich finde, alle sollten einmal erleben, wie schwer manche Menschen es haben. Deshalb muss ein solches Jahr für alle eingeführt werden.\n5 Elif (30): Ehrenamt macht nur Spaß, wenn man es selbst will. Mit Zwang erreicht man das Gegenteil.',
      items: [
        { q: 'Jana', a: 'Nein' },
        { q: 'Herr Özdemir', a: 'Ja' },
        { q: 'Frau Lange', a: 'Nein' },
        { q: 'Paul', a: 'Ja' },
        { q: 'Elif', a: 'Nein' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Sprachbausteine', anweisung: 'Welches Wort (a, b oder c) passt in die Lücken 1–5?', anweisungAr: 'تدريب على Sprachbausteine في telc B1: اختر الكلمة المناسبة لكل فراغ.', typ: 'select',
      text: 'Unser Nachbarschaftsfest\nDas Fest in der Gartenstraße __(1)__ jedes Jahr im Juni gefeiert. Letztes Jahr __(2)__ über 200 Gäste begrüßt. Die Tische und Bänke werden von der Stadt __(3)__. Für das Essen sorgen die Nachbarn: Jede Familie bringt etwas mit, __(4)__ ein großes Buffet entsteht. Wer helfen möchte, __(5)__ sich bis zum 15. Mai bei Frau Wagner melden.',
      items: [
        { q: 'Lücke 1: ___', o: ['wird', 'ist', 'hat'], a: 'wird' },
        { q: 'Lücke 2: ___', o: ['wurden', 'wurde', 'werden'], a: 'wurden' },
        { q: 'Lücke 3: ___', o: ['geliehen', 'leihen', 'geliehen worden'], a: 'geliehen' },
        { q: 'Lücke 4: ___', o: ['sodass', 'damit', 'obwohl'], a: 'sodass' },
        { q: 'Lücke 5: ___', o: ['kann', 'wird', 'ist'], a: 'kann' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Schreiben (formeller Brief)', anweisung: 'Sie möchten bei der Tafel in Ihrer Stadt ehrenamtlich mitarbeiten. Schreiben Sie an Herrn Becker, den Leiter der Tafel (ca. 80 Wörter). Schreiben Sie: warum Sie helfen möchten, wann Sie Zeit haben, welche Erfahrungen Sie haben, was Sie noch wissen möchten.', anweisungAr: 'تدريب على امتحان telc B1 (الكتابة): رسالة رسمية (نحو 80 كلمة) لعرض العمل التطوعي، تتناول النقاط الأربع كلها. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrter Herr …,\nich habe gelesen, dass … gesucht werden. / Ich möchte mich gern … engagieren, weil …\nIch habe … Zeit. / Ich habe schon Erfahrung mit …\nIch würde gern wissen, ob … / Könnten Sie mir bitte sagen, …?\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen',
      items: [
        { q: 'Sehr geehrter Herr Becker, …', min: 70, muster: 'Sehr geehrter Herr Becker,\nich habe in der Zeitung gelesen, dass bei der Tafel Helfer gesucht werden. Ich möchte mich gern ehrenamtlich engagieren, weil ich selbst Hilfe bekommen habe, als ich nach Deutschland gekommen bin. Ich habe jeden Samstag und am Mittwochnachmittag Zeit. In meiner Heimat Ägypten habe ich schon in einem Verein Essen an arme Familien verteilt. Könnten Sie mir bitte sagen, ob ich vorher an einer Schulung teilnehmen muss?\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSara Fathy' }
    ] }
  ]
};
